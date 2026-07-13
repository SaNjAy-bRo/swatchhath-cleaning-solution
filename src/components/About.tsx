import { Calendar, Shield, Cpu, MapPin } from "lucide-react";
import Image from "next/image";

export default function About() {
  const highlights = [
    {
      title: "Trusted Since 2022",
      desc: "4+ years of professional deep cleaning experience with thousands of satisfied clients.",
      icon: Calendar,
    },
    {
      title: "Regional Expertise",
      desc: "Local cleaning staff speaking your language. We understand regional climate dust and mud challenges.",
      icon: MapPin,
    },
    {
      title: "Advanced Machinery",
      desc: "Equipped with specialized high-pressure wash jets, floor scrubbers, and industrial vacuums.",
      icon: Cpu,
    },
    {
      title: "Transparent Pricing",
      desc: "Clear upfront quotes with location-based transportation charges explicitly detailed. No hidden fees.",
      icon: Shield,
    },
  ];

  return (
    <section id="about" className="section-compact bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold text-primary tracking-widest uppercase block mb-1">
            Why Swachhath
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Your Local Partner in Hygiene & Cleanness
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            We deliver premium deep cleaning that other basic maids can't match, using professional tools and expert crew.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Image (Left) */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden h-64 md:h-96 shadow-md border border-slate-100">
            <Image
              src="/images/about-crew.png"
              alt="Swachhath Cleaning Crew"
              fill
              sizes="(max-w-768px) 100vw, 40vw"
              priority
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xs p-3 rounded-lg border border-white/60 shadow-xs">
              <span className="text-xs font-black text-primary uppercase block">100% Service Guarantee</span>
              <span className="text-[11px] text-slate-500 block mt-0.5">Trained, background-verified local staff.</span>
            </div>
          </div>

          {/* Highlights Grid (Right) */}
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-100 p-4.5 rounded-xl shadow-2xs hover:shadow-xs transition-shadow duration-200"
                >
                  <div className="flex-shrink-0 p-2 bg-white text-secondary rounded-lg w-10 h-10 flex items-center justify-center shadow-2xs mb-3 border border-slate-100">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
