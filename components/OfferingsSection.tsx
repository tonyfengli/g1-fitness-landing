export function OfferingsSection() {
  return (
    <section className="py-10 md:py-14 px-4 bg-white">
      <div className="max-w-2xl mx-auto space-y-8">
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
    </section>
  );
}
