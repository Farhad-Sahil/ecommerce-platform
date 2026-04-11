import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

export default function Featured() {
  const bestSellers = [
    { id: 1, name: "Saffron Silk Saree", price: "$299", rating: 5, category: "Pure Silk" },
    { id: 3, name: "Gold Bridal Lehenga", price: "$850", rating: 5, category: "Bridal" },
    { id: 6, name: "Silver Jewelry Set", price: "$450", rating: 4.9, category: "Jewelry" },
    { id: 4, name: "Designer Kurta", price: "$180", rating: 4.8, category: "Men's Wear" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight">Best <span className="gradient-text italic">Sellers</span></h1>
        <p className="text-lg text-muted-foreground leading-relaxed">The designs that defined luxury this season. Loved by our global community for their impeccable quality and timeless appeal.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {bestSellers.map((item) => (
          <div key={item.id} className="group cursor-pointer space-y-6">
            <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden glass border border-white/5 shadow-2xl">
              <Image src="/watch.png" alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-6 left-6 px-3 py-1 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/20">
                Top Rated
              </div>
            </div>
            
            <div className="space-y-2 px-2 text-center">
              <p className="text-[10px] uppercase font-bold text-primary tracking-widest">{item.category}</p>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item.name}</h3>
              <div className="flex justify-center items-center gap-1 text-amber-500">
                <Star size={12} fill="currentColor" />
                <span className="text-xs font-bold text-muted-foreground">{item.rating} / 5.0</span>
              </div>
              <p className="text-lg font-bold gradient-text">{item.price}</p>
            </div>
            
            <Link href={`/shop/${item.id}`} className="block w-full text-center py-3 glass rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
              View Piece
            </Link>
          </div>
        ))}
      </div>

      {/* Social Proof CTA */}
      <section className="bg-primary/5 rounded-[3rem] p-12 md:p-20 text-center space-y-12">
         <h2 className="text-3xl md:text-5xl font-bold">Trusted by Connoisseurs</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <p className="text-muted-foreground italic leading-relaxed">"The craftsmanship is unlike anything I've seen. Truly a piece of art that I'll cherish forever."</p>
                <div className="flex items-center justify-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-white/10"></div>
                   <div className="text-left leading-none">
                      <p className="font-bold text-sm">Elena Rodriguez</p>
                      <p className="text-[10px] text-muted-foreground">Certified Buyer</p>
                   </div>
                </div>
              </div>
            ))}
         </div>
         <div className="pt-8">
            <Link href="/shop" className="button-premium">Shop All Designs</Link>
         </div>
      </section>
    </div>
  );
}
