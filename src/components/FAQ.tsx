"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageSquare, PhoneCall } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "curriculum" | "materials" | "support";
}

const faqData: FAQItem[] = [
  {
    id: "faq-1",
    category: "curriculum",
    question: "Which classes do you teach and for which boards?",
    answer: "We offer comprehensive coaching for Classes 6, 7, 8, 9, and 10. Our programs are designed to cover CBSE, ICSE, and various State Board curricula in detail, focusing specifically on English literature, language/grammar, and Social Science subjects (History, Civics, Geography, and Economics)."
  },
  {
    id: "faq-2",
    category: "materials",
    question: "Do you provide custom study materials?",
    answer: "Yes, absolutely! We provide premium, proprietary study materials for all enrolled students. This includes printed chapter-wise study notes, target question banks, active recall worksheets, grammar checklists, and historical timeline sheets. Students do not need to purchase external guides."
  },
  {
    id: "faq-3",
    category: "materials",
    question: "Are regular tests and assessments conducted?",
    answer: "Testing is central to our success strategy. We conduct weekly short tests (15-20 mins) to assess immediate retention, comprehensive monthly tests on completion of chapters, and full-syllabus mock tests resembling board formats before final school examinations. Detailed report cards are sent to parents regularly."
  },
  {
    id: "faq-4",
    category: "support",
    question: "Is personal attention given to weak students?",
    answer: "Yes. To guarantee personal attention, we strictly limit our batches to a maximum of 15 students. This allows the teacher to review homework daily, understand individual student bottlenecks, monitor progress, and tailor explanations to their learning speed."
  },
  {
    id: "faq-5",
    category: "support",
    question: "Do you provide dedicated doubt clearing sessions?",
    answer: "Yes. Students can request one-on-one doubt resolution. Teachers are available 30 minutes before class and 30 minutes after class specifically for doubt clearing. We also conduct dedicated remedial workshops on weekends for students struggling with difficult topics."
  },
  {
    id: "faq-6",
    category: "support",
    question: "How can I enroll my child at Style Zone Study Care?",
    answer: "Enrollment is easy. You can book a free counselling session followed by a 2-day free demo class. Once you are satisfied with the teaching quality, you can finalize the admission by completing registration forms at your nearest branch."
  },
  {
    id: "faq-7",
    category: "support",
    question: "Do you offer any discounts for siblings?",
    answer: "Yes, we support our community by offering a 10% discount on monthly tuition fees for sibling enrollments. Please discuss sibling details with the branch coordinator during registration."
  },
  {
    id: "faq-8",
    category: "curriculum",
    question: "Are classes held on Sundays or weekends?",
    answer: "Regular batch classes run from Monday to Saturday. Sundays are reserved for special doubt-clearing sessions, board exam prep workshops, and monthly mock test series."
  }
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>("faq-1");
  const [activeCategory, setActiveCategory] = useState<"all" | "curriculum" | "materials" | "support">("all");

  const filteredFaqs = faqData.filter(
    (faq) => activeCategory === "all" || faq.category === activeCategory
  );

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Construct JSON-LD FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="section bg-bg-alt dark:bg-dark-alt text-text-primary dark:text-text-light transition-colors duration-300 relative" id="faq">
      {/* FAQ Schema Injector */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container px-4 sm:px-6 lg:px-8">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading and Support Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <span className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20 dark:bg-gold/5 dark:text-gold-light inline-block">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight font-display text-text-primary dark:text-white">
              Frequently Asked <span className="text-primary dark:text-gold-light">Questions</span>
            </h2>
            <p className="text-text-light dark:text-slate-400 mb-8 leading-relaxed text-sm md:text-base">
              Find answers to common queries about our courses, study materials, testing policies, and enrollment guidelines. Can&apos;t find what you need? Talk to us.
            </p>

            {/* Counsel Card */}
            <div className="glass-card p-6 rounded-3xl border border-black/10 dark:border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-full blur-[40px] pointer-events-none" />
              
              <div className="flex gap-4 items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <HelpCircle className="text-gold w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-text-primary dark:text-white">Still have queries?</h4>
                  <p className="text-xs text-text-light dark:text-slate-400 mt-0.5">
                    Our coordinators are happy to assist you.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  id="faq-call-btn"
                  href="tel:+919668580583"
                  className="btn-primary w-full justify-center text-xs md:text-sm py-3 px-4 font-bold rounded-xl"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call: 9668580583</span>
                </a>
                <a
                  id="faq-whatsapp-btn"
                  href="https://wa.me/919668580583?text=Hi!%20I%20have%20some%20questions%20regarding%20Style%20Zone%20Study%20Care%20courses."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center text-xs md:text-sm py-3 px-4 font-bold rounded-xl"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Filter & Accordion */}
          <div className="lg:col-span-7">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {(["all", "curriculum", "materials", "support"] as const).map((cat) => (
                <button
                  key={cat}
                  id={`filter-faq-${cat}`}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border cursor-pointer ${
                    activeCategory === cat
                      ? "bg-primary text-white border-primary dark:bg-gold dark:text-primary dark:border-gold shadow-md"
                      : "bg-white/50 backdrop-blur-sm border-black/10 text-text-light hover:border-gold hover:text-gold dark:bg-white/5 dark:border-white/5 dark:text-slate-300 dark:hover:border-gold-light dark:hover:text-gold-light"
                  }`}
                >
                  {cat === "all" ? "All FAQs" : cat === "curriculum" ? "Curriculum" : cat === "materials" ? "Testing & Notes" : "Attention"}
                </button>
              ))}
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
              <AnimatePresence initial={false}>
                {filteredFaqs.map((faq) => {
                  const isExpanded = expandedId === faq.id;

                  return (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="glass-card rounded-2xl border border-black/10 dark:border-white/5 overflow-hidden"
                    >
                      <button
                        id={`faq-btn-${faq.id}`}
                        onClick={() => toggleAccordion(faq.id)}
                        className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer transition-all hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
                        aria-expanded={isExpanded}
                      >
                        <span className="font-extrabold text-sm md:text-base text-primary dark:text-white pr-4">
                          {faq.question}
                        </span>
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isExpanded 
                            ? "bg-gold text-primary rotate-180" 
                            : "bg-primary/5 dark:bg-white/5 text-primary dark:text-gold"
                        }`}>
                          {isExpanded ? (
                            <Minus className="w-4 h-4" />
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-5 pb-6 md:px-6 md:pb-6 border-t border-black/5 dark:border-white/5 pt-4">
                              <p className="text-xs md:text-sm leading-relaxed text-text-light dark:text-slate-400">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {filteredFaqs.length === 0 && (
                <div className="text-center py-12 bg-white/50 dark:bg-dark-alt/50 rounded-2xl border border-dashed border-black/10 dark:border-white/10">
                  <p className="text-text-light">No FAQs match your search category.</p>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
