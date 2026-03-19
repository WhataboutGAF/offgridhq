import React from "react";
import Navbar from "@/components/layout/Navbar";
import { getSortedPostsData } from "@/lib/blog";
import BlogClient from "./BlogClient";

export default function BlogListing() {
  const posts = getSortedPostsData();

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

      <BlogClient posts={posts} />
    </main>
  );
}
