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
    longDesc: "Our Flat & House Cleaning service ensures your home stays healthy and welcoming. Our trained local staff systematically deep-cleans and sanitizes every room, leaving your living spaces free from allergens, stubborn dust, and bacteria.",
    whyItMatters: "High coastal humidity accelerates mold and dust accumulation. Regular professional deep cleaning protects family health, eliminates allergens, and keeps rooms fresh.",
    steps: [
      { title: "Declutter & Dusting", desc: "Systematic high-to-low dusting of fans, ceilings, light fittings, and window grills." },
      { title: "Kitchen Sanitization", desc: "Thorough cleaning of countertops, cabinet exteriors, and sink scrubbing." },
      { title: "Bathroom Deep Clean", desc: "Chemical wash of tiles, floors, toilets, and mirrors to eliminate scale." },
      { title: "Floor Mop & Polish", desc: "Disinfectant sweeping and wet mopping of all room floors." }
    ],
    benefits: [
      "Trained, regional Karnataka staff who respect your privacy",
      "Eco-friendly, chemical-safe disinfectants used throughout",
      "Systematic room-by-room cleaning covering hard-to-reach corners",
      "Post-cleaning walk-through inspection with you before we leave"
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
    longDesc: "Our Deep Cleaning service tackles accumulated grime, mud, and water scale. Using mechanical floor scrubbers and industrial solutions, we restore the shine to your tiles, glass panels, and cupboards. Perfect for post-monsoon refreshes or new move-ins.",
    whyItMatters: "Regular mopping only pushes dirt into tile grout. Mechanical scrubbing extracts deeply embedded grime that standard home equipment cannot reach, restoring floor shine.",
    steps: [
      { title: "Deep Stain Assessment", desc: "Identify stubborn hard-water scale and tile stains for targeted treatment." },
      { title: "High-Pressure Vacuuming", desc: "Remove deep-seated dirt from window tracks and sliding door crevices." },
      { title: "Mechanical Floor Scrubbing", desc: "Run professional scrubbing machines to break through grease and red mud layers." },
      { title: "Polishing & Detailing", desc: "Microfiber wiping of premium fixtures, glass, and electrical outlets." }
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
    longDesc: "Clean water starts with a sanitized storage tank. We offer professional mechanical cleaning for sumps and overhead tanks of any size, removing silt, algae, and bacteria using safe, food-grade disinfectants.",
    whyItMatters: "Water tanks should be cleaned every six months to prevent waterborne bacteria (like E. coli) and algae from entering your drinking and bathing water supply.",
    steps: [
      { title: "De-watering & Sludge Sucking", desc: "Pump out remaining dirty water and manually remove bottom sludge." },
      { title: "High-Pressure Jet Clean", desc: "Wash all interior walls and corners using industrial high-pressure jets." },
      { title: "Antibacterial Spraying", desc: "Apply food-grade, safe disinfectants to kill remaining bacteria and spores." },
      { title: "Final Flush & Verification", desc: "Clear-water flush to remove all cleaning residue, leaving the tank ready." }
    ],
    benefits: [
      "Prevents waterborne sickness by destroying bacteria and algae",
      "Food-grade sanitizers that leave no chemical odor in your tap water",
      "Full before-and-after photo documentation shared on WhatsApp",
      "Available for both overhead rooftop tanks and underground sumps"
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
    longDesc: "Our Vacuum Cleaning & Sofa Rubbing service uses high-power extractors and eco-safe dry-shampoos to scrub fabric grains, pulling out layers of embedded soil, sweat residue, and bad odors that regular vacuuming misses.",
    whyItMatters: "Upholstery fabric harbors thousands of invisible dust mites. Professional extraction removes 98% of allergens, transforming your sofas into fresh, sanitary comfort zones.",
    steps: [
      { title: "Industrial Dry Vacuum", desc: "Run high-powered suction to pull out loose dust and hair from cushions." },
      { title: "Upholstery Shampooing", desc: "Apply targeted fabric-safe cleaners to dissolve sweat and coffee/tea stains." },
      { title: "Manual Sofa Rubbing", desc: "Use soft brush rotators or microfibers to gently lift stains from fabric fibers." },
      { title: "Extraction & Deodorizing", desc: "Extract moisture along with dissolved dirt, leaving fabrics fresh and clean." }
    ],
    benefits: [
      "Significantly reduces indoor dust-allergy triggers",
      "Restores original color and freshness of sofas and cushions",
      "Quick-drying process allows re-use in a few hours",
      "Safe for all fabric types including velvet, leather, and cotton"
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
    longDesc: "Protect your expensive furniture investments from mold, wood dust, and surface dullness. We provide dedicated polishing for wooden tables, cabinets, and doors, alongside sanitization of mattresses and dining chairs.",
    whyItMatters: "Coastal humidity causes teak and rosewood to develop white mold and crack. Professional wax-polishing seals the wood, preventing moisture damage and restoring rich gloss.",
    steps: [
      { title: "Surface Clearing", desc: "Wipe off loose dust, spider webs, and surface debris from furniture." },
      { title: "Wood & Metal Treatment", desc: "Apply wood-nourishing creams or specialized metal polishers to handles." },
      { title: "Mattress Sanitization", desc: "Vacuum and apply steam/UV-light sanitizers to eliminate bed bugs." },
      { title: "Buffing & Polish Finish", desc: "Wipe with soft lint-free cloths to bring back a rich, premium gloss." }
    ],
    benefits: [
      "Extends the lifespan of premium teak, rosewood, and engineered board",
      "Eliminates mattress odors, dust-mites, and surface mold growth",
      "No sticky residue left on surfaces",
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
    longDesc: "Our High Pressure Wash Cleaning service uses industrial-grade water jet machines (operating at up to 150 bar pressure) to safely strip off years of accumulated stain, slippery green moss, and red mud without damaging paint or concrete.",
    whyItMatters: "Moss-covered steps and verandas are serious slip hazards. Pressure washing removes this threat in minutes, restoring natural stone textures and enhancing compound look.",
    steps: [
      { title: "Pre-soaking Stain Areas", desc: "Apply targeted cleaning agents to soften tough grease and heavy moss patches." },
      { title: "High-Pressure Jetting", desc: "Direct narrow water jet streams to strip dirt layers from tiles and concrete." },
      { title: "Corner & Crevice Detailing", desc: "Focus jetting on grooves, gate hinges, and narrow drainage lines." },
      { title: "Post-wash Scrubbing & Sweep", desc: "Sweep away detached mud and flush the clean compound driveway." }
    ],
    benefits: [
      "Removes slippery moss layers, making driveways safe to walk on",
      "Cleans compound walls and gates to look freshly painted",
      "Zero harsh scrubbing that scratches natural stones or tiles",
      "Covers large areas quickly — driveways, verandas, and building exteriors"
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
    longDesc: "Dust, bird droppings, and hard-water mineral deposits on solar panels reduce electricity and hot water generation by up to 25%. Our service uses soft non-abrasive brushes, safety rigs, and pure water to clean rooftop installations safely.",
    whyItMatters: "Dirty plates decrease solar light absorption. Regular quarterly cleaning restores full energy production and prevents permanent spot-heating damage to solar cells.",
    steps: [
      { title: "Safety Rigging & Inspection", desc: "Secure the crew with harness lines and check panels for cracks." },
      { title: "Soft Wash Flush", desc: "Rinse solar plates with low-pressure water to wash off loose dust." },
      { title: "Microfiber Scrubbing", desc: "Clean panels using non-abrasive wipers and solar-safe glass soaps." },
      { title: "Squeegee Dry & Report", desc: "Squeegee off water to prevent scale spots, leaving glass perfectly clear." }
    ],
    benefits: [
      "Boosts solar energy production and hot water temperature by up to 25%",
      "Prevents permanent hot-spot heating damage caused by bird droppings",
      "Safe, trained crew handling high-roof risk tasks",
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
    longDesc: "We provide replacement of damaged solar water heater glass tubes, leak fixes for hot water coils, and descaling flushes to restore your solar water heating system back to peak performance at a fraction of the cost of a new unit.",
    whyItMatters: "Cracked vacuum tubes cause hot water leaks and reduce system heating. Replacing individual parts early saves money and prevents damage to the header tank.",
    steps: [
      { title: "System Drainage & Safe Shutdown", desc: "Isolate the solar system inputs and safely drain the hot water tank." },
      { title: "Damaged Tube Removal", desc: "Carefully detach broken or scaled vacuum glass tubes from the header." },
      { title: "Coil Scaling Cleanse", desc: "Flush tank coils using non-corrosive descalers to clear calcium blockages." },
      { title: "New Tube Fitting & Seals", desc: "Install high-grade replacement tubes with new food-grade silicone seals." }
    ],
    benefits: [
      "Saves money compared to replacing the whole solar tank unit",
      "Stops water leakage and ensures fast hot water recovery",
      "Uses high-grade replacement tubes and heat-resistant seals",
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
    longDesc: "First impressions matter. Your storefront facade and signboards collect heavy traffic soot and rain stains. Swachhath uses high-reach telescopic water poles and glass squeegees to clean exterior hoardings safely from the ground.",
    whyItMatters: "A clean storefront directly attracts more foot traffic. Regular facade maintenance signals business quality and keeps shop signboards shining brightly.",
    steps: [
      { title: "Facade Material Inspection", desc: "Identify ACP sheets, glass panels, or flex banner material to select soaps." },
      { title: "Telescopic Water Brush Rinsing", desc: "Reach up to 30 feet using telescopic poles to wash off dirt." },
      { title: "Facade Scale Scraping", desc: "Wipe off tough rain stains and glue spots using squeegees." },
      { title: "Dry Polish Finish", desc: "Buff glass facades to a high-gloss, streak-free polish." }
    ],
    benefits: [
      "Attracts clients with a gleaming, professional storefront",
      "Safely cleans high-reach signs without scaffolding setups",
      "ACP-safe chemical agents that protect signage color and gloss",
      "Quick turnaround — most shops completed in under 3 hours"
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
    longDesc: "Vitrified tiles, marble, and granite floors lose shine due to high foot traffic and red mud. We employ industrial floor scrubbing machines with specialized pads to strip grime, lift stains, and restore floor traction.",
    whyItMatters: "Daily mopping only pushes dirt into grout. Professional mechanical scrubbing deep-cleans the pores of the stone, removing slippery layers and dull film.",
    steps: [
      { title: "Floor Sweep & Edge Cleaning", desc: "Clear floor area and manually clean borders and corners." },
      { title: "Slurry Soap Application", desc: "Spread floor-restoring soaps across tiles to emulsify surface grime." },
      { title: "Rotary Floor Machine Scrub", desc: "Run heavy 17-inch rotary floor machines to lift deep mud, grease, and stains." },
      { title: "Water Extraction & Buffing", desc: "Extract dirty slurry water using wet-vacuums, mop dry, and polish-buff." }
    ],
    benefits: [
      "Removes dark grout dirt and deep oil/grease layers",
      "Restores natural tile shine and removes slipperiness",
      "Extremely fast cleanup for large commercial halls, showrooms, and shops",
      "Available for marble, granite, vitrified tiles, and polished concrete"
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
    longDesc: "Holy spaces host mass gatherings, requiring top-tier sanitation. We provide specialized deep cleaning packages for temples, mosques, and churches, handled by a respectful local crew fluent in regional languages.",
    whyItMatters: "Places of worship are barefoot zones. Deep washing of stone steps, vacuuming massive prayer carpets, and polishing brass fixtures maintains sacred hygiene and safety.",
    steps: [
      { title: "Respectful Setup Planning", desc: "Coordinate with caretakers regarding rules, entry restrictions, and timing." },
      { title: "Mass Carpet Vacuuming", desc: "Perform deep dust extraction from prayer carpets and runners." },
      { title: "Floor Sanitization Wash", desc: "Run pressure jets and floor scrubbers on stone verandas and steps." },
      { title: "Brass & Metal Detailing", desc: "Clean and hand-polish large brass lamps and rails to a mirror finish." }
    ],
    benefits: [
      "Respectful, disciplined local crew speaking Kannada/Tulu/Konkani",
      "Special discounts and customized schedules to fit prayer timings",
      "Non-toxic, safe sanitizers used in barefoot areas",
      "Experience cleaning 50+ religious and community spaces"
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
    longDesc: "Airbnb homestays and resorts rely on cleanliness ratings. We offer rapid-response deep cleaning during guest changeovers — scrubbing bathrooms to pristine standards, sanitizing rooms, and jet-washing verandas and pool decks.",
    whyItMatters: "Cleanliness is the number one driver of booking reviews. Hospitality-grade sanitation ensures guest satisfaction, protects your Airbnb ratings, and boosts booking rates.",
    steps: [
      { title: "Room Checkout Clearance", desc: "Clear debris, strip linen, and detail rooms from dust." },
      { title: "Deep Bathroom Disinfection", desc: "Intense descaling of bathroom shower heads, taps, and commodes." },
      { title: "Balcony & Deck Jet Clean", desc: "Wash away salt spray, dust, and moss from balconies and pool decks." },
      { title: "Odor Removal & Sanitization", desc: "Spray natural, premium room fresheners and sanitize switchboards." }
    ],
    benefits: [
      "Ensures guest satisfaction with 100% spotless bathrooms",
      "Handles heavy salt-spray and mud buildup from beachside locations",
      "Fast turnaround options to accommodate booking schedules",
      "Flexible packages — per-room, per-property, or recurring seasonal contracts"
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesList.find((s) => s.slug === slug);
}
