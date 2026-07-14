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
    image: "/images/home-cleaning.png",
    desc: "Complete sweep, mop, dust, and deep sanitization of all rooms, kitchens, and toilets.",
    longDesc: "Your home is your sanctuary, and our Flat & House Cleaning service ensures it stays healthy, clean, and welcoming. We go beyond basic broom sweeping to deliver a meticulous deep clean. Our trained local staff systematically sanitizes every room, leaving your living spaces free from allergens, stubborn dust, and bacteria.",
    steps: [
      { title: "Declutter & Dusting", desc: "Systematic high-to-low dusting of fans, ceilings, and light fittings." },
      { title: "Kitchen Sanitization", desc: "Thorough cleaning of countertops, cabinet exteriors, and sink scrubbing." },
      { title: "Bathroom Deep Clean", desc: "Chemical wash of tiles, floors, toilets, and mirrors to eliminate stains." },
      { title: "Floor Mop & Polish", desc: "Disinfectant sweeping and wet mopping of all room floors." }
    ],
    benefits: [
      "Trained, regional Karnataka staff who respect your privacy",
      "Eco-friendly, chemical-safe disinfectants used throughout",
      "Systematic cleaning covering hard-to-reach corners"
    ]
  },
  {
    slug: "basic-deep-cleaning",
    name: "Basic & Deep Cleaning",
    category: "Residential",
    tag: "Intense Dirt Removal",
    iconName: "Sparkles",
    image: "/images/home-cleaning.png",
    desc: "Intense cleanup including stain removal, tile scrubbing, fan dusting, and window washing.",
    longDesc: "When a standard daily sweep is not enough, our Basic & Deep Cleaning service steps in to tackle layers of accumulated grime, mud, and water stains. Using professional mechanical scrubbers and industrial cleaning solutions, we restore the shine to your tiles, glass panels, windows, and cupboards.",
    steps: [
      { title: "Deep Stain Assessment", desc: "Identify stubborn hard-water scale and tile stains for targeted treatment." },
      { title: "High-Pressure Vacuuming", desc: "Remove deep-seated dirt from window tracks, sliding doors, and crevices." },
      { title: "Mechanical Floor Scrubbing", desc: "Run scrubbing machines to scrub away grease, dirt, and mud layers." },
      { title: "Polishing & Detailing", desc: "Microfiber wiping of premium fixtures, glass, and electrical outlets." }
    ],
    benefits: [
      "Tackles tough coastal humidity stains and mud layers",
      "Restores look of dull tiles, window frames, and glass panels",
      "Includes mechanical equipment that maids do not bring"
    ]
  },
  {
    slug: "overhead-tank-sump-cleaning",
    name: "Overhead Tank & Sump Cleaning",
    category: "Residential",
    tag: "Safe Drinking Water",
    iconName: "Droplet",
    image: "/images/tank-cleaning.png",
    desc: "Mechanical water tank cleaning, high-pressure washing, sludge removal, and sanitization.",
    longDesc: "Clean water starts with a clean storage tank. Silt, rust, algae, and insect breeding are common in sumps and overhead tanks. Swachhath offers a professional mechanical tank cleaning service that washes, sanitizes, and disinfects your storage systems without wasting excessive water.",
    steps: [
      { title: "De-watering & Sludge Sucking", desc: "Pump out remaining dirty water and manually remove bottom sludge." },
      { title: "High-Pressure Jet Clean", desc: "Wash all interior walls, ceilings, and corners using high-pressure jets." },
      { title: "Antibacterial Spraying", desc: "Apply food-grade, safe disinfectants to kill remaining bacteria and spores." },
      { title: "UV Sterilization & Flush", desc: "Final clear-water flush leaving the tank completely ready for use." }
    ],
    benefits: [
      "Avoids waterborne sickness by destroying bacteria and algae",
      "Food-grade sanitizers that leave no chemical odor in your tap water",
      "Full location-verified photo report of before & after cleaning"
    ]
  },
  {
    slug: "vacuum-cleaning-sofa-rubbing",
    name: "Vacuum Cleaning & Sofa Rubbing",
    category: "Residential",
    tag: "Dust & Allergen Extraction",
    iconName: "Wind",
    image: "/images/home-cleaning.png",
    desc: "Deep vacuuming of carpets, curtains, and dust extraction from all fabric surfaces.",
    longDesc: "Fabric surfaces act as dust magnets, accumulating pet hair, dust mites, and sweat residue over time. Our Vacuum Cleaning & Sofa Rubbing service uses high-power extractors and eco-safe dry-shampoos to scrub fabric grains, pulling out layers of embedded soil and bad odors.",
    steps: [
      { title: "Industrial Dry Vacuum", desc: "Run high-powered suction to pull out loose dust, hair, and dry debris." },
      { title: "Upholstery Shampooing", desc: "Apply targeted fabric cleaners to dissolve sweat, grease, and tea/coffee stains." },
      { title: "Manual Sofa Rubbing", desc: "Use soft brush rotators or microfibers to gently lift stains from fabric fibers." },
      { title: "Extraction & Deodorizing", desc: "Extract moisture along with dissolved dirt, leaving fabrics fresh and clean." }
    ],
    benefits: [
      "Significantly reduces indoor dust-allergy triggers",
      "Restores original color and freshness of sofas and cushions",
      "Quick-drying process allows re-use in a few hours"
    ]
  },
  {
    slug: "furniture-cleaning",
    name: "Furniture Cleaning & Polishing",
    category: "Residential",
    tag: "Wood & Cushion Renewal",
    iconName: "Armchair",
    image: "/images/home-cleaning.png",
    desc: "Polishing wooden furniture and scrubbing/shampooing sofas, chairs, and mattresses.",
    longDesc: "Protect your expensive furniture assets from mold, wood dust, and surface dullness. We provide dedicated polishing for wooden tables, cabinets, and doors, alongside sanitization of mattresses and dining chairs. Ideal for seasonal cleanups or preparing properties for new tenants.",
    steps: [
      { title: "Surface Clearing", desc: "Wipe off loose dust, spider webs, and surface debris from furniture." },
      { title: "Wood & Metal Treatment", desc: "Apply specific wood-nourishing creams or specialized metal polishers." },
      { title: "Mattress Sanitization", desc: "Vacuum and apply steam/UV-light sanitizers to mattresses to eliminate bugs." },
      { title: "Buffing & Polish Finish", desc: "Wipe with soft lint-free cloths to bring back a rich, premium gloss." }
    ],
    benefits: [
      "Extends the lifespan of premium teak, rosewood, and engineered board",
      "Eliminates mattress odors, dust-mites, and surface mold growth",
      "No sticky residue left on surfaces"
    ]
  },
  {
    slug: "high-pressure-wash-cleaning",
    name: "High Pressure Wash Cleaning",
    category: "Specialized",
    tag: "De-griming Compounds",
    iconName: "Droplet",
    image: "/images/tank-cleaning.png",
    desc: "Blast away deep grime from driveways, exterior walls, compounds, and gates.",
    longDesc: "Monsoon seasons leave driveways, compound walls, gates, and verandas coated in slippery green moss and thick layers of red mud. Our High Pressure Wash Cleaning service uses industrial-grade water jet machines (operating at up to 150 bar pressure) to safely strip off years of stain, moss, and dirt without damaging paint or plaster.",
    steps: [
      { title: "Pre-soaking Stain Areas", desc: "Apply targeted cleaning agents to soften tough grease and heavy moss patches." },
      { title: "High-Pressure Jetting", desc: "Direct specialized narrow water jet streams to strip dirt layers from tiles and concrete." },
      { title: "Corner & Crevice Detailing", desc: "Focus jetting on grooves, gate hinges, and narrow drainage lines." },
      { title: "Post-wash Scrubbing & Sweep", desc: "Sweep away detached mud and flush the clean compound driveway." }
    ],
    benefits: [
      "Removes slippery moss layers, making driveways safe to walk on",
      "Cleans compound walls and gates to look freshly painted",
      "Zero harsh scrubbing that scratches natural stones or tiles"
    ]
  },
  {
    slug: "solar-tubes-panel-cleaning",
    name: "Solar Tubes & Panel Cleaning",
    category: "Specialized",
    tag: "Maximize Solar Power",
    iconName: "Sun",
    image: "/images/solar-cleaning.png",
    desc: "Safe water jet cleaning of solar plates to maximize light absorption and efficiency.",
    longDesc: "Did you know that dust, bird droppings, and pollen on solar panels can reduce your solar hot water and electric generation efficiency by up to 25%? Our specialized Solar Panel & Glass Tube Cleaning service uses soft brushes, pure water, and safety rigs to clean roof-mounted solar installations without scratching the delicate glass surfaces.",
    steps: [
      { title: "Safety Rigging & Inspection", desc: "Secure the crew with harness lines on the roof and check panels for cracks." },
      { title: "Soft Wash Flush", desc: "Rinse solar plates with low-pressure water to wash off loose dust and grit." },
      { title: "Microfiber Scrubbing", desc: "Clean panels using non-abrasive wipers and solar-safe glass soaps." },
      { title: "Squeegee Dry & Efficiency Test", desc: "Squeegee off water to prevent hard water scale spots, leaving glass perfectly clear." }
    ],
    benefits: [
      "Boosts solar energy production and hot water temperature",
      "Prevents hot-spot heating damage caused by permanent bird droppings",
      "Safe, trained crew handling high-roof risk tasks"
    ]
  },
  {
    slug: "solar-coil-fitting-tube-changing",
    name: "Solar Coil Fitting & Tube Changing",
    category: "Specialized",
    tag: "Solar System Repair",
    iconName: "Wrench",
    image: "/images/solar-cleaning.png",
    desc: "Professional maintenance, fixing loose coils, and replacement of damaged glass tubes.",
    longDesc: "Over time, solar water heater vacuum tubes can crack or break due to scale accumulation, hard water, or accidental impact. Swachhath provides specialized replacement of damaged glass tubes, fixes leaking hot water coils, and carries out scaling flushes to restore your solar water system back to brand-new condition.",
    steps: [
      { title: "System Drainage & Safe Shutdown", desc: "Isolate the solar system inputs and safely drain the hot water tank." },
      { title: "Damaged Tube Removal", desc: "Carefully detach broken or scaled vacuum glass tubes from the header tank." },
      { title: "Coil Scaling Cleanse", desc: "Flush tank coils using non-corrosive descalers to clear calcium blockages." },
      { title: "New Tube Fitting & Seals", desc: "Install high-grade replacement tubes with new food-grade rubber seals." }
    ],
    benefits: [
      "Saves money compared to replacing the whole solar tank unit",
      "Stops water leakage and ensures fast hot water recovery",
      "Uses high-grade replacement tubes and heat-resistant seals"
    ]
  },
  {
    slug: "signboard-facade-cleaning",
    name: "Signboard & Facade Cleaning",
    category: "Specialized",
    tag: "High-Reach Shop Fronts",
    iconName: "Layers",
    image: "/images/premium-cleaning.png",
    desc: "High-reach washing and detailing for shops, hotels, and office exterior hoardings.",
    longDesc: "First impressions are vital for businesses. Your exterior storefront facade and luminous signboards collect traffic soot, dust, and rain stains. Swachhath uses telescopic poles, glass scrapers, and pressure jets to clean high-reach commercial hoardings, showrooms, and restaurant fronts safely from the ground.",
    steps: [
      { title: "Facade Material Inspection", desc: "Identify ACP sheets, glass panels, or flex banner material to select appropriate soaps." },
      { title: "Telescopic Water Brush Rinsing", desc: "Wipe down dust using high-reach water-fed poles up to 30 feet." },
      { title: "Facade Scale Scraping", desc: "Wipe off tough rain stains and glue spots using safety window squeegees." },
      { title: "Dry Polish Finish", desc: "Buff glass facades to a high-gloss, streak-free polish." }
    ],
    benefits: [
      "Attracts clients with a gleaming, professional storefront",
      "Safely cleans high-reach signs without scaffolding setups",
      " ACP-safe chemical agents that protect signage color and gloss"
    ]
  },
  {
    slug: "floor-scrubbing-rubbing",
    name: "Floor Scrubbing & Rubbing",
    category: "Commercial",
    tag: "Restore Dull Floors",
    iconName: "Activity",
    image: "/images/premium-cleaning.png",
    desc: "Industrial machine scrubbing for marble, granite, vitrified tile, and concrete floors.",
    longDesc: "Vitrified tiles, marble, and granite floors lose their gloss due to foot traffic, red mud tracking, and soap residue. Swachhath employs industrial floor scrubbers with specific brush pads (white for delicate floors, red/black for scrubbing) to dissolve stains, restore traction, and renew dull tile surfaces.",
    steps: [
      { title: "Floor Sweep & Edge Cleaning", desc: "Clear floor area and manually clean borders and corners." },
      { title: "Slurry Soap Application", desc: "Spread floor-restoring soaps across tiles to emulsify surface grime." },
      { title: "Rotary Floor Machine Scrub", desc: "Run heavy 17-inch rotary floor machines to lift deep mud, grease, and stains." },
      { title: "Water Extraction & Buffing", desc: "Extract dirty slurry water using wet-vacuums, mop dry, and polish-buff." }
    ],
    benefits: [
      "Removes dark grout dirt and deep oil/grease layers",
      "Restores natural tile shine and removes slipperiness",
      "Extremely fast cleanup for large commercial halls, showrooms, and shops"
    ]
  },
  {
    slug: "temple-masjid-church-cleaning",
    name: "Temple / Masjid / Church Cleaning",
    category: "Commercial",
    tag: "Sacred Space Hygiene",
    iconName: "Heart",
    image: "/images/premium-cleaning.png",
    desc: "Dedicated large-scale hygiene services for holy spaces with regional respect and care.",
    longDesc: "Community centers and places of worship witness massive gatherings, requiring top-tier sanitation to prevent spread of bacteria and maintain sacred serenity. Swachhath provides special packages for temples, mosques, churches, and community halls with our respectful, local regional crew.",
    steps: [
      { title: "Respectful Setup Planning", desc: "Align with holy space caretakers regarding custom rules, entry restrictions, and timing." },
      { title: "Mass Carpet Vacuuming", desc: "Perform deep dust extraction from prayer carpets, mats, and runners." },
      { title: "Floor Sanitization Wash", desc: "Run pressure jets and floor scrubbers on stone verandas and steps." },
      { title: "Brass & Metal Detailing", desc: "Clean and hand-polish large brass lamps, rails, and decorative items." }
    ],
    benefits: [
      "Respectful, disciplined local crew speaking Kannada/Tulu/Konkani",
      "Special discounts and customized schedules to fit prayer timings",
      "Non-toxic, safe sanitizers used in barefoot areas"
    ]
  },
  {
    slug: "resort-homestay-cleaning",
    name: "Resort & Homestay Cleaning",
    category: "Commercial",
    tag: "5-Star Guest Readiness",
    iconName: "Building2",
    image: "/images/premium-cleaning.png",
    desc: "Quick turnaround deep cleaning for hospitality sectors ensuring 5-star guest reviews.",
    longDesc: "Resorts, hotels, and Airbnb homestays in coastal Karnataka rely on guest reviews for business. We offer rapid-response deep cleaning during guest changeovers, cleaning toilets to pristine standards, dry-cleaning sofas and chairs, and high-pressure washing pool decks, lawns, and driveways.",
    steps: [
      { title: "Room Checkout Clearance", desc: "Clear debris, strip linen, and detail rooms from dust." },
      { title: "Deep Bathroom Disinfection", desc: "Intense descaling of bathroom shower heads, taps, and commodes." },
      { title: "Balcony & Deck Jet Clean", desc: "Wash away salt spray, dust, and moss from balconies and pool decks." },
      { title: "Odor Removal & Sanitization", desc: "Spray natural, premium room fresheners and sanitize switchboards/remotes." }
    ],
    benefits: [
      "Ensures guest satisfaction with 100% spotless bathrooms",
      "Handles heavy salt-spray and mud buildup from beachside locations",
      "Fast turnaround options to accommodate booking schedules"
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesList.find((s) => s.slug === slug);
}
