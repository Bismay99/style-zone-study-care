"use client";

import React, { useState, useEffect } from "react";
import { Phone, Calendar, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface StickyAdmissionBarProps {
  onBookDemo: () => void;
}

export default function StickyAdmissionBar({ onBookDemo }: StickyAdmissionBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isContactInView, setIsContactInView] = useState(false);

  useEffect(() => {
    // 1. Scroll listener for showing bar after 600px
    const handleScroll = () => {
      if (window.scrollY > 600 && !isContactInView) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    // 2. IntersectionObserver to hide bar when #contact is in view
    let observer: IntersectionObserver | null = null;
    const contactSection = document.getElementById("contact");
    
    if (contactSection) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsContactInView(entry.isIntersecting);
          if (entry.isIntersecting) {
            setIsVisible(false);
          } else if (window.scrollY > 600) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(contactSection);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observer && contactSection) {
        observer.unobserve(contactSection);
      }
    };
  }, [isContactInView]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          id="sticky-admission-bar"
          className="fixed bottom-0 inset-x-0 z-40 bg-white/80 dark:bg-dark/80 backdrop-blur-md border-t border-black/10 dark:border-white/10 py-3 px-4 flex items-center justify-between gap-3 shadow-lg lg:hidden pb-[calc(12px+env(safe-area-inset-bottom,0px))] sticky-cta-bar"
        >
          {/* Left Text / Small Pill */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold text-text-primary dark:text-white uppercase tracking-wider flex items-center gap-1">
              <span>Admissions Open</span>
              <Sparkles className="w-3 h-3 text-gold animate-bounce-subtle" />
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 flex-grow justify-end">
            {/* Phone CTA */}
            <a
              id="sticky-call-btn"
              href="tel:+919668580583"
              className="w-10 h-10 rounded-xl bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 text-primary dark:text-gold flex items-center justify-center shadow-sm active:scale-95 transition-transform"
              title="Call Style Zone Study Care"
              aria-label="Call Style Zone Study Care"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Book Demo CTA */}
            <button
              id="sticky-demo-btn"
              onClick={onBookDemo}
              className="px-4 py-2.5 bg-gold hover:bg-gold-light text-primary font-black rounded-xl text-xs uppercase tracking-wider shadow-md hover:shadow-gold/20 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Free Demo</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
