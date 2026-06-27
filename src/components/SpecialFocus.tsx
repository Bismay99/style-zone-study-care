"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Globe, Check, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

interface Topic {
  name: string;
  desc: string;
}

interface ProgramDetails {
  boardName: string;
  badge: string;
  englishTitle: string;
  englishTopics: Topic[];
  englishBenefits: string[];
  sstTitle: string;
  sstTopics: Topic[];
  sstBenefits: string[];
}

const programs: Record<"cbse" | "icse" | "state", ProgramDetails> = {
  cbse: {
    boardName: "CBSE Program",
    badge: "Classes 6 - 10 (NCERT Aligned)",
    englishTitle: "CBSE English Language & Literature",
    englishTopics: [
      { name: "NCERT Prose & Poetry", desc: "Detailed chapter-wise summaries, theme analyses, and character sketches." },
      { name: "Grammar & Syntax", desc: "Tenses, modals, active/passive, reported speech, and error correction." },
      { name: "Creative Writing Skills", desc: "Formal letters, analytical paragraphs, diary entries, and story writing formats." },
      { name: "Reading Comprehension", desc: "Inference, vocabulary analysis, and high-speed passage scanning." },
    ],
    englishBenefits: [
      "Rigorous preparation using CBSE-specific marking schemes",
      "Regular answer presentation practice to secure full marks",
      "Focus on word limit and structural coherence in answers",
    ],
    sstTitle: "CBSE Social Science (History, Geo, Civ, Eco)",
    sstTopics: [
      { name: "NCERT History & Civics", desc: "Flowcharts for timelines, key historical movements, and constitutional studies." },
      { name: "Geography & Map Work", desc: "Pinpoint mapping of mineral sites, dams, airports, and geographic features." },
      { name: "Economic Foundations", desc: "Sectors of economy, money & credit, globalization, and development." },
      { name: "Mock Test Practice", desc: "Solving CBSE sample question papers under exam-simulated conditions." },
    ],
    sstBenefits: [
      "100% score target in map-pointing questions",
      "Elimination of rote learning through logical cause-and-effect charts",
      "Detailed notes covering every sub-heading in the NCERT textbooks",
    ],
  },
  icse: {
    boardName: "ICSE Program",
    badge: "Classes 6 - 10 (CISCE Curriculum)",
    englishTitle: "ICSE English Language & Literature",
    englishTopics: [
      { name: "Shakespearean Literature", desc: "Deep-dive analyses of acts, scenes, and dramatic monologues." },
      { name: "Advanced Composition", desc: "Descriptive, narrative, argumentative essays, notices, and email writing." },
      { name: "Functional Grammar", desc: "Prepositions, synthesis of sentences, transformation of sentences." },
      { name: "Poetic & Prose Analysis", desc: "Critical appreciation of poems, symbols, and underlying narratives." },
    ],
    englishBenefits: [
      "Specialized training in English language structure and essays",
      "Exhaustive reading of literature texts for direct quotes in board answers",
      "Strict feedback loops matching ICSE Board guidelines",
    ],
    sstTitle: "ICSE History, Civics & Geography",
    sstTopics: [
      { name: "Civics & Legislature", desc: "Union Parliament, Executive, and Judiciary functions in detail." },
      { name: "Modern World History", desc: "World wars, rise of dictators, United Nations, and Non-Aligned Movement." },
      { name: "Topographical Maps", desc: "Decoding 4-figure/6-figure grid references, contours, and conventional signs." },
      { name: "Indian Geography", desc: "Soil types, water resources, agriculture, minerals, and industries." },
    ],
    sstBenefits: [
      "Specialized mastery in Topographical map reading",
      "Detailed structured timeline of Indian National Movement",
      "Comprehensive chapter-wise question banks for history revision",
    ],
  },
  state: {
    boardName: "State Board Program",
    badge: "Classes 6 - 10 (State Syllabus)",
    englishTitle: "State Board English Foundation",
    englishTopics: [
      { name: "Bilingual Translation", desc: "Strengthening translations, sentence construction, and vocabulary." },
      { name: "Core Grammar & Usage", desc: "Parts of speech, sentence types, voice change, and direct/indirect speech." },
      { name: "Guided Composition", desc: "Paragraph writing, letter writing, translation skills, and summary drafting." },
      { name: "Textbook Comprehension", desc: "Chapter analysis, question-answers, and pronunciation practice." },
    ],
    englishBenefits: [
      "Strong emphasis on building a vocabulary of common and academic words",
      "Step-by-step grammatical foundation for non-English medium students",
      "Intensive practice for state board model question patterns",
    ],
    sstTitle: "State Board Social Studies",
    sstTopics: [
      { name: "State History & Geography", desc: "Regional freedom struggles, resource mapping, and local climate studies." },
      { name: "National Civics", desc: "Local self-government, state assembly, rights, and duties." },
      { name: "Map Plotting", desc: "State and national borders, capitals, rivers, and historical sites." },
      { name: "Chapter-wise Tests", desc: "Continuous chapter reviews to solidify key facts and definitions." },
    ],
    sstBenefits: [
      "Simplified notes with simplified vocabulary for quick recall",
      "Focus on scoring well in objective and short-answer segments",
      "Map practice tailored specifically to state board syllabus",
    ],
  },
};

interface SpecialFocusProps {
  onBookDemo: () => void;
}

export default function SpecialFocus({ onBookDemo }: SpecialFocusProps) {
  const [activeTab, setActiveTab] = useState<"cbse" | "icse" | "state">("cbse");
  const activeProgram = programs[activeTab];

  return (
    <section className="section bg-white dark:bg-dark relative overflow-hidden" id="special-focus">
      {/* Decorative radial glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20 dark:bg-gold/5 dark:text-gold-light">
            Board-Specific Coaching
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-text-primary dark:text-white mt-4">
            Our Custom <span className="text-primary dark:text-gold-light">Curricula</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="text-text-light dark:text-slate-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            We offer targeted coaching for CBSE, ICSE, and State Board students. Switch tabs below to see syllabus focus and outcomes.
          </p>
        </div>

        {/* Tab Switcher Buttons */}
        <div className="flex justify-center border-b border-black/10 dark:border-white/10 max-w-lg mx-auto mb-12">
          {(Object.keys(programs) as Array<keyof typeof programs>).map((tabKey) => (
            <button
              key={tabKey}
              id={`board-tab-${tabKey}`}
              onClick={() => setActiveTab(tabKey)}
              className={`flex-1 py-4 text-xs md:text-sm font-bold uppercase tracking-wider text-center border-b-2 transition-all cursor-pointer ${
                activeTab === tabKey
                  ? "border-gold text-primary dark:text-gold-light font-black"
                  : "border-transparent text-text-light hover:text-primary dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              {programs[tabKey].boardName}
            </button>
          ))}
        </div>

        {/* Tab Contents with Transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
          >
            {/* English Card */}
            <div className="glass-card p-8 rounded-3xl border border-white/40 dark:border-white/5 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-full pointer-events-none" />
              <div>
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gold/10 text-gold rounded-2xl group-hover:bg-gold group-hover:text-primary transition-all duration-300">
                    <BookOpen className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gold uppercase tracking-wider font-extrabold block">
                      {activeProgram.badge}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-text-primary dark:text-white font-display mt-0.5 leading-tight">
                      {activeProgram.englishTitle}
                    </h3>
                  </div>
                </div>

                {/* Topics */}
                <h4 className="text-xs font-black uppercase text-text-lighter dark:text-slate-400 tracking-wider mb-4 border-b border-primary/5 pb-2">
                  Syllabus Focus
                </h4>
                <div className="space-y-4 mb-8">
                  {activeProgram.englishTopics.map((topic, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 p-0.5 rounded-full bg-gold/10 text-gold flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <div>
                        <span className="block font-bold text-sm text-text-primary dark:text-slate-200">
                          {topic.name}
                        </span>
                        <span className="block text-xs text-text-light dark:text-slate-400 mt-0.5">
                          {topic.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div className="pt-6 border-t border-black/5 dark:border-white/5">
                <h4 className="text-xs font-black uppercase text-text-lighter dark:text-slate-400 tracking-wider mb-3">
                  Expected Learning Outcomes
                </h4>
                <ul className="space-y-2 mb-6">
                  {activeProgram.englishBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs text-text-primary dark:text-slate-300">
                      <Sparkles className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onBookDemo}
                  className="w-full py-3.5 bg-primary hover:bg-secondary text-gold border border-gold/20 font-black rounded-xl text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book Demo Class</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Social Science Card */}
            <div className="glass-card p-8 rounded-3xl border border-white/40 dark:border-white/5 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 dark:bg-white/5 rounded-bl-full pointer-events-none" />
              <div>
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 dark:bg-white/10 text-primary dark:text-gold-light rounded-2xl group-hover:bg-primary dark:group-hover:bg-gold group-hover:text-gold dark:group-hover:text-primary transition-all duration-300">
                    <Globe className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gold uppercase tracking-wider font-extrabold block">
                      {activeProgram.badge}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-text-primary dark:text-white font-display mt-0.5 leading-tight">
                      {activeProgram.sstTitle}
                    </h3>
                  </div>
                </div>

                {/* Topics */}
                <h4 className="text-xs font-black uppercase text-text-lighter dark:text-slate-400 tracking-wider mb-4 border-b border-primary/5 pb-2">
                  Syllabus Focus
                </h4>
                <div className="space-y-4 mb-8">
                  {activeProgram.sstTopics.map((topic, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 p-0.5 rounded-full bg-gold/10 text-gold flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <div>
                        <span className="block font-bold text-sm text-text-primary dark:text-slate-200">
                          {topic.name}
                        </span>
                        <span className="block text-xs text-text-light dark:text-slate-400 mt-0.5">
                          {topic.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div className="pt-6 border-t border-black/5 dark:border-white/5">
                <h4 className="text-xs font-black uppercase text-text-lighter dark:text-slate-400 tracking-wider mb-3">
                  Expected Learning Outcomes
                </h4>
                <ul className="space-y-2 mb-6">
                  {activeProgram.sstBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs text-text-primary dark:text-slate-300">
                      <Sparkles className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onBookDemo}
                  className="w-full py-3.5 bg-primary hover:bg-secondary text-gold border border-gold/20 font-black rounded-xl text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book Demo Class</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
