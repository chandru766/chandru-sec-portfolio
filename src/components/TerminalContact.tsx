"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Send, Command } from "lucide-react";
import confetti from "canvas-confetti";
import { DecodedText } from "@/components/ui/DecodedText";
import { MagneticHover } from "@/components/ui/MagneticHover";

export function TerminalContact() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", content: "chandru_ai_terminal.exe - v2.0.4" },
    { type: "system", content: "Type 'help' for a list of available commands." }
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Only scroll if the user has actually interacted with the terminal (history > 2)
    if (history.length > 2) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { type: "user", content: `C:\\Users\\Guest> ${input}` }];

    switch (cmd) {
      case "help":
        newHistory.push({ type: "system", content: "Commands: help, whoami, skills, projects, contact, clear" });
        break;
      case "whoami":
        newHistory.push({ type: "system", content: "chandru.sec | SOC Analyst | Threat Hunter | VAPT Specialist" });
        break;
      case "skills":
        newHistory.push({ type: "system", content: "Loading modules... Wazuh, Splunk, Burp Suite, Snort, AD, Metasploit" });
        break;
      case "projects":
        newHistory.push({ type: "system", content: "Accessing missions... Scroll up to view 4 classified operations." });
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
    
    // Simulate network delay
    setTimeout(() => {
      setIsSubmitting(false);
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.8 },
        colors: ["#00FF66", "#00E5FF"]
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
    <section id="contact" className="py-24 bg-void-dark relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Terminal CLI */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col h-[500px] bg-black border border-slate-700 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] relative animate-crt-flicker"
          >
            {/* Scanline overlay */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
              <div className="w-full h-8 bg-gradient-to-b from-transparent via-cyber-green/5 to-transparent animate-scanline"></div>
            </div>

            <div className="flex items-center px-4 py-2 bg-slate-900 border-b border-slate-800 relative z-20">
              <Terminal className="w-4 h-4 text-neutral-400 mr-2" />
              <span className="text-xs font-mono text-neutral-400"><DecodedText text="chandru_ai_terminal.exe" duration={1000} /></span>
              <div className="ml-auto flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-alert-red"></div>
              </div>
            </div>
            <div className="flex-1 p-4 font-mono text-sm overflow-y-auto no-scrollbar">
              {history.map((line, i) => (
                <div 
                  key={i} 
                  className={`mb-2 ${
                    line.type === "user" ? "text-white" : 
                    line.type === "error" ? "text-alert-red" : "text-neon-cyan"
                  }`}
                >
                  {line.content}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
            <div className="p-4 bg-slate-900/50 border-t border-slate-800">
              <form onSubmit={handleCommand} className="flex items-center">
                <span className="text-white font-mono mr-2">C:\Users\Guest&gt;</span>
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono"
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
            className="w-full lg:w-1/2 glass-panel p-8 rounded-lg flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Command className="w-6 h-6 text-cyber-green mr-3" />
              <DecodedText text="Secure Transmission" />
            </h3>
            <form onSubmit={handleSend} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1">IDENTIFIER [NAME]</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-900/80 border border-slate-700 rounded p-3 text-white focus:border-cyber-green focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1">RETURN ADDRESS [EMAIL]</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-900/80 border border-slate-700 rounded p-3 text-white focus:border-cyber-green focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1">PAYLOAD [MESSAGE]</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-900/80 border border-slate-700 rounded p-3 text-white focus:border-cyber-green focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <MagneticHover className="w-full mt-4 flex">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-transparent border border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black font-bold font-mono py-3 rounded transition-all flex items-center justify-center hover:shadow-[0_0_20px_rgba(0,255,102,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "TRANSMITTING..." : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      SEND TRANSMISSION
                    </>
                  )}
                </button>
              </MagneticHover>
            </form>
          </motion.div>

        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <a href="https://github.com/chandru766" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/chandrasekarcyber" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-neutral-500 bg-slate-900 px-3 py-1 rounded">SYS_TIME: {time}</span>
            <span className="text-xs text-neutral-500">© 2026 chandru.sec</span>
          </div>
        </div>
      </div>
    </section>
  );
}
