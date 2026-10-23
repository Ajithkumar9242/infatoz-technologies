import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesTicker } from "@/components/ui/ServicesTicker";
import { TechEcosystem } from "@/components/sections/TechEcosystem";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { OutcomesMetrics } from "@/components/sections/OutcomesMetrics";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { BlogInsightsSection } from "@/components/sections/BlogInsightsSection";

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

        {/* Capabilities Ticker Strip */}
        <ServicesTicker />

        {/* 2. Technology Ecosystem */}
        <TechEcosystem />

        {/* 3. About Infatoz & Operational Metrics */}
        <AboutSection />

        {/* 4. Core Capabilities & Services (10 Services) */}
        <ServicesSection />

        {/* 5. Business Outcomes & Quantitative Proof Points */}
        <OutcomesMetrics />

        {/* 6. Why Choose Infatoz (3 Strategic Pillars) */}
        <WhyChooseSection />

        {/* 7. Case Studies & Real Outcomes */}
        <CaseStudiesSection />

        {/* 8. 5-Step Engineering Workflow */}
        <WorkflowSection />

        {/* 9. Verified Customer Testimonials Carousel */}
        <TestimonialsSection />

        {/* 10. Consultation Climax CTA */}
        <ConsultationCTA />

        {/* 11. Dual Office Addresses & Interactive Form */}
        <ContactFormSection />

        {/* 12. Editorial Insights & Newsroom */}
        <BlogInsightsSection />
      </main>

      {/* Complete Enterprise Footer */}
      <SiteFooter />
    </div>
  );
}
