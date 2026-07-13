"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Calendar, Tag, Play } from "lucide-react";
import Image from "next/image";
import { GalleryItem } from "@/data/gallery";

interface GalleryModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function GalleryModal({ item, onClose, onNext, onPrev }: GalleryModalProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Reset zoom when item changes
  useEffect(() => {
    setIsZoomed(false);
  }, [item]);

  // Keyboard navigation
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock scroll
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [item, onClose, onNext, onPrev]);

  if (!item) return null;

  // Swipe navigation
  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      onNext();
    } else if (isRightSwipe) {
      onPrev();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col justify-between bg-stone/95 p-4 backdrop-blur-md md:p-6"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between py-2 text-sandalwood z-10">
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wider text-turmeric/90">
              {item.category}
            </span>
            <span className="text-sm text-sandalwood/60 font-medium">
              {item.type === "video" ? "Video Player" : "Photo Viewer"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {item.type === "image" && (
              <button
                type="button"
                onClick={() => setIsZoomed(!isZoomed)}
                className="rounded-full p-2 text-sandalwood/80 hover:bg-sandalwood/10 hover:text-sandalwood transition-colors"
                aria-label={isZoomed ? "Zoom out" : "Zoom in"}
              >
                {isZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-sandalwood/80 hover:bg-sandalwood/10 hover:text-sandalwood transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="relative flex flex-1 items-center justify-center overflow-hidden my-4">
          {/* Nav Buttons (Desktop) */}
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-2 z-10 hidden rounded-full border border-gold/30 bg-stone/75 p-3 text-sandalwood hover:bg-stone/90 hover:text-gold transition-colors md:block focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label="Previous item"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            type="button"
            onClick={onNext}
            className="absolute right-2 z-10 hidden rounded-full border border-gold/30 bg-stone/75 p-3 text-sandalwood hover:bg-stone/90 hover:text-gold transition-colors md:block focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label="Next item"
          >
            <ChevronRight size={24} />
          </button>

          {/* Media Wrapper */}
          <div className="relative max-h-full max-w-full overflow-hidden flex items-center justify-center p-2">
            {item.type === "image" ? (
              <div 
                className={`relative transition-all duration-300 ease-out select-none ${
                  isZoomed ? "cursor-zoom-out scale-125 md:scale-150" : "cursor-zoom-in scale-100"
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <Image
                  src={item.mediaUrl}
                  alt={item.title}
                  width={1200}
                  height={900}
                  className="max-h-[65vh] w-auto h-auto rounded-md object-contain shadow-2xl pointer-events-auto"
                  priority
                />
              </div>
            ) : (
              <div className="relative w-full max-w-3xl aspect-video rounded-md overflow-hidden bg-black shadow-2xl">
                <video
                  src={item.mediaUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                  poster={item.thumbnail}
                />
              </div>
            )}
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="bg-stone-texture border-t border-gold/20 bg-stone/60 p-4 rounded-lg max-w-4xl mx-auto w-full text-sandalwood z-10 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1 space-y-2">
              <h3 className="font-heading text-lg font-bold text-turmeric sm:text-xl">
                {item.title}
              </h3>
              <p className="text-sm text-sandalwood/80 leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </div>
            
            <div className="flex flex-wrap md:flex-col gap-3 md:items-end text-xs text-sandalwood/60 shrink-0">
              <div className="flex items-center gap-1.5 bg-stone/40 px-2.5 py-1.5 rounded-full border border-gold/10">
                <Calendar size={13} className="text-gold" />
                <span>{new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
              </div>

              <div className="flex items-center gap-1.5 bg-stone/40 px-2.5 py-1.5 rounded-full border border-gold/10">
                <Tag size={13} className="text-gold" />
                <span className="capitalize">{item.category}</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          {item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gold/10">
              {item.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs bg-sandalwood/10 text-sandalwood/80 px-2 py-0.5 rounded border border-sandalwood/5 hover:border-gold/30 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
