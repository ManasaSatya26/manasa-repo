"use client";

import { useState, useTransition, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Play, Image as ImageIcon, Award, RefreshCw } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import KolamBorder from "./decor/KolamBorder";
import GalleryModal from "./GalleryModal";
import { galleryItems, galleryCategories, GalleryItem } from "@/data/gallery";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("all"); // set search string
  const [queryInput, setQueryInput] = useState<string>("");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  // Memoize filtered items based on activeCategory and queryInput
  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      // 1. Category Filter
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;

      // 2. Search Query Filter
      const matchesSearch =
        queryInput.trim() === "" ||
        item.title.toLowerCase().includes(queryInput.toLowerCase()) ||
        item.description.toLowerCase().includes(queryInput.toLowerCase()) ||
        item.tags.some((tag) => tag.toLowerCase().includes(queryInput.toLowerCase())) ||
        item.category.toLowerCase().includes(queryInput.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, queryInput]);

  // Modal navigation handlers
  const handleOpenModal = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((x) => x.id === item.id);
    if (idx !== -1) {
      setSelectedItemIndex(idx);
    }
  };

  const handleCloseModal = () => {
    setSelectedItemIndex(null);
  };

  const handleNextItem = () => {
    if (selectedItemIndex === null || filteredItems.length === 0) return;
    setSelectedItemIndex((prev) => 
      prev !== null ? (prev + 1) % filteredItems.length : 0
    );
  };

  const handlePrevItem = () => {
    if (selectedItemIndex === null || filteredItems.length === 0) return;
    setSelectedItemIndex((prev) => 
      prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
    );
  };

  // Get currently selected item for the modal
  const selectedItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  return (
    <section
      id="gallery"
      className="section-padding bg-stone-texture bg-sandalwood/50 scroll-mt-20"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Title Section */}
        <ScrollReveal>
          <SectionHeader
            id="gallery-heading"
            title="My Journey Gallery"
            subtitle="Explore highlights from my teaching classes, dance events, tech projects, hackathons, and personal achievements."
          />
        </ScrollReveal>

        {/* Filter Controls (Search + Categories) */}
        <div className="mt-8 mb-10 space-y-6">
          {/* Search bar */}
          <ScrollReveal delay={0.1}>
            <div className="relative mx-auto max-w-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-stone/50">
                <Search size={18} />
              </span>
              <input
                type="text"
                placeholder="Search by title, tag, or category..."
                value={queryInput}
                onChange={(e) => setQueryInput(e.target.value)}
                className="w-full rounded-md border border-gold/30 bg-sandalwood/80 py-2.5 pl-10 pr-10 text-stone shadow-sm placeholder:text-stone/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                aria-label="Search gallery"
              />
              {queryInput && (
                <button
                  type="button"
                  onClick={() => setQueryInput("")}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-stone/50 hover:text-kumkum"
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </ScrollReveal>

          {/* Categories Tab Bar */}
          <ScrollReveal delay={0.15}>
            <div className="flex flex-wrap justify-center gap-2 overflow-x-auto py-2">
              {galleryCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider border-2 transition-all duration-300 ${
                    activeCategory === category.id
                      ? "border-gold bg-kumkum text-sandalwood font-bold shadow-md scale-105"
                      : "border-gold/30 bg-sandalwood/40 text-stone hover:bg-gold/10 hover:border-gold/60"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Gallery Grid */}
        <ScrollReveal delay={0.2}>
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                // Uniform aspect ratio for perfectly aligned row grid cells side-by-side
                const aspectClass = "aspect-[4/3]";

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    key={item.id}
                    className="block"
                  >
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3 }}
                    >
                      <KolamBorder 
                        variant="corners" 
                        className="overflow-hidden rounded-lg shadow-md border border-gold/10 bg-sandalwood/70" 
                        innerClassName="!p-0"
                      >
                        <figure 
                          onClick={() => handleOpenModal(item)}
                          className="group relative overflow-hidden cursor-pointer"
                        >
                          <div className={`relative ${aspectClass} w-full overflow-hidden bg-stone/5`}>
                            <Image
                              src={item.thumbnail}
                              alt={item.title}
                              fill
                              loading="lazy"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            
                            {/* Featured Badge */}
                            {item.featured && (
                              <div className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded bg-gopuram/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sandalwood shadow-sm">
                                <Award size={12} className="text-turmeric" />
                                <span>Featured</span>
                              </div>
                            )}

                            {/* Media Type Indicator Icon (Desktop overlay helper) */}
                            <div className="absolute right-3 top-3 z-10 rounded-full bg-stone/60 p-1.5 text-sandalwood/95 backdrop-blur-sm">
                              {item.type === "video" ? (
                                <Play size={14} className="fill-sandalwood text-sandalwood" />
                              ) : (
                                <ImageIcon size={14} />
                              )}
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-kumkum/95 via-kumkum/40 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-turmeric">
                                {item.category}
                              </span>
                              <h3 className="font-heading text-base font-semibold leading-tight text-sandalwood mt-0.5 flex items-center gap-1.5">
                                {item.title}
                                {item.type === "video" && (
                                  <Play size={12} className="fill-turmeric text-turmeric animate-pulse" />
                                )}
                              </h3>
                              <p className="text-xs text-sandalwood/70 line-clamp-2 mt-1 leading-relaxed">
                                {item.description}
                              </p>
                              
                              <span className="text-[10px] text-sandalwood/50 mt-2 block font-medium">
                                Click to view details
                              </span>
                            </div>
                          </div>

                          {/* Fallback Label for mobile/accessibility when hover is not active */}
                          <figcaption className="border-t border-gold/20 bg-sandalwood/40 px-3 py-2.5 sm:hidden">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold text-kumkum capitalize">
                                {item.title}
                              </span>
                              <span className="text-[9px] uppercase font-bold text-stone/60 bg-gold/10 px-1.5 py-0.5 rounded">
                                {item.category}
                              </span>
                            </div>
                          </figcaption>
                        </figure>
                      </KolamBorder>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </ScrollReveal>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-gold/30 rounded-lg bg-sandalwood/20 max-w-md mx-auto mt-6">
              <div className="rounded-full bg-gold/10 p-4 text-gold mb-4">
                <RefreshCw size={28} className="animate-spin" style={{ animationDuration: '6s' }} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-kumkum">No Items Found</h3>
              <p className="text-sm text-stone/70 mt-2">
                We couldn&apos;t find any photos or videos matching your search query or selected category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("all");
                  setQueryInput("");
                }}
                className="btn-secondary mt-5 !px-4 !py-2 text-sm flex items-center gap-2"
              >
                Reset Search Filters
              </button>
            </div>
          </ScrollReveal>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedItemIndex !== null && (
        <GalleryModal
          item={selectedItem}
          onClose={handleCloseModal}
          onNext={handleNextItem}
          onPrev={handlePrevItem}
        />
      )}
    </section>
  );
}
