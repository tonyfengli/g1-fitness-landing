import Image from "next/image";

export function BeforeAfterSection() {
  return (
    <section className="py-10 md:py-14 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Before/After Photos */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src="/david-before.jpg"
                  alt="David before joining G1 Fitness"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">Before</p>
            </div>
            <div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src="/david-after.jpg"
                  alt="David after training at G1 Fitness"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-right"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">After</p>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div>
            <div className="text-4xl text-gray-200 font-serif mb-4">"</div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              When I started I couldn't do a push-up. 80 pounds later I'm doing things I never thought possible. The workouts are only part of it though. I love the people, they notice when I show up, and more importantly they notice when I don't.
            </p>
            <div>
              <p className="font-semibold text-gray-900">David</p>
              <p className="text-sm text-gray-500">G1 Fitness Member</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
