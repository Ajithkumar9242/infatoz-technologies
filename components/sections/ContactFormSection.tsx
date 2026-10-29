"use client";

import React, { useState } from "react";
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
    <section id="contact" className="py-20 md:py-28 bg-white border-b border-slate-200/90" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Authentic Infatoz Contact & Consultation Details (Open Editorial Layout, Zero Nested Boxed Cards) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-none shrink-0" aria-hidden="true" />
                <span className="text-xs font-extrabold tracking-[0.2em] text-blue-700 uppercase">
                  Free Consultation
                </span>
              </div>
              <h2 id="contact-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                Book a Consultation
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                We help you make confident technology decisions that fit your goals.
              </p>
            </div>

            {/* Why Choose Our Consultation Service (Open Typography, No Nested Box) */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-900">
                Why Choose Our Consultation Service:
              </h3>
              <ul className="space-y-3 text-sm text-slate-700" role="list">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Business-Focused IT Planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>In-Depth Technology Assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Expert Analysis of Your IT Needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>24/7 Availability and Ongoing Support</span>
                </li>
              </ul>
            </div>

            {/* Verified Dual Office Coordinates (Clean Open Dividers) */}
            <div className="pt-6 border-t border-slate-200 space-y-6">
              {/* Bengaluru Branch */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>Office Address (Bengaluru)</span>
                </div>
                <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                  102, Pms Residency, Kothnoor Dinne, Poornima Nagar, Arekere, Bengaluru, Karnataka 560076
                </p>
              </div>

              {/* Kundapura Registered Office */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>Registered Address (Kundapura)</span>
                </div>
                <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                  1-42, Takkimane, Mahabaleshwara Nandanavana, Kergal, Udupi, Kundapura, Karnataka, India - 576219
                </p>
              </div>

              {/* Direct Channels */}
              <div className="pt-2 pl-6 flex flex-wrap gap-6 text-xs font-bold">
                <a
                  href="tel:+917019058591"
                  className="inline-flex items-center gap-2 text-slate-800 hover:text-blue-600 transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>+91 7019058591</span>
                </a>
                <a
                  href="mailto:info@infatoz.com"
                  className="inline-flex items-center gap-2 text-slate-800 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>info@infatoz.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Enterprise Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#faf9f6] border border-slate-200 rounded-sm p-8 sm:p-10 shadow-lg">
              <div className="mb-6 pb-4 border-b border-slate-200">
                <span className="text-xs font-extrabold uppercase tracking-widest text-blue-700 block">
                  Project Inquiry
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  Request a Solution Scoping
                </h3>
              </div>

              {!showConnectOptions ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        placeholder="e.g. Anand Murthy"
                        className={`w-full px-4 py-3 rounded-sm border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                          errors.name ? "border-red-500 ring-1 ring-red-500" : "border-slate-300"
                        }`}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        placeholder="name@company.com"
                        className={`w-full px-4 py-3 rounded-sm border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                          errors.email ? "border-red-500 ring-1 ring-red-500" : "border-slate-300"
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-sm border border-slate-300 text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        Area of Strategic Interest
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                      >
                        <option value="Web & Mobile Development">Custom Web & Mobile Development</option>
                        <option value="ERP & Business Automation">ERP Software & Automation Systems</option>
                        <option value="Cloud & Infrastructure">Cloud Hosting, Migration & DevOps</option>
                        <option value="AI Application Development">AI Development & Document Automation</option>
                        <option value="UI/UX & Digital Growth">UI/UX Design & Branding</option>
                        <option value="General Consultation">General Technology Consultation</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Project Overview & Objectives <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      placeholder="Tell us about your current challenges, expected deliverables, and timeline..."
                      className={`w-full px-4 py-3 rounded-sm border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                        errors.message ? "border-red-500 ring-1 ring-red-500" : "border-slate-300"
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-extrabold uppercase tracking-wider text-xs rounded-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Verifying Submission...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Consultation Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    We treat all technical requirements under strict non-disclosure. No spam guarantee.
                  </p>
                </form>
              ) : (
                /* Post-Submission Verified Routing Options */
                <div className="space-y-6 py-4 animate-in fade-in duration-300">
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-sm flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-emerald-950">
                        Inquiry Prepared Successfully
                      </h4>
                      <p className="text-xs text-emerald-800 mt-1">
                        Please choose your preferred method to complete your consultation request with our engineering leads:
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Primary Option: Instant Calendly Booking */}
                    <div className="p-5 border-2 border-blue-600 bg-white rounded-sm space-y-3 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider">
                          <Calendar className="w-4 h-4" />
                          <span>Recommended Option</span>
                        </div>
                        <h5 className="text-base font-bold text-slate-900 mt-2">
                          Book Instant 30-Min Call
                        </h5>
                        <p className="text-xs text-slate-600 mt-1">
                          Lock in a direct scoping video call on our technical team&apos;s live calendar.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => openCalendly()}
                        className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <span>Schedule on Calendly</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Secondary Option: Direct Email Dispatch */}
                    <div className="p-5 border border-slate-300 bg-white rounded-sm space-y-3 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-slate-700 font-bold text-xs uppercase tracking-wider">
                          <Mail className="w-4 h-4" />
                          <span>Email Dispatch</span>
                        </div>
                        <h5 className="text-base font-bold text-slate-900 mt-2">
                          Send Pre-Filled Email
                        </h5>
                        <p className="text-xs text-slate-600 mt-1">
                          Launch your default email client with all entered scoping details formatted to info@infatoz.com.
                        </p>
                      </div>
                      <a
                        href={mailtoUrl}
                        className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-1.5"
                      >
                        <span>Launch Mail Client</span>
                        <Send className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={() => setShowConnectOptions(false)}
                      className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-blue-600 font-medium"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit form details</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
