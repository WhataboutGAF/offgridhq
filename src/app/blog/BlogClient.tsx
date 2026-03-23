"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, ChevronRight, Hash } from "lucide-react";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image?: string;
}

export default function BlogClient({ posts }: { posts: Post[] }) {
  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 md:py-20">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b-4 border-foreground pb-12">
        <div className="space-y-4 max-w-2xl group/header">

          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-foreground transition-all duration-500 hover:tracking-normal cursor-default"
          >
            OFFGRID <span className="italic text-secondary">BLOG_</span>
          </motion.h1>
          <p className="text-sm md:text-base font-bold text-foreground/60 uppercase tracking-widest max-w-md leading-relaxed">
             Mapping the technical infrastructure of the future. Architectural logs and creative signals.
          </p>
        </div>

      </div>

      {/* Blog Post Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post, index) => {
          const cardThemes = [
            { 
              shadow: "hover:shadow-[12px_12px_0_0_#4FA4D7]", 
              badge: "bg-[#4FA4D7]", 
              btnHover: "group-hover/post:bg-[#4FA4D7] group-hover/post:text-white",
              arrowColor: "text-[#4FA4D7]"
            },
            { 
              shadow: "hover:shadow-[12px_12px_0_0_#A855F7]", 
              badge: "bg-[#A855F7]", 
              btnHover: "group-hover/post:bg-[#A855F7] group-hover/post:text-white",
              arrowColor: "text-[#A855F7]"
            },
            { 
              shadow: "hover:shadow-[12px_12px_0_0_#D4E751]", 
              badge: "bg-[#D4E751] text-black", 
              btnHover: "group-hover/post:bg-[#D4E751] group-hover/post:text-black",
              arrowColor: "text-[#D4E751]"
            },
            { 
              shadow: "hover:shadow-[12px_12px_0_0_#E63946]", 
              badge: "bg-[#E63946]", 
              btnHover: "group-hover/post:bg-[#E63946] group-hover/post:text-white",
              arrowColor: "text-[#E63946]"
            },
          ];
          const theme = cardThemes[index % cardThemes.length];

          return (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group/post relative">
                <article className={`h-full bg-card border-[3.5px] border-foreground rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-x-2 hover:-translate-y-2 flex flex-col cursor-pointer ${theme.shadow}`}>
                  
                  {/* Thumbnail Area */}
                  <div className="relative h-56 w-full overflow-hidden border-b-[3.5px] border-foreground">
                    <Image 
                      src={post.image || "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop"}
                      alt={post.title}
                      fill
                      className="object-cover transition-all duration-700 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className={`absolute top-4 left-4 ${theme.badge} text-primary-foreground px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-[4px_4px_0_0_#000] border-[2px] border-foreground`}>
                      {post.category}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-8 flex flex-col flex-grow space-y-4">
                    <div className="flex items-center gap-4 text-[10px] font-black text-foreground/40 uppercase tracking-widest">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                      <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}</span>
                    </div>

                    <h2 className="text-2xl font-black uppercase tracking-tight leading-tight group-hover/post:text-primary transition-colors duration-300">
                      {post.title}
                    </h2>
                    
                    <p className="text-sm font-bold text-foreground/60 leading-relaxed flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="pt-4 flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group-hover/post:translate-x-2 transition-transform duration-300">
                        READ MORE <ArrowRight className={`w-4 h-4 ${theme.arrowColor}`} />
                      </span>
                      <div className={`w-10 h-10 rounded-full border-[2.5px] border-foreground flex items-center justify-center transition-all duration-300 ${theme.btnHover}`}>
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {posts.length === 0 && (
        <div className="py-20 text-center space-y-6">
          <h2 className="text-3xl font-black uppercase tracking-tight text-foreground opacity-20">NO_POSTS_FOUND</h2>
          <p className="text-sm font-bold opacity-30 uppercase tracking-[0.3em]">Our lab is currently silent. Active engineering in progress.</p>
        </div>
      )}
    </div>
  );
}
