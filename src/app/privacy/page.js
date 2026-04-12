export default function Privacy() {
  const sections = [
    { 
      title: "Data Collection", 
      content: "We collect information you provide directly to us when you create an account, make a purchase, or communicate with us. This includes your name, email, shipping address, and secure payment credentials." 
    },
    { 
      title: "Use of Information", 
      content: "We use the information we collect solely to provide, maintain, and improve our boutique services, process transactions, and send you personalized technical notices and support messages." 
    },
    { 
      title: "Security Measures", 
      content: "We implement rigorous technical and organizational measures to protect your information. All transactions are processed through certified 256-bit SSL encrypted channels." 
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background pb-32">
       {/* Policy Header */}
       <div className="w-full bg-muted/10 py-24 px-6 lg:px-20 border-b border-border">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.4em]">Legal Framework</span>
            <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-tight tracking-tight">
              Privacy <span className="gradient-text italic font-normal">Policy</span>
            </h1>
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">Updated: April 11, 2026</p>
          </div>
       </div>

       <div className="max-w-4xl mx-auto px-6 w-full py-20 space-y-20">
          <p className="text-xl text-muted-foreground font-light leading-relaxed italic border-l-4 border-primary/20 pl-8 py-4">
            "Your privacy is a fundamental right at SaffronStitch. We are committed to absolute transparency 
            regarding how we manage your personal data to ensure a seamless luxury experience."
          </p>

          <div className="grid grid-cols-1 gap-16">
            {sections.map((section, idx) => (
              <section key={idx} className="space-y-6 group">
                 <h2 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">{section.title}</h2>
                 <p className="text-muted-foreground font-light leading-relaxed text-lg italic">"{section.content}"</p>
              </section>
            ))}
          </div>

          <div className="bg-[#F9F7F4] p-12 md:p-16 rounded-[4px] border border-border/50 space-y-8 shadow-sm">
             <div className="space-y-2">
               <h3 className="font-bold text-sm uppercase tracking-widest text-foreground">Inquiries & Rights</h3>
               <p className="text-muted-foreground font-light leading-relaxed">
                 If you have any questions regarding this policy or your individual data rights, 
                 please consult our legal concierge.
               </p>
             </div>
             <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">legal@saffronstitch.com</p>
          </div>
       </div>
    </div>
  );
}
