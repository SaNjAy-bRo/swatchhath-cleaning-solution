"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getServiceBySlug, servicesList } from "@/data/servicesData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactForm from "@/components/ContactForm";
import * as Icons from "lucide-react";
import { ArrowLeft, CheckCircle, Shield, Phone, Sparkles, ArrowRight, Clock, Zap, Star } from "lucide-react";

export default function ServicePage() {
  const { slug } = useParams() as { slug: string };
  const router = useRouter();

  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
        <Navbar />
        <div className="max-w-md mx-auto text-center py-20 px-6 space-y-4">
          <h2 className="font-heading text-2xl font-black text-slate-800">Service Not Found</h2>
          <p className="text-slate-600">The service you are looking for does not exist or has been relocated.</p>
          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-primary-hover rounded-lg shadow-xs cursor-pointer transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  // Dynamically resolve the icon component from lucide-react
  const IconComponent = (Icons as any)[service.iconName] || Sparkles;

  const whatsappNumber = "+919481977717";
  const whatsappMessage = encodeURIComponent(
    `Hi Swachhath Cleaning Solution, I want to book the "${service.name}" service. Please share pricing.`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Get related services (same category, excluding current)
  const relatedServices = servicesList
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Banner with Service Image */}
        <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
          <Image
            src={service.image}
            alt={service.name}
            fill
            priority
            className="object-cover"
          />
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/20" />

          {/* Breadcrumb on top */}
          <div className="absolute top-4 left-0 right-0 z-10">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-bold text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg"
              >
                <ArrowLeft className="h-3.5 w-3.5 mr-1.5" />
                Back to Home
              </Link>
            </div>
          </div>

          {/* Hero content overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 pb-6 md:pb-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-extrabold text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                  {service.category}
                </span>
                <span className="text-xs font-bold text-secondary-light bg-secondary/20 backdrop-blur-sm px-3 py-1 rounded-full border border-secondary/30">
                  {service.tag}
                </span>
              </div>
              <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight flex items-center gap-3">
                <span className="p-2 bg-white/15 backdrop-blur-sm rounded-xl border border-white/20 shrink-0">
                  <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </span>
                {service.name}
              </h1>
            </div>
          </div>
        </div>

        {/* Quick Action Bar */}
        <div className="bg-white border-b border-slate-100 shadow-xs sticky top-16 z-30">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 py-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                <span className="font-semibold">Same-day booking</span>
              </span>
              <span className="hidden sm:flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5" />
                <span className="font-semibold">100% Satisfaction</span>
              </span>
              <span className="hidden md:flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-amber-500" />
                <span className="font-semibold">Trusted by 500+ customers</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs transition-colors"
              >
                <svg className="w-3.5 h-3.5 mr-1.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.75.002-2.605-1.002-5.054-2.829-6.88-1.827-1.827-4.26-2.83-6.875-2.83-5.448 0-9.873 4.37-9.876 9.75-.001 1.833.466 3.626 1.353 5.197l-.995 3.637 3.735-.975zm11.367-7.384c-.3-.15-1.772-.875-2.046-.975-.276-.1-.476-.15-.676.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.487-.893-.797-1.496-1.783-1.67-2.083-.175-.3-.018-.463.13-.61.134-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525c-.075-.15-.676-1.625-.926-2.225-.244-.589-.493-.51-.676-.519-.174-.009-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.112 4.521.714.308 1.272.492 1.707.63.717.228 1.368.196 1.883.118.574-.088 1.772-.724 2.022-1.424.25-.7.25-1.3 0-1.425-.075-.125-.275-.2-.575-.35z" />
                </svg>
                Book Now
              </a>
              <a
                href="#quote-form"
                className="inline-flex items-center px-4 py-2 text-xs font-extrabold text-primary bg-primary-light hover:bg-primary hover:text-white border border-primary/20 rounded-lg transition-colors"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-10 md:py-14 space-y-10">
          
          {/* Two Column Layout */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            
            {/* Left Column — Main Content */}
            <div className="md:col-span-7 space-y-8">
              
              {/* About the Service */}
              <div className="space-y-4">
                <h2 className="font-heading text-xl sm:text-2xl font-black text-slate-900">
                  About This Service
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  {service.longDesc}
                </p>
                {service.whyItMatters && (
                  <div className="bg-primary-light border border-primary/10 rounded-xl p-4 sm:p-5">
                    <h4 className="text-sm font-extrabold text-primary mb-1.5 flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Why It Matters
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {service.whyItMatters}
                    </p>
                  </div>
                )}
              </div>

              {/* Cleaning Process Timeline */}
              <div className="bg-white border border-slate-150 p-6 sm:p-7 rounded-2xl shadow-xs">
                <h2 className="font-heading text-lg sm:text-xl font-black text-slate-900 mb-6">
                  Our Step-by-Step Cleaning Process
                </h2>
                <div className="space-y-6 relative pl-5 border-l-2 border-primary/20 ml-3">
                  {service.steps.map((step, idx) => (
                    <div key={idx} className="relative">
                      {/* Step Number Dot */}
                      <span className="absolute -left-8.5 top-0.5 w-7 h-7 rounded-full bg-primary text-white font-extrabold text-xs flex items-center justify-center shadow-sm ring-4 ring-white">
                        {idx + 1}
                      </span>
                      <div className="space-y-1 pl-3">
                        <h4 className="text-base font-extrabold text-slate-900">{step.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column — Sidebar */}
            <div className="md:col-span-5 space-y-6">
              
              {/* Service Guarantees */}
              <div className="bg-white border border-slate-150 p-5 sm:p-6 rounded-2xl shadow-xs">
                <h3 className="text-base font-extrabold text-slate-900 flex items-center mb-4">
                  <Shield className="h-5 w-5 text-primary mr-2" />
                  Service Guarantees
                </h3>
                <ul className="space-y-3.5">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mt-0.5">
                        <CheckCircle className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm text-slate-600 leading-normal">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-primary text-white p-5 sm:p-6 rounded-2xl shadow-md">
                <h3 className="text-base font-extrabold mb-2">Need This Service?</h3>
                <p className="text-sm text-white/80 mb-4 leading-relaxed">
                  Get a free quote within 30 minutes. Call us directly or send a WhatsApp message with your location pin.
                </p>
                <div className="space-y-2.5">
                  <a
                    href={`tel:${whatsappNumber}`}
                    className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-extrabold bg-white text-primary rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call +91 94819 77717
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-extrabold bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.75.002-2.605-1.002-5.054-2.829-6.88-1.827-1.827-4.26-2.83-6.875-2.83-5.448 0-9.873 4.37-9.876 9.75-.001 1.833.466 3.626 1.353 5.197l-.995 3.637 3.735-.975zm11.367-7.384c-.3-.15-1.772-.875-2.046-.975-.276-.1-.476-.15-.676.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.487-.893-.797-1.496-1.783-1.67-2.083-.175-.3-.018-.463.13-.61.134-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525c-.075-.15-.676-1.625-.926-2.225-.244-.589-.493-.51-.676-.519-.174-.009-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.112 4.521.714.308 1.272.492 1.707.63.717.228 1.368.196 1.883.118.574-.088 1.772-.724 2.022-1.424.25-.7.25-1.3 0-1.425-.075-.125-.275-.2-.575-.35z" />
                    </svg>
                    WhatsApp Inquiry
                  </a>
                </div>
              </div>

              {/* Local Notice */}
              <div className="bg-secondary-light border border-secondary/15 p-4 rounded-xl space-y-2">
                <span className="text-xs font-extrabold text-primary uppercase block tracking-wide">Coastal Karnataka Service Area</span>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  Transportation costs are calculated at actuals depending on distance. Share your location pin on WhatsApp for a fast, exact price.
                </p>
                <div className="text-xs text-slate-500 pt-1.5 border-t border-secondary/15 font-semibold italic">
                  ನಿಮ್ಮ ಲೊಕೇಶನ್ ಶೇರ್ ಮಾಡಿ ನಿಖರವಾದ ದರವನ್ನು ತಿಳಿದುಕೊಳ್ಳಿ.
                </div>
              </div>
            </div>

          </div>

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <div className="pt-6 border-t border-slate-200">
              <h3 className="font-heading text-lg sm:text-xl font-black text-slate-900 mb-5">
                Other {service.category} Services
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedServices.map((related) => {
                  const RelIcon = (Icons as any)[related.iconName] || Sparkles;
                  return (
                    <Link
                      key={related.slug}
                      href={`/services/${related.slug}`}
                      className="group bg-white rounded-xl border border-slate-150 shadow-xs hover:shadow-md hover:border-primary/20 transition-all overflow-hidden flex flex-col"
                    >
                      <div className="relative h-36 overflow-hidden">
                        <Image
                          src={related.image}
                          alt={related.name}
                          fill
                          sizes="(max-width: 640px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                      </div>
                      <div className="p-3.5 flex items-center justify-between">
                        <div className="flex items-center gap-2 min-w-0">
                          <RelIcon className="h-4 w-4 text-primary shrink-0" />
                          <span className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors truncate">
                            {related.name}
                          </span>
                        </div>
                        <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quote Form */}
          <div id="quote-form" className="scroll-mt-20">
            <div className="bg-white border border-slate-150 rounded-2xl p-0.5 shadow-xs">
              <ContactForm defaultService={service.name} />
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
