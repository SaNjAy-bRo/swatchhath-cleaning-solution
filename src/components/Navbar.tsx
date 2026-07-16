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
        <div className="flex justify-between items-center h-28 md:h-20">
          
          {/* Mobile Left: Menu toggle button */}
          <div className="flex md:hidden items-center justify-start w-12">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:text-slate-900 transition-all cursor-pointer shadow-3xs"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Logo - Centered on Mobile, Left-aligned on Desktop */}
          <div className="flex items-center justify-center md:justify-start flex-grow md:flex-grow-0">
            <Link href="/" className="flex items-center space-x-2.5">
              {/* Mobile Large Logo (Hidden on desktop) */}
              <div className="md:hidden">
                <Image
                  src="/images/logo.png"
                  alt="Swachhath Cleaning Solution"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
              {/* Desktop Logo (Hidden on mobile) */}
              <div className="hidden md:block">
                <Image
                  src="/images/logo.png"
                  alt="Swachhath Cleaning Solution"
                  width={58}
                  height={58}
                  priority
                  className="object-contain shrink-0"
                />
              </div>
              {/* Company name text (Hidden on mobile) */}
              <div className="hidden md:flex flex-col">
                <span className="font-heading font-black text-[16px] sm:text-[18px] text-primary leading-tight uppercase tracking-tight">
                  Swachhath
                </span>
                <span className="text-[8px] sm:text-[9px] font-bold text-secondary uppercase tracking-widest leading-none">
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
              <svg className="w-4.5 h-4.5 mr-2 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {/* Green Bubble */}
                <path
                  fill="#25D366"
                  d="M12.004 0C5.372 0 0 5.372 0 12.004c0 2.118.553 4.106 1.52 5.845L.055 24l6.303-1.654a11.95 11.95 0 0 0 5.646 1.417c6.632 0 12.004-5.372 12.004-12.004C24.008 5.372 18.636 0 12.004 0z"
                />
                {/* White Receiver */}
                <path
                  fill="#FFF"
                  d="M12.004 2.02c-5.502 0-9.982 4.48-9.982 9.984 0 1.92.544 3.792 1.572 5.408l.254.402-1.036 3.778 3.864-1.012.38.225c1.554.92 3.328 1.404 5.158 1.404 5.502 0 9.982-4.48 9.982-9.984 0-5.504-4.48-9.984-9.982-9.984zm5.71 12.197c-.313-.156-1.85-.913-2.137-1.018-.286-.105-.495-.156-.704.156-.209.313-.809 1.018-.992 1.227-.183.209-.365.235-.678.078-1.09-.546-1.928-1.005-2.695-2.316-.25-.429-.026-.64.183-.85.188-.188.313-.365.47-.548.156-.183.209-.313.313-.522.104-.209.052-.39-.026-.547-.078-.157-.704-1.697-.965-2.324-.254-.61-.513-.527-.704-.537-.182-.01-.39-.01-.599-.01-.209 0-.548.078-.835.39-.287.313-1.096 1.07-1.096 2.61 0 1.54 1.122 3.029 1.278 3.238.156.209 2.207 3.37 5.348 4.726.747.323 1.33.515 1.785.66.75.239 1.433.205 1.973.125.601-.09 1.85-.757 2.112-1.488.261-.73.261-1.356.183-1.487-.078-.13-.287-.209-.6-.365z"
                />
              </svg>
              Quick Chat
            </a>
          </div>

          {/* Mobile Right: Phone Call Button */}
          <div className="flex md:hidden items-center justify-end w-12">
            <a
              href={phoneCallLink}
              className="inline-flex items-center justify-center p-2 rounded-lg text-primary bg-primary-light border border-primary/20 hover:bg-primary hover:text-white transition-all cursor-pointer shadow-3xs"
              aria-label="Call Us"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>

        </div>
      </div>

      {/* Mobile drawer panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white shadow-lg animate-fadeIn max-h-[calc(100vh-5rem)] overflow-y-auto">
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
