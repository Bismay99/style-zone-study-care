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
} from "lucide-react";

interface HeroProps {
  onBookDemo: () => void;
}

export default function Hero({ onBookDemo }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
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
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-12 lg:py-28 bg-gradient-to-b from-bg to-bg-alt dark:from-dark dark:to-dark-alt"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

      {/* Decorative glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/8 rounded-full blur-[100px] pointer-events-none dark:bg-gold/5" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[80px] pointer-events-none dark:bg-secondary/5" />

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
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
            className="inline-flex items-center justify-center lg:justify-start gap-2 mb-6"
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20 dark:bg-gold/5 dark:text-gold-light animate-pulse-gold">
              ✦ Admissions Open 2026-27
            </span>
          </motion.div>

          {/* Benefit-Driven Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-display font-black leading-[1.1] text-text-primary dark:text-white"
          >
            Where Every Student Discovers Their{" "}
            <span className="gradient-text">True Potential</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-base md:text-xl font-medium text-text-light dark:text-slate-300"
          >
            Expert{" "}
            <span className="text-gold font-bold">
              English & Social Science
            </span>{" "}
            Coaching for Classes 6–10 · CBSE, ICSE & State Boards
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="hidden sm:block mt-3 text-sm text-text-light dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            We empower students with concept-building classes, intensive
            language training, and board-level preparation — ensuring excellent
            grades and lifelong confidence.
          </motion.p>

          {/* CTA Buttons — Just 2 */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
          >
            <button
              onClick={onBookDemo}
              className="btn-primary w-full sm:w-auto text-center justify-center group cursor-pointer"
              id="hero-book-demo-btn"
            >
              Book Free Demo Class
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="https://wa.me/919668580583?text=Hi!%20I%20want%20to%20know%20more%20about%20Style%20Zone%20Study%20Care."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto text-center justify-center group"
              id="hero-whatsapp-btn"
            >
              <MessageCircle className="w-5 h-5" />
              Talk to Counsellor
            </a>
          </motion.div>

          {/* Trust Badges Strip */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start"
          >
            {trustBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/50 dark:bg-white/5 border border-white/30 dark:border-white/10 text-[11px] font-semibold text-text-primary dark:text-slate-300 backdrop-blur-sm"
                >
                  <Icon className="w-3 h-3 text-gold flex-shrink-0" />
                  {badge.text}
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Side Graphics — compact on mobile, full on desktop */}
        <motion.div
          className="lg:col-span-5 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] aspect-square flex items-center justify-center">
            {/* Subtle orbit ring */}
            <motion.div
              className="absolute w-[90%] h-[90%] rounded-full border border-dashed border-gold/15 dark:border-gold/10 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Glow backdrop */}
            <div className="absolute w-[55%] h-[55%] rounded-full bg-gradient-to-br from-gold/20 to-accent/10 filter blur-3xl pointer-events-none" />

            {/* Main Card */}
            <motion.div
              className="relative z-10 glass-card p-7 w-[82%] rounded-3xl border border-white/30 shadow-2xl flex flex-col"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Card Header */}
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-gold text-primary">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-text-primary dark:text-white font-display">
                    Style Zone
                  </span>
                </div>
                <div className="px-2.5 py-0.5 rounded-full bg-green-500/15 text-green-600 dark:text-green-400 text-[10px] font-bold tracking-wider uppercase">
                  Live Classes
                </div>
              </div>

              {/* Subject Cards */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-primary/5 dark:bg-white/5 border border-primary/5 dark:border-white/5 flex items-center gap-3 hover:bg-primary/10 dark:hover:bg-white/10 transition-colors">
                  <div className="p-2 rounded-lg bg-gold text-primary">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-text-light dark:text-slate-400 font-medium">
                      Core Subject
                    </span>
                    <span className="block text-sm font-bold text-text-primary dark:text-white">
                      English Language & Literature
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-primary/5 dark:bg-white/5 border border-primary/5 dark:border-white/5 flex items-center gap-3 hover:bg-primary/10 dark:hover:bg-white/10 transition-colors">
                  <div className="p-2 rounded-lg bg-primary text-gold dark:bg-secondary dark:text-gold-light">
                    <Map className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-text-light dark:text-slate-400 font-medium">
                      Core Subject
                    </span>
                    <span className="block text-sm font-bold text-text-primary dark:text-white">
                      Social Science (His, Geo, Civ)
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="mt-5 pt-4 border-t border-primary/5 dark:border-white/5 flex justify-between items-center">
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-text-light dark:text-slate-300">
                  Classes 6-10 · All Boards
                </span>
              </div>
            </motion.div>

            {/* Floating Badge — Top Left */}
            <motion.div
              className="absolute top-4 -left-2 sm:-left-4 z-20 glass p-2 sm:p-3 rounded-2xl shadow-xl flex items-center gap-2 border border-white/30"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <div className="p-1.5 rounded-lg bg-green-500/20 text-green-500">
                <FileText className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-text-primary dark:text-slate-200 leading-none">
                  Weekly Tests
                </p>
                <p className="text-[8px] text-text-light dark:text-slate-400 mt-0.5">
                  Track Progress
                </p>
              </div>
            </motion.div>

            {/* Floating Badge — Bottom Right */}
            <motion.div
              className="absolute -right-2 sm:-right-6 bottom-14 z-20 glass p-2 sm:p-3 rounded-2xl shadow-xl flex items-center gap-2 border border-white/30"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              <div className="p-1.5 rounded-lg bg-gold/20 text-gold">
                <Users className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-text-primary dark:text-slate-200 leading-none">
                  Small Batches
                </p>
                <p className="text-[8px] text-text-light dark:text-slate-400 mt-0.5">
                  Max 15 Students
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
