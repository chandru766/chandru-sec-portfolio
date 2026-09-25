"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { DecodedText } from "@/components/ui/DecodedText";
import { Shield } from "lucide-react";

export function About() {
  return (
    <section id="about" className="pt-4 pb-12 bg-[#06090e] relative border-t border-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-[#06090e] to-[#06090e] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-cyan-400 font-mono text-xl">/</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
              <DecodedText text="About Me" />
            </h2>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-slate-800/80 shadow-[0_0_30px_rgba(0,229,255,0.15)] group">
              <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              <Image 
                src="/about-image.jpg" 
                alt="Cybersecurity Professional" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Decorative Corner Borders */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50 z-20"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50 z-20"></div>
            </div>
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium w-fit">
              <Shield className="w-4 h-4" />
              Cybersecurity Professional
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-slate-200 leading-tight">
              Focused on AI Security, SOC Operations & VAPT.
            </h3>

            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                I specialize in security monitoring, threat detection, threat hunting, vulnerability assessment, penetration testing, and web application security. My hands-on work includes analyzing security events, investigating threats, testing applications, and identifying vulnerabilities using industry-standard security tools.
              </p>
              <p>
                Currently, I'm expanding into AI Security, focusing on securing AI applications and LLM-based systems, including prompt injection, AI threat modeling, adversarial attacks, and AI application security.
              </p>
              <p className="pl-4 border-l-2 border-emerald-500/50 italic text-slate-300">
                "My approach combines defensive security visibility with an offensive mindset to understand how systems can be attacked and how they can be better protected."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
