import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Feedback from "@/components/Feedback";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      {/* Sticky Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Compact Hero Section with responsive BG */}
        <Hero />

        {/* Dynamic Services Tabbed Section */}
        <Services />

        {/* How It Works Workflow Section */}
        <Process />

        {/* Why Choose Us Info Grid */}
        <About />

        {/* Testimonials & Share Feedback Section */}
        <Feedback />

        {/* Quote Request Contact Form */}
        <ContactForm />
      </main>

      {/* Footer & Disclaimer */}
      <Footer />

      {/* Sticky Pulsating WhatsApp Button */}
      <FloatingWhatsApp />
    </>
  );
}
