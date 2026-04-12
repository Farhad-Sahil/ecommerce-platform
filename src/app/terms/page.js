export default function Terms() {
  const terms = [
    { 
      title: "Agreement to Terms", 
      content: "By accessing or utilizing the SaffronStitch digital boutique, you agree to be bound by these Terms of Service and all applicable international laws and regulations." 
    },
    { 
      title: "Intellectual Property", 
      content: "All content on this site, including bespoke designs, text, and artisanal imagery, is the exclusive property of SaffronStitch. Any unauthorized reproduction is strictly prohibited." 
    },
    { 
      title: "Product Artisanship", 
      content: "We strive for absolute accuracy in our displays. However, due to the hand-woven nature of our fabrics and digital variations, slight nuances in color and texture are inherent to the craft." 
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background pb-32">
       {/* Policy Header */}
       <div className="w-full bg-muted/10 py-24 px-6 lg:px-20 border-b border-border">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.4em]">Service Agreement</span>
            <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-tight tracking-tight">
              Terms of <span className="gradient-text italic font-normal">Service</span>
            </h1>
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">Registry: April 11, 2026</p>
          </div>
       </div>

       <div className="max-w-4xl mx-auto px-6 w-full py-20 space-y-20">
          <p className="text-xl text-muted-foreground font-light leading-relaxed italic border-l-4 border-primary/20 pl-8 py-4">
            "These terms govern your refined experience of our boutique and the acquisition of our luxury goods. 
            We invite you to review these protocols prior to engagement."
          </p>

          <div className="grid grid-cols-1 gap-16">
            {terms.map((term, idx) => (
              <section key={idx} className="space-y-6 group">
                 <h2 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">{term.title}</h2>
                 <p className="text-muted-foreground font-light leading-relaxed text-lg italic">"{term.content}"</p>
              </section>
            ))}
          </div>

          <div className="pt-20 border-t border-border/50 text-center">
             <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/40 leading-relaxed italic">
                Governed by the luxury trade laws of the State of New York, <br/>United States of America.
             </p>
          </div>
       </div>
    </div>
  );
}
