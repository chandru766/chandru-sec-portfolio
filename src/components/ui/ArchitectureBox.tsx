import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type NodeType = "infrastructure" | "defensive" | "offensive";

interface Node {
  id: string;
  label: string;
  type: NodeType;
  delay: number;
}

export const ArchitectureBox = ({ nodes }: { nodes: Node[] }) => {
  return (
    <div className="w-full bg-[#06090e]/50 border border-slate-800/80 rounded-xl p-6 relative">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        {nodes.map((node, index) => {
          let colors = "border-slate-700 bg-slate-900 text-slate-300";
          if (node.type === "infrastructure") colors = "border-cyan-500/30 bg-cyan-500/10 text-cyan-400";
          if (node.type === "defensive") colors = "border-emerald-500/30 bg-emerald-500/10 text-emerald-400";
          if (node.type === "offensive") colors = "border-red-500/30 bg-red-500/10 text-red-400";
          
          return (
            <React.Fragment key={node.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: node.delay, duration: 0.5 }}
                className={cn(
                  "px-4 py-2 rounded-lg border text-xs font-mono text-center flex-1 w-full md:w-auto shadow-lg relative z-20",
                  colors
                )}
              >
                {node.label}
              </motion.div>
              {index < nodes.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: node.delay + 0.3 }}
                  className="hidden md:block w-8 h-[2px] bg-slate-800 relative z-10"
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-slate-700 rotate-45 transform translate-x-[2px]" />
                </motion.div>
              )}
            </React.Fragment>
          );
        })}
      </div>
      
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:12px_12px] opacity-20 pointer-events-none rounded-xl"></div>
    </div>
  );
};
