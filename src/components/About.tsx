import { Calendar, Shield, Cpu, MapPin, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function About() {
  const highlights = [
    {
      title: "Trusted Since 2022",
      desc: "4+ years of professional deep cleaning experience with thousands of satisfied clients.",
      icon: Calendar,
      color: "text-primary bg-primary-light",
    },
    {
      title: "Regional Expertise",
      desc: "Local cleaning staff speaking your language. We understand regional climate dust and mud challenges.",
      icon: MapPin,
      color: "text-secondary bg-secondary-light",
    },
    {
      title: "Advanced Machinery",
      desc: "Equipped with specialized high-pressure wash jets, floor scrubbers, and industrial vacuums.",
      icon: Cpu,
      color: "text-accent bg-accent-light",
    },
    {
      title: "Transparent Pricing",
      desc: "Clear upfront quotes with location-based transportation charges explicitly detailed. No hidden fees.",
      icon: Shield,
      color: "text-emerald-600 bg-emerald-50",
    },
  ];

  return (
    <section id="about" className="section-compact bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-secondary tracking-[0.2em] uppercase block mb-2">
            Why Swachhath
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Your Local Partner in Hygiene & Cleanness
          </h2>
          <p className="text-base text-slate-655 mt-2 leading-relaxed">
            We deliver premium deep cleaning that other basic maids can't match, using professional tools and expert crew.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          {/* Image (Left) */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden min-h-[300px] md:min-h-full shadow-md border border-slate-150 group">
            <Image
              src="/images/about-crew.png"
              alt="Swachhath Cleaning Crew"
              fill
              sizes="(max-w-768px) 100vw, 40vw"
              priority
              className="object-cover group-hover:scale-103 transition-transform duration-500"
            />
            {/* Dark gradient overlay bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/60 shadow-md">
              <span className="text-xs font-black text-primary uppercase block tracking-wider flex items-center">
                <CheckCircle className="h-4 w-4 text-secondary mr-1.5 shrink-0" />
                100% Service Guarantee
              </span>
              <span className="text-[11px] text-slate-500 block mt-1 font-medium leading-relaxed">
                Trained, background-verified local staff who respect your privacy.
              </span>
            </div>
          </div>

          {/* Highlights Grid (Right) */}
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-150 p-5 rounded-2xl shadow-3xs card-hover flex flex-col justify-between"
                >
                  <div>
                    <div className={`p-2.5 rounded-xl w-10 h-10 flex items-center justify-center mb-4 ${item.color} shadow-3xs`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 leading-snug">{item.title}</h3>
                    <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
