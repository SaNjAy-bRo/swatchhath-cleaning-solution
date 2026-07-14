"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getServiceBySlug } from "@/data/servicesData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactForm from "@/components/ContactForm";
import * as Icons from "lucide-react";
import { ArrowLeft, CheckCircle, Shield, Phone, Sparkles } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-slate-55 flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow py-8 md:py-14">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-8">
          
          {/* Breadcrumb / Back Navigation */}
          <div className="flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1.5" />
              Back to Home
            </Link>
          </div>

          {/* Service Header Card */}
          <div className="bg-white border border-slate-150 p-6 rounded-2xl shadow-3xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-extrabold text-primary bg-primary-light px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {service.category}
                </span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                  {service.tag}
                </span>
              </div>
              <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight flex items-center">
                <span className="p-2 bg-primary-light text-primary rounded-lg mr-3 inline-flex items-center justify-center">
                  <IconComponent className="h-6 w-6" />
                </span>
                {service.name}
              </h1>
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none inline-flex items-center justify-center px-5 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs transition-colors"
              >
                <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.75.002-2.605-1.002-5.054-2.829-6.88-1.827-1.827-4.26-2.83-6.875-2.83-5.448 0-9.873 4.37-9.876 9.75-.001 1.833.466 3.626 1.353 5.197l-.995 3.637 3.735-.975zm11.367-7.384c-.3-.15-1.772-.875-2.046-.975-.276-.1-.476-.15-.676.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.487-.893-.797-1.496-1.783-1.67-2.083-.175-.3-.018-.463.13-.61.134-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525c-.075-.15-.676-1.625-.926-2.225-.244-.589-.493-.51-.676-.519-.174-.009-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.112 4.521.714.308 1.272.492 1.707.63.717.228 1.368.196 1.883.118.574-.088 1.772-.724 2.022-1.424.25-.7.25-1.3 0-1.425-.075-.125-.275-.2-.575-.35z" />
                </svg>
                WhatsApp Inquiry
              </a>
              <a
                href="#quote-form"
                className="flex-1 md:flex-none inline-flex items-center justify-center px-5 py-3 text-sm font-bold text-slate-700 bg-white border border-slate-300 hover:border-primary rounded-lg shadow-3xs transition-colors"
              >
                Get Quote
              </a>
            </div>
          </div>

          {/* Details & Visual Columns */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            
            {/* Visuals & Benefits (Left) */}
            <div className="md:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 shadow-md border border-slate-100">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Specific Benefits Card */}
              <div className="bg-white border border-slate-150 p-5 rounded-2xl shadow-3xs space-y-4">
                <h3 className="text-base font-extrabold text-slate-900 flex items-center">
                  <Shield className="h-5 w-5 text-primary mr-2" />
                  Service Guarantees
                </h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-black">
                        ✓
                      </span>
                      <span className="text-sm text-slate-600 leading-normal">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Local Notice Card */}
              <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl space-y-2">
                <span className="text-xs font-extrabold text-emerald-800 uppercase block">Coastal Karnataka Service Info:</span>
                <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                  Transportation costs are calculated at actuals depending on distance. Share your location pin on WhatsApp for a fast, exact price.
                </p>
                <div className="text-xs text-emerald-850 pt-1.5 border-t border-emerald-100/60 font-semibold italic">
                  ನಿಮ್ಮ ಲೊಕೇಶನ್ ಶೇರ್ ಮಾಡಿ ನಿಖರವಾದ ದರವನ್ನು ತಿಳಿದುಕೊಳ್ಳಿ.
                </div>
              </div>
            </div>

            {/* Description & Timeline (Right) */}
            <div className="md:col-span-7 space-y-6">
              
              {/* Detailed Description */}
              <div className="bg-white border border-slate-150 p-6 rounded-2xl shadow-3xs space-y-3">
                <h2 className="text-lg font-extrabold text-slate-900">About the Service</h2>
                <p className="text-sm text-slate-650 leading-relaxed font-medium">
                  {service.longDesc}
                </p>
              </div>

              {/* Cleaning Process Timeline */}
              <div className="bg-white border border-slate-150 p-6 rounded-2xl shadow-3xs space-y-5">
                <h2 className="text-lg font-extrabold text-slate-900">Our Cleaning Workflow</h2>
                <div className="space-y-5 relative pl-4 border-l border-slate-200 ml-2.5">
                  {service.steps.map((step, idx) => (
                    <div key={idx} className="relative">
                      {/* Step Number Dot */}
                      <span className="absolute -left-7.5 top-0.5 w-6 h-6 rounded-full bg-primary text-white font-extrabold text-[10px] flex items-center justify-center shadow-xs">
                        {idx + 1}
                      </span>
                      <div className="space-y-1 pl-2">
                        <h4 className="text-base font-extrabold text-slate-900">{step.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Call to Action Quote Request Form */}
          <div id="quote-form" className="scroll-mt-20">
            <div className="bg-slate-50 border border-slate-150 rounded-2xl p-0.5 shadow-2xs">
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
