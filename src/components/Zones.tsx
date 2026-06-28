"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  CheckCircle2,
  Phone,
  MessageCircle,
  Sparkles,
  Clock,
  Map,
  Compass,
  Lock,
  Bell,
} from "lucide-react";

interface Feature {
  title: string;
  desc: string;
}

interface Zone {
  id: string;
  number: string;
  name: string;
  slogan: string;
  shortDesc: string;
  address: string;
  phone: string;
  whatsappMsg: string;
  image: string;
  googleMapUrl: string;
  features: Feature[];
  batchTimings: string[];
  color: string;
  comingSoon?: boolean;
}

const zonesData: Zone[] = [
  {
    id: "zone-01",
    number: "01",
    name: "Pakharchhak",
    slogan: "Strong Foundation, Bright Future",
    shortDesc:
      "Our primary campus focusing on building conceptual clarity and self-discipline from ground up. Best suited for students seeking comprehensive preparation with daily progress tracking.",
    address: "Style Zone Building, Near Main Square, Pakharchhak",
    phone: "9668580583",
    whatsappMsg:
      "Hi, I am interested in enrolling at the Pakharchhak Branch (Zone 01). Please share batch details.",
    image: "/images/classroom-1.png",
    googleMapUrl: "https://maps.app.goo.gl/NLcBUpsfXTLuD2xs7",
    features: [
      {
        title: "Foundation Building",
        desc: "Core focus on grammar, vocabulary, reading comprehension & social science basics.",
      },
      {
        title: "Daily Homework Check",
        desc: "Strict tracking of everyday tasks to build persistent study habits.",
      },
      {
        title: "Regular PTMs",
        desc: "Frequent Parent-Teacher meetings to communicate growth and align guidance.",
      },
      {
        title: "Smart Study Material",
        desc: "Handcrafted comprehensive worksheets, study planners, and question banks.",
      },
      {
        title: "Safety Monitored",
        desc: "CCTV-secured classrooms for a 100% safe and focused environment.",
      },
      {
        title: "Modern Study Lounge",
        desc: "Access to a silent reading area after regular class hours.",
      },
    ],
    batchTimings: [
      "Class 6 & 7: 4:00 PM - 5:30 PM (Mon, Wed, Fri)",
      "Class 8 & 9: 5:30 PM - 7:00 PM (Mon, Wed, Fri)",
      "Class 10 (Board Batch): 7:00 PM - 8:30 PM (Mon to Sat)",
    ],
    color: "from-blue-600 to-indigo-700",
  },
  {
    id: "zone-02",
    number: "02",
    name: "Treasury Colony",
    slogan: "Discipline Today, Success Tomorrow",
    shortDesc:
      "Designed to instill academic rigor and structure. Equipped with silent zones and specialized study kits to prepare students for top-tier board performance.",
    address: "Plot No. 42B, Behind State Treasury, Treasury Colony",
    phone: "9668580583",
    whatsappMsg:
      "Hi, I am interested in enrolling at the Treasury Colony Branch (Zone 02). Please share batch details.",
    image: "/images/classroom-2.png",
    googleMapUrl:
      "https://maps.google.com/?q=Treasury+Colony+Style+Zone+Study+Care",
    features: [
      {
        title: "Rigorous Test Series",
        desc: "Weekly chapter tests and bi-weekly board-pattern mock examinations.",
      },
      {
        title: "Answer Writing Workshops",
        desc: "Special sessions teaching presentation styles to maximize marks.",
      },
      {
        title: "Individual Cubicles",
        desc: "Silent self-study booths available for students during daytime.",
      },
      {
        title: "Progress Tracker Board",
        desc: "Visual charts to motivate students by tracking score improvements.",
      },
      {
        title: "Remedial Batches",
        desc: "Separate sessions for subjects where students require extra support.",
      },
      {
        title: "Digital Projector Classes",
        desc: "Visual storytelling in History and Geography for faster recall.",
      },
    ],
    batchTimings: [
      "Class 6 & 7: 4:00 PM - 5:30 PM (Tue, Thu, Sat)",
      "Class 8 & 9: 5:30 PM - 7:00 PM (Tue, Thu, Sat)",
      "Class 10 (Board Batch): 7:00 PM - 8:30 PM (Mon to Sat)",
    ],
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "zone-03",
    number: "03",
    name: "College Chhak",
    slogan: "Study Smart, Achieve Greatness",
    shortDesc:
      "Our high-tech hub offering advanced analytical tools, comprehensive revision models, and premium board preparation strategies.",
    address: "First Floor, Metro Plaza, College Chhak (Near Bank of India)",
    phone: "9668580583",
    whatsappMsg:
      "Hi, I am interested in enrolling at the College Chhak Branch (Zone 03). Please share batch details.",
    image: "/images/classroom-3.png",
    googleMapUrl: "https://maps.google.com/?q=College+Chhaka+Style+Zone+Study+Care",
    features: [
      {
        title: "Advanced Conceptual Clarity",
        desc: "Breaking down complex literature and history events using modern cognitive frameworks.",
      },
      {
        title: "Critical Analysis Sessions",
        desc: "Group discussions and active recall training to boost critical thinking.",
      },
      {
        title: "Tech-Enabled Classrooms",
        desc: "Interactive display units and digital notes shared directly to phones.",
      },
      {
        title: "Doubt Resolution Center",
        desc: "Dedicated desk available 2 hours before/after every session.",
      },
      {
        title: "Motivational Seminars",
        desc: "Regular success-coaching and mindset-building sessions.",
      },
      {
        title: "Board Strategy Seminars",
        desc: "Step-by-step masterclasses on scoring 95%+ in board exams.",
      },
    ],
    batchTimings: [
      "Class 8: 3:30 PM - 5:00 PM (Mon to Sat)",
      "Class 9: 5:00 PM - 6:30 PM (Mon to Sat)",
      "Class 10: 6:30 PM - 8:00 PM (Mon to Sat)",
    ],
    color: "from-teal-600 to-emerald-700",
    comingSoon: true,
  },
];

export default function Zones() {
  const [activeZone, setActiveZone] = useState<string>("zone-01");
  const [selectedTab, setSelectedTab] = useState<"features" | "timings">(
    "features"
  );

  const currentZone =
    zonesData.find((zone) => zone.id === activeZone) || zonesData[0];
  const isComingSoon = currentZone.comingSoon === true;

  return (
    <section
      className="section bg-bg-alt dark:bg-dark-alt text-text-primary dark:text-text-light transition-colors duration-300"
      id="zones"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Our Learning Zones
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-text-primary dark:text-white mt-5"
          >
            Choose the Perfect{" "}
            <span className="text-primary dark:text-gold-light">Study Hub</span>
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
            Style Zone Study Care provides premium learning environments across 3
            strategic branches in Pakharchhak, Treasury Colony, and College Chhak.
          </motion.p>
        </div>

        {/* Zone Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {zonesData.map((zone) => {
            const isActive = zone.id === activeZone;
            return (
              <button
                key={zone.id}
                id={`tab-btn-${zone.id}`}
                onClick={() => {
                  setActiveZone(zone.id);
                  setSelectedTab("features");
                }}
                className={`relative px-5 py-3.5 rounded-2xl text-left transition-all duration-300 flex items-center gap-3 cursor-pointer overflow-hidden border ${
                  isActive
                    ? "bg-primary text-white border-transparent shadow-lg scale-105"
                    : "bg-white dark:bg-dark text-text-primary dark:text-white border-black/10 dark:border-white/5 hover:border-gold/50"
                }`}
                style={{ minWidth: "240px" }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeZoneIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-primary-light via-secondary to-secondary-light -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm ${
                    isActive
                      ? "bg-gold text-primary"
                      : "bg-primary/5 dark:bg-white/5 text-primary dark:text-gold"
                  }`}
                >
                  {zone.number}
                </div>
                <div className="flex-1">
                  <h4 className="font-extrabold text-sm leading-snug flex items-center gap-2">
                    {zone.name}
                    {zone.comingSoon && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-black bg-amber-500/20 text-amber-500 border border-amber-500/30 uppercase tracking-wide flex-shrink-0">
                        <Lock className="w-2.5 h-2.5" />
                        Soon
                      </span>
                    )}
                  </h4>
                  <p
                    className={`text-[10px] ${
                      isActive
                        ? "text-gold-light"
                        : "text-text-light dark:text-slate-400"
                    }`}
                  >
                    {zone.comingSoon ? "Opening Soon — Stay Tuned!" : zone.slogan}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Zone Detailed Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card Sidebar - Summary & Details */}
          <motion.div
            key={`${activeZone}-summary`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between glass-card p-6 md:p-8 rounded-3xl border border-white/40 dark:border-white/5 shadow-xl relative overflow-hidden"
          >
            {/* Coming Soon Ribbon */}
            {isComingSoon && (
              <div className="absolute top-5 right-0 z-20">
                <div className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-black uppercase tracking-widest shadow-lg rounded-l-full">
                  <Lock className="w-3 h-3" />
                  Opening Soon
                </div>
              </div>
            )}

            <div>
              {/* Branch Image */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-md">
                <Image
                  src={currentZone.image}
                  alt={`${currentZone.name} Branch Classroom`}
                  fill
                  className={`object-cover transition-all duration-500 ${
                    isComingSoon
                      ? "grayscale brightness-75 blur-[2px]"
                      : ""
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Coming Soon Overlay */}
                {isComingSoon && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/35 backdrop-blur-[1px]">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="w-14 h-14 rounded-full bg-amber-500/20 border-2 border-amber-400/50 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-2xl">🚧</span>
                      </div>
                      <span className="text-white font-black text-sm uppercase tracking-wider drop-shadow-lg">
                        Coming Soon
                      </span>
                    </motion.div>
                  </div>
                )}

                {/* Interactive Tour Badge (only for active branches) */}
                {!isComingSoon && (
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold/90 text-primary text-[10px] font-black uppercase tracking-wider">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Interactive Tour</span>
                  </div>
                )}
              </div>

              {/* Title & Slogan */}
              <h3 className="text-xl md:text-2xl font-black text-text-primary dark:text-white mb-1.5 font-display flex items-center gap-2 flex-wrap">
                <MapPin className="text-gold w-5 h-5 shrink-0" />
                {currentZone.name} Branch
                {isComingSoon && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black bg-amber-500/12 text-amber-600 dark:text-amber-400 border border-amber-500/25 uppercase tracking-wider">
                    <Lock className="w-3 h-3" />
                    Not Yet Operational
                  </span>
                )}
              </h3>
              <p className="text-xs text-text-light dark:text-slate-400 leading-relaxed mb-4">
                {isComingSoon
                  ? "Admissions for this branch will open soon. Stay tuned for the official launch announcement!"
                  : currentZone.shortDesc}
              </p>

              {/* Coming Soon Notice Banner */}
              {isComingSoon && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="p-4 rounded-xl bg-amber-500/8 border border-amber-500/20 flex items-start gap-3 mb-4"
                >
                  <Bell className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 animate-bounce-subtle" />
                  <div>
                    <p className="text-xs font-bold text-amber-600 dark:text-amber-400 mb-0.5">
                      Branch Opening Soon
                    </p>
                    <p className="text-[11px] text-text-light dark:text-slate-400 leading-relaxed">
                      Admissions for this branch will open soon. Contact us on WhatsApp to get notified first when seats are available.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Address */}
              <div className="border-t border-b border-black/5 dark:border-white/5 py-4 my-4">
                <h5 className="text-[10px] font-extrabold uppercase tracking-widest text-text-lighter dark:text-slate-500 mb-1.5">
                  Campus Address
                </h5>
                <p className="text-xs text-text-primary dark:text-slate-300 font-medium">
                  {currentZone.address}
                </p>
                {/* Hide map link for coming-soon branch */}
                {!isComingSoon && (
                  <a
                    href={currentZone.googleMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] text-gold hover:text-gold-light font-bold mt-2 hover:underline"
                    id={`map-link-${currentZone.id}`}
                  >
                    <Map className="w-3.5 h-3.5" />
                    <span>View on Google Maps</span>
                  </a>
                )}
                {isComingSoon && (
                  <span className="inline-flex items-center gap-1.5 text-[10px] text-slate-400 dark:text-slate-500 font-semibold mt-2 cursor-not-allowed opacity-60">
                    <Map className="w-3.5 h-3.5" />
                    <span>Directions not yet available</span>
                  </span>
                )}
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="flex gap-2.5 mt-4">
              {isComingSoon ? (
                <>
                  {/* Notify Me — non-clickable */}
                  <div
                    id={`coming-soon-notify-${currentZone.number}`}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-black uppercase tracking-wider bg-amber-500/10 text-amber-500 border border-amber-500/25 cursor-not-allowed select-none"
                    title="This branch is not yet open"
                    aria-disabled="true"
                  >
                    <Bell className="w-3.5 h-3.5" />
                    <span>Coming Soon</span>
                  </div>
                  {/* WhatsApp — stays active to allow pre-registration interest */}
                  <a
                    id={`whatsapp-notify-zone-${currentZone.number}`}
                    href={`https://wa.me/91${currentZone.phone}?text=${encodeURIComponent("Hi! I'd like to be notified when the College Chhak Branch (Zone 03) opens for admissions.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp flex-1 justify-center text-xs py-3 px-3 font-bold rounded-xl"
                    title="Get notified on WhatsApp when this branch opens"
                  >
                    <Bell className="w-3.5 h-3.5" />
                    <span>Notify Me</span>
                  </a>
                </>
              ) : (
                <>
                  <a
                    id={`call-zone-${currentZone.number}`}
                    href={`tel:+91${currentZone.phone}`}
                    className="btn-primary flex-1 justify-center text-xs py-3 px-3 font-bold rounded-xl"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Branch</span>
                  </a>
                  <a
                    id={`whatsapp-zone-${currentZone.number}`}
                    href={`https://wa.me/91${currentZone.phone}?text=${encodeURIComponent(currentZone.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp flex-1 justify-center text-xs py-3 px-3 font-bold rounded-xl"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </>
              )}
            </div>
          </motion.div>

          {/* Card Content - Interactive Tabs */}
          <motion.div
            key={`${activeZone}-content`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col glass-card p-6 md:p-8 rounded-3xl border border-white/40 dark:border-white/5 shadow-xl relative overflow-hidden"
          >
            {/* Coming Soon overlay on content panel */}
            {isComingSoon && (
              <div className="absolute inset-0 z-10 rounded-3xl flex flex-col items-center justify-center bg-white/60 dark:bg-dark-alt/70 backdrop-blur-sm">
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                  className="text-center px-10"
                >
                  <div className="text-5xl mb-5">🚧</div>
                  <h4 className="text-xl font-black text-text-primary dark:text-white font-display mb-3">
                    Branch Opening Soon
                  </h4>
                  <p className="text-sm text-text-light dark:text-slate-400 leading-relaxed max-w-sm">
                    Admissions for this branch will open soon. Stay tuned for the
                    official launch announcement! Meanwhile, you can{" "}
                    <a
                      href={`https://wa.me/919668580583?text=${encodeURIComponent("Hi! I'd like to be notified when the College Chhak Branch (Zone 03) opens for admissions.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold font-bold hover:underline"
                    >
                      register your interest on WhatsApp
                    </a>
                    .
                  </p>
                  <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`https://wa.me/919668580583?text=${encodeURIComponent("Hi! I'd like to be notified when the College Chhak Branch (Zone 03) opens for admissions.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp text-xs py-3 px-6 font-bold rounded-xl justify-center"
                      id="coming-soon-whatsapp-cta"
                    >
                      <Bell className="w-4 h-4" />
                      Notify Me on WhatsApp
                    </a>
                    <button
                      onClick={() => {
                        setActiveZone("zone-01");
                        setSelectedTab("features");
                      }}
                      className="btn-secondary text-xs py-3 px-6 font-bold rounded-xl justify-center"
                      id="coming-soon-view-other-btn"
                    >
                      View Other Branches
                    </button>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Inner Navigation Tabs */}
            <div className="flex border-b border-black/5 dark:border-white/5 pb-4 mb-6 gap-6">
              <button
                id="features-tab-btn"
                onClick={() => setSelectedTab("features")}
                className={`text-sm font-bold pb-1.5 relative cursor-pointer ${
                  selectedTab === "features"
                    ? "text-primary dark:text-gold-light font-black"
                    : "text-text-light dark:text-slate-400 hover:text-primary dark:hover:text-white"
                }`}
              >
                Branch Highlights
                {selectedTab === "features" && (
                  <motion.div
                    layoutId="innerTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </button>
              <button
                id="timings-tab-btn"
                onClick={() => setSelectedTab("timings")}
                className={`text-sm font-bold pb-1.5 relative cursor-pointer ${
                  selectedTab === "timings"
                    ? "text-primary dark:text-gold-light font-black"
                    : "text-text-light dark:text-slate-400 hover:text-primary dark:hover:text-white"
                }`}
              >
                Batch Timings
                {selectedTab === "timings" && (
                  <motion.div
                    layoutId="innerTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </button>
            </div>

            {/* Content Display */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                {selectedTab === "features" ? (
                  <motion.div
                    key="features-panel"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    {currentZone.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex gap-3 items-start bg-black/[0.02] dark:bg-white/[0.02] p-4 rounded-xl border border-black/5 dark:border-white/5 hover:border-gold/20 hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-all"
                      >
                        <CheckCircle2 className="text-gold w-4 h-4 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-xs text-text-primary dark:text-white mb-0.5">
                            {feature.title}
                          </h4>
                          <p className="text-[10px] text-text-light dark:text-slate-400 leading-relaxed">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="timings-panel"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="bg-gold/10 border border-gold/20 p-4 rounded-xl flex gap-3 items-start mb-6">
                      <Clock className="text-gold w-5 h-5 shrink-0 mt-0.5 animate-bounce-subtle" />
                      <div>
                        <h4 className="font-bold text-xs text-primary dark:text-gold-light mb-0.5">
                          Standard Batch Guidelines
                        </h4>
                        <p className="text-[10px] text-text-light dark:text-slate-400 leading-relaxed">
                          Students are advised to arrive 10 minutes prior to
                          scheduled batches. Sequential English and Social Science
                          classes are scheduled for maximum efficiency.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      {currentZone.batchTimings.map((timing, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3.5 p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          <p className="text-xs font-bold text-text-primary dark:text-slate-200">
                            {timing}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer Alert */}
            <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[10px] text-text-light dark:text-slate-500 font-bold uppercase tracking-wider">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>Max 15 students per batch</span>
              </span>
              <span>Classes 6 - 10 | All Boards</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
