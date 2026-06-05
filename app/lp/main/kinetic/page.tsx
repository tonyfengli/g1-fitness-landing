import Image from "next/image";
import { Suspense } from "react";
import { LeadForm } from "@/components/shared/LeadForm";

export default function KineticLandingPage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#131313]/90 backdrop-blur-md border-b border-[#262626] flex justify-between items-center h-16 px-4 md:px-8">
        <h1 className="font-bebas text-2xl tracking-tight text-white">G1 FITNESS</h1>
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-[#737373]">
          <a className="text-white hover:text-[#ff2e2e] transition-colors" href="#">Home</a>
          <a className="hover:text-[#ff2e2e] transition-colors" href="#">Programs</a>
          <a className="hover:text-[#ff2e2e] transition-colors" href="#">Community</a>
        </div>
        <a href="#form" className="text-[#ff2e2e] text-sm font-semibold uppercase tracking-wide hover:text-white transition-colors">
          Join
        </a>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[700px] flex flex-col justify-start pt-8 md:pt-12 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="G1 Fitness group class"
            fill
            className="object-cover grayscale opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#131313] via-[#131313]/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#ff2e2e] mb-4">
            West Anaheim • Buena Park • Cypress
          </p>
          <h2 className="font-bebas text-5xl md:text-7xl text-white mb-6 uppercase leading-none">
            Join the fastest-growing local gym for busy adults.
          </h2>
          <p className="text-lg text-white mb-8 max-w-xl">
            You need a routine that lasts and a community that will keep you going.
          </p>
          <div className="bg-[#1a1a1a] p-6 md:p-8 border border-[#262626] max-w-md mt-8">
            <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
              <LeadForm formId="hero-form" variant="dark" />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Coach Kyle Section */}
      <section className="py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative ml-4 md:ml-0">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#ff2e2e] z-0" />
            <div className="relative z-10 aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700">
              <Image
                src="/kyle-coaching.jpg"
                alt="Coach Kyle coaching a member"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="font-bebas text-4xl md:text-5xl text-[#ff2e2e] uppercase mb-2">
              Meet Coach Kyle
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#737373] mb-8">
              Doctor of Physical Therapy
            </p>
            <div className="space-y-6 text-lg">
              <p>
                I coach movement that's safe and effective, so you build strength without setbacks. As a DPT, my mission is to merge clinical knowledge with elite performance.
              </p>
              <p className="border-l-4 border-[#ff2e2e] pl-6 italic text-[#e5e2e1]">
                "What makes this place different isn't just the training. We know your name. We celebrate your wins. We check in when you're not here. You're not a member—you're family."
              </p>
              <p className="font-bebas text-2xl text-white mt-8">— Kyle</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-[#171717] py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bebas text-4xl md:text-5xl uppercase mb-12">
            This is what <span className="text-[#ff2e2e]">accountability</span> looks like
          </h2>

          {/* GroupMe Screenshots */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Phone frame - Margarita */}
            <div className="flex justify-center">
              <div className="bg-[#0d0d0d] p-2">
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
              <div className="border border-[#262626] overflow-hidden">
                <Image
                  src="/testimonial-2.png"
                  alt="Member Roger sharing weight loss transformation"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <div className="border border-[#262626] overflow-hidden">
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

          <div className="grid md:grid-cols-2 gap-6">
            {/* Semi-Private */}
            <div className="border border-[#262626] p-8 hover:border-[#ff2e2e] transition-all duration-300">
              <div className="flex justify-between items-start mb-8">
                <span className="text-[#ff2e2e] text-4xl">👥</span>
                <span className="text-xs uppercase tracking-widest text-[#737373]">4–6 Clients</span>
              </div>
              <h4 className="font-bebas text-2xl uppercase mb-4">Semi-Private Sessions</h4>
              <p className="text-[#737373] mb-8">
                Personalized coaching in small groups. Every workout is built around your goals, your body, and your pace—adapting as you progress.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-[#ff2e2e]">✓</span> Personalized Coaching
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#ff2e2e]">✓</span> Form Correction
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#ff2e2e]">✓</span> Progress Tracking
                </li>
              </ul>
            </div>

            {/* HIIT */}
            <div className="border border-[#262626] p-8 hover:border-[#ff2e2e] transition-all duration-300">
              <div className="flex justify-between items-start mb-8">
                <span className="text-[#ff2e2e] text-4xl">⚡</span>
                <span className="text-xs uppercase tracking-widest text-[#737373]">45 Minutes</span>
              </div>
              <h4 className="font-bebas text-2xl uppercase mb-4">HIIT Classes</h4>
              <p className="text-[#737373] mb-8">
                High-energy group workouts alongside people who want to see you win. Coached intervals designed to keep your heart rate elevated.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-[#ff2e2e]">✓</span> Heart Health Focus
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#ff2e2e]">✓</span> Community Energy
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#ff2e2e]">✓</span> Scaleable Intensity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bebas text-4xl md:text-5xl uppercase mb-16 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative text-center">
              <div className="font-bebas text-[120px] text-[#1a1a1a] absolute -top-8 left-1/2 -translate-x-1/2 z-0 leading-none">01</div>
              <div className="relative z-10 pt-16">
                <h5 className="font-bebas text-xl uppercase mb-4">Answer Questions</h5>
                <p className="text-[#737373]">Tell us about your goals and where you're at. We listen before we lift.</p>
              </div>
            </div>
            <div className="relative text-center">
              <div className="font-bebas text-[120px] text-[#1a1a1a] absolute -top-8 left-1/2 -translate-x-1/2 z-0 leading-none">02</div>
              <div className="relative z-10 pt-16">
                <h5 className="font-bebas text-xl uppercase mb-4">We'll Reach Out</h5>
                <p className="text-[#737373]">A human coach will contact you to find a time that works.</p>
              </div>
            </div>
            <div className="relative text-center">
              <div className="font-bebas text-[120px] text-[#1a1a1a] absolute -top-8 left-1/2 -translate-x-1/2 z-0 leading-none">03</div>
              <div className="relative z-10 pt-16">
                <h5 className="font-bebas text-xl uppercase mb-4">Try A Free Week</h5>
                <p className="text-[#737373]">Experience real training. See the community. Decide if it's your new home.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <a
              href="#form"
              className="inline-block bg-[#ff2e2e] text-white font-bebas text-xl px-8 py-4 uppercase tracking-wide transition-transform hover:scale-105 active:scale-95"
            >
              Try Us Free
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-[#171717] py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-bebas text-4xl md:text-5xl uppercase mb-8 text-center">
            Real <span className="text-[#ff2e2e]">Results</span>
          </h2>
          <div className="bg-[#131313] p-8 border border-[#262626]">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/david-before.jpg"
                  alt="David before"
                  fill
                  className="object-cover saturate-[0.7] brightness-95"
                />
                <span className="absolute bottom-2 left-2 text-xs uppercase bg-black/50 px-2 py-1">Before</span>
              </div>
              <div className="relative aspect-[3/4]">
                <Image
                  src="/david-after.jpg"
                  alt="David after"
                  fill
                  className="object-cover object-right saturate-[0.7] brightness-95"
                />
                <span className="absolute bottom-2 left-2 text-xs uppercase bg-black/50 px-2 py-1">After</span>
              </div>
            </div>
            <p className="text-lg italic mb-6">
              "When I started I couldn't do a push-up. 80 pounds later I'm doing things I never thought possible. The workouts are only part of it though. I love the people, they notice when I show up, and more importantly they notice when I don't."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#ff2e2e] rounded-full flex items-center justify-center text-white font-bold">D</div>
              <div>
                <p className="font-bebas text-lg uppercase">David</p>
                <p className="text-xs text-[#737373] uppercase">G1 Fitness Member</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Form */}
      <section id="form" className="py-20 md:py-32 px-4 md:px-8 scroll-mt-16">
        <div className="max-w-lg mx-auto">
          <h2 className="font-bebas text-4xl md:text-5xl uppercase mb-8 text-center">
            Start Your <span className="text-[#ff2e2e]">Free Week</span>
          </h2>
          <div className="bg-[#1a1a1a] p-6 md:p-8 border border-[#262626]">
            <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
              <LeadForm formId="bottom-form" variant="dark" />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#131313] pt-16 pb-24 px-4 md:px-8 border-t border-[#262626]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-md">
            <h2 className="font-bebas text-2xl text-white mb-6">G1 FITNESS</h2>
            <p className="text-[#737373] mb-8">
              West Anaheim's elite destination for safe movement and relentless community support.
            </p>
            <div className="space-y-4 text-sm uppercase">
              <a
                href="https://maps.google.com/?q=3111+West+Lincoln+Ave,+Anaheim,+CA+92801"
                target="_blank"
                className="flex items-center gap-3 hover:text-[#ff2e2e] transition-colors"
              >
                📍 3111 West Lincoln Ave, Anaheim, CA 92801
              </a>
              <a
                href="tel:714-388-5115"
                className="flex items-center gap-3 hover:text-[#ff2e2e] transition-colors"
              >
                📞 (714) 388-5115
              </a>
            </div>
          </div>
          <div>
            <p className="font-bebas text-xl uppercase mb-6 text-white">Programs</p>
            <ul className="space-y-3 text-xs text-[#737373] uppercase">
              <li><a className="hover:text-[#ff2e2e]" href="#">Semi-Private</a></li>
              <li><a className="hover:text-[#ff2e2e]" href="#">HIIT Class</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-16 text-[10px] text-[#737373] opacity-30 uppercase tracking-[0.3em]">
          © 2024 G1 Fitness. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
