import { CheckCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 pb-6 border-b border-slate-800">
          
          {/* Logo & Sub */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center space-x-2 text-white">
              <span className="bg-primary p-1 rounded-md text-white">
                <CheckCircle className="h-4.5 w-4.5" />
              </span>
              <span className="font-heading text-base font-extrabold tracking-tight">
                SWACHHATH CLEANING SOLUTION
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1.5 max-w-sm">
              Providing professional deep cleaning, pressure washing, sump & tank sanitization, and solar plate maintenance since 2022.
            </p>
          </div>

          {/* Core Info & Policies */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-2">
            <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">Operating Policy</span>
            <p className="text-xs text-slate-400 max-w-sm">
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
