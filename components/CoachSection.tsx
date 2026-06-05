import Image from "next/image";

export function CoachSection() {
  return (
    <section className="py-10 md:py-14 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Kyle photo */}
        <div className="relative aspect-[4/3] rounded-lg mb-8 overflow-hidden">
          <Image
            src="/kyle-coaching.jpg"
            alt="Coach Kyle guiding a client through a dumbbell press"
            fill
            className="object-cover"
          />
        </div>

        {/* Kyle's intro - the "why G1" */}
        <div className="text-lg text-gray-600 space-y-4">
          <p>
            I'm Coach Kyle, head trainer at G1 Fitness and a Doctor of Physical Therapy. As a DPT, I coach movement that's safe and effective, so you build strength without setbacks.
          </p>
          <p>
            But what makes this place different isn't just the training. We know your name. We celebrate your wins. We check in when you're not here. You're not a member—you're family.
          </p>
        </div>

        <p className="mt-6 text-sm text-gray-500 font-medium">
          — Kyle
        </p>

        {/* Offerings */}
        <div className="mt-12 pt-12 border-t border-gray-200 space-y-8">
          {/* Semi-Private Sessions */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Semi-Private Sessions
            </h3>
            <p className="text-gray-600">
              Small groups of 4–6 with personalized coaching. Every workout is built around your goals, your body, your pace—and adapts as you progress.
            </p>
          </div>

          {/* HIIT Classes */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              HIIT Classes
            </h3>
            <p className="text-gray-600">
              High-energy group workouts alongside people who want to see you win. 45 minutes of coached intervals to keep your heart rate elevated—great for heart health and longevity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
