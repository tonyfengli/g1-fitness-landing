import { Hero } from "@/components/Hero";
import { FormSection } from "@/components/FormSection";
import { CoachSection } from "@/components/CoachSection";
import { AboutSection } from "@/components/AboutSection";
import { StepsSection } from "@/components/StepsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main>
      {/* 1. Hero with headline */}
      <Hero />

      {/* 2. Lead form (first appearance) */}
      <FormSection variant="primary" />

      {/* 3. Coach Kyle intro */}
      <CoachSection />

      {/* 4. About section */}
      <AboutSection />

      {/* 5. Testimonials (first set) */}
      <TestimonialsSection variant="first" />

      {/* 6. Steps to get started */}
      <StepsSection />

      {/* 7. Testimonials (second set) */}
      <TestimonialsSection variant="second" />

      {/* 8. Lead form (second appearance) */}
      <FormSection variant="secondary" />
    </main>
  );
}
