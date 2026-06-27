"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, TrendingUp, Calendar, Trophy, ArrowRight, User } from "lucide-react";

interface Topper {
  name: string;
  classBoard: string;
  stats: { label: string; score: string }[];
  accentColor: string;
}

const toppers: Topper[] = [
  {
    name: "Ayushman Panda",
    classBoard: "Class 10 (CBSE)",
    stats: [
      { label: "Social Science", score: "96%" },
      { label: "English", score: "94%" },
    ],
    accentColor: "from-blue-600 to-indigo-600",
  },
  {
    name: "Pratikshya Parida",
    classBoard: "Class 10 (CBSE)",
    stats: [
      { label: "English", score: "A1 Grade" },
      { label: "SST", score: "92%" },
    ],
    accentColor: "from-amber-500 to-yellow-600",
  },
  {
    name: "Shreyansh Satpathy",
    classBoard: "Class 9 (ICSE)",
    stats: [
      { label: "English", score: "91%" },
      { label: "History", score: "89%" },
    ],
    accentColor: "from-violet-600 to-purple-600",
  },
  {
    name: "Tapaswini Jena",
    classBoard: "Class 8 (State Board)",
    stats: [
      { label: "English", score: "95%" },
      { label: "SST", score: "93%" },
    ],
    accentColor: "from-emerald-500 to-teal-600",
  },
  {
    name: "Suryakant Biswal",
    classBoard: "Class 9 (CBSE)",
    stats: [
      { label: "English", score: "88%" },
      { label: "Improvement", score: "+23%" },
    ],
    accentColor: "from-rose-500 to-pink-600",
  },
];

interface ImprovementStory {
  name: string;
  subject: string;
  before: string;
  after: string;
  timeline: string;
}

const improvementStories: ImprovementStory[] = [
  {
    name: "Subham Mohanty",
    subject: "English Language & Lit.",
    before: "52%",
    after: "89%",
    timeline: "6 Months",
  },
  {
    name: "Ananya Mishra",
    subject: "Social Science (SST)",
    before: "61%",
    after: "94%",
    timeline: "8 Months",
  },
  {
    name: "Rohan K. Pradhan",
    subject: "Overall Performance",
    before: "68%",
    after: "91%",
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
    description: "Started with a small batch of 15 students focusing on core foundations.",
  },
  {
    year: "2023",
    title: "First 95%+ Board Scorer",
    description: "Established our reputation with stellar board results and 90%+ batch average.",
  },
  {
    year: "2024",
    title: "Expanded to 3 Branches",
    description: "Opened Treasury Colony & College Chhaka zones to reach more students.",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

export default function Results() {
  return (
    <section className="section bg-bg-alt dark:bg-dark-alt relative overflow-hidden" id="results">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20 dark:bg-gold/5 dark:text-gold-light">
            Proven Outcomes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-text-primary dark:text-white mt-4">
            Our Students, <span className="text-gold dark:text-gold-light">Our Pride</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="text-text-light dark:text-slate-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Year after year, our students break academic records and achieve top grades. Discover their success stories.
          </p>
        </div>

        {/* Toppers Grid */}
        <div className="mb-20">
          <h3 className="text-xl md:text-2xl font-bold font-display text-text-primary dark:text-white mb-8 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-gold" />
            Board Toppers & Academic Achievers
          </h3>
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
                  className="glass-card rounded-2xl p-6 border border-white/40 dark:border-white/5 flex flex-col items-center text-center relative overflow-hidden group hover:scale-[1.03] transition-all duration-300"
                >
                  <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${topper.accentColor}`} />
                  
                  {/* Initials Avatar */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${topper.accentColor} flex items-center justify-center text-white font-bold font-display text-lg shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                    {initials}
                  </div>

                  <h4 className="font-bold text-text-primary dark:text-white text-base font-display leading-tight min-h-[2.5rem] flex items-center justify-center">
                    {topper.name}
                  </h4>
                  <p className="text-xs text-text-light dark:text-slate-400 font-semibold mb-4">
                    {topper.classBoard}
                  </p>

                  <div className="w-full space-y-2 mt-auto">
                    {topper.stats.map((stat, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex justify-between items-center p-2 rounded-lg bg-primary/5 dark:bg-white/5 border border-primary/5 dark:border-white/5"
                      >
                        <span className="text-[10px] text-text-light dark:text-slate-400 font-bold uppercase tracking-wider">
                          {stat.label}
                        </span>
                        <span className="text-xs font-black text-primary dark:text-gold-light">
                          {stat.score}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Two Column Layout: Improvement Stories & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Improvement Stories (Left) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl md:text-2xl font-bold font-display text-text-primary dark:text-white mb-2 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-gold" />
              Remarkable Improvements
            </h3>
            <p className="text-xs md:text-sm text-text-light dark:text-slate-400 mb-6">
              Our unique teaching methodologies help weak students overcome learning roadblocks and unlock their potential.
            </p>

            <div className="space-y-4">
              {improvementStories.map((story, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  id={`improvement-story-${idx}`}
                  className="glass-card p-5 rounded-2xl border border-white/40 dark:border-white/5 flex items-center justify-between gap-4 group hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-gold/10 dark:bg-gold/5 text-gold flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm md:text-base text-text-primary dark:text-white font-display">
                        {story.name}
                      </h4>
                      <p className="text-xs text-text-light dark:text-slate-400 mt-0.5">
                        {story.subject} • <span className="font-semibold text-gold">{story.timeline}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="text-center">
                      <span className="block text-[9px] text-text-lighter dark:text-slate-500 uppercase tracking-widest font-bold">
                        Before
                      </span>
                      <span className="text-sm font-semibold text-text-light dark:text-slate-400 line-through">
                        {story.before}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gold" />
                    <div className="text-center bg-gold/10 dark:bg-gold/5 px-3 py-1.5 rounded-xl border border-gold/20">
                      <span className="block text-[9px] text-gold uppercase tracking-widest font-black">
                        After
                      </span>
                      <span className="text-base font-extrabold text-primary dark:text-gold-light">
                        {story.after}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline Milestones (Right) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl md:text-2xl font-bold font-display text-text-primary dark:text-white mb-2 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-gold" />
              Our Journey of Growth
            </h3>
            <p className="text-xs md:text-sm text-text-light dark:text-slate-400 mb-6">
              A history built on academic integrity, parent trust, and relentless student-focused coaching.
            </p>

            <div className="relative border-l border-primary/10 dark:border-white/10 ml-4 space-y-8 py-2">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  id={`milestone-${idx}`}
                  className="relative pl-8 group"
                >
                  {/* Circle marker */}
                  <div className="absolute left-0 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-dark border-4 border-gold shadow-md group-hover:scale-125 transition-transform" />

                  {/* Year Tag */}
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-primary text-white dark:bg-gold dark:text-primary mb-1">
                    {milestone.year}
                  </span>
                  
                  <h4 className="font-bold text-sm md:text-base text-text-primary dark:text-white font-display mt-1">
                    {milestone.title}
                  </h4>
                  <p className="text-xs text-text-light dark:text-slate-400 mt-1 leading-relaxed">
                    {milestone.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
