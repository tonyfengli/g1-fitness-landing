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
}

export function LeadForm({ formId = "lead-form" }: LeadFormProps) {
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
        <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gray-900 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Steps */}
      {!isContactStep && (
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">
            {STEPS[currentStep].question}
          </h2>

          {/* First step (has_routine) - CTA button style */}
          {currentStep === 0 ? (
            <div className="flex gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleOptionSelect(STEPS[currentStep].id, "no")}
                className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors text-lg cursor-pointer"
              >
                No
              </button>
              <button
                type="button"
                onClick={() => handleOptionSelect(STEPS[currentStep].id, "yes")}
                className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors text-lg cursor-pointer"
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
                  className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-colors cursor-pointer"
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
          <h2 className="text-2xl font-semibold mb-2 text-center">
            Where should we reach you?
          </h2>
          <p className="text-gray-600 text-center mb-6">
            We'll reach out to schedule your free sessions.
          </p>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={answers.name}
                onChange={(e) => handleContactChange("name", e.target.value)}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={answers.phone}
                onChange={(e) => handleContactChange("phone", e.target.value)}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={answers.email}
                onChange={(e) => handleContactChange("email", e.target.value)}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {error && (
            <p className="mt-4 text-red-600 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-6 p-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            {isSubmitting ? "Submitting..." : "Claim My Free Week"}
          </button>
        </form>
      )}

      {/* Back Button */}
      {currentStep > 0 && (
        <button
          type="button"
          onClick={handleBack}
          className="mt-6 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
        >
          ← Back
        </button>
      )}
    </div>
  );
}
