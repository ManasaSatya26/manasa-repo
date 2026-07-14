"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
// use a standard <img> for the logo to ensure it renders from /public reliably

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Qualifications", href: "#qualifications" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  

  useEffect(() => {
    const sections = navLinks.map((link) => document.querySelector(link.href));

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            setActiveSection(`#${id}`);
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-sandalwood/90 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          className="flex items-center gap-2 font-heading text-lg font-semibold text-kumkum transition-colors hover:text-gopuram sm:text-xl"
        >
          <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gold/30 bg-stone/5">
            <img
              src="/gallery/images/logo.webp"
              alt="Saraswathi Nrithyalaya Logo"
              draggable={false}
              className="w-full h-full object-cover object-center block"
              style={{ display: 'block' }}
            />
          </span>
          <span>Lakshmi Prasanna</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.href
                    ? "text-gopuram font-semibold underline underline-offset-4 decoration-2"
                    : "text-stone hover:text-gopuram"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn-primary !px-4 !py-2 text-sm">
              Hire Me
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-kumkum md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Kolam edge + scripture band along bottom */}
      <div className="scripture-band scripture-band--compact opacity-50" aria-hidden="true" />
      <div className="kolam-edge-strip w-full opacity-70" aria-hidden="true" />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gold/20 bg-sandalwood md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block rounded-md px-3 py-2 transition-colors ${
                      activeSection === link.href
                        ? "bg-gold/20 text-gopuram font-semibold"
                        : "text-stone hover:bg-gold/10 hover:text-gopuram"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="btn-primary mt-2 w-full text-center"
                  onClick={() => setOpen(false)}
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
