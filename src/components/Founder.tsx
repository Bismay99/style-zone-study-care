"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  GraduationCap,
  Users,
  Clock,
  MapPin,
  Heart,
  CheckCircle2,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";

const credentials = [
  "B.A. in English",
  "B.Ed Certified",
  "OTET: I & II",
  "CTET: II",
  "OSSTET",
  "CBSE Master Trainer",
];

const profileStats = [
  { icon: Users, value: "500+", label: "Students Guided" },
  { icon: Clock, value: "17+", label: "Years Experience" },
  { icon: MapPin, value: "3", label: "Study Zones" },
  { icon: Heart, value: "95%", label: "Parent Satisfaction" },
];

const experienceHighlights = [
  {
    icon: BookOpen,
    title: "Subject Mastery",
    description:
      "Deep expertise in English Language, Literature, and Social Science across CBSE, ICSE, and State Board curricula.",
  },
  {
    icon: GraduationCap,
    title: "Board Exam Specialist",
    description:
      "Proven track record of guiding students to 90%+ scores in board examinations through structured preparation.",
  },
  {
    icon: Sparkles,
    title: "Innovative Pedagogy",
    description:
      "Pioneers concept-based learning, storytelling techniques, and interactive classroom methods for lasting retention.",
  },
  {
    icon: Award,
    title: "Mentorship Excellence",
    description:
      "Personally mentors each student with customized study plans, progress tracking, and regular parent communication.",
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
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 90, damping: 16 },
  },
};

export default function Founder() {
  return (
    <section
      className="section bg-bg dark:bg-dark relative overflow-hidden"
      id="founder"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(244,180,0,0.06) 0%, transparent 65%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(10,35,66,0.05) 0%, transparent 65%)" }} />

      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Leadership
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-text-primary dark:text-white mt-5"
          >
            Meet Our{" "}
            <span className="text-primary dark:text-gold-light">
              Academic Director
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="section-divider mt-5"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Profile Card */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass-card p-8 rounded-3xl border border-white/50 dark:border-white/6 founder-card relative overflow-hidden">
              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/15 to-transparent rounded-bl-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/8 to-transparent rounded-tr-[60px] pointer-events-none" />
              {/* Gold top line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

              {/* Avatar */}
              <div className="flex justify-center mb-7 relative">
                <div className="relative">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-gold/40 to-gold-dark/20 blur-xl" />
                  {/* Ring */}
                  <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-gold via-gold-light to-gold-dark relative">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary via-secondary to-[#0e3168] flex items-center justify-center shadow-xl">
                      <span className="text-3xl font-black text-gold font-display tracking-wider select-none">
                        AN
                      </span>
                    </div>
                  </div>
                  {/* Award badge */}
                  <div className="absolute -bottom-1 -right-2 w-9 h-9 rounded-full bg-gold flex items-center justify-center shadow-lg border-2 border-white dark:border-dark">
                    <Star className="w-4 h-4 text-primary fill-current" />
                  </div>
                </div>
              </div>

              {/* Name & Title */}
              <div className="text-center mb-7">
                <h3 className="text-2xl font-black text-text-primary dark:text-white font-display tracking-tight">
                  Mrs. Anasuya Nayak
                </h3>
                <p className="text-sm font-bold text-gold mt-1.5 uppercase tracking-widest">
                  Founder &amp; Academic Director
                </p>
                <p className="text-xs text-text-light dark:text-slate-400 mt-2 font-medium">
                  17+ Years in English &amp; Social Science Education
                </p>
              </div>

              {/* Credentials */}
              <div className="space-y-2.5 mb-7">
                {credentials.map((cred, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-sm text-text-primary dark:text-slate-300 bg-primary/3 dark:bg-white/4 px-3.5 py-2.5 rounded-xl border border-primary/5 dark:border-white/5 hover:border-gold/20 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="font-semibold">{cred}</span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent my-6" />

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                {profileStats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={idx}
                      id={`founder-stat-${idx}`}
                      className="text-center p-4 rounded-2xl bg-gradient-to-b from-primary/6 to-primary/3 dark:from-white/6 dark:to-white/3 border border-primary/8 dark:border-white/6 hover:border-gold/25 transition-all hover:-translate-y-0.5 cursor-default"
                    >
                      <Icon className="w-4 h-4 text-gold mx-auto mb-2" />
                      <p className="text-xl font-black text-text-primary dark:text-white stat-counter-glow font-display">
                        {stat.value}
                      </p>
                      <p className="text-[10px] text-text-light dark:text-slate-400 uppercase tracking-wider font-bold mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Experience & Philosophy */}
          <motion.div
            className="lg:col-span-8 space-y-8"
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Bio */}
            <div className="glass-card p-7 rounded-3xl border border-white/40 dark:border-white/5">
              <h3 className="text-xl font-bold text-text-primary dark:text-white font-display mb-4 flex items-center gap-2.5">
                <span className="w-1.5 h-6 bg-gold rounded-full flex-shrink-0" />
                A Vision for Quality Education
              </h3>
              <p className="text-sm md:text-base text-text-light dark:text-slate-400 leading-[1.9]">
                A passionate educator dedicated to transforming academic
                outcomes through personalized coaching and innovative teaching
                methods. With a vision to make quality education accessible,
                Mrs. Nayak founded Style Zone Study Care to bridge the gap
                between classroom learning and board exam excellence. Her
                approach blends traditional academic rigor with modern,
                engaging pedagogical techniques.
              </p>
            </div>

            {/* Experience Highlights Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {experienceHighlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    id={`founder-highlight-${idx}`}
                    className="p-6 rounded-2xl bg-white dark:bg-dark-alt border border-primary/5 dark:border-white/5 shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-y-1.5 relative overflow-hidden cursor-default"
                    style={{ transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease" }}
                  >
                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-gold to-gold-dark rounded-l-2xl transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                    <div className="flex gap-4 items-start">
                      <div className="p-3 rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-primary transition-all duration-300 flex-shrink-0 shadow-sm">
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-text-primary dark:text-slate-100 font-display leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-xs text-text-light dark:text-slate-400 mt-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Teaching Philosophy Quote */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28 }}
              className="p-7 rounded-2xl bg-gradient-to-r from-primary to-secondary dark:from-secondary dark:to-primary text-white shadow-xl relative overflow-hidden border border-white/8"
            >
              <div className="absolute -right-10 -bottom-10 opacity-8">
                <Quote className="w-40 h-40 text-white/10" />
              </div>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
              <div className="relative z-10">
                <Quote className="w-9 h-9 text-gold/30 mb-4" />
                <p className="italic text-slate-100 text-sm md:text-base leading-[1.9] font-medium">
                  &ldquo;Our teaching methodology goes beyond exams. We
                  cultivate curiosity, linguistic finesse, and civic awareness
                  in every student — preparing them not just for boards, but
                  for life.&rdquo;
                </p>
                <div className="flex items-center gap-3.5 mt-5 pt-5 border-t border-white/10">
                  <div className="w-11 h-11 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-black text-gold">AN</span>
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-white">
                      Mrs. Anasuya Nayak
                    </span>
                    <span className="block text-[11px] text-gold uppercase tracking-widest font-bold mt-0.5">
                      Founder &amp; Academic Director
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
