from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

# --- Models ---
class HelpfulPhrase(BaseModel):
    text: str = ""
    pronunciation: str = ""
    meaning: str = ""
    tone: str = ""

class Scenario(BaseModel):
    id: str
    title: str
    what_it_means: str
    normalcy: str  # "normal", "sometimes_normal", "red_flag"
    what_to_do: List[str]
    what_not_to_do: List[str]
    helpful_phrase: HelpfulPhrase
    reassurance: str

class Category(BaseModel):
    model_config = ConfigDict(extra="ignore")
    slug: str
    name: str
    icon: str
    description: str
    image: str
    order: int
    city: str = "delhi_ncr"
    scenarios: List[Scenario]

class CategorySummary(BaseModel):
    slug: str
    name: str
    icon: str
    description: str
    image: str
    order: int
    city: str = "delhi_ncr"
    scenario_count: int

class FeedbackCreate(BaseModel):
    scenario_id: str
    helpful: bool
    tags: List[str] = []
    note: str = ""
    device_id: str
    timestamp: Optional[str] = None

class FeedbackResponse(BaseModel):
    id: str
    scenario_id: str
    helpful: bool
    tags: List[str]
    note: str
    device_id: str
    timestamp: str

# --- Seed Data ---
SEED_DATA = [
    {
        "slug": "transport",
        "name": "Transport & Taxis",
        "icon": "CarTaxiFront",
        "description": "Auto-rickshaws, cabs, ride apps",
        "image": "https://images.unsplash.com/photo-1763225398132-1e9985d9dacc?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
        "order": 1,
        "scenarios": [
            {
                "id": "transport-1",
                "title": "Driver quoting high price",
                "what_it_means": "Standard practice for auto-rickshaw drivers in Delhi to quote 2-3x the actual fare to foreigners. This is negotiation culture.",
                "normalcy": "normal",
                "what_to_do": ["Ask 'Meter chalao' (Turn on the meter)", "Check Google Maps distance and offer 10-15 Rs/km", "Walk to the next auto if they refuse"],
                "what_not_to_do": ["Don't get angry", "Don't pay the first price", "Don't argue loudly"],
                "helpful_phrase": {"text": "Bhaiya, meter se chalenge", "pronunciation": "BHY-ya, MEE-ter say cha-LEN-gay", "meaning": "Brother, let's go by meter", "tone": "Polite but firm"},
                "reassurance": "This is completely normal — every local negotiates too."
            }
        ]
    }
]

async def seed_database():
    """Seed database with scenario data if empty."""
    count = await db.categories.count_documents({})
    if count == 0:
        logger.info("Seeding database with scenario data...")
        # We only store a minimal seed — frontend has full data
        # Backend serves as future expansion point
        from scenarios_seed import get_seed_data
        try:
            seed = get_seed_data()
            for cat in seed:
                await db.categories.insert_one(cat)
            logger.info(f"Seeded {len(seed)} categories")
        except Exception as e:
            logger.warning(f"Seed file not found, using minimal seed: {e}")
            for cat in SEED_DATA:
                await db.categories.insert_one(cat)
            logger.info("Seeded with minimal data")


# --- Routes ---
@api_router.get("/")
async def root():
    return {"message": "IndiGuide API", "version": "1.0.0"}

@api_router.get("/categories", response_model=List[CategorySummary])
async def get_categories():
    cats = await db.categories.find({}, {"_id": 0}).sort("order", 1).to_list(100)
    result = []
    for c in cats:
        result.append({
            "slug": c["slug"],
            "name": c["name"],
            "icon": c["icon"],
            "description": c["description"],
            "image": c["image"],
            "order": c["order"],
            "city": c.get("city", "delhi_ncr"),
            "scenario_count": len(c.get("scenarios", []))
        })
    return result

@api_router.get("/categories/{slug}")
async def get_category(slug: str):
    cat = await db.categories.find_one({"slug": slug}, {"_id": 0})
    if not cat:
        raise HTTPException(status_code=404, detail="Category not found")
    return cat

@api_router.get("/categories/{slug}/scenarios/{scenario_id}")
async def get_scenario(slug: str, scenario_id: str):
    cat = await db.categories.find_one({"slug": slug}, {"_id": 0})
    if not cat:
        raise HTTPException(status_code=404, detail="Category not found")
    for s in cat.get("scenarios", []):
        if s["id"] == scenario_id:
            return {**s, "category_name": cat["name"], "category_slug": cat["slug"]}
    raise HTTPException(status_code=404, detail="Scenario not found")

@api_router.get("/health")
async def health():
    return {"status": "ok", "timestamp": datetime.now(timezone.utc).isoformat()}

# --- Feedback endpoints ---
@api_router.post("/feedback", response_model=FeedbackResponse)
async def create_feedback(feedback: FeedbackCreate):
    entry = {
        "id": str(uuid.uuid4()),
        "scenario_id": feedback.scenario_id,
        "helpful": feedback.helpful,
        "tags": feedback.tags[:3],  # max 3 tags
        "note": feedback.note[:200] if feedback.note else "",
        "device_id": feedback.device_id,
        "timestamp": feedback.timestamp or datetime.now(timezone.utc).isoformat(),
    }
    await db.feedback_entries.insert_one(entry)
    return {k: v for k, v in entry.items() if k != "_id"}

@api_router.get("/feedback/summary")
async def feedback_summary():
    pipeline = [
        {
            "$group": {
                "_id": "$scenario_id",
                "total": {"$sum": 1},
                "helpful_count": {"$sum": {"$cond": ["$helpful", 1, 0]}},
                "not_helpful_count": {"$sum": {"$cond": ["$helpful", 0, 1]}},
            }
        },
        {"$sort": {"total": -1}},
    ]
    results = await db.feedback_entries.aggregate(pipeline).to_list(1000)
    summary = {}
    for r in results:
        total = r["total"]
        summary[r["_id"]] = {
            "scenario_id": r["_id"],
            "total": total,
            "helpful_count": r["helpful_count"],
            "not_helpful_count": r["not_helpful_count"],
            "helpful_percentage": round((r["helpful_count"] / total) * 100, 1) if total > 0 else 0,
        }
    return summary

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup_event():
    await seed_database()
    # Create indexes for feedback_entries
    await db.feedback_entries.create_index("scenario_id")
    await db.feedback_entries.create_index("helpful")
    await db.feedback_entries.create_index("timestamp")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
