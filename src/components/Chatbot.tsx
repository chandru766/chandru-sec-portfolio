"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User } from "lucide-react";
import Image from "next/image";

type Message = {
  id: string;
  text: string;
  isBot: boolean;
  typingCompleted?: boolean;
};

const renderFormattedText = (text: string) => {
  const html = text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-cyan-300">$1</strong>')
    .replace(/\n/g, '<br />');
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

const TypingMessage = ({ text, onComplete }: { text: string; onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, i));
      i++;
      if (i > text.length) {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, 10); // Fast typing
    return () => clearInterval(interval);
  }, [text, onComplete]);

  return renderFormattedText(displayedText);
};

export function Chatbot() {
  const [chatState, setChatState] = useState<"idle" | "clicked" | "scanning" | "open">("idle");
  const [isThinking, setIsThinking] = useState(false);
  
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Hi! 👋 I'm Chandrasekar's Cybersecurity AI Assistant.\n\nI can help you explore his cybersecurity skills, SOC and VAPT experience, AI Security learning, projects, certifications, and practical labs.\n\nWhat would you like to know?", isBot: true, typingCompleted: false }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickActions = [
    "👨💻 About Me", "🛡️ Skills", "🚨 SOC", "⚔️ VAPT", "🤖 AI Security", 
    "🧪 Projects", "🎓 Certifications", "📩 Contact"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (chatState === "open") {
      scrollToBottom();
    }
  }, [messages, chatState, isThinking]);

  // Removed SpeechRecognition useEffect

  const handleFabClick = () => {
    setChatState("clicked");
    setTimeout(() => {
      setChatState("scanning");
      setTimeout(() => {
        setChatState("open");
      }, 700);
    }, 400);
  };

  const handleClose = () => {
    setChatState("idle");
  };

  // Removed handleVoiceInput and toggleListening

  const handleSend = (overrideText?: string) => {
    const textToSend = overrideText || input;
    if (!textToSend.trim()) return;
    
    setInput("");
    processMessage(textToSend);
  };

  const processMessage = (text: string) => {
    const userMessage = { id: Date.now().toString(), text, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    
    setIsThinking(true);
    // Simulate thinking delay
    setTimeout(() => {
      setIsThinking(false);
      const responseText = getBotResponse(text);
      const botMessage = { id: (Date.now() + 1).toString(), text: responseText, isBot: true, typingCompleted: false };
      setMessages(prev => [...prev, botMessage]);
    }, 1200);
  };

  // Removed speak function

  const getBotResponse = (query: string): string => {
    const q = query.toLowerCase();
    
    // About Me
    if (q.includes("about") || q.includes("who is") || q.includes("introduce")) {
      return "Chandrasekar L is a cybersecurity-focused professional with training and hands-on lab experience across SOC operations, VAPT, network security, and web application security.\n\nHis technical work includes security monitoring, vulnerability assessment, incident investigation, and tools such as Wazuh, Splunk, Nmap, Wireshark, Burp Suite, and Metasploit.\n\nHe is also currently expanding his focus into **AI Security**, particularly LLM Security, Prompt Injection, RAG Security, and AI Red Teaming.";
    }

    // Skills
    if (q.includes("skill") || q.includes("tool") || q.includes("tech") || q.includes("stack")) {
      return "**SOC & Security Operations**\n- Security Monitoring\n- Alert Triage\n- Log Analysis\n- Threat Detection\n- Incident Response\n- IOC Analysis\n\n**VAPT & Web Security**\n- Vulnerability Assessment\n- Penetration Testing\n- SQL Injection\n- XSS\n- IDOR\n- BOLA\n- Broken Access Control\n\n**Security Tools**\n- Wazuh\n- Splunk\n- Nmap\n- Wireshark\n- Burp Suite\n- Metasploit\n- Nessus\n- Microsoft Sentinel\n\n**AI Security**\n- LLM Security\n- Prompt Injection\n- RAG Security\n- AI Red Teaming\n- LLM Application Security";
    }

    // SOC
    if (q.includes("soc") || q.includes("incident") || q.includes("monitoring")) {
      return "Chandrasekar's SOC knowledge covers Security Monitoring, Alert Triage, Log Analysis, Threat Detection, and Incident Response. He is trained in utilizing SIEM tools such as Wazuh, Splunk, Microsoft Sentinel, and the ELK Stack to analyze IOCs and perform incident investigations using MITRE ATT&CK frameworks.";
    }

    // VAPT / Web Sec
    if (q.includes("vapt") || q.includes("web") || q.includes("sql") || q.includes("xss") || q.includes("penetration")) {
      return "His VAPT expertise encompasses Reconnaissance, Port Scanning, Enumeration, Exploitation, and Privilege Escalation. In Web Application Security, he has practical lab experience identifying vulnerabilities like SQL Injection, XSS, IDOR, BOLA, CSRF, SSRF, and Broken Access Control based on the OWASP Top 10.";
    }

    // AI Security
    if (q.includes("ai") || q.includes("llm") || q.includes("prompt") || q.includes("rag") || q.includes("red team")) {
      return "Chandrasekar is currently developing his AI Security skill set alongside his cybersecurity background.\n\nHis current focus includes:\n- LLM fundamentals\n- Prompt Injection\n- Jailbreaks\n- RAG Security\n- Data Leakage\n- LLM Application Security\n- AI Red Teaming\n- AI Security Testing\n\nHe is also building practical projects to apply these concepts in controlled environments.";
    }

    // Projects
    if (q.includes("project") || q.includes("lab") || q.includes("work")) {
      return "**LLM Security Testing Lab**\n**Objective:** A controlled environment for studying security issues in LLM applications.\n**Security Focus:** Prompt Injection, Jailbreaks, RAG Security, Data Leakage.\n**Status:** Learning / Building\n\n**AI SOC Analyst**\n**Objective:** An AI-powered assistant designed to analyze security logs and assist with investigations.\n**Status:** Project / Development\n\n**DVWA Security Lab**\n**Objective:** Practice web application security testing.\n**Technologies:** Kali Linux, DVWA, Burp Suite, SQLMap, Wazuh.\n\n**Wazuh Home SOC Lab**\n**Objective:** Build a home security monitoring environment focusing on log collection and threat detection.";
    }

    // Education
    if (q.includes("education") || q.includes("degree") || q.includes("college") || q.includes("university")) {
      return "**Bachelor of Engineering (B.E.)**\nBranch: Information Science and Engineering\nCollege: P.E.S College of Engineering, Mandya\nGraduation Year: 2026\n\n**Diploma**\nInstitution: JSS Polytechnic, Nanjangud\nPeriod: 2020–2023";
    }

    // Certifications
    if (q.includes("cert") || q.includes("training") || q.includes("csa") || q.includes("cpt")) {
      return "**Completed**\n- Certified Penetration Tester v4 (CPTv4) — RedTeam Hacker Academy\n- Certified SOC Analyst (CSA) — RedTeam Hacker Academy\n- Microsoft Learn – AI Security Fundamentals\n\n**Currently Pursuing**\n- CompTIA Security+";
    }

    // Experience
    if (q.includes("experience") || q.includes("job")) {
      return "**Security Analyst**\nRedTeam Hacker Academy\n**Period:** May 2026 – Aug 2026\n**Key Activities:**\n- Analyzed 500+ log events weekly\n- Triaged 50+ critical alerts\n- Analyzed 10+ GB of network traffic using Wireshark\n- Escalated 15+ high-priority incidents\n**Reported Metrics:**\n- Contributed to a reported 25% reduction in MTTD\n\n**Security Analyst**\nUNLOX\n**Period:** Nov 2025 – Jan 2026";
    }

    // Github
    if (q.includes("github") || q.includes("repo") || q.includes("code")) {
      return "You can explore Chandrasekar's practical labs and repositories on his GitHub:\n[View GitHub] - https://github.com/chandru766";
    }

    // Contact / LinkedIn / Resume
    if (q.includes("contact") || q.includes("email") || q.includes("reach")) {
      return "You can connect with Chandrasekar via his configured professional contact information.\n\n**LinkedIn:** https://www.linkedin.com/in/chandrasekarcyber/\n\nYou can also use the Terminal Contact form below.";
    }
    if (q.includes("linkedin")) {
      return "[View LinkedIn] - https://www.linkedin.com/in/chandrasekarcyber/\n\nProfessional focus: Security Analyst | SOC Analyst | SIEM | Incident Response | Threat Detection | IOC Analysis | Network Security | VAPT Analyst | IDS/IPS | AI Security";
    }
    if (q.includes("resume") || q.includes("cv")) {
      return "You can view and download Chandrasekar's resume using the **Download Resume** button located at the top of the portfolio.";
    }
    if (q.includes("portfolio")) {
      return "You are currently viewing Chandrasekar's cybersecurity portfolio.";
    }

    // Roles / Why Hire
    if (q.includes("role") || q.includes("looking for") || q.includes("why hire") || q.includes("hire")) {
      return "Chandrasekar is currently focused on cybersecurity opportunities in:\n- SOC / Security Operations\n- Security Analysis\n- VAPT\n- Cybersecurity Analysis\n- AI Security / LLM Security\n\nHis interests combine traditional cybersecurity operations with emerging AI Security.";
    }
    
    // Technical fallback
    if (q.includes("prompt injection")) {
      return "Prompt injection is an attack technique in which an attacker crafts input designed to influence an LLM into ignoring or overriding intended instructions.\n\nIn an AI application, this can potentially lead to unintended actions, sensitive-data exposure, or manipulation of the model's output.\n\nFrom an AI Security perspective, prompt-injection testing is an important part of securing LLM-powered applications.";
    }

    return "I don't have that information in Chandrasekar's portfolio yet.";
  };

  return (
    <>
      {/* Floating Action Button (Idle, Clicked, Scanning) */}
      <AnimatePresence>
        {chatState !== "open" && (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 0 }}
            animate={{ 
              scale: chatState === "idle" ? 1 : chatState === "clicked" ? 0.9 : 1.1, 
              opacity: 1, 
              y: chatState === "idle" ? [0, -6, 0] : 0,
            }}
            exit={{ scale: 0, opacity: 0, transition: { duration: 0.2 } }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.2 }
            }}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center cursor-pointer group"
            onClick={chatState === "idle" ? handleFabClick : undefined}
            aria-label="Open AI Assistant"
          >
            {/* Ripple Effect Container */}
            {chatState === "clicked" && (
              <motion.div 
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 bg-cyan-500 rounded-full"
              />
            )}

            {/* Main Button */}
            <motion.div 
              whileHover={chatState === "idle" ? { scale: 1.05 } : {}}
              className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-500/80 bg-[#06090e] shadow-[0_0_20px_rgba(0,229,255,0.4)] group-hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] transition-all flex items-center justify-center"
            >
              <Image src="/chatbot-icon-v2.jpg" alt="Chatbot" fill sizes="64px" className="object-cover" />
              
              {/* Idle subtle breathing glow over image */}
              {chatState === "idle" && (
                <motion.div 
                  animate={{ opacity: [0, 0.2, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-cyan-500/20 mix-blend-screen pointer-events-none"
                />
              )}

              {/* Scanning Effect */}
              {chatState === "scanning" && (
                <>
                  <motion.div 
                    initial={{ top: "-10%" }}
                    animate={{ top: "110%" }}
                    transition={{ duration: 0.7, ease: "linear" }}
                    className="absolute left-0 right-0 h-1 bg-cyan-400 shadow-[0_0_10px_#00e5ff] pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-cyan-900/30 animate-pulse pointer-events-none" />
                </>
              )}
            </motion.div>
            
            {/* Optional Scanning Text */}
            {chatState === "scanning" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -top-8 whitespace-nowrap text-[10px] tracking-widest font-mono text-cyan-400 font-bold"
              >
                SECURITY AI INITIALIZING...
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {chatState === "open" && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-4 sm:right-6 left-4 sm:left-auto z-50 sm:w-[400px] h-[550px] max-h-[85vh] flex flex-col bg-[#06090e]/90 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-[0_0_40px_rgba(0,229,255,0.1)] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-[#0a1120] to-[#06090e] border-b border-cyan-500/20">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative border border-cyan-500/50 shadow-[0_0_10px_rgba(0,229,255,0.2)]">
                    <Image src="/chatbot-icon-v2.jpg" alt="Bot" fill sizes="40px" className="object-cover" />
                  </div>
                  <motion.span 
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#0a1120] rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                    Chandru AI Assistant
                  </h3>
                  <p className="text-[11px] text-cyan-400/80">Cybersecurity Portfolio Assistant</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={handleClose}
                  className="text-slate-400 hover:text-red-400 transition-colors p-1.5 rounded-md hover:bg-white/5"
                  aria-label="Close Chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5 scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div className={`flex max-w-[85%] ${msg.isBot ? "flex-row" : "flex-row-reverse"}`}>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center relative overflow-hidden ${msg.isBot ? "mr-3 border border-cyan-500/30" : "bg-cyan-900/50 ml-3"}`}>
                      {msg.isBot ? (
                        <Image src="/chatbot-icon-v2.jpg" alt="Bot" fill sizes="32px" className="object-cover" />
                      ) : (
                        <User className="w-4 h-4 text-cyan-100" />
                      )}
                    </div>
                    <div 
                      className={`p-3.5 rounded-2xl text-[13px] leading-relaxed shadow-sm whitespace-pre-wrap ${
                        msg.isBot 
                          ? "bg-[#0c1322] text-slate-200 rounded-tl-sm border border-cyan-500/10 flex flex-col items-start" 
                          : "bg-cyan-500/20 text-cyan-50 rounded-tr-sm border border-cyan-500/30 backdrop-blur-md"
                      }`}
                    >
                      {msg.isBot && !msg.typingCompleted ? (
                        <TypingMessage 
                          text={msg.text} 
                          onComplete={() => {
                            setMessages(prev => prev.map(m => m.id === msg.id ? { ...m, typingCompleted: true } : m));
                          }} 
                        />
                      ) : (
                        renderFormattedText(msg.text)
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Quick Actions */}
              {!isThinking && !(messages[messages.length - 1]?.isBot && !messages[messages.length - 1]?.typingCompleted) && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-wrap gap-2 pt-2 pb-2"
                >
                  {quickActions.map(action => (
                    <button 
                      key={action}
                      onClick={() => handleSend(action)}
                      className="px-3 py-1.5 text-xs bg-[#0c1322] hover:bg-cyan-900/40 border border-cyan-500/30 hover:border-cyan-400 text-cyan-100 rounded-full transition-all cursor-pointer shadow-sm"
                    >
                      {action}
                    </button>
                  ))}
                </motion.div>
              )}
              
              {/* Thinking Indicator */}
              {isThinking && (
                <div className="flex justify-start">
                  <div className="flex max-w-[85%] flex-row">
                    <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center relative overflow-hidden mr-3 border border-cyan-500/30">
                      <Image src="/chatbot-icon-v2.jpg" alt="Bot" fill sizes="32px" className="object-cover" />
                    </div>
                    <div className="p-3.5 rounded-2xl rounded-tl-sm bg-[#0c1322] border border-cyan-500/10 flex items-center space-x-1">
                      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#06090e] border-t border-cyan-500/20">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center space-x-2 bg-[#0c1322] border border-cyan-900 rounded-full px-1.5 py-1.5 focus-within:border-cyan-500/50 focus-within:ring-1 focus-within:ring-cyan-500/50 transition-all"
              >
                <div className="flex-1 px-3">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your question..."
                    className="w-full bg-transparent text-slate-200 text-sm focus:outline-none placeholder-slate-500 h-9"
                    disabled={isThinking}
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={!input.trim() || isThinking}
                  className="p-2 bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-800 disabled:text-slate-500 text-[#06090e] rounded-full transition-colors flex items-center justify-center shrink-0"
                  aria-label="Send Message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
