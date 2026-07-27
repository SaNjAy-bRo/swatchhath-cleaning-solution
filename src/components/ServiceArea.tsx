"use client";

import { MapPin, Calendar, Clock, Info } from "lucide-react";

export default function ServiceArea() {
  const regularLocations = ["Udupi", "Brahmavara", "Kapu"];
  const appointmentLocations = [
    "Karkala",
    "Kundapura",
    "Hebri",
    "Shirva",
    "Padubidre",
    "Mangalore"
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Accent Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 text-secondary bg-secondary/10 border border-secondary/20 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <MapPin className="h-4 w-4 shrink-0 text-secondary" />
            <span>Coverage & Schedule</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-black tracking-tight text-white">
            Our Service Areas in Karnataka
          </h2>
          <p className="text-sm text-slate-400 font-medium leading-relaxed">
            We provide fast, reliable cleaning & solar maintenance services across Coastal and Central Karnataka.
          </p>
        </div>

        {/* 2 Column Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Regular Basis Card */}
          <div className="bg-slate-800/80 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-lg group hover:border-emerald-500/60 transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-1">
                  Daily Service
                </span>
                <h3 className="text-lg font-extrabold text-white">Regular Basis Service</h3>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              Our core team operates daily in these locations with quick same-day or next-day slot availability:
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {regularLocations.map((loc) => (
                <div
                  key={loc}
                  className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-emerald-300 text-xs font-bold shadow-xs"
                >
                  <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{loc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Appointment Basis Card */}
          <div className="bg-slate-800/80 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-lg group hover:border-amber-500/60 transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-1">
                  Prior Booking Needed
                </span>
                <h3 className="text-lg font-extrabold text-white">On Appointment Basis</h3>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              We cover these surrounding towns on scheduled appointment slots. Advance booking is recommended:
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {appointmentLocations.map((loc) => (
                <div
                  key={loc}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-amber-500/30 text-slate-200 text-xs font-semibold"
                >
                  <MapPin className="h-3 w-3 text-amber-400" />
                  <span>{loc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Note Disclaimer Banner */}
        <div className="mt-8 bg-slate-800/50 border border-slate-700/60 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <Info className="h-5 w-5 text-secondary shrink-0 hidden sm:block" />
            <p className="text-xs text-slate-300 leading-normal font-medium">
              <strong className="text-white font-bold">Operating Note:</strong> Transportation charges apply separately on a location distance basis. We return missed calls/messages shortly or by evening.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-4 py-2 bg-secondary text-slate-950 font-extrabold text-xs rounded-lg hover:bg-secondary-hover transition-colors"
          >
            Check Your Area Slot
          </a>
        </div>

      </div>
    </section>
  );
}
