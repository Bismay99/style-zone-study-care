"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  PhoneCall, 
  HeartHandshake, 
  Presentation, 
  FileCheck2, 
  Rocket,
  ChevronRight,
  Sparkles
} from "lucide-react";

interface Step {
  number: string;
  title: string;
  subtitle: string;
  desc: string;
  details: string[];
  icon: React.ReactNode;
}

const stepsData: Step[] = [
  {
    number: "01",
    title: "Contact Us",
    subtitle: "Get in touch with our team",
    desc: "Reach out via our website form, call us directly, or send a message on WhatsApp. You can also walk directly into any of our 3 branches.",
    details: [
      "Phone support: +91 9668580583",
      "WhatsApp: Quick response within minutes",
      "Branches open: Monday to Saturday (3:00 PM - 9:00 PM)"
    ],
    icon: <PhoneCall className="w-6 h-6 text-gold animate-bounce-subtle" />
  },
  {
    number: "02",
    title: "Expert Counselling",
    subtitle: "Map the student's learning gaps",
    desc: "Participate in a diagnostic counselling session. Our senior faculty evaluates current strengths, conceptual gaps, and designs a customized study schedule.",
    details: [
      "Free diagnostic assessment sheet",
      "One-on-one student-parent session",
      "Targeted improvement strategy design"
    ],
    icon: <HeartHandshake className="w-6 h-6 text-gold" />
  },
  {
    number: "03",
    title: "Free Demo Class",
    subtitle: "Experience Style Zone education",
    desc: "Attend a live, interactive class. Experience our advanced multimedia slides, grammar workshops, and high-energy classrooms firsthand.",
    details: [
      "No commitments, completely free",
      "Access actual batch lectures",
      "Receive trial worksheets & resource kit"
    ],
    icon: <Presentation className="w-6 h-6 text-gold" />
  },
  {
    number: "04",
    title: "Admission Confirmation",
    subtitle: "Quick paperwork & batch alignment",
    desc: "Secure your seat. Complete simple registration forms, select suitable batch timings across our zones, and receive academic materials.",
    details: [
      "Flexible batch schedules to avoid school clashes",
      "Welcome handbook & orientation guidelines",
      "Premium physical study materials printed booklets"
    ],
    icon: <FileCheck2 className="w-6 h-6 text-gold" />
  },
  {
    number: "05",
    title: "Start Learning",
    subtitle: "Embark on academic excellence",
    desc: "Step into your regular coaching classes. Dive into active reading, intensive grammar lessons, test schedules, and watch grades climb.",
    details: [
      "Assigned specialized teacher mentor",
      "Automatic SMS notification setup for parents",
      "Regular doubt resolution sessions activated"
    ],
    icon: <Rocket className="w-6 h-6 text-gold" />
  }
];

interface AdmissionProcessProps {
  onBookDemo: () => void;
}

export default function AdmissionProcess({ onBookDemo }: AdmissionProcessProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } }
  };

  return (
    <section className="section bg-bg dark:bg-dark text-text-primary dark:text-text-light transition-colors duration-300 relative overflow-hidden" id="admission-process">
      {/* Background blur effects */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <span className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20 dark:bg-gold/5 dark:text-gold-light">
            Admission Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
            How to Get Started <span className="text-primary dark:text-gold-light">in 5 Steps</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="text-text-light dark:text-slate-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            We believe in transparency and student comfort. Our structured process ensures you find the right fit before making any long-term commitments.
          </p>
        </div>

        {/* Timeline Component */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Central Line (Hidden on Mobile) */}
          <div className="absolute left-8 lg:left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-gold via-secondary to-primary dark:via-white/10 dark:to-gold/10 -translate-x-1/2 pointer-events-none hidden md:block" />

          {/* Steps list */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12 md:space-y-20 relative"
          >
            {stepsData.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div 
                  key={step.number}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row items-stretch relative ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* central circle bullet */}
                  <div className="absolute left-8 lg:left-1/2 top-8 w-12 h-12 rounded-full bg-secondary dark:bg-dark-alt border-4 border-gold shadow-lg flex items-center justify-center -translate-x-1/2 z-10 hidden md:flex hover:scale-115 transition-transform duration-300">
                    <span className="text-white font-bold text-sm font-sans">{step.number}</span>
                  </div>

                  {/* Left spacer / right content block arrangement */}
                  <div className="w-full md:w-1/2 flex justify-start md:justify-end px-4 md:px-12">
                    {/* Content Card */}
                    <div className={`w-full max-w-lg glass-card p-6 md:p-8 rounded-3xl premium-card border border-black/10 dark:border-white/10 ${
                      isEven ? "md:text-right" : "md:text-left"
                    }`}>
                      {/* Step Indicator on Mobile */}
                      <div className="flex items-center gap-3 mb-4 md:hidden">
                        <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center font-bold text-primary text-xs">
                          {step.number}
                        </div>
                        <span className="text-xs font-bold text-gold uppercase tracking-wider">
                          {step.subtitle}
                        </span>
                      </div>

                      {/* Header */}
                      <div className={`flex items-center gap-4 mb-4 ${
                        isEven ? "md:flex-row-reverse" : "md:flex-row"
                      }`}>
                        <div className="w-12 h-12 rounded-2xl bg-primary/5 dark:bg-white/5 border border-gold/20 flex items-center justify-center shrink-0">
                          {step.icon}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-gold uppercase tracking-wider hidden md:block">
                            {step.subtitle}
                          </span>
                          <h3 className="text-xl md:text-2xl font-extrabold text-primary dark:text-white font-display">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      {/* Desc */}
                      <p className="text-sm text-text-light dark:text-slate-400 leading-relaxed mb-6">
                        {step.desc}
                      </p>

                      {/* Details list */}
                      <ul className={`space-y-2 text-xs md:text-sm text-primary dark:text-white/95 font-medium ${
                        isEven ? "md:items-end" : "md:items-start"
                      } flex flex-col`}>
                        {step.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2">
                            {isEven ? (
                              <>
                                <span className="text-text-light dark:text-slate-400 text-right">{detail}</span>
                                <ChevronRight className="w-3.5 h-3.5 text-gold shrink-0 rotate-180" />
                              </>
                            ) : (
                              <>
                                <ChevronRight className="w-3.5 h-3.5 text-gold shrink-0" />
                                <span className="text-text-light dark:text-slate-400 text-left">{detail}</span>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Empty side spacer for desktop layout symmetry */}
                  <div className="w-full md:w-1/2 hidden md:block" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-24 bg-gradient-to-r from-primary via-secondary to-primary-light text-white p-8 md:p-12 rounded-3xl text-center relative overflow-hidden shadow-2xl border border-white/10"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full blur-[60px]" />
          
          <h3 className="text-2xl md:text-4xl font-extrabold mb-4 font-display">
            Ready to Begin Your <span className="text-gold">Success Journey</span>?
          </h3>
          <p className="text-sm md:text-base text-white/85 max-w-2xl mx-auto mb-8 leading-relaxed">
            Get a 100% free consultation session and sample worksheet package. 
            No advance payments, no obligations. Meet our experienced teachers today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              id="cta-admission-demo-btn"
              onClick={onBookDemo}
              className="btn-primary w-full sm:w-auto justify-center cursor-pointer text-sm uppercase tracking-wider"
            >
              <span>Book Free Demo Class</span>
            </button>
            <a
              id="cta-admission-call"
              href="tel:+919668580583"
              className="btn-secondary w-full sm:w-auto justify-center border-white text-white hover:bg-white hover:text-primary text-sm uppercase tracking-wider"
            >
              <PhoneCall className="w-4 h-4" /> Call: 9668580583
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
