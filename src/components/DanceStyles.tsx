import { CircleDot, Globe, Music, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import TempleCard from "./TempleCard";

const danceStyles = [
  {
    icon: Sparkles,
    name: "Kuchipudi",
    description: "Traditional South Indian classical dance with expressive storytelling.",
  },
  {
    icon: Music,
    name: "Western",
    description: "Contemporary Western dance forms for versatility and fun.",
  },
  {
    icon: Globe,
    name: "Folk",
    description: "Regional folk dances celebrating India's cultural diversity.",
  },
  {
    icon: CircleDot,
    name: "Hulahoop (Ring Dance)",
    description: "Creative ring dance combining rhythm, coordination, and joy.",
  },
];

export default function DanceStyles() {
  return (
    <section
      id="dance-styles"
      className="section-padding bg-sandalwood"
      aria-labelledby="dance-styles-heading"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeader
            id="dance-styles-heading"
            title="Dance Styles Taught"
            subtitle="A diverse repertoire spanning classical, folk, and contemporary forms."
          />
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {danceStyles.map((style, index) => (
            <ScrollReveal key={style.name} delay={index * 0.1}>
              <TempleCard className="h-full text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-gold/10">
                  <style.icon
                    className="text-gopuram"
                    size={28}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-heading text-xl font-semibold text-kumkum">
                  {style.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone/80">
                  {style.description}
                </p>
              </TempleCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
