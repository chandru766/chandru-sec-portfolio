"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase } from "lucide-react";
import { DecodedText } from "@/components/ui/DecodedText";
import { MagneticHover } from "@/components/ui/MagneticHover";

const timelineData = [
  {
    type: "education",
    year: "2023 – 2026",
    title: "B.E. in Information Science and Engineering",
    institution: "P.E.S. College of Engineering, Mandya",
    icon: <GraduationCap className="w-5 h-5 text-neon-cyan" />
  },
  {
    type: "education",
    year: "2021 – 2023",
    title: "Diploma in Computer Science and Engineering",
    institution: "JSS Polytechnic, Nanjangud",
    icon: <GraduationCap className="w-5 h-5 text-neon-cyan" />
  }
];

const certData = [
  {
    title: "CSA: Certified SOC Analyst",
    issuer: "RedTeam Hacker Academy",
    status: "Active",
  },
  {
    title: "CPT v4: Certified Penetration Tester",
    issuer: "RedTeam Hacker Academy",
    status: "Active",
  },
  {
    title: "Ethical Hacker",
    issuer: "Cisco Networking Academy",
    status: "Active",
  },
  {
    title: "CEH: Certified Ethical Hacker",
    issuer: "EC-Council",
    status: "In Progress",
  }
];

export function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-void relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Timeline Section */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center">
                <Briefcase className="w-8 h-8 text-cyber-green mr-4" />
                <DecodedText text="Career & Education" />
              </h2>
            </motion.div>

            <div className="relative border-l border-slate-700 ml-4">
              {/* Glowing data stream */}
              <motion.div 
                animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-[-1px] w-[2px] h-16 bg-gradient-to-b from-transparent via-cyber-green to-transparent z-0"
              />
              {timelineData.map((item, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  key={index} 
                  className="mb-10 ml-8 relative"
                >
                  <div className="absolute -left-[41px] top-1 bg-slate-900 border border-slate-700 p-1.5 rounded-full z-10">
                    {item.icon}
                  </div>
                  <div className="glass-panel p-6 rounded-lg hover:border-neon-cyan/50 transition-colors">
                    <span className="font-mono text-neon-cyan text-sm mb-2 block">{item.year}</span>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-neutral-400 mt-2">{item.institution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center">
                <Award className="w-8 h-8 text-alert-red mr-4" />
                <DecodedText text="Accreditations" />
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certData.map((cert, index) => (
                <MagneticHover key={index} className="h-full w-full block">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-panel p-5 rounded-lg border border-slate-700/50 hover:border-alert-red/50 transition-all flex flex-col justify-between h-full group w-full"
                  >
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 leading-tight">{cert.title}</h3>
                    <p className="text-sm text-neutral-400">{cert.issuer}</p>
                  </div>
                  <div className="mt-4 flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-2 ${cert.status === "Active" ? "bg-cyber-green animate-pulse-fast" : "bg-electric-purple"}`}></div>
                    <span className={`text-xs font-mono ${cert.status === "Active" ? "text-cyber-green" : "text-electric-purple"}`}>
                      {cert.status.toUpperCase()}
                    </span>
                  </div>
                  </motion.div>
                </MagneticHover>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
