"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-center pointer-events-none">
      <AnimatePresence>
        {/* Call Button - Desktop Only */}
        <motion.a
          key="floating-call"
          id="floating-call-btn"
          href="tel:+919668580583"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
          whileHover={{ scale: 1.1, translateY: -2 }}
          whileTap={{ scale: 0.9 }}
          className="hidden lg:flex items-center justify-center w-14 h-14 rounded-full bg-primary text-[#FFD54F] border border-white/10 shadow-[0_4px_20px_rgba(10,35,66,0.3)] hover:bg-secondary transition-colors pointer-events-auto"
          title="Call Us Now"
          aria-label="Call Style Zone Study Care"
        >
          <Phone className="w-6 h-6 animate-pulse" />
        </motion.a>

        {/* WhatsApp Button - Desktop Only */}
        <motion.a
          key="floating-whatsapp"
          id="floating-whatsapp-btn"
          href="https://wa.me/919668580583"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          whileHover={{ scale: 1.1, translateY: -2 }}
          whileTap={{ scale: 0.9 }}
          className="hidden lg:flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] transition-colors pointer-events-auto"
          title="Chat on WhatsApp"
          aria-label="Chat with Style Zone Study Care on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
        </motion.a>

        {/* Scroll To Top Button - All Devices */}
        {showScrollTop && (
          <motion.button
            key="floating-scroll-top"
            id="floating-scroll-top-btn"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1, translateY: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-primary border border-slate-200 dark:border-slate-800 dark:bg-[#0A1628] dark:text-white shadow-lg hover:bg-slate-50 dark:hover:bg-[#12355B] transition-colors cursor-pointer pointer-events-auto"
            title="Scroll to Top"
            aria-label="Scroll back to top of the page"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
