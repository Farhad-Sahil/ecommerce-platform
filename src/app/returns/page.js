import { Undo2, ShieldCheck, Mail, Clock } from "lucide-react";

export default function Returns() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-20">
      <div className="space-y-6 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Returns & <span className="gradient-text italic">Exchanges</span></h1>
        <p className="text-lg text-muted-foreground leading-relaxed">We want you to be completely satisfied with your SaffronStitch purchase. If a piece isn't perfect, we offer easy returns within 30 days.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[
          { icon: Clock, title: "30 Days", desc: "Duration to request a return" },
          { icon: Undo2, title: "Free Returns", desc: "For all luxury members" },
          { icon: ShieldCheck, title: "Quality Check", desc: "Items must be unworn with tags" },
        ].map((item, idx) => (
          <div key={idx} className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <item.icon size={28} />
            </div>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="space-y-8 glass p-10 md:p-16 rounded-[3rem] border border-white/5">
        <h2 className="text-3xl font-bold">Standard Return Process</h2>
        <div className="space-y-6">
          {[
            { step: "01", title: "Submit Request", desc: "Contact our support team or use the portal in your profile to request a return label." },
            { step: "02", title: "Pack Securely", desc: "Place the item in its original signature packaging to avoid damage during transit." },
            { step: "03", title: "Drop Off", desc: "Use the prepaid label to drop off the package at any authorized courier location." },
            { step: "04", title: "Refund Issued", desc: "Once inspected, your refund will be processed to the original payment method within 5 days." },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-8 group">
               <span className="text-5xl font-black text-white/5 group-hover:text-primary/20 transition-colors duration-500">{item.step}</span>
               <div className="space-y-1">
                 <h3 className="font-bold text-xl">{item.title}</h3>
                 <p className="text-muted-foreground italic leading-relaxed">{item.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center space-y-4">
         <p className="text-muted-foreground italic">Questions regarding a return?</p>
         <div className="flex justify-center gap-6">
            <button className="button-premium px-8">Return Portal</button>
            <button className="glass px-8 rounded-xl font-bold hover:bg-white/5 transition-all flex items-center gap-2 border border-white/5">
              <Mail size={18} /> Contact Support
            </button>
         </div>
      </div>
    </div>
  );
}
