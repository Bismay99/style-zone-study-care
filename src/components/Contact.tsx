"use client";

import React, { useState } from "react";
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
  AlertCircle
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
}

const branchesData: BranchInfo[] = [
  {
    id: "branch-1",
    name: "Paharkhana (Zone 01)",
    address: "Style Zone Building, Near Main Square, Paharkhana",
    landmark: "Beside State Bank ATM",
    mapQuery: "Paharkhana+Style+Zone+Study+Care",
    embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.64722883389!2d85.8340578!3d20.2527581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE1JzA5LjkiTiA4NcKwNTAnMDIuNiJF!5e0!3m2!1sen!2sin!4v1719144882194!5m2!1sen!2sin"
  },
  {
    id: "branch-2",
    name: "Treasury Colony (Zone 02)",
    address: "Plot No. 42B, Behind State Treasury, Treasury Colony",
    landmark: "Near Head Post Office Road",
    mapQuery: "Treasury+Colony+Style+Zone+Study+Care",
    embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.801235122132!2d85.831024!3d20.245892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE0JzQ1LjIiTiA4NcKwNDknNTEuNyJF!5e0!3m2!1sen!2sin!4v1719144933924!5m2!1sen!2sin"
  },
  {
    id: "branch-3",
    name: "College Chhaka (Zone 03)",
    address: "First Floor, Metro Plaza, College Chhaka",
    landmark: "Opposite Bank of India",
    mapQuery: "College+Chhaka+Style+Zone+Study+Care",
    embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.023419918239!2d85.828945!3d20.239012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE0JzIwLjQiTiA4NcKwNDknNDQuMiJF!5e0!3m2!1sen!2sin!4v1719144973822!5m2!1sen!2sin"
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
    
    // Simulate submission to server/WhatsApp trigger
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // We can also trigger WhatsApp redirect on submit if preferred
      const whatsappText = `New Enrollment Inquiry:\n` +
        `- Student: ${formState.studentName}\n` +
        `- Parent: ${formState.parentName}\n` +
        `- Class: ${formState.className}\n` +
        `- Phone: ${formState.phone}\n` +
        `- Query: ${formState.message}`;
      
      console.log("Form Submitted Successfully:", formState);
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
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs md:text-sm font-bold tracking-widest text-gold uppercase px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 inline-block"
          >
            CONTACT & ENROLLMENT
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight font-display"
          >
            Start Your Free <span className="gradient-text font-display">Demo Classes</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-text-light dark:text-text-light/80"
          >
            Fill out the form below, and we will get back to you within 24 hours. 
            Alternatively, feel free to visit or contact any of our branches directly.
          </motion.p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Branch Locations & Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Actions Panel */}
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-black/10 dark:border-white/10">
              <h3 className="text-lg md:text-xl font-extrabold text-primary dark:text-white mb-6 flex items-center gap-2 font-display">
                <School className="text-gold w-5 h-5" /> Quick Connect
              </h3>
              
              <div className="space-y-4">
                {/* Phone Call */}
                <div className="flex gap-4 items-center bg-black/5 dark:bg-white/5 p-4 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-text-light dark:text-text-light/50">Call Center Helpline</p>
                    <a href="tel:+919668580583" className="font-extrabold text-sm md:text-base text-primary dark:text-white hover:text-gold transition-colors">
                      +91 9668580583
                    </a>
                  </div>
                </div>

                {/* WhatsApp Chat */}
                <div className="flex gap-4 items-center bg-black/5 dark:bg-white/5 p-4 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-text-light dark:text-text-light/50">WhatsApp Assistance</p>
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
                <div className="flex gap-4 items-center bg-black/5 dark:bg-white/5 p-4 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-text-light dark:text-text-light/50">Working Hours</p>
                    <p className="font-bold text-sm text-primary dark:text-white">
                      Mon - Sat: 3:00 PM - 9:00 PM
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
                
                {/* Quick tabs to select branch */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {branchesData.map((branch) => (
                    <button
                      key={branch.id}
                      id={`branch-select-${branch.id}`}
                      onClick={() => setSelectedBranch(branch)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border cursor-pointer transition-all ${
                        selectedBranch.id === branch.id
                          ? "bg-secondary text-white border-transparent"
                          : "bg-white dark:bg-dark text-text-light border-black/10 dark:border-white/10 hover:border-gold"
                      }`}
                    >
                      {branch.name.split(" ")[0]}
                    </button>
                  ))}
                </div>

                {/* Selected Branch Detail */}
                <motion.div
                  key={selectedBranch.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-black/5 dark:bg-white/5 p-4 rounded-2xl border border-black/5 dark:border-white/5"
                >
                  <h4 className="font-bold text-sm text-primary dark:text-white mb-2 flex items-center gap-1.5">
                    <MapPin className="text-gold w-4 h-4 shrink-0" />
                    {selectedBranch.name} Branch
                  </h4>
                  <p className="text-xs text-text-light dark:text-text-light/80 leading-relaxed">
                    {selectedBranch.address}
                  </p>
                  <p className="text-[10px] text-gold font-bold mt-2 uppercase tracking-wide">
                    Landmark: {selectedBranch.landmark}
                  </p>
                </motion.div>
              </div>

              {/* Navigation button */}
              <a
                id={`navigate-branch-${selectedBranch.id}`}
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedBranch.name + " " + selectedBranch.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center text-xs md:text-sm py-3 px-4 font-bold rounded-xl mt-6"
              >
                <Navigation className="w-4 h-4" /> Navigate on Google Maps
              </a>
            </div>

          </div>

          {/* Right Column: Inquiry Form / Google Map Iframe Block */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Inquiry Form */}
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-black/10 dark:border-white/10 relative overflow-hidden flex-1">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-4">
                      <h3 className="text-lg md:text-2xl font-extrabold text-primary dark:text-white font-display">
                        Online Admission Inquiry
                      </h3>
                      <p className="text-xs text-text-light dark:text-text-light/70 mt-1">
                        Please provide valid details so we can schedule the counseling session.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Student Name */}
                      <div className="space-y-1">
                        <label htmlFor="studentName" className="text-xs font-bold text-primary dark:text-white uppercase tracking-wide">
                          Student Name
                        </label>
                        <input
                          id="studentName"
                          name="studentName"
                          type="text"
                          value={formState.studentName}
                          onChange={handleInputChange}
                          placeholder="Enter student's full name"
                          className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-dark text-sm focus:outline-none transition-all ${
                            errors.studentName 
                              ? "border-red-500 focus:ring-1 focus:ring-red-500" 
                              : "border-black/10 dark:border-white/10 focus:border-gold"
                          }`}
                        />
                        {errors.studentName && (
                          <p className="text-[10px] text-red-500 font-semibold flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3" /> {errors.studentName}
                          </p>
                        )}
                      </div>

                      {/* Parent Name */}
                      <div className="space-y-1">
                        <label htmlFor="parentName" className="text-xs font-bold text-primary dark:text-white uppercase tracking-wide">
                          Parent/Guardian Name
                        </label>
                        <input
                          id="parentName"
                          name="parentName"
                          type="text"
                          value={formState.parentName}
                          onChange={handleInputChange}
                          placeholder="Enter parent's full name"
                          className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-dark text-sm focus:outline-none transition-all ${
                            errors.parentName 
                              ? "border-red-500 focus:ring-1 focus:ring-red-500" 
                              : "border-black/10 dark:border-white/10 focus:border-gold"
                          }`}
                        />
                        {errors.parentName && (
                          <p className="text-[10px] text-red-500 font-semibold flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3" /> {errors.parentName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Select Class */}
                      <div className="space-y-1">
                        <label htmlFor="className" className="text-xs font-bold text-primary dark:text-white uppercase tracking-wide">
                          Target Class
                        </label>
                        <select
                          id="className"
                          name="className"
                          value={formState.className}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-dark text-sm focus:outline-none transition-all cursor-pointer ${
                            errors.className 
                              ? "border-red-500 focus:ring-1 focus:ring-red-500" 
                              : "border-black/10 dark:border-white/10 focus:border-gold"
                          }`}
                        >
                          <option value="">Select Target Class</option>
                          <option value="Class 6">Class 6 (English & Social Science)</option>
                          <option value="Class 7">Class 7 (English & Social Science)</option>
                          <option value="Class 8">Class 8 (English & Social Science)</option>
                          <option value="Class 9">Class 9 (English & Social Science)</option>
                          <option value="Class 10">Class 10 (Board Exam Batch)</option>
                        </select>
                        {errors.className && (
                          <p className="text-[10px] text-red-500 font-semibold flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3" /> {errors.className}
                          </p>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div className="space-y-1">
                        <label htmlFor="phone" className="text-xs font-bold text-primary dark:text-white uppercase tracking-wide">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={handleInputChange}
                          placeholder="10-digit mobile number"
                          className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-dark text-sm focus:outline-none transition-all ${
                            errors.phone 
                              ? "border-red-500 focus:ring-1 focus:ring-red-500" 
                              : "border-black/10 dark:border-white/10 focus:border-gold"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-[10px] text-red-500 font-semibold flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3" /> {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label htmlFor="message" className="text-xs font-bold text-primary dark:text-white uppercase tracking-wide">
                        Inquiry Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Explain any specific learning challenges, targets, or preferred timings..."
                        className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-dark text-sm focus:outline-none transition-all resize-none ${
                          errors.message 
                            ? "border-red-500 focus:ring-1 focus:ring-red-500" 
                            : "border-black/10 dark:border-white/10 focus:border-gold"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[10px] text-red-500 font-semibold flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      id="submit-inquiry-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full justify-center font-bold text-sm py-4 rounded-xl cursor-pointer disabled:opacity-50"
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
              <div className="absolute top-4 left-4 z-10 bg-primary/95 text-white py-1.5 px-3 rounded-lg text-[10px] font-bold shadow-md uppercase tracking-wider backdrop-blur-md">
                Showing Map: {selectedBranch.name.split(" ")[0]}
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
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
