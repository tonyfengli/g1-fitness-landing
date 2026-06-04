export function CoachSection() {
  return (
    <section className="py-10 md:py-14 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Photo placeholder */}
        <div className="bg-gray-200 aspect-[4/3] rounded-lg mb-8 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Kyle Photo</span>
        </div>

        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
          Semi-Private Sessions
        </h2>

        {/* First-person paragraph from Kyle */}
        <div className="text-lg text-gray-600 space-y-4">
          <p>
            I'm Coach Kyle, head trainer at G1 Fitness and a Doctor of Physical Therapy. Every workout is built around you—your goals, your body, your pace. As a DPT, I coach movement that's safe and effective, so you build strength without setbacks.
          </p>
          <p>
            But what makes this place different isn't just the training. We know your name. We celebrate your wins. We check in when you're not here. You're not a member—you're family.
          </p>
          <p>
            You'll also join our GroupMe community where members stay connected and keep each other accountable, plus get nutrition guidance to support your results outside the gym.
          </p>
        </div>

        {/* Credential */}
        <p className="mt-6 text-sm text-gray-500 font-medium">
          — Kyle, DPT
        </p>
      </div>
    </section>
  );
}
