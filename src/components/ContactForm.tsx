"use client";

import { useState, useEffect } from "react";
import { Send, MapPin, CheckCircle2, MessageSquare } from "lucide-react";

export default function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const servicesList = [
    "High Pressure Wash Cleaning",
    "Flat & House Cleaning",
    "Overhead Tank & Sump Cleaning",
    "Basic & Deep Cleaning",
    "Solar tubes and Panel Cleaning",
    "Solar coil fitting & Changing tube",
    "Signboard Cleaning",
    "Floor Scrubbing & Rubbing",
    "Vacuum Cleaning",
    "Temple / Masjid / Church Cleaning",
    "Resort & Homestay Cleaning",
    "Furniture Cleaning",
    "Other Services / Commercial Cleaning",
  ];

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(defaultService);

  useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const whatsappNumber = "+919481977717";
  const whatsappMessage = encodeURIComponent(
    `Hi Swachhath Cleaning Solution, my name is ${name || "Client"}. I want to inquire about "${service || "Cleaning Service"}". My location is ${location || "Karnataka"}.`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !service) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, service, location, message }),
      });

      if (res.ok) {
        setSubmitted(true);
        setName("");
        setPhone("");
        setService("");
        setLocation("");
        setMessage("");
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-compact bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Info Column (Left) */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="text-xs font-extrabold text-primary tracking-widest uppercase block mb-1">
                Get in Touch
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Request a Free Quote
              </h2>
              <p className="text-base text-slate-600 mt-1">
                Fill out the form or chat directly with us on WhatsApp to get pricing details for your specific location.
              </p>
            </div>

            {/* Kannada / Localized Notice Banner */}
            <div className="bg-emerald-50 border border-emerald-100/60 p-4 rounded-xl space-y-2">
              <div className="flex items-center space-x-2 text-emerald-800 font-extrabold text-sm">
                <MessageSquare className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
                <span>FASTEST WAY TO GET RATES:</span>
              </div>
              <p className="text-sm text-emerald-955 font-semibold leading-relaxed">
                Please mention what service you want and share your <strong className="text-emerald-700 font-bold">Current Location on WhatsApp</strong> so we can assist you faster.
              </p>
              <div className="text-sm text-emerald-855 border-t border-emerald-100/60 pt-2 font-semibold italic leading-relaxed">
                ದರ ತಿಳಿದುಕೊಳ್ಳುವ ಮೊದಲು ಯಾವ service ಬೇಕು ಎಂದು ತಿಳಿಸಿ ಮತ್ತು ನಿಮ್ಮ <strong className="text-emerald-700 font-bold">CURRENT LOCATION</strong> ನಮಗೆ ಶೇರ್ ಮಾಡಿ.
              </div>
              <p className="text-xs text-slate-400 mt-1">
                * Note: Transportation charges apply separately on a location basis.
              </p>
            </div>

            {/* Quick Contact Specs */}
             <div className="space-y-2 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-slate-800">Phone & WhatsApp:</span>
                <a href={`tel:${whatsappNumber}`} className="hover:text-primary font-semibold">+91 94819 77717</a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-slate-800">Operational:</span>
                <span>Mon - Sun (8:00 AM - 8:00 PM)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-slate-800">Location:</span>
                <span>Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Form Column (Right) */}
          <div className="md:col-span-7 bg-slate-50 border border-slate-150 p-4 sm:p-6 rounded-xl shadow-2xs">
            {submitted ? (
               <div className="text-center py-8 space-y-3">
                <div className="inline-flex items-center justify-center p-3 bg-emerald-100 text-emerald-600 rounded-full">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-lg font-extrabold text-slate-900">Request Sent Successfully!</h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you for reaching out. We will get back to you shortly or in the evening. Please cooperate.
                </p>
                <div className="pt-2">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs"
                  >
                    Send on WhatsApp For Instant Reply
                  </a>
                </div>
              </div>
            ) : (
               <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Anand Kumar"
                      className="w-full text-sm border border-slate-200 rounded-lg p-3 bg-white focus:outline-hidden focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full text-sm border border-slate-200 rounded-lg p-3 bg-white focus:outline-hidden focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Required Service *</label>
                    <select
                      required
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full text-sm border border-slate-200 rounded-lg p-3 bg-white focus:outline-hidden focus:border-primary"
                    >
                      <option value="">-- Select Service --</option>
                      {servicesList.map((srv, idx) => (
                        <option key={idx} value={srv}>{srv}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Your Location / Town *</label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Mangaluru, Udupi, Karkala"
                        className="w-full text-sm border border-slate-200 rounded-lg p-3 pl-9 bg-white focus:outline-hidden focus:border-primary"
                      />
                      <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Special Requirements / Message</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details (e.g., number of floors, size of overhead tank, etc.)"
                    className="w-full text-sm border border-slate-200 rounded-lg p-3 bg-white focus:outline-hidden focus:border-primary"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-slate-500 italic">* All fields marked with * are required.</span>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center px-5 py-3 text-sm font-bold text-white bg-primary hover:bg-primary-hover rounded-lg shadow-xs cursor-pointer disabled:opacity-50"
                  >
                    <Send className="h-4 w-4 mr-1.5" />
                    {loading ? "Submitting..." : "Send Quote Request"}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
