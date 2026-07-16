import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 pb-6 border-b border-slate-800">
          
          {/* Centered Logo & Description */}
          <div className="flex flex-col items-center text-center w-full pb-6">
            <Image
              src="/images/logo.png"
              alt="Swachhath Logo"
              width={64}
              height={64}
              className="object-contain bg-white p-1 rounded-xl shadow-xs"
            />
            <p className="text-xs text-slate-500 mt-3.5 max-w-md">
              Providing professional deep cleaning, pressure washing, sump & tank sanitization, and solar plate maintenance since 2022.
            </p>
          </div>
        </div>

        {/* Info Area: Service Area & Operating Policy */}
        <div className="grid md:grid-cols-2 gap-6 py-6 border-b border-slate-800 text-center md:text-left">
          {/* Service Area */}
          <div className="flex flex-col items-center md:items-start space-y-1.5">
            <span className="text-[10px] font-black text-secondary tracking-widest uppercase">Service Area</span>
            <p className="text-xs text-slate-300 font-extrabold tracking-wide">
              Udupi • Kundapura • Mangalore • Karkala
            </p>
          </div>

          {/* Operating Policy */}
          <div className="flex flex-col items-center md:items-end md:text-right space-y-1.5">
            <span className="text-[10px] font-black text-slate-500 tracking-widest uppercase">Operating Policy</span>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Transportation charges apply separately on a location basis. We return calls/messages shortly or in the evening. Please cooperate.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 text-[11px] text-slate-500 space-y-3 sm:space-y-0">
          <span>
            © {currentYear} Swachhath Cleaning Solution. All rights reserved.
          </span>
          <div className="flex space-x-4">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#about" className="hover:text-primary transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-primary transition-colors">Get Quote</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
