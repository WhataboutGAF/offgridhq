"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, WifiOff } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden font-modern flex flex-col items-center justify-center p-6 text-center selection:bg-primary selection:text-white">
      {/* Grid Pattern Background */}
      <style dangerouslySetInnerHTML={{__html: `
        .grid-bg {
          background-image: 
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .dark .grid-bg {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-3px, 3px); }
          40% { transform: translate(-3px, -3px); }
          60% { transform: translate(3px, 3px); }
          80% { transform: translate(3px, -3px); }
          100% { transform: translate(0); }
        }
        .glitch-text {
          animation: glitch 0.3s infinite;
          animation-play-state: paused;
        }
        .group:hover .glitch-text {
          animation-play-state: running;
        }
      `}} />
      
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />
      
      <div className="absolute top-0 w-full">
        <Navbar />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 space-y-8 group"
      >
        <div className="flex flex-col items-center space-y-2">
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, -1, 1, 0],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="w-24 h-24 rounded-full border-[4px] border-primary/20 flex items-center justify-center mb-4"
          >
            <WifiOff className="w-12 h-12 text-primary" />
          </motion.div>
          
          <h1 className="text-[120px] md:text-[200px] font-black leading-none tracking-tighter text-foreground glitch-text select-none">
            404
          </h1>
          <div className="h-[4px] w-48 bg-primary rounded-full" />
        </div>

        <div className="space-y-4 max-w-md mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tight text-foreground">
            SIGNAL_LOST: NODE_NOT_FOUND
          </h2>
          <p className="text-sm font-bold text-foreground/60 uppercase tracking-widest leading-relaxed">
            The requested transmission channel has been decommissioned or moved off-grid. Uplink calibration required.
          </p>
        </div>

        <Link href="/">
          <motion.button 
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-foreground text-background px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-[8px_8px_0_0_#4FA4D7] hover:shadow-none transition-all flex items-center gap-3 mx-auto border-[3px] border-foreground"
          >
            <ArrowLeft className="w-5 h-5" />
            RETURN TO GRID
          </motion.button>
        </Link>
      </motion.div>

      {/* Background Decor */}
      <div className="absolute bottom-10 left-10 text-[10px] font-mono opacity-20 hidden md:block uppercase tracking-widest leading-none text-foreground select-none">
        ERROR_CODE: 0x404_NULL_POINTER<br />
        STATUS: DISCONNECTED
      </div>
    </main>
  );
}
