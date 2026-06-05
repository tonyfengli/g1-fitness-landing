import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "G1 Fitness | West Anaheim's Elite Performance Community",
  description: "Join the fastest-growing local gym for busy adults",
};

export default function KineticLayout({
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
        .scrolling-text {
          animation: scroll 20s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400;
        }
      `}</style>
      <div className="bg-[#131313] text-[#e5e2e1] font-hanken min-h-screen">
        {children}
      </div>
    </>
  );
}
