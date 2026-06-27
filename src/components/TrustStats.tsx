"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Users, Heart, MapPin, Award } from "lucide-react";

interface CounterProps {
  value: number;
  duration?: number;
}

function Counter({ value, duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setCount(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function TrustStats() {
  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: "+",
      label: "Students Guided",
    },
    {
      icon: Heart,
      value: 95,
      suffix: "%",
      label: "Parent Satisfaction",
    },
    {
      icon: MapPin,
      value: 3,
      suffix: "",
      label: "Study Zones",
    },
    {
      icon: Award,
      value: 17,
      suffix: "+ Yrs",
      label: "Education Excellence",
    },
  ];

  return (
    <section className="py-8 bg-primary text-white border-y border-gold/20 relative overflow-hidden">
      {/* Decorative light reflection overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none" />

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10 items-center justify-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 p-4 text-center sm:text-left first:border-t-0 first:pt-4 lg:pt-4"
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center text-gold shadow-inner border border-gold/15 flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Counter & Label */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black font-sans leading-none tracking-tight flex items-baseline justify-center sm:justify-start text-white">
                    <span className="stat-counter-glow">
                      <Counter value={stat.value} />
                    </span>
                    <span className="text-gold text-xl font-bold ml-0.5">
                      {stat.suffix}
                    </span>
                  </h3>
                  <p className="text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-widest mt-1">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
