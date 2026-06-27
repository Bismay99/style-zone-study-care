"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, Sparkles } from "lucide-react";

interface FinalCTAProps {
  onBookDemo: () => void;
}

export default function FinalCTA({ onBookDemo }: FinalCTAProps) {
  return (
    <section className="py-16 md:py-24 bg-bg dark:bg-dark relative overflow-hidden" id="final-cta">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary-light dark:from-secondary dark:via-primary dark:to-dark-alt p-8 md:p-14 lg:p-20 text-white shadow-2xl border border-white/10"
        >
          {/* Radial glow background decoration */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/15 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-light/30 rounded-full blur-3xl pointer-events-none -ml-40 -mb-40" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/25 border border-gold/40 text-gold-light text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admissions Open • Limited Seats</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black leading-tight tracking-tight text-white">
              Your Child&apos;s Success Story <br className="hidden md:inline" />
              <span className="text-gold">Starts Here</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Join 500+ families who trust Style Zone Study Care for their child&apos;s academic growth. Limited seats available for 2026-27 session.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                id="final-cta-demo-btn"
                onClick={onBookDemo}
                className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-light text-primary font-bold rounded-full shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm uppercase tracking-wider"
              >
                <span>Book Free Demo Class</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="final-cta-call-btn"
                href="tel:+919668580583"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-full hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: 9668580583</span>
              </a>

              <a
                id="final-cta-wa-btn"
                href="https://wa.me/919668580583?text=Hi%2C%20I%20want%20to%20inquire%20about%20admissions%20at%20Style%20Zone%20Study%20Care."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
