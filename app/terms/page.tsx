import React from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Infatoz Technologies",
  description: "Terms and conditions governing the use of Infatoz Technologies websites and digital services.",
};

export default function TermsPage() {
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
            <FileText className="w-3.5 h-3.5" />
            <span>Legal Agreement</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Terms &amp; Conditions
          </h1>

          <p className="text-xs text-slate-600 font-medium">
            Last Updated: March 2026 · Infatoz Technologies
          </p>

          <div className="prose prose-slate max-w-none space-y-6 text-sm text-slate-700 leading-relaxed pt-4 border-t border-slate-100">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
              <p>
                By accessing or browsing this website operated by Infatoz Technologies (&ldquo;Infatoz&rdquo;), you acknowledge and agree to comply with these Terms and Conditions.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">2. Professional Services</h2>
              <p>
                Statements, case briefs, and architectural overviews provided on this website are for informational purposes. Formal commercial engagements, deliverables, milestones, and warranties are governed by individual Master Service Agreements (MSAs) and Statements of Work (SOWs).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">3. Intellectual Property</h2>
              <p>
                All trademarks, service marks, emblems, software architectures, logos, and editorial content displayed on this website are the proprietary property of Infatoz Technologies or their respective owners.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">4. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India, with jurisdiction in Karnataka.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
