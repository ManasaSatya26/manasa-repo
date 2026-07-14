"use client";

import Image from "next/image";
import { Flame } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import KolamBorder from "./decor/KolamBorder";

const certificates = [
  {
    title: "Summer Camp Certificate",
    alt: "India Records certificate",
    src: "/Certificates/lakshmi_prasanna_certificates_1(1).jpg",
  },
  {
    title: "Participation Certificate",
    alt: "Participation certificate for R Lakshmi Prasanna",
    src: "/Certificates/lakshmi_prasanna_certificates_1(2).jpg",
  },
  {
     title: "Cultural Book of Records",
    alt: "Cultural Book of Records certificate",
    src: "/Certificates/lakshmi_prasanna_certificates_1(3).jpg",
  },
  {
    title: "Guinness World Record Certificate",
    alt: "Guinness World Record certificate for R Lakshmi Prasanna",
    src: "/Certificates/lakshmi_prasanna_certificates_1(4).jpg",
  },
  {
    title: "India Records Certificate",
    alt: "India Records certificate for R Lakshmi Prasanna",
    src: "/Certificates/lakshmi_prasanna_certificates_1(5).jpg",
  },
  {
    title: "High Range Book of Records",
    alt: "High Range Book of World Records certificate",
    src: "/Certificates/lakshmi_prasanna_certificates_1.jpg",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="section-padding bg-sandalwood"
      aria-labelledby="certificates-heading"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeader
            id="certificates-heading"
            title="Certificates"
            subtitle="Official recognitions and qualifications in dance."
            accent={<Flame className="text-turmeric" size={24} aria-hidden="true" />}
          />
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <ScrollReveal key={cert.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <KolamBorder className="overflow-hidden rounded-lg shadow-sm" innerClassName="!p-0">
                  <figure className="group">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={cert.src}
                        alt={cert.alt}
                        fill
                        loading="lazy"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* overlay removed */}
                    </div>
                    <figcaption className="border-t border-gold/30 px-4 py-3 text-center">
                      <p className="font-heading text-base font-semibold text-kumkum">
                        {cert.title}
                      </p>
                    </figcaption>
                  </figure>
                </KolamBorder>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
