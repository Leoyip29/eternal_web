"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What Types Of Granite Products Do You Manufacture?",
    answer:
      "We manufacture high-quality granite products for memorials, gravestones, monuments, architectural projects, landscaping, flooring, wall cladding, and custom stone applications.",
  },
  {
    question: "Do You Offer Custom Stone Designs?",
    answer:
      "Yes. We create custom stone pieces tailored to memorial preferences, site conditions, inscription styles, and family requirements.",
  },
  {
    question: "What Materials Do You Use?",
    answer:
      "Our collection includes granite, marble, bluestone, porcelain detailing, and selected companion materials chosen for durability and finish.",
  },
  {
    question: "Can You Create Personalized Gravestones And Memorials?",
    answer:
      "Absolutely. We can personalize size, silhouette, engraving, portrait details, and finishing touches to honour each family story.",
  },
  {
    question: "What Granite Finishes Are Available?",
    answer:
      "We offer polished, honed, flamed, bush-hammered, and custom-textured finishes depending on the stone type and intended design.",
  },
  {
    question: "How Durable Is Granite Stone?",
    answer:
      "Granite is highly durable, weather-resistant, and well suited for outdoor memorial use when properly fabricated and installed.",
  },
  {
    question: "Do You Handle Bulk Or Commercial Orders?",
    answer:
      "Yes. We support larger projects for cemeteries, columbaria, institutions, and commercial stone programs with coordinated production planning.",
  },
] as const;

function MinusIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-18 sm:py-22 lg:py-28">
      <div className="site-shell px-[var(--site-gutter)]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="pt-1">
            <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.04em] text-black sm:text-[42px] lg:text-[48px]">
              Frequently <span className="text-[#738460]">Asked Questions</span>
            </h2>
          </div>

          <div>
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  className="border-b border-[#d9ddd5]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-start justify-between gap-4 py-4 text-left"
                  >
                    <span className="text-[15px] font-medium leading-6 text-[#1e211d] sm:text-[16px]">
                      {item.question}
                    </span>
                    <span className="mt-1 shrink-0 text-[#9ca38f]">
                      {isOpen ? <MinusIcon /> : <PlusIcon />}
                    </span>
                  </button>

                  {isOpen ? (
                    <p className="max-w-[720px] pb-4 pr-8 text-[13px] uppercase leading-6 tracking-[0.01em] text-[#8b8f88] sm:text-[13.5px]">
                      {item.answer}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
