"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  FileText,
  GraduationCap,
  MessageCircle,
  ArrowRight,
  BookOpen,
  Map,
  Star,
  Shield,
  MapPin,
  ClipboardCheck,
  ChevronDown,
} from "lucide-react";

interface HeroProps {
  onBookDemo: () => void;
}

export default function Hero({ onBookDemo }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.14, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 90,
        damping: 18,
      },
    },
  };

  const trustBadges = [
    { icon: Users, text: "500+ Students" },
    { icon: Shield, text: "Small Batches (15 max)" },
    { icon: ClipboardCheck, text: "Weekly Assessments" },
    { icon: MapPin, text: "3 Study Zones" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[94vh] flex items-center justify-center overflow-hidden py-16 lg:py-32"
      style={{
        background: "linear-gradient(160deg, #F8FAFC 0%, #EEF2F7 55%, #E8EDF5 100%)",
      }}
    >
      {/* Dark mode bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-alt dark:opacity-100 opacity-0 transition-opacity duration-300" />

      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_28px] pointer-events-none dark:opacity-30" />

      {/* Main glow blobs */}
      <div className="absolute top-1/4 left-1/5 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(244,180,0,0.09) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/4 right-1/5 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(10,35,66,0.07) 0%, transparent 70%)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none dark:block hidden"
        style={{ background: "radial-gradient(ellipse, rgba(244,180,0,0.05) 0%, transparent 70%)" }} />

      {/* Floating Education Shapes */}
      {/* Book shape — top left */}
      <motion.div
        className="floating-shape top-[15%] left-[8%] opacity-[0.07] dark:opacity-[0.04]"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <rect x="8" y="8" width="64" height="64" rx="4" stroke="#0A2342" strokeWidth="4" />
          <line x1="8" y1="22" x2="72" y2="22" stroke="#0A2342" strokeWidth="3" />
          <line x1="26" y1="8" x2="26" y2="72" stroke="#0A2342" strokeWidth="3" />
          <line x1="20" y1="35" x2="72" y2="35" stroke="#0A2342" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="20" y1="48" x2="72" y2="48" stroke="#0A2342" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      </motion.div>

      {/* Star — top right */}
      <motion.div
        className="floating-shape top-[12%] right-[10%] opacity-[0.12] dark:opacity-[0.06]"
        animate={{ y: [0, -15, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M28 4L33.5 20.5L51 20.5L37.5 30.5L43 47L28 37L13 47L18.5 30.5L5 20.5L22.5 20.5Z"
            stroke="#F4B400" strokeWidth="3" strokeLinejoin="round" />
        </svg>
      </motion.div>

      {/* Graduation cap — bottom right */}
      <motion.div
        className="floating-shape bottom-[20%] right-[7%] opacity-[0.08] dark:opacity-[0.04]"
        animate={{ y: [0, 18, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
          <ellipse cx="45" cy="38" rx="30" ry="10" stroke="#0A2342" strokeWidth="3.5" />
          <path d="M15 38L45 28L75 38" stroke="#0A2342" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M25 43V60C25 60 35 67 45 67C55 67 65 60 65 60V43" stroke="#0A2342" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="75" y1="38" x2="75" y2="55" stroke="#F4B400" strokeWidth="3" strokeLinecap="round" />
          <circle cx="75" cy="60" r="5" fill="#F4B400" />
        </svg>
      </motion.div>

      {/* Circle dots — bottom left */}
      <motion.div
        className="floating-shape bottom-[25%] left-[6%] opacity-[0.1] dark:opacity-[0.05]"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="15" cy="15" r="8" stroke="#F4B400" strokeWidth="2.5" />
          <circle cx="45" cy="15" r="5" stroke="#0A2342" strokeWidth="2.5" />
          <circle cx="15" cy="45" r="5" stroke="#0A2342" strokeWidth="2.5" />
          <circle cx="45" cy="45" r="8" stroke="#F4B400" strokeWidth="2.5" />
        </svg>
      </motion.div>

      {/* Pencil — mid right */}
      <motion.div
        className="floating-shape top-[45%] right-[4%] opacity-[0.07] dark:opacity-[0.04]"
        animate={{ y: [0, -16, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M8 36L12 44L40 16L36 8L8 36Z" stroke="#0A2342" strokeWidth="3" strokeLinejoin="round" />
          <path d="M34 10L38 14" stroke="#F4B400" strokeWidth="3" strokeLinecap="round" />
          <path d="M8 36L12 44" stroke="#F4B400" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </motion.div>

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* Left Side Content */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Admissions Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center lg:justify-start gap-2 mb-7"
          >
            <span className="px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.15em] bg-gold/12 text-gold border border-gold/25 dark:bg-gold/7 dark:text-gold-light animate-pulse-gold shadow-sm">
              ✦ Admissions Open 2026-27
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-[3.4rem] lg:text-[3.8rem] font-display font-black leading-[1.08] text-text-primary dark:text-white tracking-tight"
          >
            Where Every Student{" "}
            <br className="hidden sm:block" />
            Discovers Their{" "}
            <span className="gradient-text">True Potential</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl font-semibold text-text-light dark:text-slate-300 leading-relaxed"
          >
            Expert{" "}
            <span className="text-gold font-bold">
              English &amp; Social Science
            </span>{" "}
            Coaching for Classes 6–10
            <br className="hidden md:block" />
            <span className="text-sm font-medium text-text-lighter dark:text-slate-400 mt-1 block">
              CBSE · ICSE · State Boards
            </span>
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="hidden sm:block mt-4 text-sm md:text-base text-text-light dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-[1.9]"
          >
            We empower students with concept-building classes, intensive
            language training, and board-level preparation — ensuring excellent
            grades and lifelong confidence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
          >
            <button
              onClick={onBookDemo}
              className="btn-primary w-full sm:w-auto text-center justify-center group cursor-pointer text-sm font-black uppercase tracking-wider"
              id="hero-book-demo-btn"
              aria-label="Book a free demo class"
            >
              Book Free Demo Class
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </button>
            <a
              href="https://wa.me/919668580583?text=Hi!%20I%20want%20to%20know%20more%20about%20Style%20Zone%20Study%20Care."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto text-center justify-center group"
              id="hero-whatsapp-btn"
              aria-label="Talk to a counsellor on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-12" />
              Talk to Counsellor
            </a>
          </motion.div>

          {/* Trust Badges Strip */}
          <motion.div
            variants={itemVariants}
            className="mt-7 flex flex-wrap gap-2.5 justify-center lg:justify-start"
          >
            {trustBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/70 dark:bg-white/5 border border-white/60 dark:border-white/10 text-[11px] font-bold text-text-primary dark:text-slate-300 backdrop-blur-md shadow-sm hover:shadow-md hover:border-gold/30 transition-all"
                >
                  <Icon className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  {badge.text}
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Side — Floating Card Graphic */}
        <motion.div
          className="lg:col-span-5 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.82, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.34, 1.1, 0.64, 1] }}
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[390px] lg:max-w-[430px] aspect-square flex items-center justify-center">
            {/* Orbit ring */}
            <motion.div
              className="absolute w-[92%] h-[92%] rounded-full border border-dashed border-gold/20 dark:border-gold/12 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
            />

            {/* Inner orbit ring */}
            <motion.div
              className="absolute w-[70%] h-[70%] rounded-full border border-dotted border-primary/10 dark:border-white/8 pointer-events-none"
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            />

            {/* Glow backdrop */}
            <div className="absolute w-[60%] h-[60%] rounded-full bg-gradient-to-br from-gold/25 to-accent/10 filter blur-3xl pointer-events-none" />

            {/* Main Card */}
            <motion.div
              className="relative z-10 glass-card p-7 w-[84%] rounded-3xl border border-white/40 dark:border-white/8 shadow-2xl flex flex-col"
              style={{ boxShadow: "0 24px 60px rgba(10,35,66,0.14), 0 4px 12px rgba(0,0,0,0.08)" }}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Card Header */}
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-primary text-gold shadow-sm">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-black text-text-primary dark:text-white font-display tracking-tight">
                    Style Zone
                  </span>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-500/12 text-emerald-600 dark:text-emerald-400 text-[10px] font-black tracking-wider uppercase border border-emerald-500/20">
                  Live Classes
                </div>
              </div>

              {/* Subject Cards */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-primary/6 dark:bg-white/6 border border-primary/8 dark:border-white/6 flex items-center gap-3 hover:bg-primary/12 dark:hover:bg-white/10 transition-colors group">
                  <div className="p-2 rounded-lg bg-gold text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-text-light dark:text-slate-400 font-semibold uppercase tracking-wide">
                      Core Subject
                    </span>
                    <span className="block text-sm font-bold text-text-primary dark:text-white mt-0.5">
                      English Language &amp; Literature
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-primary/6 dark:bg-white/6 border border-primary/8 dark:border-white/6 flex items-center gap-3 hover:bg-primary/12 dark:hover:bg-white/10 transition-colors group">
                  <div className="p-2 rounded-lg bg-primary text-gold dark:bg-secondary dark:text-gold-light flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Map className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-text-light dark:text-slate-400 font-semibold uppercase tracking-wide">
                      Core Subject
                    </span>
                    <span className="block text-sm font-bold text-text-primary dark:text-white mt-0.5">
                      Social Science (His, Geo, Civ)
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="mt-5 pt-4 border-t border-primary/8 dark:border-white/8 flex justify-between items-center">
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-text-light dark:text-slate-400 uppercase tracking-wider">
                  Classes 6-10 · All Boards
                </span>
              </div>
            </motion.div>

            {/* Floating Badge — Top Left */}
            <motion.div
              className="absolute top-4 -left-2 sm:-left-5 z-20 glass p-2.5 sm:p-3 rounded-2xl shadow-xl flex items-center gap-2.5 border border-white/30 dark:border-white/10"
              style={{ boxShadow: "0 8px 30px rgba(10,35,66,0.15)" }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-500">
                <FileText className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black text-text-primary dark:text-slate-200 leading-none">
                  Weekly Tests
                </p>
                <p className="text-[9px] text-text-light dark:text-slate-400 mt-0.5">
                  Track Progress
                </p>
              </div>
            </motion.div>

            {/* Floating Badge — Bottom Right */}
            <motion.div
              className="absolute -right-2 sm:-right-7 bottom-14 z-20 glass p-2.5 sm:p-3 rounded-2xl shadow-xl flex items-center gap-2.5 border border-white/30 dark:border-white/10"
              style={{ boxShadow: "0 8px 30px rgba(244,180,0,0.15)" }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <div className="p-1.5 rounded-lg bg-gold/20 text-gold">
                <Users className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black text-text-primary dark:text-slate-200 leading-none">
                  Small Batches
                </p>
                <p className="text-[9px] text-text-light dark:text-slate-400 mt-0.5">
                  Max 15 Students
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-lighter dark:text-slate-600">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
