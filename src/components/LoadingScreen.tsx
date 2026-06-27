"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    // Unconditionally remove the loading screen after 500ms
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="loading-screen"
          id="loading-screen"
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(244,180,0,0.15)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="flex flex-col items-center z-10">
            {/* Animated Logo Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-6 p-4 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm loading-logo">
                <GraduationCap className="w-16 h-16 text-[#FFD54F]" />
                <div className="absolute inset-0 rounded-full border border-[#FFD54F]/30 animate-ping opacity-40" />
              </div>

              {/* Title & Subtitle */}
              <h1 className="text-4xl font-extrabold tracking-tight text-white font-display md:text-5xl">
                STYLE <span className="gradient-text font-display">ZONE</span>
              </h1>
              <p className="mt-2 text-sm tracking-[0.2em] font-semibold text-[#FFD54F]/90 uppercase font-sans">
                STUDY CARE
              </p>
              <p className="mt-1 text-xs text-slate-400 font-sans tracking-wide">
                Learn Today, Lead Tomorrow
              </p>
            </motion.div>

            {/* Loading Bar */}
            <div className="loading-bar">
              <div className="loading-bar-fill" />
            </div>
            
            {/* Status text */}
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mt-4 text-[10px] uppercase tracking-[0.15em] text-slate-300 font-medium font-sans"
            >
              Preparing Excellence...
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
