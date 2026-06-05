import { Hero } from "@/components/Hero";
import { FormSection } from "@/components/FormSection";
import { CoachSection } from "@/components/CoachSection";
import { StepsSection } from "@/components/StepsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main>
      {/* 1. Hero with headline */}
      <Hero />

      {/* 2. Lead form (first appearance) */}
      <FormSection variant="primary" />

      {/* 3. Coach Kyle intro + offerings */}
      <CoachSection />

      {/* 4. Steps to get started */}
      <StepsSection />

      {/* 5. Testimonials */}
      <TestimonialsSection variant="second" />

      {/* 6. Lead form (second appearance) */}
      <FormSection variant="secondary" />
    </main>
  );
}
