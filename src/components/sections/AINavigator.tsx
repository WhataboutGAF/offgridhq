"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { aiProjectRecommendation } from "@/ai/flows/ai-project-recommendation";
import type { AIProjectRecommendationOutput } from "@/ai/flows/ai-project-recommendation";
import { Loader2, Sparkles, Compass, CheckCircle2 } from "lucide-react";

export default function AINavigator() {
  const [description, setDescription] = useState("");
  const [result, setResult] = useState<AIProjectRecommendationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRecommend = async () => {
    if (!description.trim()) return;
    setIsLoading(true);
    try {
      const output = await aiProjectRecommendation({ userDescription: description });
      setResult(output);
    } catch (error) {
      console.error("Failed to fetch recommendation:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="navigator" className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-xl border border-border/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-5">
            <Compass className="w-24 h-24 text-primary" />
          </div>

          <div className="relative z-10 text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full mb-4 font-semibold text-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI-Powered Discovery</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Project Navigator</h2>
            <p className="text-muted-foreground text-base">
              Describe your specific goals, and our AI will recommend the perfect class for you.
            </p>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="relative">
              <Textarea 
                placeholder="e.g. 'I'm a busy professional looking to optimize my design workflow...'"
                className="min-h-[120px] rounded-xl border-2 focus:border-primary p-4 text-base"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            
            <Button 
              onClick={handleRecommend}
              disabled={isLoading || !description.trim()}
              className="w-full h-14 rounded-xl bg-primary text-base font-bold button-glow accent-glow"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ANALYZING NEEDS...
                </>
              ) : (
                "FIND MY PROJECT"
              )}
            </Button>
          </div>

          {result && (
            <div className="mt-8 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-xl font-bold text-center mb-4">Recommendations</h3>
              <div className="grid gap-3">
                {result.recommendedProjects.length > 0 ? (
                  result.recommendedProjects.map((rec, idx) => (
                    <div key={idx} className="bg-muted/50 border border-primary/20 rounded-xl p-4 flex gap-3 items-start">
                      <div className="mt-1">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">{rec.name}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{rec.reason}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-sm text-muted-foreground italic">No classes found for this specific request.</p>
                )}
              </div>
              <Button variant="ghost" size="sm" className="w-full text-muted-foreground" onClick={() => setResult(null)}>
                Clear and try again
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
