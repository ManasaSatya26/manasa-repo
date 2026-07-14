"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import TempleElephant from "./decor/TempleElephant";
import KolamBorder from "./decor/KolamBorder";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      <Image
        src="/gallery/images/70.jpg"
        alt="Classical dance background image"
        fill
        priority
        className="object-cover object-center transform-gpu scale-105 md:scale-110"
        sizes="150vw"
        style={{ objectPosition: '25% center' }}
        />

      <div className="absolute inset-0 bg-kumkum/40" aria-hidden="true" />

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Cpath d='M50 180 L50 100 L70 80 L90 100 L90 180 M110 180 L110 60 L130 40 L150 60 L150 180 M170 180 L170 90 L190 70 L210 90 L210 180 M230 180 L230 50 L250 20 L270 50 L270 180 M290 180 L290 100 L310 80 L330 100 L330 180' stroke='%23F1E6D2' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom",
          backgroundSize: "400px",
        }}
        aria-hidden="true"
      />

      <TempleElephant
        size={56}
        className="absolute bottom-24 left-4 hidden sm:block md:left-8"
        opacity={0.35}
      />
      <TempleElephant
        size={56}
        flip
        className="absolute bottom-24 right-4 hidden sm:block md:right-8"
        opacity={0.35}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-turmeric sm:text-base"
        >
          Classical Dance Instructor
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-4xl font-semibold text-sandalwood sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Lakshmi Prasanna
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-base font-medium text-sandalwood/90 sm:text-lg md:text-xl"
        >
          Certified Kuchipudi Dancer | Dance Instructor | Founder, Saraswathi
          Nrithyalaya
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-sandalwood/80 sm:text-lg"
        >
          Inspiring young minds through the beauty, discipline, and tradition
          of Indian classical dance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10"
        >
          <KolamBorder
            variant="corners"
            className="inline-block"
            innerClassName="!p-4 sm:!p-6"
          >
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#contact" className="btn-primary w-full sm:w-auto">
                Contact for Interview
              </a>
              <a
                href="#gallery"
                className="btn-secondary w-full border-sandalwood/60 text-sandalwood hover:bg-sandalwood/10 sm:w-auto"
              >
                View Portfolio
              </a>
            </div>
          </KolamBorder>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10" aria-hidden="true">
        <div className="kolam-edge-strip w-full opacity-60" />
        <div className="flex items-center justify-center gap-6 bg-kumkum/30 py-2">
          <TempleElephant size={32} opacity={0.5} className="hidden sm:inline" />
          <div className="kolam-divider max-w-xs flex-1 opacity-70 sm:max-w-md" />
          <TempleElephant size={32} flip opacity={0.5} className="hidden sm:inline" />
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-16 left-1/2 z-20 -translate-x-1/2 text-sandalwood/70 transition-colors hover:text-turmeric sm:bottom-20"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
