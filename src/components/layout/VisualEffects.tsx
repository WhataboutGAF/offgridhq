"use client";

import React, { useEffect } from "react";

export default function VisualEffects() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate parallax movement (very subtle)
      const x = (e.clientX - window.innerWidth / 2) / 50;
      const y = (e.clientY - window.innerHeight / 2) / 50;

      // Inject into root CSS variables for global access
      document.documentElement.style.setProperty("--parallax-x", `${x}px`);
      document.documentElement.style.setProperty("--parallax-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* CRT Scanline Overlay (Controlled by CSS data-theme) */}
      <div className="crt-overlay" aria-hidden="true" />
      
      {/* Analog Flicker Layer (Visible only in Grayscale) */}
      <div className="crt-flicker" aria-hidden="true" />
    </>
  );
}
