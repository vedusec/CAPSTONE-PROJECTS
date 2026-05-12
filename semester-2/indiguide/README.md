# IndiGuide — Real-time Situational Guidance for Travelers in India

A mobile-first Progressive Web App (PWA) that helps foreign travelers interpret confusing real-world situations in India and decide the correct next action in real time.

**Not** a travel blog, itinerary planner, or chatbot. A cultural navigation tool.

---

## Project Structure

```
indiguide/
├── backend/
│   ├── .env.example              # Backend environment template
│   ├── requirements.txt          # Python dependencies
│   ├── server.py                 # FastAPI application (API + seeding)
│   └── scenarios_seed.py         # Full seed data (7 categories, 35 scenarios)
│
├── frontend/
│   ├── public/
│   │   ├── index.html            # HTML shell with PWA meta tags
│   │   ├── manifest.json         # PWA manifest (icons, theme, standalone)
│   │   ├── sw.js                 # Service Worker (offline caching)
│   │   ├── icon-192.png          # PWA icon 192x192
│   │   └── icon-512.png          # PWA icon 512x512
│   │
│   ├── src/
│   │   ├── index.js              # Entry point + SW registration
│   │   ├── index.css             # Global styles + Tailwind + CSS variables
│   │   ├── App.js                # Router (3 routes)
│   │   ├── App.css               # Component styles
│   │   │
│   │   ├── pages/
│   │   │   ├── HomePage.js       # Category bento grid
│   │   │   ├── CategoryPage.js   # Scenario list for a category
│   │   │   └── ScenarioPage.js   # Full guidance + feedback card
│   │   │
│   │   ├── components/
│   │   │   ├── BackHeader.js     # Sticky back navigation header
│   │   │   ├── NormalcyBadge.js  # Normal / Sometimes normal / Red flag
│   │   │   ├── FeedbackCard.js   # "Did this help?" feedback widget
│   │   │   └── ui/              # Shadcn UI components (40+ components)
│   │   │
│   │   ├── data/
│   │   │   └── scenarios.js      # All 35 scenarios (offline-first data)
│   │   │
│   │   ├── lib/
│   │   │   ├── feedbackQueue.js  # Offline feedback queue + device ID
│   │   │   └── utils.js          # Tailwind merge utility
│   │   │
│   │   └── hooks/
│   │       └── use-toast.js      # Toast hook
│   │
│   ├── .env.example              # Frontend environment template
│   ├── package.json              # Node dependencies
│   ├── craco.config.js           # CRA override config (@ alias)
│   ├── jsconfig.json             # Path aliases
│   ├── tailwind.config.js        # Tailwind CSS config
│   ├── postcss.config.js         # PostCSS config
│   └── components.json           # Shadcn UI config
│
└── README.md                     # This file
```

---

## Tech Stack

| Layer    | Technology                          |
|----------|-------------------------------------|
| Frontend | React 19, Tailwind CSS 3, Shadcn UI |
| Backend  | Python 3.10+, FastAPI, Motor        |
| Database | MongoDB 6+                          |
| PWA      | Service Worker, Web App Manifest    |
| Icons    | Lucide React                        |
| Fonts    | Barlow Condensed + Archivo (Google) |

---

## Prerequisites

- **Python** 3.10 or higher
- **Node.js** 18+ and **Yarn** 1.22+
- **MongoDB** 6.0+ (running locally or remote)

---

## Setup & Run Locally

### 1. Clone / Extract

```bash
# If from archive:
tar -xzf indiguide.tar.gz
cd indiguide
```

### 2. Backend Setup

```bash
cd backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # Linux/Mac
# venv\Scripts\activate   # Windows

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env if your MongoDB is not on localhost:27017

# Start the server
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

The backend will:
- Connect to MongoDB
- Auto-seed 7 categories with 35 scenarios on first startup
- Serve API at `http://localhost:8001/api`

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
yarn install

# Configure environment
cp .env.example .env
# Edit .env — set REACT_APP_BACKEND_URL to your backend URL

# Start dev server
yarn start
```

Frontend runs at `http://localhost:3000`

### 4. Verify Everything Works

```bash
# Check backend health
curl http://localhost:8001/api/health

# Check categories loaded (should return 7)
curl http://localhost:8001/api/categories | python3 -c "import sys,json; print(len(json.load(sys.stdin)), 'categories')"

# Check specific category (should have 5 scenarios)
curl http://localhost:8001/api/categories/transport | python3 -c "import sys,json; d=json.load(sys.stdin); print(len(d['scenarios']), 'scenarios in', d['name'])"

# Open in browser
open http://localhost:3000
```

---

## Database

### Schema

**Collection: `categories`**

```json
{
  "slug": "transport",
  "name": "Transport & Taxis",
  "icon": "CarTaxiFront",
  "description": "Auto-rickshaws, cabs, ride apps",
  "image": "https://images.unsplash.com/...",
  "order": 1,
  "city": "delhi_ncr",
  "scenarios": [
    {
      "id": "transport-1",
      "title": "Driver quoting high price",
      "what_it_means": "...",
      "normalcy": "normal",
      "what_to_do": ["Step 1", "Step 2"],
      "what_not_to_do": ["Don't do X"],
      "helpful_phrase": {
        "text": "Bhaiya, meter se chalenge",
        "pronunciation": "BHY-ya, MEE-ter say cha-LEN-gay",
        "meaning": "Brother, let's go by meter",
        "tone": "Polite but firm"
      },
      "reassurance": "This is completely normal."
    }
  ]
}
```

**Collection: `feedback_entries`**

```json
{
  "id": "uuid",
  "scenario_id": "transport-1",
  "helpful": true,
  "tags": [],
  "note": "optional user note (max 200 chars)",
  "device_id": "anonymous-uuid",
  "timestamp": "2026-02-26T21:00:00Z"
}
```

Indexes: `scenario_id`, `helpful`, `timestamp`

### Seeding

The database auto-seeds on first backend startup when the `categories` collection is empty. To manually reseed:

```bash
# Drop and restart
python3 -c "from pymongo import MongoClient; MongoClient('mongodb://localhost:27017')['indiguide'].categories.drop()"
# Restart the backend — it will reseed automatically
```

### Verify 35 Scenarios

```bash
curl http://localhost:8001/api/categories | python3 -c "
import sys, json
cats = json.load(sys.stdin)
total = sum(c['scenario_count'] for c in cats)
print(f'{len(cats)} categories, {total} total scenarios')
for c in cats:
    print(f'  {c[\"slug\"]}: {c[\"scenario_count\"]} scenarios ({c.get(\"city\", \"delhi_ncr\")})')
"
```

Expected output:
```
7 categories, 35 total scenarios
  transport: 5 scenarios (delhi_ncr)
  markets: 5 scenarios (delhi_ncr)
  food: 5 scenarios (delhi_ncr)
  trains: 5 scenarios (delhi_ncr)
  social: 5 scenarios (delhi_ncr)
  safety: 5 scenarios (delhi_ncr)
  temples: 5 scenarios (delhi_ncr)
```

---

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/` | API info |
| GET | `/api/health` | Health check |
| GET | `/api/categories` | List all categories (summary) |
| GET | `/api/categories/{slug}` | Full category with scenarios |
| GET | `/api/categories/{slug}/scenarios/{id}` | Single scenario |
| POST | `/api/feedback` | Submit feedback |
| GET | `/api/feedback/summary` | Feedback analytics per scenario |

### Feedback Payload

```json
POST /api/feedback
{
  "scenario_id": "transport-1",
  "helpful": true,
  "tags": [],
  "note": "",
  "device_id": "anonymous-uuid",
  "timestamp": "2026-02-26T21:00:00Z"
}
```

---

## PWA Testing

### On Desktop

1. Open `http://localhost:3000` in Chrome
2. Open DevTools → Application → Manifest (verify icons and config)
3. Application → Service Workers (verify SW registered)
4. Go offline in DevTools → Network → toggle Offline
5. Navigate — cached pages should still load

### On Phone (Same Wi-Fi)

1. Find your computer's local IP: `ifconfig | grep inet` or `ipconfig`
2. Update `frontend/.env`: `REACT_APP_BACKEND_URL=http://YOUR_IP:8001`
3. Restart frontend
4. On phone, open `http://YOUR_IP:3000`
5. Chrome: tap "Add to Home Screen" banner or menu → "Install app"
6. App launches in standalone mode (no browser chrome)

**Note**: For HTTPS (required for full PWA on mobile), use a tool like `ngrok`:
```bash
ngrok http 3000
# Use the HTTPS URL on your phone
```

### Offline Testing

1. Install the PWA to home screen
2. Open it, browse a few categories and scenarios
3. Turn on Airplane Mode
4. Open the app again — cached content loads from Service Worker
5. Submit feedback while offline — it queues in localStorage
6. Turn off Airplane Mode — feedback auto-syncs silently

---

## Content: 7 Categories × 5 Scenarios

| # | Category | Scenarios | Focus |
|---|----------|-----------|-------|
| 1 | Transport & Taxis | 5 | Auto pricing, meters, app rides, routes |
| 2 | Markets & Bargaining | 5 | Pricing, persistence, fixed-price scam |
| 3 | Restaurants & Food | 5 | Menus, spice, bills, street food |
| 4 | Train Stations & Buses | 5 | Seats, porters, fake officials, touts |
| 5 | Social Interactions | 5 | Selfies, guides, staring, personal questions |
| 6 | Safety Uncertainty | 5 | Night safety, following, scams, dogs |
| 7 | Temples & Etiquette | 5 | Shoes, fake blessings, photos, donations |

Each scenario provides:
- **What this likely means** — cultural interpretation
- **Is this normal?** — Normal (green) / Sometimes normal (amber) / Red flag (red)
- **What you should do** — numbered action steps
- **What NOT to do** — common mistakes
- **Helpful phrase** — Hindi phrase with pronunciation and tone
- **Reassurance** — one calming sentence

---

## Architecture Decisions

1. **Static data in frontend** (`data/scenarios.js`) — enables full offline access without API
2. **MongoDB mirror** — same data in database for future dynamic content management
3. **City field** — all records tagged with `city: "delhi_ncr"` for future multi-city expansion
4. **Anonymous feedback** — device UUID in localStorage, no PII, offline-first queue
5. **Service Worker** — cache-first for static assets, network-first for API (with cache fallback)

---

## Privacy

- No login / accounts / email / phone
- No location tracking
- Anonymous device ID (random UUID in localStorage)
- Feedback is voluntary and anonymous
- No analytics beyond feedback summary endpoint

---

## License

MIT — use freely. Scenario content is original and India-specific.
