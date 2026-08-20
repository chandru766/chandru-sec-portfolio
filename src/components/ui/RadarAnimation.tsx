"use client";
import React from "react";
import { motion } from "framer-motion";
import { Activity, Network, ShieldCheck, Bug, Server, Fingerprint, Lock, Database, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const IconWrapper = ({ icon: Icon, label, className }: { icon: any, label: string, className?: string }) => (
  <div className={cn("flex flex-col items-center justify-center gap-2", className)}>
    <div className="bg-[#0f1522] border border-slate-800 p-4 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.5)]">
      <Icon className="w-6 h-6 text-slate-300" strokeWidth={1.5} />
    </div>
    <span className="text-xs font-semibold text-slate-400 whitespace-nowrap">{label}</span>
  </div>
);

export function RadarAnimation() {
  return (
    <div className="relative w-full max-w-4xl mx-auto flex justify-center items-end overflow-hidden h-[230px] sm:h-[290px] md:h-[370px] lg:h-[460px]">
      
      {/* Responsive Scale Wrapper */}
      <div className="absolute bottom-0 transform scale-[0.45] sm:scale-[0.6] md:scale-[0.8] lg:scale-100 origin-bottom transition-transform duration-300">
        {/* Container for the half-circle radar */}
        <div className="relative w-[800px] h-[400px]">
        
        {/* Radar Rings & Grid */}
        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-slate-800/50"></div>
        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-slate-800/50"></div>
        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-slate-800/50"></div>
        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-slate-800/50"></div>
        
        {/* Radar Crosshairs */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-[400px] bg-slate-800/50"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[1px] bg-slate-800/50"></div>
        
        <div className="absolute bottom-0 left-1/2 origin-bottom -rotate-45 w-[1px] h-[400px] bg-slate-800/50"></div>
        <div className="absolute bottom-0 left-1/2 origin-bottom rotate-45 w-[1px] h-[400px] bg-slate-800/50"></div>
        <div className="absolute bottom-0 left-1/2 origin-bottom -rotate-[67.5deg] w-[1px] h-[400px] bg-slate-800/50"></div>
        <div className="absolute bottom-0 left-1/2 origin-bottom rotate-[67.5deg] w-[1px] h-[400px] bg-slate-800/50"></div>

        {/* Sweeping Scanner */}
        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 origin-center rounded-full"
            style={{
              background: "conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(0, 229, 255, 0.05) 60deg, rgba(0, 229, 255, 0.4) 90deg, transparent 90deg)"
            }}
          />
        </div>

        {/* Red Blip Dot */}
        <motion.div 
          animate={{ opacity: [0, 1, 0, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", times: [0, 0.1, 0.2, 1] }}
          className="absolute right-[200px] bottom-[120px] w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444]"
        ></motion.div>

        {/* Icons */}
        
        {/* Left Outer */}
        <div className="absolute -left-[40px] top-[40px]">
          <IconWrapper icon={Activity} label="SOC Monitoring" />
        </div>
        
        {/* Left Bottom (Web Security) */}
        <div className="absolute left-[120px] top-[300px]">
          <IconWrapper icon={Globe} label="Web Security" />
        </div>
        
        {/* Left Middle */}
        <div className="absolute left-[40px] top-[180px]">
          <IconWrapper icon={Network} label="Network Security" />
        </div>

        {/* Arc Inner Left */}
        <div className="absolute left-[200px] top-[120px]">
          <IconWrapper icon={ShieldCheck} label="Incident Response" />
        </div>

        {/* Top Center */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-[20px]">
          <IconWrapper icon={Bug} label="Threat Detection" />
        </div>

        {/* Bottom Center */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[40px]">
          <IconWrapper icon={Server} label="Server Hardening" />
        </div>

        {/* Arc Inner Right */}
        <div className="absolute right-[200px] top-[120px]">
          <IconWrapper icon={Fingerprint} label="IAM Security" />
        </div>

        {/* Right Outer Top */}
        <div className="absolute -right-[40px] top-[40px]">
          <IconWrapper icon={Lock} label="Access Control" />
        </div>

        {/* Right Middle */}
        <div className="absolute right-[40px] top-[180px]">
          <IconWrapper icon={Database} label="SIEM Logs" />
        </div>

        </div>
      </div>
    </div>
  );
}
