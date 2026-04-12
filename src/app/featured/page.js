import ProductCard from "@/components/common/ProductCard";
import { Star } from "lucide-react";
import Link from "next/link";

export default function Featured() {
  const bestSellers = [
    { id: 1, name: "Saffron Silk Saree", price: "$299", rating: 5, category: "Pure Silk", image: "/watch.png" },
    { id: 3, name: "Gold Bridal Lehenga", price: "$850", rating: 5, category: "Bridal", image: "/watch.png" },
    { id: 6, name: "Silver Jewelry Set", price: "$450", rating: 4.9, category: "Jewelry", image: "/watch.png" },
    { id: 4, name: "Designer Kurta", price: "$180", rating: 4.8, category: "Men's Wear", image: "/watch.png" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background pb-32">
      {/* Narrative Header */}
      <div className="w-full bg-muted/10 py-24 px-6 lg:px-20 border-b border-border">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.4em]">Seasonal Highlights</span>
          <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-tight tracking-tight">
            Best <span className="gradient-text italic font-normal">Sellers</span>
          </h1>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            The designs that defined luxury this season. Loved by our global community for their
            impeccable quality and timeless artisanal appeal.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20 w-full space-y-32">
        {/* Product Grid using centralized ProductCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {bestSellers.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        {/* Cinematic Testimonial Section */}
        <section className="bg-[#F9F7F4] rounded-[4px] p-16 md:p-24 border border-border shadow-sm space-y-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="text-center space-y-6 relative z-10">
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">The Collective Choice</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">Trusted by Connoisseurs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-8 text-center md:text-left group">
                <div className="flex justify-center md:justify-start gap-1 text-amber-500/40 group-hover:text-amber-500 transition-colors duration-700">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={10} fill="currentColor" />)}
                </div>
                <p className="text-muted-foreground italic leading-relaxed text-lg font-light">
                  "The craftsmanship is unlike anything I've seen. Truly a piece of art that I'll cherish
                  and wear with immense pride."
                </p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary font-serif italic text-xl shadow-sm">
                    {i === 1 ? 'E' : i === 2 ? 'S' : 'M'}
                  </div>
                  <div className="leading-none space-y-1">
                    <p className="font-bold text-xs uppercase tracking-widest text-foreground">Elena Rodriguez</p>
                    <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">Certified Boutique Client</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-16 text-center relative z-10 border-t border-border/50">
            <Link href="/shop" className="button-premium !px-16 !py-5 uppercase tracking-[0.2em] text-xs font-bold shadow-xl">
              Explore All Artisan Works
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
