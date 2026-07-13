import { Flame, Trophy } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import TempleCard from "./TempleCard";

const achievements = [
  "Guinness World Record Certificate",
  "Worldwide Book of Records",
  "India Book of Records",
  "State-Level and National-Level Cultural Program participation",
  "Multiple appreciation certificates and awards",
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-padding bg-stone-texture bg-sandalwood/50"
      aria-labelledby="achievements-heading"
    >
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <SectionHeader
            id="achievements-heading"
            title="Achievements"
            subtitle="Recognized excellence in dance performance and cultural contribution."
            accent={<Flame className="text-turmeric" size={24} aria-hidden="true" />}
          />
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <ScrollReveal key={achievement} delay={index * 0.1}>
              <TempleCard className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-start gap-3">
                  <Trophy
                    className="mt-0.5 shrink-0 text-gold"
                    size={22}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <p className="text-sm font-medium leading-relaxed text-stone sm:text-base">
                    {achievement}
                  </p>
                </div>
              </TempleCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
