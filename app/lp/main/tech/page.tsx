import Image from "next/image";
import { Suspense } from "react";
import { LeadForm } from "@/components/shared/LeadForm";

export default function TechLandingPage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#051424]/90 backdrop-blur-md border-b border-[#5c3f40] flex justify-between items-center h-16 px-4 md:px-8">
        <h1 className="font-bebas text-2xl tracking-widest text-[#ffb3b6]">G1 FITNESS</h1>
        <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest text-[#94a3b8]">
          <a className="text-white hover:text-[#ffb3b6] transition-colors" href="#">Home</a>
          <a className="hover:text-[#ffb3b6] transition-colors" href="#">Programs</a>
          <a className="hover:text-[#ffb3b6] transition-colors" href="#">Community</a>
        </div>
        <a href="#form" className="text-[#ffb3b6] font-mono text-sm uppercase tracking-wide hover:text-white transition-colors">
          Join
        </a>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[700px] flex flex-col justify-end pb-16 md:pb-24 px-4 md:px-8 overflow-hidden border-b border-[#5c3f40]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="G1 Fitness group class"
            fill
            className="object-cover grayscale opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051424] via-[#051424]/70 to-[#051424]/40" />
          <div className="absolute inset-0 tech-grid opacity-10" />
          <div className="scanline" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-block bg-[#e11d48] text-white font-mono text-xs px-3 py-1 mb-4 uppercase tracking-[0.2em]">
            West Anaheim • Buena Park • Cypress
          </div>
          <h2 className="font-bebas text-4xl md:text-6xl text-white mb-6 uppercase leading-none">
            Safe movement. Relentless community.
          </h2>
          <p className="text-lg text-white font-medium mb-8 max-w-xl">
            A local gym for busy adults who need a routine that sticks and a community that keeps you going.
          </p>
          <div className="bg-[#0d1c2d] p-6 md:p-8 border border-[#334155] max-w-md">
            <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
              <LeadForm formId="hero-form" variant="tech" />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 border-b border-[#5c3f40] bg-[#0d1c2d] divide-x divide-[#5c3f40]">
        <div className="p-4 text-center">
          <p className="font-mono text-xs text-[#94a3b8] uppercase tracking-widest">Established</p>
          <p className="font-bebas text-2xl text-[#ffb3b6]">LOCAL PRIDE</p>
        </div>
        <div className="p-4 text-center">
          <p className="font-mono text-xs text-[#94a3b8] uppercase tracking-widest">System</p>
          <p className="font-bebas text-2xl text-[#ffb3b6]">DPT LED</p>
        </div>
      </div>

      {/* Coach Kyle Section */}
      <section className="border-b border-[#5c3f40]">
        <div className="grid md:grid-cols-2">
          <div className="p-6 md:p-12 border-b md:border-b-0 md:border-r border-[#5c3f40] flex flex-col justify-center">
            <span className="font-mono text-xs text-[#ffb3b6] uppercase mb-2 tracking-[0.3em]">Head Coach</span>
            <h3 className="font-bebas text-4xl md:text-5xl uppercase mb-6">Meet Coach Kyle</h3>
            <div className="space-y-6 text-white/80">
              <p>
                I coach movement that's safe and effective, so you build strength without setbacks. As a DPT, my mission is to merge clinical knowledge with elite performance.
              </p>
              <blockquote className="border-l-4 border-[#e11d48] pl-4 italic text-white py-2">
                "What makes this place different isn't just the training. We know your name. We celebrate your wins. We check in when you're not here. You're not a member—you're family."
              </blockquote>
            </div>
          </div>
          <div className="relative aspect-[3/4] md:aspect-auto">
            <Image
              src="/kyle-coaching.jpg"
              alt="Coach Kyle coaching a member"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-[#051424]/80 backdrop-blur-md p-2 border border-[#5c3f40]">
              <p className="font-mono text-sm text-[#ffb3b6]">KYLE // DPT</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-[#0d1c2d] py-16 md:py-24 px-4 md:px-8 border-b border-[#5c3f40]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bebas text-4xl md:text-5xl uppercase mb-12 text-center">
            Programs & <span className="text-[#ffb3b6]">Accountability</span>
          </h2>

          {/* GroupMe Screenshots */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="flex justify-center">
              <div className="bg-[#122131] p-2 border border-[#334155]">
                <Image
                  src="/testimonial-1.png"
                  alt="G1 Fitness community welcoming a new member"
                  width={400}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="border border-[#334155] overflow-hidden bg-[#122131]">
                <Image
                  src="/testimonial-2.png"
                  alt="Member Roger sharing weight loss transformation"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <div className="border border-[#334155] overflow-hidden bg-[#122131]">
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
            <div className="border border-[#334155] bg-[#051424] p-6 relative overflow-hidden hover:border-[#e11d48] transition-colors">
              <div className="absolute top-0 right-0 p-2 font-mono text-sm text-[#ffb3b6] border-l border-b border-[#334155] bg-[#122131]">
                01
              </div>
              <h4 className="font-bebas text-2xl text-[#ffb3b6] uppercase mb-2">Semi-Private Sessions</h4>
              <p className="text-white/70 mb-6">
                Personalized coaching in small groups. Every workout is built around your goals, your body, and your pace—adapting as you progress.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#e11d48]" />
                  <span className="font-mono text-xs uppercase">4–6 Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#e11d48]" />
                  <span className="font-mono text-xs uppercase">Personalized Coaching</span>
                </div>
              </div>
            </div>

            {/* HIIT */}
            <div className="border border-[#334155] bg-[#051424] p-6 relative overflow-hidden hover:border-[#e11d48] transition-colors">
              <div className="absolute top-0 right-0 p-2 font-mono text-sm text-[#ffb3b6] border-l border-b border-[#334155] bg-[#122131]">
                02
              </div>
              <h4 className="font-bebas text-2xl text-[#ffb3b6] uppercase mb-2">HIIT Classes</h4>
              <p className="text-white/70 mb-6">
                High-energy group workouts alongside people who want to see you win. Coached intervals designed to keep your heart rate elevated.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#e11d48]" />
                  <span className="font-mono text-xs uppercase">45 Minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#e11d48]" />
                  <span className="font-mono text-xs uppercase">Heart Rate Tracked</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 px-4 md:px-8 border-b border-[#5c3f40]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bebas text-4xl md:text-5xl uppercase mb-12">How It Works</h2>
          <div className="border border-[#334155] divide-y divide-[#334155]">
            <div className="p-6 flex gap-6 items-start">
              <span className="font-bebas text-2xl text-[#5c3f40]">01</span>
              <div>
                <h4 className="font-bebas text-xl text-[#ffb3b6] uppercase mb-2">Schedule Your Intro</h4>
                <p className="text-white/70">Tell us about your goals and where you're at. We listen before we lift.</p>
              </div>
            </div>
            <div className="p-6 flex gap-6 items-start">
              <span className="font-bebas text-2xl text-[#5c3f40]">02</span>
              <div>
                <h4 className="font-bebas text-xl text-[#ffb3b6] uppercase mb-2">Personalized Blueprint</h4>
                <p className="text-white/70">A human coach will contact you to find a time that works.</p>
              </div>
            </div>
            <div className="p-6 flex gap-6 items-start">
              <span className="font-bebas text-2xl text-[#5c3f40]">03</span>
              <div>
                <h4 className="font-bebas text-xl text-[#ffb3b6] uppercase mb-2">Execute and Evolve</h4>
                <p className="text-white/70">Experience real training. See the community. Decide if it's your new home.</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="#form"
              className="block w-full text-center bg-transparent border-2 border-[#e11d48] text-[#ffb3b6] px-8 py-4 font-bebas text-xl uppercase tracking-wider hover:bg-[#e11d48] hover:text-white transition-all"
            >
              Start Your Free Week
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-[#1c2b3c] py-16 md:py-24 px-4 md:px-8 border-b border-[#5c3f40]">
        <div className="max-w-2xl mx-auto">
          <span className="font-mono text-xs text-[#ffb3b6] uppercase tracking-[0.3em]">Field Data</span>
          <h2 className="font-bebas text-4xl md:text-5xl uppercase mb-8">
            Real <span className="text-[#ffb3b6]">Results</span>
          </h2>
          <div className="border border-[#334155] bg-[#051424] overflow-hidden">
            <div className="grid grid-cols-2 gap-0">
              <div className="relative aspect-[3/4] border-r border-[#334155]">
                <Image
                  src="/david-before.jpg"
                  alt="David before"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <span className="absolute bottom-2 left-2 font-mono text-xs uppercase bg-[#051424]/80 px-2 py-1 border border-[#334155]">Before</span>
              </div>
              <div className="relative aspect-[3/4]">
                <Image
                  src="/david-after.jpg"
                  alt="David after"
                  fill
                  className="object-cover object-right grayscale hover:grayscale-0 transition-all duration-700"
                />
                <span className="absolute bottom-2 left-2 font-mono text-xs uppercase bg-[#051424]/80 px-2 py-1 border border-[#334155]">After</span>
              </div>
            </div>
            <div className="p-6 border-t border-[#334155]">
              <p className="font-mono text-xs text-[#ffb3b6] uppercase mb-2">Subject: David</p>
              <p className="italic text-white mb-4">
                "When I started I couldn't do a push-up. 80 pounds later I'm doing things I never thought possible. The workouts are only part of it though. I love the people, they notice when I show up, and more importantly they notice when I don't."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Form */}
      <section id="form" className="py-16 md:py-24 px-4 md:px-8 scroll-mt-16">
        <div className="max-w-lg mx-auto">
          <h2 className="font-bebas text-4xl md:text-5xl uppercase mb-8 text-center">
            Start Your <span className="text-[#ffb3b6]">Free Week</span>
          </h2>
          <div className="bg-[#0d1c2d] p-6 md:p-8 border border-[#334155]">
            <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
              <LeadForm formId="bottom-form" variant="tech" />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#010f1f] pt-12 pb-24 px-4 md:px-8 border-t border-[#5c3f40]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
            <div className="max-w-md">
              <h2 className="font-bebas text-2xl text-[#ffb3b6] mb-2">G1 FITNESS</h2>
              <p className="font-mono text-xs text-[#94a3b8] uppercase tracking-widest mb-6">Technical Performance Center</p>
              <div className="space-y-4 text-sm">
                <a
                  href="https://maps.google.com/?q=3111+West+Lincoln+Ave,+Anaheim,+CA+92801"
                  target="_blank"
                  className="flex items-center gap-3 hover:text-[#ffb3b6] transition-colors"
                >
                  <span className="material-symbols-outlined text-[#ffb3b6]">location_on</span>
                  3111 West Lincoln Ave, Anaheim, CA 92801
                </a>
                <a
                  href="tel:714-388-5115"
                  className="flex items-center gap-3 hover:text-[#ffb3b6] transition-colors"
                >
                  <span className="material-symbols-outlined text-[#ffb3b6]">call</span>
                  (714) 388-5115
                </a>
              </div>
            </div>
            <div>
              <p className="font-bebas text-xl uppercase mb-6">Programs</p>
              <ul className="space-y-3 font-mono text-xs text-[#94a3b8] uppercase">
                <li><a className="hover:text-[#ffb3b6]" href="#">Semi-Private</a></li>
                <li><a className="hover:text-[#ffb3b6]" href="#">HIIT Class</a></li>
              </ul>
            </div>
          </div>
          <p className="font-mono text-xs text-[#5c3f40] uppercase tracking-widest pt-8 border-t border-[#5c3f40]/30">
            © 2024 G1 Fitness. All rights reserved. Designed for performance.
          </p>
        </div>
      </footer>
    </main>
  );
}
