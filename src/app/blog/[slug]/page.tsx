import React from "react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Calendar, User, Clock, Share2, CornerUpLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import { getPostData, getSortedPostsData } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = getPostData(slug);

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
        .prose h1 { @apply text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 mt-12 leading-[0.9] text-foreground; }
        .prose h2 { @apply text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 mt-12 text-foreground border-l-[6px] border-primary pl-4; }
        .prose h3 { @apply text-xl font-black uppercase tracking-tight mb-2 mt-8 text-foreground; }
        .prose p { @apply text-base md:text-lg font-bold text-foreground/70 leading-relaxed mb-6; }
        .prose ul, .prose ol { @apply mb-6 space-y-2; }
        .prose li { @apply text-base md:text-lg font-bold text-foreground/70 list-none flex items-start gap-2 before:content-['>'] before:text-primary before:font-black; }
        .prose blockquote { @apply border-l-8 border-secondary bg-secondary/10 p-8 rounded-2xl italic font-bold text-xl my-10; }
        .prose a { @apply text-primary underline decoration-2 underline-offset-4 hover:bg-primary hover:text-white transition-all; }
      `}} />
      
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />

      <Navbar />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* Breadcrumb / Back Link */}
        <Link href="/blog" className="group/back inline-flex items-center gap-2 mb-12 text-[10px] font-black uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors duration-300">
           <CornerUpLeft className="w-4 h-4 group-hover/back:-translate-x-1 group-hover/back:-translate-y-1 transition-transform" />
           BACK_TO_GRID
        </Link>

        {/* Post Meta Header */}
        <div className="space-y-6 mb-12">
          <div className="inline-block bg-primary text-primary-foreground px-5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest shadow-[6px_6px_0_0_#000]">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-7xl font-black leading-[1.1] uppercase tracking-tighter text-foreground group/h1">
             {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 md:gap-10 border-t-2 border-foreground/10 pt-8 mt-4">
             <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-secondary border-2 border-foreground flex items-center justify-center font-black">
                   {post.author.charAt(0)}
                </div>
                <div className="flex flex-col">
                   <span className="text-[10px] opacity-40 font-black uppercase tracking-widest leading-none">AUTHOR</span>
                   <span className="text-sm font-black uppercase tracking-tight">{post.author}</span>
                </div>
             </div>
             <div className="flex flex-col">
                <span className="text-[10px] opacity-40 font-black uppercase tracking-widest leading-none">DISPATCH_DATE</span>
                <span className="text-sm font-black uppercase tracking-tight flex items-center gap-1.5">
                   <Calendar className="w-3.5 h-3.5" />
                   {post.date}
                </span>
             </div>
             <div className="flex flex-col">
                <span className="text-[10px] opacity-40 font-black uppercase tracking-widest leading-none">SIGNAL_LATENCY</span>
                <span className="text-sm font-black uppercase tracking-tight flex items-center gap-1.5 leading-none">
                   <Clock className="w-3.5 h-3.5" />
                   4 MIN READ
                </span>
             </div>
             <button className="ml-auto w-12 h-12 rounded-2xl border-2 border-foreground hover:bg-foreground hover:text-background transition-colors flex items-center justify-center group/share">
                <Share2 className="w-5 h-5 group-hover/share:scale-110 transition-transform" />
             </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden border-[4px] border-foreground shadow-[12px_12px_0_0_#4FA4D7] mb-16 md:mb-24 group/hero">
          <Image 
            src={post.image || "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop"}
            alt={post.title}
            fill
            className="object-cover group-hover/hero:scale-110 transition-transform duration-[2000ms]"
            priority
          />
        </div>

        {/* Main Content Area */}
        <article className="prose max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </article>

        {/* Bottom Navigation */}
        <div className="mt-24 pt-16 border-t-4 border-foreground flex flex-col items-center text-center gap-8">
           <h3 className="text-xl font-black uppercase tracking-widest mb-2 opacity-30">END DISPATCH_</h3>
           <Link href="/blog">
              <button className="bg-foreground text-background px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-[8px_8px_0_0_#4FA4D7] hover:shadow-none transition-all flex items-center gap-3 border-[3px] border-foreground hover:translate-x-1 hover:translate-y-1">
                 <ArrowLeft className="w-5 h-5" />
                 BACK_TO_GRID
              </button>
           </Link>
        </div>
      </div>
    </main>
  );
}
