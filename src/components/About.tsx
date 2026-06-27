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
    title: "Small Batch size",
    description: "Restricted batches (max 10-15 students) to ensure quiet and highly focused learning environments.",
  },
  {
    icon: UserCheck,
    title: "Individual Attention",
    description: "Continuous observation of each student's strong and weak areas with target-specific mentoring.",
  },
  {
    icon: Brain,
    title: "Concept-Based Learning",
    description: "Deep fundamental understanding over rote learning. We focus on the core logical reasoning of every topic.",
  },
  {
    icon: ClipboardCheck,
    title: "Regular Assessments",
    description: "Weekly assignments, monthly chapter tests, and board-level mock papers with detailed feedback.",
  },
  {
    icon: HelpCircle,
    title: "Doubt Clearing Sessions",
    description: "Dedicated one-on-one time slot allocated weekly for resolving personal academic queries.",
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

interface AboutProps {
  onBookDemo: () => void;
}

export default function About({ onBookDemo }: AboutProps) {
  return (
    <section className="section bg-bg dark:bg-dark relative overflow-hidden" id="about">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20 dark:bg-gold/5 dark:text-gold-light">
            Core Philosophy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-text-primary dark:text-white mt-4">
            Why Parents <span className="text-primary dark:text-gold-light">Choose Us</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="text-text-light dark:text-slate-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            We don&apos;t just prepare students for exams; we instil academic discipline, clear core concepts, and foster a lifelong love for learning.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8"
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
                className="p-6 md:p-8 rounded-3xl bg-white dark:bg-dark-alt border border-primary/5 dark:border-white/5 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Accent border strip on hover */}
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-gold rounded-l-3xl transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-primary transition-all duration-300 flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-text-primary dark:text-slate-200 font-display">
                      {feature.title}
                    </h4>
                    <p className="text-xs md:text-sm text-text-light dark:text-slate-400 mt-2 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Big Highlight: Success Oriented Learning (Old 7th Advantage) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          id="about-success-banner"
          className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-primary to-secondary dark:from-secondary dark:to-primary text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border border-white/10"
        >
          <div className="flex gap-4 md:gap-6 items-start">
            <div className="p-4 rounded-2xl bg-gold/20 text-gold flex-shrink-0 animate-bounce-subtle">
              <Trophy className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold font-display text-white flex items-center gap-2">
                <span>Success-Oriented Methodology</span>
                <Sparkles className="w-4 h-4 text-gold" />
              </h3>
              <p className="text-xs md:text-sm text-slate-200 mt-1 leading-relaxed max-w-3xl">
                Our board preparation features intensive answer writing practice, precise presentation templates, time management strategies, and multiple full-syllabus mock test series designed to help students score 95%+.
              </p>
            </div>
          </div>

          <button
            onClick={onBookDemo}
            className="w-full md:w-auto px-6 py-3 bg-gold hover:bg-gold-light text-primary font-black rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-gold/20 active:scale-95 transition-all text-center justify-center flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <span>Book Free Demo</span>
            <CheckCircle2 className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
