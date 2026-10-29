import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import { OutcomesMetrics } from "@/components/sections/OutcomesMetrics";
import { ServicesTicker } from "@/components/ui/ServicesTicker";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TechEcosystem } from "@/components/sections/TechEcosystem";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogInsightsSection } from "@/components/sections/BlogInsightsSection";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { ContactFormSection } from "@/components/sections/ContactFormSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Global Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-blue-600 text-white rounded-md font-bold shadow-lg"
      >
        Skip to main content
      </a>

      {/* Enterprise Site Header with Sticky Behavior and Megamenu */}
      <SiteHeader />

      {/* Main Landmark */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section — "Idea to Impact" */}
        <HeroSection />

        {/* 2. Scale at Speed with Infatoz Technologies & Quantitative Proof Points */}
        <OutcomesMetrics />

        {/* 3. Capabilities Ticker Strip */}
        <ServicesTicker />

        {/* 4. About Infatoz & Operational Philosophy */}
        <AboutSection />

        {/* 5. Core Capabilities (Tech Mahindra Interactive Split Layout) */}
        <ServicesSection />

        {/* 6. Enterprise Technology Ecosystem & Cloud Partners */}
        <TechEcosystem />

        {/* 7. Industry Expertise & Embedded Company Showcase Video */}
        <WhyChooseSection />

        {/* 8. Success Stories & Real Enterprise Outcomes */}
        <CaseStudiesSection />

        {/* 9. 5-Step Delivery Engineering Framework */}
        <WorkflowSection />

        {/* 10. Customer Speak (Verified Testimonials Carousel) */}
        <TestimonialsSection />

        {/* 11. Latest Thinking & Editorial Insights */}
        <BlogInsightsSection />

        {/* 12. Limitless Together Climax Consultation CTA */}
        <ConsultationCTA />

        {/* 13. Dual Office Addresses & Interactive Form */}
        <ContactFormSection />
      </main>

      {/* Complete Enterprise Footer */}
      <SiteFooter />
    </div>
  );
}
