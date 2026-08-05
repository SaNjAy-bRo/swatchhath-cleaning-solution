"use client";

import Image from "next/image";
import { Play, Film, ExternalLink } from "lucide-react";

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
      embedUrl: "https://www.instagram.com/reel/DZFjAwiIg-8/", // Paste your Instagram Reel link here
      thumbnail: "/images/services/flat-house-cleaning.jpg"
    },
    {
      id: "reel-2",
      title: "High Pressure Driveway Wash",
      embedUrl: "https://www.instagram.com/reel/DanZxkizQ-l/", // Paste your Instagram Reel link here
      thumbnail: "/images/swachhath-car.jpg"
    },
    {
      id: "reel-3",
      title: "Overhead Water Tank Sanitization",
      embedUrl: "https://www.instagram.com/reel/DX9XCKqTwge/",
      thumbnail: "/images/services/overhead-tank-sump-cleaning.jpg"
    },
    {
      id: "reel-4",
      title: "Solar & Professional Cleaning Work",
      embedUrl: "https://www.instagram.com/reel/DbIrEm7TdiI/",
      thumbnail: "/images/services/solar-sales-services.jpg"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
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
              href="https://www.instagram.com/swachhath_cleaning_udupi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-extrabold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all duration-300 shadow-sm hover:shadow"
            >
              <InstagramIcon className="h-4 w-4 mr-2 text-rose-400" />
              Follow @swachhath_cleaning_udupi
            </a>
          </div>
        </div>

        {/* Reels Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {reels.map((reel, idx) => (
            <div
              key={reel.id}
              className="group relative bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Media Container */}
              <div className="relative aspect-[9/16] w-full bg-slate-950 overflow-hidden">
                {/* Thumbnail Image */}
                <Image
                  src={reel.thumbnail}
                  alt={reel.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black text-white bg-slate-900/80 backdrop-blur-md border border-white/10 uppercase tracking-widest">
                    <Film className="h-3 w-3 mr-1 text-secondary" />
                    Reel {idx + 1}
                  </span>
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-900/80 backdrop-blur-md text-white border border-white/10">
                    <InstagramIcon className="h-3.5 w-3.5" />
                  </span>
                </div>

                {/* Play Button Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-14 h-14 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-lg shadow-rose-600/30 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    <Play className="h-6 w-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Content inside Thumbnail */}
                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <h3 className="font-heading text-sm font-black text-white leading-snug drop-shadow-xs line-clamp-2">
                    {reel.title}
                  </h3>
                  <div className="flex items-center text-[11px] font-bold text-rose-300 mt-1.5 space-x-1">
                    <ExternalLink className="h-3 w-3" />
                    <span>Watch on Instagram</span>
                  </div>
                </div>

                {/* Direct Link to Instagram Profile / Reel */}
                <a
                  href={reel.embedUrl || "https://www.instagram.com/swachhath_cleaning_udupi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-30 cursor-pointer"
                  aria-label={`Watch ${reel.title} on Instagram`}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
