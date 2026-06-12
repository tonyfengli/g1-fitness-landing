"use client";

import { useState, Suspense } from "react";
import { LeadFormModal } from "@/components/shared/LeadFormModal";

interface CTAButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function CTAButton({ className, children }: CTAButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={className}
      >
        {children}
      </button>
      <Suspense fallback={null}>
        <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </Suspense>
    </>
  );
}
