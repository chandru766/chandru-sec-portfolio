"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal, Shield, Network, Globe, Code, Search, Activity, FileWarning, Sliders, Map, Crosshair, Bug, Radar, Database, Lock, Share2, Binary, ShieldAlert, Braces, Unlock, Key, Settings, AlertTriangle, FileCode, TerminalSquare, Coffee, Monitor, Server, Box, Layers, Fingerprint } from "lucide-react";
import { cn } from "@/lib/utils";
import { DecodedText } from "@/components/ui/DecodedText";
import { MagneticHover } from "@/components/ui/MagneticHover";

const arsenalData = [
  {
    id: "soc-siem",
    title: "SOC & SIEM Operations",
    icon: <Terminal className="w-8 h-8 text-cyber-green" />,
    colSpan: "col-span-1 md:col-span-2",
    items: [
      { name: "Wazuh", icon: <Search className="w-4 h-4 mr-2" /> },
      { name: "Splunk Enterprise Security", icon: <Activity className="w-4 h-4 mr-2" /> },
      { name: "Log Analysis", icon: <FileWarning className="w-4 h-4 mr-2" /> },
      { name: "Incident Response", icon: <AlertTriangle className="w-4 h-4 mr-2" /> },
      { name: "Alert Triage", icon: <Sliders className="w-4 h-4 mr-2" /> },
      { name: "Rule Tuning", icon: <Settings className="w-4 h-4 mr-2" /> },
      { name: "MITRE ATT&CK Mapping", icon: <Map className="w-4 h-4 mr-2" /> }
    ]
  },
  {
    id: "offensive-sec",
    title: "Offensive Security & VAPT",
    icon: <Shield className="w-8 h-8 text-alert-red" />,
    colSpan: "col-span-1 md:col-span-2 lg:col-span-1",
    items: [
      { name: "Burp Suite Pro", icon: <Bug className="w-4 h-4 mr-2" /> },
      { name: "Metasploit", icon: <Crosshair className="w-4 h-4 mr-2" /> },
      { name: "Nmap", icon: <Radar className="w-4 h-4 mr-2" /> },
      { name: "RustScan", icon: <Search className="w-4 h-4 mr-2" /> },
      { name: "SQLMap", icon: <Database className="w-4 h-4 mr-2" /> },
      { name: "OWASP ZAP", icon: <ShieldAlert className="w-4 h-4 mr-2" /> },
      { name: "Nikto", icon: <Fingerprint className="w-4 h-4 mr-2" /> },
      { name: "WPScan", icon: <Globe className="w-4 h-4 mr-2" /> },
      { name: "Shodan", icon: <Search className="w-4 h-4 mr-2" /> },
      { name: "Maltego", icon: <Share2 className="w-4 h-4 mr-2" /> }
    ]
  },
  {
    id: "network-def",
    title: "Network & Threat Defense",
    icon: <Network className="w-8 h-8 text-neon-cyan" />,
    colSpan: "col-span-1 md:col-span-1",
    items: [
      { name: "Snort (IDS/IPS)", icon: <ShieldAlert className="w-4 h-4 mr-2" /> },
      { name: "Wireshark", icon: <Activity className="w-4 h-4 mr-2" /> },
      { name: "pfSense", icon: <Lock className="w-4 h-4 mr-2" /> },
      { name: "Network Segmentation", icon: <Share2 className="w-4 h-4 mr-2" /> },
      { name: "Firewall Rule Tuning", icon: <Sliders className="w-4 h-4 mr-2" /> },
      { name: "Packet Analysis", icon: <Binary className="w-4 h-4 mr-2" /> }
    ]
  },
  {
    id: "web-api-sec",
    title: "Web & API Security",
    icon: <Globe className="w-8 h-8 text-electric-purple" />,
    colSpan: "col-span-1 md:col-span-2",
    items: [
      { name: "OWASP Top 10", icon: <ShieldAlert className="w-4 h-4 mr-2" /> },
      { name: "SQL Injection", icon: <Database className="w-4 h-4 mr-2" /> },
      { name: "XSS", icon: <Braces className="w-4 h-4 mr-2" /> },
      { name: "IDOR", icon: <Unlock className="w-4 h-4 mr-2" /> },
      { name: "BOLA", icon: <Unlock className="w-4 h-4 mr-2" /> },
      { name: "CSRF", icon: <FileWarning className="w-4 h-4 mr-2" /> },
      { name: "Broken Authentication", icon: <Key className="w-4 h-4 mr-2" /> },
      { name: "Security Misconfiguration", icon: <Settings className="w-4 h-4 mr-2" /> }
    ]
  },
  {
    id: "scripting-infra",
    title: "Scripting & Infrastructure",
    icon: <Code className="w-8 h-8 text-neutral-400" />,
    colSpan: "col-span-1 md:col-span-3",
    items: [
      { name: "Python", icon: <FileCode className="w-4 h-4 mr-2" /> },
      { name: "PowerShell", icon: <TerminalSquare className="w-4 h-4 mr-2" /> },
      { name: "Bash", icon: <Terminal className="w-4 h-4 mr-2" /> },
      { name: "SQL", icon: <Database className="w-4 h-4 mr-2" /> },
      { name: "Java", icon: <Coffee className="w-4 h-4 mr-2" /> },
      { name: "Linux (Kali, Ubuntu)", icon: <Monitor className="w-4 h-4 mr-2" /> },
      { name: "Windows Server", icon: <Server className="w-4 h-4 mr-2" /> },
      { name: "Docker", icon: <Box className="w-4 h-4 mr-2" /> },
      { name: "VirtualBox/VMware", icon: <Layers className="w-4 h-4 mr-2" /> }
    ]
  }
];

export function Arsenal() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section id="arsenal" className="py-24 bg-void-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="text-cyber-green mr-2">/</span> <DecodedText text="Technical Arsenal" />
          </h2>
          <p className="text-neutral-400 max-w-2xl text-lg">
            A comprehensive overview of the tools, frameworks, and methodologies used to secure and test digital infrastructures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {arsenalData.map((item) => (
            <motion.div
              layoutId={item.id}
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={cn(
                "glass-panel rounded-xl p-6 cursor-pointer group hover:bg-slate-900/50 transition-colors flex flex-col justify-between",
                item.colSpan
              )}
            >
              <motion.div className="flex justify-between items-start">
                <MagneticHover>{item.icon}</MagneticHover>
                <span className="text-xs font-mono text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">EXPAND [+]</span>
              </motion.div>
              <motion.h3 className="text-xl font-bold text-white group-hover:text-cyber-green transition-colors mt-auto">
                {item.title}
              </motion.h3>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              <motion.div 
                layoutId={selectedId}
                className="relative bg-slate-900 border border-slate-700 w-full max-w-3xl rounded-xl p-6 md:p-10 shadow-[0_0_50px_rgba(0,255,102,0.1)] z-10"
              >
                {(() => {
                  const data = arsenalData.find((d) => d.id === selectedId);
                  if (!data) return null;
                  return (
                    <>
                      <button 
                        onClick={() => setSelectedId(null)}
                        className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                      <div className="flex items-center space-x-4 mb-8">
                        <MagneticHover>{data.icon}</MagneticHover>
                        <h3 className="text-2xl md:text-3xl font-bold text-white"><DecodedText text={data.title} duration={600} /></h3>
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        {data.items.map((item, i) => (
                          <motion.span 
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: i * 0.05, type: "spring", stiffness: 200, damping: 10 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            key={i} 
                            className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-md text-sm font-mono text-cyber-green flex items-center cursor-default hover:border-cyber-green/50 hover:shadow-[0_0_10px_rgba(0,255,102,0.2)] transition-colors"
                          >
                            {item.icon}
                            {item.name}
                          </motion.span>
                        ))}
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
