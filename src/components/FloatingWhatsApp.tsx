"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappNumber = "+919481977717";
  const whatsappMessage = encodeURIComponent(
    "Hi Swachhath Cleaning Solution, I am looking for deep cleaning services. Please share quotes."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600 hover:scale-105 transition-all duration-300 group"
      >
        {/* Pulsating Ring Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping -z-10" />

        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 fill-current transition-transform duration-200"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.75.002-2.605-1.002-5.054-2.829-6.88-1.827-1.827-4.26-2.83-6.875-2.83-5.448 0-9.873 4.37-9.876 9.75-.001 1.833.466 3.626 1.353 5.197l-.995 3.637 3.735-.975zm11.367-7.384c-.3-.15-1.772-.875-2.046-.975-.276-.1-.476-.15-.676.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.487-.893-.797-1.496-1.783-1.67-2.083-.175-.3-.018-.463.13-.61.134-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525c-.075-.15-.676-1.625-.926-2.225-.244-.589-.493-.51-.676-.519-.174-.009-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.112 4.521.714.308 1.272.492 1.707.63.717.228 1.368.196 1.883.118.574-.088 1.772-.724 2.022-1.424.25-.7.25-1.3 0-1.425-.075-.125-.275-.2-.575-.35z" />
        </svg>
      </a>
    </div>
  );
}
