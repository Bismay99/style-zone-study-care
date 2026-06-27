"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import About from "@/components/About";
import Founder from "@/components/Founder";
import SpecialFocus from "@/components/SpecialFocus";
import Results from "@/components/Results";
import Zones from "@/components/Zones";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import AdmissionProcess from "@/components/AdmissionProcess";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import DemoClassModal from "@/components/DemoClassModal";
import StickyAdmissionBar from "@/components/StickyAdmissionBar";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  return (
    <>
      <Navbar onBookDemo={openDemoModal} />
      <main className="pt-[100px] sm:pt-[110px] xl:pt-[120px]">
        <Hero onBookDemo={openDemoModal} />
        <TrustStats />
        <About onBookDemo={openDemoModal} />
        <Founder />
        <SpecialFocus onBookDemo={openDemoModal} />
        <Results />
        <Zones />
        <Testimonials />
        <Gallery />
        <AdmissionProcess onBookDemo={openDemoModal} />
        <FAQ />
        <Contact />
        <FinalCTA onBookDemo={openDemoModal} />
      </main>
      <Footer onBookDemo={openDemoModal} />

      {/* Global conversion components */}
      <StickyAdmissionBar onBookDemo={openDemoModal} />
      <DemoClassModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </>
  );
}
