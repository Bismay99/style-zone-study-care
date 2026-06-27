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
} from "lucide-react";

const credentials = [
  "B.A. in English",
  "B.Ed Certified",
  "OTET:-I,II",
  "CTET:-II",
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
    transition: { staggerChildren: 0.12 },
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

export default function Founder() {
  return (
    <section
      className="section bg-bg dark:bg-dark relative overflow-hidden"
      id="founder"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20 dark:bg-gold/5 dark:text-gold-light"
          >
            Leadership
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-text-primary dark:text-white mt-4"
          >
            Meet Our{" "}
            <span className="text-primary dark:text-gold-light">
              Academic Director
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Profile Card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 rounded-3xl border border-white/40 dark:border-white/5 shadow-xl relative overflow-hidden">
              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-gold/10 rounded-bl-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary/10 rounded-tr-full pointer-events-none" />

              {/* Avatar */}
              <div className="flex justify-center mb-6 relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-secondary to-gold flex items-center justify-center shadow-2xl ring-4 ring-gold/20">
                  <span className="text-4xl font-black text-white font-display tracking-wider">
                    AN
                  </span>
                </div>
              </div>

              {/* Name & Title */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-black text-text-primary dark:text-white font-display">
                  Mrs. Anasuya Nayak
                </h3>
                <p className="text-sm font-bold text-gold mt-1 uppercase tracking-wider">
                  Founder & Academic Director
                </p>
                <p className="text-xs text-text-light dark:text-slate-400 mt-2">
                  17+ Years in English & Social Science Education
                </p>
              </div>

              {/* Credentials */}
              <div className="space-y-2 mb-6">
                {credentials.map((cred, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-sm text-text-primary dark:text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent my-6" />

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {profileStats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={idx}
                      id={`founder-stat-${idx}`}
                      className="text-center p-3 rounded-xl bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/5"
                    >
                      <Icon className="w-4 h-4 text-gold mx-auto mb-1" />
                      <p className="text-lg font-extrabold text-text-primary dark:text-white">
                        {stat.value}
                      </p>
                      <p className="text-[10px] text-text-light dark:text-slate-400 uppercase tracking-wider font-semibold">
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
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Bio */}
            <div>
              <h3 className="text-xl font-bold text-text-primary dark:text-white font-display mb-3">
                A Vision for Quality Education
              </h3>
              <p className="text-sm md:text-base text-text-light dark:text-slate-400 leading-relaxed">
                A passionate educator dedicated to transforming academic
                outcomes through personalized coaching and innovative teaching
                methods. With a vision to make quality education accessible, Mr.
                Sahoo founded Style Zone Study Care to bridge the gap between
                classroom learning and exam excellence.
              </p>
            </div>

            {/* Experience Highlights Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
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
                    className="p-5 rounded-2xl bg-white dark:bg-dark-alt border border-primary/5 dark:border-white/5 shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 relative"
                  >
                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-gold rounded-l-2xl transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                    <div className="flex gap-4 items-start">
                      <div className="p-3 rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-primary transition-all duration-300 flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-text-primary dark:text-slate-200 font-display">
                          {item.title}
                        </h4>
                        <p className="text-xs text-text-light dark:text-slate-400 mt-1.5 leading-relaxed">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-gradient-to-r from-primary to-secondary dark:from-secondary dark:to-primary text-white shadow-xl relative overflow-hidden"
            >
              <div className="absolute -right-8 -bottom-8 opacity-10">
                <Quote className="w-36 h-36" />
              </div>
              <div className="relative z-10">
                <Quote className="w-8 h-8 text-gold/40 mb-3" />
                <p className="italic text-slate-200 text-sm md:text-base leading-relaxed">
                  &ldquo;Our teaching methodology goes beyond exams. We
                  cultivate curiosity, linguistic finesse, and civic awareness in
                  every student.&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-gold">AN</span>
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-white">
                      Mrs. Anasuya Nayak
                    </span>
                    <span className="block text-xs text-gold uppercase tracking-wider font-semibold">
                      Founder & Academic Director
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
