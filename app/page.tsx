import { Suspense } from "react";
import { LeadForm } from "@/components/LeadForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">
          G1 Fitness
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Start your fitness journey today
        </p>
        <Suspense fallback={<div>Loading...</div>}>
          <LeadForm />
        </Suspense>
      </div>
    </main>
  );
}
