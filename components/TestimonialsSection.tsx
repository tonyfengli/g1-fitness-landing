interface TestimonialsSectionProps {
  variant?: "first" | "second";
}

export function TestimonialsSection({ variant = "first" }: TestimonialsSectionProps) {
  const isFirst = variant === "first";

  const testimonials = isFirst
    ? [
        {
          quote: "[Testimonial — Member story about their experience]",
          name: "[Member Name]",
          detail: "[Member for X months]",
        },
      ]
    : [
        {
          quote: "[Testimonial #4 — Another member story]",
          name: "[Member Name]",
          detail: "[Relevant detail]",
        },
        {
          quote: "[Testimonial #5 — Different achievement or result]",
          name: "[Member Name]",
          detail: "[Relevant detail]",
        },
        {
          quote: "[Testimonial #6 — Final compelling story]",
          name: "[Member Name]",
          detail: "[Relevant detail]",
        },
      ];

  return (
    <section className={`py-10 md:py-14 px-4 ${isFirst ? "bg-white" : "bg-gray-50"}`}>
      <div className="max-w-5xl mx-auto">
        <div className={`grid gap-8 ${isFirst ? "max-w-xl mx-auto" : "md:grid-cols-3"}`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              {/* Quote mark */}
              <div className="text-4xl text-gray-200 font-serif mb-4">"</div>

              {/* Quote text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.quote}
              </p>

              {/* Attribution */}
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
