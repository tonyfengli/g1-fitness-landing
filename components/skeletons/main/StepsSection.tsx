export function StepsSection() {
  const steps = [
    {
      number: 1,
      title: "Answer a few questions",
      description: "Tell us about your goals and where you're at.",
    },
    {
      number: 2,
      title: "We'll reach out",
      description: "To find a time that works for your schedule.",
    },
    {
      number: 3,
      title: "Try a free week",
      description: "Experience real training. See if it's right for you.",
    },
  ];

  return (
    <section className="py-10 md:py-14 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#lead-form-bottom"
            className="inline-block px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            Try Us Free
          </a>
        </div>

        {/* Location */}
        <div className="mt-16">
          <p className="text-center text-gray-600 mb-1">
            3111 West Lincoln Ave, Anaheim, CA 92801
          </p>
          <p className="text-center mb-4">
            <a href="tel:714-388-5115" className="text-gray-900 font-medium hover:underline">
              (714) 388-5115
            </a>
          </p>
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.5!2d-118.0!3d33.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2977b0f0f0f1%3A0x0!2s3111%20W%20Lincoln%20Ave%2C%20Anaheim%2C%20CA%2092801!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="G1 Fitness Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
