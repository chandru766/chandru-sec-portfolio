"use client";
import React from "react";
import { motion } from "framer-motion";

export const Marquee = ({ items }: { items: string[] }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap w-full group">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
        className="flex min-w-full"
      >
        {/* Double the array for seamless infinite scroll */}
        {[...items, ...items].map((item, i) => (
          <div 
            key={i} 
            className="px-8 py-2 flex items-center gap-8"
          >
            <span className="text-sm font-mono text-slate-300 tracking-wider">
              {item}
            </span>
            <span className="text-slate-600 font-bold opacity-75">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
