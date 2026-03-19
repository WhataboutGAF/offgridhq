"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={Math.random()} // Force re-render/re-animate on navigation
        initial={{ opacity: 0.2, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 1.02 }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94], // Cubic bezier for that smooth zine entrance
          opacity: { duration: 0.4 },
          scale: { duration: 0.7, type: "spring", stiffness: 100 }
        }}
        className="w-full h-full"
      >
        {/* Entrance Signal / Scanner Line effect */}
        <motion.div 
          initial={{ top: "-100%" }}
          animate={{ top: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed left-0 right-0 h-[2px] bg-primary z-[9999] pointer-events-none opacity-40 shadow-[0_0_15px_rgba(var(--primary),0.5)]"
        />
        
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
