import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | G1 Fitness",
  robots: "noindex, nofollow",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-lg text-gray-600 mb-6">
          We&apos;ve received your information and will be in touch shortly.
        </p>
        <a href="/" className="text-blue-600 underline">
          Return to homepage
        </a>
      </div>
    </main>
  );
}
