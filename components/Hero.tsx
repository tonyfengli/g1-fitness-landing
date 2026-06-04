export function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 min-h-[450px]">
        {/* Photo side - first on mobile */}
        <div className="relative bg-gray-200 min-h-[200px] md:min-h-full md:order-2">
          {/* TODO: Add hero image */}
          {/* <Image src="/images/hero.jpg" alt="G1 Fitness coaching session" fill className="object-cover" priority /> */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <span className="text-sm">Hero Image</span>
          </div>
        </div>

        {/* Copy side - second on mobile, first on desktop */}
        <div className="flex flex-col justify-center px-6 py-8 md:py-12 md:px-12 lg:px-16 md:order-1">
          <p className="text-lg md:text-xl font-bold text-gray-900 uppercase tracking-wide mb-3 text-center">
            West Anaheim · Buena Park · Cypress
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-4">
            The fastest-growing local gym near you
          </h1>

          <p className="text-xl md:text-2xl text-gray-600">
            For busy adults who need a routine that lasts and a community that will keep them going.
          </p>
        </div>
      </div>
    </section>
  );
}
