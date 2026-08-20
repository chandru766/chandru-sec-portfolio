"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Send, Command, Sparkles, Bot } from "lucide-react";
import confetti from "canvas-confetti";
import { DecodedText } from "@/components/ui/DecodedText";
import { MagneticHover } from "@/components/ui/MagneticHover";
import { cn } from "@/lib/utils";

export function TerminalContact() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", content: "chandru_ai_assistant.exe - Initialization Complete." },
    { type: "system", content: "Type 'help' for a list of available commands." }
  ]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { type: "user", content: `chandru@soc:~$ ${input}` }];

    switch (cmd) {
      case "help":
        newHistory.push({ type: "system", content: "Commands: help, whoami, skills, projects, certs, contact, clear" });
        break;
      case "whoami":
        newHistory.push({ type: "system", content: "chandru.sec | Cybersecurity Engineer | SOC Analyst | VAPT Specialist" });
        break;
      case "skills":
        newHistory.push({ type: "system", content: "Modules: SIEM, VAPT, Network Defense, Web Sec, Scripting. Refer to Arsenal section." });
        break;
      case "projects":
        newHistory.push({ type: "system", content: "Accessing 4 classified operations... Scroll up to 'Missions'." });
        break;
      case "certs":
        newHistory.push({ type: "system", content: "Accreditations: CSA, CPT v4, Ethical Hacker. CEH (In Progress)." });
        break;
      case "contact":
        newHistory.push({ type: "system", content: "Initiating secure transmission channel. Fill out the form below." });
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        newHistory.push({ type: "error", content: `'${cmd}' is not recognized as an internal or external command.` });
    }

    setHistory(newHistory);
    setInput("");
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.8 },
        colors: ["#00E5FF", "#10B981"]
      });
      setFormData({ name: "", email: "", message: "" });
      setHistory([...history, { type: "system", content: "[SUCCESS] Transmission securely sent. Awaiting response." }]);
    }, 1500);
  };

  const [time, setTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().replace("T", " ").substring(0, 19) + " UTC");
    };
    updateTime();
    const int = setInterval(updateTime, 1000);
    return () => clearInterval(int);
  }, []);

  return (
    <section id="terminal" className="pt-8 pb-8 bg-transparent relative border-t border-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Terminal CLI */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col h-[500px] bg-black border border-slate-800 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)] relative"
          >
            {/* Scanline overlay */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
              <div className="w-full h-8 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent animate-scanline"></div>
            </div>

            <div className="flex items-center px-4 py-3 bg-[#0B101B] border-b border-slate-800 relative z-20">
              <Terminal className="w-4 h-4 text-slate-400 mr-2" />
              <span className="text-xs font-mono text-slate-400"><DecodedText text="chandru_ai_assistant.exe" duration={1000} /></span>
              <div className="ml-auto flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              </div>
            </div>
            
            <div ref={containerRef} className="flex-1 p-5 font-mono text-sm overflow-y-auto no-scrollbar">
              {history.map((line, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "mb-2 leading-relaxed",
                    line.type === "user" ? "text-slate-300" : 
                    line.type === "error" ? "text-red-400" : "text-cyan-400"
                  )}
                >
                  {line.content}
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-[#0B101B] border-t border-slate-800 relative z-20">
              <form onSubmit={handleCommand} className="flex items-center">
                <span className="text-emerald-400 font-mono mr-2">chandru@soc:~$</span>
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-slate-300 font-mono"
                  autoComplete="off"
                />
              </form>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-1/2 bg-[#0B101B]/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-800 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Command className="w-6 h-6 text-cyan-400 mr-3" />
              <DecodedText text="Direct Transmission" />
            </h3>
            
            <form onSubmit={handleSend} className="space-y-5">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-2">IDENTIFIER [NAME]</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#06090e] border border-slate-700 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-2">RETURN ADDRESS [EMAIL]</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#06090e] border border-slate-700 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-2">PAYLOAD [MESSAGE]</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[#06090e] border border-slate-700 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              
              <div className="flex mt-6">
                <MagneticHover className="w-full flex">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-slate-950 font-bold font-mono py-3 rounded-lg transition-all flex items-center justify-center hover:bg-cyan-50 disabled:opacity-50 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                  >
                    {isSubmitting ? "TRANSMITTING..." : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        SEND TRANSMISSION
                      </>
                    )}
                  </button>
                </MagneticHover>
              </div>
            </form>
          </motion.div>

        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Status */}
          <div className="flex items-center md:w-1/3 md:justify-start">
            <span className="flex items-center text-xs md:text-sm font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-2"></span>
              SYSTEMS OPERATIONAL
            </span>
          </div>

          {/* Center: Copyright */}
          <div className="flex items-center md:w-1/3 md:justify-center">
            <span className="text-slate-400 text-sm font-mono">chandru.sec © 2026</span>
          </div>

          {/* Right: Socials */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 text-sm font-mono text-slate-400 md:w-1/3">
            <a href="https://github.com/chandru766" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
              </svg>
              GitHub
            </a>
            <a href="https://linkedin.com/in/chandrasekarcyber" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
