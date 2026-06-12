import Image from "next/image";
import { Suspense } from "react";
import { LeadForm } from "@/components/shared/LeadForm";
import { CTAButton } from "./CTAButton";
import { FeatureAccordion } from "./FeatureAccordion";
import { GalleryCarousel } from "./GalleryCarousel";
import { HeroVideo } from "./HeroVideo";

export default function GroupClassesLandingPage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#f9f9f9]/90 backdrop-blur-md border-b border-[#1a1c1c]/10">
        {/* Mobile Header */}
        <div className="md:hidden">
          <div className="flex justify-center items-center h-14 px-4">
            <Image src="/logo.png" alt="G1 Fitness" width={110} height={36} className="h-9 w-auto" />
          </div>
          <div className="flex flex-col gap-2 pb-4 px-4">
            <div className="flex justify-center items-center gap-3">
              <a
                href="tel:714-388-5115"
                className="flex items-center gap-2 px-4 py-3 border-2 border-[#1a1c1c]/20 text-[#1a1c1c] text-sm font-semibold rounded-sm active:scale-95 transition-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#bb0012]">
                  <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
                </svg>
                (714) 388-5115
              </a>
              <a
                href="https://maps.google.com/?q=3111+West+Lincoln+Ave,+Anaheim,+CA+92801"
                target="_blank"
                className="flex items-center gap-2 px-4 py-3 border-2 border-[#1a1c1c]/20 text-[#1a1c1c] text-sm font-semibold rounded-sm active:scale-95 transition-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#bb0012]">
                  <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
                </svg>
                Directions
              </a>
            </div>
            <p className="text-center text-base text-[#5f5e5e]">
              3111 W Lincoln Ave, Anaheim, CA 92801
            </p>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:flex justify-between items-center h-16 px-8">
          <Image src="/logo.png" alt="G1 Fitness" width={120} height={40} className="h-10 w-auto" />
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-6 text-sm text-[#5f5e5e]">
              <a
                href="https://maps.google.com/?q=3111+West+Lincoln+Ave,+Anaheim,+CA+92801"
                target="_blank"
                className="hover:text-[#bb0012] transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
                </svg>
                3111 West Lincoln Ave, Anaheim
              </a>
              <a
                href="tel:714-388-5115"
                className="hover:text-[#bb0012] transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
                </svg>
                (714) 388-5115
              </a>
            </div>
            <CTAButton className="bg-[#bb0012] text-white text-sm font-semibold uppercase tracking-wide px-6 py-2.5 hover:bg-[#950010] transition-colors cursor-pointer">
              Get My Free Week
            </CTAButton>
          </div>
        </div>
      </header>

      {/* Hero Section - Video Backdrop */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center px-4 md:px-8">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <HeroVideo />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="font-bebas font-bold text-4xl md:text-6xl lg:text-7xl text-white uppercase leading-none mb-8 mt-48 md:mt-64 drop-shadow-[0_4px_32px_rgba(0,0,0,0.5)]">
            Your first week<br />is free.
          </h1>
          <CTAButton className="inline-block bg-[#bb0012] text-white font-bold text-lg md:text-xl px-10 py-5 uppercase tracking-wide transition-all hover:bg-[#950010] active:scale-95 cursor-pointer">
            Get Started
          </CTAButton>
        </div>
      </section>

      {/* Community Gallery Section */}
      <section className="pt-10 pb-6 md:pt-12 md:pb-8 px-4 md:px-8 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#5f5e5e] mb-3">Built on Faith & Community</p>
            <h2 className="font-bebas text-4xl md:text-5xl uppercase text-[#1a1c1c] leading-[0.95]">
              The Best Gym <span className="text-[#bb0012]">Community</span> in OC
            </h2>
          </div>

          <GalleryCarousel />
        </div>
      </section>

      {/* What You Get With Us Section */}
      <section className="py-10 md:py-12 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* David's Before/After */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/david-before.jpg"
                    alt="David before"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 left-3 text-xs uppercase bg-black/70 text-white px-3 py-1">Before</span>
                </div>
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/david-after.jpg"
                    alt="David after"
                    fill
                    className="object-cover object-right"
                  />
                  <span className="absolute bottom-3 left-3 text-xs uppercase bg-[#bb0012] text-white px-3 py-1">After</span>
                </div>
              </div>
            </div>

            {/* Features Accordion */}
            <div>
              <h2 className="font-bebas text-4xl md:text-5xl uppercase text-[#1a1c1c] mb-8">
                Real <span className="text-[#bb0012]">Results</span> From Our Workouts
              </h2>
              <Suspense fallback={<div>Loading...</div>}>
                <FeatureAccordion />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-[#1a1c1c]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bebas font-bold text-5xl md:text-7xl uppercase text-white mb-8">
            Limited, Summer <span className="text-[#bb0012]">Pricing</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Group workout classes starting as low as <span className="text-white font-bold">$48</span> every two weeks.
          </p>
          <CTAButton className="inline-block bg-[#bb0012] text-white font-bold text-lg px-10 py-4 uppercase tracking-wide transition-all hover:bg-[#950010] active:scale-95 cursor-pointer">
            Start Your Free Week
          </CTAButton>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bebas text-4xl md:text-6xl uppercase text-center text-[#1a1c1c] mb-12">
            Hear From Our <span className="text-[#bb0012]">Members</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Video Testimonial 1 */}
            <div className="relative aspect-video bg-[#e2e2e2] flex items-center justify-center">
              <div className="text-center text-[#5f5e5e]">
                <div className="w-16 h-16 rounded-full bg-[#bb0012]/20 flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#bb0012]">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm">Video 1</span>
              </div>
            </div>

            {/* Video Testimonial 2 */}
            <div className="relative aspect-video bg-[#e2e2e2] flex items-center justify-center">
              <div className="text-center text-[#5f5e5e]">
                <div className="w-16 h-16 rounded-full bg-[#bb0012]/20 flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#bb0012]">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm">Video 2</span>
              </div>
            </div>

            {/* Video Testimonial 3 */}
            <div className="relative aspect-video bg-[#e2e2e2] flex items-center justify-center">
              <div className="text-center text-[#5f5e5e]">
                <div className="w-16 h-16 rounded-full bg-[#bb0012]/20 flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#bb0012]">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm">Video 3</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PT / Safe Movement Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="font-bebas text-4xl md:text-5xl uppercase text-[#1a1c1c] mb-6">
                Train Smarter, <span className="text-[#bb0012]">Not Harder</span>
              </h2>
              <p className="text-lg text-[#5f5e5e]">
                Most gyms leave you guessing. We don't. Our coaches are trained to spot technique issues and make real-time corrections so you build proper form while you train. With programming designed by a Doctor of Physical Therapy, you're not just working out. You're learning movement patterns that last.
              </p>
            </div>

            {/* Video */}
            <div className="relative aspect-video bg-[#e2e2e2] flex items-center justify-center">
              <div className="text-center text-[#5f5e5e]">
                <div className="w-20 h-20 rounded-full bg-[#bb0012]/20 flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#bb0012]">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm">PT Video</span>
              </div>
              {/* Replace with actual video */}
            </div>
          </div>
          <div className="text-center mt-12">
            <CTAButton className="inline-block bg-[#bb0012] text-white font-bold px-10 py-4 uppercase tracking-wide transition-all hover:bg-[#950010] active:scale-95 cursor-pointer">
              Start Your Free Week
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1c1c] py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h2 className="font-bebas text-2xl text-[#bb0012] mb-4">G1 FITNESS</h2>
            <div className="space-y-2 text-sm text-white/60">
              <a href="https://maps.google.com/?q=3111+West+Lincoln+Ave,+Anaheim,+CA+92801" target="_blank" className="block hover:text-white transition-colors">
                3111 West Lincoln Ave, Anaheim, CA 92801
              </a>
              <a href="tel:714-388-5115" className="block hover:text-white transition-colors">
                (714) 388-5115
              </a>
            </div>
          </div>
          <div>
            <p className="font-bebas text-lg uppercase mb-4 text-white">Programs</p>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a className="hover:text-white transition-colors" href="https://www.g1fitnessoc.com/strength-training">Semi-Private Training</a></li>
              <li><a className="hover:text-white transition-colors" href="https://www.g1fitnessoc.com/strength-training-1">Group Classes</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-12 text-xs text-white/30 uppercase tracking-widest">
          © 2026 G1 Fitness. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
