"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const CyberBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    // Reduced particle count and connection distance to optimize O(n^2) canvas calculations
    const numParticles = 40; 
    const connectionDistance = 120;
    
    // Cyber Green/Emerald base for particles
    const color = "rgba(0, 255, 135, "; 

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius: Math.random() * 1.5 + 0.5,
        });
      }
    };

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Soft bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = color + "0.8)";
        ctx.fill();

        // Connect nearby particles with telemetry vectors
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = 1 - (dist / connectionDistance);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = color + opacity * 0.25 + ")";
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    initParticles();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none bg-[#06090e] overflow-hidden">
      {/* Layer 1: Matrix Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00FF87 1px, transparent 1px),
            linear-gradient(to bottom, #00FF87 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 0%, black 10%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 0%, black 10%, transparent 80%)',
        }}
      />

      {/* Layer 2: Ambient Spotlight Glows (Optimized: Removed scale animation on heavy blurs) */}
      <motion.div 
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full blur-[120px] bg-[#00E5FF]/10"
      />
      
      <motion.div 
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-0 right-[10%] w-[40vw] h-[40vw] rounded-full blur-[100px] bg-[#00FF87]/10"
      />

      <motion.div 
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-[10%] -right-[10%] w-[60vw] h-[60vw] rounded-full blur-[150px] bg-[#A855F7]/15"
      />

      {/* Layer 3: Particle Mesh Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-10 opacity-70"
      />
    </div>
  );
};
