"use client";
import React, { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Missions } from "@/components/Missions";
import { About } from "@/components/About";
import { Arsenal } from "@/components/Arsenal";
import { Timeline } from "@/components/Timeline";
import { Certifications } from "@/components/Certifications";
import { TerminalContact } from "@/components/TerminalContact";
import { Chatbot } from "@/components/Chatbot";

export default function Home() {
  useEffect(() => {
    // Force scroll to top on initial load in case browser tries to restore scroll or hash
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-void selection:bg-cyber-green selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Missions />
      <Arsenal />
      <Certifications />
      <Timeline />
      <TerminalContact />
      <Chatbot />
    </main>
  );
}
