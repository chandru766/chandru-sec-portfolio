import React from "react";
import Link from "next/link";
import { Terminal } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-panel border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Terminal className="text-cyber-green w-6 h-6" />
            <Link href="/" className="font-mono text-lg font-bold text-white hover:text-cyber-green transition-colors">
              chandru.sec
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link href="#missions" className="text-sm font-medium text-gray-300 hover:text-cyber-green transition-colors">
                Missions
              </Link>
              <Link href="#arsenal" className="text-sm font-medium text-gray-300 hover:text-cyber-green transition-colors">
                Arsenal
              </Link>
              <Link href="#timeline" className="text-sm font-medium text-gray-300 hover:text-cyber-green transition-colors">
                Timeline
              </Link>
              <Link href="#contact" className="text-sm font-medium text-gray-300 hover:text-cyber-green transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse-fast shadow-[0_0_8px_#00FF66]"></div>
            <span className="text-[10px] md:text-xs font-mono text-cyber-green tracking-widest hidden sm:inline-block">
              THREAT MONITORING ACTIVE
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
