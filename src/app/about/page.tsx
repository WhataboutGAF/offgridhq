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
    <main className="min-w-full overflow-x-hidden bg-[#F6F4EB] min-h-screen text-[#463C31] font-sans selection:bg-[#463C31] selection:text-[#F6F4EB] pb-20">
      
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
         <div className="w-full bg-[#FFF9EB] rounded-[40px] flex flex-col lg:flex-row lg:h-[520px] overflow-hidden border-[3.5px] border-[#463C31] shadow-[12px_12px_0_0_rgba(70,60,49,1)]">
            
            {/* Left Side (The Bio) */}
            <div className="w-full lg:w-[45%] p-8 md:p-12 lg:p-14 flex flex-col justify-center relative overflow-y-auto no-scrollbar z-10">
               
               {/* Heavy retro-serif Header */}
               <h2 className="font-bowlby text-[5.5rem] md:text-[6.5rem] lg:text-[6.5rem] text-[#3F5B59] leading-none mb-3 tracking-wide mt-2" style={{ textShadow: '4px 4px 0 #E63946' }}>
                  Hello!
               </h2>
               
               {/* Thin horizontal divider mapped to teal */}
               <div className="w-full max-w-[90%] h-[3px] bg-[#3F5B59] mb-8" />

               {/* Clean Monospace Typography */}
               <div className="font-space text-[12px] md:text-[14px] font-bold text-[#463C31] leading-[1.7] space-y-6 lg:max-w-[450px]">
                  <p>
                     I'm <span className="text-[#3F5B59] font-extrabold text-[1.1em] px-1 bg-[#D4E751]">Yunis</span>, an infrastructure-focused backend developer obsessed with high-uptime servers, dark roast coffee, and building bulletproof architectural experiences.
                  </p>
                  <p>
                     I consider myself a robust architect—a detail-oriented, hardworking engineer who's willing to push to production at every step of the way.
                  </p>
               </div>

               {/* Vertical Sub-Stack of Social Icons with Zine Pop Colors */}
               <div className="mt-8 flex flex-col gap-4 font-space text-[12px] md:text-[13px] text-[#463C31] font-bold pb-2">
                  <div className="flex items-center gap-4 group">
                     <div className="w-8 h-8 shrink-0 rounded-full bg-[#E63946] text-[#FFF9EB] flex items-center justify-center border-[2.5px] border-[#463C31] group-hover:-translate-y-1 transition-transform cursor-pointer shadow-[2px_2px_0_0_#463C31]">
                        {/* Email Envelope */}
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                     </div>
                     <span className="cursor-pointer group-hover:underline">yunis@offgridhq.com</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                     <div className="w-8 h-8 shrink-0 rounded-full bg-[#3F5B59] text-[#FFF9EB] flex items-center justify-center border-[2.5px] border-[#463C31] group-hover:-translate-y-1 transition-transform cursor-pointer shadow-[2px_2px_0_0_#463C31]">
                        {/* Custom GitHub / Behance representation */}
                        <span className="font-bowlby text-[13px] leading-none mb-[1px]">Be</span>
                     </div>
                     <span className="cursor-pointer group-hover:underline">github.com/yunis</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                     <div className="w-8 h-8 shrink-0 rounded-full bg-[#D4E751] text-[#463C31] flex items-center justify-center border-[2.5px] border-[#463C31] group-hover:-translate-y-1 transition-transform cursor-pointer shadow-[2px_2px_0_0_#463C31]">
                        {/* LinkedIn "in" */}
                        <span className="font-bowlby text-[11px] leading-none font-bold italic mb-[1px]">in</span>
                     </div>
                     <span className="cursor-pointer group-hover:underline">linkedin.com/in/yunis</span>
                  </div>
               </div>
            </div>

            {/* Right Side (The Artist Illustration) fully retaining natural vibrance */}
            <div className="w-full lg:w-[55%] h-[350px] md:h-[450px] lg:h-full overflow-hidden bg-[#FFF9EB] relative flex-shrink-0 z-0">
               {/* 
                 By switching this background to match the Cream bio column, 
                 the multiply filter natively knocks out the white image background 
                 while leaving 100% of the character's native vibrant colors intact!
               */}
               <div className="absolute inset-0 w-full h-full flex flex-col justify-end">
                  <img 
                    src="/backend_dev_new.png" 
                    alt="Backend Developer"
                    className="w-full h-full object-contain md:object-cover object-bottom mix-blend-multiply opacity-[0.98] drop-shadow-lg lg:translate-x-[-10%]"
                  />
               </div>
            </div>

         </div>
      </div>

      {/* Dashed Center Content Divider */}
      <div className="w-full max-w-[95%] mx-auto border-t-[3px] border-dashed border-[#463C31]/20 my-8" />

      {/* 3-Column Detailed Information Grid */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-3 gap-16 font-modern">
         
         {/* Column 1: Expertise */}
         <div className="space-y-10">
            <h3 className="font-vintage text-[2.5rem] md:text-4xl uppercase text-[#463C31] tracking-wide inline-block border-b-[4px] border-[#463C31] pb-1">SERVICES</h3>
            
            <div className="space-y-8">
               <div>
                  <div className="text-[10px] font-bold tracking-[0.2em] opacity-60 mb-2">2025 — ONWARD</div>
                  <h4 className="font-black uppercase text-lg mb-2 text-[#463C31] tracking-tight">DIGITAL EXP.</h4>
                  <p className="text-sm bg-white/70 p-5 rounded-2xl border-2 border-[#463C31]/10 leading-relaxed text-[#463C31]/90 font-semibold shadow-sm">
                     Illustration, UI/UX design, custom frontend integration, scalable systems, and bespoke aesthetic perfection.
                  </p>
               </div>

               <div>
                  <div className="text-[10px] font-bold tracking-[0.2em] opacity-60 mb-2">PRE — 2025</div>
                  <h4 className="font-black uppercase text-lg mb-2 text-[#463C31] tracking-tight">ENGINEERING</h4>
                  <p className="text-sm bg-white/70 p-5 rounded-2xl border-2 border-[#463C31]/10 leading-relaxed text-[#463C31]/90 font-semibold shadow-sm">
                     Web-app development, system architectures, full-stack pipelines, robust database layout and backend design.
                  </p>
               </div>
            </div>
         </div>

         {/* Column 2: Principles */}
         <div className="space-y-10">
            <h3 className="font-vintage text-[2.5rem] md:text-4xl uppercase text-[#463C31] tracking-wide inline-block border-b-[4px] border-[#463C31] pb-1">PRINCIPLES</h3>
            
            <div className="space-y-8">
               <div>
                  <div className="text-[10px] font-bold tracking-[0.2em] opacity-80 mb-2 text-[#008080]">CORE 01</div>
                  <h4 className="font-black uppercase text-lg mb-2 text-[#463C31] tracking-tight">FAST BUILDS</h4>
                  <p className="text-sm text-[#463C31]/80 leading-relaxed font-semibold">
                     Lightning-fast deployment paired with rapid prototyping to move from concept to shipping instantly.
                  </p>
               </div>

               <div>
                  <div className="text-[10px] font-bold tracking-[0.2em] opacity-80 mb-2 text-[#E63946]">CORE 02</div>
                  <h4 className="font-black uppercase text-lg mb-2 text-[#463C31] tracking-tight">REAL USERS</h4>
                  <p className="text-sm text-[#463C31]/80 leading-relaxed font-semibold">
                     Human-centric interfaces that spark joy, rather than merely solving the bare minimum edge cases functionally.
                  </p>
               </div>

               <div>
                  <div className="text-[10px] font-bold tracking-[0.2em] opacity-80 mb-2 text-[#F4A261]">CORE 03</div>
                  <h4 className="font-black uppercase text-lg mb-2 text-[#463C31] tracking-tight">NO NOISE</h4>
                  <p className="text-sm text-[#463C31]/80 leading-relaxed font-semibold">
                     Zero bloat, zero tracking, just pure high-performance code written brilliantly and loaded seamlessly.
                  </p>
               </div>
            </div>
         </div>

         {/* Column 3: Skills & Contact */}
         <div className="space-y-12">
            
            {/* Cleaned Up Tag Badges */}
            <div className="space-y-8">
               <h3 className="font-vintage text-[2.5rem] md:text-4xl uppercase text-[#463C31] tracking-wide inline-block border-b-[4px] border-[#463C31] pb-1">SKILLS</h3>
               <div className="flex flex-wrap gap-2">
                  {["NEXT.JS", "REACT", "TAILWIND CSS", "TYPESCRIPT", "UI DESIGN", "MARKETING"].map((skill, i) => {
                     const colors = ["bg-secondary", "bg-[#E63946] text-white", "bg-[#008080] text-white", "bg-white", "bg-secondary", "bg-white"];
                     return (
                       <span key={skill} className={`px-4 py-2 border-[2px] border-[#463C31] rounded-full text-[10px] md:text-xs font-black uppercase transition-transform cursor-default shadow-[2px_2px_0_0_#463C31] ${colors[i % colors.length]}`}>
                          {skill}
                       </span>
                     );
                  })}
               </div>
            </div>

            {/* Contact Panel strictly structured */}
            <div className="bg-[#fbf8f1] p-8 rounded-[2rem] border-[3px] border-[#463C31] relative overflow-hidden group shadow-[6px_6px_0_0_#463C31] mt-12 transition-transform hover:-translate-y-1">
               <div className="absolute top-0 right-0 w-20 h-20 bg-[#E63946] rounded-bl-[100px] border-b-[3px] border-l-[3px] border-[#463C31]" />
               
               <h3 className="font-vintage text-4xl uppercase tracking-tighter text-[#463C31] mb-3">CONTACT</h3>
               <p className="text-sm font-semibold leading-relaxed text-[#463C31]/90 mb-8 max-w-[200px]">
                  Have a project idea? Let's build something genuinely beautiful.
               </p>
               
               <button 
                 onClick={() => handleWhatsAppRedirect("Hi! I'd like to work together.")}
                 className="w-full py-4 px-6 border-[3px] border-[#463C31] text-[#463C31] bg-white font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-secondary transition-all rounded-full flex justify-between items-center active:translate-y-1 active:translate-x-1"
               >
                 <span>MESSAGE O.HQ</span>
                 <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
               </button>
            </div>

         </div>
      </div>
    </main>
  );
}