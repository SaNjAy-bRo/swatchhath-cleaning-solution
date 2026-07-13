"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Home,
  Droplet,
  Sun,
  Wrench,
  Layers,
  Activity,
  Wind,
  Heart,
  Building2,
  Armchair,
  Check,
  ChevronRight
} from "lucide-react";

type ServiceItem = {
  name: string;
  desc: string;
  icon: any;
};

type Category = "residential" | "specialized" | "commercial";

export default function Services() {
  const [activeTab, setActiveTab] = useState<Category>("residential");

  const categories: { id: Category; label: string }[] = [
    { id: "residential", label: "Residential & Home" },
    { id: "specialized", label: "Specialized Washing" },
    { id: "commercial", label: "Commercial & Venues" },
  ];

  const servicesData: Record<Category, { services: ServiceItem[]; image: string; tag: string }> = {
    residential: {
      tag: "Sparkling clean homes",
      image: "/images/home-cleaning.png",
      services: [
        {
          name: "Flat & House Cleaning",
          desc: "Complete sweep, mop, dust, and deep sanitization of all rooms, kitchens, and toilets.",
          icon: Home,
        },
        {
          name: "Basic & Deep Cleaning",
          desc: "Intense cleanup including stain removal, tile scrubbing, fan dusting, and window washing.",
          icon: Sparkles,
        },
        {
          name: "Overhead Tank & Sump Cleaning",
          desc: "Mechanical water tank cleaning, high-pressure washing, sludge removal, and sanitization.",
          icon: Droplet,
        },
        {
          name: "Vacuum Cleaning & Sofa Rubbing",
          desc: "Deep vacuuming of carpets, curtains, and dust extraction from all fabric surfaces.",
          icon: Wind,
        },
        {
          name: "Furniture Cleaning",
          desc: "Polishing wooden furniture and scrubbing/shampooing sofas, chairs, and mattresses.",
          icon: Armchair,
        },
      ],
    },
    specialized: {
      tag: "Advanced equipment wash",
      image: "/images/solar-cleaning.png",
      services: [
        {
          name: "High Pressure Wash Cleaning",
          desc: "Blast away deep grime from driveways, exterior walls, compounds, and gates.",
          icon: Droplet,
        },
        {
          name: "Solar Tubes & Panel Cleaning",
          desc: "Safe water jet cleaning of solar plates to maximize light absorption and efficiency.",
          icon: Sun,
        },
        {
          name: "Solar Coil Fitting & Tube Changing",
          desc: "Professional maintenance, fixing loose coils, and replacement of damaged glass tubes.",
          icon: Wrench,
        },
        {
          name: "Signboard & Facade Cleaning",
          desc: "High-reach washing and detailing for shops, hotels, and office exterior hoardings.",
          icon: Layers,
        },
      ],
    },
    commercial: {
      tag: "Heavy-duty polishing",
      image: "/images/premium-cleaning.png",
      services: [
        {
          name: "Floor Scrubbing & Rubbing",
          desc: "Industrial machine scrubbing for marble, granite, vitrified tile, and concrete floors.",
          icon: Activity,
        },
        {
          name: "Temple / Masjid / Church Cleaning",
          desc: "Dedicated large-scale hygiene services for holy spaces with regional respect and care.",
          icon: Heart,
        },
        {
          name: "Resort & Homestay Cleaning",
          desc: "Quick turnaround deep cleaning for hospitality sectors ensuring 5-star guest reviews.",
          icon: Building2,
        },
      ],
    },
  };

  const whatsappNumber = "+919481977717";
  
  const getEnquiryLink = (serviceName: string) => {
    const text = encodeURIComponent(
      `Hi Swachhath Cleaning Solution, I am interested in your "${serviceName}" service. Please share pricing and details.`
    );
    return `https://wa.me/${whatsappNumber}?text=${text}`;
  };

  const activeData = servicesData[activeTab];

  return (
    <section id="services" className="section-compact bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Our Professional Cleaning Services
          </h2>
          <p className="text-base text-slate-600 mt-1">
            Top-tier deep cleaning, sanitizing, and maintenance services for homes, businesses, and community sites.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center space-x-2 mb-6">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 text-sm sm:text-base font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-primary text-white shadow-xs"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Box */}
        <div className="grid md:grid-cols-12 gap-6 bg-white rounded-xl border border-slate-150 p-4 sm:p-6 shadow-xs items-stretch">
          
          {/* Services List (Left) */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-4">
            <div className="space-y-3.5">
              <span className="text-xs font-extrabold text-primary tracking-widest uppercase block mb-1">
                {activeData.tag}
              </span>
              
              {activeData.services.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={idx}
                    className="group flex items-start space-x-3.5 p-2 rounded-lg hover:bg-slate-50/60 transition-colors"
                  >
                    <div className="flex-shrink-0 p-2 bg-primary-light text-primary rounded-lg group-hover:scale-105 transition-transform duration-200">
                      <IconComponent className="h-4.5 w-4.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-slate-900 leading-snug flex items-center">
                        {service.name}
                      </h3>
                      <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                    <a
                      href={getEnquiryLink(service.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-bold text-primary group-hover:text-primary-hover shrink-0 self-center pl-2"
                    >
                      <span className="hidden sm:inline">Book</span>
                      <ChevronRight className="h-4.5 w-4.5 ml-0.5" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Featured Service Image (Right) */}
          <div className="md:col-span-5 flex flex-col justify-center mt-4 md:mt-0">
            <div className="relative rounded-lg overflow-hidden h-48 md:h-full min-h-[220px] shadow-xs group">
              <Image
                src={activeData.image}
                alt={activeData.tag}
                fill
                sizes="(max-w-768px) 100vw, 33vw"
                priority
                className="object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
                <div className="flex items-center space-x-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded-sm w-fit mb-1.5 backdrop-blur-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Premium Care</span>
                </div>
                <h4 className="font-heading text-base font-extrabold text-white">
                  Swachhath Cleaning Services
                </h4>
                <p className="text-xs text-slate-200 mt-0.5">
                  Top equipment, zero-damage guarantee, local Karnataka staff.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
