const categories = [
  {
    slug: "transport",
    name: "Transport & Taxis",
    icon: "CarTaxiFront",
    description: "Auto-rickshaws, cabs, ride apps",
    image: "https://images.unsplash.com/photo-1763225398132-1e9985d9dacc?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
    order: 1,
    city: "delhi_ncr",
    scenarios: [
      {
        id: "transport-1",
        title: "Driver quoting high price",
        what_it_means: "It's standard practice for auto-rickshaw drivers in Delhi to quote 2-3x the actual fare to foreigners. This isn't personal or malicious — it's negotiation culture. Every local negotiates too.",
        normalcy: "normal",
        what_to_do: [
          "Ask \"Meter chalao\" (Turn on the meter)",
          "If no meter, check Google Maps for distance and offer 10-15 Rs/km",
          "If they refuse, walk to the next auto — there are always more",
          "Use Uber/Ola as a price reference before negotiating"
        ],
        what_not_to_do: [
          "Don't get angry or raise your voice",
          "Don't pay the first price quoted — ever",
          "Don't argue loudly in public"
        ],
        helpful_phrase: {
          text: "Bhaiya, meter se chalenge",
          pronunciation: "BHY-ya, MEE-ter say cha-LEN-gay",
          meaning: "Brother, let's go by meter",
          tone: "Polite but firm"
        },
        reassurance: "This is completely normal — every local negotiates too. You're not being singled out."
      },
      {
        id: "transport-2",
        title: "Driver refuses to use meter",
        what_it_means: "Some drivers prefer fixed rates, especially for longer routes or during peak hours. In Delhi, many autos don't have working meters at all. Some are genuinely trying to overcharge, others just want a fair fixed rate.",
        normalcy: "sometimes_normal",
        what_to_do: [
          "Insist on meter politely one more time",
          "If refused, ask for a fixed price and counter with 60-70% of what they quote",
          "Use Uber or Ola as your backup — widely available in Delhi",
          "If taking auto, always agree on price BEFORE sitting in"
        ],
        what_not_to_do: [
          "Don't sit in the vehicle before agreeing on the fare",
          "Don't threaten to call police — it's unnecessary escalation",
          "Don't accept the first counter-offer"
        ],
        helpful_phrase: {
          text: "Kitna lagega?",
          pronunciation: "KIT-na la-GAY-ga",
          meaning: "How much will it cost?",
          tone: "Casual inquiry"
        },
        reassurance: "You have plenty of options. App-based rides are reliable in Delhi. No single auto driver matters."
      },
      {
        id: "transport-3",
        title: "Driver asks to cancel app ride",
        what_it_means: "The driver wants to avoid the platform's commission and charge you directly — usually more. Or the ride isn't profitable enough for them at the app rate.",
        normalcy: "red_flag",
        what_to_do: [
          "Politely decline — say you prefer to keep the app ride",
          "If they insist or refuse to move, cancel and rebook",
          "Screenshot the driver's details before cancelling",
          "Report the driver in the app after the incident"
        ],
        what_not_to_do: [
          "Don't agree to cancel and pay cash",
          "Don't share your personal phone number",
          "Don't argue — just rebook"
        ],
        helpful_phrase: {
          text: "App se hi chalenge",
          pronunciation: "APP say hee cha-LEN-gay",
          meaning: "We'll go through the app only",
          tone: "Firm but polite"
        },
        reassurance: "This happens frequently. You're right to refuse. A new driver will accept in minutes."
      },
      {
        id: "transport-4",
        title: "Cannot find pickup zone",
        what_it_means: "Delhi's locations can be confusing — addresses are often landmarks, not exact coordinates. GPS pins in crowded areas are frequently inaccurate.",
        normalcy: "normal",
        what_to_do: [
          "Call the driver using the app's call button",
          "Share a nearby visible landmark (shop name, gate number)",
          "Walk to the nearest main road — easier for drivers to find you",
          "Look for the car model and color shown in the app"
        ],
        what_not_to_do: [
          "Don't wander into unknown side streets looking for the car",
          "Don't panic-cancel — the driver is also looking for you",
          "Don't stand in the middle of traffic"
        ],
        helpful_phrase: {
          text: "Main road pe hoon",
          pronunciation: "MAIN road pay HOON",
          meaning: "I'm on the main road",
          tone: "Simple location info"
        },
        reassurance: "Pickup confusion is universal in Delhi, even for locals. The driver is trying to find you too."
      },
      {
        id: "transport-5",
        title: "Driver taking a different route",
        what_it_means: "Could be genuine traffic avoidance — Delhi has severe congestion — or an intentional detour to increase fare. Most often it's traffic.",
        normalcy: "sometimes_normal",
        what_to_do: [
          "Open Google Maps and compare the driver's route with suggested routes",
          "If the ETA is similar, it's likely a traffic workaround",
          "If the route is clearly wrong, calmly point it out",
          "For app rides, the fare is usually fixed — route doesn't matter"
        ],
        what_not_to_do: [
          "Don't immediately accuse the driver of cheating",
          "Don't exit the vehicle in an unfamiliar area",
          "Don't grab the steering wheel or get physical"
        ],
        helpful_phrase: {
          text: "Google Maps kya dikha raha hai?",
          pronunciation: "GOOGLE MAPS kya dik-HA ra-HA hai",
          meaning: "What is Google Maps showing?",
          tone: "Non-confrontational"
        },
        reassurance: "Most route changes in Delhi are genuine traffic workarounds. Stay calm and track on your phone."
      }
    ]
  },
  {
    slug: "markets",
    name: "Markets & Bargaining",
    icon: "ShoppingBag",
    description: "Negotiating, vendors, shopping",
    image: "https://images.unsplash.com/photo-1717065165653-bb853b7e6e7e?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
    order: 2,
    city: "delhi_ncr",
    scenarios: [
      {
        id: "markets-1",
        title: "Vendor quotes absurdly high price",
        what_it_means: "The first price for tourists is typically 3-10x the actual value. This is the opening move in a negotiation ritual — not the final price. Vendors expect you to counter.",
        normalcy: "normal",
        what_to_do: [
          "Counter with 20-30% of the quoted price",
          "Compare prices at 2-3 stalls before buying anything",
          "Be ready to walk away — they'll often call you back with a lower price",
          "Use your phone to check online prices for reference"
        ],
        what_not_to_do: [
          "Don't pay the first price quoted",
          "Don't show strong excitement about an item",
          "Don't feel guilty about bargaining — it's expected"
        ],
        helpful_phrase: {
          text: "Bahut zyada hai, thoda kam karo",
          pronunciation: "BA-hut ZYA-da hai, THO-da KUM ka-RO",
          meaning: "Too expensive, reduce it a bit",
          tone: "Standard bargaining phrase"
        },
        reassurance: "Bargaining is expected and often enjoyed. Nobody is offended. Think of it as a social ritual."
      },
      {
        id: "markets-2",
        title: "Vendor follows you persistently",
        what_it_means: "Aggressive selling is common in tourist markets like Chandni Chowk and Connaught Place. Vendors earn commission and are persistent by nature — not threatening.",
        normalcy: "sometimes_normal",
        what_to_do: [
          "Say \"Nahi chahiye\" firmly and keep walking without stopping",
          "Avoid making eye contact — it's interpreted as interest",
          "Enter a different shop to break the follow pattern",
          "Put on headphones (even without music) as a social barrier"
        ],
        what_not_to_do: [
          "Don't be rude or aggressive back",
          "Don't enter their shop \"just to look\" — it creates obligation pressure",
          "Don't feel guilty about saying no repeatedly"
        ],
        helpful_phrase: {
          text: "Nahi chahiye, shukriya",
          pronunciation: "NA-hee CHA-hi-yay, SHUK-ri-ya",
          meaning: "Don't need it, thanks",
          tone: "Polite but final"
        },
        reassurance: "This is standard market behavior in India. You're not doing anything wrong by saying no."
      },
      {
        id: "markets-3",
        title: "Vendor claims 'fixed price' or 'government rate'",
        what_it_means: "There is no \"government rate\" for souvenirs or clothes. This is a pressure tactic to prevent you from bargaining. It works often on first-time visitors.",
        normalcy: "red_flag",
        what_to_do: [
          "Ignore the claim entirely — counter-offer anyway",
          "If they refuse to negotiate, leave immediately",
          "Check similar items at other shops nearby",
          "Government emporiums do exist (like Cottage Industries) but they're official buildings, not market stalls"
        ],
        what_not_to_do: [
          "Don't believe 'fixed price' claims in markets",
          "Don't fall for 'special discount only for you'",
          "Don't feel pressured by their theatrics"
        ],
        helpful_phrase: {
          text: "Dusri dukaan mein sasta hai",
          pronunciation: "DOO-sri du-KAAN mein SAS-ta hai",
          meaning: "It's cheaper at the other shop",
          tone: "Creates competitive pressure"
        },
        reassurance: "No tourist market stall in Delhi has genuinely fixed prices. Trust your instinct and keep walking."
      },
      {
        id: "markets-4",
        title: "Multiple vendors crowd around you",
        what_it_means: "In busy markets, vendors compete for tourist attention. It feels overwhelming but is almost never threatening — just aggressive sales culture.",
        normalcy: "sometimes_normal",
        what_to_do: [
          "Pick one vendor to engage with if interested",
          "Tell others \"Baad mein\" (Later) — it works as a dismissal",
          "Move to less crowded sections of the market",
          "Keep valuables secure in front pockets"
        ],
        what_not_to_do: [
          "Don't panic or show visible distress",
          "Don't pull out cash or phone in the crowd",
          "Don't make commitments to multiple vendors"
        ],
        helpful_phrase: {
          text: "Ek minute, pehle dekh lene do",
          pronunciation: "EK mi-NUT, PEH-lay dekh LAY-nay do",
          meaning: "One minute, let me look first",
          tone: "Buys you breathing space"
        },
        reassurance: "This energy is part of Indian market culture. You're safe — just overstimulated. It passes once you move through."
      },
      {
        id: "markets-5",
        title: "Vendor gets angry when you walk away",
        what_it_means: "This is almost always a negotiation tactic. Feigned offense is used to create guilt and pull you back. Real anger is extremely rare.",
        normalcy: "normal",
        what_to_do: [
          "Keep walking — don't look back",
          "If the price was fair and you want the item, return casually in 10 minutes",
          "Know that this is theater — part of the bargaining dance",
          "You'll likely hear a lower price called out behind you"
        ],
        what_not_to_do: [
          "Don't feel guilty or rush back",
          "Don't overpay just to avoid confrontation",
          "Don't apologize for wanting a fair price"
        ],
        helpful_phrase: {
          text: "",
          pronunciation: "",
          meaning: "Silence and walking away IS the most effective phrase",
          tone: "No words needed"
        },
        reassurance: "Nobody is truly angry. In 30 seconds they'll be smiling at the next customer. This is part of the game."
      }
    ]
  },
  {
    slug: "food",
    name: "Restaurants & Food",
    icon: "Utensils",
    description: "Ordering, spice levels, hygiene",
    image: "https://images.unsplash.com/photo-1680993032090-1ef7ea9b51e5?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
    order: 3,
    city: "delhi_ncr",
    scenarios: [
      {
        id: "food-1",
        title: "Menu has no English",
        what_it_means: "Many local restaurants, especially dhabas (roadside eateries), only have Hindi menus. These places often serve the most authentic and delicious food in Delhi.",
        normalcy: "normal",
        what_to_do: [
          "Ask \"Kya special hai?\" (What's special today?)",
          "Point at what other diners are eating — it's totally acceptable",
          "Use Google Lens on your phone to translate the menu",
          "Safe first orders: Paneer butter masala, Dal makhani, Chole bhature, Butter naan"
        ],
        what_not_to_do: [
          "Don't leave just because of the language barrier",
          "Don't order blindly without asking about spice level",
          "Don't assume non-veg if you want vegetarian — always confirm"
        ],
        helpful_phrase: {
          text: "Kam mirchi mein banana",
          pronunciation: "KUM mir-CHEE mein ba-NA-na",
          meaning: "Make it with less chili",
          tone: "Important practical request"
        },
        reassurance: "Hindi-only menus usually mean incredible, authentic food. The staff is used to helping non-Hindi speakers."
      },
      {
        id: "food-2",
        title: "Waiter keeps pushing expensive items",
        what_it_means: "Some tourist-facing restaurants push higher-margin items. But in many cases, the waiter genuinely recommends what they think is best.",
        normalcy: "sometimes_normal",
        what_to_do: [
          "Ask for the \"sabse popular\" (most popular) dish instead",
          "Check prices on the menu before confirming",
          "Ask other diners what they ordered",
          "Order one dish first, then add more if needed"
        ],
        what_not_to_do: [
          "Don't order everything the waiter suggests",
          "Don't skip asking about portion sizes — Indian portions are often large",
          "Don't be afraid to say \"bas itna\" (just this much)"
        ],
        helpful_phrase: {
          text: "Log kya order karte hain?",
          pronunciation: "LOG kya OR-der KAR-tay hain",
          meaning: "What do people usually order?",
          tone: "Redirects to genuine popular choices"
        },
        reassurance: "Delhi food is incredibly good value. Even the 'expensive' option here is likely affordable by international standards."
      },
      {
        id: "food-3",
        title: "Food is extremely spicy",
        what_it_means: "Delhi cuisine is genuinely spicy. What locals call 'medium' is 'extra hot' by most international standards. Nobody is pranking you — this is the standard flavor profile.",
        normalcy: "normal",
        what_to_do: [
          "Eat curd (dahi) or drink lassi immediately — NOT water",
          "Ask for raita (yogurt side) at the table",
          "Bread (naan/roti) helps absorb the heat",
          "Next time, say \"Bilkul kam mirchi\" (Absolutely less chili)"
        ],
        what_not_to_do: [
          "Don't drink water rapidly — it spreads the heat and makes it worse",
          "Don't complain angrily — it's the standard regional flavor",
          "Don't give up on Indian food because of one spicy dish"
        ],
        helpful_phrase: {
          text: "Dahi de dijiye",
          pronunciation: "DA-hee day DEE-ji-yay",
          meaning: "Please give me yogurt",
          tone: "Polite request — instant relief"
        },
        reassurance: "Your tongue adjusts within a few days. Yogurt-based sides are your best friend. Every seasoned traveler went through this."
      },
      {
        id: "food-4",
        title: "Bill has unexpected charges",
        what_it_means: "Service charge (5-10%) is common in Delhi restaurants. GST (5-18%) is legally required. Some places add both. This is mostly legitimate.",
        normalcy: "sometimes_normal",
        what_to_do: [
          "Ask for an itemized bill",
          "Service charge is legally optional — you can request its removal",
          "GST is mandatory and non-negotiable",
          "Check if service charge was mentioned on the menu"
        ],
        what_not_to_do: [
          "Don't pay without reviewing the bill",
          "Don't tip on top of service charge unless you want to",
          "Don't argue about GST — it's government tax"
        ],
        helpful_phrase: {
          text: "Bill detail mein dikhayiye",
          pronunciation: "BILL dee-TAIL mein dik-HA-ee-yay",
          meaning: "Show me the detailed bill",
          tone: "Calm, reasonable request"
        },
        reassurance: "Most charges are legitimate. India recently made service charge optional — you're within your rights to question it."
      },
      {
        id: "food-5",
        title: "Street food hygiene concerns",
        what_it_means: "Street food is the soul of Delhi cuisine. Busy stalls with high turnover are generally safer than quiet ones. Millions eat street food daily without issues.",
        normalcy: "normal",
        what_to_do: [
          "Choose stalls with long queues of locals — popularity equals safety",
          "Stick to freshly cooked, hot items for the first few days",
          "Avoid raw salads and pre-cut fruit initially",
          "Carry hand sanitizer and use it before eating"
        ],
        what_not_to_do: [
          "Don't avoid street food entirely — you'll miss Delhi's best experiences",
          "Don't drink tap water or have ice in drinks from stalls",
          "Don't eat from very quiet, empty stalls"
        ],
        helpful_phrase: {
          text: "Taza hai?",
          pronunciation: "TA-za hai",
          meaning: "Is it fresh?",
          tone: "Shows awareness — vendors respect it"
        },
        reassurance: "Delhi's street food culture has fed millions safely for generations. Start with famous spots and your stomach will adjust."
      }
    ]
  },
  {
    slug: "trains",
    name: "Train Stations & Buses",
    icon: "TrainFront",
    description: "Platforms, porters, tickets",
    image: "https://images.pexels.com/photos/2526935/pexels-photo-2526935.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    order: 4,
    city: "delhi_ncr",
    scenarios: [
      {
        id: "trains-1",
        title: "Someone claims your reserved seat",
        what_it_means: "Overcrowded trains lead to seat disputes. Could be genuine confusion (multiple charts, waitlisted passengers) or someone hoping you won't check.",
        normalcy: "sometimes_normal",
        what_to_do: [
          "Show your ticket with the seat/berth number clearly",
          "Check the reservation chart pasted on the coach exterior",
          "Ask the TTE (Ticket Examiner in black coat) to resolve the dispute",
          "Do not vacate your confirmed seat"
        ],
        what_not_to_do: [
          "Don't give up your seat without checking your ticket first",
          "Don't argue loudly — stay factual",
          "Don't get physically confrontational"
        ],
        helpful_phrase: {
          text: "Yeh meri seat hai, ticket dekh lijiye",
          pronunciation: "YEH meh-REE SEAT hai, TI-ket dekh LEE-ji-yay",
          meaning: "This is my seat, please check the ticket",
          tone: "Firm and factual"
        },
        reassurance: "Reserved means reserved. The TTE will sort it out quickly. This happens to locals too — it's not about you."
      },
      {
        id: "trains-2",
        title: "Porter grabs your luggage",
        what_it_means: "Porters (coolies) at Delhi railway stations wear red shirts and are licensed. They approach aggressively to get work — not to steal. This is their livelihood.",
        normalcy: "normal",
        what_to_do: [
          "If you don't need help, firmly hold your bag and say \"Nahi chahiye\"",
          "If you accept help, agree on price first — Rs 50-100 per bag is standard",
          "Check official rate charts posted at the station",
          "Walk to your platform yourself if your luggage is manageable"
        ],
        what_not_to_do: [
          "Don't panic or accuse them of stealing",
          "Don't let them disappear around a corner with your bag",
          "Don't pay without prior price agreement"
        ],
        helpful_phrase: {
          text: "Kitna loge?",
          pronunciation: "KIT-na LO-gay",
          meaning: "How much will you charge?",
          tone: "Always negotiate before accepting service"
        },
        reassurance: "Red-shirted porters are licensed railway workers. Agree on price first, and the service is perfectly safe."
      },
      {
        id: "trains-3",
        title: "Official-looking person demands documents",
        what_it_means: "Real ticket checkers (TTE/TC) wear railway uniforms and carry photo IDs. Fake 'officials' on platforms may try to fine you or extract money.",
        normalcy: "red_flag",
        what_to_do: [
          "Ask for their official ID with photo and name",
          "Real TTEs check tickets during the journey, not on platforms",
          "Only show your ticket — never your passport",
          "If unsure, walk to the Station Master's office to verify"
        ],
        what_not_to_do: [
          "Don't hand over your passport to anyone",
          "Don't pay cash fines on the spot — real fines generate receipts",
          "Don't follow them to an 'office' away from the main area"
        ],
        helpful_phrase: {
          text: "Aapka ID dikhayiye",
          pronunciation: "AAP-ka ID dik-HA-ee-yay",
          meaning: "Show me your ID",
          tone: "Perfectly acceptable — even locals ask this"
        },
        reassurance: "Real railway officials never demand cash without receipts. If it feels wrong, walk to the Station Master — they're always there."
      },
      {
        id: "trains-4",
        title: "Platform change announced in Hindi only",
        what_it_means: "Station announcements are in Hindi first, English second. In the chaos of Delhi stations, you may miss the English version entirely.",
        normalcy: "normal",
        what_to_do: [
          "Check electronic display boards — they're bilingual",
          "Ask any fellow passenger — they'll be happy to help",
          "Use the IRCTC app or Google for live platform updates",
          "Arrive 30 minutes early to have buffer time"
        ],
        what_not_to_do: [
          "Don't rush to a platform without confirming the number",
          "Don't rely solely on announcements",
          "Don't panic — platform changes are routine"
        ],
        helpful_phrase: {
          text: "Train kaunse platform pe hai?",
          pronunciation: "TRAIN kaun-SAY PLAT-form pay hai",
          meaning: "Which platform is the train on?",
          tone: "Anyone nearby will help immediately"
        },
        reassurance: "Indians are extremely helpful at train stations. Just ask anyone — most people speak some English and love to help."
      },
      {
        id: "trains-5",
        title: "Someone offers to help buy tickets",
        what_it_means: "Touts outside stations offer to buy tickets for a fee. Some sell fake tickets. Some redirect you to private travel agencies posing as railway offices.",
        normalcy: "red_flag",
        what_to_do: [
          "Decline politely and go to the official counter inside the station",
          "Use the IRCTC app or website to book tickets",
          "Look for the 'Tourist Quota' counter at New Delhi Railway Station",
          "Ask for the 'Foreign Tourist Bureau' — it exists at major stations"
        ],
        what_not_to_do: [
          "Don't give money to anyone outside the station",
          "Don't follow anyone to an 'office' away from the main station building",
          "Don't buy tickets from anyone not at an official ticket window"
        ],
        helpful_phrase: {
          text: "Main khud le lunga",
          pronunciation: "MAIN KHUD lay LOON-ga",
          meaning: "I'll get it myself",
          tone: "Simple, firm refusal"
        },
        reassurance: "Every major Delhi station has proper counters and tourist help desks. You never need middlemen."
      }
    ]
  },
  {
    slug: "social",
    name: "Social Interactions",
    icon: "Users",
    description: "Strangers, conversations, boundaries",
    image: "https://images.pexels.com/photos/35160627/pexels-photo-35160627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    order: 5,
    city: "delhi_ncr",
    scenarios: [
      {
        id: "social-1",
        title: "Someone asks for a selfie with you",
        what_it_means: "Many Indians, especially from smaller towns visiting Delhi, are genuinely excited to meet foreigners. It's pure curiosity and friendliness — not a threat.",
        normalcy: "normal",
        what_to_do: [
          "If comfortable, smile and take the photo — it makes their day",
          "If not comfortable, politely decline with a smile and wave",
          "If requests become too many, walk away with a friendly gesture",
          "In crowded tourist spots, this happens more — it's predictable"
        ],
        what_not_to_do: [
          "Don't feel obligated to say yes every time",
          "Don't get angry — they genuinely mean no harm",
          "Don't let groups physically corner you"
        ],
        helpful_phrase: {
          text: "Aaj nahi, shukriya",
          pronunciation: "AAJ na-HEE, SHUK-ri-ya",
          meaning: "Not today, thanks",
          tone: "Friendly decline"
        },
        reassurance: "This is one of India's most wholesome interactions. People genuinely find you interesting and just want a happy memory."
      },
      {
        id: "social-2",
        title: "Person offers to be your guide",
        what_it_means: "Could be a genuinely friendly person, or someone hoping for a fee or commission from shops they'll lead you to. Hard to tell at first.",
        normalcy: "sometimes_normal",
        what_to_do: [
          "Thank them and say you prefer exploring alone",
          "If you want a guide, negotiate the fee upfront before starting",
          "Never follow them to a specific shop or 'special place'",
          "Trust your gut — genuine helpers don't pressure"
        ],
        what_not_to_do: [
          "Don't follow strangers to unknown locations",
          "Don't feel pressured by their friendliness",
          "Don't share your hotel name or room number"
        ],
        helpful_phrase: {
          text: "Main apne aap ghoom raha hoon",
          pronunciation: "MAIN AP-nay AAP ghoom RA-ha hoon",
          meaning: "I'm exploring on my own",
          tone: "Clear, friendly boundary"
        },
        reassurance: "Most people are genuinely kind. But unsolicited guides in tourist areas often work on commission. A clear 'no thanks' is always respected."
      },
      {
        id: "social-3",
        title: "Group of men staring at you",
        what_it_means: "Staring is culturally very common in India — it's not always aggressive or threatening. Genuine curiosity about foreigners is the most common reason. However, trust your instincts.",
        normalcy: "sometimes_normal",
        what_to_do: [
          "If it seems like curiosity, a confident nod sometimes breaks the stare",
          "If uncomfortable, move to a more crowded or commercial area",
          "Enter a shop, restaurant, or hotel lobby",
          "If it feels threatening, call 112 (India's emergency number)"
        ],
        what_not_to_do: [
          "Don't stare back aggressively",
          "Don't confront or challenge them",
          "Don't isolate yourself — stay in public areas"
        ],
        helpful_phrase: {
          text: "",
          pronunciation: "",
          meaning: "No verbal phrase needed — confident body language is more effective",
          tone: "Walk with purpose and confidence"
        },
        reassurance: "Staring is the number one culture shock in India. It's usually harmless curiosity. Trust your instincts about the difference."
      },
      {
        id: "social-4",
        title: "Stranger asks very personal questions",
        what_it_means: "\"Where are you from? Are you married? How much do you earn?\" — these are standard friendly conversation starters in India. Not considered rude here at all.",
        normalcy: "normal",
        what_to_do: [
          "Answer whatever you're comfortable sharing",
          "Give vague or humorous answers for questions you want to dodge",
          "Redirect with \"Aap batao\" (What about you?)",
          "Share your country — Indians love geography conversations"
        ],
        what_not_to_do: [
          "Don't take offense — it's cultural small talk",
          "Don't share actual financial details or travel budget",
          "Don't reveal your exact hotel address"
        ],
        helpful_phrase: {
          text: "Aap batao",
          pronunciation: "AAP ba-TAO",
          meaning: "You tell me / What about you?",
          tone: "Deflects and keeps the conversation warm"
        },
        reassurance: "These questions come from friendliness, not invasion. Indians ask each other the exact same things daily."
      },
      {
        id: "social-5",
        title: "Child approaches asking for money",
        what_it_means: "Organized begging exists in Delhi, especially near tourist areas. Children are sometimes controlled by adults who take the money. This is one of the hardest situations for travelers.",
        normalcy: "sometimes_normal",
        what_to_do: [
          "Avoid giving cash directly — it fuels the cycle",
          "If you want to help, buy them food from a nearby shop instead",
          "Donate to registered NGOs like CRY or Pratham",
          "Walk away calmly if it becomes overwhelming"
        ],
        what_not_to_do: [
          "Don't give money — it often goes to handlers, not the child",
          "Don't take photos of begging children",
          "Don't ignore the emotional impact — it's okay to feel affected"
        ],
        helpful_phrase: {
          text: "Khana khayega?",
          pronunciation: "KHA-na KHA-yay-ga",
          meaning: "Will you eat food?",
          tone: "Offering food instead of money — genuinely helpful"
        },
        reassurance: "This is one of the hardest parts of traveling in India. Your empathy is valid. Food or NGO donations make a real, lasting difference."
      }
    ]
  },
  {
    slug: "safety",
    name: "Safety Uncertainty",
    icon: "ShieldAlert",
    description: "Feeling unsafe, scams, emergencies",
    image: "https://images.unsplash.com/photo-1768141715823-7dceae5cf421?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
    order: 6,
    city: "delhi_ncr",
    scenarios: [
      {
        id: "safety-1",
        title: "Area feels unsafe at night",
        what_it_means: "Delhi's safety varies dramatically by neighborhood and time. Touristy areas like Paharganj or parts of Old Delhi feel different after dark. Your instinct is probably correct.",
        normalcy: "sometimes_normal",
        what_to_do: [
          "Move to well-lit main roads with traffic and shops",
          "Book an Uber or Ola immediately — don't walk",
          "Share your live location with someone you trust",
          "Delhi Metro closes at 11 PM — plan your return before that"
        ],
        what_not_to_do: [
          "Don't walk alone in unfamiliar areas after dark",
          "Don't wear earphones — stay alert to surroundings",
          "Don't take shortcuts through empty lanes or alleys"
        ],
        helpful_phrase: {
          text: "",
          pronunciation: "",
          meaning: "No phrase needed — open the Uber/Ola app and get a ride immediately",
          tone: "Action over words"
        },
        reassurance: "Delhi's main commercial areas are well-patrolled. Trusting your instincts and getting a ride is always the smart move."
      },
      {
        id: "safety-2",
        title: "Being followed by someone",
        what_it_means: "This is not normal behavior. Take it seriously regardless of perceived intent. Your safety is the priority.",
        normalcy: "red_flag",
        what_to_do: [
          "Enter the nearest shop, restaurant, or hotel lobby immediately",
          "Call 112 — India's unified emergency number (works like 911)",
          "Make noise and draw attention to yourself if needed",
          "Share live location with a trusted contact right now"
        ],
        what_not_to_do: [
          "Don't go back to your hotel — it reveals where you're staying",
          "Don't confront them alone",
          "Don't run into empty streets — stay where people are"
        ],
        helpful_phrase: {
          text: "Police!",
          pronunciation: "po-LEES",
          meaning: "Everyone in India understands this word",
          tone: "Shout it loudly if you feel threatened"
        },
        reassurance: "You're right to take this seriously. Enter a public place and call 112. Public spaces in Delhi are your best protection."
      },
      {
        id: "safety-3",
        title: "Scam attempt suspected",
        what_it_means: "Common Delhi tourist scams: 'closed' tourist sites, gem trade offers, fake travel agents near stations, shoe cleaning tricksters, rickshaws to 'special shops.'",
        normalcy: "sometimes_normal",
        what_to_do: [
          "Say \"Nahi\" firmly and walk away — no explanation needed",
          "Verify any claim independently using Google or your hotel staff",
          "Never follow someone to a 'special place' or 'my friend's shop'",
          "If told a tourist site is 'closed today,' go check yourself — it's probably open"
        ],
        what_not_to_do: [
          "Don't engage with elaborate stories — the longer you listen, the harder to leave",
          "Don't give passport or credit card to strangers",
          "Don't feel rude about walking away mid-sentence"
        ],
        helpful_phrase: {
          text: "Nahi chahiye, shukriya",
          pronunciation: "NA-hee CHA-hi-yay, SHUK-ri-ya",
          meaning: "Don't need it, thanks",
          tone: "Firm, polite, final"
        },
        reassurance: "Recognizing a scam is the hard part — and you've already done it. Say no, walk away, move on."
      },
      {
        id: "safety-4",
        title: "Lost and phone battery is low",
        what_it_means: "Stressful but very solvable. Delhi is dense with helpful people and resources. The key is to stay calm and conserve your remaining battery.",
        normalcy: "sometimes_normal",
        what_to_do: [
          "Find the nearest shop and ask to charge your phone — offer Rs 20-50",
          "Ask anyone for directions to the nearest Metro station — Metro = safety net",
          "Look for police PCR vans (white vehicles with blue stripes)",
          "Tourist Helpline: 1800-111-363 (toll free, 24/7)"
        ],
        what_not_to_do: [
          "Don't panic or show visible distress in isolated areas",
          "Don't follow strangers who offer to help take you somewhere",
          "Don't drain your remaining battery on social media"
        ],
        helpful_phrase: {
          text: "Nearest metro station kahan hai?",
          pronunciation: "NEAR-est MET-ro STA-tion ka-HAN hai",
          meaning: "Where's the nearest metro station?",
          tone: "Simple — everyone knows the answer"
        },
        reassurance: "You're never truly lost in Delhi. Every shop has a phone charger, every person knows the nearest Metro. Take a breath — you'll be fine."
      },
      {
        id: "safety-5",
        title: "Aggressive street dogs approaching",
        what_it_means: "Delhi has many stray dogs. Most are harmless during the day but can be territorial at night, especially near food areas.",
        normalcy: "normal",
        what_to_do: [
          "Don't run — walk slowly and turn sideways to appear non-threatening",
          "Avoid direct eye contact — dogs read it as a challenge",
          "Pretend to pick up a stone from the ground — this gesture works on most Delhi strays",
          "If bitten, go to the nearest hospital immediately for a rabies shot"
        ],
        what_not_to_do: [
          "Don't run — it triggers their chase instinct",
          "Don't try to pet or approach stray dogs",
          "Don't corner them or block their escape path"
        ],
        helpful_phrase: {
          text: "Hatao!",
          pronunciation: "ha-TAO",
          meaning: "Go away! / Shoo!",
          tone: "Loud and commanding — works on most dogs"
        },
        reassurance: "Most Delhi strays are actually docile and scared of humans. The pretend-stone-picking gesture is your most effective tool. Stay calm."
      }
    ]
  },
  {
    slug: "temples",
    name: "Temples & Etiquette",
    icon: "Landmark",
    description: "Religious sites, customs, respect",
    image: "https://images.pexels.com/photos/10678945/pexels-photo-10678945.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    order: 7,
    city: "delhi_ncr",
    scenarios: [
      {
        id: "temples-1",
        title: "Asked to remove shoes",
        what_it_means: "Shoes must be removed before entering any temple, mosque, gurudwara, or many homes. This is deeply rooted religious and cultural respect — completely non-negotiable.",
        normalcy: "normal",
        what_to_do: [
          "Remove shoes at the designated area before entering",
          "Use shoe counters where available — costs Rs 10-20",
          "Carry socks if visiting in summer — floors can be very hot",
          "Some places provide shoe covers as an alternative"
        ],
        what_not_to_do: [
          "Don't refuse or try to enter with shoes",
          "Don't walk in with shoes even if nobody seems to be watching",
          "Don't complain about dirty or hot floors"
        ],
        helpful_phrase: {
          text: "Joote kahan rakhoon?",
          pronunciation: "JOO-tay ka-HAN ra-KHOON",
          meaning: "Where should I keep my shoes?",
          tone: "Practical, shows you know the custom"
        },
        reassurance: "This is universal at all Indian religious spaces — billions of people do it daily. Your shoes are safe at the counter."
      },
      {
        id: "temples-2",
        title: "Someone offers a 'blessing' for money",
        what_it_means: "Self-appointed 'priests' outside temples tie sacred threads or apply tilak (mark) on foreheads, then demand Rs 500-2000. These are NOT official temple priests.",
        normalcy: "red_flag",
        what_to_do: [
          "Politely decline BEFORE they start any ritual",
          "Say \"Nahi chahiye\" and keep your hands at your sides",
          "If they've already put something on you — you owe nothing, just walk in",
          "Head straight to the official temple entrance"
        ],
        what_not_to_do: [
          "Don't extend your hands or wrists to them",
          "Don't let them tie anything on you",
          "Don't pay — it encourages the practice"
        ],
        helpful_phrase: {
          text: "Main andar ja raha hoon",
          pronunciation: "MAIN AN-dar ja RA-ha hoon",
          meaning: "I'm going inside",
          tone: "Moves you past them without confrontation"
        },
        reassurance: "Real blessings inside temples are always free. These are unauthorized touts, not priests. No spiritual consequence from refusing."
      },
      {
        id: "temples-3",
        title: "Unsure about taking photos inside",
        what_it_means: "Photography rules vary widely: some temples welcome it, some ban it, others allow phones but not cameras. The main sanctum is usually no-photo.",
        normalcy: "sometimes_normal",
        what_to_do: [
          "Look for 'No Photography' signs at the entrance",
          "Ask a temple volunteer or guard before taking any photos",
          "Never photograph the main deity without explicit permission",
          "Outer temple areas and architecture are usually fine to photograph"
        ],
        what_not_to_do: [
          "Don't use flash anywhere inside",
          "Don't photograph people praying without their consent",
          "Don't take selfies in the prayer line or sacred areas"
        ],
        helpful_phrase: {
          text: "Photo le sakte hain?",
          pronunciation: "PHO-to lay SAK-tay hain",
          meaning: "Can we take photos?",
          tone: "Always ask first — people really appreciate it"
        },
        reassurance: "Most outer temple areas are photo-friendly. Just ask first near sacred spaces — the respect is what matters, not getting it perfect."
      },
      {
        id: "temples-4",
        title: "Accidentally touched something sacred",
        what_it_means: "Certain items in temples and gurudwaras are sacred. Feet should never point at sacred objects. The left hand is considered impure in many contexts.",
        normalcy: "sometimes_normal",
        what_to_do: [
          "Use your right hand for offerings and receiving prasad (blessed food)",
          "Sit cross-legged, not with legs extended toward the shrine",
          "If you accidentally err, a simple apology is always enough",
          "Watch what locals do and mirror their behavior"
        ],
        what_not_to_do: [
          "Don't touch idols or sacred objects",
          "Don't point feet at shrines or holy books",
          "Don't sit with your back to the main deity"
        ],
        helpful_phrase: {
          text: "Maaf kijiye",
          pronunciation: "MAAF kee-JI-yay",
          meaning: "Please forgive me / I'm sorry",
          tone: "Sincere — always accepted graciously"
        },
        reassurance: "Indians understand tourists are learning. A genuine, simple apology is always accepted warmly. Nobody expects you to know every rule."
      },
      {
        id: "temples-5",
        title: "Being pressured for donations",
        what_it_means: "Temples accept voluntary donations. Some have official donation boxes. Individuals with collection plates may pressure for specific amounts.",
        normalcy: "normal",
        what_to_do: [
          "Donate only in official boxes — they're usually clearly labeled",
          "Rs 10-100 is perfectly acceptable and respectful",
          "Politely decline persistent individuals asking for specific amounts",
          "At gurudwaras, try the free communal meal (langar) — you can donate what you wish"
        ],
        what_not_to_do: [
          "Don't feel pressured for large donations",
          "Don't give to individuals claiming they'll do 'special prayers' for you",
          "Don't miss the langar experience at gurudwaras — it's incredible"
        ],
        helpful_phrase: {
          text: "Daan peti kahan hai?",
          pronunciation: "DAAN PAY-tee ka-HAN hai",
          meaning: "Where is the donation box?",
          tone: "Shows you want to donate through proper channels"
        },
        reassurance: "Donation is always voluntary. Any amount is respected. Your presence and respectful behavior mean more than any money."
      }
    ]
  }
];

export default categories;
