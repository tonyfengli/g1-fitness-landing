import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section className="py-10 md:py-14 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
          This is what accountability looks like
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Phone frame - Margarita */}
          <div className="flex justify-center">
            <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-xl">
              <div className="bg-gray-900 rounded-[2rem] overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-b-xl z-10" />
                <Image
                  src="/testimonial-1.png"
                  alt="G1 Fitness community welcoming a new member"
                  width={400}
                  height={800}
                  className="w-full h-auto rounded-[1.5rem]"
                />
              </div>
            </div>
          </div>

          {/* Roger + Kyle/Lexi container */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Image
                src="/testimonial-2.png"
                alt="Member Roger sharing weight loss transformation"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
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
      </div>
    </section>
  );
}
