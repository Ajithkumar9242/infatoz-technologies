import React from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ArrowLeft, Shield } from "lucide-react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy, data protection standards, and client confidentiality governance at Infatoz Technologies.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Infatoz Technologies",
    description: "Privacy policy, data protection standards, and client confidentiality governance at Infatoz Technologies.",
    url: `${siteConfig.url}/privacy`,
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <SiteHeader />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
            <Shield className="w-3.5 h-3.5" />
            <span>Data Protection & Governance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-xs text-slate-600 font-medium">
            Last Updated: March 2026 · Infatoz Technologies
          </p>

          <div className="prose prose-slate max-w-none space-y-6 text-sm text-slate-700 leading-relaxed pt-4 border-t border-slate-100">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">1. Overview</h2>
              <p>
                Infatoz Technologies (&ldquo;Infatoz&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy and is committed to protecting the business and personal information you share when inquiring about our digital engineering, software architecture, and consultation services.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">2. Information Collection</h2>
              <p>
                We collect contact and project details (such as your full name, business email, telephone number, and technology requirements) submitted through our consultation forms, direct email communications, or scheduling integrations.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">3. Purpose of Processing</h2>
              <p>
                Information collected is used solely to evaluate technical feasibility, respond to solution inquiries, schedule consultations, and maintain ongoing operational delivery communications.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">4. Confidentiality & Security</h2>
              <p>
                We enforce role-based access restrictions, data encryption in transit (TLS 1.3), and strict organizational non-disclosure agreements across all client communications and technical documentation.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">5. Contact Information</h2>
              <p>
                For privacy or governance inquiries, please reach out to:
                <br />
                <strong>Infatoz Technologies</strong>
                <br />
                Email: <a href="mailto:info@infatoz.com" className="text-blue-600 hover:underline">info@infatoz.com</a>
                <br />
                Telephone: +91 7019058591
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
