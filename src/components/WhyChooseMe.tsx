import { CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

const reasons = [
  "Passionate and patient instructor",
  "Strong classical dance foundation with versatility across Western, Folk, and Hulahoop",
  "Child-friendly teaching approach",
  "Focus on discipline and confidence",
  "Experience judging and running summer camps shows range beyond the classroom",
  "Committed to preserving Indian cultural heritage",
];

export default function WhyChooseMe() {
  return (
    <section
      id="why-choose-me"
      className="section-padding bg-sandalwood"
      aria-labelledby="why-choose-me-heading"
    >
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <SectionHeader
            id="why-choose-me-heading"
            title="Why Choose Me"
            subtitle="The right blend of tradition, versatility, and dedication for your school."
          />
        </ScrollReveal>

        <ul className="space-y-3">
          {reasons.map((reason, index) => (
            <ScrollReveal key={reason} delay={index * 0.08}>
              <li className="kolam-list-item flex items-start gap-3">
                <CheckCircle
                  className="mt-0.5 shrink-0 text-gopuram"
                  size={22}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <p className="text-base leading-relaxed text-stone">{reason}</p>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
