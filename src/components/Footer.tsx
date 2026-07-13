import { Facebook, Instagram, Youtube } from "lucide-react";
import TempleElephant from "./decor/TempleElephant";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Qualifications", href: "#qualifications" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram (Placeholder)", href: "#" },
  { icon: Facebook, label: "Facebook (Placeholder)", href: "#" },
  { icon: Youtube, label: "YouTube (Placeholder)", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-kumkum text-sandalwood">
      <div className="scripture-band scripture-band--dark" aria-hidden="true" />
      {/* Elephant procession + kolam divider at top */}
      <div className="border-t border-gold/30 pt-6" aria-hidden="true">
        <div className="flex items-center justify-center gap-4 sm:gap-8">
          <TempleElephant size={36} opacity={0.7} />
          <TempleElephant size={44} opacity={0.85} />
          <TempleElephant size={36} flip opacity={0.7} />
        </div>
        <div className="kolam-divider mx-auto my-4 max-w-2xl opacity-50" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-heading text-xl font-semibold text-sandalwood">
              Lakshmi Prasanna
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-sandalwood/70">
              Certified Kuchipudi Dancer &amp; Instructor
              <br />
              Founder, Saraswathi Nrithyalaya
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-turmeric">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-sandalwood/70 transition-colors hover:text-turmeric"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-turmeric">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-sandalwood/70 transition-colors hover:border-turmeric hover:text-turmeric"
                >
                  <social.icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="kolam-divider my-8 opacity-50" aria-hidden="true" />

        <p className="text-center text-sm text-sandalwood/60">
          &copy; {new Date().getFullYear()} Lakshmi Prasanna. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
