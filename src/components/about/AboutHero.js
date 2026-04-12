import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="w-full bg-muted/10 py-24 px-6 lg:px-20 border-b border-border">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="max-w-3xl space-y-6">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.4em]">Our Philosophy</span>
          <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-tight tracking-tight">
            Crafting <span className="gradient-text italic font-normal">Modern Legacies</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            Founded in 2026, SaffronStitch was born from a desire to bridge the gap between 
            traditional ethnic craftsmanship and contemporary luxury design.
          </p>
        </div>
        
        <div className="relative aspect-[21/9] w-full rounded-[4px] overflow-hidden shadow-2xl">
          <Image 
            src="/hero-fashion.png" 
            alt="Our Boutique Atelier" 
            fill 
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>
    </div>
  );
}
