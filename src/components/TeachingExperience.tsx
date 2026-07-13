import {
  Calendar,
  Gavel,
  School,
  Star,
  Sun,
  Users,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

const experienceItems = [
  {
    icon: Calendar,
    text: "2 years of teaching experience",
  },
  {
    icon: School,
    text: "Founder and Dance Instructor, Saraswathi Nrithyalaya",
  },
  {
    icon: Users,
    text: "Teaching children from 5 years of age and above",
  },
  {
    icon: Star,
    text: "Conducting regular dance classes across Kuchipudi, Western, Folk, and Hulahoop styles",
  },
  {
    icon: Sun,
    text: "Summer camp instructor — conducted dance-focused summer camp sessions for children",
  },
  {
    icon: Gavel,
    text: "Judge — served as a judge for dance competitions and cultural events",
  },
  {
    icon: Star,
    text: "Preparing students for stage performances with confidence and discipline",
  },
];

export default function TeachingExperience() {
  return (
    <section
      id="experience"
      className="section-padding bg-stone-texture bg-sandalwood/50"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <SectionHeader
            id="experience-heading"
            title="Teaching Experience"
            subtitle="Dedicated to nurturing young talent through structured dance education."
          />
        </ScrollReveal>

        <ul className="space-y-4">
          {experienceItems.map((item, index) => (
            <ScrollReveal key={item.text} delay={index * 0.08}>
              <li className="kolam-list-item flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                  <item.icon
                    className="text-gopuram"
                    size={20}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>
                <p className="pt-1.5 text-base leading-relaxed text-stone">
                  {item.text}
                </p>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
