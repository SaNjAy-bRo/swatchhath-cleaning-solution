import { ClipboardList, MapPin, Sparkles, CreditCard, ArrowRight } from "lucide-react";

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Book & Request",
      desc: "Fill our simple form or send a WhatsApp message describing your cleaning needs.",
      icon: ClipboardList,
      color: "text-primary bg-primary-light",
    },
    {
      step: "02",
      title: "Share Location",
      desc: "Send your current location pin on WhatsApp so we can calculate upfront transport costs.",
      icon: MapPin,
      color: "text-secondary bg-secondary-light",
    },
    {
      step: "03",
      title: "Deep Cleaning Day",
      desc: "Our verified regional crew arrives with professional machinery and cleans your space.",
      icon: Sparkles,
      color: "text-accent bg-accent-light",
    },
    {
      step: "04",
      title: "Inspect & Pay",
      desc: "Verify the quality of cleaning. Pay once you are 100% satisfied with the work.",
      icon: CreditCard,
      color: "text-emerald-600 bg-emerald-50",
    },
  ];

  return (
    <section id="process" className="section-compact bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-secondary tracking-[0.2em] uppercase block mb-2">
            Our Workflow
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            How It Works in 4 Simple Steps
          </h2>
          <p className="text-base text-slate-655 mt-2 leading-relaxed">
            We keep our process simple, transparent, and focused on your ultimate satisfaction.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-white border border-slate-150 p-6 rounded-2xl shadow-3xs card-hover flex flex-col justify-between"
              >
                <div>
                  {/* Step number badge */}
                  <div className="text-3xl font-black text-slate-100 font-heading mb-4 select-none">
                    {item.step}
                  </div>

                  {/* Icon */}
                  <div className={`p-3 rounded-xl w-11 h-11 flex items-center justify-center mb-4 ${item.color} shadow-3xs`}>
                    <IconComponent className="h-5 w-5" />
                  </div>

                  {/* Details */}
                  <h3 className="text-base font-extrabold text-slate-900 leading-snug">{item.title}</h3>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow Connector (for desktop view, omit for last step) */}
                {idx < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4.5 -translate-y-1/2 z-10 text-slate-300 font-bold items-center justify-center">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
