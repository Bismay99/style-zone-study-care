"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Award, TrendingUp, Calendar, Trophy, ArrowRight } from "lucide-react";

interface Topper {
  name: string;
  classBoard: string;
  stats: { label: string; score: string; percentage?: number }[];
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
}

const toppers: Topper[] = [
  {
    name: "Ayushman Panda",
    classBoard: "Class 10 (CBSE)",
    stats: [
      { label: "Social Science", score: "96%", percentage: 96 },
      { label: "English", score: "94%", percentage: 94 },
    ],
    accentColor: "from-blue-600 to-indigo-600",
    gradientFrom: "#2563eb",
    gradientTo: "#4f46e5",
  },
  {
    name: "Pratikshya Parida",
    classBoard: "Class 10 (CBSE)",
    stats: [
      { label: "English", score: "A1 Grade", percentage: 98 },
      { label: "SST", score: "92%", percentage: 92 },
    ],
    accentColor: "from-amber-500 to-yellow-600",
    gradientFrom: "#f59e0b",
    gradientTo: "#ca8a04",
  },
  {
    name: "Shreyansh Satpathy",
    classBoard: "Class 9 (ICSE)",
    stats: [
      { label: "English", score: "91%", percentage: 91 },
      { label: "History", score: "89%", percentage: 89 },
    ],
    accentColor: "from-violet-600 to-purple-600",
    gradientFrom: "#7c3aed",
    gradientTo: "#9333ea",
  },
  {
    name: "Tapaswini Jena",
    classBoard: "Class 8 (State Board)",
    stats: [
      { label: "English", score: "95%", percentage: 95 },
      { label: "SST", score: "93%", percentage: 93 },
    ],
    accentColor: "from-emerald-500 to-teal-600",
    gradientFrom: "#10b981",
    gradientTo: "#0d9488",
  },
  {
    name: "Suryakant Biswal",
    classBoard: "Class 9 (CBSE)",
    stats: [
      { label: "English", score: "88%", percentage: 88 },
      { label: "Improvement", score: "+23%", percentage: 88 },
    ],
    accentColor: "from-rose-500 to-pink-600",
    gradientFrom: "#f43f5e",
    gradientTo: "#db2777",
  },
];

interface ImprovementStory {
  name: string;
  subject: string;
  before: string;
  after: string;
  beforePct: number;
  afterPct: number;
  timeline: string;
}

const improvementStories: ImprovementStory[] = [
  {
    name: "Subham Mohanty",
    subject: "English Language & Lit.",
    before: "52%",
    after: "89%",
    beforePct: 52,
    afterPct: 89,
    timeline: "6 Months",
  },
  {
    name: "Ananya Mishra",
    subject: "Social Science (SST)",
    before: "61%",
    after: "94%",
    beforePct: 61,
    afterPct: 94,
    timeline: "8 Months",
  },
  {
    name: "Rohan K. Pradhan",
    subject: "Overall Performance",
    before: "68%",
    after: "91%",
    beforePct: 68,
    afterPct: 91,
    timeline: "1 Year",
  },
];

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: "2022",
    title: "Founded in Paharkhana",
    description: "Started with a small batch of 15 students focusing on core English and Social Science foundations.",
  },
  {
    year: "2023",
    title: "First 95%+ Board Scorer",
    description: "Established our reputation with stellar board results and a 90%+ batch average.",
  },
  {
    year: "2024",
    title: "Expanded to 3 Branches",
    description: "Opened Treasury Colony & College Chhaka zones to reach more students across the city.",
  },
  {
    year: "2025",
    title: "500+ Active Alumni",
    description: "Marked a milestone of guiding over 500 successful students in English & Social Science.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 90, damping: 15 },
  },
};

function ProgressBar({ percentage, delay = 0 }: { percentage: number; delay?: number }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && barRef.current) {
            setTimeout(() => {
              if (barRef.current) {
                barRef.current.style.width = `${percentage}%`;
              }
            }, delay * 1000);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (barRef.current) observer.observe(barRef.current.parentElement!);
    return () => observer.disconnect();
  }, [percentage, delay]);

  return (
    <div className="progress-bar mt-1.5">
      <div
        ref={barRef}
        className="progress-bar-fill"
        style={{
          width: "0%",
          transition: `width 1.2s cubic-bezier(0.34, 1.1, 0.64, 1) ${delay}s`,
        }}
      />
    </div>
  );
}

export default function Results() {
  return (
    <section className="section bg-bg-alt dark:bg-dark-alt relative overflow-hidden" id="results">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(244,180,0,0.06) 0%, transparent 70%)" }} />

      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Proven Outcomes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-text-primary dark:text-white mt-5"
          >
            Our Students,{" "}
            <span className="text-gold dark:text-gold-light">Our Pride</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="section-divider mt-5"
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.22 }}
            className="text-text-light dark:text-slate-400 mt-3 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Year after year, our students break academic records and achieve top grades. Discover their success stories.
          </motion.p>
        </div>

        {/* Toppers Grid */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="p-2.5 rounded-xl bg-gold/12 border border-gold/20">
              <Trophy className="w-5 h-5 text-gold" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-display text-text-primary dark:text-white">
              Board Toppers &amp; Academic Achievers
            </h3>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {toppers.map((topper, idx) => {
              const initials = topper.name
                .split(" ")
                .map((n) => n[0])
                .join("");
              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  id={`topper-card-${idx}`}
                  className="glass-card rounded-2xl p-6 border border-white/40 dark:border-white/5 flex flex-col items-center text-center relative overflow-hidden group result-card cursor-default"
                >
                  {/* Top gradient accent */}
                  <div
                    className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${topper.accentColor} transition-all duration-300`}
                  />

                  {/* Hover glow background */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none`}
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${topper.gradientFrom}10 0%, transparent 70%)`,
                    }}
                  />

                  {/* Initials Avatar */}
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${topper.accentColor} flex items-center justify-center text-white font-black font-display text-lg shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                    style={{ boxShadow: `0 8px 24px ${topper.gradientFrom}40` }}
                  >
                    {initials}
                  </div>

                  <h4 className="font-bold text-text-primary dark:text-white text-base font-display leading-tight min-h-[2.5rem] flex items-center justify-center text-center">
                    {topper.name}
                  </h4>
                  <p className="text-[11px] text-text-light dark:text-slate-400 font-semibold mb-5 mt-1 uppercase tracking-wide">
                    {topper.classBoard}
                  </p>

                  <div className="w-full space-y-3 mt-auto">
                    {topper.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="text-left">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[10px] text-text-light dark:text-slate-400 font-bold uppercase tracking-wide">
                            {stat.label}
                          </span>
                          <span className="text-sm font-black text-primary dark:text-gold-light">
                            {stat.score}
                          </span>
                        </div>
                        {stat.percentage && (
                          <ProgressBar percentage={stat.percentage} delay={idx * 0.1 + sIdx * 0.1} />
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Two Column Layout: Improvement Stories & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Improvement Stories (Left) */}
          <div className="lg:col-span-6 space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-gold/12 border border-gold/20">
                  <TrendingUp className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-display text-text-primary dark:text-white">
                  Remarkable Improvements
                </h3>
              </div>
              <p className="text-sm text-text-light dark:text-slate-400 ml-14 leading-relaxed">
                Our unique teaching methodologies help weak students overcome learning roadblocks and unlock their full potential.
              </p>
            </motion.div>

            <div className="space-y-5">
              {improvementStories.map((story, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, type: "spring", stiffness: 90, damping: 16 }}
                  id={`improvement-story-${idx}`}
                  className="glass-card p-6 rounded-2xl border border-white/40 dark:border-white/5 group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <h4 className="font-bold text-sm md:text-base text-text-primary dark:text-white font-display">
                        {story.name}
                      </h4>
                      <p className="text-xs text-text-light dark:text-slate-400 mt-0.5">
                        {story.subject}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-gold/10 text-gold border border-gold/20 uppercase tracking-wide flex-shrink-0">
                      {story.timeline}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-center">
                      <span className="block text-[9px] text-text-lighter dark:text-slate-500 uppercase tracking-widest font-bold mb-0.5">Before</span>
                      <span className="text-lg font-semibold text-text-light dark:text-slate-400 line-through">
                        {story.before}
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gold flex-shrink-0" />
                    <div className="text-center bg-gold/10 dark:bg-gold/8 px-4 py-2 rounded-xl border border-gold/20">
                      <span className="block text-[9px] text-gold uppercase tracking-widest font-black mb-0.5">After</span>
                      <span className="text-xl font-black text-primary dark:text-gold-light">
                        {story.after}
                      </span>
                    </div>
                    <div className="flex-1">
                      <span className="block text-[9px] text-text-lighter dark:text-slate-500 uppercase tracking-wider font-bold mb-1">Progress</span>
                      <ProgressBar percentage={story.afterPct} delay={idx * 0.15} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline Milestones (Right) */}
          <div className="lg:col-span-6 space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-gold/12 border border-gold/20">
                  <Calendar className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-display text-text-primary dark:text-white">
                  Our Journey of Growth
                </h3>
              </div>
              <p className="text-sm text-text-light dark:text-slate-400 ml-14 leading-relaxed">
                A history built on academic integrity, parent trust, and relentless student-focused coaching.
              </p>
            </motion.div>

            <div className="relative border-l-2 border-gradient border-primary/12 dark:border-white/8 ml-6 space-y-0 py-2"
              style={{ borderImage: "linear-gradient(to bottom, rgba(244,180,0,0.4), rgba(10,35,66,0.15)) 1" }}>
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, type: "spring", stiffness: 90, damping: 16 }}
                  id={`milestone-${idx}`}
                  className="relative pl-8 pb-8 last:pb-0 group"
                >
                  {/* Circle marker */}
                  <div className="absolute left-0 top-1.5 -translate-x-[calc(50%+1px)] w-5 h-5 rounded-full bg-white dark:bg-dark-alt border-[3px] border-gold shadow-md group-hover:scale-125 group-hover:shadow-gold/30 transition-all duration-300" />

                  {/* Year Tag */}
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-[10px] font-black bg-primary text-white dark:bg-gold dark:text-primary mb-2 uppercase tracking-wider shadow-sm">
                    {milestone.year}
                  </span>

                  <div className="glass-card p-5 rounded-2xl border border-white/40 dark:border-white/5 group-hover:border-gold/15 transition-colors">
                    <h4 className="font-bold text-sm md:text-base text-text-primary dark:text-white font-display flex items-center gap-2">
                      <Award className="w-4 h-4 text-gold flex-shrink-0" />
                      {milestone.title}
                    </h4>
                    <p className="text-xs text-text-light dark:text-slate-400 mt-2 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
