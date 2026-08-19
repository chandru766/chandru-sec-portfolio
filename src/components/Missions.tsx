"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Database, Server, HardDrive } from "lucide-react";
import { DecodedText } from "@/components/ui/DecodedText";

const missions = [
  {
    id: "01",
    title: "Enterprise Cybersecurity Home Lab & SIEM Pipeline",
    category: "Network Security & Threat Detection",
    icon: <Server className="w-6 h-6 text-cyber-green" />,
    tech: ["VirtualBox", "Active Directory", "Wazuh", "Snort IDS/IPS", "pfSense", "Metasploit", "Atomic Red Team"],
    highlights: [
      "Built a 10+ VM virtualized SOC environment simulating multi-tier enterprise networks, Active Directory, and firewall segmentation.",
      "Executed attack simulations using Atomic Red Team and manual exploits across 15+ vulnerabilities to benchmark detection rules.",
      "Ingested, tuned, and monitored live alert streams via Wazuh SIEM and Snort IDS/IPS."
    ]
  },
  {
    id: "02",
    title: "DVWA Web Security & SIEM Correlation Lab",
    category: "Web App Security & Blue Team Telemetry",
    icon: <Database className="w-6 h-6 text-neon-cyan" />,
    tech: ["Kali Linux", "Burp Suite Pro", "Apache", "MySQL", "Wazuh SIEM"],
    highlights: [
      "Performed targeted offensive campaigns exploiting SQLi, XSS, Command Injection, File Inclusion, and Brute Force attacks.",
      "Configured Wazuh SIEM agent hooks on the web/DB servers to capture raw access logs and authentication telemetry in real time.",
      "Correlated offensive attack payloads against defensive SIEM alerts to refine custom detection rules and eliminate false positives."
    ]
  },
  {
    id: "03",
    title: "PortSwigger Web Vulnerability & API Exploit Engine",
    category: "Offensive Security & VAPT",
    icon: <ShieldAlert className="w-6 h-6 text-alert-red" />,
    tech: ["Burp Suite", "Python", "OWASP Top 10"],
    highlights: [
      "Executed deep-dive manual penetration testing targeting blind/time-based SQL Injection, IDOR, BOLA, and Broken Access Control.",
      "Used Burp Suite Proxy & Intruder for API fuzzing, parameter tampering, and logic flaw discovery.",
      "Formulated structured vulnerability assessment reports with CVSS scoring and remediation playbooks."
    ]
  },
  {
    id: "04",
    title: "Digital Forensics & Disk Artifact Analysis",
    category: "Incident Response & Forensics",
    icon: <HardDrive className="w-6 h-6 text-electric-purple" />,
    tech: ["Autopsy", "PowerShell", "SQL"],
    highlights: [
      "Executed comprehensive forensic triage on 5+ disk images to extract volatile and non-volatile digital evidence.",
      "Documented 30+ forensic investigation sessions preserving strict Chain of Custody and forensic reproducibility."
    ]
  }
];

export function Missions() {
  return (
    <section id="missions" className="py-24 bg-void relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="text-cyber-green mr-2">/</span> <DecodedText text="Featured Missions" />
          </h2>
          <p className="text-neutral-400 max-w-2xl text-lg">
            A curated log of high-impact operations across threat detection, penetration testing, and digital forensics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative glass-panel cyber-card-clip p-6 md:p-8 hover:border-cyber-green/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,102,0.15)]"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity"
              >
                {mission.icon}
              </motion.div>
              
              <div className="flex items-center space-x-3 mb-4">
                <span className="font-mono text-cyber-green text-sm border border-cyber-green/30 px-2 py-1 rounded bg-cyber-green/10">
                  MISSION {mission.id}
                </span>
                <span className="text-neutral-400 text-sm font-medium uppercase tracking-wider">
                  {mission.category}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-cyber-green transition-colors">
                {mission.title}
              </h3>

              <div className="mb-6 flex flex-wrap gap-2">
                {mission.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono bg-slate-800 text-neutral-300 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <ul className="space-y-3">
                {mission.highlights.map((highlight, i) => (
                  <li key={i} className="text-sm text-neutral-400 flex items-start">
                    <span className="text-cyber-green mr-2 mt-1">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
