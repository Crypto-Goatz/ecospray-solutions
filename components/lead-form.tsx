"use client";

import { useState } from "react";
import {
  Home,
  Building2,
  HardHat,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

const PROJECT_TYPES = [
  { id: "residential", label: "Residential", icon: Home, desc: "Single-family homes" },
  { id: "commercial", label: "Commercial", icon: Building2, desc: "Business properties" },
  { id: "new-construction", label: "New Construction", icon: HardHat, desc: "New builds" },
  { id: "retrofit", label: "Retrofit", icon: RotateCcw, desc: "Existing buildings" },
];

const INSULATION_AREAS = [
  "Attic",
  "Walls",
  "Basement",
  "Crawl Space",
  "Garage",
  "Other",
];

const TIMELINES = [
  { id: "asap", label: "ASAP", desc: "Need it done now" },
  { id: "1-2-weeks", label: "1-2 Weeks", desc: "Pretty soon" },
  { id: "1-3-months", label: "1-3 Months", desc: "Planning ahead" },
  { id: "researching", label: "Just Researching", desc: "Gathering info" },
];

interface FormData {
  projectType: string;
  areas: string[];
  timeline: string;
  name: string;
  phone: string;
  email: string;
  zip: string;
  message: string;
}

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState<FormData>({
    projectType: "",
    areas: [],
    timeline: "",
    name: "",
    phone: "",
    email: "",
    zip: "",
    message: "",
  });

  const totalSteps = 4;

  const toggleArea = (area: string) => {
    setForm((prev) => ({
      ...prev,
      areas: prev.areas.includes(area)
        ? prev.areas.filter((a) => a !== area)
        : [...prev.areas, area],
    }));
  };

  const canProceed = () => {
    if (step === 1) return form.projectType !== "";
    if (step === 2) return form.areas.length > 0;
    if (step === 3) return form.timeline !== "";
    if (step === 4) return form.name && form.phone && form.email && form.zip;
    return false;
  };

  const handleNext = () => {
    if (canProceed() && step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to submit. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 rounded-full bg-[var(--green)]/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-[var(--green)]" />
        </div>
        <h3 className="text-2xl font-bold text-[var(--navy)] mb-3">
          Thank You!
        </h3>
        <p className="text-[var(--slate-500)] max-w-md mx-auto">
          We received your request and will contact you within 24 hours with a free estimate.
          Check your email for a confirmation.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-[var(--slate-500)]">
            Step {step} of {totalSteps}
          </span>
          <span className="text-sm font-medium text-[var(--blue)]">
            {Math.round((step / totalSteps) * 100)}%
          </span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Error Toast */}
      {error && (
        <div className="flex items-center gap-3 p-4 mb-6 rounded-xl bg-red-50 border border-red-200 text-red-700">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm">{error}</p>
          <button
            onClick={() => setError("")}
            className="ml-auto text-red-400 hover:text-red-600"
          >
            &times;
          </button>
        </div>
      )}

      {/* Steps Container */}
      <div className="relative overflow-hidden">
        {/* Step 1: Project Type */}
        <div className={`form-step ${step === 1 ? "active" : ""}`}>
          <h3 className="text-xl font-bold text-[var(--navy)] mb-2">
            What type of project?
          </h3>
          <p className="text-[var(--slate-500)] mb-6">
            Select the option that best describes your project.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROJECT_TYPES.map((type) => (
              <button
                key={type.id}
                onClick={() => setForm({ ...form, projectType: type.id })}
                className={`flex items-center gap-4 p-5 rounded-xl border-2 text-left transition-all duration-300 hover:shadow-md ${
                  form.projectType === type.id
                    ? "border-[var(--blue)] bg-[var(--blue)]/5 shadow-md"
                    : "border-[var(--slate-200)] hover:border-[var(--blue)]/40"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    form.projectType === type.id
                      ? "bg-[var(--blue)] text-white"
                      : "bg-[var(--slate-100)] text-[var(--slate-500)]"
                  }`}
                >
                  <type.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--navy)]">{type.label}</div>
                  <div className="text-sm text-[var(--slate-500)]">{type.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Areas */}
        <div className={`form-step ${step === 2 ? "active" : ""}`}>
          <h3 className="text-xl font-bold text-[var(--navy)] mb-2">
            What needs insulation?
          </h3>
          <p className="text-[var(--slate-500)] mb-6">
            Select all areas that apply.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {INSULATION_AREAS.map((area) => (
              <button
                key={area}
                onClick={() => toggleArea(area)}
                className={`p-4 rounded-xl border-2 text-center font-medium transition-all duration-300 hover:shadow-md ${
                  form.areas.includes(area)
                    ? "border-[var(--blue)] bg-[var(--blue)]/5 text-[var(--blue)]"
                    : "border-[var(--slate-200)] text-[var(--slate-700)] hover:border-[var(--blue)]/40"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  {form.areas.includes(area) && (
                    <CheckCircle className="w-4 h-4" />
                  )}
                  {area}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Timeline */}
        <div className={`form-step ${step === 3 ? "active" : ""}`}>
          <h3 className="text-xl font-bold text-[var(--navy)] mb-2">
            Project timeline?
          </h3>
          <p className="text-[var(--slate-500)] mb-6">
            When do you need the work done?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TIMELINES.map((t) => (
              <button
                key={t.id}
                onClick={() => setForm({ ...form, timeline: t.id })}
                className={`p-5 rounded-xl border-2 text-left transition-all duration-300 hover:shadow-md ${
                  form.timeline === t.id
                    ? "border-[var(--blue)] bg-[var(--blue)]/5 shadow-md"
                    : "border-[var(--slate-200)] hover:border-[var(--blue)]/40"
                }`}
              >
                <div className="font-semibold text-[var(--navy)]">{t.label}</div>
                <div className="text-sm text-[var(--slate-500)]">{t.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 4: Contact Info */}
        <div className={`form-step ${step === 4 ? "active" : ""}`}>
          <h3 className="text-xl font-bold text-[var(--navy)] mb-2">
            Your contact information
          </h3>
          <p className="text-[var(--slate-500)] mb-6">
            We will reach out with your free, no-obligation estimate.
          </p>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--slate-700)] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Smith"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white text-[var(--slate-800)] placeholder:text-[var(--slate-500)]/50 focus:outline-none focus:border-[var(--blue)] focus:ring-2 focus:ring-[var(--blue)]/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--slate-700)] mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="(412) 555-1234"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white text-[var(--slate-800)] placeholder:text-[var(--slate-500)]/50 focus:outline-none focus:border-[var(--blue)] focus:ring-2 focus:ring-[var(--blue)]/20 transition-all"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--slate-700)] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white text-[var(--slate-800)] placeholder:text-[var(--slate-500)]/50 focus:outline-none focus:border-[var(--blue)] focus:ring-2 focus:ring-[var(--blue)]/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--slate-700)] mb-1.5">
                  ZIP Code *
                </label>
                <input
                  type="text"
                  value={form.zip}
                  onChange={(e) => setForm({ ...form, zip: e.target.value })}
                  placeholder="15201"
                  maxLength={5}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white text-[var(--slate-800)] placeholder:text-[var(--slate-500)]/50 focus:outline-none focus:border-[var(--blue)] focus:ring-2 focus:ring-[var(--blue)]/20 transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--slate-700)] mb-1.5">
                Additional Details (optional)
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us more about your project..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white text-[var(--slate-800)] placeholder:text-[var(--slate-500)]/50 focus:outline-none focus:border-[var(--blue)] focus:ring-2 focus:ring-[var(--blue)]/20 transition-all resize-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-[var(--slate-200)]">
        {step > 1 ? (
          <button
            onClick={handleBack}
            className="flex items-center gap-2 px-5 py-3 rounded-xl text-[var(--slate-700)] font-medium hover:bg-[var(--slate-100)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        ) : (
          <div />
        )}

        {step < totalSteps ? (
          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              canProceed()
                ? "btn-primary"
                : "bg-[var(--slate-200)] text-[var(--slate-500)] cursor-not-allowed"
            }`}
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!canProceed() || submitting}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
              canProceed() && !submitting
                ? "btn-primary"
                : "bg-[var(--slate-200)] text-[var(--slate-500)] cursor-not-allowed"
            }`}
          >
            {submitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Get My Free Estimate
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
