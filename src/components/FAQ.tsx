"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4" role="region" aria-label="Frequently Asked Questions">
      {items.map((item, index) => (
        <div key={index} className="border border-border rounded-lg overflow-hidden bg-surface">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            aria-expanded={activeIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="font-semibold text-ink">{item.question}</span>
            <svg
              className={`w-5 h-5 transform transition-transform ${activeIndex === index ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-4 pt-2 text-muted leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
