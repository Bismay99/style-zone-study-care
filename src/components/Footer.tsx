"use client";

import React from "react";
import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

interface FooterProps {
  onBookDemo: () => void;
}

export default function Footer({ onBookDemo }: FooterProps) {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const yOffset = -110; // height of fixed navbar
      const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-slate-300 relative border-t-2 border-[#FFD54F]/20 font-sans">
      {/* Decorative Gold Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#FFD54F]/50 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_top_right,rgba(244,180,0,0.05)_0%,transparent_60%)] pointer-events-none" />

      {/* Footer Top CTA Banner */}
      <div className="border-b border-white/5 py-12 md:py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-secondary/40 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FFD54F]/5 rounded-full blur-2xl pointer-events-none" />
            <div className="z-10 text-center lg:text-left max-w-xl">
              <span className="text-[#FFD54F] font-bold text-xs uppercase tracking-[0.2em] block mb-3 font-sans">
                Admissions Open for Classes 6-10
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white font-display tracking-tight leading-tight">
                Ready to Experience the Difference?
              </h3>
              <p className="mt-3 text-slate-400 text-xs md:text-sm">
                Join our premium English & Social Science coaching programs. Book a free demo class today and embark on the journey to academic excellence!
              </p>
            </div>
            <div className="z-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0">
              <button
                id="footer-cta-demo"
                onClick={onBookDemo}
                className="btn-primary text-center justify-center font-bold text-xs uppercase tracking-wider py-4 px-6 w-full sm:w-auto cursor-pointer"
              >
                <span>Book Free Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                id="footer-cta-whatsapp"
                href="https://wa.me/919668580583?text=Hi%20Style%20Zone%20Study%20Care,%20I'm%20interested%20in%20a%20free%20demo%20class!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-center justify-center font-bold text-xs uppercase tracking-wider py-4 px-6 w-full sm:w-auto"
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
          <div className="lg:col-span-4 flex flex-col gap-6">
            <a
              id="footer-brand"
              href="#hero"
              onClick={(e) => handleScrollTo(e, "hero")}
              className="flex items-center gap-2 self-start cursor-pointer"
            >
              <div className="p-2.5 bg-secondary rounded-xl text-white border border-white/10">
                <GraduationCap className="w-6 h-6 text-[#FFD54F]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight leading-none text-white font-display">
                  STYLE <span className="gradient-text font-display">ZONE</span>
                </span>
                <span className="text-[9px] font-bold tracking-[0.25em] text-[#FFD54F] leading-none mt-1 uppercase">
                  STUDY CARE
                </span>
              </div>
            </a>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-sm">
              We specialize in offering premium-quality coaching in English and Social Science for students of classes 6 to 10. Our goal is to make learning interactive, conceptually rich, and highly scoring.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                id="footer-social-whatsapp"
                href="https://wa.me/919668580583"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFD54F]/50 hover:bg-[#FFD54F]/10 hover:text-[#FFD54F] flex items-center justify-center transition-all text-slate-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </a>
              <a
                id="footer-social-instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFD54F]/50 hover:bg-[#FFD54F]/10 hover:text-[#FFD54F] flex items-center justify-center transition-all text-slate-300"
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
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFD54F]/50 hover:bg-[#FFD54F]/10 hover:text-[#FFD54F] flex items-center justify-center transition-all text-slate-300"
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
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFD54F]/50 hover:bg-[#FFD54F]/10 hover:text-[#FFD54F] flex items-center justify-center transition-all text-slate-300"
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
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-[#FFD54F]">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 text-xs md:text-sm font-bold uppercase tracking-wider">
              {[
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
              ].map((link) => (
                <li key={link.id}>
                  <a
                    id={`footer-link-${link.id}`}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className="hover:text-[#FFD54F] transition-colors duration-200 flex items-center group cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 bg-[#FFD54F] rounded-full scale-0 group-hover:scale-100 transition-transform mr-0 group-hover:mr-2" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Study Zones / Branches */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-[#FFD54F]">
              Study Zones
            </h4>
            <ul className="flex flex-col gap-4 text-xs md:text-sm text-slate-450">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-[#FFD54F] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block">Paharkhana Branch</span>
                  <span className="text-xs text-slate-400">Style Zone Building, Near Main Square, Paharkhana</span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-[#FFD54F] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block">Treasury Colony Branch</span>
                  <span className="text-xs text-slate-400">Plot No. 42B, Behind State Treasury, Treasury Colony</span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-[#FFD54F] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block">College Chhaka Branch</span>
                  <span className="text-xs text-slate-400">First Floor, Metro Plaza, College Chhaka</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-[#FFD54F]">
              Contact Details
            </h4>
            <ul className="flex flex-col gap-4 text-xs md:text-sm text-slate-400">
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-[#FFD54F] shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">Call / Phone</span>
                  <a
                    id="footer-contact-phone"
                    href="tel:+919668580583"
                    className="text-white font-bold hover:underline"
                  >
                    +91 9668580583
                  </a>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-[#FFD54F] shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">Email Address</span>
                  <a
                    id="footer-contact-email"
                    href="mailto:contact@stylezonecare.com"
                    className="text-white font-bold hover:underline"
                  >
                    contact@stylezonecare.com
                  </a>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Clock className="w-5 h-5 text-[#FFD54F] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">Coaching Hours</span>
                  <span className="text-white font-bold block">Mon - Sat: 4:00 PM - 8:30 PM</span>
                  <span className="text-xs text-slate-400">Sunday: Special Tests & doubt clearing</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom: Credits & Legals */}
      <div className="border-t border-white/5 py-8 bg-[#060E1A]">
        <div className="container px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-slate-500">
          <div>
            &copy; {currentYear} Style Zone Study Care. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              id="footer-legal-privacy"
              href="#privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              id="footer-legal-terms"
              href="#terms"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
          <div>
            Designed for academic excellence.
          </div>
        </div>
      </div>
    </footer>
  );
}
