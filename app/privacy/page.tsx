import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | G1 Fitness",
  robots: "noindex, nofollow",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <p className="mb-4 text-gray-600">Last updated: June 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
        <p className="mb-2">When you submit our contact form, we collect:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="mb-2">We use your information to:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Contact you about our fitness programs</li>
          <li>Respond to your inquiries</li>
          <li>Send promotional communications (with consent)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Cookies and Tracking</h2>
        <p>
          We use cookies and similar tracking technologies for advertising
          and analytics purposes, including Google Ads conversion tracking.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Third-Party Services</h2>
        <p className="mb-2">We share data with:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Google (Analytics and Ads)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p>
          For privacy questions, contact us at:{" "}
          <a href="mailto:info@g1fitnessoc.com" className="text-blue-600 hover:underline">
            info@g1fitnessoc.com
          </a>
        </p>
        <p className="mt-2">
          G1 Fitness<br />
          3111 West Lincoln Ave<br />
          Anaheim, CA 92801<br />
          (714) 388-5115
        </p>
      </section>
    </main>
  );
}
