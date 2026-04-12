import { Undo2, ShieldCheck, Mail, Clock } from "lucide-react";

export default function Returns() {
  return (
    <div className="flex flex-col min-h-screen bg-background pb-32">
      {/* Hero Section */}
      <div className="w-full bg-muted/10 py-24 px-6 lg:px-20 border-b border-border text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.4em]">Service & Support</span>
          <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-tight tracking-tight">
            Returns & <span className="gradient-text italic font-normal">Exchanges</span>
          </h1>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            We prioritize your complete satisfaction. If for any reason a piece does not meet your expectations, 
            we offer a sophisticated return process within 30 days.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 w-full py-20 space-y-24">
        {/* Value Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { icon: Clock, title: "30-Day Window", desc: "For all standard online orders" },
            { icon: Undo2, title: "Complimentary", desc: "Free for Elite Tier members" },
            { icon: ShieldCheck, title: "Quality Check", desc: "Meticulous inspection process" },
          ].map((item, idx) => (
            <div key={idx} className="space-y-6 group">
              <div className="w-20 h-20 mx-auto bg-muted/30 text-primary rounded-full flex items-center justify-center border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700">
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold uppercase tracking-widest text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-[#F9F7F4] p-12 md:p-20 rounded-[4px] border border-border shadow-sm space-y-16">
          <div className="space-y-4">
             <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">The Sequence</span>
             <h2 className="text-4xl font-serif text-foreground">Standard Process</h2>
          </div>
          <div className="grid grid-cols-1 gap-12">
            {[
              { step: "I", title: "Submit Request", desc: "Contact our dedicated support concierge or utilize the digital portal in your profile." },
              { step: "II", title: "Secure Packaging", desc: "Retain the original signature hardware and packaging to ensure the safety of the garment." },
              { step: "III", title: "Dispatch", desc: "Utilize the provided premium courier label for a secure, tracked transit back to our boutique." },
              { step: "IV", title: "Resolution", desc: "Upon successful inspection, your refund will be finalized within 5-7 business days." },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-10 items-start group">
                 <span className="text-3xl font-serif text-primary/30 group-hover:text-primary transition-colors duration-500 w-12 pt-1">{item.step}</span>
                 <div className="space-y-2 flex-1 border-b border-border/50 pb-8">
                   <h3 className="font-bold text-sm uppercase tracking-widest text-foreground">{item.title}</h3>
                   <p className="text-muted-foreground font-light leading-relaxed italic text-base">"{item.desc}"</p>
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support CTA */}
        <div className="text-center space-y-10">
           <div className="space-y-2">
             <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/60">Requirement assistance?</p>
             <h3 className="text-2xl font-serif text-foreground">Consult Our Concierge</h3>
           </div>
           <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <button className="button-premium !px-12 !py-5 uppercase tracking-[0.2em] text-xs font-bold shadow-lg">Access Portal</button>
              <button className="px-12 py-5 border border-border rounded-[4px] text-xs font-bold uppercase tracking-[0.2em] hover:bg-muted/10 transition-all flex items-center gap-3">
                <Mail size={16} /> Contact Support
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
