"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const STEPS = [
  {
    id: "has_routine",
    question: "Do you already have a fitness routine?",
    options: [
      { value: "no", label: "No" },
      { value: "yes", label: "Yes" },
    ],
  },
  {
    id: "primary_goal",
    question: "What's your primary goal?",
    options: [
      { value: "weight_loss", label: "Lose weight and keep it off" },
      { value: "build_muscle", label: "Build strength and muscle" },
      { value: "develop_routine", label: "Develop a consistent routine" },
      { value: "general_health", label: "Improve overall health" },
    ],
  },
  {
    id: "timeline",
    question: "When are you looking to get started?",
    options: [
      { value: "asap", label: "As soon as possible" },
      { value: "2_4_weeks", label: "Within the next 2–4 weeks" },
      { value: "4_plus_weeks", label: "More than 4 weeks out" },
    ],
  },
];

const TOTAL_STEPS = STEPS.length + 1; // +1 for contact info step

interface FormAnswers {
  has_routine: string;
  primary_goal: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
}

interface LeadFormProps {
  formId?: string;
  variant?: "light" | "dark" | "clean" | "tech";
}

export function LeadForm({ formId = "lead-form", variant = "light" }: LeadFormProps) {
  const isDark = variant === "dark";
  const isClean = variant === "clean";
  const isTech = variant === "tech";
  const searchParams = useSearchParams();

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<FormAnswers>({
    has_routine: "",
    primary_goal: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleOptionSelect = (stepId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [stepId]: value }));
    setCurrentStep((prev) => prev + 1);

    // Scroll form to top of viewport
    setTimeout(() => {
      const form = document.getElementById(formId);
      form?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleContactChange = (field: "name" | "email" | "phone", value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const utmParams = {
      utm_source: searchParams.get("utm_source") || "",
      utm_medium: searchParams.get("utm_medium") || "",
      utm_campaign: searchParams.get("utm_campaign") || "",
      utm_content: searchParams.get("utm_content") || "",
      utm_term: searchParams.get("utm_term") || "",
      gclid: searchParams.get("gclid") || "",
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...answers, ...utmParams }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      router.push("/thank-you");
    } catch {
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  const isContactStep = currentStep === STEPS.length;
  const progress = ((currentStep + 1) / TOTAL_STEPS) * 100;

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Quick indicator - no numbered steps, just subtle progress */}
      <div className="mb-8">
        <div className={`h-1 overflow-hidden ${isDark ? "bg-[#262626]" : isClean ? "bg-[#e2e2e2]" : isTech ? "bg-[#334155]" : "bg-gray-200"}`}>
          <div
            className={`h-full transition-all duration-300 ease-out ${isDark ? "bg-[#ff2e2e]" : isClean ? "bg-[#bb0012]" : isTech ? "bg-[#e11d48]" : "bg-gray-900"}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Steps */}
      {!isContactStep && (
        <div>
          <p className={`text-xs uppercase tracking-widest text-center mb-4 ${isDark ? "text-[#737373]" : isClean ? "text-[#5f5e5e]" : isTech ? "text-[#94a3b8] font-mono" : "text-gray-400"}`}>
            {currentStep + 1} of {TOTAL_STEPS}
          </p>
          <h2 className={`text-2xl font-semibold mb-6 text-center ${isDark ? "text-white" : isClean ? "text-[#1a1c1c]" : isTech ? "text-[#d4e4fa]" : ""}`}>
            {STEPS[currentStep].question}
          </h2>

          {/* First step (has_routine) - CTA button style */}
          {currentStep === 0 ? (
            <div className="flex gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleOptionSelect(STEPS[currentStep].id, "no")}
                className={`px-8 py-4 font-semibold text-lg cursor-pointer transition-all ${
                  isDark
                    ? "bg-[#ff2e2e] text-white hover:scale-105 active:scale-95"
                    : isClean
                    ? "bg-[#bb0012] text-white hover:opacity-90 active:scale-95"
                    : isTech
                    ? "bg-[#e11d48] text-white hover:opacity-90 active:scale-95 uppercase tracking-wider"
                    : "bg-gray-900 text-white rounded-lg hover:bg-gray-800"
                }`}
              >
                No
              </button>
              <button
                type="button"
                onClick={() => handleOptionSelect(STEPS[currentStep].id, "yes")}
                className={`px-8 py-4 font-semibold text-lg cursor-pointer transition-all ${
                  isDark
                    ? "bg-[#ff2e2e] text-white hover:scale-105 active:scale-95"
                    : isClean
                    ? "bg-[#bb0012] text-white hover:opacity-90 active:scale-95"
                    : isTech
                    ? "bg-[#e11d48] text-white hover:opacity-90 active:scale-95 uppercase tracking-wider"
                    : "bg-gray-900 text-white rounded-lg hover:bg-gray-800"
                }`}
              >
                Yes
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {STEPS[currentStep].options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleOptionSelect(STEPS[currentStep].id, option.value)}
                  className={`w-full p-4 text-left border transition-colors cursor-pointer ${
                    isDark
                      ? "border-[#333333] bg-[#0d0d0d] hover:border-[#ff2e2e] text-[#e5e2e1]"
                      : isClean
                      ? "border-[#1a1c1c]/10 bg-white hover:border-[#bb0012] text-[#1a1c1c]"
                      : isTech
                      ? "border-[#334155] bg-[#051424] hover:border-[#e11d48] text-[#d4e4fa]"
                      : "border-2 border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Contact Info Step */}
      {isContactStep && (
        <form onSubmit={handleSubmit}>
          <p className={`text-xs uppercase tracking-widest text-center mb-4 ${isDark ? "text-[#737373]" : isClean ? "text-[#5f5e5e]" : isTech ? "text-[#94a3b8] font-mono" : "text-gray-400"}`}>
            {TOTAL_STEPS} of {TOTAL_STEPS}
          </p>
          <h2 className={`text-2xl font-semibold mb-2 text-center ${isDark ? "text-white" : isClean ? "text-[#1a1c1c]" : isTech ? "text-[#d4e4fa]" : ""}`}>
            Where should we reach you?
          </h2>
          <p className={`text-center mb-6 ${isDark ? "text-[#737373]" : isClean ? "text-[#5f5e5e]" : isTech ? "text-[#bec6e0]" : "text-gray-600"}`}>
            We'll reach out to schedule your free week.
          </p>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className={`block text-sm font-medium mb-1 ${isDark ? "text-[#737373] uppercase tracking-wider" : isClean ? "text-[#5f5e5e] uppercase tracking-wider" : isTech ? "text-[#94a3b8] uppercase tracking-wider font-mono text-xs" : "text-gray-700"}`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={answers.name}
                onChange={(e) => handleContactChange("name", e.target.value)}
                className={`w-full p-3 border transition-colors focus:outline-none ${
                  isDark
                    ? "bg-[#0d0d0d] border-[#333333] focus:border-[#ff2e2e] text-white placeholder-[#737373]"
                    : isClean
                    ? "bg-white border-[#1a1c1c]/20 border-b-2 border-t-0 border-l-0 border-r-0 focus:border-[#bb0012] text-[#1a1c1c] placeholder-[#5f5e5e]"
                    : isTech
                    ? "bg-[#051424] border-[#334155] focus:border-[#e11d48] text-[#d4e4fa] placeholder-[#94a3b8]"
                    : "border-2 border-gray-200 rounded-lg focus:border-gray-900"
                }`}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="phone" className={`block text-sm font-medium mb-1 ${isDark ? "text-[#737373] uppercase tracking-wider" : isClean ? "text-[#5f5e5e] uppercase tracking-wider" : isTech ? "text-[#94a3b8] uppercase tracking-wider font-mono text-xs" : "text-gray-700"}`}>
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={answers.phone}
                onChange={(e) => handleContactChange("phone", e.target.value)}
                className={`w-full p-3 border transition-colors focus:outline-none ${
                  isDark
                    ? "bg-[#0d0d0d] border-[#333333] focus:border-[#ff2e2e] text-white placeholder-[#737373]"
                    : isClean
                    ? "bg-white border-[#1a1c1c]/20 border-b-2 border-t-0 border-l-0 border-r-0 focus:border-[#bb0012] text-[#1a1c1c] placeholder-[#5f5e5e]"
                    : isTech
                    ? "bg-[#051424] border-[#334155] focus:border-[#e11d48] text-[#d4e4fa] placeholder-[#94a3b8]"
                    : "border-2 border-gray-200 rounded-lg focus:border-gray-900"
                }`}
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label htmlFor="email" className={`block text-sm font-medium mb-1 ${isDark ? "text-[#737373] uppercase tracking-wider" : isClean ? "text-[#5f5e5e] uppercase tracking-wider" : isTech ? "text-[#94a3b8] uppercase tracking-wider font-mono text-xs" : "text-gray-700"}`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={answers.email}
                onChange={(e) => handleContactChange("email", e.target.value)}
                className={`w-full p-3 border transition-colors focus:outline-none ${
                  isDark
                    ? "bg-[#0d0d0d] border-[#333333] focus:border-[#ff2e2e] text-white placeholder-[#737373]"
                    : isClean
                    ? "bg-white border-[#1a1c1c]/20 border-b-2 border-t-0 border-l-0 border-r-0 focus:border-[#bb0012] text-[#1a1c1c] placeholder-[#5f5e5e]"
                    : isTech
                    ? "bg-[#051424] border-[#334155] focus:border-[#e11d48] text-[#d4e4fa] placeholder-[#94a3b8]"
                    : "border-2 border-gray-200 rounded-lg focus:border-gray-900"
                }`}
                placeholder="you@example.com"
              />
            </div>
          </div>

          {error && (
            <p className={`mt-4 text-sm ${isDark ? "text-[#ff2e2e]" : isClean ? "text-[#bb0012]" : isTech ? "text-[#ffb3b6]" : "text-red-600"}`}>{error}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full mt-6 p-4 font-medium transition-all cursor-pointer disabled:cursor-not-allowed ${
              isDark
                ? "bg-[#ff2e2e] text-white hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                : isClean
                ? "bg-[#bb0012] text-white hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
                : isTech
                ? "bg-[#e11d48] text-white hover:opacity-90 active:scale-[0.98] disabled:opacity-50 uppercase tracking-wider"
                : "bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-400"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Get My Free Week"}
          </button>

          <p className={`mt-4 text-xs text-center ${isDark ? "text-[#737373]" : isClean ? "text-[#5f5e5e]" : isTech ? "text-[#94a3b8]" : "text-gray-500"}`}>
            By submitting, you agree to our{" "}
            <a
              href="/privacy"
              target="_blank"
              className={`underline hover:no-underline ${isDark ? "text-[#ff2e2e]" : isClean ? "text-[#bb0012]" : isTech ? "text-[#ffb3b6]" : "text-gray-700"}`}
            >
              Privacy Policy
            </a>
          </p>
        </form>
      )}

      {/* Back Button */}
      {currentStep > 0 && (
        <button
          type="button"
          onClick={handleBack}
          className={`mt-6 transition-colors cursor-pointer ${
            isDark ? "text-[#737373] hover:text-white" : isClean ? "text-[#5f5e5e] hover:text-[#1a1c1c]" : isTech ? "text-[#94a3b8] hover:text-[#ffb3b6] font-mono text-sm" : "text-gray-500 hover:text-gray-900"
          }`}
        >
          ← Back
        </button>
      )}
    </div>
  );
}
