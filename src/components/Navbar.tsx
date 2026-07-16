"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  CheckCircle, 
  ChevronDown,
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
  Menu,
  X
} from "lucide-react";
import { servicesList } from "../data/servicesData";

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

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = isScrolled || mobileMenuOpen;

  const whatsappNumber = "+919481977717";
  const whatsappMessage = encodeURIComponent(
    "Hi Swachhath Cleaning Solution, I would like to get a quote for cleaning services."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const phoneCallLink = `tel:${whatsappNumber}`;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isSolid ? "bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs" : "bg-transparent border-b border-transparent shadow-none"}`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-28 md:h-20">
          
          {/* Mobile Left: Menu toggle button */}
          <div className="flex md:hidden items-center justify-start w-12">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-lg transition-all cursor-pointer shadow-3xs ${isSolid ? "text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:text-slate-900" : "text-white bg-white/10 border border-white/10 hover:bg-white/20 hover:text-white"}`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Logo - Centered on Mobile, Left-aligned on Desktop */}
          <div className="flex items-center justify-center md:justify-start flex-grow md:flex-grow-0">
            <Link href="/" className="flex items-center space-x-2.5">
              {/* Mobile Large Logo (Hidden on desktop) */}
              <div className="md:hidden bg-white rounded-full p-1 border border-slate-100 flex items-center justify-center shadow-xs">
                <Image
                  src="/images/logo.png"
                  alt="Swachhath Cleaning Solution"
                  width={90}
                  height={90}
                  priority
                  className="object-contain rounded-full"
                />
              </div>
              {/* Desktop Logo (Hidden on mobile) */}
              <div className="hidden md:flex bg-white rounded-full p-1 border border-slate-100 items-center justify-center shrink-0 shadow-xs">
                <Image
                  src="/images/logo.png"
                  alt="Swachhath Cleaning Solution"
                  width={48}
                  height={48}
                  priority
                  className="object-contain shrink-0 rounded-full"
                />
              </div>
              {/* Company name text (Hidden on mobile) */}
              <div className="hidden md:flex flex-col">
                <span className={`font-heading font-black text-[16px] sm:text-[18px] leading-tight uppercase tracking-tight transition-colors duration-300 ${isSolid ? "text-primary" : "text-white"}`}>
                  Swachhath
                </span>
                <span className={`text-[8px] sm:text-[9px] font-bold uppercase tracking-widest leading-none transition-colors duration-300 ${isSolid ? "text-secondary" : "text-white/80"}`}>
                  Cleaning Solution
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8 items-center h-full">
            {/* Services Dropdown Trigger */}
            <div 
              className="relative flex items-center h-full cursor-pointer"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className={`flex items-center text-sm font-bold transition-colors py-5 gap-1 outline-hidden ${isSolid ? "text-slate-700 hover:text-primary" : "text-white hover:text-white/80"}`}>
                Services
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""} ${isSolid ? "text-slate-700" : "text-white"}`} />
              </button>

              {/* Mega Menu Dropdown */}
              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[620px] bg-white border border-slate-150 rounded-2xl shadow-lg p-4 grid grid-cols-2 gap-x-4 gap-y-2 animate-fadeIn z-50">
                  {servicesList.map((service) => {
                    const Icon = iconMap[service.iconName] || Sparkles;
                    return (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-primary-light/40 group transition-all"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <div className="p-1.5 bg-slate-50 text-slate-500 rounded-lg group-hover:bg-white group-hover:text-primary transition-colors shrink-0">
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors truncate">
                            {service.name}
                          </h4>
                          <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                            {service.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link href="/#about" className={`text-sm font-bold transition-colors ${isSolid ? "text-slate-700 hover:text-primary" : "text-white hover:text-white/80"}`}>
              Why Us
            </Link>
            <Link href="/#reviews" className={`text-sm font-bold transition-colors ${isSolid ? "text-slate-700 hover:text-primary" : "text-white hover:text-white/80"}`}>
              Reviews
            </Link>
            <Link href="/#contact" className={`text-sm font-bold transition-colors ${isSolid ? "text-slate-700 hover:text-primary" : "text-white hover:text-white/80"}`}>
              Get a Quote
            </Link>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={phoneCallLink}
              className={`flex items-center text-sm font-bold transition-colors py-2 px-3 rounded-lg ${isSolid ? "text-slate-700 hover:text-primary hover:bg-slate-50" : "text-white hover:text-white hover:bg-white/10"}`}
            >
              <Phone className={`h-4 w-4 mr-2 transition-colors ${isSolid ? "text-primary" : "text-white"}`} />
              +91 94819 77717
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm hover:shadow transition-all duration-200"
            >
              <svg className="w-4.5 h-4.5 mr-2 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#FFF"
                  d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
                />
              </svg>
              Quick Chat
            </a>
          </div>

          {/* Mobile Right: Phone Call Button */}
          <div className="flex md:hidden items-center justify-end w-12">
            <a
              href={phoneCallLink}
              className={`inline-flex items-center justify-center p-2 rounded-lg transition-all cursor-pointer shadow-3xs ${isSolid ? "text-primary bg-primary-light border border-primary/20 hover:bg-primary hover:text-white" : "text-white bg-white/10 border border-white/10 hover:bg-white/20 hover:text-white"}`}
              aria-label="Call Us"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>

        </div>
      </div>

      {/* Mobile drawer panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white shadow-lg animate-fadeIn max-h-[calc(100vh-7rem)] overflow-y-auto">
          <div className="px-6 py-4 space-y-4">
            {/* Navigation links */}
            <div className="flex flex-col space-y-3">
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block">
                Navigation
              </span>
              <Link
                href="/#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-slate-700 hover:text-primary transition-colors block"
              >
                Why Us
              </Link>
              <Link
                href="/#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-slate-700 hover:text-primary transition-colors block"
              >
                Reviews
              </Link>
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-slate-700 hover:text-primary transition-colors block"
              >
                Get a Quote
              </Link>
            </div>

            {/* Services list with scrolling */}
            <div className="flex flex-col space-y-3 pt-3 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block">
                  Our Services
                </span>
                <span className="text-[9px] bg-secondary-light text-secondary font-extrabold px-2 py-0.5 rounded-full border border-secondary/15 tracking-wider animate-pulse uppercase">
                  Scroll for all ↕
                </span>
              </div>
              <div className="relative">
                <div className="grid grid-cols-1 gap-2 max-h-52 overflow-y-auto pr-1.5 mobile-services-scroll pb-4">
                  {servicesList.map((service) => {
                    const Icon = iconMap[service.iconName] || Sparkles;
                    return (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center space-x-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <div className="p-1 bg-slate-100 text-slate-500 rounded-md">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-xs font-bold text-slate-800 truncate">
                          {service.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
                {/* Visual fade cue indicating scrollable overflow */}
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
              </div>
            </div>

            {/* Direct contact CTAs */}
            <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
              <a
                href={phoneCallLink}
                className="flex-1 inline-flex items-center justify-center px-4 py-2.5 text-xs font-extrabold text-slate-750 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <Phone className="h-4 w-4 mr-1.5 text-primary" />
                Call Us
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-4 py-2.5 text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs transition-colors"
              >
                Quick Chat
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
