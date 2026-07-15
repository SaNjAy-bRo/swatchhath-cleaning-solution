"use client";

import Image from "next/image";
import Link from "next/link";
import { servicesList } from "../data/servicesData";
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
  Building2,
  ArrowRight
} from "lucide-react";

const iconMap: Record<string, any> = {
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
};

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Residential: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  Specialized: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  Commercial: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
};

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-extrabold text-secondary tracking-[0.2em] uppercase block mb-2">
            What We Offer
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Our Professional Cleaning Services
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {servicesList.map((service) => {
            const Icon = iconMap[service.iconName] || Sparkles;
            const colors = categoryColors[service.category] || categoryColors.Residential;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-2xl border border-slate-150 shadow-xs hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Card Image */}
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border} backdrop-blur-sm uppercase tracking-wider`}>
                      {service.category}
                    </span>
                  </div>

                  {/* Icon circle overlay */}
                  <div className="absolute bottom-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-white/50 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <h3 className="font-heading text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-primary transition-colors duration-200 leading-snug">
                    {service.name}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1.5 leading-relaxed flex-1 line-clamp-2">
                    {service.desc}
                  </p>
                  
                  {/* CTA row */}
                  <div className="flex items-center justify-between mt-3.5 pt-3 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                      {service.tag}
                    </span>
                    <span className="inline-flex items-center text-sm font-bold text-primary group-hover:text-primary-hover transition-colors">
                      Details
                      <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
