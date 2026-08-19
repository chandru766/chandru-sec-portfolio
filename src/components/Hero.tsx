"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Crosshair } from "lucide-react";
import confetti from "canvas-confetti";
import { cn } from "@/lib/utils";
import { DecodedText } from "@/components/ui/DecodedText";
import { MagneticHover } from "@/components/ui/MagneticHover";

const Spotlight = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill="white"
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

export function Hero() {
  const headline = "Securing the Digital Perimeter with Precision & Offensive Insight.";
  const tags = ["SOC Monitoring", "Wazuh SIEM", "Splunk Enterprise", "VAPT", "Burp Suite Pro", "Snort IDS/IPS", "Active Directory", "OWASP Top 10", "Incident Response"];

  const handleDownload = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#00FF66", "#00E5FF", "#A855F7"],
    });
    // Add resume PDF logic later
  };

  return (
    <div className="relative h-screen w-full flex md:items-center md:justify-center bg-void-dark overflow-hidden pt-24 md:pt-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />
      
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-left md:text-center tracking-tight">
            <DecodedText text="Chandrasekar L" duration={1000} /> <br />
            <span className="text-3xl md:text-5xl text-cyber-green font-mono block mt-2">
              <Crosshair className="inline-block w-8 h-8 md:w-12 md:h-12 mr-2 mb-2 md:mb-4" />
              <DecodedText text="Cybersecurity Engineer" delay={0.3} duration={1200} />
            </span>
          </h1>
          <p className="mt-6 font-normal text-base md:text-xl text-neutral-300 max-w-3xl text-left md:text-center mx-auto">
            {headline}
          </p>
          <p className="mt-4 font-normal text-sm md:text-base text-neutral-400 max-w-4xl text-left md:text-center mx-auto leading-relaxed hidden sm:block">
            Bridging the gap between SIEM Log Analysis, Threat Detection, and Web Application Penetration Testing. I don't just detect anomalous telemetry—I simulate the adversary to harden the system.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 flex flex-wrap gap-3 justify-start md:justify-center max-w-4xl mx-auto"
        >
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="px-3 py-1 bg-slate-900/50 border border-slate-700/50 rounded-full text-xs font-mono text-neon-cyan/80 hover:text-neon-cyan hover:border-neon-cyan/50 transition-colors"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticHover>
            <button 
              onClick={handleDownload}
              className="w-full sm:w-auto px-8 py-3 rounded-md bg-cyber-green text-black font-semibold hover:bg-cyber-green-light transition-colors flex items-center justify-center group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </button>
          </MagneticHover>
          <MagneticHover>
            <a 
              href="#missions"
              className="w-full sm:w-auto px-8 py-3 rounded-md border border-slate-700 hover:border-cyber-green text-white font-semibold transition-all hover:shadow-[0_0_15px_rgba(0,255,102,0.2)] text-center flex items-center justify-center"
            >
              Explore Missions
            </a>
          </MagneticHover>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </div>
  );
}
