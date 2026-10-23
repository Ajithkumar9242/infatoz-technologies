"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
  Send,
  Loader2,
  Calendar,
  ExternalLink,
  Edit3,
  Info,
} from "lucide-react";
import { useCalendly } from "@/components/providers/CalendlyProvider";

export const ContactFormSection: React.FC = () => {
  const { openCalendly } = useCalendly();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web & Mobile Development",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConnectOptions, setShowConnectOptions] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = "Full name is required";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid business email address";
    }
    if (!formData.message.trim()) {
      errs.message = "Please describe your project or inquiry";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Short verification delay to indicate processing
    await new Promise((resolve) => setTimeout(resolve, 350));
    setIsSubmitting(false);
    // Reveal direct connect options since no live backend API route is attached
    setShowConnectOptions(true);
  };

  const mailtoUrl = `mailto:info@infatoz.com?subject=${encodeURIComponent(
    `Project Inquiry: ${formData.service} - ${formData.name}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\nStrategic Area: ${formData.service}\n\nProject Overview & Objectives:\n${formData.message}\n`
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-b border-slate-100" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Contact Coordinates & Benefits */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <SectionHeading
                eyebrow="Direct Consultation"
                title="Connect with Our"
                highlightText="Engineering Team"
                description="We help you make confident technology decisions tailored to your exact business objectives."
              />
            </div>

            {/* Why Choose Consultation */}
            <div className="bg-slate-50 border border-slate-200 rounded-sm p-6 space-y-4">
              <h3 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest">
                Why Choose Our Consultation:
              </h3>
              <ul className="space-y-3 text-xs text-slate-700" role="list">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Business-Focused IT & Architecture Planning</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>In-Depth Feasibility & Technology Stack Assessment</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Transparent Cost Estimation & Milestone Timelines</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>24/7 Availability & Dedicated Follow-Up Support</span>
                </li>
              </ul>
            </div>

            {/* Verified Office Addresses */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-sm border border-slate-200 bg-white">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">Bengaluru Office</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    102, Pms Residency, Kothnoor Dinne, Poornima Nagar, Arekere, Bengaluru, Karnataka 560076
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-sm border border-slate-200 bg-white">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">Registered Office (Udupi / Kundapura)</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    1-42, Takkimane, Mahabaleshwara Nandanavana, Kergal, Kundapura, Udupi, Karnataka, India - 576219
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="tel:+917019058591"
                  className="flex items-center gap-2.5 p-3.5 rounded-sm border border-slate-200 hover:border-blue-600 bg-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">Phone</span>
                    <span className="text-xs font-bold text-slate-900">+91 7019058591</span>
                  </div>
                </a>

                <a
                  href="mailto:info@infatoz.com"
                  className="flex items-center gap-2.5 p-3.5 rounded-sm border border-slate-200 hover:border-blue-600 bg-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">Email</span>
                    <span className="text-xs font-bold text-slate-900">info@infatoz.com</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-sm p-6 sm:p-10 shadow-lg relative">
              <div className="border-b border-slate-200 pb-5 mb-6">
                <span className="text-xs font-mono font-bold text-blue-600 tracking-widest uppercase">
                  PROJECT INQUIRY
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  Request a Solution Scoping
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your project requirements for an engineering review and cost assessment.
                </p>
              </div>

              {showConnectOptions ? (
                <div
                  className="p-6 sm:p-8 rounded-sm bg-slate-50 border border-slate-200 text-left space-y-6 animate-in fade-in"
                  role="region"
                  aria-label="Direct Dispatch Options"
                >
                  <div className="flex items-start gap-3.5 p-4 rounded-sm bg-amber-50 border border-amber-200 text-amber-950">
                    <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-amber-900">
                        Direct API Backend Unconfigured (Frontend Demo Release)
                      </h4>
                      <p className="text-xs text-amber-800 leading-relaxed">
                        A serverless database or email API endpoint is not yet connected to this frontend build. Your inquiry has been validated and formatted. To ensure immediate receipt by our engineering team, please dispatch it directly via email or schedule your technical scoping on Calendly.
                      </p>
                    </div>
                  </div>

                  {/* Summary of user input */}
                  <div className="bg-white p-4 rounded-sm border border-slate-200 space-y-2 text-xs">
                    <div className="font-bold text-slate-900 border-b border-slate-100 pb-2">
                      Inquiry Summary:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                      <div><strong>Client:</strong> {formData.name}</div>
                      <div><strong>Email:</strong> {formData.email}</div>
                      <div><strong>Phone:</strong> {formData.phone || "Not provided"}</div>
                      <div><strong>Service:</strong> {formData.service}</div>
                    </div>
                    <div className="pt-1 text-slate-600 border-t border-slate-100">
                      <strong>Message:</strong> <span className="italic">{formData.message}</span>
                    </div>
                  </div>

                  {/* Real dispatch action buttons */}
                  <div className="space-y-3">
                    <a
                      href={mailtoUrl}
                      className="w-full py-3.5 px-6 rounded-sm bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send Formatted Email to info@infatoz.com</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => openCalendly()}
                      className="w-full py-3.5 px-6 rounded-sm border border-slate-300 hover:border-blue-600 hover:text-blue-600 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 bg-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    >
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span>Book Free Scoping on Calendly</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowConnectOptions(false)}
                      className="w-full py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit Inquiry Form</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name field */}
                  <div>
                    <label htmlFor="form-name" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      suppressHydrationWarning
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand Murthy"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className="w-full px-4 py-3 rounded-sm border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-all"
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-email" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Work Email <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        suppressHydrationWarning
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className="w-full px-4 py-3 rounded-sm border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-all"
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="form-phone" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="form-phone"
                        type="tel"
                        suppressHydrationWarning
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-sm border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-all"
                      />
                    </div>
                  </div>

                  {/* Primary Interest Dropdown */}
                  <div>
                    <label htmlFor="form-service" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Area of Strategic Interest
                    </label>
                    <select
                      id="form-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 bg-white transition-all cursor-pointer"
                    >
                      <option value="Web & Mobile Development">Custom Web & Mobile Application Development</option>
                      <option value="ERP Software & Automation">ERP Software & Business Automation (Frappe)</option>
                      <option value="Attendance Master Platform">Attendance Master Institutional Suite</option>
                      <option value="E-Commerce Architecture">E-Commerce Development (Shopify/Headless)</option>
                      <option value="AI & Cognitive Automation">AI Applications & Process Automation</option>
                      <option value="Cloud Maintenance & Migration">Cloud Application Maintenance & DevOps (AWS/Azure/GCP)</option>
                      <option value="UI/UX Design Systems">UI/UX Design & Branding</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="form-message" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Project Overview & Objectives <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your current challenges, expected deliverables, and timeline..."
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className="w-full px-4 py-3 rounded-sm border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-all resize-y"
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-sm bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:opacity-70 min-h-[48px]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Verifying Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Consultation Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 font-medium text-center">
                    We treat all technical requirements under strict non-disclosure. No spam guarantee.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
