"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Image as ImageIcon } from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  category: "classrooms" | "resources";
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/images/classroom-1.png",
    category: "classrooms",
    caption: "Interactive Learning Sessions",
  },
  {
    id: 2,
    src: "/images/classroom-2.png",
    category: "classrooms",
    caption: "Focused Study Environment",
  },
  {
    id: 3,
    src: "/images/classroom-3.png",
    category: "classrooms",
    caption: "Expert Faculty Guidance",
  },
  {
    id: 4,
    src: "/images/study-materials.png",
    category: "resources",
    caption: "Premium Study Materials",
  },
  {
    id: 5,
    src: "/images/classroom-1.png",
    category: "classrooms",
    caption: "Small Batch Classrooms",
  },
  {
    id: 6,
    src: "/images/classroom-2.png",
    category: "resources",
    caption: "Student Practice Sessions",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 18 },
  },
};

export default function Gallery() {
  const [filter, setFilter] = useState<"all" | "classrooms" | "resources">("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => filter === "all" || item.category === filter
  );

  return (
    <section className="section bg-bg dark:bg-dark relative overflow-hidden" id="gallery">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20 dark:bg-gold/5 dark:text-gold-light">
            Campus Life
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-text-primary dark:text-white mt-4">
            Inside Our <span className="text-primary dark:text-gold-light">Classrooms</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="text-text-light dark:text-slate-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Take a visual tour of our modern facilities, focused study zones, and interactive classroom sessions designed for maximum learning retention.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-10">
          {(["all", "classrooms", "resources"] as const).map((cat) => (
            <button
              key={cat}
              id={`filter-${cat}`}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                filter === cat
                  ? "bg-primary text-white border-primary dark:bg-gold dark:text-primary dark:border-gold shadow-md"
                  : "bg-white/50 backdrop-blur-sm border-black/10 text-text-light hover:border-gold hover:text-gold dark:bg-white/5 dark:border-white/5 dark:text-slate-300 dark:hover:border-gold-light dark:hover:text-gold-light"
              }`}
            >
              {cat === "all" ? "All Photos" : cat === "classrooms" ? "Classrooms" : "Resources & Materials"}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8 }}
                id={`gallery-item-${item.id}`}
                className="group relative aspect-[3/2] rounded-2xl overflow-hidden glass-card border border-white/20 dark:border-white/5 shadow-md cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(item)}
              >
                {/* Image */}
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={idx < 3}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

                {/* Overlay Text & Icon */}
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-between items-end z-10">
                  <div>
                    <span className="text-[10px] text-gold uppercase tracking-wider font-extrabold block">
                      {item.category === "classrooms" ? "Classroom" : "Study Resource"}
                    </span>
                    <h3 className="text-white font-bold text-sm md:text-base font-display mt-0.5 leading-tight">
                      {item.caption}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-primary shadow-lg hover:scale-110 active:scale-95 transition-transform flex-shrink-0">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-white/20 dark:bg-white/5 rounded-3xl border border-dashed border-black/10 dark:border-white/10">
            <ImageIcon className="w-12 h-12 text-text-lighter mx-auto mb-3" />
            <p className="text-text-light dark:text-slate-400 font-medium">No images found in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="gallery-lightbox"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              id="close-lightbox-btn"
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-all border border-white/10 hover:scale-110 active:scale-95 cursor-pointer z-50"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="relative max-w-5xl w-full aspect-[3/2] rounded-2xl overflow-hidden border border-white/15 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.caption}
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 md:p-8">
                <span className="text-xs text-gold uppercase tracking-wider font-black block">
                  {selectedImage.category === "classrooms" ? "Classroom Tour" : "Academic Resource"}
                </span>
                <h3 className="text-white font-bold text-lg md:text-2xl font-display mt-1 leading-tight">
                  {selectedImage.caption}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
