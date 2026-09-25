"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal, ShieldAlert, Network, Globe, Code, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { DecodedText } from "@/components/ui/DecodedText";
import { MagneticHover } from "@/components/ui/MagneticHover";

type ExpandedCategory = {
  category: string;
  items: string[];
};

type BentoCard = {
  id: string;
  title: string;
  icon: React.ReactNode;
  titleColor: string;
  colSpan: string;
  badges: string[];
  expandable: boolean;
  expandedData?: ExpandedCategory[];
};

const bentoCards: BentoCard[] = [
  {
    id: "siem",
    title: "SIEM & SOC Operations",
    icon: <Terminal className="w-6 h-6 text-[#00FF87]" />,
    titleColor: "text-[#00FF87]",
    colSpan: "col-span-1 md:col-span-8",
    badges: ["Wazuh SIEM", "Splunk Enterprise", "Windows Event Logs", "Syslogs", "MITRE ATT&CK"],
    expandable: true,
    expandedData: [
      { category: "SIEM & Telemetry", items: ["Wazuh", "Splunk", "ELK Stack"] },
      { category: "Log Analysis & Triage", items: ["Event IDs", "Syslog", "PCAP Analysis"] },
      { category: "Frameworks", items: ["MITRE ATT&CK", "CVSS v3.1"] }
    ]
  },
  {
    id: "vapt",
    title: "Offensive Security & VAPT",
    icon: <ShieldAlert className="w-6 h-6 text-[#EF4444]" />,
    titleColor: "text-white",
    colSpan: "col-span-1 md:col-span-4",
    badges: ["Burp Suite Pro", "Metasploit", "Nmap", "SQLMap", "OWASP ZAP"],
    expandable: false,
  },
  {
    id: "network",
    title: "Network & Threat Defense",
    icon: <Network className="w-6 h-6 text-[#00E5FF]" />,
    titleColor: "text-white",
    colSpan: "col-span-1 md:col-span-5",
    badges: ["Snort IDS/IPS", "Wireshark", "pfSense", "Network Segmentation"],
    expandable: false,
  },
  {
    id: "web",
    title: "Web & API Security",
    icon: <Globe className="w-6 h-6 text-[#A855F7]" />,
    titleColor: "text-white",
    colSpan: "col-span-1 md:col-span-7",
    badges: ["OWASP Top 10", "SQLi (Blind/UNION)", "XSS", "IDOR", "BOLA", "Auth Flaws"],
    expandable: false,
  },
  {
    id: "scripting",
    title: "Scripting & Systems",
    icon: <Code className="w-6 h-6 text-[#00FF87]" />,
    titleColor: "text-[#00FF87]",
    colSpan: "col-span-1 md:col-span-12",
    badges: ["Python", "PowerShell", "Bash", "Kali Linux", "Active Directory", "Docker"],
    expandable: true,
    expandedData: [
      { category: "Automation & Scripting", items: ["Python", "PowerShell", "Bash", "SQL"] },
      { category: "Systems & Infrastructure", items: ["Kali Linux", "Windows Server/AD", "Docker", "VirtualBox/VMware"] }
    ]
  },
  {
    id: "ai-security",
    title: "AI Security",
    icon: <Bot className="w-6 h-6 text-amber-400" />,
    titleColor: "text-amber-400",
    colSpan: "col-span-1 md:col-span-12",
    badges: ["LLM Security", "Prompt Injection", "AI Threat Modeling", "Adversarial Testing"],
    expandable: true,
    expandedData: [
      { 
        category: "Core Skills", 
        items: ["LLM Security", "Prompt Injection", "AI Threat Modeling", "AI Red Teaming", "Adversarial Testing", "RAG Security", "AI App Security", "AI Risk Assessment"] 
      },
      { 
        category: "Frameworks", 
        items: ["OWASP Top 10 for LLM", "MITRE ATLAS", "NIST AI RMF"] 
      },
      { 
        category: "Security Integration", 
        items: ["Threat Hunting", "Vulnerability Assessment", "Web App Security", "SIEM & Log Analysis", "Security Automation"] 
      }
    ]
  }
];

export function Arsenal() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section id="arsenal" className="pt-8 pb-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="text-[#00FF87] mr-2">/</span> <DecodedText text="Technical Arsenal" />
          </h2>
          <p className="text-neutral-400 max-w-2xl text-lg">
            A comprehensive overview of the tools, frameworks, and methodologies used to secure and test digital infrastructures.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min">
          {bentoCards.map((card) => (
            <motion.div
              layoutId={card.id}
              key={card.id}
              onClick={() => card.expandable && setSelectedId(card.id)}
              className={cn(
                "glass-panel rounded-2xl p-6 relative group transition-all duration-300 border border-slate-800/50 hover:bg-slate-900/40 hover:border-slate-700 flex flex-col justify-between",
                card.colSpan,
                card.expandable ? "cursor-pointer hover:shadow-lg" : "cursor-default"
              )}
            >
              {card.expandable && (
                <div className="absolute top-6 right-6">
                  <span className="text-xs font-mono text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    EXPAND [+]
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <MagneticHover>{card.icon}</MagneticHover>
                  <h3 className={cn("text-xl md:text-2xl font-bold tracking-tight", card.titleColor)}>
                    {card.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {card.badges.map((badge, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 bg-[#06090e] border border-slate-800/80 rounded-md text-xs font-mono text-slate-300 group-hover:border-slate-700/80 transition-colors"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanded Modal */}
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
                className="relative bg-[#0B101B] border border-slate-700/80 w-full max-w-4xl rounded-2xl p-6 md:p-10 shadow-2xl z-10 overflow-hidden"
              >
                {(() => {
                  const data = bentoCards.find((d) => d.id === selectedId);
                  if (!data) return null;
                  return (
                    <>
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00FF87] to-transparent opacity-50" />
                      
                      <button 
                        onClick={() => setSelectedId(null)}
                        className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors flex items-center text-xs font-mono"
                      >
                        COLLAPSE [-]
                      </button>
                      
                      <div className="flex items-center space-x-4 mb-8">
                        <MagneticHover>{data.icon}</MagneticHover>
                        <h3 className={cn("text-2xl md:text-3xl font-bold", data.titleColor)}>
                          <DecodedText text={data.title} duration={600} />
                        </h3>
                      </div>
                      
                      {data.expandedData && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          {data.expandedData.map((section, idx) => (
                            <div key={idx}>
                              <h4 className="text-sm font-mono text-slate-400 mb-4 border-b border-slate-800 pb-2">
                                // {section.category}
                              </h4>
                              <ul className="space-y-3">
                                {section.items.map((item, itemIdx) => (
                                  <motion.li 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: itemIdx * 0.1 + idx * 0.1 }}
                                    key={itemIdx}
                                    className="flex items-center text-slate-300 text-sm font-medium"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF87]/50 mr-3 shrink-0" />
                                    {item}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
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
