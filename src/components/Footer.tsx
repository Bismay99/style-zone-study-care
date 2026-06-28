"use client";

import React, { useEffect, useState } from "react";
import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowUpRight,
  ChevronUp,
  ExternalLink,
} from "lucide-react";

interface FooterProps {
  onBookDemo: () => void;
}

export default function Footer({ onBookDemo }: FooterProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const yOffset = -110;
      const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "founder", label: "Founder" },
    { id: "special-focus", label: "Courses" },
    { id: "results", label: "Results" },
    { id: "gallery", label: "Gallery" },
    { id: "zones", label: "Zones" },
    { id: "admission-process", label: "Admissions" },
    { id: "faq", label: "FAQs" },
    { id: "contact", label: "Contact Us" },
  ];

  const branches = [
    {
      name: "Paharkhana Branch",
      address: "Style Zone Building, Near Main Square, Paharkhana",
      mapQuery: "Style Zone Study Care Paharkhana",
    },
    {
      name: "Treasury Colony Branch",
      address: "Plot No. 42B, Behind State Treasury, Treasury Colony",
      mapQuery: "Treasury Colony Sambalpur",
    },
    {
      name: "College Chhaka Branch",
      address: "First Floor, Metro Plaza, College Chhaka",
      mapQuery: "College Chhaka Sambalpur",
    },
  ];

  return (
    <footer className="bg-primary text-slate-300 relative border-t border-gold/15 font-sans overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle at top right, rgba(244,180,0,0.06) 0%, transparent 60%)" }} />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(circle at bottom left, rgba(255,255,255,0.02) 0%, transparent 60%)" }} />

      {/* Footer Top CTA Banner */}
      <div className="border-b border-white/5 py-14 md:py-18">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-secondary/50 backdrop-blur-md border border-white/8 p-9 md:p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-gold/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

            <div className="z-10 text-center lg:text-left max-w-xl relative">
              <span className="text-gold font-black text-[10px] uppercase tracking-[0.2em] block mb-3">
                ✦ Admissions Open — Classes 6–10
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white font-display tracking-tight leading-tight">
                Ready to Experience the Difference?
              </h3>
              <p className="mt-3 text-slate-400 text-xs md:text-sm leading-relaxed">
                Join our premium English &amp; Social Science coaching programs. Book a free demo class today and embark on the journey to academic excellence!
              </p>
            </div>
            <div className="z-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0">
              <button
                id="footer-cta-demo"
                onClick={onBookDemo}
                className="btn-primary text-center justify-center font-black text-xs uppercase tracking-wider py-4 px-8 w-full sm:w-auto cursor-pointer"
              >
                <span>Book Free Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                id="footer-cta-whatsapp"
                href="https://wa.me/919668580583?text=Hi%20Style%20Zone%20Study%20Care,%20I'm%20interested%20in%20a%20free%20demo%20class!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-center justify-center font-bold text-xs uppercase tracking-wider py-4 px-8 w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat with Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Mega Footer Grid */}
      <div className="py-16 md:py-20">
        <div className="container px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-7">
            <a
              id="footer-brand"
              href="#hero"
              onClick={(e) => handleScrollTo(e, "hero")}
              className="flex items-center gap-3 self-start cursor-pointer group"
            >
              <div className="p-2.5 bg-secondary rounded-xl text-white border border-white/8 group-hover:border-gold/30 transition-colors">
                <GraduationCap className="w-6 h-6 text-gold" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight leading-none text-white font-display group-hover:text-gold-light transition-colors">
                  STYLE <span className="gradient-text font-display">ZONE</span>
                </span>
                <span className="text-[9px] font-black tracking-[0.25em] text-gold leading-none mt-1 uppercase">
                  STUDY CARE
                </span>
              </div>
            </a>
            <p className="text-slate-400 text-xs md:text-sm leading-[1.85] max-w-sm">
              We specialize in offering premium-quality coaching in English and Social Science for students of classes 6 to 10. Our goal is to make learning interactive, conceptually rich, and highly scoring.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                id="footer-social-whatsapp"
                href="https://wa.me/919668580583"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/8 hover:border-gold/40 hover:bg-gold/10 hover:text-gold flex items-center justify-center transition-all text-slate-300 hover:scale-110 hover:shadow-md hover:shadow-gold/10"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </a>
              <a
                id="footer-social-instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/8 hover:border-gold/40 hover:bg-gold/10 hover:text-gold flex items-center justify-center transition-all text-slate-300 hover:scale-110 hover:shadow-md hover:shadow-gold/10"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                id="footer-social-facebook"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/8 hover:border-gold/40 hover:bg-gold/10 hover:text-gold flex items-center justify-center transition-all text-slate-300 hover:scale-110 hover:shadow-md hover:shadow-gold/10"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a
                id="footer-social-youtube"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/8 hover:border-gold/40 hover:bg-gold/10 hover:text-gold flex items-center justify-center transition-all text-slate-300 hover:scale-110 hover:shadow-md hover:shadow-gold/10"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 lg:pl-4">
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-7 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-gold after:to-gold-light after:rounded-full">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 text-xs md:text-sm font-bold uppercase tracking-wider">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a
                    id={`footer-link-${link.id}`}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className="hover:text-gold transition-colors duration-200 flex items-center group cursor-pointer"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-4 mr-0 group-hover:mr-2 h-1.5 bg-gold rounded-full transition-all duration-300 flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Study Zones */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-7 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-gold after:to-gold-light after:rounded-full">
              Study Zones
            </h4>
            <ul className="flex flex-col gap-5 text-xs md:text-sm">
              {branches.map((branch, idx) => (
                <li key={idx} className="flex gap-3 items-start group">
                  <MapPin className="w-4.5 h-4.5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold block group-hover:text-gold-light transition-colors">
                      {branch.name}
                    </span>
                    <span className="text-xs text-slate-400 leading-relaxed block mt-0.5">
                      {branch.address}
                    </span>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.mapQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`footer-map-${idx}`}
                      className="inline-flex items-center gap-1 text-[10px] font-bold text-gold/70 hover:text-gold mt-1.5 transition-colors uppercase tracking-wider"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Google Maps
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-7 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-gold after:to-gold-light after:rounded-full">
              Contact Details
            </h4>
            <ul className="flex flex-col gap-5 text-xs md:text-sm text-slate-400">
              <li className="flex gap-3 items-start group">
                <div className="p-2 rounded-lg bg-gold/10 border border-gold/15 flex-shrink-0">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider mb-0.5">Call / Phone</span>
                  <a
                    id="footer-contact-phone"
                    href="tel:+919668580583"
                    className="text-white font-bold hover:text-gold transition-colors"
                  >
                    +91 9668580583
                  </a>
                </div>
              </li>
              <li className="flex gap-3 items-start group">
                <div className="p-2 rounded-lg bg-gold/10 border border-gold/15 flex-shrink-0">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider mb-0.5">Email Address</span>
                  <a
                    id="footer-contact-email"
                    href="mailto:contact@stylezonecare.com"
                    className="text-white font-bold hover:text-gold transition-colors break-all"
                  >
                    contact@stylezonecare.com
                  </a>
                </div>
              </li>
              <li className="flex gap-3 items-start group">
                <div className="p-2 rounded-lg bg-gold/10 border border-gold/15 flex-shrink-0">
                  <Clock className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider mb-0.5">Coaching Hours</span>
                  <span className="text-white font-bold block">Mon – Sat: 4:00 PM – 8:30 PM</span>
                  <span className="text-xs text-slate-400 mt-0.5 block">Sunday: Tests &amp; Doubt Clearing</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom: Credits & Legals */}
      <div className="border-t border-white/5 py-7 bg-[#040C18]">
        <div className="container px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-slate-500">
          <div>
            &copy; {currentYear} Style Zone Study Care. All Rights Reserved.
          </div>
          <div className="flex items-center gap-2 text-[10px] text-slate-600 font-bold uppercase tracking-wider">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span>Admissions Open 2026–27</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              id="footer-legal-privacy"
              href="#privacy"
              className="hover:text-gold transition-colors"
            >
              Privacy Policy
            </a>
            <a
              id="footer-legal-terms"
              href="#terms"
              className="hover:text-gold transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        id="back-to-top-btn"
        onClick={handleScrollToTop}
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
        aria-label="Scroll back to top"
        title="Back to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
