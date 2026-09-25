"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, CheckCircle, Clock, Network } from "lucide-react";
import { DecodedText } from "@/components/ui/DecodedText";
import { MagneticHover } from "@/components/ui/MagneticHover";
import { cn } from "@/lib/utils";

const certs = [
  {
    id: "csa",
    title: "Certified SOC Analyst (CSA)",
    issuer: "EC-Council (2026)",
    status: "VALIDATED",
    icon: <Shield className="w-6 h-6" />,
    color: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10"
  },
  {
    id: "cpt",
    title: "Certified Penetration Tester (CPT v4)",
    issuer: "RedTeam Hacker Academy (2026)",
    status: "VALIDATED",
    icon: <Award className="w-6 h-6" />,
    color: "text-purple-400",
    border: "border-purple-500/30",
    bg: "bg-purple-500/10"
  },
  {
    id: "eh",
    title: "Ethical Hacker",
    issuer: "Cisco Networking Academy (2026)",
    status: "VALIDATED",
    icon: <CheckCircle className="w-6 h-6" />,
    color: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10"
  },
  {
    id: "comptia",
    title: "CompTIA Security+",
    issuer: "CompTIA (Pursuing 2026)",
    status: "IN PROGRESS",
    icon: <Clock className="w-6 h-6" />,
    color: "text-amber-400",
    border: "border-amber-500/30",
    bg: "bg-amber-500/10"
  },
  {
    id: "network",
    title: "Network Basic",
    issuer: "Cisco Networking Academy (2026)",
    status: "VALIDATED",
    icon: <Network className="w-6 h-6" />,
    color: "text-blue-400",
    border: "border-blue-500/30",
    bg: "bg-blue-500/10"
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-[#0B101B] relative border-t border-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/10 via-[#0B101B] to-[#0B101B] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
            <DecodedText text="Certifications & Clearances" />
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Validated credentials and ongoing training in defensive and offensive security operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={cert.id}
              className={cn(
                "group relative bg-[#06090e]/80 backdrop-blur-xl border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden",
                cert.border
              )}
            >
              <div className={cn(
                "absolute top-0 right-0 w-32 h-32 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-110",
                cert.bg
              )}></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <MagneticHover>
                  <div className={cn("p-3 rounded-xl inline-flex mb-6 backdrop-blur-md", cert.bg, cert.color)}>
                    {cert.icon}
                  </div>
                </MagneticHover>

                <h3 className="text-lg font-bold text-white leading-snug mb-2 group-hover:text-slate-200 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-slate-400 mb-6 font-mono">
                  {cert.issuer}
                </p>

                <div className="mt-auto">
                  <div className="flex items-center space-x-2">
                    <span className="relative flex h-2 w-2">
                      {cert.status === "VALIDATED" ? (
                        <>
                          <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", cert.bg.replace('/10', ''))}></span>
                          <span className={cn("relative inline-flex rounded-full h-2 w-2", cert.bg.replace('/10', ''))}></span>
                        </>
                      ) : (
                        <span className={cn("relative inline-flex rounded-full h-2 w-2", cert.bg.replace('/10', ''))}></span>
                      )}
                    </span>
                    <span className={cn("text-[10px] font-mono tracking-widest font-semibold", cert.color)}>
                      {cert.status}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
