import { Suspense } from "react";
import { LeadForm } from "./LeadForm";

interface FormSectionProps {
  variant?: "primary" | "secondary";
}

export function FormSection({ variant = "primary" }: FormSectionProps) {
  const isPrimary = variant === "primary";

  return (
    <section
      id={isPrimary ? "lead-form" : "lead-form-bottom"}
      className={`px-4 scroll-mt-0 ${isPrimary ? "py-10 md:py-16 bg-gray-50" : "pt-10 md:pt-16 min-h-screen bg-gray-900 text-white"}`}
    >
      <div className="max-w-lg mx-auto">
        <div className={isPrimary ? "" : "bg-white rounded-lg p-6 text-gray-900"}>
          <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
            <LeadForm formId={isPrimary ? "lead-form" : "lead-form-bottom"} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
