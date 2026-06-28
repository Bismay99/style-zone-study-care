"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Calendar, Sparkles } from "lucide-react";

interface DemoClassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoClassModal({ isOpen, onClose }: DemoClassModalProps) {
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("Class 10");
  const [branch, setBranch] = useState("Pakharchhak");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset form states when closing
      setName("");
      setStudentClass("Class 10");
      setBranch("Pakharchhak");
      setPhone("");
      setIsSuccess(false);
      setIsSubmitting(false);
      setPhoneError("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate phone number (10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setPhoneError("");
    setIsSubmitting(true);

    // Simulate short loader then success and redirect
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Construct WhatsApp message
      const message = `Hi Style Zone Study Care, I would like to book a Free Demo Class.\n\n*Student Name:* ${name}\n*Class:* ${studentClass}\n*Preferred Branch:* ${branch}\n*Contact Number:* ${phone}`;
      const encodedMsg = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/919668580583?text=${encodedMsg}`;

      setTimeout(() => {
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        onClose();
      }, 1500);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Glassmorphism backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            id="demo-modal-card"
            className="relative w-full max-w-md bg-white dark:bg-dark border border-black/10 dark:border-white/10 rounded-3xl shadow-2xl p-6 md:p-8 overflow-hidden z-10 glass-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top gold bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-gold to-gold-light" />

            {/* Close Button */}
            <button
              id="close-demo-modal-btn"
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-text-light hover:text-text hover:bg-black/5 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5 transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSuccess ? (
              <div>
                {/* Header */}
                <div className="mb-6 flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-gold flex-shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display text-text-primary dark:text-white flex items-center gap-1.5">
                      <span>Book Free Demo Class</span>
                      <Sparkles className="w-4 h-4 text-gold" />
                    </h3>
                    <p className="text-xs text-text-light dark:text-slate-400 mt-0.5">
                      No commitment required. Experience our teaching first.
                    </p>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Student Name */}
                  <div className="flex flex-col">
                    <label htmlFor="studentName" className="text-xs font-bold text-text-primary dark:text-slate-300 mb-1.5">
                      Student Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      required
                      placeholder="Enter student's full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-gold text-sm text-text-primary dark:text-white transition-all"
                    />
                  </div>

                  {/* Row: Class & Preferred Branch */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Class */}
                    <div className="flex flex-col">
                      <label htmlFor="studentClass" className="text-xs font-bold text-text-primary dark:text-slate-300 mb-1.5">
                        Class <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="studentClass"
                        value={studentClass}
                        onChange={(e) => setStudentClass(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-black/10 bg-white dark:border-white/10 dark:bg-dark-alt focus:outline-none focus:ring-2 focus:ring-gold text-sm text-text-primary dark:text-white transition-all cursor-pointer"
                      >
                        <option value="Class 6">Class 6</option>
                        <option value="Class 7">Class 7</option>
                        <option value="Class 8">Class 8</option>
                        <option value="Class 9">Class 9</option>
                        <option value="Class 10">Class 10</option>
                      </select>
                    </div>

                    {/* Preferred Branch */}
                    <div className="flex flex-col">
                      <label htmlFor="preferredBranch" className="text-xs font-bold text-text-primary dark:text-slate-300 mb-1.5">
                        Branch <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="preferredBranch"
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-black/10 bg-white dark:border-white/10 dark:bg-dark-alt focus:outline-none focus:ring-2 focus:ring-gold text-sm text-text-primary dark:text-white transition-all cursor-pointer"
                      >
                        <option value="Pakharchhak">Pakharchhak</option>
                        <option value="Treasury Colony">Treasury Colony</option>
                        <option value="College Chhak">College Chhak</option>
                      </select>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col">
                    <label htmlFor="studentPhone" className="text-xs font-bold text-text-primary dark:text-slate-300 mb-1.5">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="studentPhone"
                      required
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value.replace(/\D/g, "").slice(0, 10));
                        setPhoneError("");
                      }}
                      className="w-full px-4 py-2.5 rounded-xl border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-gold text-sm text-text-primary dark:text-white transition-all"
                    />
                    {phoneError && (
                      <p className="text-[10px] text-rose-500 mt-1 font-semibold">{phoneError}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-demo-booking-btn"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-gold hover:bg-gold-light text-primary font-bold rounded-xl shadow-lg hover:shadow-gold/20 active:scale-[0.98] disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2 text-sm uppercase tracking-wider"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Book Free Demo →</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-4"
              >
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display text-text-primary dark:text-white">
                    Demo Booked Successfully!
                  </h3>
                  <p className="text-xs text-text-light dark:text-slate-400 mt-1">
                    Redirecting to WhatsApp to complete booking details...
                  </p>
                </div>
                <div className="w-20 h-1 bg-emerald-500 rounded-full mx-auto animate-pulse" />
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
