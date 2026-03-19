"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";

const WHATSAPP_NUMBER = "9779803026271";

export default function AboutPage() {
  const handleWhatsAppRedirect = (text: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <main className="min-w-full overflow-x-hidden bg-background min-h-screen text-foreground font-sans selection:bg-foreground selection:text-background pb-20">
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Bricolage+Grotesque:opsz,wght@10..48,400..800&family=Bowlby+One+SC&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        .font-vintage { font-family: 'DM Serif Display', serif; }
        .font-modern { font-family: 'Bricolage Grotesque', sans-serif; }
        .font-bowlby { font-family: 'Bowlby One SC', cursive; }
        .font-space { font-family: 'Space Mono', monospace; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <div className="absolute top-0 w-full z-50">
        <Navbar />
      </div>

      <div className="h-[90px] md:h-[110px] w-full" />

      {/* Removed Top Labels Segment */}


      {/* Team Member Profile Card Segment */}
      <div className="w-full max-w-[1250px] mx-auto px-6 md:px-12 pt-2 md:pt-6 pb-12 md:pb-24 z-20 relative">
         {/* Main Profile Group Wrapper */}
         <div className="w-full bg-card rounded-[40px] flex flex-col lg:flex-row lg:h-[520px] overflow-hidden border-[3.5px] border-foreground shadow-[12px_12px_0_0_currentColor] transition-all duration-500 hover:-translate-y-2 hover:shadow-[16px_16px_0_0_currentColor] group/profile cursor-default text-foreground">
            
            {/* Left Side (The Bio) */}
            <div className="w-full lg:w-[45%] p-8 md:p-12 lg:p-14 flex flex-col justify-center relative overflow-y-auto no-scrollbar z-10 transition-transform duration-500 group-hover/profile:translate-x-1">
               
               {/* Heavy retro-serif Header */}
               <h2 className="font-bowlby text-[5.5rem] md:text-[6.5rem] lg:text-[6.5rem] text-[#3F5B59] leading-none mb-3 tracking-wide mt-2 inline-block transition-transform duration-500 group-hover/profile:-rotate-2 group-hover/profile:scale-105 origin-left" style={{ textShadow: '4px 4px 0 #E63946' }}>
                  Hello!
               </h2>
               
               {/* Thin horizontal divider mapped to teal gently expanding */}
               <div className="w-full max-w-[90%] h-[3px] bg-[#3F5B59] mb-8 transition-all duration-500 group-hover/profile:w-[95%] group-hover/profile:bg-[#E63946]" />

               {/* Clean Monospace Typography */}
               <div className="font-space text-[12px] md:text-[14px] font-bold text-foreground leading-[1.7] space-y-6 lg:max-w-[450px]">
                  <p>
                     I'm <span className="text-[#3F5B59] font-extrabold text-[1.1em] px-1 bg-[#D4E751] transition-colors duration-500 group-hover/profile:bg-[#E63946] group-hover/profile:text-[#FFF9EB]">Yunis</span>, an infrastructure-focused backend developer obsessed with high-uptime servers, dark roast coffee, and building bulletproof architectural experiences.
                  </p>
                  <p className="transition-transform duration-500 delay-75 group-hover/profile:translate-x-2">
                     I consider myself a robust architect—a detail-oriented, hardworking engineer who's willing to push to production at every step of the way.
                  </p>
               </div>

               {/* Vertical Sub-Stack of Social Icons with Zine Pop Colors */}
               <div className="mt-8 flex flex-col gap-4 font-space text-[12px] md:text-[13px] text-foreground font-bold pb-2">
                  <div className="flex items-center gap-4 group">
                     <div className="w-8 h-8 shrink-0 rounded-full bg-[#E63946] text-white flex items-center justify-center border-[2.5px] border-foreground group-hover:-translate-y-1 transition-transform cursor-pointer shadow-[2px_2px_0_0_currentColor]">
                        {/* Email Envelope */}
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                     </div>
                     <span className="cursor-pointer group-hover:underline">yunis@offgridhq.com</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                     <div className="w-8 h-8 shrink-0 rounded-full bg-[#3F5B59] text-white flex items-center justify-center border-[2.5px] border-foreground group-hover:-translate-y-1 transition-transform cursor-pointer shadow-[2px_2px_0_0_currentColor]">
                        {/* Custom GitHub / Behance representation */}
                        <span className="font-bowlby text-[13px] leading-none mb-[1px]">Be</span>
                     </div>
                     <span className="cursor-pointer group-hover:underline">github.com/yunis</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                     <div className="w-8 h-8 shrink-0 rounded-full bg-[#D4E751] text-black flex items-center justify-center border-[2.5px] border-foreground group-hover:-translate-y-1 transition-transform cursor-pointer shadow-[2px_2px_0_0_currentColor]">
                        {/* LinkedIn "in" */}
                        <span className="font-bowlby text-[11px] leading-none font-bold italic mb-[1px]">in</span>
                     </div>
                     <span className="cursor-pointer group-hover:underline">linkedin.com/in/yunis</span>
                  </div>
               </div>
            </div>

            {/* Right Side (The Artist Illustration) fully retaining natural vibrance */}
            <div className="w-full lg:w-[55%] h-[350px] md:h-[450px] lg:h-full overflow-hidden bg-white relative flex-shrink-0 z-0">
               {/* 
                 By switching this background to white specifically, 
                 the multiply filter universally knocks out the white image background cleanly across themes 
                 while leaving 100% of the character's native vibrant colors intact!
               */}
               <div className="absolute inset-0 w-full h-full flex flex-col justify-end">
                  <img 
                    src="/backend_dev_new.png" 
                    alt="Backend Developer"
                    className="w-full h-full object-contain md:object-cover object-bottom mix-blend-multiply dark:mix-blend-normal opacity-[0.98] drop-shadow-lg lg:translate-x-[-10%] transition-transform duration-700 ease-out origin-bottom group-hover/profile:scale-[1.04]"
                  />
               </div>
            </div>

         </div>
      </div>

      {/* Dashed Center Content Divider */}
      <div className="w-full max-w-[95%] mx-auto border-t-[3px] border-dashed border-foreground/20 my-8" />

      {/* 3-Column Detailed Information Grid */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-3 gap-16 font-modern">
         
         {/* Column 1: Expertise */}
         <div className="space-y-10">
            <h3 className="font-vintage text-[2.5rem] md:text-4xl uppercase text-foreground tracking-wide inline-block border-b-[4px] border-foreground pb-1">SERVICES</h3>
            
            <div className="space-y-8">
               <div className="group cursor-default">
                  <div className="text-[10px] font-bold tracking-[0.2em] opacity-60 mb-2 transition-transform duration-300 group-hover:translate-x-1">2025 — ONWARD</div>
                  <h4 className="font-black uppercase text-lg mb-2 text-foreground tracking-tight transition-transform duration-300 group-hover:translate-x-1">DIGITAL EXP.</h4>
                  <p className="text-sm bg-card p-5 rounded-2xl border-[3px] border-foreground/10 group-hover:border-foreground leading-relaxed text-foreground/90 group-hover:text-foreground font-bold transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[6px_6px_0_0_currentColor] group-hover:bg-background">
                     Illustration, UI/UX design, custom frontend integration, scalable systems, and bespoke aesthetic perfection.
                  </p>
               </div>

               <div className="group cursor-default">
                  <div className="text-[10px] font-bold tracking-[0.2em] opacity-60 mb-2 transition-transform duration-300 group-hover:translate-x-1">PRE — 2025</div>
                  <h4 className="font-black uppercase text-lg mb-2 text-foreground tracking-tight transition-transform duration-300 group-hover:translate-x-1">ENGINEERING</h4>
                  <p className="text-sm bg-card p-5 rounded-2xl border-[3px] border-foreground/10 group-hover:border-foreground leading-relaxed text-foreground/90 group-hover:text-foreground font-bold transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[6px_6px_0_0_currentColor] group-hover:bg-background">
                     Web-app development, system architectures, full-stack pipelines, robust database layout and backend design.
                  </p>
               </div>
            </div>
         </div>

         {/* Column 2: Principles */}
         <div className="space-y-10">
            <h3 className="font-vintage text-[2.5rem] md:text-4xl uppercase text-foreground tracking-wide inline-block border-b-[4px] border-foreground pb-1">PRINCIPLES</h3>
            
            <div className="space-y-10">
               <div className="group border-l-[4px] border-transparent hover:border-[#008080] pl-0 hover:pl-5 transition-all duration-300 ease-out cursor-default">
                  <div className="text-[10px] font-bold tracking-[0.2em] opacity-80 mb-2 text-[#008080] transition-transform duration-300 group-hover:scale-110 origin-left">CORE 01</div>
                  <h4 className="font-black uppercase text-lg mb-2 text-foreground tracking-tight group-hover:text-[#008080] transition-colors">FAST BUILDS</h4>
                  <p className="text-sm text-foreground/80 leading-relaxed font-bold">
                     Lightning-fast deployment paired with rapid prototyping to move from concept to shipping instantly.
                  </p>
               </div>

               <div className="group border-l-[4px] border-transparent hover:border-[#E63946] pl-0 hover:pl-5 transition-all duration-300 ease-out cursor-default">
                  <div className="text-[10px] font-bold tracking-[0.2em] opacity-80 mb-2 text-[#E63946] transition-transform duration-300 group-hover:scale-110 origin-left">CORE 02</div>
                  <h4 className="font-black uppercase text-lg mb-2 text-foreground tracking-tight group-hover:text-[#E63946] transition-colors">REAL USERS</h4>
                  <p className="text-sm text-foreground/80 leading-relaxed font-bold">
                     Human-centric interfaces that spark joy, rather than merely solving the bare minimum edge cases functionally.
                  </p>
               </div>

               <div className="group border-l-[4px] border-transparent hover:border-[#F4A261] pl-0 hover:pl-5 transition-all duration-300 ease-out cursor-default">
                  <div className="text-[10px] font-bold tracking-[0.2em] opacity-80 mb-2 text-[#F4A261] transition-transform duration-300 group-hover:scale-110 origin-left">CORE 03</div>
                  <h4 className="font-black uppercase text-lg mb-2 text-foreground tracking-tight group-hover:text-[#F4A261] transition-colors">NO NOISE</h4>
                  <p className="text-sm text-foreground/80 leading-relaxed font-bold">
                     Zero bloat, zero tracking, just pure high-performance code written brilliantly and loaded seamlessly.
                  </p>
               </div>
            </div>
         </div>

         {/* Column 3: Skills & Contact */}
         <div className="space-y-12">
            
            {/* Cleaned Up Tag Badges */}
            <div className="space-y-8">
               <h3 className="font-vintage text-[2.5rem] md:text-4xl uppercase text-foreground tracking-wide inline-block border-b-[4px] border-foreground pb-1">SKILLS</h3>
               <div className="flex flex-wrap gap-3">
                  {["NEXT.JS", "REACT", "TAILWIND CSS", "TYPESCRIPT", "UI DESIGN", "MARKETING"].map((skill, i) => {
                     const colors = ["bg-secondary", "bg-[#E63946] text-white", "bg-[#008080] text-white", "bg-card text-foreground", "bg-secondary", "bg-card text-foreground"];
                     return (
                       <span key={skill} className={`px-4 py-2 border-[2.5px] border-foreground rounded-full text-[10px] md:text-[11px] font-extrabold uppercase tracking-widest cursor-pointer transition-all duration-300 shadow-[3px_3px_0_0_currentColor] hover:shadow-[5px_5px_0_0_currentColor] hover:-translate-y-[2px] hover:rotate-2 ${colors[i % colors.length]}`}>
                          {skill}
                       </span>
                     );
                  })}
               </div>
            </div>

            {/* Contact Panel strictly structured + Interactive Hover state */}
            <div className="bg-card p-8 md:p-10 rounded-[2rem] border-[3.5px] border-foreground relative overflow-hidden group shadow-[6px_6px_0_0_currentColor] mt-12 transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0_0_currentColor]">
               {/* Flapping top right corner accent */}
               <div className="absolute top-0 right-0 w-24 h-24 bg-[#E63946] rounded-bl-[100px] border-b-[3.5px] border-l-[3.5px] border-foreground transition-transform duration-500 origin-top-right group-hover:scale-125" />
               
               <h3 className="font-vintage text-4xl lg:text-5xl uppercase tracking-tighter text-foreground mb-4 relative z-10 transition-colors duration-300 group-hover:text-[#E63946]">CONTACT</h3>
               <p className="text-[13px] font-bold leading-relaxed text-foreground/90 mb-10 max-w-[200px] relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  Have a project idea? Let's build something genuinely beautiful.
               </p>
               
               <button 
                 onClick={() => handleWhatsAppRedirect("Hi! I'd like to work together.")}
                 className="w-full py-4 px-6 border-[3.5px] border-foreground text-foreground bg-background font-black uppercase tracking-[0.2em] text-[10px] md:text-[11px] transition-all duration-300 rounded-full flex justify-between items-center relative z-10 hover:bg-[#D4E751] hover:text-black hover:shadow-[3px_3px_0_0_currentColor] active:translate-y-1 active:translate-x-1"
               >
                 <span className="translate-y-[1px]">MESSAGE O.HQ</span>
                 <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
               </button>
            </div>

         </div>
      </div>
    </main>
  );
}