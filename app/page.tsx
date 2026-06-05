import { Hero } from "@/components/Hero";
import { FormSection } from "@/components/FormSection";
import { CoachSection } from "@/components/CoachSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { OfferingsSection } from "@/components/OfferingsSection";
import { StepsSection } from "@/components/StepsSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";

export default function Home() {
  return (
    <main>
      {/* 1. Hero with headline */}
      <Hero />

      {/* 2. Lead form (first appearance) */}
      <FormSection variant="primary" />

      {/* 3. Coach Kyle intro */}
      <CoachSection />

      {/* 4. Testimonials */}
      <TestimonialsSection />

      {/* 5. Class offerings */}
      <OfferingsSection />

      {/* 6. Steps to get started */}
      <StepsSection />

      {/* 7. Before/After testimonial */}
      <BeforeAfterSection />

      {/* 8. Lead form (second appearance) */}
      <FormSection variant="secondary" />
    </main>
  );
}
