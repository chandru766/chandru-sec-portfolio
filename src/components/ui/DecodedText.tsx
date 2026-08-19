"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface DecodedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

const chars = "!<>-_\\\\/[]{}—=+*^?#________";

export const DecodedText: React.FC<DecodedTextProps> = ({ 
  text, 
  className = "", 
  delay = 0,
  duration = 800 // default duration in ms
}) => {
  const [displayText, setDisplayText] = useState("");
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!inView) return;

    let iteration = 0;
    const steps = text.length;
    const intervalTime = duration / steps;
    
    const interval = setInterval(() => {
      setDisplayText((prev) => 
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            // Skip spaces
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= steps) {
        clearInterval(interval);
      }
      
      // We increment by a small fraction so it decodes faster/slower
      iteration += 1/3;
    }, intervalTime);

    return () => clearInterval(interval);
  }, [text, inView, duration]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        setTimeout(() => setInView(true), delay * 1000);
      }}
    >
      {displayText || text.replace(/./g, (c) => (c === " " ? " " : chars[0]))}
    </motion.span>
  );
};
