import { Hero } from "@/components/skeletons/main/Hero";
import { FormSection } from "@/components/shared/FormSection";
import { CoachSection } from "@/components/skeletons/main/CoachSection";
import { TestimonialsSection } from "@/components/skeletons/main/TestimonialsSection";
import { OfferingsSection } from "@/components/skeletons/main/OfferingsSection";
import { StepsSection } from "@/components/skeletons/main/StepsSection";
import { BeforeAfterSection } from "@/components/skeletons/main/BeforeAfterSection";

export default function MainLandingPage() {
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
