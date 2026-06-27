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
    review: "Learning Social Science here was so fun! We didn't just memorise answers; we understood the history timelines and map systems using flowcharts. My English writing skills improved a lot too.",
    authorSub: "Scored 96% in SST & 94% in English",
  },
  {
    id: 5,
    name: "Pratikshya Parida",
    role: "Student",
    className: "Class 10 (CBSE)",
    rating: 5,
    review: "The grammar worksheets and intensive board revision papers helped me secure an A1 Grade in English. The atmosphere is very competitive and motivating, forcing us to push our limits.",
    authorSub: "Secured English A1 Grade",
  },
];

export default function Testimonials() {
  const [filter, setFilter] = useState<"all" | "parent" | "student">("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const filteredTestimonials = testimonialsData.filter(
    (t) => filter === "all" || t.role.toLowerCase() === filter
  );

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (isPlaying && filteredTestimonials.length > 0) {
      timeoutRef.current = setTimeout(
        () =>
          setCurrentIndex((prevIndex) =>
            prevIndex === filteredTestimonials.length - 1 ? 0 : prevIndex + 1
          ),
        6000
      );
    }
    return () => {
      resetTimeout();
    };
  }, [currentIndex, isPlaying, filter, filteredTestimonials.length]);

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === filteredTestimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1));
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const activeTestimonial = filteredTestimonials[currentIndex] || testimonialsData[0];

  return (
    <section className="section bg-bg-alt dark:bg-dark-alt relative overflow-hidden" id="testimonials">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20 dark:bg-gold/5 dark:text-gold-light">
            Success & Feedback
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-text-primary dark:text-white mt-4">
            What <span className="text-primary dark:text-gold-light">Our Community</span> Says
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="text-text-light dark:text-slate-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Read stories of transformation, academic improvements, and board results directly from parents and students.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-10">
          {(["all", "parent", "student"] as const).map((role) => (
            <button
              key={role}
              id={`testimonial-filter-${role}`}
              onClick={() => setFilter(role)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer flex items-center gap-1.5 ${
                filter === role
                  ? "bg-primary text-white border-primary dark:bg-gold dark:text-primary dark:border-gold shadow-md"
                  : "bg-white/50 backdrop-blur-sm border-black/10 text-text-light hover:border-gold hover:text-gold dark:bg-white/5 dark:border-white/5 dark:text-slate-300 dark:hover:border-gold-light dark:hover:text-gold-light"
              }`}
            >
              {role === "all" ? (
                <>
                  <Users className="w-3.5 h-3.5" />
                  <span>Show All</span>
                </>
              ) : role === "parent" ? (
                <>
                  <Users className="w-3.5 h-3.5" />
                  <span>Parents</span>
                </>
              ) : (
                <>
                  <User className="w-3.5 h-3.5" />
                  <span>Students</span>
                </>
              )}
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto">
          {filteredTestimonials.length > 0 ? (
            <div className="relative min-h-[380px] sm:min-h-[300px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${filter}-${currentIndex}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  id="active-testimonial-card"
                  className="w-full glass-card p-8 md:p-12 rounded-3xl border border-white/40 dark:border-white/5 shadow-2xl relative flex flex-col justify-between"
                >
                  {/* Decorative background quotes icon */}
                  <div className="absolute top-6 right-8 text-primary/5 dark:text-white/5 pointer-events-none">
                    <Quote className="w-24 h-24 stroke-[1.5] rotate-180" />
                  </div>

                  <div>
                    {/* Star Rating */}
                    <div className="flex items-center gap-1 text-gold mb-6">
                      {[...Array(activeTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-base md:text-xl font-display text-text-primary dark:text-slate-200 leading-relaxed italic mb-8 relative z-10">
                      &ldquo;{activeTestimonial.review}&rdquo;
                    </p>
                  </div>

                  {/* Author Meta */}
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-black/5 dark:border-white/5">
                    <div>
                      <h4 className="font-extrabold text-base md:text-lg text-text-primary dark:text-white font-display">
                        {activeTestimonial.name}
                      </h4>
                      <p className="text-xs text-text-light dark:text-slate-400 mt-1 font-semibold">
                        {activeTestimonial.authorSub}
                      </p>
                    </div>

                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-gold/10 text-gold border border-gold/20 dark:bg-gold/5 dark:text-gold-light">
                      {activeTestimonial.role} · {activeTestimonial.className}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-20 bg-white/20 dark:bg-white/5 rounded-3xl border border-dashed border-black/10 dark:border-white/10">
              <p className="text-text-light dark:text-slate-400 font-medium">No reviews found in this category.</p>
            </div>
          )}

          {/* Carousel Controls */}
          {filteredTestimonials.length > 1 && (
            <div className="flex items-center justify-center gap-6 mt-8">
              {/* Prev Button */}
              <button
                id="prev-testimonial-btn"
                onClick={prevSlide}
                className="w-11 h-11 rounded-xl flex items-center justify-center bg-white dark:bg-dark-alt text-primary dark:text-white hover:text-gold dark:hover:text-gold-light hover:border-gold dark:hover:border-gold border border-black/10 dark:border-white/10 hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
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
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                      index === currentIndex ? "w-6 bg-gold" : "w-2.5 bg-black/10 dark:bg-white/10 hover:bg-gold/40"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Play/Pause Button */}
              <button
                id="play-pause-btn"
                onClick={togglePlayback}
                className="w-11 h-11 rounded-xl flex items-center justify-center bg-white dark:bg-dark-alt text-primary dark:text-white hover:text-gold dark:hover:text-gold-light hover:border-gold dark:hover:border-gold border border-black/10 dark:border-white/10 hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
                aria-label={isPlaying ? "Pause auto-rotation" : "Start auto-rotation"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              {/* Next Button */}
              <button
                id="next-testimonial-btn"
                onClick={nextSlide}
                className="w-11 h-11 rounded-xl flex items-center justify-center bg-white dark:bg-dark-alt text-primary dark:text-white hover:text-gold dark:hover:text-gold-light hover:border-gold dark:hover:border-gold border border-black/10 dark:border-white/10 hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
