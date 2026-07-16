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
            {/* Trust Wording */}
            <span className="text-secondary font-extrabold text-xs sm:text-sm uppercase tracking-widest">
              Udupi & Mangalore's Trusted Cleaning Service
            </span>

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
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-extrabold rounded-xl text-white bg-[#25D366] hover:bg-[#20ba59] shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 cursor-pointer"
              >
                <svg className="w-5 h-5 mr-2 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#FFF"
                    d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
                  />
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
