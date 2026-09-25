"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { DecodedText } from "@/components/ui/DecodedText";

const timelineData = [
  {
    type: "education",
    year: "2023 – 2026",
    title: "B.E. in Information Science and Engineering",
    institution: "P.E.S. College of Engineering, Mandya",
    icon: <GraduationCap className="w-5 h-5 text-cyan-400" />
  },
  {
    type: "education",
    year: "2021 – 2023",
    title: "Diploma in Computer Science and Engineering",
    institution: "JSS Polytechnic, Nanjangud",
    icon: <GraduationCap className="w-5 h-5 text-cyan-400" />
  },
  {
    type: "education",
    year: "2018 – 2020",
    title: "Computer Science",
    institution: "GHSS HR Sec College Thalavadi, Tamilnadu",
    icon: <GraduationCap className="w-5 h-5 text-cyan-400" />
  },
  {
    type: "education",
    year: "2017 – 2018",
    title: "SSLC",
    institution: "GRG Memorial HR Sec School Ooty, Tamilnadu",
    icon: <GraduationCap className="w-5 h-5 text-cyan-400" />
  }
];

export function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-[#090d16] relative border-t border-slate-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center">
            <Briefcase className="w-8 h-8 text-cyan-400 mr-4" />
            <DecodedText text="Academic Timeline" />
          </h2>
          <p className="text-slate-400 text-lg">
            My foundational journey through computer science and engineering.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-12">
          {/* Glowing data stream */}
          <motion.div 
            animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-[-2px] w-[2px] h-32 bg-gradient-to-b from-transparent via-cyan-400 to-transparent z-0"
          />
          {timelineData.map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              key={index} 
              className="mb-12 ml-10 relative group"
            >
              <div className="absolute -left-[51px] top-1 bg-[#090d16] border border-slate-700 group-hover:border-cyan-400 p-2 rounded-full z-10 transition-colors">
                {item.icon}
              </div>
              <div className="bg-[#0B101B]/80 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(0,229,255,0.1)] transition-all">
                <span className="font-mono text-cyan-400 text-sm mb-2 block tracking-widest">{item.year}</span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
