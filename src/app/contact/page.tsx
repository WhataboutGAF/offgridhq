"use client";

import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import Link from "next/link";
import { 
  MessageSquare, 
  ArrowUpRight, 
  Mail, 
  Twitter, 
  Globe, 
  Phone, 
  Send,
  MapPin,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "9779803026271";
const DIRECT_EMAIL = "offgridhqteam@gmail.com";

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

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.88.03-.24.36-.49 1-.74 3.93-1.71 6.55-2.83 7.87-3.37 3.75-1.54 4.53-1.81 5.04-1.82.11 0 .36.03.52.16.14.11.18.26.19.37 0 .07.01.21 0 .33z"/>
  </svg>
);

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Offgrid Team!")}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${DIRECT_EMAIL}`;

  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden font-modern">
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
      `}} />
      
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <Navbar />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 flex flex-col items-center">
        
        {/* Top Header Section */}
        <div className="text-center mb-16 space-y-6 group/h1">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight text-foreground leading-[1.1] md:leading-none">
            <span className="inline-block transition-transform duration-500 hover:-translate-y-2 hover:scale-105 mr-3">IN</span>
            <span className="inline-block transition-transform duration-500 hover:-translate-y-2 hover:scale-105 mr-3">SEARCH</span>
            <span className="inline-block transition-transform duration-500 hover:-translate-y-2 hover:scale-105 mr-3">OF</span> <br className="hidden md:block" />
            
            <span className="inline-block italic text-secondary transition-all duration-500 hover:scale-110 hover:skew-x-[-12deg] mr-3">THE NEXT BIG</span>
            <span className="inline-block transition-transform duration-500 hover:-translate-y-2 hover:scale-105">THING?</span> <br />
            
            <span className="inline-block transition-transform duration-[600ms] group-hover/h1:rotate-[-2deg] mr-4 hover:text-primary">CONTACT</span>
            <span className="inline-block text-primary underline decoration-[8px] underline-offset-8 transition-transform duration-500 hover:scale-110 hover:rotate-3">US!</span>
          </h1>
          <p className="text-xs md:text-sm font-bold text-foreground/60 uppercase tracking-[0.3em] transition-all duration-500 group-hover/h1:tracking-[0.4em] group-hover/h1:text-foreground">
            Drop a signal and we’ll sync with you shortly!
          </p>
        </div>

        {/* Main Content Area: Form */}
        <div className="relative w-full max-w-2xl mx-auto mb-32">
          
          {/* The Contact Form Box */}
          <div className="w-full bg-[#4FA4D7] rounded-[2.5rem] p-8 md:p-14 border-[4px] border-foreground shadow-[16px_16px_0_0_currentColor] relative z-10 transition-all duration-500 hover:shadow-[24px_24px_0_0_currentColor] hover:-translate-x-2 hover:-translate-y-2 group/form cursor-default">
            <h2 className="text-xl md:text-3xl font-black text-white mb-10 text-center uppercase tracking-tight drop-shadow-sm transition-transform duration-500 group-hover/form:scale-105">
              MISSION INQUIRY FORM
            </h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-black text-white/90 uppercase tracking-widest pl-4">YOUR ALIAS / NAME</label>
                <input 
                  type="text" 
                  placeholder="How should we address you?"
                  className="w-full bg-[#FFFBEB] dark:bg-card border-[3.5px] border-foreground rounded-2xl p-4 md:p-5 text-sm font-bold text-foreground outline-none transition-all focus:translate-x-1 focus:translate-y-1 focus:shadow-none shadow-[4px_4px_0_0_currentColor]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-black text-white/90 uppercase tracking-widest pl-4">COMMUNICATION FREQUENCY (PHONE)</label>
                <input 
                  type="text" 
                  placeholder="+X (XXX) XXX XX XX"
                  className="w-full bg-[#FFFBEB] dark:bg-card border-[3.5px] border-foreground rounded-2xl p-4 md:p-5 text-sm font-bold text-foreground outline-none transition-all focus:translate-x-1 focus:translate-y-1 focus:shadow-none shadow-[4px_4px_0_0_currentColor]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-black text-white/90 uppercase tracking-widest pl-4">DIGITAL UPLINK (EMAIL)</label>
                <input 
                  type="email" 
                  placeholder="name@domain.com"
                  className="w-full bg-[#FFFBEB] dark:bg-card border-[3.5px] border-foreground rounded-2xl p-4 md:p-5 text-sm font-bold text-foreground outline-none transition-all focus:translate-x-1 focus:translate-y-1 focus:shadow-none shadow-[4px_4px_0_0_currentColor]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-black text-white/90 uppercase tracking-widest pl-4">THE BROADCAST (MESSAGE)</label>
                <textarea 
                  placeholder="Detailed project requirements..."
                  rows={4}
                  className="w-full bg-[#FFFBEB] dark:bg-card border-[3.5px] border-foreground rounded-2xl p-4 md:p-5 text-sm font-bold text-foreground outline-none transition-all focus:translate-x-1 focus:translate-y-1 focus:shadow-none shadow-[4px_4px_0_0_currentColor] resize-none"
                />
              </div>

              <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-[9px] font-bold text-white/80 leading-tight max-w-[240px] uppercase">
                  By pushing dispatch, you agree to our <span className="underline cursor-pointer">Protocol Agreement</span> & Privacy Node.
                </p>
                <button 
                  className="bg-[#E97332] text-white px-10 py-4 rounded-2xl border-[3.5px] border-foreground font-black uppercase tracking-widest text-sm hover:-translate-y-1 hover:bg-[#ff8a4d] transition-all shadow-[6px_6px_0_0_currentColor] active:translate-y-1 active:shadow-none flex items-center gap-2 group"
                >
                  DISPATCH <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Navigation Section (Zine Style) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 border-t-[3.5px] border-foreground pt-16 mt-8">
          
          {/* Column 1: Info (Functional Only) */}
          <div className="space-y-6">
            <div className="border-[2.5px] border-foreground p-3 rounded-xl bg-card/30 text-center font-black uppercase text-[10px] tracking-widest select-none cursor-default opacity-80">SECTION: ARCHIVE</div>
            <div className="space-y-3">
              <Link href="/about" className="block w-full bg-[#A855F7] text-white py-3 rounded-2xl border-[2.5px] border-foreground font-bold shadow-[4px_4px_0_0_currentColor] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_currentColor] transition-all text-xs uppercase tracking-widest active:translate-y-0 active:shadow-none text-center">Our Mission</Link>
              <Link href="/about" className="block w-full bg-[#A855F7] text-white py-3 rounded-2xl border-[2.5px] border-foreground font-bold shadow-[4px_4px_0_0_currentColor] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_currentColor] transition-all text-xs uppercase tracking-widest active:translate-y-0 active:shadow-none text-center">The Lab Blog</Link>
              <Link href="/about" className="block w-full bg-[#A855F7] text-white py-3 rounded-2xl border-[2.5px] border-foreground font-bold shadow-[4px_4px_0_0_currentColor] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_currentColor] transition-all text-xs uppercase tracking-widest active:translate-y-0 active:shadow-none text-center">About Yunis</Link>
            </div>
          </div>

          {/* Column 2: Contacts */}
          <div className="space-y-8">
            <div className="border-[2.5px] border-foreground p-3 rounded-xl bg-card/30 text-center font-black uppercase text-[10px] tracking-widest text-foreground select-none cursor-default opacity-80">SECTION: UPLINKS</div>
            
            <div className="grid grid-cols-2 gap-4">
              <a href={gmailUrl} target="_blank" rel="noopener noreferrer" className="aspect-square bg-[#E97332] rounded-full border-[2.5px] border-foreground flex items-center justify-center text-white shadow-[4px_4px_0_0_currentColor] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_currentColor] transition-all group">
                <Mail className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="aspect-square bg-[#4FA4D7] rounded-full border-[2.5px] border-foreground flex items-center justify-center text-white shadow-[4px_4px_0_0_currentColor] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_currentColor] transition-all group active:scale-95">
                <Twitter className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="aspect-square bg-[#25D366] rounded-full border-[2.5px] border-foreground flex items-center justify-center text-white shadow-[4px_4px_0_0_currentColor] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_currentColor] transition-all cursor-pointer group active:scale-95">
                <WhatsAppIcon className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="aspect-square bg-[#0088cc] rounded-full border-[2.5px] border-foreground flex items-center justify-center text-white shadow-[4px_4px_0_0_currentColor] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_currentColor] transition-all group active:scale-95">
                <TelegramIcon className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 3: Location Map Graphic */}
          <div className="space-y-6">
            <div className="border-[2.5px] border-foreground p-3 rounded-xl bg-card/30 text-center font-black uppercase text-[10px] tracking-widest select-none cursor-default opacity-80">SECTION: COORDINATES</div>
            
            <a 
              href="https://www.google.com/maps/search/St.+Petersburg,+FL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block aspect-[4/3] bg-card rounded-[2rem] border-[3.5px] border-foreground shadow-[6px_6px_0_0_currentColor] overflow-hidden relative group transition-all hover:shadow-[12px_12px_0_0_currentColor] hover:-translate-y-2"
            >
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <MapPin className="w-12 h-12 text-primary drop-shadow-[0_0_10px_rgba(0,0,0,0.1)] group-hover:scale-125 group-hover:-translate-y-2 transition-all duration-500 animate-bounce" />
                <div className="mt-4 text-center">
                  <p className="text-[10px] font-black uppercase tracking-widest">OFFGRID HQ MAIN</p>
                  <p className="text-[8px] font-black text-foreground/40 uppercase tracking-tighter">DECENTRALIZED NEIGHBORHOOD 12</p>
                </div>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[8px] font-black uppercase bg-foreground text-background px-3 py-1 rounded-full">
                  OPEN IN MAPS <ExternalLink className="w-2 h-2" />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 flex gap-1.5 z-20">
                 <div className="w-2 h-2 rounded-full bg-secondary animate-ping" />
                 <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
            </a>

            <div className="flex flex-col gap-1 text-right">
              <p className="text-[10px] font-black uppercase tracking-tight">St. Petersburg, FL (US Hub)</p>
              <p className="text-[10px] font-black text-foreground/40 uppercase tracking-widest">Open for Signals: 09:00 — 18:00</p>
            </div>
          </div>

        </div>

      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(15deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-15px) rotate(-10deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
