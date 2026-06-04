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
      title: "Try 2 free sessions",
      description: "Experience real training. See if it's right for you.",
    },
  ];

  return (
    <section className="py-10 md:py-14 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          How It Works
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Getting started is easy
        </p>

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
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
