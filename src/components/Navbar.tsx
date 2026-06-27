"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, GraduationCap, ArrowRight, Sparkles, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "founder", label: "Founder" },
  { id: "special-focus", label: "Courses" },
  { id: "results", label: "Results" },
  { id: "gallery", label: "Gallery" },
  { id: "zones", label: "Zones" },
  { id: "admission-process", label: "Admissions" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

interface NavbarProps {
  onBookDemo: () => void;
}

export default function Navbar({ onBookDemo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeSection, setActiveSection] = useState("hero");

  // Track scroll position for glassmorphism styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme synchronization on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
    } else {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(systemDark ? "dark" : "light");
      if (systemDark) {
        document.documentElement.setAttribute("data-theme", "dark");
      }
    }
  }, []);

  // Active section scroll tracking (Scroll Spy)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-85px 0px -60% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      navItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const yOffset = -110; // height of fixed navbar + announcement bar
      const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex flex-col w-full">
        {/* Announcement Bar */}
        <div className="announcement-bar w-full py-2 px-4 flex items-center justify-between gap-4 text-xs font-bold text-white relative z-50">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
            <span className="tracking-wide">Admissions Open 2026-27: English & Social Science Batches filling fast!</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[11px]">
            <button 
              id="announcement-demo-btn"
              onClick={onBookDemo}
              className="text-gold hover:text-gold-light underline underline-offset-4 cursor-pointer"
            >
              Book Free Demo Class
            </button>
            <span className="text-white/30">|</span>
            <a href="tel:+919668580583" className="flex items-center gap-1 hover:text-gold transition-colors">
              <Phone className="w-3 h-3" />
              <span>+91 9668580583</span>
            </a>
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`transition-all duration-300 w-full ${
            isScrolled
              ? "glass-light dark:glass shadow-md py-2.5"
              : "bg-white/95 dark:bg-dark/95 border-b border-black/5 dark:border-white/5 py-4"
          }`}
        >
          <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo Branding */}
            <a
              id="nav-brand-logo"
              href="#hero"
              onClick={(e) => handleNavClick(e, "hero")}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="p-2 bg-primary rounded-xl text-white group-hover:bg-gold transition-colors duration-300">
                <GraduationCap className="w-6 h-6 text-[#FFD54F]" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-black tracking-tight leading-none text-primary dark:text-white font-display">
                  STYLE <span className="gradient-text font-display">ZONE</span>
                </span>
                <span className="text-[8px] font-bold tracking-[0.22em] text-[#F4B400] leading-none mt-1 uppercase">
                  STUDY CARE
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  id={`nav-link-desktop-${item.id}`}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 relative ${
                    activeSection === item.id
                      ? "text-primary dark:text-[#FFD54F] font-black"
                      : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-white/5"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-[3px] bg-[#F4B400] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Action Bar (Theme + CTA + Mobile Menu Button) */}
            <div className="flex items-center gap-2.5">
              {/* Theme Toggle Button */}
              <button
                id="nav-theme-toggle"
                onClick={toggleTheme}
                className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300 transition-colors border border-slate-200 dark:border-white/10 cursor-pointer"
                aria-label="Toggle dark/light theme"
              >
                {theme === "light" ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4 text-[#FFD54F]" />
                )}
              </button>

              {/* Sticky CTA Button */}
              <button
                id="nav-cta-enroll"
                onClick={onBookDemo}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-gold hover:bg-gold-light text-primary font-black text-xs uppercase tracking-wider rounded-full transition-all duration-300 shadow-md hover:scale-[1.02] cursor-pointer"
              >
                <span>Book Free Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Hamburger Button for Mobile */}
              <button
                id="nav-mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300 transition-colors border border-slate-200 dark:border-white/10 cursor-pointer"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Semi-transparent backdrop */}
            <motion.div
              id="nav-mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-[45] bg-black/60 backdrop-blur-sm xl:hidden"
            />

            {/* Slider Drawer */}
            <motion.div
              id="nav-mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-xs bg-white dark:bg-[#060E1A] shadow-2xl border-l border-slate-100 dark:border-slate-800 xl:hidden flex flex-col p-5 overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary rounded-xl text-white">
                    <GraduationCap className="w-5 h-5 text-[#FFD54F]" />
                  </div>
                  <span className="text-base font-black tracking-tight leading-none text-primary dark:text-white font-display">
                    STYLE <span className="gradient-text font-display">ZONE</span>
                  </span>
                </div>
                <button
                  id="nav-mobile-drawer-close"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Items */}
              <nav className="flex flex-col gap-1.5 mt-4 flex-1">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    id={`nav-link-mobile-${item.id}`}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                      activeSection === item.id
                        ? "bg-primary text-[#FFD54F] dark:bg-secondary dark:text-[#FFD54F]"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeSection === item.id ? "translate-x-0" : "-translate-x-2 opacity-0 hover:opacity-100 hover:translate-x-0"
                      }`}
                    />
                  </a>
                ))}
              </nav>

              {/* Mobile Drawer Footer CTA */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto flex flex-col gap-3">
                <button
                  id="nav-mobile-cta-demo"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookDemo();
                  }}
                  className="flex items-center justify-center gap-1.5 py-3 bg-gold hover:bg-gold-light text-primary font-black uppercase tracking-wider rounded-full transition-all text-xs border border-[#FFD54F]/20 text-center cursor-pointer"
                >
                  <span>Book Free Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="text-center text-[10px] text-slate-400 dark:text-slate-500">
                  Call: <a href="tel:+919668580583" className="font-bold hover:underline text-slate-600 dark:text-slate-300">+91 9668580583</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
