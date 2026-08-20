"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Server, Network, Terminal, Database } from "lucide-react";
import { DecodedText } from "@/components/ui/DecodedText";
import { ArchitectureBox } from "@/components/ui/ArchitectureBox";

export function Missions() {
  return (
    <section id="missions" className="py-24 bg-transparent relative border-t border-slate-900 overflow-hidden z-10">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="mb-16 md:mb-24 relative">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
            <DecodedText text="Featured Missions" duration={1200} />
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Architecting defense-in-depth solutions and executing offensive simulations to validate telemetry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Mission 01: Home Lab */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-[#0B101B]/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/40 border border-slate-800/80 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
              <Server className="w-24 h-24 text-emerald-500" />
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg group-hover:border-emerald-500/50 transition-colors">
                <Server className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-1">Operation 01</span>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">Enterprise Cybersecurity Home Lab & SIEM Pipeline</h3>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs font-mono px-3 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 rounded-full">Active Directory</span>
              <span className="text-xs font-mono px-3 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 rounded-full">pfSense</span>
              <span className="text-xs font-mono px-3 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 rounded-full">Snort IDS/IPS</span>
              <span className="text-xs font-mono px-3 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 rounded-full">Wazuh SIEM</span>
              <span className="text-xs font-mono px-3 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 rounded-full">Atomic Red Team</span>
            </div>

            <p className="text-slate-400 mb-8 leading-relaxed">
              Built 10+ VM virtualized SOC environment; simulated real-world attack vectors with Atomic Red Team & Metasploit across 15+ vulnerabilities to benchmark detection rules.
            </p>

            <ArchitectureBox 
              nodes={[
                { id: "1", label: "pfSense WAN/LAN", type: "infrastructure", delay: 0 },
                { id: "2", label: "Snort IDS/IPS", type: "defensive", delay: 0.5 },
                { id: "3", label: "Wazuh SIEM Manager", type: "defensive", delay: 1 },
                { id: "4", label: "AD Domain Controller (10+ VMs)", type: "infrastructure", delay: 1.5 }
              ]} 
            />
          </motion.div>

          {/* Mission 02: DVWA & SIEM Correlation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group bg-[#0B101B]/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/40 border border-slate-800/80 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
              <ShieldAlert className="w-24 h-24 text-cyan-400" />
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg group-hover:border-cyan-500/50 transition-colors">
                <ShieldAlert className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-1">Operation 02</span>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">DVWA Web Security & SIEM Correlation Lab</h3>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs font-mono px-3 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 rounded-full">Kali Linux</span>
              <span className="text-xs font-mono px-3 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 rounded-full">Burp Suite Pro</span>
              <span className="text-xs font-mono px-3 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 rounded-full">Apache & MySQL</span>
              <span className="text-xs font-mono px-3 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 rounded-full">Wazuh SIEM</span>
            </div>

            <p className="text-slate-400 mb-8 leading-relaxed">
              Performed targeted SQLi, XSS, Command Injection & brute-force testing; correlated raw web server access logs with Wazuh detection rules to eliminate false positives.
            </p>

            <ArchitectureBox 
              nodes={[
                { id: "1", label: "Burp Suite Pro / Kali", type: "offensive", delay: 0 },
                { id: "2", label: "HTTP Attack Payloads (SQLi/XSS)", type: "offensive", delay: 0.5 },
                { id: "3", label: "DVWA Server", type: "infrastructure", delay: 1 },
                { id: "4", label: "Wazuh Live Telemetry Ingestion", type: "defensive", delay: 1.5 }
              ]} 
            />
          </motion.div>

          {/* Mission 03: PortSwigger Web Vuln */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-[#0B101B]/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500 hover:-translate-y-1 hover:border-purple-500/40 border border-slate-800/80 relative overflow-hidden lg:col-span-1"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
              <Network className="w-24 h-24 text-purple-400" />
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg group-hover:border-purple-500/50 transition-colors">
                <Network className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-1">Operation 03</span>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">PortSwigger Web Vulnerability & API Exploit Engine</h3>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs font-mono px-3 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 rounded-full">PortSwigger Academy</span>
              <span className="text-xs font-mono px-3 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 rounded-full">Burp Suite Pro</span>
              <span className="text-xs font-mono px-3 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 rounded-full">OWASP Top 10</span>
              <span className="text-xs font-mono px-3 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 rounded-full">API Security</span>
            </div>

            <p className="text-slate-400 mb-8 leading-relaxed">
              Systematic manual exploitation of Blind/Time-based/UNION SQLi, IDOR, BOLA, Broken Access Control, and API logic flaws with CVSS risk documentation.
            </p>

            <div className="mt-8 bg-[#06090e] p-4 rounded-lg border border-slate-800 font-mono text-sm shadow-inner relative group-hover:border-purple-500/30 transition-colors">
              <div className="flex space-x-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              </div>
              <div className="text-purple-400">$ GET /api/v1/user?id=admin' OR 1=1--</div>
              <div className="text-slate-300 mt-2">HTTP/1.1 200 OK</div>
              <div className="text-slate-500">Content-Type: application/json</div>
              <div className="text-slate-300 mt-2">{`{ "status": "success", "data": [ ... ] }`}</div>
              <div className="mt-4 text-xs text-alert-crimson animate-pulse">! VULNERABILITY DETECTED: SQL INJECTION (CRITICAL)</div>
            </div>
          </motion.div>

          {/* Mission 04: Digital Forensics */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group bg-[#0B101B]/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-all duration-500 hover:-translate-y-1 hover:border-red-500/40 border border-slate-800/80 relative overflow-hidden lg:col-span-1"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
              <Database className="w-24 h-24 text-red-500" />
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg group-hover:border-red-500/50 transition-colors">
                <Database className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-1">Operation 04</span>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">Digital Forensics & Disk Artifact Analysis</h3>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs font-mono px-3 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 rounded-full">Autopsy</span>
              <span className="text-xs font-mono px-3 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 rounded-full">PowerShell</span>
              <span className="text-xs font-mono px-3 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 rounded-full">SQL</span>
              <span className="text-xs font-mono px-3 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 rounded-full">Evidence Handling</span>
            </div>

            <p className="text-slate-400 mb-8 leading-relaxed">
              Conducted forensic triage on 5+ disk images; logged 30+ forensic investigation sessions with reproducible evidence validation.
            </p>

            <ArchitectureBox 
              nodes={[
                { id: "1", label: "Raw Disk Image .dd", type: "infrastructure", delay: 0 },
                { id: "2", label: "Autopsy Ingest Engine", type: "defensive", delay: 0.5 },
                { id: "3", label: "Artifact & Registry Carving", type: "defensive", delay: 1 },
                { id: "4", label: "Chain of Custody", type: "infrastructure", delay: 1.5 }
              ]} 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
