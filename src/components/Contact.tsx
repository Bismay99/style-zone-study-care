"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Navigation,
  School,
  AlertCircle,
  Lock
} from "lucide-react";

interface FormState {
  studentName: string;
  parentName: string;
  className: string;
  phone: string;
  message: string;
}

interface FormErrors {
  studentName?: string;
  parentName?: string;
  className?: string;
  phone?: string;
  message?: string;
}

interface BranchInfo {
  id: string;
  name: string;
  address: string;
  landmark: string;
  mapQuery: string;
  embedSrc: string; // Iframe Google Maps embed source
  mapUrl?: string;
  image: string;
  comingSoon?: boolean;
}

const branchesData: BranchInfo[] = [
  {
    id: "branch-1",
    name: "Pakharchhak Branch (Zone 01)",
    address: "Style Zone Building, Near Main Square, Pakharchhak",
    landmark: "Near Main Square",
    mapQuery: "Pakharchhak+Style+Zone+Study+Care",
    mapUrl: "https://maps.app.goo.gl/NLcBUpsfXTLuD2xs7",
    embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.64722883389!2d85.8340578!3d20.2527581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE1JzA5LjkiTiA4NcKwNTAnMDIuNiJF!5e0!3m2!1sen!2sin!4v1719144882194!5m2!1sen!2sin",
    image: "/images/classroom-1.png",
    comingSoon: false
  },
  {
    id: "branch-2",
    name: "Treasury Colony Branch (Zone 02)",
    address: "Plot No. 42B, Behind State Treasury, Treasury Colony",
    landmark: "Near Head Post Office Road",
    mapQuery: "Treasury+Colony+Style+Zone+Study+Care",
    mapUrl: "https://share.google/Y2VOk14IxDuLtBn3U",
    embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.801235122132!2d85.831024!3d20.245892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE0JzQ1LjIiTiA4NcKwNDknNTEuNyJF!5e0!3m2!1sen!2sin!4v1719144933924!5m2!1sen!2sin",
    image: "/images/classroom-2.png",
    comingSoon: false
  },
  {
    id: "branch-3",
    name: "College Chhak Branch (Zone 03)",
    address: "First Floor, Metro Plaza, College Chhak",
    landmark: "Opposite Bank of India",
    mapQuery: "College+Chhak+Style+Zone+Study+Care",
    embedSrc: "",
    image: "/images/classroom-3.png",
    comingSoon: true
  }
];

export default function Contact() {
  const [selectedBranch, setSelectedBranch] = useState<BranchInfo>(branchesData[0]);
  const [formState, setFormState] = useState<FormState>({
    studentName: "",
    parentName: "",
    className: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing starts
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formState.studentName.trim()) newErrors.studentName = "Student name is required";
    if (!formState.parentName.trim()) newErrors.parentName = "Parent/Guardian name is required";
    if (!formState.className) newErrors.className = "Please select a class";
    if (!formState.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formState.phone.trim().replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit number";
    }
    if (!formState.message.trim()) newErrors.message = "Please tell us how we can help you";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Build WhatsApp message with all inquiry details
    const whatsappText =
      `🎓 *New Admission Inquiry — Style Zone Study Care*\n\n` +
      `👤 *Student Name:* ${formState.studentName}\n` +
      `👨‍👩‍👦 *Parent/Guardian:* ${formState.parentName}\n` +
      `📚 *Class Applied For:* ${formState.className}\n` +
      `📞 *Contact Number:* ${formState.phone}\n` +
      `🏫 *Preferred Branch:* ${selectedBranch.name}\n\n` +
      `💬 *Message / Query:*\n${formState.message}\n\n` +
      `_Submitted via Style Zone Study Care Website_`;

    const whatsappUrl = `https://wa.me/919668580583?text=${encodeURIComponent(whatsappText)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Open WhatsApp with the pre-filled inquiry — delivers directly to Mrs. Nayak's phone
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }, 1500);
  };

  const resetForm = () => {
    setFormState({
      studentName: "",
      parentName: "",
      className: "",
      phone: "",
      message: ""
    });
    setIsSuccess(false);
    setErrors({});
  };

  return (
    <section className="section bg-bg dark:bg-dark text-text-primary dark:text-text-light transition-colors duration-300 relative" id="contact">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(244,180,0,0.05) 0%, transparent 70%)" }} />
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-label inline-flex"
          >
            Contact &amp; Enrollment
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl md:text-5xl font-extrabold mt-5 leading-tight font-display"
          >
            Start Your Free <span className="gradient-text font-display">Demo Classes</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="section-divider mt-5"
          />
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-text-light dark:text-slate-400 leading-relaxed mt-2"
          >
            Fill out the form below and we will get back to you within 24 hours. 
            Alternatively, feel free to visit or contact any of our branches directly.
          </motion.p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Branch Locations & Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Actions Panel */}
            <div className="glass-card p-7 md:p-8 rounded-3xl border border-black/8 dark:border-white/8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              <h3 className="text-lg md:text-xl font-extrabold text-primary dark:text-white mb-6 flex items-center gap-3 font-display">
                <div className="p-2 rounded-xl bg-gold/12 border border-gold/20">
                  <School className="text-gold w-4 h-4" />
                </div>
                Quick Connect
              </h3>
              
              <div className="space-y-3.5">
                {/* Phone Call */}
                <div className="flex gap-4 items-center bg-primary/4 dark:bg-white/4 p-4 rounded-2xl border border-primary/5 dark:border-white/5 hover:border-gold/20 transition-colors group">
                  <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/15 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-primary transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-text-lighter dark:text-slate-500 tracking-wider">Call Center Helpline</p>
                    <a href="tel:+919668580583" className="font-extrabold text-sm md:text-base text-primary dark:text-white hover:text-gold transition-colors">
                      +91 9668580583
                    </a>
                  </div>
                </div>

                {/* WhatsApp Chat */}
                <div className="flex gap-4 items-center bg-primary/4 dark:bg-white/4 p-4 rounded-2xl border border-primary/5 dark:border-white/5 hover:border-green-500/20 transition-colors group">
                  <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/15 flex items-center justify-center text-green-500 shrink-0 group-hover:bg-green-500 group-hover:text-white transition-all">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-text-lighter dark:text-slate-500 tracking-wider">WhatsApp Assistance</p>
                    <a 
                      href="https://wa.me/919668580583?text=Hi%20Style%20Zone!%20I%2527d%20like%20to%20know%20more%20about%20your%20coaching%20timings." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-extrabold text-sm md:text-base text-primary dark:text-white hover:text-green-500 transition-colors"
                    >
                      Chat Live Now
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex gap-4 items-center bg-primary/4 dark:bg-white/4 p-4 rounded-2xl border border-primary/5 dark:border-white/5 hover:border-blue-500/20 transition-colors group">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-500 shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-text-lighter dark:text-slate-500 tracking-wider">Working Hours</p>
                    <p className="font-bold text-sm text-primary dark:text-white">
                      Mon – Sat: 3:00 PM – 9:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Branch Selector & Address Card */}
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-black/10 dark:border-white/10 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-extrabold text-primary dark:text-white mb-4 font-display">
                  Find Our Branches
                </h3>
                
                {/* Branch Cards list */}
                <div className="space-y-3 mb-6">
                  {branchesData.map((branch) => {
                    const isSelected = selectedBranch.id === branch.id;
                    return (
                      <button
                        key={branch.id}
                        id={`branch-card-${branch.id}`}
                        onClick={() => setSelectedBranch(branch)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-3 cursor-pointer group ${
                          isSelected
                            ? "bg-gold/8 border-gold shadow-md shadow-gold/10"
                            : "bg-white/50 dark:bg-dark-alt/50 border-black/10 dark:border-white/5 hover:border-gold/30 hover:bg-gold/5"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                            isSelected
                              ? "bg-gold text-primary"
                              : "bg-primary/5 dark:bg-white/5 text-primary dark:text-gold"
                          }`}>
                            {branch.comingSoon ? (
                              <Lock className="w-4 h-4" />
                            ) : (
                              <MapPin className="w-4 h-4" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-extrabold text-xs text-primary dark:text-white leading-snug">
                              {branch.name.split(" Branch")[0]}
                            </h4>
                            <p className="text-[10px] text-text-light dark:text-slate-400 mt-0.5">
                              {branch.comingSoon ? "🔑 Opening Soon" : "✨ Active Branch"}
                            </p>
                          </div>
                        </div>
                        {branch.comingSoon && (
                          <span className="text-[9px] font-black uppercase tracking-wider bg-amber-500/10 text-amber-500 border border-amber-500/25 px-2 py-0.5 rounded-full">
                            Soon
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Selected Branch Detail */}
                <div className="relative overflow-hidden rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 p-4">
                  {/* Branch Image */}
                  <div className="relative w-full h-32 rounded-xl overflow-hidden mb-4 border border-white/5 shadow-inner">
                    <Image
                      src={selectedBranch.image}
                      alt={`${selectedBranch.name}`}
                      fill
                      className={`object-cover transition-all duration-500 ${
                        selectedBranch.comingSoon ? "grayscale brightness-75 blur-[1.5px]" : ""
                      }`}
                    />
                    {selectedBranch.comingSoon && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[0.5px]">
                        <span className="text-white font-black text-xs uppercase tracking-wider bg-amber-500 px-3 py-1 rounded-full shadow-lg">
                          🚧 Opening Soon
                        </span>
                      </div>
                    )}
                  </div>

                  <h4 className="font-bold text-sm text-primary dark:text-white mb-1.5 flex items-center gap-1.5">
                    {selectedBranch.comingSoon ? (
                      <Lock className="text-amber-500 w-4 h-4 shrink-0" />
                    ) : (
                      <MapPin className="text-gold w-4 h-4 shrink-0" />
                    )}
                    {selectedBranch.name}
                  </h4>
                  <p className="text-xs text-text-light dark:text-text-light/80 leading-relaxed">
                    {selectedBranch.comingSoon
                      ? "Admissions for this branch will open soon. Stay tuned!"
                      : selectedBranch.address}
                  </p>
                  {!selectedBranch.comingSoon && (
                    <p className="text-[10px] text-gold font-bold mt-2 uppercase tracking-wide">
                      Landmark: {selectedBranch.landmark}
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              {selectedBranch.comingSoon ? (
                <button
                  disabled
                  className="w-full justify-center text-xs md:text-sm py-3 px-4 font-bold rounded-xl mt-6 bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 border border-slate-300 dark:border-slate-700 cursor-not-allowed flex items-center gap-2"
                >
                  <Lock className="w-4 h-4" /> Coming Soon
                </button>
              ) : (
                <div className="flex gap-2 mt-6">
                  <a
                    id={`navigate-branch-${selectedBranch.id}`}
                    href={selectedBranch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex-1 justify-center text-xs py-3 px-3 font-bold rounded-xl text-center flex items-center gap-1"
                  >
                    Get Directions
                  </a>
                  <a
                    id={`book-demo-${selectedBranch.id}`}
                    href={`https://wa.me/919668580583?text=${encodeURIComponent(`Hi! I'd like to book a free demo class for the ${selectedBranch.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 justify-center text-xs py-3 px-3 font-bold rounded-xl text-center flex items-center gap-1"
                  >
                    Book Demo
                  </a>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Inquiry Form / Google Map Iframe Block */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Inquiry Form */}
            <div className="glass-card p-7 md:p-10 rounded-3xl border border-black/8 dark:border-white/8 relative overflow-hidden flex-1">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-6">
                      <h3 className="text-xl md:text-2xl font-extrabold text-primary dark:text-white font-display">
                        Online Admission Inquiry
                      </h3>
                      <p className="text-sm text-text-light dark:text-slate-400 mt-1.5 leading-relaxed">
                        Please provide valid details so we can schedule the counselling session.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Student Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="studentName" className="text-xs font-bold text-primary dark:text-white uppercase tracking-wider flex items-center gap-1">
                          Student Name
                        </label>
                        <input
                          id="studentName"
                          name="studentName"
                          type="text"
                          value={formState.studentName}
                          onChange={handleInputChange}
                          placeholder="Enter student's full name"
                          className={`w-full px-5 py-3.5 rounded-2xl border-[1.5px] bg-white/80 dark:bg-dark/80 text-sm focus:outline-none transition-all font-medium placeholder:text-text-lighter dark:placeholder:text-slate-600 ${
                            errors.studentName 
                              ? "border-red-400 focus:ring-3 focus:ring-red-500/15" 
                              : "border-black/10 dark:border-white/10 focus:border-gold focus:ring-3 focus:ring-gold/12"
                          }`}
                        />
                        {errors.studentName && (
                          <p className="text-[10px] text-red-500 font-semibold flex items-center gap-1.5 mt-1">
                            <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.studentName}
                          </p>
                        )}
                      </div>

                      {/* Parent Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="parentName" className="text-xs font-bold text-primary dark:text-white uppercase tracking-wider">
                          Parent/Guardian Name
                        </label>
                        <input
                          id="parentName"
                          name="parentName"
                          type="text"
                          value={formState.parentName}
                          onChange={handleInputChange}
                          placeholder="Enter parent's full name"
                          className={`w-full px-5 py-3.5 rounded-2xl border-[1.5px] bg-white/80 dark:bg-dark/80 text-sm focus:outline-none transition-all font-medium placeholder:text-text-lighter dark:placeholder:text-slate-600 ${
                            errors.parentName 
                              ? "border-red-400 focus:ring-3 focus:ring-red-500/15" 
                              : "border-black/10 dark:border-white/10 focus:border-gold focus:ring-3 focus:ring-gold/12"
                          }`}
                        />
                        {errors.parentName && (
                          <p className="text-[10px] text-red-500 font-semibold flex items-center gap-1.5 mt-1">
                            <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.parentName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Select Class */}
                      <div className="space-y-1.5">
                        <label htmlFor="className" className="text-xs font-bold text-primary dark:text-white uppercase tracking-wider">
                          Target Class
                        </label>
                        <select
                          id="className"
                          name="className"
                          value={formState.className}
                          onChange={handleInputChange}
                          className={`w-full px-5 py-3.5 rounded-2xl border-[1.5px] bg-white/80 dark:bg-dark/80 text-sm focus:outline-none transition-all cursor-pointer font-medium ${
                            errors.className 
                              ? "border-red-400 focus:ring-3 focus:ring-red-500/15" 
                              : "border-black/10 dark:border-white/10 focus:border-gold focus:ring-3 focus:ring-gold/12"
                          }`}
                        >
                          <option value="">Select Target Class</option>
                          <option value="Class 6">Class 6 (English &amp; Social Science)</option>
                          <option value="Class 7">Class 7 (English &amp; Social Science)</option>
                          <option value="Class 8">Class 8 (English &amp; Social Science)</option>
                          <option value="Class 9">Class 9 (English &amp; Social Science)</option>
                          <option value="Class 10">Class 10 (Board Exam Batch)</option>
                        </select>
                        {errors.className && (
                          <p className="text-[10px] text-red-500 font-semibold flex items-center gap-1.5 mt-1">
                            <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.className}
                          </p>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs font-bold text-primary dark:text-white uppercase tracking-wider">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={handleInputChange}
                          placeholder="10-digit mobile number"
                          className={`w-full px-5 py-3.5 rounded-2xl border-[1.5px] bg-white/80 dark:bg-dark/80 text-sm focus:outline-none transition-all font-medium placeholder:text-text-lighter dark:placeholder:text-slate-600 ${
                            errors.phone 
                              ? "border-red-400 focus:ring-3 focus:ring-red-500/15" 
                              : "border-black/10 dark:border-white/10 focus:border-gold focus:ring-3 focus:ring-gold/12"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-[10px] text-red-500 font-semibold flex items-center gap-1.5 mt-1">
                            <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-bold text-primary dark:text-white uppercase tracking-wider">
                        Inquiry Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Explain any specific learning challenges, targets, or preferred timings..."
                        className={`w-full px-5 py-3.5 rounded-2xl border-[1.5px] bg-white/80 dark:bg-dark/80 text-sm focus:outline-none transition-all resize-none font-medium placeholder:text-text-lighter dark:placeholder:text-slate-600 ${
                          errors.message 
                            ? "border-red-400 focus:ring-3 focus:ring-red-500/15" 
                            : "border-black/10 dark:border-white/10 focus:border-gold focus:ring-3 focus:ring-gold/12"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[10px] text-red-500 font-semibold flex items-center gap-1.5 mt-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      id="submit-inquiry-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full justify-center font-black text-sm py-4 rounded-2xl cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin shrink-0" />
                          Submitting Inquiry...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Send Admission Request
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-12 px-4 h-full"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center text-gold mb-6 border border-gold/30">
                      <CheckCircle2 className="w-10 h-10 animate-pulse-gold" />
                    </div>
                    
                    <h3 className="text-xl md:text-3xl font-extrabold text-primary dark:text-white font-display mb-3">
                      Inquiry Sent Successfully!
                    </h3>
                    <p className="text-sm text-text-light dark:text-text-light/95 max-w-md mb-8 leading-relaxed">
                      Thank you, <strong className="text-primary dark:text-white">{formState.parentName}</strong>. 
                      We have received your admission request for <strong className="text-primary dark:text-white">{formState.studentName}</strong> (Class {formState.className.replace(/\D/g, "")}). 
                      Our counselor will contact you at <strong className="text-primary dark:text-white">{formState.phone}</strong> shortly.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                      <a
                        id="success-whatsapp-trigger"
                        href={`https://wa.me/919668580583?text=${encodeURIComponent(
                          `Hi, I just submitted an inquiry for my child ${formState.studentName} (Class ${formState.className.replace(/\D/g, "")}). Please check and schedule my counseling session.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp flex-1 justify-center py-3.5 text-xs font-bold rounded-xl"
                      >
                        Confirm on WhatsApp
                      </a>
                      <button
                        id="reset-form-btn"
                        onClick={resetForm}
                        className="btn-secondary flex-1 justify-center py-3.5 text-xs font-bold rounded-xl"
                      >
                        Submit Another
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Map Placement Frame Container */}
            <div className="glass-card p-2 rounded-3xl border border-black/10 dark:border-white/10 overflow-hidden h-[300px] relative group">
              <AnimatePresence mode="wait">
                {selectedBranch.comingSoon ? (
                  <motion.div
                    key="coming-soon-map"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-black/5 dark:bg-white/5 rounded-[20px]"
                  >
                    <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 text-2xl animate-pulse">
                      🚧
                    </div>
                    <h4 className="text-base font-extrabold text-primary dark:text-white font-display mb-1.5">
                      🚧 Opening Soon
                    </h4>
                    <p className="text-xs text-text-light dark:text-slate-400 max-w-xs leading-relaxed">
                      Admissions for this branch will open soon. Stay tuned!
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key={selectedBranch.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full relative"
                  >
                    <div className="absolute top-4 left-4 z-10 bg-primary/95 text-white py-1.5 px-3 rounded-lg text-[10px] font-bold shadow-md uppercase tracking-wider backdrop-blur-md">
                      Showing Map: {selectedBranch.name.split(" Branch")[0]}
                    </div>
                    
                    <iframe
                      title={`Map of Style Zone Study Care - ${selectedBranch.name}`}
                      src={selectedBranch.embedSrc}
                      width="100%"
                      height="100%"
                      style={{ border: 0, borderRadius: "20px" }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale dark:invert contrast-[0.9] hover:grayscale-0 hover:invert-0 transition-all duration-500"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
