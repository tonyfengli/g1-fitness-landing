import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | G1 Fitness",
  robots: "noindex, nofollow",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md px-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-green-600 text-2xl">✓</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">You're All Set!</h1>
        <p className="text-lg text-gray-600 mb-6">
          We'll reach out soon to schedule your free sessions.
        </p>
        <div className="bg-white rounded-lg p-6 shadow-sm text-left">
          <p className="font-medium mb-3">What to expect:</p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-gray-400">1.</span>
              <span>We'll call to find a time that works for you</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">2.</span>
              <span>Show up and experience a real session</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">3.</span>
              <span>Decide if it's right for you — no pressure</span>
            </li>
          </ul>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Questions? Call us at [PHONE NUMBER]
        </p>
      </div>
    </main>
  );
}
