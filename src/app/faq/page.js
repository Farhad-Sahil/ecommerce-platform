"use client";

import { useState } from "react";
import { Plus, Minus, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How do I know my size?",
      a: "Every product page features a detailed size guide. Since our pieces vary from traditional to modern cuts, we recommend checking the specific measurements for each item. You can also contact our concierge for personalized size advice."
    },
    {
      q: "Are the fabrics sustainable?",
      a: "Yes, at SaffronStitch, we prioritize natural, ethically sourced fabrics. Our silks are sourced from certified master weavers, and we use organic dyes whenever possible to minimize environmental impact."
    },
    {
      q: "Can I customize a design?",
      a: "We offer limited-edition customization (length adjustments) for select Bridal and Couture pieces. Please contact our boutique directly to discuss bespoke possibilities."
    },
    {
      q: "How should I care for my garment?",
      a: "Luxury ethnic wear requires delicate care. We recommend dry cleaning for all silk, velvet, and embroidered pieces. Store them in the provided cotton garment bags to avoid moisture and direct sunlight."
    },
    {
      q: "Do you offer wholesale?",
      a: "Absolutely. We partner with select high-end boutiques worldwide. Please visit our Contact page and select 'Wholesale' as the subject to reach our B2B team."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Common <span className="gradient-text italic">Inquiries</span></h1>
        <p className="text-lg text-muted-foreground leading-relaxed italic">Everything you need to know about the SaffronStitch experience.</p>
        
        <div className="relative max-w-lg mx-auto pt-8">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground mt-4" size={20} />
           <input 
            type="text" 
            placeholder="Search keywords..." 
            className="w-full bg-background border border-white/10 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-xl mt-8"
           />
        </div>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className={cn("glass rounded-3xl border transition-all duration-500 overflow-hidden", isOpen ? 'border-primary/20 ring-1 ring-primary/10' : 'border-white/5')}>
              <button 
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <h3 className={cn("font-bold text-lg text-left transition-colors", isOpen ? 'text-primary' : 'text-foreground')}>
                   {faq.q}
                </h3>
                {isOpen ? <Minus size={20} className="text-primary" /> : <Plus size={20} className="text-muted-foreground" />}
              </button>
              
              <div className={cn("px-8 transition-all duration-500 ease-in-out", isOpen ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0')}>
                 <p className="text-muted-foreground italic leading-relaxed border-t border-white/5 pt-6">
                   {faq.a}
                 </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="glass p-12 rounded-[3rem] border border-white/5 text-center space-y-4">
         <h2 className="text-2xl font-bold">Still have questions?</h2>
         <p className="text-muted-foreground italic">Email our concierge team: concierge@saffronstitch.com</p>
         <button className="button-premium mt-4">Contact Support</button>
      </div>
    </div>
  );
}
