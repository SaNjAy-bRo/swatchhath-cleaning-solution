"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  BadgeCheck, 
  Calendar, 
  Cpu, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  ExternalLink,
  Award
} from "lucide-react";

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

export default function About() {
  const reelUrl = "https://www.instagram.com/reel/DbIrEm7TdiI/";
  const embedUrl = "https://www.instagram.com/reel/DbIrEm7TdiI/embed/";
  const [iframeError, setIframeError] = useState(false);

  const features = [
    {
      title: "Trusted Since 2022",
      desc: "4+ years of expertise handling residential deep cleaning, commercial sites & solar setups.",
      icon: Calendar,
      badgeColor: "text-sky-600 bg-sky-50 border-sky-100",
    },
    {
      title: "Regional & Local Staff",
      desc: "Native, background-checked crew who understand local climate dust & hard water challenges.",
      icon: MapPin,
      badgeColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      title: "Advanced Machinery",
      desc: "High-pressure jet wash, heavy-duty floor scrubbers & steam extraction vacuums.",
      icon: Cpu,
      badgeColor: "text-indigo-600 bg-indigo-50 border-indigo-100",
    },
    {
      title: "Transparent Pricing",
      desc: "Clear upfront quotes with explicit distance charges and zero hidden fees.",
      icon: ShieldCheck,
      badgeColor: "text-amber-600 bg-amber-50 border-amber-100",
    },
  ];

  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "1,500+", label: "Satisfied Clients" },
    { value: "100%", label: "Hygiene Guarantee" },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/70 to-slate-100/50 border-b border-slate-200/80 relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header Badge */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-sky-100/80 text-sky-800 border border-sky-200 shadow-3xs mb-3">
            <BadgeCheck className="h-4 w-4 text-sky-600 shrink-0" />
            <span>About Swachhath</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
            Your Local Partner for Superior Cleaning & Hygiene
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-3 leading-relaxed">
            Delivering spotless transformations for homes, water tanks, solar panels, and offices across Karnataka with modern equipment and trusted local staff.
          </p>
        </div>

        {/* 2-Column Layout: Left (Reel Player) | Right (Minimal Info & Stats) */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Instagram Reel Showcase Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-[360px] relative group">
              
              {/* Decorative Glowing Backdrop */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500 via-teal-500 to-indigo-500 rounded-[32px] blur-md opacity-30 group-hover:opacity-60 transition duration-500" />

              {/* Phone Container */}
              <div className="relative bg-slate-950 rounded-[28px] overflow-hidden border-4 border-slate-900 shadow-2xl flex flex-col">
                
                {/* Instagram Header Overlay Bar */}
                <div className="bg-slate-900/90 backdrop-blur-md px-4 py-3 border-b border-slate-800/80 flex items-center justify-between z-20">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 p-[2px]">
                      <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                        <InstagramIcon className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white leading-tight flex items-center gap-1">
                        @swachhath_cleaning
                        <CheckCircle2 className="h-3 w-3 text-sky-400 inline" />
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">Official Reel Showcase</span>
                    </div>
                  </div>
                  
                  <a
                    href={reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-sky-400 hover:text-sky-300 flex items-center space-x-1 bg-sky-950/60 border border-sky-800/50 px-2.5 py-1 rounded-full transition-colors"
                  >
                    <span>Watch Reel</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                {/* Reel Video Container (9:16 Aspect Ratio) */}
                <div className="relative aspect-[9/16] w-full bg-slate-950 overflow-hidden flex items-center justify-center">
                  {!iframeError ? (
                    <iframe
                      src={embedUrl}
                      className="absolute inset-0 w-full h-[calc(100%+115px)] -top-[45px] border-0"
                      allowFullScreen
                      scrolling="no"
                      allow="encrypted-media; autoplay; clipboard-write;"
                      onError={() => setIframeError(true)}
                    />
                  ) : (
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-900">
                      <img
                        src="/images/services/solar-sales-services.png"
                        alt="Swachhath Reel Preview"
                        className="absolute inset-0 w-full h-full object-cover opacity-40"
                      />
                      <div className="relative z-10 bg-slate-950/80 backdrop-blur-md p-6 rounded-2xl border border-slate-800">
                        <div className="w-14 h-14 bg-rose-500/20 text-rose-400 rounded-full flex items-center justify-center mx-auto mb-3 border border-rose-500/30">
                          <Play className="h-6 w-6 fill-current ml-0.5" />
                        </div>
                        <h4 className="text-sm font-bold text-white">Watch Solar & Deep Cleaning Reel</h4>
                        <p className="text-xs text-slate-400 mt-1">See live cleaning process in action</p>
                        <a
                          href={reelUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-xl text-xs font-bold hover:opacity-90 transition"
                        >
                          <InstagramIcon className="h-4 w-4" />
                          <span>Open on Instagram</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Reel Footer Ribbon */}
                <div className="bg-slate-900/90 backdrop-blur-md px-4 py-2.5 border-t border-slate-800/80 text-center">
                  <span className="text-[11px] font-semibold text-slate-400">
                    ✨ High-Pressure Jet & Professional Equipment Demo
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Minimal Info, Feature Grid & Stats */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Mission Statement */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Why Swachhath Cleaning Solution?
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                We combine experienced local technicians with high-pressure German wash jets, rotary floor scrubbers, and eco-friendly sanitizers to deliver unmatched hygiene standard for homes and commercial facilities.
              </p>
            </div>

            {/* 2x2 Feature Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200/90 p-5 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 border ${item.badgeColor}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <h4 className="text-base font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats Row */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md border border-slate-800 grid grid-cols-3 gap-4 text-center divide-x divide-slate-800">
              {stats.map((stat, idx) => (
                <div key={idx} className="px-2">
                  <div className="text-2xl sm:text-3xl font-black text-sky-400 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-extrabold text-white bg-sky-600 hover:bg-sky-700 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
              >
                <span>Get Instant Quote</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300/80 rounded-xl transition-all duration-300 shadow-xs hover:shadow-sm"
              >
                <InstagramIcon className="h-4 w-4 mr-2 text-rose-500" />
                <span>Watch More Reels</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
