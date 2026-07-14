import { Star, ShieldCheck, Zap, Phone } from "lucide-react";

export default function Hero() {
  const whatsappNumber = "+919481977717";
  const whatsappMessage = encodeURIComponent(
    "Hi Swachhath Cleaning Solution, I would like to book a cleaning service."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const phoneCallLink = `tel:${whatsappNumber}`;

  return (
    <section className="relative overflow-hidden bg-[url('/images/hero-bg-mobile-clean-v3.png')] md:bg-[url('/images/hero-bg-desktop-clean-v3.png')] bg-cover bg-center border-b border-slate-100 min-h-[70vh] sm:min-h-0 flex items-center py-12 sm:py-16 md:py-24">
      {/* Strong gradient overlay from left-to-right to guarantee absolute text contrast on the left, fading to transparent on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-white/85 via-white/50 to-transparent -z-10" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          
          {/* Text Content - No card box container, just clean readable typography */}
          <div className="md:col-span-7 flex flex-col items-center text-center sm:items-start sm:text-left justify-center space-y-6 max-w-xl">
            <div className="inline-flex items-center space-x-1.5 bg-primary-light text-primary px-3 py-1 rounded-full text-xs font-extrabold w-fit tracking-wider shadow-3xs border border-primary/10">
              <Star className="h-3.5 w-3.5 fill-current text-primary" />
              <span>SWACHHATH CLEANING SOLUTION</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5.5xl font-black tracking-tight text-slate-900 leading-tight">
              Expert Deep Cleaning <br className="hidden sm:inline" />
              <span className="text-primary">For Home & Business</span>
            </h1>

            {/* Badges - Wrapped in solid white pill containers for high visibility against the background image */}
            <div className="hidden sm:flex flex-row flex-wrap items-center gap-3 pt-1 w-full">
              <div className="flex items-center space-x-2 bg-white/95 border border-slate-150 px-3.5 py-1.5 rounded-full shadow-3xs w-fit">
                <ShieldCheck className="h-4.5 w-4.5 text-primary shrink-0" />
                <span className="text-xs text-slate-800 font-extrabold">Verified Professionals</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/95 border border-slate-150 px-3.5 py-1.5 rounded-full shadow-3xs w-fit">
                <Zap className="h-4.5 w-4.5 text-secondary shrink-0" />
                <span className="text-xs text-slate-800 font-extrabold">Eco-Friendly Sanitizers</span>
              </div>
            </div>

            {/* CTAs - Side-by-side button placement */}
            <div className="flex flex-row items-center justify-center sm:justify-start gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.75.002-2.605-1.002-5.054-2.829-6.88-1.827-1.827-4.26-2.83-6.875-2.83-5.448 0-9.873 4.37-9.876 9.75-.001 1.833.466 3.626 1.353 5.197l-.995 3.637 3.735-.975zm11.367-7.384c-.3-.15-1.772-.875-2.046-.975-.276-.1-.476-.15-.676.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.487-.893-.797-1.496-1.783-1.67-2.083-.175-.3-.018-.463.13-.61.134-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525c-.075-.15-.676-1.625-.926-2.225-.244-.589-.493-.51-.676-.519-.174-.009-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.112 4.521.714.308 1.272.492 1.707.63.717.228 1.368.196 1.883.118.574-.088 1.772-.724 2.022-1.424.25-.7.25-1.3 0-1.425-.075-.125-.275-.2-.575-.35z" />
                </svg>
                <span>Chat with Us</span>
              </a>
              <a
                href={phoneCallLink}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold rounded-lg text-slate-700 hover:text-primary bg-white border border-slate-350 hover:border-primary shadow-xs hover:bg-slate-50 transition-all duration-200"
              >
                <Phone className="w-4.5 h-4.5 mr-1.5 text-primary shrink-0" />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Highlight Cards / Compact Graphic - Hidden completely on mobile */}
          <div className="hidden md:block md:col-span-5 relative">
            <div className="bg-white/95 backdrop-blur-xs rounded-2xl border border-slate-100 p-5.5 shadow-lg max-w-sm mx-auto relative">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">Our Footprint</span>
                <span className="inline-flex items-center text-xs font-bold text-primary bg-primary-light px-2.5 py-0.5 rounded-sm">
                  Active
                </span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3.5">
                  <div className="flex-shrink-0 h-5.5 w-5.5 rounded-full bg-primary-light text-primary flex items-center justify-center font-extrabold text-xs">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-800">High-Pressure Wash</h3>
                    <p className="text-xs text-slate-500">Decks, compounds, walls, and solar setups.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3.5">
                  <div className="flex-shrink-0 h-5.5 w-5.5 rounded-full bg-primary-light text-primary flex items-center justify-center font-extrabold text-xs">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-800">Sump & Water Tanks</h3>
                    <p className="text-xs text-slate-500">Thorough cleaning for safe water storage.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3.5">
                  <div className="flex-shrink-0 h-5.5 w-5.5 rounded-full bg-primary-light text-primary flex items-center justify-center font-extrabold text-xs">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-800">Homes & Offices</h3>
                    <p className="text-xs text-slate-500">Detailed dust, dirt, and stain scrubbing.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>📍 Coastal Karnataka</span>
                <span className="font-bold text-slate-700">★ 4.9 Rated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
