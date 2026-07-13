import { Award, BookOpen, GraduationCap, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import TempleCard from "./TempleCard";

const qualifications = [
  {
    icon: Award,
    title: "Certified Kuchipudi Dancer",
    description: "Officially certified in the classical art of Kuchipudi dance.",
  },
  {
    icon: BookOpen,
    title: "Certificate Course Completed",
    description: "Successfully completed Certificate Course in Kuchipudi.",
  },
  {
    icon: GraduationCap,
    title: "Diploma in Progress",
    description: "Currently pursuing Diploma in Kuchipudi, examination next year.",
  },
  {
    icon: Users,
    title: "Trained Under a Master",
    description:
      "Learned under Dr. Chintha Ravi Balakrishna Garu, Principal of Kuchipudi Kalakshetram.",
  },
];

export default function Qualifications() {
  return (
    <section
      id="qualifications"
      className="section-padding bg-stone-texture bg-sandalwood/50"
      aria-labelledby="qualifications-heading"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeader
            id="qualifications-heading"
            title="Qualifications"
            subtitle="A strong foundation in classical dance education and certification."
          />
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {qualifications.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1}>
              <TempleCard className="h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <item.icon
                  className="mb-3 text-gopuram"
                  size={32}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="font-heading text-lg font-semibold text-kumkum">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone/80">
                  {item.description}
                </p>
              </TempleCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
