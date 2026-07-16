import { Star, ShieldCheck, Leaf, Phone, Droplets, MapPin } from "lucide-react";

export default function Hero() {
  const whatsappNumber = "+919481977717";
  const whatsappMessage = encodeURIComponent(
    "Hi Swachhath Cleaning Solution, I would like to book a cleaning service."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const phoneCallLink = `tel:${whatsappNumber}`;

  return (
    <section className="relative overflow-hidden min-h-[70vh] flex items-center bg-[url('/images/hero-exterior-mobile.png')] md:bg-[url('/images/hero-exterior-desktop.png')] bg-cover bg-bottom hero-tuned-bg bg-no-repeat">
      {/* Solid black overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl z-0" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 w-full py-16 sm:py-20 z-10 hero-tuned-container">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          
          {/* Text Content */}
          <div className="md:col-span-8 lg:col-span-7 flex flex-col items-center text-center sm:items-start sm:text-left justify-center space-y-6 max-w-xl">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.15]">
              Expert Deep Cleaning <br className="hidden sm:inline" />
              For <span className="text-secondary">Home & Business</span>
            </h1>

            {/* Trust badges - 2x2 grid type readable badges */}
            <div className="grid grid-cols-2 gap-3 w-full pt-2 max-w-lg">
              <div className="flex items-center space-x-2.5 bg-white/10 border border-white/10 p-3 rounded-xl backdrop-blur-xs hover:bg-white/15 transition-colors">
                <ShieldCheck className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-[11px] sm:text-xs text-white font-extrabold leading-tight text-left">Verified Professionals</span>
              </div>
              <div className="flex items-center space-x-2.5 bg-white/10 border border-white/10 p-3 rounded-xl backdrop-blur-xs hover:bg-white/15 transition-colors">
                <Leaf className="h-5 w-5 text-emerald-400 shrink-0" />
                <span className="text-[11px] sm:text-xs text-white font-extrabold leading-tight text-left">Eco-Friendly Products</span>
              </div>
              <div className="flex items-center space-x-2.5 bg-white/10 border border-white/10 p-3 rounded-xl backdrop-blur-xs hover:bg-white/15 transition-colors">
                <Star className="h-5 w-5 text-amber-400 fill-amber-400 shrink-0" />
                <span className="text-[11px] sm:text-xs text-white font-extrabold leading-tight text-left">4.9 Rated (500+ Reviews)</span>
              </div>
              <div className="flex items-center space-x-2.5 bg-white/10 border border-white/10 p-3 rounded-xl backdrop-blur-xs hover:bg-white/15 transition-colors">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-[11px] sm:text-xs text-white font-extrabold leading-tight text-left">Local Karnataka Crew</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-row items-center justify-center sm:justify-start gap-3 pt-2 w-full sm:w-auto">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-extrabold rounded-xl text-white bg-secondary hover:bg-secondary-hover shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 cursor-pointer"
              >
                <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.75.002-2.605-1.002-5.054-2.829-6.88-1.827-1.827-4.26-2.83-6.875-2.83-5.448 0-9.873 4.37-9.876 9.75-.001 1.833.466 3.626 1.353 5.197l-.995 3.637 3.735-.975zm11.367-7.384c-.3-.15-1.772-.875-2.046-.975-.276-.1-.476-.15-.676.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.487-.893-.797-1.783-1.67-2.083-.175-.3-.018-.463.13-.61.134-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525c-.075-.15-.676-1.625-.926-2.225-.244-.589-.493-.51-.676-.519-.174-.009-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.112 4.521.714.308 1.272.492 1.707.63.717.228 1.368.196 1.883.118.574-.088 1.772-.724 2.022-1.424.25-.7.25-1.3 0-1.425-.075-.125-.275-.2-.575-.35z" />
                </svg>
                Chat with Us
              </a>
              <a
                href={phoneCallLink}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-extrabold rounded-xl text-white bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
              >
                <Phone className="w-4.5 h-4.5 mr-2 text-secondary shrink-0" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
