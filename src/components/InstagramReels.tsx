"use client";

import { Play } from "lucide-react";

const InstagramIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function InstagramReels() {
  // Array of reels where you can easily update the 'embedUrl' with your actual Instagram Reel links (e.g. "https://www.instagram.com/reel/C8XyZ_hpN9d/").
  // If 'embedUrl' is left empty, it will display a highly professional animated photographic placeholder with a play button link.
  const reels = [
    {
      id: "reel-1",
      title: "Deep House Cleaning Transformation",
      embedUrl: "", // Paste your Instagram Reel link here
      thumbnail: "/images/services/flat-house-cleaning.png"
    },
    {
      id: "reel-2",
      title: "High Pressure Driveway Wash",
      embedUrl: "", // Paste your Instagram Reel link here
      thumbnail: "/images/hero-exterior-desktop.png"
    },
    {
      id: "reel-3",
      title: "Overhead Water Tank Sanitization",
      embedUrl: "", // Paste your Instagram Reel link here
      thumbnail: "/images/services/overhead-tank-sump-cleaning.png"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-primary bg-primary-light/50 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <InstagramIcon className="h-4 w-4 text-primary shrink-0" />
              <span>See Us in Action</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Instagram Reels & Showcase
            </h2>
            <p className="text-sm text-slate-500 max-w-xl font-medium leading-relaxed">
              Check out our latest cleaning transformations, live updates, and work progress videos directly from our feed.
            </p>
          </div>
          
          <div className="flex justify-center shrink-0">
            <a
              href="https://www.instagram.com/swachhath_cleaning_solution"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-extrabold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all duration-300 shadow-sm hover:shadow"
            >
              <InstagramIcon className="h-4 w-4 mr-2" />
              Follow @Swachhath
            </a>
          </div>
        </div>

        {/* Reels Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {reels.map((reel, idx) => (
            <div 
              key={reel.id}
              className="relative aspect-[9/16] bg-slate-900 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 group border border-slate-200/60"
            >
              {reel.embedUrl ? (
                <iframe
                  src={`${reel.embedUrl.endsWith('/') ? reel.embedUrl : reel.embedUrl + '/'}embed/`}
                  className="w-full h-full border-0"
                  allowFullScreen
                  scrolling="no"
                  allow="encrypted-media"
                />
              ) : (
                <>
                  {/* Thumbnail Image */}
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="w-full h-full object-cover opacity-65 group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
                  
                  {/* Play Button Indicator */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary transition-all duration-300 z-20">
                    <Play className="h-5 w-5 text-white fill-white ml-0.5" />
                  </div>
                  
                  {/* Info Card Content */}
                  <div className="absolute bottom-0 inset-x-0 p-6 z-20 space-y-1.5">
                    <span className="text-[10px] font-black text-secondary uppercase tracking-wider flex items-center gap-1">
                      <InstagramIcon className="h-3.5 w-3.5" />
                      Reel #{idx + 1}
                    </span>
                    <h4 className="text-sm font-extrabold text-white leading-tight">
                      {reel.title}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-bold tracking-wide">
                      Click to watch on Instagram
                    </p>
                  </div>
                  
                  {/* Link Trigger overlay */}
                  <a
                    href="https://www.instagram.com/swachhath_cleaning_solution"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-30 cursor-pointer"
                    aria-label={`Watch ${reel.title} on Instagram`}
                  />
                </>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
