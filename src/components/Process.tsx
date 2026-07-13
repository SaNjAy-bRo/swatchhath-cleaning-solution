import { ClipboardList, MapPin, Sparkles, CreditCard } from "lucide-react";

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
      color: "text-amber-600 bg-amber-50",
    },
  ];

  return (
    <section id="process" className="section-compact bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-extrabold text-primary tracking-widest uppercase block mb-1">
            Our Workflow
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            How It Works in 4 Steps
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            We keep our process simple, transparent, and focused on your ultimate satisfaction.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-50 border border-slate-100 p-4.5 rounded-xl shadow-2xs hover:shadow-xs transition-all duration-200"
              >
                {/* Step number badge */}
                <div className="absolute top-3.5 right-3.5 text-xs font-black text-slate-200 font-heading">
                  {item.step}
                </div>

                {/* Icon */}
                <div className={`p-2 rounded-lg w-9 h-9 flex items-center justify-center mb-3 ${item.color}`}>
                  <IconComponent className="h-4.5 w-4.5" />
                </div>

                {/* Details */}
                <h3 className="text-base font-extrabold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                  {item.desc}
                </p>

                {/* Arrow Connector (for desktop view, omit for last step) */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-slate-300 font-bold text-lg">
                    →
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
