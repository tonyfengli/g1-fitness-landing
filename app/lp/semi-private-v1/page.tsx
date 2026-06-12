import Image from "next/image";
import { Suspense } from "react";
import { LeadForm } from "@/components/shared/LeadForm";

// Ad Group: Semi-Private / Personal Training
// Focus: Kyle's safe movement expertise, DPT credibility
// Secondary: Community as supplement
// Keywords: "personal trainer anaheim", "semi-private training", "small group training OC"

export default function SemiPrivateLandingPage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#f9f9f9]/90 backdrop-blur-md border-b border-[#1a1c1c]/10 flex justify-between items-center h-16 px-4 md:px-8">
        <Image src="/logo.png" alt="G1 Fitness" width={120} height={40} className="h-10 w-auto" />

        {/* Mobile: Icon buttons for phone and directions */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:714-388-5115"
            className="flex items-center justify-center w-11 h-11 rounded-full bg-[#bb0012] text-white hover:bg-[#950010] transition-colors"
            aria-label="Call us"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="https://maps.google.com/?q=3111+West+Lincoln+Ave,+Anaheim,+CA+92801"
            target="_blank"
            className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-[#1a1c1c]/20 text-[#1a1c1c] hover:border-[#bb0012] hover:text-[#bb0012] transition-colors"
            aria-label="Get directions"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        {/* Desktop: Full text contact info */}
        <div className="hidden md:flex items-center gap-8">
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
          <a href="#top-form" className="bg-[#bb0012] text-white text-sm font-semibold uppercase tracking-wide px-6 py-2.5 hover:bg-[#950010] transition-colors">
            Join Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 md:pt-24 pb-8 md:pb-12 flex flex-col justify-center items-center px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="G1 Fitness group class"
            fill
            className="object-cover grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/80 mb-4">
            West Anaheim • Buena Park • Cypress
          </p>
          <h2 className="font-bebas text-5xl md:text-7xl text-white mb-4 uppercase leading-none">
            The best gym community in OC.
          </h2>
          <p className="text-xl md:text-2xl text-white font-semibold max-w-2xl mx-auto">
            A local gym for busy adults who want to show up, get coached, and feel like they belong.
          </p>
        </div>
      </section>

      {/* Form Section - immediately below hero */}
      <section id="top-form" className="pt-8 pb-6 md:pt-12 md:pb-8 px-4 md:px-8 bg-[#f3f3f4] scroll-mt-16">
        <div className="max-w-xl mx-auto">
          <div className="bg-white p-6 md:p-8 border border-[#1a1c1c]/10">
            <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
              <LeadForm formId="hero-form" variant="clean" />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Coach Kyle Section */}
      <section className="pt-8 pb-20 md:pt-12 md:pb-32 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative ml-4 md:ml-0">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#bb0012] z-0" />
            <div className="relative z-10 aspect-[4/5]">
              <Image
                src="/kyle-coaching.jpg"
                alt="Coach Kyle coaching a member"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="font-bebas text-4xl md:text-5xl text-[#bb0012] uppercase mb-2">
              Meet Coach Kyle
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#5f5e5e] mb-8">
              Doctor of Physical Therapy
            </p>
            <div className="space-y-6 text-lg text-[#1a1c1c]">
              <p>
                I coach movement that's safe and effective, so you build strength without setbacks. As a DPT, my mission is to merge clinical knowledge with elite performance.
              </p>
              <p className="border-l-4 border-[#bb0012] pl-6 italic text-[#5f5e5e]">
                "What makes this place different isn't just the training. We know your name. We celebrate your wins. We check in when you're not here. You're not a member—you're family."
              </p>
              <p className="font-bebas text-2xl text-[#1a1c1c] mt-8">— Kyle</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-[#f3f3f4] py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bebas text-4xl md:text-5xl uppercase mb-12 text-[#1a1c1c] text-center md:text-left">
            This is what <span className="text-[#bb0012]">accountability</span> looks like
          </h2>

          {/* GroupMe Screenshots */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Phone frame - Margarita */}
            <div className="flex justify-center">
              <div className="bg-white p-2 border border-[#1a1c1c]/10">
                <div className="overflow-hidden relative">
                  <Image
                    src="/testimonial-1.png"
                    alt="G1 Fitness community welcoming a new member"
                    width={400}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Roger + Kyle/Lexi container */}
            <div className="space-y-4">
              <div className="border border-[#1a1c1c]/10 overflow-hidden bg-white">
                <Image
                  src="/testimonial-2.png"
                  alt="Member Roger sharing weight loss transformation"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <div className="border border-[#1a1c1c]/10 overflow-hidden bg-white">
                <Image
                  src="/testimonial-3.png"
                  alt="G1 Fitness community GroupMe conversation"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Semi-Private - Primary */}
          <div className="bg-white border-2 border-[#bb0012] p-8 mb-6">
            <h4 className="font-bebas text-3xl uppercase mb-4 text-[#1a1c1c]">Semi-Private Training</h4>
            <p className="text-[#5f5e5e] mb-6">
              Personal training attention without the personal training price. With only 4–6 clients per session, your coach builds every workout around your goals, your body, and your pace—correcting your form in real time and adapting as you progress.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <h5 className="font-bebas text-lg uppercase text-[#bb0012] mb-1">Personalized Programming</h5>
                <p className="text-[#5f5e5e] text-sm">Workouts adjusted to your ability, so you're always challenged but never left behind.</p>
              </div>
              <div>
                <h5 className="font-bebas text-lg uppercase text-[#bb0012] mb-1">Real-Time Coaching</h5>
                <p className="text-[#5f5e5e] text-sm">Form correction every rep. No guesswork, no injuries.</p>
              </div>
              <div>
                <h5 className="font-bebas text-lg uppercase text-[#bb0012] mb-1">Progress Tracking</h5>
                <p className="text-[#5f5e5e] text-sm">We track your gains so you see measurable results.</p>
              </div>
            </div>
            <ul className="flex flex-wrap gap-4 text-sm text-[#1a1c1c]">
              <li className="flex items-center gap-2">
                <span className="text-[#bb0012]">✓</span> Coach Who Knows Your Name
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#bb0012]">✓</span> Adapts To Your Level
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Personal Training - Secondary */}
            <div className="bg-white border border-[#1a1c1c]/10 p-8 hover:border-[#bb0012] transition-all duration-300">
              <div className="mb-8">
                <span className="text-[#bb0012] text-4xl">🎯</span>
              </div>
              <h4 className="font-bebas text-2xl uppercase mb-4 text-[#1a1c1c]">Personal Training</h4>
              <p className="text-[#5f5e5e] mb-8">
                One-on-one sessions with your coach. Full attention, fully customized programming, maximum results.
              </p>
              <ul className="space-y-3 text-sm text-[#1a1c1c]">
                <li className="flex items-center gap-2">
                  <span className="text-[#bb0012]">✓</span> 1-on-1 Attention
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#bb0012]">✓</span> Custom Programming
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#bb0012]">✓</span> Flexible Scheduling
                </li>
              </ul>
            </div>

            {/* Group Classes - Secondary */}
            <div className="bg-white border border-[#1a1c1c]/10 p-8 hover:border-[#bb0012] transition-all duration-300">
              <div className="mb-8">
                <span className="text-[#bb0012] text-4xl">⚡</span>
              </div>
              <h4 className="font-bebas text-2xl uppercase mb-4 text-[#1a1c1c]">Group Classes</h4>
              <p className="text-[#5f5e5e] mb-8">
                High-energy group workouts alongside people who want to see you win. All the community energy with coached guidance every session.
              </p>
              <ul className="space-y-3 text-sm text-[#1a1c1c]">
                <li className="flex items-center gap-2">
                  <span className="text-[#bb0012]">✓</span> Heart Health Focus
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#bb0012]">✓</span> Community Energy
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#bb0012]">✓</span> Scaleable Intensity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bebas text-4xl md:text-5xl uppercase mb-16 text-center text-[#1a1c1c]">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative text-center">
              <div className="font-bebas text-[120px] text-[#e2e2e2] absolute -top-8 left-1/2 -translate-x-1/2 z-0 leading-none">01</div>
              <div className="relative z-10 pt-20">
                <h5 className="font-bebas text-xl uppercase mb-4 text-[#1a1c1c]">Answer Questions</h5>
                <p className="text-[#5f5e5e]">Tell us about your goals and where you're at. We listen before we lift.</p>
              </div>
            </div>
            <div className="relative text-center">
              <div className="font-bebas text-[120px] text-[#e2e2e2] absolute -top-8 left-1/2 -translate-x-1/2 z-0 leading-none">02</div>
              <div className="relative z-10 pt-20">
                <h5 className="font-bebas text-xl uppercase mb-4 text-[#1a1c1c]">We'll Reach Out</h5>
                <p className="text-[#5f5e5e]">A human coach will contact you to find a time that works.</p>
              </div>
            </div>
            <div className="relative text-center">
              <div className="font-bebas text-[120px] text-[#e2e2e2] absolute -top-8 left-1/2 -translate-x-1/2 z-0 leading-none">03</div>
              <div className="relative z-10 pt-20">
                <h5 className="font-bebas text-xl uppercase mb-4 text-[#1a1c1c]">Try A Free Week</h5>
                <p className="text-[#5f5e5e]">Experience real training. See the community. Decide if it's your new home.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <a
              href="#form"
              className="inline-block bg-[#bb0012] text-white font-bebas text-xl px-8 py-4 uppercase tracking-wide transition-all hover:opacity-90 active:scale-95"
            >
              Try Us Free
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-[#f3f3f4] py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-bebas text-4xl md:text-5xl uppercase mb-8 text-center text-[#1a1c1c]">
            Real <span className="text-[#bb0012]">Results</span>
          </h2>
          <div className="bg-white p-8 border border-[#1a1c1c]/10">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/david-before.jpg"
                  alt="David before"
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 text-xs uppercase bg-black/50 text-white px-2 py-1">Before</span>
              </div>
              <div className="relative aspect-[3/4]">
                <Image
                  src="/david-after.jpg"
                  alt="David after"
                  fill
                  className="object-cover object-right"
                />
                <span className="absolute bottom-2 left-2 text-xs uppercase bg-black/50 text-white px-2 py-1">After</span>
              </div>
            </div>
            <p className="text-lg italic mb-6 text-[#1a1c1c]">
              "When I started I couldn't do a push-up. 80 pounds later I'm doing things I never thought possible. The workouts are only part of it though. I love the people, they notice when I show up, and more importantly they notice when I don't."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#bb0012] rounded-full flex items-center justify-center text-white font-bold">D</div>
              <div>
                <p className="font-bebas text-lg uppercase text-[#1a1c1c]">David</p>
                <p className="text-xs text-[#5f5e5e] uppercase">G1 Fitness Member</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Form */}
      <section id="form" className="py-20 md:py-32 px-4 md:px-8 scroll-mt-16 bg-white">
        <div className="max-w-xl mx-auto">
          <h2 className="font-bebas text-4xl md:text-5xl uppercase mb-8 text-center text-[#1a1c1c]">
            Start Your <span className="text-[#bb0012]">Free Week</span>
          </h2>
          <div className="bg-[#f3f3f4] p-6 md:p-8 border border-[#1a1c1c]/10">
            <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
              <LeadForm formId="bottom-form" variant="clean" />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-16 pb-24 px-4 md:px-8 border-t border-[#1a1c1c]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-md">
            <h2 className="font-bebas text-2xl text-[#bb0012] mb-6">G1 FITNESS</h2>
            <p className="text-[#5f5e5e] mb-8">
              West Anaheim's elite destination for safe movement and relentless community support.
            </p>
            <div className="space-y-4 text-sm uppercase text-[#1a1c1c]">
              <a
                href="https://maps.google.com/?q=3111+West+Lincoln+Ave,+Anaheim,+CA+92801"
                target="_blank"
                className="flex items-center gap-3 hover:text-[#bb0012] transition-colors"
              >
                📍 3111 West Lincoln Ave, Anaheim, CA 92801
              </a>
              <a
                href="tel:714-388-5115"
                className="flex items-center gap-3 hover:text-[#bb0012] transition-colors"
              >
                📞 (714) 388-5115
              </a>
            </div>
          </div>
          <div>
            <p className="font-bebas text-xl uppercase mb-6 text-[#1a1c1c]">Programs</p>
            <ul className="space-y-3 text-xs text-[#5f5e5e] uppercase">
              <li><a className="hover:text-[#bb0012]" href="https://www.g1fitnessoc.com/strength-training">Semi-Private</a></li>
              <li><a className="hover:text-[#bb0012]" href="https://www.g1fitnessoc.com/strength-training-1">HIIT Class</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-16 text-[10px] text-[#5f5e5e] opacity-50 uppercase tracking-[0.3em]">
          © 2024 G1 Fitness. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
