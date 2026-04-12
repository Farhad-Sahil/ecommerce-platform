import { Truck, Globe, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function Shipping() {
  return (
    <div className="flex flex-col min-h-screen bg-background pb-32">
      {/* Hero Header */}
      <div className="w-full bg-muted/10 py-24 px-6 lg:px-20 border-b border-border">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.4em]">Logistics & Delivery</span>
          <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-tight tracking-tight">
            Shipping <span className="gradient-text italic font-normal">Policy</span>
          </h1>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            At SaffronStitch, we ensure that your luxury pieces reach you in perfect condition,
            utilizing the world's most secure and ethical logistics networks.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 w-full py-20 space-y-24">
        {/* Tier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: Truck, title: "Standard Delivery", desc: "5-7 Business Days", price: "Complimentary ($150+)" },
            { icon: Globe, title: "Express Worldwide", desc: "2-4 Business Days", price: "$35 Flat Premium" },
            { icon: Clock, title: "Next Day Priority", desc: "Order by 2pm EST", price: "$50 (Metropolitan)" },
            { icon: MapPin, title: "Insured Tracked", desc: "White-Glove Handling", price: "Included as Standard" },
          ].map((item, idx) => (
            <div key={idx} className="bg-card p-10 rounded-[4px] border border-border space-y-6 shadow-sm group hover:border-primary/30 transition-all duration-500">
              <div className="w-12 h-12 bg-muted/30 text-primary rounded-[4px] flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <item.icon size={24} strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold uppercase tracking-widest text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary pt-4 border-t border-border/50">{item.price}</p>
            </div>
          ))}
        </div>

        {/* Narratives */}
        <div className="grid grid-cols-1 gap-16">
          <section className="space-y-6">
            <h2 className="text-3xl font-serif text-foreground">Global Reach & Customs</h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed italic">
              "We provide seamless delivery to over 80 countries. Our integrated system calculates custom duties
              at checkout to ensure a predictable and sophisticated delivery experience."
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-serif text-foreground">Sustainable Packaging</h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed italic">
              "Every garment is curated in our signature sustainable luxury box, lined with acid-free tissue
              to preserve craftsmanship. We solely utilize 100% recyclable materials."
            </p>
          </section>
        </div>

        {/* Help CTA */}
        <div className="bg-[#F9F7F4] p-12 md:p-16 rounded-[4px] border border-border/50 text-center space-y-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">Awaiting a masterpiece?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="button-premium !px-12 !py-5 uppercase tracking-[0.2em] text-xs font-bold">Track Your Order</button>
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 hidden sm:block">OR</span>
            <Link href="/contact" className="text-xs font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors underline underline-offset-8">Contact Boutique</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
