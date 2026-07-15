import { 
  Home, 
  Sparkles, 
  Droplet, 
  Wind, 
  Armchair, 
  Sun, 
  Wrench, 
  Layers, 
  Activity, 
  Heart, 
  Building2 
} from "lucide-react";

export type ServiceDetail = {
  slug: string;
  name: string;
  category: "Residential" | "Specialized" | "Commercial";
  tag: string;
  iconName: string;
  image: string;
  desc: string;
  longDesc: string;
  whyItMatters: string;
  steps: { title: string; desc: string }[];
  benefits: string[];
};

export const servicesList: ServiceDetail[] = [
  {
    slug: "flat-house-cleaning",
    name: "Flat & House Cleaning",
    category: "Residential",
    tag: "Sparkling Clean Homes",
    iconName: "Home",
    image: "/images/services/flat-house-cleaning.png",
    desc: "Complete sweep, mop, dust, and deep sanitization of all rooms, kitchens, and toilets.",
    longDesc: "Your home is your sanctuary, and our Flat & House Cleaning service ensures it stays healthy, clean, and welcoming. We go beyond basic broom sweeping to deliver a meticulous deep clean. Our trained local staff systematically sanitizes every room — from ceiling fan blades to behind-the-sofa dust traps — leaving your living spaces free from allergens, stubborn dust, and bacteria.",
    whyItMatters: "Regular deep cleaning reduces respiratory issues, eliminates pest-attracting crumbs, and creates a fresh environment for your family. Especially in coastal Karnataka, humidity accelerates mold growth and dust accumulation, making professional cleaning essential every quarter.",
    steps: [
      { title: "Declutter & Dusting", desc: "Systematic high-to-low dusting of fans, ceilings, light fittings, and window grills." },
      { title: "Kitchen Sanitization", desc: "Thorough cleaning of countertops, cabinet exteriors, chimney filters, and sink scrubbing with food-safe agents." },
      { title: "Bathroom Deep Clean", desc: "Chemical wash of tiles, floors, toilets, mirrors, and shower areas to eliminate mold and hard-water stains." },
      { title: "Floor Mop & Polish", desc: "Disinfectant sweeping and wet mopping of all room floors, including under furniture and bed frames." }
    ],
    benefits: [
      "Trained, regional Karnataka staff who respect your privacy and belongings",
      "Eco-friendly, chemical-safe disinfectants used throughout the process",
      "Systematic room-by-room cleaning covering hard-to-reach corners and crevices",
      "Post-cleaning walkthrough inspection with you before we leave"
    ]
  },
  {
    slug: "basic-deep-cleaning",
    name: "Basic & Deep Cleaning",
    category: "Residential",
    tag: "Intense Dirt Removal",
    iconName: "Sparkles",
    image: "/images/services/basic-deep-cleaning.png",
    desc: "Intense cleanup including stain removal, tile scrubbing, fan dusting, and window washing.",
    longDesc: "When a standard daily sweep is not enough, our Basic & Deep Cleaning service steps in to tackle layers of accumulated grime, mud, and water stains. Using professional mechanical scrubbers and industrial cleaning solutions, we restore the shine to your tiles, glass panels, windows, and cupboards. Perfect for post-monsoon refreshes, festival preparation, or pre-housewarming cleanups.",
    whyItMatters: "Over time, regular mopping only pushes dirt into grout lines and corners. Deep cleaning with industrial tools extracts embedded grime that household equipment simply cannot reach, restoring surfaces to their original lustre and extending the life of your flooring and fixtures.",
    steps: [
      { title: "Deep Stain Assessment", desc: "Identify stubborn hard-water scale, cement residue, and tile stains for targeted treatment." },
      { title: "High-Pressure Vacuuming", desc: "Remove deep-seated dirt from window tracks, sliding doors, and hidden crevices." },
      { title: "Mechanical Floor Scrubbing", desc: "Run professional scrubbing machines to break through grease, red mud, and stain layers on tiles." },
      { title: "Polishing & Detailing", desc: "Microfiber wiping of premium fixtures, glass panels, switchboards, and electrical outlets." }
    ],
    benefits: [
      "Tackles tough coastal humidity stains and monsoon mud layers",
      "Restores the original look of dull tiles, window frames, and glass panels",
      "Includes industrial-grade mechanical equipment beyond household capacity",
      "Ideal for move-in/move-out tenant turnovers and festival preparations"
    ]
  },
  {
    slug: "overhead-tank-sump-cleaning",
    name: "Overhead Tank & Sump Cleaning",
    category: "Residential",
    tag: "Safe Drinking Water",
    iconName: "Droplet",
    image: "/images/services/overhead-tank-sump-cleaning.png",
    desc: "Mechanical water tank cleaning, high-pressure washing, sludge removal, and sanitization.",
    longDesc: "Clean water starts with a clean storage tank. Silt, rust, algae, and insect breeding are common in sumps and overhead tanks across coastal Karnataka. Swachhath offers a professional mechanical tank cleaning service that washes, sanitizes, and disinfects your water storage systems — from 500-litre rooftop tanks to massive underground sumps — without wasting excessive water.",
    whyItMatters: "The BIS recommends cleaning water storage tanks at least every six months. Uncleaned tanks harbor E. coli, Legionella, and mosquito larvae that directly enter your drinking water. A single professional cleaning protects your family's health for months.",
    steps: [
      { title: "De-watering & Sludge Sucking", desc: "Pump out remaining dirty water and manually remove bottom sludge, debris, and dead insects." },
      { title: "High-Pressure Jet Clean", desc: "Wash all interior walls, ceilings, and corners using industrial high-pressure jet sprays." },
      { title: "Antibacterial Spraying", desc: "Apply food-grade, FSSAI-safe disinfectants to kill remaining bacteria, spores, and algae." },
      { title: "Final Flush & Verification", desc: "Clear-water flush to remove all cleaning residue, leaving the tank completely ready for use." }
    ],
    benefits: [
      "Prevents waterborne diseases by destroying bacteria, algae, and mosquito larvae",
      "Food-grade sanitizers that leave no chemical odor or taste in your tap water",
      "Full before-and-after photo documentation shared on WhatsApp for your records",
      "Available for both overhead rooftop tanks and underground sumps of any size"
    ]
  },
  {
    slug: "vacuum-cleaning-sofa-rubbing",
    name: "Vacuum Cleaning & Sofa Rubbing",
    category: "Residential",
    tag: "Dust & Allergen Extraction",
    iconName: "Wind",
    image: "/images/services/vacuum-cleaning-sofa-rubbing.png",
    desc: "Deep vacuuming of carpets, curtains, and dust extraction from all fabric surfaces.",
    longDesc: "Fabric surfaces act as invisible dust magnets, accumulating pet hair, dust mites, sweat residue, and food particles deep within fibers over time. Our Vacuum Cleaning & Sofa Rubbing service uses high-power industrial extractors and eco-safe dry-shampoo solutions to scrub fabric grains at the molecular level, pulling out layers of embedded soil, allergens, and bad odors that regular vacuuming misses entirely.",
    whyItMatters: "An average sofa harbors 12,000 dust mites per square meter. These microscopic pests trigger allergies, asthma, and skin irritation. Professional extraction removes 98% of embedded allergens, transforming your furniture from a health hazard into a clean, fresh comfort zone.",
    steps: [
      { title: "Industrial Dry Vacuum", desc: "Run high-powered suction units to pull out loose dust, pet hair, and dry debris from cushions and frames." },
      { title: "Upholstery Shampooing", desc: "Apply targeted fabric-safe cleaners to dissolve sweat, coffee/tea stains, and food grease." },
      { title: "Manual Sofa Rubbing", desc: "Use soft rotating brush attachments and microfiber pads to gently lift deep stains from fabric fibers." },
      { title: "Extraction & Deodorizing", desc: "Extract dissolved dirt with moisture, then apply natural deodorizers for lasting freshness." }
    ],
    benefits: [
      "Significantly reduces indoor dust-allergy triggers and respiratory issues",
      "Restores original color, texture, and freshness of sofas, cushions, and mattresses",
      "Quick-drying process allows normal re-use within 3-4 hours",
      "Safe for all fabric types including velvet, microfiber, leather, and cotton"
    ]
  },
  {
    slug: "furniture-cleaning",
    name: "Furniture Cleaning & Polishing",
    category: "Residential",
    tag: "Wood & Cushion Renewal",
    iconName: "Armchair",
    image: "/images/services/furniture-cleaning.png",
    desc: "Polishing wooden furniture and scrubbing/shampooing sofas, chairs, and mattresses.",
    longDesc: "Protect your expensive furniture investments from mold, wood dust, and surface dullness. We provide dedicated polishing for wooden tables, cabinets, wardrobes, and doors, alongside deep sanitization of mattresses, dining chairs, and office furniture. Ideal for seasonal cleanups, preparing rental properties for new tenants, or restoring antique family heirlooms.",
    whyItMatters: "Coastal humidity is the enemy of wood. Without periodic treatment, teak and rosewood develop micro-cracks, white mold patches, and a chalky appearance. Professional polishing with wood-nourishing creams seals the surface, preventing moisture damage and extending furniture lifespan by years.",
    steps: [
      { title: "Surface Clearing", desc: "Wipe off loose dust, spider webs, cobwebs, and surface debris from all furniture pieces." },
      { title: "Wood & Metal Treatment", desc: "Apply specific wood-nourishing creams for teak/rosewood or specialized metal polishers for handles and hinges." },
      { title: "Mattress Sanitization", desc: "Vacuum and apply steam/UV-light sanitizers to mattresses to eliminate bed bugs and dust mites." },
      { title: "Buffing & Polish Finish", desc: "Wipe with soft lint-free cloths using premium wax polish to bring back a rich, natural gloss." }
    ],
    benefits: [
      "Extends the lifespan of premium teak, rosewood, and engineered board furniture",
      "Eliminates mattress odors, dust-mites, and surface mold growth completely",
      "No sticky or oily residue left on surfaces after polishing",
      "Special attention to antique items and high-value wooden artifacts"
    ]
  },
  {
    slug: "high-pressure-wash-cleaning",
    name: "High Pressure Wash Cleaning",
    category: "Specialized",
    tag: "De-griming Compounds",
    iconName: "Droplet",
    image: "/images/services/high-pressure-wash-cleaning.png",
    desc: "Blast away deep grime from driveways, exterior walls, compounds, and gates.",
    longDesc: "Monsoon seasons leave driveways, compound walls, gates, and verandas coated in slippery green moss, thick red mud layers, and years of traffic soot. Our High Pressure Wash Cleaning service uses industrial-grade water jet machines operating at up to 150 bar pressure to safely strip off years of accumulated stain, moss, and dirt without damaging paint, plaster, or natural stone surfaces.",
    whyItMatters: "Moss-covered driveways and steps are the number one cause of slip-and-fall injuries at homes. Beyond safety, a clean compound dramatically improves your property's curb appeal and perceived value. Our pressure washing restores surfaces to near-original condition in just hours.",
    steps: [
      { title: "Pre-soaking Stain Areas", desc: "Apply targeted cleaning agents to soften tough grease patches and heavy moss growth before jetting." },
      { title: "High-Pressure Jetting", desc: "Direct specialized narrow water jet streams at 100-150 bar to strip dirt layers from tiles and concrete." },
      { title: "Corner & Crevice Detailing", desc: "Focus jetting on grooves, gate hinges, drainage lines, and narrow wall-to-ground joints." },
      { title: "Post-wash Scrubbing & Sweep", desc: "Sweep away detached mud and debris, flush the driveway clean, and verify complete coverage." }
    ],
    benefits: [
      "Removes slippery moss layers, making driveways and steps safe to walk on",
      "Cleans compound walls and iron gates to look freshly painted without repainting",
      "Zero harsh physical scrubbing that can scratch natural stones or decorative tiles",
      "Covers large areas quickly — driveways, parking lots, building exteriors, and pool decks"
    ]
  },
  {
    slug: "solar-tubes-panel-cleaning",
    name: "Solar Tubes & Panel Cleaning",
    category: "Specialized",
    tag: "Maximize Solar Power",
    iconName: "Sun",
    image: "/images/services/solar-tubes-panel-cleaning.png",
    desc: "Safe water jet cleaning of solar plates to maximize light absorption and efficiency.",
    longDesc: "Dust, bird droppings, pollen, and hard-water mineral deposits on solar panels can reduce your solar hot water heating and electricity generation efficiency by up to 25%. Our specialized Solar Panel & Glass Tube Cleaning service uses soft non-abrasive brushes, purified water rinses, and trained safety-rigged crew to clean roof-mounted solar installations without scratching the delicate photovoltaic glass surfaces.",
    whyItMatters: "A single layer of bird dropping shadow can reduce an entire panel string's output. In coastal Karnataka, salt spray and monsoon dust compound the problem. Quarterly professional cleaning pays for itself through increased energy savings within weeks.",
    steps: [
      { title: "Safety Rigging & Inspection", desc: "Secure the crew with harness lines on the roof and visually inspect panels for cracks or loose connections." },
      { title: "Soft Wash Flush", desc: "Rinse solar plates with low-pressure purified water to wash off loose dust, pollen, and surface grit." },
      { title: "Microfiber Scrubbing", desc: "Clean panels using non-abrasive microfiber wipers and solar-safe glass cleaning solutions." },
      { title: "Squeegee Dry & Report", desc: "Squeegee off water to prevent hard-water scale spots, photograph results, and share efficiency improvement notes." }
    ],
    benefits: [
      "Boosts solar energy production and hot water temperature by up to 25%",
      "Prevents permanent hot-spot heating damage caused by cemented bird droppings",
      "Trained crew with safety harnesses for high-roof risk tasks — zero liability for you",
      "Quarterly maintenance packages available at discounted rates"
    ]
  },
  {
    slug: "solar-coil-fitting-tube-changing",
    name: "Solar Coil Fitting & Tube Changing",
    category: "Specialized",
    tag: "Solar System Repair",
    iconName: "Wrench",
    image: "/images/services/solar-coil-fitting-tube-changing.png",
    desc: "Professional maintenance, fixing loose coils, and replacement of damaged glass tubes.",
    longDesc: "Over time, solar water heater vacuum tubes can crack or break due to calcium scale accumulation, hard water corrosion, or accidental impact from fallen branches and birds. Swachhath provides specialized replacement of damaged glass tubes, fixing of leaking hot water coils, and thorough descaling flushes to restore your solar water heating system back to brand-new working condition — at a fraction of the cost of full unit replacement.",
    whyItMatters: "A cracked tube doesn't just reduce efficiency — it can leak water into your roof structure causing hidden damage. Replacing individual tubes costs 80% less than buying a new solar heater. Early repair also prevents cascading damage to adjacent tubes and the header tank.",
    steps: [
      { title: "System Drainage & Safe Shutdown", desc: "Isolate the solar system water inputs and safely drain the hot water tank to prevent scalding." },
      { title: "Damaged Tube Removal", desc: "Carefully detach broken or scaled vacuum glass tubes from the header tank without disturbing adjacent tubes." },
      { title: "Coil Scaling Cleanse", desc: "Flush internal tank coils using non-corrosive citric acid descalers to clear calcium and mineral blockages." },
      { title: "New Tube Fitting & Seals", desc: "Install high-grade replacement vacuum tubes with new food-grade silicone rubber seals." }
    ],
    benefits: [
      "Saves 80% compared to replacing the entire solar water heating unit",
      "Stops water leakage and ensures fast hot water recovery within hours",
      "Uses high-grade borosilicate replacement tubes rated for 15+ year lifespan",
      "Includes free inspection of all other tubes during the service visit"
    ]
  },
  {
    slug: "signboard-facade-cleaning",
    name: "Signboard & Facade Cleaning",
    category: "Specialized",
    tag: "High-Reach Shop Fronts",
    iconName: "Layers",
    image: "/images/services/signboard-facade-cleaning.png",
    desc: "High-reach washing and detailing for shops, hotels, and office exterior hoardings.",
    longDesc: "First impressions are everything for businesses. Your exterior storefront facade and luminous signboards collect traffic soot, exhaust residue, monsoon stains, and dust every single day. Swachhath uses telescopic water-fed poles, professional glass scrapers, and targeted pressure jets to clean high-reach commercial hoardings, showroom frontages, and restaurant facades safely from the ground — no scaffolding needed.",
    whyItMatters: "Research shows customers judge a business within 7 seconds of seeing its storefront. A grimy signboard or stained facade subconsciously signals neglect. Regular facade cleaning directly correlates with higher foot traffic and customer trust.",
    steps: [
      { title: "Facade Material Inspection", desc: "Identify ACP sheets, glass panels, flex banners, or painted surfaces to select appropriate cleaning agents." },
      { title: "Telescopic Water Brush Rinsing", desc: "Reach up to 30 feet using water-fed telescopic poles to rinse dust and grime from signage." },
      { title: "Facade Scale Scraping", desc: "Remove tough rain stains, glue marks, and dried tape residue using professional window squeegees." },
      { title: "Dry Polish Finish", desc: "Buff glass facades and ACP panels to a high-gloss, streak-free, like-new polish." }
    ],
    benefits: [
      "Attracts more walk-in customers with a gleaming, professional storefront presence",
      "Safely cleans signs up to 30 feet high without costly scaffolding setups",
      "ACP-safe and glass-safe chemical agents that protect signage color and finish",
      "Quick turnaround — most shops completed in under 3 hours during low-traffic times"
    ]
  },
  {
    slug: "floor-scrubbing-rubbing",
    name: "Floor Scrubbing & Rubbing",
    category: "Commercial",
    tag: "Restore Dull Floors",
    iconName: "Activity",
    image: "/images/services/floor-scrubbing-rubbing.png",
    desc: "Industrial machine scrubbing for marble, granite, vitrified tile, and concrete floors.",
    longDesc: "Vitrified tiles, marble, and granite floors lose their factory gloss due to heavy foot traffic, red mud tracking, soap residue buildup, and daily wear. Swachhath employs industrial 17-inch rotary floor scrubbers with interchangeable brush pads — white for delicate marble, red for medium scrub, and black for aggressive concrete stripping — to dissolve deeply embedded stains, restore safe traction, and bring back the original mirror-like sheen.",
    whyItMatters: "A dull, stained floor makes even a new building look neglected. Professional machine scrubbing is 10x more effective than manual mopping and reveals the original stone or tile beauty hidden under layers of embedded grime. For commercial spaces, clean floors also reduce slip-and-fall liability.",
    steps: [
      { title: "Floor Sweep & Edge Cleaning", desc: "Clear the floor area and manually detail borders, corners, and hard-to-reach baseboards." },
      { title: "Slurry Soap Application", desc: "Spread floor-restoring alkaline soaps across tiles to emulsify surface grime and old wax buildup." },
      { title: "Rotary Floor Machine Scrub", desc: "Run heavy 17-inch rotary floor machines with appropriate pads to lift deep mud, grease, and stains." },
      { title: "Water Extraction & Buffing", desc: "Extract dirty slurry water using industrial wet-vacuums, mop dry, and high-speed buff to shine." }
    ],
    benefits: [
      "Removes dark grout dirt, deep oil/grease layers, and embedded red mud stains",
      "Restores natural tile shine and removes slipperiness for safer walkways",
      "Extremely fast coverage for large commercial halls, showrooms, and retail floors",
      "Available for marble, granite, vitrified tiles, Kota stone, and polished concrete"
    ]
  },
  {
    slug: "temple-masjid-church-cleaning",
    name: "Temple / Masjid / Church Cleaning",
    category: "Commercial",
    tag: "Sacred Space Hygiene",
    iconName: "Heart",
    image: "/images/services/temple-masjid-church-cleaning.png",
    desc: "Dedicated large-scale hygiene services for holy spaces with regional respect and care.",
    longDesc: "Community gathering spaces and places of worship witness massive footfall during festivals, prayers, and ceremonies, requiring top-tier sanitation to prevent bacterial spread and maintain the sanctity and serenity of the space. Swachhath provides specially designed cleaning packages for temples, mosques, churches, community halls, and marriage venues — handled by our respectful, locally-trained regional crew who understand religious customs.",
    whyItMatters: "These are barefoot zones where hundreds walk daily. Without professional cleaning, stone floors become breeding grounds for fungi and bacteria. Our crew understands the sanctity of these spaces — we work around prayer schedules, handle brass items with reverence, and use non-toxic agents safe for barefoot areas.",
    steps: [
      { title: "Respectful Setup Planning", desc: "Coordinate with temple/masjid/church caretakers regarding custom rules, entry restrictions, and timing windows." },
      { title: "Mass Carpet Vacuuming", desc: "Perform deep industrial dust extraction from prayer carpets, mats, jute runners, and cloth coverings." },
      { title: "Floor Sanitization Wash", desc: "Run pressure jets and floor scrubbers on stone verandas, steps, corridors, and kitchen areas." },
      { title: "Brass & Metal Detailing", desc: "Hand-polish large brass lamps, diya stands, bell frames, and decorative metalwork to a mirror finish." }
    ],
    benefits: [
      "Respectful, disciplined local crew fluent in Kannada, Tulu, and Konkani",
      "Special discounts and recurring packages designed to fit prayer and event schedules",
      "Non-toxic, zero-residue sanitizers safe for barefoot worship areas",
      "Experience cleaning 50+ religious and community spaces across coastal Karnataka"
    ]
  },
  {
    slug: "resort-homestay-cleaning",
    name: "Resort & Homestay Cleaning",
    category: "Commercial",
    tag: "5-Star Guest Readiness",
    iconName: "Building2",
    image: "/images/services/resort-homestay-cleaning.png",
    desc: "Quick turnaround deep cleaning for hospitality sectors ensuring 5-star guest reviews.",
    longDesc: "Resorts, boutique hotels, and Airbnb homestays along coastal Karnataka live and die by guest reviews. A single complaint about cleanliness can tank your rating and booking pipeline. We offer rapid-response deep cleaning during guest changeovers — scrubbing toilets to hospital-grade standards, dry-cleaning sofas and chairs, sanitizing all high-touch surfaces, and high-pressure washing pool decks, garden paths, and balconies to deliver that premium 5-star first impression.",
    whyItMatters: "Cleanliness is the #1 factor in guest reviews on Booking.com, Airbnb, and Google. Our hospitality-grade cleaning protocol ensures every guest walks into a space that looks, smells, and feels brand new — protecting your rating, your reputation, and your revenue.",
    steps: [
      { title: "Room Checkout Clearance", desc: "Clear debris, strip all linen, and detail rooms from ceiling to baseboards." },
      { title: "Deep Bathroom Disinfection", desc: "Intense descaling of shower heads, taps, mirrors, and commodes using hospital-grade agents." },
      { title: "Balcony & Deck Jet Clean", desc: "Wash away salt spray, dust, moss, and poolside grime from balconies, decks, and garden furniture." },
      { title: "Odor Removal & Final Sanitization", desc: "Spray premium natural room fresheners, sanitize all switchboards, remotes, and high-touch surfaces." }
    ],
    benefits: [
      "Ensures 5-star guest satisfaction with spotless, hotel-standard bathrooms and rooms",
      "Handles heavy salt-spray and monsoon mud buildup common in beachside locations",
      "Fast turnaround options (same-day) to accommodate tight booking schedules",
      "Flexible packages — per-room, per-property, or recurring seasonal contracts"
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesList.find((s) => s.slug === slug);
}
