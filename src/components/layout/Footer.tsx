"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const [mounted, setMounted] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(1200);

  React.useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = mounted && windowWidth < 768;

  return (
    <footer className="bg-foreground text-background w-full pt-12 md:pt-24 pb-4 md:pb-8 px-6 md:px-12 overflow-hidden flex flex-col relative z-20 border-t-2 border-background/10">
      
      {/* Background Data-Stream Pulse */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 overflow-hidden">
        <motion.div 
          animate={{ backgroundPosition: ["0% 0%", "0% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
          style={{ 
            backgroundImage: "linear-gradient(to bottom, transparent 0%, #00FFFF 50%, transparent 100%)",
            backgroundSize: "100% 200%" 
          }}
        />
      </div>
      
      {/* Top Signal CTA: Hidden on Mobile for clean look */}
      <motion.div 
        initial={isMobile ? { opacity: 0, scale: 0.9 } : {}}
        whileInView={isMobile ? { opacity: 1, scale: 1 } : {}}
        viewport={{ once: true }}
        className="hidden md:flex flex-col items-center mb-24 space-y-2 group/cta"
      >
        <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 group-hover/cta:tracking-[0.5em] transition-all text-center">STAY UPDATED</p>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl md:text-3xl font-bold uppercase transition-transform duration-500 hover:scale-105"
        >
          Follow along <span className="underline decoration-4 underline-offset-8 decoration-primary hover:text-primary transition-colors">@offgridhq</span>
        </a>
      </motion.div>

      {/* Top Info Grid: Staggered entrance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-20 relative z-10">
        
        {/* Col 1: Info (Always Visible) */}
        <motion.div 
          initial={isMobile ? { opacity: 0, x: -20 } : {}}
          whileInView={isMobile ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 md:space-y-6"
        >
         <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50"
          >
            © OFFGRID HQ 2026 / NODE_01
          </motion.div>
          <div className="space-y-1">
            <p className="text-xs md:text-sm font-bold opacity-80 leading-relaxed uppercase">Open for signals Monday—Friday.</p>

          </div>
        </motion.div>

        {/* Col 2: Newsletter (Desktop Only to reduce height) */}
        <motion.div 
          initial={isMobile ? { opacity: 0 } : {}}
          whileInView={isMobile ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden md:block space-y-6"
        >
          <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">STAY SYNCED</div>
          <p className="text-sm font-bold opacity-80 leading-relaxed uppercase max-w-[240px]">
            Be the first to know when a new node launches.
          </p>
          <div className="relative group w-full max-w-[300px]">
             <input type="email" placeholder="EMAIL SIGNAL" className="w-full bg-transparent border-b-2 border-background/20 py-2 text-sm font-black outline-none focus:border-primary transition-colors pr-10 uppercase placeholder:text-background/30" />
             <ArrowRight className="absolute right-0 bottom-2 w-5 h-5 text-background/40 group-hover:text-primary transition-colors" />
          </div>
        </motion.div>

        {/* Col 3: Links (Staggered Children) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
          className="flex flex-col md:items-end space-y-6 md:pb-0 pb-8 border-b md:border-0 border-background/10"
        >
          <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">UPLINK CHANNELS</div>
          <div className="flex flex-wrap md:flex-col md:items-end gap-x-6 gap-y-3">
             <motion.div variants={{ hidden: { opacity: 0, x: 10 }, visible: { opacity: 1, x: 0 } }}>
               <Link href="/contact" className="text-base md:text-lg font-black uppercase hover:text-primary transition-all hover:underline underline-offset-8 decoration-2 flex items-center gap-2 group">
                 <span className="w-2 h-2 bg-primary group-hover:block hidden animate-pulse" />
                 Contact
               </Link>
             </motion.div>
             <motion.div variants={{ hidden: { opacity: 0, x: 10 }, visible: { opacity: 1, y: 0 } }}>
               <Link href="/about" className="text-base md:text-lg font-black uppercase hover:text-primary transition-all hover:underline underline-offset-8 decoration-2 flex items-center gap-2 group">
                 <span className="w-2 h-2 bg-primary group-hover:block hidden animate-pulse" />
                 Mission
               </Link>
             </motion.div>
             <motion.div variants={{ hidden: { opacity: 0, x: 10 }, visible: { opacity: 1, y: 0 } }}>
               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-black uppercase hover:text-primary transition-all hover:underline underline-offset-8 decoration-2 flex items-center gap-2 group">
                 <span className="w-2 h-2 bg-primary group-hover:block hidden animate-pulse" />
                 Insta
               </a>
             </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Giant Wordmark with Elegant Spectra Animation */}
      <div className="relative w-full flex justify-center items-end leading-none translate-y-[28%] md:translate-y-[35%] select-none pointer-events-none group/wordmark overflow-hidden h-[24vw] md:h-[26vw]">
        <motion.h1 
          className="flex font-bowlby tracking-[-0.08em] uppercase leading-none text-[24vw] md:text-[23vw]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
        >
          {"OFFGRID".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { y: "100%", opacity: 0, scale: 0.8 },
                visible: { 
                  y: 0, 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 12,
                    duration: 1.2
                  }
                }
              }}
              className="inline-block relative"
            >
              <motion.span
                className="inline-block pointer-events-auto cursor-default will-change-transform"
                animate={{
                   backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                   opacity: [0.95, 1, 0.95]
                }}
                transition={{
                   duration: 8,
                   repeat: Infinity,
                   ease: "easeInOut"
                }}
                style={{
                  background: 'linear-gradient(270deg, #0047AB 0%, #800080 20%, #E63946 40%, #00A36C 60%, #00FFFF 80%, #0047AB 100%)',
                  backgroundSize: '400% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 10px rgba(0,255,255,0.1))'
                }}
                whileHover={{ 
                  y: -35, 
                  scale: 1.15,
                  rotate: index % 2 === 0 ? 3 : -3,
                  transition: { duration: 0.5, type: "spring", stiffness: 100 } 
                }}
              >
                {char}
              </motion.span>
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </footer>
  );
}
