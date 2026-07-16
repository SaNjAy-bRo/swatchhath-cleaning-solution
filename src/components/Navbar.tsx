"use client";

import { useState } from "react";
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

  const whatsappNumber = "+919481977717";
  const whatsappMessage = encodeURIComponent(
    "Hi Swachhath Cleaning Solution, I would like to get a quote for cleaning services."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const phoneCallLink = `tel:${whatsappNumber}`;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Swachhath Cleaning Solution"
                width={64}
                height={64}
                priority
                className="object-contain"
              />
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
              <button className="flex items-center text-sm font-bold text-slate-700 hover:text-primary transition-colors py-5 gap-1 outline-hidden">
                Services
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
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

            <Link href="/#about" className="text-sm font-bold text-slate-700 hover:text-primary transition-colors">
              Why Us
            </Link>
            <Link href="/#reviews" className="text-sm font-bold text-slate-700 hover:text-primary transition-colors">
              Reviews
            </Link>
            <Link href="/#contact" className="text-sm font-bold text-slate-700 hover:text-primary transition-colors">
              Get a Quote
            </Link>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={phoneCallLink}
              className="flex items-center text-sm font-bold text-slate-700 hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              <Phone className="h-4 w-4 mr-2 text-primary" />
              +91 94819 77717
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm hover:shadow transition-all duration-200"
            >
              <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.75.002-2.605-1.002-5.054-2.829-6.88-1.827-1.827-4.26-2.83-6.875-2.83-5.448 0-9.873 4.37-9.876 9.75-.001 1.833.466 3.626 1.353 5.197l-.995 3.637 3.735-.975zm11.367-7.384c-.3-.15-1.772-.875-2.046-.975-.276-.1-.476-.15-.676.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.487-.893-.797-1.496-1.783-1.67-2.083-.175-.3-.018-.463.13-.61.134-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525c-.075-.15-.676-1.625-.926-2.225-.244-.589-.493-.51-.676-.519-.174-.009-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.112 4.521.714.308 1.272.492 1.707.63.717.228 1.368.196 1.883.118.574-.088 1.772-.724 2.022-1.424.25-.7.25-1.3 0-1.425-.075-.125-.275-.2-.575-.35z" />
              </svg>
              Quick Chat
            </a>
          </div>

          {/* Mobile phone icon & Menu toggle button */}
          <div className="md:hidden flex items-center space-x-2">
            <a
              href={phoneCallLink}
              className="inline-flex items-center justify-center p-2 rounded-lg text-primary bg-primary-light border border-primary/20 hover:bg-primary hover:text-white transition-all cursor-pointer shadow-3xs"
              aria-label="Call Us"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:text-slate-900 transition-all cursor-pointer shadow-3xs"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white shadow-lg animate-fadeIn">
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
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block">
                Our Services
              </span>
              <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto pr-1">
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
