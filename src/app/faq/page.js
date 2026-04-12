"use client";

import { useState } from "react";
import { Plus, Minus, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How do I determine my specific size?",
      a: "Every product page features a detailed size guide. Since our pieces vary from traditional to modern cuts, we recommend checking the specific measurements for each item. You can also contact our concierge for personalized size advice."
    },
    {
      q: "Are your vintage fabrics sustainably sourced?",
      a: "Yes, at SaffronStitch, we prioritize natural, ethically sourced fabrics. Our silks are sourced from certified master weavers, and we use organic dyes whenever possible to minimize environmental impact."
    },
    {
      q: "Can I request a bespoke customization?",
      a: "We offer limited-edition customization for select Bridal and Couture pieces. Please contact our boutique directly to discuss bespoke possibilities."
    },
    {
      q: "How should I maintain the quality of my garment?",
      a: "Luxury ethnic wear requires delicate care. We recommend dry cleaning for all silk, velvet, and embroidered pieces. Store them in the provided cotton garment bags to avoid moisture and direct sunlight."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background pb-32">
       {/* Hero Section */}
       <div className="w-full bg-muted/10 py-24 px-6 lg:px-20 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.4em]">Customer Assistance</span>
            <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-tight tracking-tight">
               Common <span className="gradient-text italic font-normal">Inquiries</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
               Everything you need to know about navigating the SaffronStitch luxury experience.
            </p>
            
            <div className="relative max-w-lg mx-auto pt-6">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground/40 mt-3" size={18} />
                <input 
                  type="text" 
                  placeholder="Search keywords..." 
                  className="w-full bg-card border border-border rounded-[4px] pl-14 pr-8 py-5 focus:outline-none focus:border-primary/50 transition-all shadow-sm mt-6 text-sm"
                />
            </div>
          </div>
       </div>

       {/* FAQ Accordion */}
       <div className="max-w-4xl mx-auto px-6 w-full py-20 space-y-4">
         {faqs.map((faq, idx) => {
           const isOpen = openIndex === idx;
           return (
             <div key={idx} className={cn("bg-card rounded-[4px] border transition-all duration-500 overflow-hidden shadow-sm", isOpen ? 'border-primary/30' : 'border-border hover:border-border-foreground/20')}>
               <button 
                 onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                 className="w-full px-10 py-7 flex items-center justify-between hover:bg-muted/10 transition-colors"
               >
                 <h3 className={cn("text-lg font-bold uppercase tracking-wider text-left transition-colors", isOpen ? 'text-primary' : 'text-foreground')}>
                    {faq.q}
                 </h3>
                 <div className="bg-muted/30 p-2 rounded-full">
                   {isOpen ? <Minus size={14} className="text-primary" /> : <Plus size={14} className="text-muted-foreground" />}
                 </div>
               </button>
               
               <div className={cn("px-10 transition-all duration-700 ease-in-out", isOpen ? 'max-h-96 pb-10 opacity-100' : 'max-h-0 opacity-0')}>
                  <div className="border-t border-border pt-8">
                    <p className="text-muted-foreground font-light leading-relaxed text-base italic">
                      "{faq.a}"
                    </p>
                  </div>
               </div>
             </div>
           );
         })}
       </div>

       {/* Secondary CTA */}
       <div className="max-w-4xl mx-auto px-6 w-full">
         <div className="bg-[#F9F7F4] p-12 md:p-16 rounded-[4px] border border-border/50 text-center space-y-8 shadow-sm">
            <h2 className="text-3xl font-serif text-foreground">Still seeking answers?</h2>
            <p className="text-muted-foreground font-light max-w-md mx-auto">
              Our dedicated concierge team is available to assist you with any bespoke inquiries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <button className="button-premium !px-10 !py-5 uppercase tracking-[0.2em] text-xs font-bold w-full sm:w-auto">Contact Concierge</button>
               <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 px-4">care@saffronstitch.com</p>
            </div>
         </div>
       </div>
    </div>
  );
}
