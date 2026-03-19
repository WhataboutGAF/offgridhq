"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Moon, Sun, Monitor, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type Theme = 'default' | 'dark' | 'grayscale';

export default function Navbar() {
  const [theme, setTheme] = useState<Theme>('default');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const themes: Theme[] = ['default', 'dark', 'grayscale'];
    const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('app-theme', nextTheme);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'dark': return <Moon className="w-4 h-4" />;
      case 'grayscale': return <Monitor className="w-4 h-4" />;
      default: return <Sun className="w-4 h-4" />;
    }
  };

  const navItems = [
    { label: "HOME", href: "/", sub: "Ground Zero" },
    { label: "ABOUT US", href: "/about", sub: "The Registry" },
    { label: "BLOG", href: "/blog", sub: "Mission Dispatch" },
  ];

  const sidebarVariants = {
    closed: { opacity: 0, x: "-100%" },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav className="w-full bg-background pt-4 md:pt-6 pb-4 md:pb-2 border-b border-foreground/5 sticky top-0 z-[5000] backdrop-blur-sm">
      <div className="w-full px-4 md:px-12">
        <div className="flex justify-between items-center h-10 md:h-auto">
          {/* Mobile Navigation Trigger & Logo */}
          <div className="flex items-center gap-4 md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="w-10 h-10 border-foreground/20 bg-transparent hover:bg-muted rounded-none transition-all duration-300 shadow-[2px_2px_0_0_currentColor] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full sm:w-[450px] bg-background border-r-2 border-foreground p-0 flex flex-col justify-between overflow-hidden">
                <div className="flex-grow flex flex-col">
                  <SheetHeader className="p-8 border-b border-foreground/5 bg-muted/30">
                     <div className="flex items-center justify-between">
                        <SheetTitle className="text-left text-[10px] font-black tracking-[0.4em] uppercase text-primary/60">SYSTEM_NAV</SheetTitle>
                        <div className="flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                           <span className="text-[9px] font-black opacity-40">ONLINE</span>
                        </div>
                     </div>
                  </SheetHeader>
                  
                  <div className="p-8 space-y-2 mt-4">
                    {navItems.map((item, idx) => (
                      <motion.div
                        key={item.label}
                        variants={itemVariants}
                        initial="closed"
                        animate={isMenuOpen ? "open" : "closed"}
                      >
                        <Link 
                          href={item.href} 
                          className="group flex items-end gap-6 py-4 border-b border-foreground/5 hover:border-primary/30 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="text-xs font-black opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all tabular-nums">0{idx + 1}</span>
                          <div className="flex flex-col">
                            <span className="text-5xl font-black tracking-tighter uppercase group-hover:text-primary transition-colors leading-none">{item.label}</span>
                            <span className="text-[9px] font-bold opacity-30 tracking-widest uppercase mt-1 group-hover:opacity-60 transition-opacity">{item.sub}</span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                    
                    <motion.div variants={itemVariants} initial="closed" animate={isMenuOpen ? "open" : "closed"}>
                      <Link 
                        href="/contact" 
                        className="group flex items-end gap-6 py-4 border-b border-foreground/5 hover:border-secondary/30 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-xs font-black opacity-20 group-hover:opacity-100 group-hover:text-secondary transition-all tabular-nums">04</span>
                        <div className="flex flex-col">
                          <span className="text-5xl font-black tracking-tighter uppercase group-hover:text-secondary transition-colors leading-none">CONTACT</span>
                          <span className="text-[9px] font-bold opacity-30 tracking-widest uppercase mt-1 group-hover:opacity-60 transition-opacity">The Uplink</span>
                        </div>
                      </Link>
                    </motion.div>
                  </div>
                </div>
                

              </SheetContent>
            </Sheet>
            
            <Link href="/" className="text-[11px] font-black tracking-[0.2em] text-primary uppercase">OFFGRID HQ</Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-4 md:gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.label}
                href={item.href} 
                className="text-[9px] md:text-[10px] font-black tracking-[0.2em] text-muted-foreground hover:text-primary transition-all duration-300 uppercase relative after:absolute after:-bottom-[6px] after:left-0 after:w-0 hover:after:w-full after:h-[2.5px] after:bg-primary after:transition-all after:duration-300 hover:-translate-y-[2px]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Action Row: Theme & Contact */}
          <div className="flex items-center gap-3 md:gap-6">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={toggleTheme}
              className="rounded-full w-8 h-8 md:w-9 md:h-9 border-border bg-transparent hover:bg-muted transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center justify-center p-0"
              title={`Switch theme`}
            >
              <span className="transition-transform duration-500 ease-out group-hover:rotate-[180deg]">
                 {getThemeIcon()}
              </span>
            </Button>
            
            <Link href="/contact" className="hidden md:block">
              <Button 
                variant="outline" 
                className="rounded-full border-[2px] border-secondary text-[9px] md:text-[10px] font-black px-4 md:px-6 h-8 md:h-9 bg-transparent transition-all duration-300 group uppercase hover:-translate-y-1 hover:shadow-[4px_4px_0_0_currentColor] active:translate-y-0 active:shadow-none hover:bg-secondary/10"
              >
                CONTACT US <ArrowUpRight className="ml-1 md:ml-1.5 w-3 h-3 md:w-3.5 md:h-3.5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
            </Link>

            {/* Mobile Contact Icon (smaller) */}
            <Link href="/contact" className="md:hidden">
              <Button 
                variant="outline" 
                size="icon"
                className="rounded-full w-8 h-8 border-border bg-transparent group"
              >
                <ArrowUpRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}


