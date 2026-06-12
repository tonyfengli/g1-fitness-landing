"use client";

import { useState } from "react";

const FEATURES = [
  {
    title: "Personalized Coaching",
    description:
      "Every session is led by a coach who knows your name, corrects your form in real time, and adjusts the workout to your level.",
  },
  {
    title: "Small Group Classes",
    description:
      "Maximum 12 people per class means you get attention without the price tag of personal training.",
  },
  {
    title: "Community Support",
    description:
      "Join a group of like-minded adults who show up, support each other, and celebrate every win together.",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Morning, lunch, and evening classes to fit your busy schedule. Miss a class? Make it up anytime.",
  },
  {
    title: "Progress Tracking",
    description:
      "We track your lifts, your milestones, and your growth. You'll always know how far you've come.",
  },
  {
    title: "Nutrition Guidance",
    description:
      "Get practical nutrition advice that fits your lifestyle—no restrictive diets, just sustainable habits.",
  },
];

export function FeatureAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {FEATURES.map((feature, index) => (
        <div
          key={index}
          className="border border-[#1a1c1c]/10 bg-[#f9f9f9]"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between p-4 text-left cursor-pointer"
          >
            <span className="font-bebas text-xl uppercase text-[#1a1c1c]">
              {feature.title}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`w-5 h-5 text-[#bb0012] transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === index ? "max-h-40" : "max-h-0"
            }`}
          >
            <p className="px-4 pb-4 text-[#5f5e5e]">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
