"use client";

import { X, Search, ArrowRight, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const suggestions = [
    "Saffron Silk Saree",
    "Bridal Lehenga 2026",
    "Velvet Evening Shawl",
    "Gold Zari Embroidery",
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-6">
      <div 
        className="absolute inset-0 bg-background/60 backdrop-blur-xl animate-fade-in" 
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-2xl animate-slide-up">
        <div className="glass rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden">
          {/* Search Input */}
          <div className="p-6 border-b border-white/5 flex items-center gap-4">
            <Search className="text-primary" size={24} />
            <input
              autoFocus
              type="text"
              placeholder="Search SaffronStitch..."
              className="flex-1 bg-transparent border-none outline-none text-xl font-medium placeholder:text-muted-foreground"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/5 rounded-full transition-colors text-muted-foreground hover:text-foreground"
            >
              <X size={24} />
            </button>
          </div>

          {/* Search Content */}
          <div className="p-8 space-y-8 max-h-[60vh] overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                <TrendingUp size={14} /> Trending Searches
              </div>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((s, i) => (
                  <button 
                    key={i} 
                    className="px-4 py-2 glass rounded-xl text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    onClick={() => setSearchTerm(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
               <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Quick Links
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "New Arrivals", href: "/shop" },
                    { label: "Bridal Couture", href: "/collections" },
                    { label: "Shipping Policy", href: "/shipping" },
                    { label: "Contact Us", href: "/contact" },
                  ].map((link, i) => (
                    <button 
                      key={i} 
                      className="flex items-center justify-between p-4 glass rounded-2xl border border-white/5 hover:border-primary/20 hover:bg-white/5 transition-all text-sm group"
                    >
                      {link.label}
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
               </div>
            </div>
          </div>

          {/* Footer Tips */}
          <div className="px-8 py-4 bg-primary/5 border-t border-white/5 flex justify-between items-center">
             <p className="text-[10px] text-muted-foreground italic">
                Tip: Press <span className="p-1 glass rounded font-mono">ESC</span> to close
             </p>
             <button className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline">
                View All Results
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
