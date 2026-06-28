"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  UserCheck,
  Brain,
  ClipboardCheck,
  HelpCircle,
  Clock,
  Trophy,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Users,
    title: "Small Batch Size",
    description: "Restricted batches (max 10–15 students) to ensure quiet and highly focused learning environments with personalized attention.",
  },
  {
    icon: UserCheck,
    title: "Individual Attention",
    description: "Continuous observation of each student's strengths and weak areas with target-specific mentoring and progress tracking.",
  },
  {
    icon: Brain,
    title: "Concept-Based Learning",
    description: "Deep fundamental understanding over rote memorization. We focus on core logical reasoning and lasting comprehension of every topic.",
  },
  {
    icon: ClipboardCheck,
    title: "Regular Assessments",
    description: "Weekly assignments, monthly chapter tests, and board-level mock papers with detailed feedback reports sent to parents.",
  },
  {
    icon: HelpCircle,
    title: "Doubt Clearing Sessions",
    description: "Dedicated one-on-one time slots allocated weekly for resolving personal academic queries and remedial workshops on weekends.",
  },
  {
    icon: Clock,
    title: "Discipline & Punctuality",
    description: "Punctual class schedules, prompt syllabus completion, regular parent notifications, and strict attendance tracking.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 90, damping: 16 },
  },
};

interface AboutProps {
  onBookDemo: () => void;
}

export default function About({ onBookDemo }: AboutProps) {
  return (
    <section className="section bg-bg dark:bg-dark relative overflow-hidden" id="about">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(244,180,0,0.06) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(10,35,66,0.05) 0%, transparent 70%)" }} />

      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-label"
          >
            Core Philosophy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-text-primary dark:text-white mt-5"
          >
            Why Parents{" "}
            <span className="text-primary dark:text-gold-light">Choose Us</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="section-divider mt-5"
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="text-text-light dark:text-slate-400 mt-3 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            We don&apos;t just prepare students for exams; we instil academic discipline, clear core concepts, and foster a lifelong love for learning.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                id={`about-feature-${idx}`}
                className="p-7 md:p-8 rounded-3xl bg-white dark:bg-dark-alt border border-primary/5 dark:border-white/5 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-350 group relative overflow-hidden cursor-default"
                style={{ transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease" }}
              >
                {/* Gold left accent strip on hover */}
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-gold via-gold-light to-gold rounded-l-3xl transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-350" />

                {/* Top gold glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-gold/0 via-gold to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-350" />

                <div className="flex gap-5 items-start">
                  <div className="p-3.5 rounded-2xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-primary transition-all duration-300 flex-shrink-0 shadow-sm group-hover:shadow-gold/30 group-hover:shadow-md icon-hover-group">
                    <Icon className="w-6 h-6 icon transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="pt-0.5">
                    <h4 className="font-bold text-lg text-text-primary dark:text-slate-100 font-display leading-tight">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-text-light dark:text-slate-400 mt-2.5 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Success Banner */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
          id="about-success-banner"
          className="p-7 md:p-10 rounded-3xl bg-gradient-to-r from-primary via-[#0e2d5a] to-secondary dark:from-secondary dark:to-primary text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-7 border border-white/10 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-white/5 rounded-full blur-xl pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <div className="flex gap-5 md:gap-7 items-start relative z-10">
            <div className="p-4 rounded-2xl bg-gold/20 text-gold flex-shrink-0 animate-bounce-subtle shadow-lg">
              <Trophy className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold font-display text-white flex items-center gap-2.5 flex-wrap">
                <span>Success-Oriented Methodology</span>
                <Sparkles className="w-4 h-4 text-gold flex-shrink-0" />
              </h3>
              <p className="text-sm text-slate-200/90 mt-2 leading-[1.8] max-w-3xl">
                Our board preparation features intensive answer-writing practice, precise presentation templates,
                time-management strategies, and multiple full-syllabus mock test series designed to help students score 95%+.
              </p>
            </div>
          </div>

          <button
            onClick={onBookDemo}
            className="w-full md:w-auto px-8 py-3.5 bg-gold hover:bg-gold-light text-primary font-black rounded-full text-xs uppercase tracking-widest shadow-md hover:shadow-gold/30 hover:shadow-xl active:scale-95 transition-all text-center justify-center flex items-center gap-2 cursor-pointer whitespace-nowrap relative z-10"
          >
            <span>Book Free Demo</span>
            <CheckCircle2 className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
