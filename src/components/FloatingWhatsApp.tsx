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
          className="w-8 h-8 transition-transform duration-200 group-hover:scale-105"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Green Speech Bubble */}
          <path
            fill="#25D366"
            d="M12.004 0C5.372 0 0 5.372 0 12.004c0 2.118.553 4.106 1.52 5.845L.055 24l6.303-1.654a11.95 11.95 0 0 0 5.646 1.417c6.632 0 12.004-5.372 12.004-12.004C24.008 5.372 18.636 0 12.004 0z"
          />
          {/* White Phone Receiver */}
          <path
            fill="#FFF"
            d="M12.004 2.02c-5.502 0-9.982 4.48-9.982 9.984 0 1.92.544 3.792 1.572 5.408l.254.402-1.036 3.778 3.864-1.012.38.225c1.554.92 3.328 1.404 5.158 1.404 5.502 0 9.982-4.48 9.982-9.984 0-5.504-4.48-9.984-9.982-9.984zm5.71 12.197c-.313-.156-1.85-.913-2.137-1.018-.286-.105-.495-.156-.704.156-.209.313-.809 1.018-.992 1.227-.183.209-.365.235-.678.078-1.09-.546-1.928-1.005-2.695-2.316-.25-.429-.026-.64.183-.85.188-.188.313-.365.47-.548.156-.183.209-.313.313-.522.104-.209.052-.39-.026-.547-.078-.157-.704-1.697-.965-2.324-.254-.61-.513-.527-.704-.537-.182-.01-.39-.01-.599-.01-.209 0-.548.078-.835.39-.287.313-1.096 1.07-1.096 2.61 0 1.54 1.122 3.029 1.278 3.238.156.209 2.207 3.37 5.348 4.726.747.323 1.33.515 1.785.66.75.239 1.433.205 1.973.125.601-.09 1.85-.757 2.112-1.488.261-.73.261-1.356.183-1.487-.078-.13-.287-.209-.6-.365z"
          />
        </svg>
      </a>
    </div>
  );
}
