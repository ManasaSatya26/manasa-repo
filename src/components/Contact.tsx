"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import KolamBorder from "./decor/KolamBorder";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding bg-stone-texture bg-sandalwood/50"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <SectionHeader
            id="contact-heading"
            title="Contact / Hire Me"
            subtitle="Available for school interviews. Reach out to discuss opportunities."
          />
        </ScrollReveal>

        <div className="grid gap-10 lg:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <KolamBorder innerClassName="p-6">
              <p className="mb-4 rounded-md border border-turmeric/40 bg-turmeric/10 px-4 py-2 text-center text-sm font-medium text-kumkum">
                Available for school interviews
              </p>

              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                    <Phone className="text-gopuram" size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-stone/60">
                      Phone
                    </p>
                    <p className="text-stone">+91 95736 76453(Rellu Lakshmi Prasana)</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                    <Mail className="text-gopuram" size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-stone/60">
                      Email
                    </p>
                    <p className="text-stone">
                      lakshmiprasanarellu@email.com 
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                    <MapPin className="text-gopuram" size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-stone/60">
                      Location
                    </p>
                    <p className="text-stone">
                     Bhimavaram, Near SRKR Engineering College,Andhra Pradesh
                    </p>
                  </div>
                </li>
              </ul>
            </KolamBorder>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <KolamBorder innerClassName="p-6 shadow-sm">
              <form
                onSubmit={(e) => e.preventDefault()}
                aria-label="Contact form"
              >
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1 block text-sm font-medium text-kumkum"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-md border border-gold/40 bg-sandalwood/50 px-4 py-2.5 text-stone placeholder:text-stone/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="school"
                      className="mb-1 block text-sm font-medium text-kumkum"
                    >
                      School Name
                    </label>
                    <input
                      type="text"
                      id="school"
                      name="school"
                      required
                      className="w-full rounded-md border border-gold/40 bg-sandalwood/50 px-4 py-2.5 text-stone placeholder:text-stone/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="Enter school name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1 block text-sm font-medium text-kumkum"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full resize-y rounded-md border border-gold/40 bg-sandalwood/50 px-4 py-2.5 text-stone placeholder:text-stone/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="Tell me about the opportunity..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full gap-2">
                    <Send size={18} aria-hidden="true" />
                    Send Message
                  </button>
                </div>
              </form>
            </KolamBorder>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
