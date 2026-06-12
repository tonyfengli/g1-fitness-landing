"use client";

import { useState } from "react";
import Image from "next/image";

type FeatureHighlight = {
  title: string;
  description: string;
};

type Feature = {
  title: string;
  description: string;
  highlights?: FeatureHighlight[];
  tags?: string[];
  image?: string;
};

type SubSection = {
  title: string;
  description: string;
  highlights?: FeatureHighlight[];
  tags?: string[];
};

type FeatureWithSections = Feature & {
  sections?: SubSection[];
  showGroupMe?: boolean;
};

const FEATURES: FeatureWithSections[] = [
  {
    title: "Semi-Private & Group Classes",
    description: "",
    sections: [
      {
        title: "Small Group Classes",
        description:
          "Personalized coaching in a group setting. Every session is led by a coach who knows your name, corrects your form in real time, and adjusts the workout to your level. Personal training attention at a fraction of the cost.",
        highlights: [
          {
            title: "Functional Strength",
            description: "Real strength for everyday life. Lifting, moving, playing without pain.",
          },
          {
            title: "Lasting Mobility",
            description: "Bodies that stay active for decades, not just months.",
          },
          {
            title: "Body Composition",
            description: "Lose fat, build lean muscle, see measurable changes.",
          },
        ],
        tags: ["Heart Health Focus", "Community Energy", "Scaleable Intensity"],
      },
      {
        title: "Semi-Private Training",
        description:
          "Even more attention. With only 4 to 6 clients per session, your coach builds every workout around your goals, your body, and your pace. Adapting as you progress.",
        tags: ["Personalized Coaching", "Form Correction", "Progress Tracking"],
      },
    ],
  },
  {
    title: "Amazing Community Support",
    description:
      "This community is alive 🔥 Real people supporting each other, celebrating every win, and holding you accountable. In the gym and in the group chat.",
    showGroupMe: true,
  },
  {
    title: "Personalized Coaching",
    description:
      "Every session is led by a coach who knows your name, corrects your form in real time, and adjusts the workout to your level.",
    image: "/kyle-coaching.jpg",
  },
  {
    title: "Nutrition and Accountability",
    description:
      "Results happen outside the gym too. Through our coaching app, we track your habits (sleep, water, nutrition) and check in with you every week. It's not about perfection, it's about building consistency with a coach who actually pays attention.",
    image: "/nutrition.jpg",
  },
];

export function FeatureAccordion() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div style={{ overflowAnchor: "none" }}>
      {FEATURES.map((feature, index) => (
        <div
          key={index}
          className="border-b border-[#1a1c1c]/20"
          style={{ overflowAnchor: "none" }}
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
          >
            <span className="text-lg md:text-xl text-[#1a1c1c] pr-4">
              {feature.title}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`w-5 h-5 text-[#1a1c1c]/40 flex-shrink-0 transition-transform duration-200 ${
                openIndexes.has(index) ? "rotate-180" : ""
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
            className={`overflow-hidden transition-all duration-300 ${
              openIndexes.has(index) ? "max-h-[2000px]" : "max-h-0"
            }`}
          >
            <div className="pb-6">
              {/* GroupMe Testimonials */}
              {feature.showGroupMe ? (
                <div>
                  <p className="text-[#5f5e5e] mb-4">{feature.description}</p>
                  <div className="flex flex-col md:grid md:grid-cols-3 gap-3">
                    <div className="border border-[#1a1c1c]/10 overflow-hidden bg-white">
                      <Image
                        src="/testimonial-1.png"
                        alt="G1 Fitness community welcoming a new member"
                        width={300}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="border border-[#1a1c1c]/10 overflow-hidden bg-white">
                      <Image
                        src="/testimonial-2.png"
                        alt="Member sharing weight loss transformation"
                        width={300}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="border border-[#1a1c1c]/10 overflow-hidden bg-white">
                      <Image
                        src="/testimonial-3.png"
                        alt="G1 Fitness community conversation"
                        width={300}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              ) : feature.sections ? (
                <div className="space-y-6">
                  {feature.sections.map((section, sIndex) => (
                    <div
                      key={sIndex}
                      className="p-5 border border-[#1a1c1c]/10 bg-[#f9f9f9]"
                    >
                      <h4 className="font-bebas text-xl uppercase mb-3 text-[#1a1c1c]">
                        {section.title}
                      </h4>
                      <p className="text-[#5f5e5e] text-sm mb-4">{section.description}</p>

                      {/* Highlights Grid */}
                      {section.highlights && (
                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                          {section.highlights.map((highlight, i) => (
                            <div key={i}>
                              <h5 className="font-bebas text-sm uppercase text-[#bb0012] mb-1">
                                {highlight.title}
                              </h5>
                              <p className="text-[#5f5e5e] text-xs">{highlight.description}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tags */}
                      {section.tags && (
                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#1a1c1c]">
                          {section.tags.map((tag, i) => (
                            <span key={i} className="flex items-center gap-2">
                              <span className="text-[#bb0012]">✓</span> {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className={feature.image ? "flex flex-col md:flex-row gap-6" : ""}>
                  {feature.image && (
                    <div className="relative w-full md:w-48 aspect-[4/5] flex-shrink-0 overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="text-[#5f5e5e] mb-4">{feature.description}</p>

                    {/* Highlights Grid */}
                    {feature.highlights && (
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        {feature.highlights.map((highlight, i) => (
                          <div key={i}>
                            <h5 className="font-bebas text-base uppercase text-[#bb0012] mb-1">
                              {highlight.title}
                            </h5>
                            <p className="text-[#5f5e5e] text-sm">{highlight.description}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    {feature.tags && (
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#1a1c1c]">
                        {feature.tags.map((tag, i) => (
                          <span key={i} className="flex items-center gap-2">
                            <span className="text-[#bb0012]">✓</span> {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
