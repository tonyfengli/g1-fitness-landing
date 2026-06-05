import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "G1 Fitness | West Anaheim's Elite Performance Community",
  description: "Join the fastest-growing local gym for busy adults",
};

export default function TechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@400,0..1&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .font-bebas { font-family: 'Bebas Neue', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400;
        }
        .tech-grid {
          background-image:
            linear-gradient(to right, #334155 1px, transparent 1px),
            linear-gradient(to bottom, #334155 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .scanline {
          width: 100%;
          height: 100px;
          z-index: 10;
          background: linear-gradient(0deg, rgba(255,179,182,0) 0%, rgba(255,179,182,0.05) 50%, rgba(255,179,182,0) 100%);
          position: absolute;
          animation: scan 8s linear infinite;
        }
        @keyframes scan {
          0% { top: -100px; }
          100% { top: 100%; }
        }
      `}</style>
      <div className="bg-[#051424] text-[#d4e4fa] font-inter min-h-screen">
        {children}
      </div>
    </>
  );
}
