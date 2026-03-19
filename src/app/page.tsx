
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      {/* Dynamic Grid Parallax Layer */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-[0.07] -z-10" 
           style={{ backgroundPosition: 'calc(50% + var(--parallax-x, 0px)) calc(50% + var(--parallax-y, 0px))' }} />
      
      <style dangerouslySetInnerHTML={{__html: `
        .grid-bg {
          background-image: 
            linear-gradient(to right, rgba(0,0,0,0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.5) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        [data-theme='dark'] .grid-bg {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
        }
      `}} />

      <Navbar />
      <Hero />
      <div className="flex-grow">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
