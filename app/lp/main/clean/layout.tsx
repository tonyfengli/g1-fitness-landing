import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "G1 Fitness | West Anaheim's Elite Performance Community",
  description: "Join the fastest-growing local gym for busy adults",
};

export default function CleanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Hanken+Grotesk:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@400,0..1&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .font-bebas { font-family: 'Bebas Neue', sans-serif; }
        .font-hanken { font-family: 'Hanken Grotesk', sans-serif; }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400;
        }
      `}</style>
      <div className="bg-[#f9f9f9] text-[#1a1c1c] font-hanken min-h-screen">
        {children}
      </div>
    </>
  );
}
