import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Missions } from "@/components/Missions";
import { Arsenal } from "@/components/Arsenal";
import { Timeline } from "@/components/Timeline";
import { TerminalContact } from "@/components/TerminalContact";

export default function Home() {
  return (
    <main className="min-h-screen bg-void selection:bg-cyber-green selection:text-black">
      <Navbar />
      <Hero />
      <Missions />
      <Arsenal />
      <Timeline />
      <TerminalContact />
    </main>
  );
}
