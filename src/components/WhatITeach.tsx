import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

const teachings = [
  "Basic Adavus",
  "Jathis",
  "Hastha Mudras",
  "Abhinaya (Expressions)",
  "Rhythm and Tala",
  "Classical Dance Theory (Basic)",
  "Stage Performance Skills",
  "Complete Dance Choreography (Classical, Folk, Western, Hulahoop)",
];

export default function WhatITeach() {
  return (
    <section
      id="what-i-teach"
      className="section-padding bg-sandalwood"
      aria-labelledby="what-i-teach-heading"
    >
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <SectionHeader
            id="what-i-teach-heading"
            title="What I Teach"
            subtitle="A comprehensive curriculum from foundational techniques to stage-ready performances."
          />
        </ScrollReveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {teachings.map((item, index) => (
            <ScrollReveal key={item} delay={index * 0.06}>
              <div className="kolam-list-item flex items-center gap-3 px-4 py-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gopuram/10 text-sm font-semibold text-gopuram"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <p className="text-sm font-medium text-stone sm:text-base">
                  {item}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
