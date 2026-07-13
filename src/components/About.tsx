import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import KolamBorder from "./decor/KolamBorder";

export default function About() {
  return (
    <section id="about" className="section-padding bg-sandalwood" aria-labelledby="about-heading">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <SectionHeader
            id="about-heading"
            title="About Me"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <KolamBorder className="shadow-sm" innerClassName="p-6 sm:p-8">
            <p className="text-base leading-relaxed text-stone sm:text-lg">
              I am Lakshmi Prasanna, a passionate Kuchipudi dancer, dance
              instructor, and the founder of Saraswathi Nrithyalaya. My journey
              in dance began when I was studying in 5th standard, and since
              then I have dedicated myself to learning, performing, and teaching
              the rich tradition of Kuchipudi. I have successfully completed my
              Certificate Course in Kuchipudi and am a Certified Kuchipudi
              Dancer. Currently, I am pursuing my Diploma in Kuchipudi, with my
              examination scheduled for next year. I have had the privilege of
              learning under Dr. Chintha Ravi Balakrishna, Principal and
              Professor of Kuchipudi Kalakshetram, located in Kuchipudi
              Village. My vision is to preserve and promote Indian classical
              dance while nurturing confidence, creativity, discipline, and
              cultural values in children through quality dance education.
            </p>
          </KolamBorder>
        </ScrollReveal>
      </div>
    </section>
  );
}
