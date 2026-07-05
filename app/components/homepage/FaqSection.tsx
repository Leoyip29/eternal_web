"use client";

import { useState } from "react";
import type { FAQSection } from "../../../lib/api/types";

interface FaqSectionProps {
  faqSection: FAQSection;
}

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

export default function FaqSection({ faqSection }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [...faqSection.faqs].sort((a, b) => a.order - b.order);

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
                  key={item.id}
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