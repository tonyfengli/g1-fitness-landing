"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Storage key for persisting GCLID across page navigation
const GCLID_STORAGE_KEY = "g1_gclid";
const UTM_STORAGE_KEY = "g1_utm_params";

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
  skipQuiz?: boolean;
  hideHeading?: boolean;
}

export function LeadForm({ formId = "lead-form", variant = "light", skipQuiz = false, hideHeading = false }: LeadFormProps) {
  const isDark = variant === "dark";
  const isClean = variant === "clean";
  const isTech = variant === "tech";
  const searchParams = useSearchParams();

  // If skipQuiz is true, start at the contact step (skip all quiz steps)
  const [currentStep, setCurrentStep] = useState(skipQuiz ? STEPS.length : 0);
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

  // Captured tracking params (stored on initial page load)
  const [capturedParams, setCapturedParams] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    gclid: "",
  });

  const router = useRouter();

  // Capture GCLID and UTM params on initial load and persist to sessionStorage
  useEffect(() => {
    // Try to get from URL first (fresh ad click)
    const urlGclid = searchParams.get("gclid") || "";
    const urlUtmSource = searchParams.get("utm_source") || "";
    const urlUtmMedium = searchParams.get("utm_medium") || "";
    const urlUtmCampaign = searchParams.get("utm_campaign") || "";
    const urlUtmContent = searchParams.get("utm_content") || "";
    const urlUtmTerm = searchParams.get("utm_term") || "";

    // If we have a GCLID in URL, save it to sessionStorage
    if (urlGclid) {
      sessionStorage.setItem(GCLID_STORAGE_KEY, urlGclid);
      console.log("📍 GCLID captured from URL:", urlGclid);
    }

    // If we have UTM params in URL, save them
    if (urlUtmSource || urlUtmMedium || urlUtmCampaign) {
      const utmData = {
        utm_source: urlUtmSource,
        utm_medium: urlUtmMedium,
        utm_campaign: urlUtmCampaign,
        utm_content: urlUtmContent,
        utm_term: urlUtmTerm,
      };
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utmData));
      console.log("📍 UTM params captured from URL:", utmData);
    }

    // Now read from sessionStorage (which has fresh URL data or previous visit data)
    const storedGclid = sessionStorage.getItem(GCLID_STORAGE_KEY) || "";
    const storedUtm = sessionStorage.getItem(UTM_STORAGE_KEY);
    const parsedUtm = storedUtm ? JSON.parse(storedUtm) : {};

    const finalParams = {
      utm_source: urlUtmSource || parsedUtm.utm_source || "",
      utm_medium: urlUtmMedium || parsedUtm.utm_medium || "",
      utm_campaign: urlUtmCampaign || parsedUtm.utm_campaign || "",
      utm_content: urlUtmContent || parsedUtm.utm_content || "",
      utm_term: urlUtmTerm || parsedUtm.utm_term || "",
      gclid: urlGclid || storedGclid,
    };

    setCapturedParams(finalParams);

    if (finalParams.gclid) {
      console.log("✅ GCLID will be included in form submission:", finalParams.gclid);
    } else {
      console.log("ℹ️ No GCLID found (direct visit or organic traffic)");
    }
  }, [searchParams]);

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

    // Use captured params (stored on page load, not current URL)
    const utmParams = capturedParams;

    // LOGGING: Form submission started
    console.log("=== LEAD FORM SUBMISSION ===");
    console.log("1. Submit button clicked");
    console.log("2. Form data:", { ...answers, ...utmParams });
    console.log("3. GCLID (captured on page load):", utmParams.gclid || "(none - direct visit)");

    try {
      console.log("4. Sending to /api/lead...");
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...answers, ...utmParams }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("5. API FAILED:", errorData);
        console.error("❌ Conversion NOT fired (API failed)");
        throw new Error(errorData.details || "Submission failed");
      }

      console.log("5. API SUCCESS - status 200");

      // Fire Google Ads conversion
      if (typeof window !== "undefined" && window.gtag) {
        console.log("6. FIRING GOOGLE ADS CONVERSION");
        console.log("   send_to: AW-18204362022/cr6wCP3s87scEKaKwuhD");
        console.log("   GCLID cookie may link this to an earlier ad click");
        window.gtag("event", "conversion", {
          send_to: "AW-18204362022/cr6wCP3s87scEKaKwuhD",
        });
        console.log("✅ Conversion event sent to Google");
      } else {
        console.log("6. gtag not available - conversion NOT fired");
      }

      console.log("7. Redirecting to /thank-you");
      console.log("=== END SUBMISSION ===");
      router.push("/thank-you");
    } catch (err) {
      console.error("Form submission error:", err);
      console.error("❌ NO CONVERSION FIRED - form submission failed");
      console.log("=== END SUBMISSION (FAILED) ===");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  const isContactStep = currentStep === STEPS.length;
  const totalSteps = skipQuiz ? 1 : TOTAL_STEPS;
  const currentStepNumber = skipQuiz ? 1 : currentStep + 1;
  const progress = (currentStepNumber / totalSteps) * 100;

  // Visibility/opacity styles for crossfade effect
  const getStepStyles = (isVisible: boolean): React.CSSProperties => ({
    visibility: isVisible ? "visible" : "hidden",
    opacity: isVisible ? 1 : 0,
    transition: isVisible
      ? "visibility 0s linear 0s, opacity 200ms ease-out"
      : "visibility 0s linear 200ms, opacity 200ms ease-out",
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress bar - hidden when skipQuiz */}
      {!skipQuiz && (
        <div className="mb-4">
          <div className={`h-1 overflow-hidden ${isDark ? "bg-[#262626]" : isClean ? "bg-[#e2e2e2]" : isTech ? "bg-[#334155]" : "bg-gray-200"}`}>
            <div
              className={`h-full transition-all duration-300 ease-out ${isDark ? "bg-[#ff2e2e]" : isClean ? "bg-[#bb0012]" : isTech ? "bg-[#e11d48]" : "bg-gray-900"}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Step counter - hidden when skipQuiz */}
      {!skipQuiz && (
        <p className={`text-xs uppercase tracking-widest text-center mb-4 ${isDark ? "text-[#737373]" : isClean ? "text-[#5f5e5e]" : isTech ? "text-[#94a3b8] font-mono" : "text-gray-400"}`}>
          {currentStepNumber} of {totalSteps}
        </p>
      )}

      {/* Step 1 - Yes/No - rendered separately (no dead space) */}
      {!skipQuiz && currentStep === 0 && (
        <div>
          <h2 className={`text-lg font-semibold mb-3 text-center ${isDark ? "text-white" : isClean ? "text-[#1a1c1c]" : isTech ? "text-[#d4e4fa]" : ""}`}>
            {STEPS[0].question}
          </h2>
          <div className="flex gap-4 justify-center">
            {STEPS[0].options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleOptionSelect(STEPS[0].id, option.value)}
                className={`px-10 py-4 font-bold text-lg cursor-pointer transition-all ${
                  isDark
                    ? "bg-[#ff2e2e] text-white hover:scale-105 active:scale-95"
                    : isClean
                    ? "bg-[#bb0012] text-white hover:opacity-90 active:scale-95"
                    : isTech
                    ? "bg-[#e11d48] text-white hover:opacity-90 active:scale-95 uppercase tracking-wider"
                    : "bg-gray-900 text-white rounded-lg hover:bg-gray-800"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Grid stack container - Steps 2 & 3 only (similar heights) */}
      {!skipQuiz && currentStep >= 1 && !isContactStep && (
        <div className="grid items-start" style={{ gridTemplateColumns: "1fr", gridTemplateRows: "auto" }}>
          {STEPS.slice(1).map((step, idx) => {
            const index = idx + 1; // actual step index
            return (
              <div
                key={step.id}
                style={{ ...getStepStyles(currentStep === index), gridArea: "1 / 1" }}
              >
                <h2 className={`text-lg font-semibold mb-3 text-center ${isDark ? "text-white" : isClean ? "text-[#1a1c1c]" : isTech ? "text-[#d4e4fa]" : ""}`}>
                  {step.question}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {step.options.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleOptionSelect(step.id, option.value)}
                      tabIndex={currentStep === index ? 0 : -1}
                      className={`py-5 px-5 font-bold text-base flex items-center justify-center text-center transition-all duration-150 cursor-pointer active:scale-95 ${
                        isDark
                          ? "bg-[#ff2e2e] text-white shadow-xl"
                          : isClean
                          ? "bg-[#bb0012] text-white shadow-xl"
                          : isTech
                          ? "bg-[#e11d48] text-white shadow-xl"
                          : "bg-gray-900 text-white shadow-xl rounded-lg"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Contact Info Step - rendered separately */}
      {isContactStep && (
          <form onSubmit={handleSubmit}>
            {!hideHeading && (
              <h2 className={`text-2xl font-semibold mb-6 text-center ${isDark ? "text-white" : isClean ? "text-[#1a1c1c]" : isTech ? "text-[#d4e4fa]" : ""}`}>
                Start Your <span className="text-[#bb0012]">Free Week</span>
              </h2>
            )}
            <div className="space-y-4">
              <div>
                <label htmlFor={`${formId}-name`} className={`block text-sm font-medium mb-1 ${isDark ? "text-[#737373] uppercase tracking-wider" : isClean ? "text-[#5f5e5e] uppercase tracking-wider" : isTech ? "text-[#94a3b8] uppercase tracking-wider font-mono text-xs" : "text-gray-700"}`}>
                  Name
                </label>
                <input
                  type="text"
                  id={`${formId}-name`}
                  name="name"
                  required
                  tabIndex={isContactStep ? 0 : -1}
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
                <label htmlFor={`${formId}-phone`} className={`block text-sm font-medium mb-1 ${isDark ? "text-[#737373] uppercase tracking-wider" : isClean ? "text-[#5f5e5e] uppercase tracking-wider" : isTech ? "text-[#94a3b8] uppercase tracking-wider font-mono text-xs" : "text-gray-700"}`}>
                  Phone
                </label>
                <input
                  type="tel"
                  id={`${formId}-phone`}
                  name="phone"
                  required
                  tabIndex={isContactStep ? 0 : -1}
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
                <label htmlFor={`${formId}-email`} className={`block text-sm font-medium mb-1 ${isDark ? "text-[#737373] uppercase tracking-wider" : isClean ? "text-[#5f5e5e] uppercase tracking-wider" : isTech ? "text-[#94a3b8] uppercase tracking-wider font-mono text-xs" : "text-gray-700"}`}>
                  Email
                </label>
                <input
                  type="email"
                  id={`${formId}-email`}
                  name="email"
                  required
                  tabIndex={isContactStep ? 0 : -1}
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
              tabIndex={isContactStep ? 0 : -1}
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
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            <p className={`mt-4 text-xs text-center ${isDark ? "text-[#737373]" : isClean ? "text-[#5f5e5e]" : isTech ? "text-[#94a3b8]" : "text-gray-500"}`}>
              By submitting, you agree to our{" "}
              <a
                href="/privacy"
                target="_blank"
                tabIndex={isContactStep ? 0 : -1}
                className={`underline hover:no-underline ${isDark ? "text-[#ff2e2e]" : isClean ? "text-[#bb0012]" : isTech ? "text-[#ffb3b6]" : "text-gray-700"}`}
              >
                Privacy Policy
              </a>
            </p>
          </form>
      )}

      {/* Back Button - hidden when skipQuiz */}
      {!skipQuiz && currentStep > 0 && (
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
