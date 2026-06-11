import { Metadata } from "next";
import Image from "next/image";
import { BackButton } from "./BackButton";

export const metadata: Metadata = {
  title: "Thank You | G1 Fitness",
  robots: "noindex, nofollow",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f9f9f9]">
      {/* Header */}
      <header className="bg-white border-b border-[#1a1c1c]/10 flex justify-center items-center h-16 px-4">
        <Image src="/logo.png" alt="G1 Fitness" width={120} height={40} className="h-10 w-auto" />
      </header>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-lg">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-[#bb0012] flex items-center justify-center mx-auto mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
              <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
            </svg>
          </div>

          <h1 className="font-bebas text-5xl md:text-6xl uppercase text-[#1a1c1c] mb-4">
            You're In
          </h1>
          <p className="text-xl text-[#5f5e5e] mb-12">
            We'll reach out soon to schedule your free week.
          </p>

          {/* Divider */}
          <div className="w-16 h-1 bg-[#bb0012] mx-auto mb-12"></div>

          {/* Contact */}
          <p className="text-[#5f5e5e] mb-8">
            Questions? Call us at{" "}
            <a href="tel:714-388-5115" className="text-[#bb0012] font-semibold hover:underline">
              (714) 388-5115
            </a>
          </p>

          {/* Back Link */}
          <BackButton />
        </div>
      </div>
    </main>
  );
}
