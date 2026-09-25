"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Crosshair, ShieldCheck } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";
import confetti from "canvas-confetti";
import { cn } from "@/lib/utils";
import { DecodedText } from "@/components/ui/DecodedText";
import { MagneticHover } from "@/components/ui/MagneticHover";
import { Marquee } from "@/components/ui/Marquee";
import { RadarAnimation } from "@/components/ui/RadarAnimation";

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
  const marqueeItems = [
    "SOC Monitoring", "Wazuh SIEM", "Splunk Enterprise", "Burp Suite Pro",
    "Snort IDS/IPS", "Active Directory", "pfSense", "Metasploit",
    "OWASP Top 10", "Digital Forensics", "MITRE ATT&CK"
  ];

  const handleDownload = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#10B981", "#00E5FF", "#A855F7"],
    });
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-start bg-transparent overflow-hidden pt-20 md:pt-24">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />

      <div className="px-4 pt-4 pb-0 max-w-7xl mx-auto relative z-10 w-full flex flex-col justify-start items-center text-center">
        
        {/* Animated Platforms on the Left */}
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -2, 2, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute left-0 top-40 lg:left-8 lg:top-72 hidden lg:flex flex-col gap-12 items-center justify-center z-20"
        >
          <a 
            href="https://tryhackme.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="TryHackMe"
            className="p-4 rounded-2xl bg-[#06090e]/80 border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all group backdrop-blur-xl translate-x-12"
          >
            <SiTryhackme className="w-10 h-10 text-slate-300 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300" />
          </a>
          
          <a 
            href="https://app.letsdefend.io/" 
            target="_blank" 
            rel="noopener noreferrer"
            title="LetsDefend" 
            className="p-4 rounded-2xl bg-[#06090e]/80 border border-slate-700/80 hover:border-blue-500/50 hover:bg-slate-800/80 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all group backdrop-blur-xl flex flex-col items-center justify-center -translate-x-8"
          >
            <ShieldCheck className="w-10 h-10 text-slate-300 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
          </a>
        </motion.div>

        {/* Animated Robot on the Right */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 2, -2, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute -right-4 top-40 lg:right-4 lg:top-72 hidden lg:flex items-center justify-center z-20"
        >
          <Image 
            src="/hello-robot.png" 
            alt="Hello Robot" 
            width={400} 
            height={300} 
            className="w-48 h-auto md:w-[280px] md:h-auto object-contain drop-shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-transform hover:scale-105"
            priority
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Live Status Badge */}
          <div className="mb-6 flex items-center space-x-2 bg-slate-900/50 border border-emerald-500/30 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-emerald-400 font-medium tracking-widest">
              THREAT MONITORING ACTIVE
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 tracking-tight leading-tight max-w-5xl">
            AI Security & Cyber Defense <br className="hidden md:block" /> with Offensive Precision & Threat Intelligence.
          </h1>

          <p className="mt-6 font-normal text-base md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            I bridge the gap between SIEM Log Analysis, Threat Hunting, Web Security and Offensive Penetration Testing. I don't just detect anomalies—I simulate the adversary to harden defenses.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 flex flex-col items-center justify-center gap-6 w-full"
        >
          {/* Social Links Row */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.4, ease: "easeOut" }}
            className="flex flex-row flex-wrap items-center justify-center gap-4"
          >
            <a 
              href="https://github.com/chandru766" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/40 border border-slate-800/80 text-slate-300 text-sm font-medium hover:text-white hover:border-cyan-500/50 hover:bg-slate-800/60 hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] hover:-translate-y-[2px] transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
              <FaGithub className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/chandrasekarcyber/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/40 border border-slate-800/80 text-slate-300 text-sm font-medium hover:text-white hover:border-cyan-500/50 hover:bg-slate-800/60 hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] hover:-translate-y-[2px] transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
              <FaLinkedin className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300" />
              <span>LinkedIn</span>
            </a>
          </motion.div>

          {/* Main CTAs Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <MagneticHover>
              <a
                href="#missions"
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center transform hover:-translate-y-1"
              >
                View Missions
              </a>
            </MagneticHover>

            <MagneticHover>
              <a
                href="https://drive.google.com/file/d/1TsaISwPHkKabw0wxWjyAY43sPe5Dtv5f/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDownload}
                className="w-full sm:w-auto px-8 py-3 rounded-full border border-slate-700 hover:border-cyan-400 text-white font-semibold transition-all hover:bg-slate-800/50 flex items-center justify-center group"
              >
                <Download className="w-4 h-4 mr-2 group-hover:text-cyan-400 transition-colors" />
                Download Resume
              </a>
            </MagneticHover>
          </div>
        </motion.div>

        {/* Radar Animation Injection */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="w-full mt-8"
        >
          <RadarAnimation />
        </motion.div>
      </div>

      {/* Marquee Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="w-full py-4 relative z-20 border-t border-slate-800/50 bg-[#06090e]/80 backdrop-blur-md"
      >
        <Marquee items={marqueeItems} />
      </motion.div>

      {/* Background radial grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    </div>
  );
}
