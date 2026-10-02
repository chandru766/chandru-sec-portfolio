"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#missions" },
    { label: "Arsenal", href: "#arsenal" },
    { label: "Certs", href: "#certifications" },
    { label: "Education", href: "#timeline" },
    { label: "AI-Security-Lab", href: "https://github.com/chandru766/ai-security-lab" },
  ];

  return (
    <nav className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
      <div 
        className={`relative flex items-center justify-between gap-6 px-8 py-3.5 rounded-full transition-all duration-300 w-[95%] md:w-[760px] lg:w-[900px] shadow-lg ${
          scrolled 
            ? "bg-[#070b14]/90 border border-slate-700/80 backdrop-blur-xl" 
            : "bg-[#090d16]/75 border border-slate-800/80 backdrop-blur-md"
        }`}
      >
        
        {/* Left Branding Area */}
        <Link href="/" className="flex items-center space-x-3 group shrink-0">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]"></span>
          </div>
          <div className="flex items-baseline">
            <span className="font-bold text-white text-base md:text-lg tracking-tight">Chandru </span>
            <span className="font-mono text-slate-400 font-normal text-sm">.sec</span>
          </div>
        </Link>
        
        {/* Center Nav Links (Desktop) */}
        <div className="hidden md:flex items-center justify-center gap-8 md:gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href} 
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200"
              {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center space-x-4 shrink-0">
          <Link 
            href="#terminal" 
            className="hidden md:inline-block bg-white text-slate-950 hover:bg-slate-200 text-xs md:text-sm font-semibold px-5 md:px-6 py-1.5 md:py-2 rounded-full transition-all duration-200"
          >
            Contact
          </Link>

          {/* Mobile CTA & Toggle */}
          <Link 
            href="#terminal" 
            className="md:hidden bg-white text-slate-950 hover:bg-slate-200 text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-200"
          >
            Contact
          </Link>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-400 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-4 bg-[#070b14]/95 border border-slate-800/80 rounded-2xl backdrop-blur-xl shadow-2xl p-4 flex flex-col space-y-4 md:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-400 hover:text-white text-sm font-medium px-4 py-2 hover:bg-slate-800/50 rounded-lg transition-colors"
                  {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
