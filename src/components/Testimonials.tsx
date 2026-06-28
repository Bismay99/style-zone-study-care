"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, Play, Pause, Users, User } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: "Parent" | "Student";
  className: string;
  rating: number;
  review: string;
  authorSub: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Minati Mohapatra",
    role: "Parent",
    className: "Class 10 (CBSE)",
    rating: 5,
    review: "My child has improved tremendously in English and Social Science. The personal attention is what makes Style Zone outstanding. The teachers identify individual learning gaps and address them patiently.",
    authorSub: "Mother of Aditya Sahoo",
  },
  {
    id: 2,
    name: "Subhashree Satpathy",
    role: "Parent",
    className: "Class 9 (ICSE)",
    rating: 5,
    review: "As parents, we appreciate the structural updates. The regular tests and transparent reporting give us absolute peace of mind. Homework checking is strict, which has brought much-needed discipline.",
    authorSub: "Mother of Shreyansh Satpathy",
  },
  {
    id: 3,
    name: "Rajesh Kumar Jena",
    role: "Parent",
    className: "Class 8 (State Board)",
    rating: 5,
    review: "The worksheets provided by Style Zone are of outstanding quality. They cover all textbook questions plus extra practice exercises that prepare students thoroughly for exams. Excellent service!",
    authorSub: "Father of Tapaswini Jena",
  },
  {
    id: 4,
    name: "Ayushman Panda",
    role: "Student",
    className: "Class 10 (CBSE)",
    rating: 5,
    review: "Learning Social Science here was so enjoyable! We didn't just memorise answers; we understood history timelines and map systems using flowcharts. My English writing skills improved tremendously too.",
    authorSub: "Scored 96% in SST & 94% in English",
  },
  {
    id: 5,
    name: "Pratikshya Parida",
    role: "Student",
    className: "Class 10 (CBSE)",
    rating: 5,
    review: "The grammar worksheets and intensive board revision papers helped me secure an A1 Grade in English. The atmosphere is very competitive and motivating, pushing us to give our very best.",
    authorSub: "Secured English A1 Grade",
  },
];

const AUTO_SLIDE_DURATION = 6000;

export default function Testimonials() {
  const [filter, setFilter] = useState<"all" | "parent" | "student">("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progressKey, setProgressKey] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const filteredTestimonials = testimonialsData.filter(
    (t) => filter === "all" || t.role.toLowerCase() === filter
  );

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === filteredTestimonials.length - 1 ? 0 : prev + 1
    );
    setProgressKey((k) => k + 1);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1
    );
    setProgressKey((k) => k + 1);
  };

  useEffect(() => {
    resetTimeout();
    if (isPlaying && filteredTestimonials.length > 1) {
      timeoutRef.current = setTimeout(goToNext, AUTO_SLIDE_DURATION);
    }
    return resetTimeout;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isPlaying, filter, filteredTestimonials.length]);

  useEffect(() => {
    setCurrentIndex(0);
    setProgressKey((k) => k + 1);
  }, [filter]);

  const togglePlayback = () => {
    setIsPlaying((p) => !p);
    setProgressKey((k) => k + 1);
  };

  const activeTestimonial = filteredTestimonials[currentIndex] || testimonialsData[0];

  return (
    <section className="section bg-bg-alt dark:bg-dark-alt relative overflow-hidden" id="testimonials">
      {/* Decorative backgrounds */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(244,180,0,0.05) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(10,35,66,0.05) 0%, transparent 70%)" }} />

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Success &amp; Feedback
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-text-primary dark:text-white mt-5"
          >
            What{" "}
            <span className="text-primary dark:text-gold-light">Our Community</span>{" "}
            Says
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
            Read stories of transformation, academic improvements, and board results directly from parents and students.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12">
          {(["all", "parent", "student"] as const).map((role) => (
            <button
              key={role}
              id={`testimonial-filter-${role}`}
              onClick={() => setFilter(role)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer flex items-center gap-2 ${
                filter === role
                  ? "bg-primary text-white border-primary dark:bg-gold dark:text-primary dark:border-gold shadow-lg"
                  : "bg-white/60 backdrop-blur-sm border-black/10 text-text-light hover:border-gold hover:text-gold dark:bg-white/5 dark:border-white/8 dark:text-slate-300 dark:hover:border-gold-light dark:hover:text-gold-light"
              }`}
            >
              {role === "student" ? (
                <User className="w-3.5 h-3.5" />
              ) : (
                <Users className="w-3.5 h-3.5" />
              )}
              <span>{role === "all" ? "Show All" : role === "parent" ? "Parents" : "Students"}</span>
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto">
          {filteredTestimonials.length > 0 ? (
            <div className="relative min-h-[360px] sm:min-h-[310px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${filter}-${currentIndex}`}
                  initial={{ opacity: 0, x: 60, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -60, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 130, damping: 22 }}
                  id="active-testimonial-card"
                  className="w-full glass-card p-9 md:p-12 rounded-3xl border border-white/50 dark:border-white/6 shadow-2xl relative flex flex-col justify-between overflow-hidden"
                >
                  {/* Background giant quote */}
                  <div className="absolute top-4 right-6 text-primary/4 dark:text-white/4 pointer-events-none select-none">
                    <Quote className="w-28 h-28 stroke-[1.2] rotate-180" />
                  </div>

                  {/* Gold top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

                  <div className="relative z-10">
                    {/* Star Rating */}
                    <div className="flex items-center gap-1 text-gold mb-6">
                      {[...Array(activeTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-base md:text-xl font-display text-text-primary dark:text-slate-100 leading-[1.85] italic relative z-10">
                      &ldquo;{activeTestimonial.review}&rdquo;
                    </p>
                  </div>

                  {/* Author Meta */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-black/6 dark:border-white/6 relative z-10">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-black text-sm flex-shrink-0 shadow-md">
                        {activeTestimonial.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <h4 className="font-extrabold text-base text-text-primary dark:text-white font-display leading-tight">
                          {activeTestimonial.name}
                        </h4>
                        <p className="text-xs text-text-light dark:text-slate-400 mt-0.5 font-semibold">
                          {activeTestimonial.authorSub}
                        </p>
                      </div>
                    </div>

                    <span className="px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-gold/10 text-gold border border-gold/20 dark:bg-gold/6 dark:text-gold-light flex-shrink-0 ml-3">
                      {activeTestimonial.role} · {activeTestimonial.className}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-20 bg-white/30 dark:bg-white/5 rounded-3xl border border-dashed border-black/10 dark:border-white/10">
              <p className="text-text-light dark:text-slate-400 font-medium">No reviews found in this category.</p>
            </div>
          )}

          {/* Carousel Controls */}
          {filteredTestimonials.length > 1 && (
            <div className="mt-8 space-y-5">
              {/* Progress bar auto-slide indicator */}
              {isPlaying && (
                <div className="testimonial-progress max-w-xs mx-auto">
                  <motion.div
                    key={progressKey}
                    className="testimonial-progress-bar h-full"
                    initial={{ scaleX: 0, transformOrigin: "left" }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: AUTO_SLIDE_DURATION / 1000, ease: "linear" }}
                  />
                </div>
              )}

              {/* Controls row */}
              <div className="flex items-center justify-center gap-4">
                {/* Prev Button */}
                <button
                  id="prev-testimonial-btn"
                  onClick={goToPrev}
                  className="w-11 h-11 rounded-xl flex items-center justify-center bg-white dark:bg-dark-alt text-primary dark:text-white hover:text-gold dark:hover:text-gold-light hover:border-gold dark:hover:border-gold border border-black/10 dark:border-white/10 hover:scale-105 hover:shadow-md active:scale-95 transition-all shadow-sm cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Indicator Dots */}
                <div className="flex items-center gap-2">
                  {filteredTestimonials.map((_, index) => (
                    <button
                      key={index}
                      id={`dot-btn-${index}`}
                      onClick={() => {
                        setCurrentIndex(index);
                        setProgressKey((k) => k + 1);
                      }}
                      className={`rounded-full cursor-pointer transition-all duration-350 ${
                        index === currentIndex
                          ? "w-7 h-3 bg-gold shadow-sm"
                          : "w-3 h-3 bg-black/12 dark:bg-white/12 hover:bg-gold/40"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Play/Pause Button */}
                <button
                  id="play-pause-btn"
                  onClick={togglePlayback}
                  className="w-11 h-11 rounded-xl flex items-center justify-center bg-white dark:bg-dark-alt text-primary dark:text-white hover:text-gold dark:hover:text-gold-light hover:border-gold dark:hover:border-gold border border-black/10 dark:border-white/10 hover:scale-105 hover:shadow-md active:scale-95 transition-all shadow-sm cursor-pointer"
                  aria-label={isPlaying ? "Pause auto-rotation" : "Start auto-rotation"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>

                {/* Next Button */}
                <button
                  id="next-testimonial-btn"
                  onClick={goToNext}
                  className="w-11 h-11 rounded-xl flex items-center justify-center bg-white dark:bg-dark-alt text-primary dark:text-white hover:text-gold dark:hover:text-gold-light hover:border-gold dark:hover:border-gold border border-black/10 dark:border-white/10 hover:scale-105 hover:shadow-md active:scale-95 transition-all shadow-sm cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
