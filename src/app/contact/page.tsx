"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import { MessageSquare, ArrowRight, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "9779803026271";
const DIRECT_EMAIL = "offgridhqteam@gmail.com";

const QUICK_MESSAGES = [
  { 
    label: "OPEN FOR WORK?", 
    text: "Hi! Are you open for new work opportunities?",
    icon: "💼"
  },
  { 
    label: "COLLABORATION?", 
    text: "Hey, I'd love to discuss a potential collaboration with OFFGRID HQ!",
    icon: "🤝"
  },
  { 
    label: "TRY NEW TOOLS?", 
    text: "Hi, I have a tool I think you guys should try out.",
    icon: "🛠️"
  },
  { 
    label: "SPONSORSHIP?", 
    text: "Hello! I'm interested in talking about sponsorship opportunities.",
    icon: "🚀"
  }
];

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function ContactPage() {
  const handleWhatsAppRedirect = (text: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${DIRECT_EMAIL}`;

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex flex-col items-center justify-center p-6 md:p-12 mb-16">
        <div className="max-w-4xl w-full text-center space-y-16">
          
          {/* Main Hero Header */}
          <div className="space-y-8 mt-12 md:mt-24">
            <h1 className="text-5xl sm:text-6xl md:text-[7rem] font-black uppercase tracking-tighter leading-[0.9] text-foreground">
              DON&apos;T BE A <br /> 
              <span className="bg-[#FFD400] text-black px-6 py-2 inline-block mt-4 rounded-none border-[3px] border-black shadow-[6px_6px_0_0_#000]">STRANGER.</span>
            </h1>
            
            {/* Urgent Status Line */}
            <div className="flex items-center justify-center gap-3">
              <span className="w-4 h-4 bg-[#00FFD1] border-2 border-black animate-pulse" />
              <p className="text-black font-black text-[10px] md:text-sm uppercase tracking-[0.4em]">
                Direct Message — We&apos;re Online
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-14">
            {/* Primary CTA Button */}
            <button 
              onClick={() => handleWhatsAppRedirect("Hi! I'd like to chat.")}
              className="group relative py-6 px-10 md:px-14 bg-[#7000FF] text-white font-black uppercase tracking-[0.3em] rounded-none border-[4px] border-black shadow-[8px_8px_0_0_#00FFD1] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0_0_#00FFD1] transition-all active:translate-x-2 active:translate-y-2 active:shadow-none flex items-center justify-center gap-6 w-full md:w-auto text-xl md:text-3xl"
            >
              <span>DIRECT MESSAGE</span>
              <MessageSquare className="w-8 h-8 stroke-[3]" />
            </button>

            {/* Quick Actions Grid */}
            <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-4">
              {QUICK_MESSAGES.map((msg, i) => (
                <button
                  key={i}
                  onClick={() => handleWhatsAppRedirect(msg.text)}
                  className="p-6 md:p-8 bg-white border-[3px] border-black rounded-none shadow-[4px_4px_0_0_#000] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_#000] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{msg.icon}</span>
                    <span className="text-sm md:text-base font-black uppercase tracking-widest text-black text-left">
                      {msg.label}
                    </span>
                  </div>
                  <ArrowRight className="w-6 h-6 stroke-[3] text-black transition-transform group-hover:translate-x-2 shrink-0" />
                </button>
              ))}
            </div>

            {/* Direct Email Inclusion */}
            <div className="pt-16 w-full flex flex-col items-center gap-6 border-t-[3px] border-black/10 mt-8">
              <p className="text-xs md:text-sm font-black uppercase tracking-[0.4em] text-white bg-[#FF007F] px-4 py-2 border-[3px] border-black shadow-[4px_4px_0_0_#000]">Prefer Email?</p>
              <a 
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-xl md:text-4xl font-black text-black hover:text-white hover:bg-black px-6 py-4 md:px-8 md:py-6 border-[3px] border-black shadow-[6px_6px_0_0_#000] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all group w-full md:w-auto justify-center"
              >
                <Mail className="w-6 h-6 md:w-8 md:h-8 stroke-[3] group-hover:animate-bounce" />
                <span className="truncate">{DIRECT_EMAIL}</span>
              </a>
            </div>

            {/* Subdued Branding Footer */}
            <div className="flex flex-col items-center gap-3 mt-12 bg-black text-white px-6 py-3 border-[3px] border-black">
              <WhatsAppIcon className="w-6 h-6" />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase">WhatsApp Direct Connection</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
