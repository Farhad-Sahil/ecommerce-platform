"use client";

import { X, Search, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { featuredProducts } from "@/lib/data";

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

  const tags = ["New Arrivals", "Bridal", "Casual", "Silk", "Luxury", "Hand-Stitched"];

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-6 sm:p-20 overflow-hidden">
      {/* Background with Texture and Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/search_texture.png"
          alt="Background Texture"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-2xl" />
      </div>

      {/* Main Search Container - Grouped */}
      <div className="relative z-10 w-full max-w-2xl bg-card border border-border shadow-2xl rounded-[4px] flex flex-col animate-scale-in max-h-[85vh] overflow-hidden">
        {/* Close Icon - Now inside the block at top right */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 hover:bg-muted rounded-full transition-all text-muted-foreground hover:text-foreground active:scale-95"
          aria-label="Close search"
        >
          <X size={20} />
        </button>

        <div className="p-6 pb-2">
          {/* Search Input Section */}
          <div className="relative flex items-center mb-4">
            <input
              autoFocus
              type="text"
              placeholder="Search for ethnic elegance..."
              className="w-full bg-muted/30 border border-border rounded-[4px] px-6 py-3.5 text-lg font-light placeholder:text-muted-foreground outline-none focus:border-primary/40 transition-all pr-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search 
              className="absolute right-5 text-muted-foreground pointer-events-none" 
              size={20} 
            />
          </div>

          <div className="text-[8px] font-bold uppercase tracking-[0.4em] text-muted-foreground mb-3">
            Recent Collections
          </div>
        </div>

        {/* Scrollable Results Area */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 no-scrollbar space-y-6">
          <div className="grid grid-cols-2 gap-3">
            {featuredProducts.slice(0, 4).map((product) => (
              <div 
                key={product.id} 
                className="flex items-center gap-3 p-2 rounded-[4px] bg-muted/20 border border-border group hover:bg-muted/40 transition-all cursor-pointer"
              >
                <div className="relative w-14 h-14 rounded-[4px] overflow-hidden shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <span className="text-[7px] uppercase tracking-widest text-primary font-bold truncate">{product.category}</span>
                  <h3 className="text-[11px] font-bold text-foreground leading-tight mt-0.5 truncate">{product.name}</h3>
                  <span className="text-[9px] font-bold text-muted-foreground mt-0.5">${product.price.replace('$', '')}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Search Tags - moved closer to products */}
          <div className="space-y-2 pt-4 border-t border-border/50">
            <div className="text-[8px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
              Popular Tags
            </div>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchTerm(tag)}
                  className="px-2.5 py-1 rounded-[4px] bg-muted/50 hover:bg-primary/20 border border-border text-[9px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-all"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
