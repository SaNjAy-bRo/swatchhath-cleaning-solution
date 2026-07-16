"use client";

import { useState } from "react";
import { Star, ShieldCheck, Leaf, Phone, Droplets, MapPin } from "lucide-react";

export default function Hero() {
  const whatsappNumber = "+919481977717";
  const whatsappMessage = encodeURIComponent(
    "Hi Swachhath Cleaning Solution, I would like to book a cleaning service."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const phoneCallLink = `tel:${whatsappNumber}`;

  // Controller states for desktop tuning (Temporary)
  const [bgSizePercent, setBgSizePercent] = useState(100); // Zoom level in %
  const [bgPosX, setBgPosX] = useState(100); // Horizontal offset (100% is right side)
  const [bgPosY, setBgPosY] = useState(100); // Vertical offset (100% is bottom side)
  const [paddingY, setPaddingY] = useState(96); // Vertical padding of content in px
  const [minHeight, setMinHeight] = useState(70); // Min height of section in vh

  return (
    <section 
      className="relative overflow-hidden flex items-center bg-[url('/images/hero-cartoon-mobile.png')] md:bg-[url('/images/hero-cartoon-desktop.png')] bg-no-repeat"
      style={{
        minHeight: `${minHeight}vh`,
        backgroundSize: `${bgSizePercent}%`,
        backgroundPosition: `${bgPosX}% ${bgPosY}%`,
      }}
    >
      {/* Rich blue overlay (gradient from dark navy blue to transparent, showing the cartoon illustration) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#162659]/90 via-[#162659]/55 to-[#162659]/15 z-0" />
      
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl z-0" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div 
        className="relative max-w-6xl mx-auto px-6 sm:px-8 w-full z-10"
        style={{
          paddingTop: `${paddingY}px`,
          paddingBottom: `${paddingY}px`,
        }}
      >
        <div className="grid md:grid-cols-12 gap-10 items-center">
          
          {/* Text Content */}
          <div className="md:col-span-8 lg:col-span-7 flex flex-col items-center text-center sm:items-start sm:text-left justify-center space-y-6 max-w-xl">
            {/* Brand pill */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-1.5 rounded-full text-xs font-bold w-fit tracking-wider border border-white/10">
              <Droplets className="h-3.5 w-3.5 text-secondary" />
              <span>SWACHHATH CLEANING SOLUTION</span>
            </div>

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
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.75.002-2.605-1.002-5.054-2.829-6.88-1.827-1.827-4.26-2.83-6.875-2.83-5.448 0-9.873 4.37-9.876 9.75-.001 1.833.466 3.626 1.353 5.197l-.995 3.637 3.735-.975zm11.367-7.384c-.3-.15-1.772-.875-2.046-.975-.276-.1-.476-.15-.676.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.487-.893-.797-1.496-1.783-1.67-2.083-.175-.3-.018-.463.13-.61.134-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525c-.075-.15-.676-1.625-.926-2.225-.244-.589-.493-.51-.676-.519-.174-.009-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.112 4.521.714.308 1.272.492 1.707.63.717.228 1.368.196 1.883.118.574-.088 1.772-.724 2.022-1.424.25-.7.25-1.3 0-1.425-.075-.125-.275-.2-.575-.35z" />
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

      {/* Background Controller UI (hidden on mobile, visible on desktop) */}
      <div className="hidden md:block fixed bottom-6 left-6 z-50 bg-slate-900/95 text-white p-5 rounded-2xl border border-slate-700 shadow-2xl w-80 backdrop-blur-md font-sans">
        <h4 className="text-sm font-bold border-b border-slate-700 pb-2 mb-3 text-secondary flex justify-between">
          <span>BG Position & Size Tuner</span>
          <span className="text-[10px] text-white/50">Temp Controller</span>
        </h4>
        
        <div className="space-y-3.5 text-xs">
          {/* Min Height Slider */}
          <div className="space-y-1">
            <div className="flex justify-between text-white/70">
              <span>Section Min Height:</span>
              <span className="font-mono text-secondary">{minHeight}vh</span>
            </div>
            <input 
              type="range" min="40" max="100" value={minHeight} 
              onChange={(e) => setMinHeight(Number(e.target.value))}
              className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-secondary"
            />
          </div>

          {/* Padding Y Slider */}
          <div className="space-y-1">
            <div className="flex justify-between text-white/70">
              <span>Vertical Padding:</span>
              <span className="font-mono text-secondary">{paddingY}px</span>
            </div>
            <input 
              type="range" min="30" max="180" value={paddingY} 
              onChange={(e) => setPaddingY(Number(e.target.value))}
              className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-secondary"
            />
          </div>

          {/* Zoom / BG Size Slider */}
          <div className="space-y-1">
            <div className="flex justify-between text-white/70">
              <span>Zoom Background (Size %):</span>
              <span className="font-mono text-secondary">{bgSizePercent}%</span>
            </div>
            <input 
              type="range" min="30" max="300" value={bgSizePercent} 
              onChange={(e) => setBgSizePercent(Number(e.target.value))}
              className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-secondary"
            />
          </div>

          {/* BG Position X Slider */}
          <div className="space-y-1">
            <div className="flex justify-between text-white/70">
              <span>BG Position X (Horizontal):</span>
              <span className="font-mono text-secondary">{bgPosX}%</span>
            </div>
            <input 
              type="range" min="0" max="100" value={bgPosX} 
              onChange={(e) => setBgPosX(Number(e.target.value))}
              className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-secondary"
            />
          </div>

          {/* BG Position Y Slider */}
          <div className="space-y-1">
            <div className="flex justify-between text-white/70">
              <span>BG Position Y (Vertical):</span>
              <span className="font-mono text-secondary">{bgPosY}%</span>
            </div>
            <input 
              type="range" min="0" max="100" value={bgPosY} 
              onChange={(e) => setBgPosY(Number(e.target.value))}
              className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-secondary"
            />
          </div>

          {/* Final Values Copy Block */}
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 space-y-1 text-[10px]">
            <span className="text-secondary font-bold uppercase block tracking-wider">Tuned Settings Code:</span>
            <code className="block font-mono text-[9px] text-white/80 select-all whitespace-pre bg-black/30 p-1.5 rounded border border-white/5 overflow-x-auto">
{`backgroundSize: "${bgSizePercent}%"
bgPosition: "${bgPosX}% ${bgPosY}%"
minHeight: "${minHeight}vh"
paddingY: "${paddingY}px"`}
            </code>
            <span className="text-[9px] text-white/40 block mt-1 text-center">Drag sliders to fit background, then copy this code and send it in chat!</span>
          </div>
        </div>
      </div>
    </section>
  );
}
