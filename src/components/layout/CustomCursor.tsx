"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Raw position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // High-performance springs for a "snappy" industrial feel
  const springConfig = { damping: 30, stiffness: 400, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };
    checkMobile();

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const moveMouse = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const isClickable = 
        target.closest("button") || 
        target.closest("a") || 
        target.closest(".clickable") ||
        window.getComputedStyle(target).cursor === "pointer";
      
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", moveMouse);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none hidden md:block"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0
        }}
      >
        {/* The Frame: Brutalist Square */}
        <motion.div
          animate={{
            width: isHovering ? 64 : 24,
            height: isHovering ? 64 : 24,
            rotate: isHovering ? 90 : 0,
            borderRadius: isHovering ? "50%" : "2px"
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25
          }}
          className="border-[1.5px] border-foreground flex items-center justify-center relative"
        >
          {/* Internal Crosshair Dots */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-1 bg-foreground" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-1 bg-foreground" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] w-1 bg-foreground" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[1px] w-1 bg-foreground" />

          {/* Center Point: Only visible when NOT hovering */}
          {!isHovering && (
             <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
          )}
        </motion.div>
      </motion.div>

      {/* Trailing Signal: Subtle shadow box */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-foreground/5 z-[9999] pointer-events-none hidden md:block"
        style={{
          x: useSpring(mouseX, { damping: 40, stiffness: 200 }),
          y: useSpring(mouseY, { damping: 40, stiffness: 200 }),
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 2 : 1
        }}
      />
    </>
  );
}
