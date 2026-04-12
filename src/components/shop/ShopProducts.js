import Image from "next/image";
import { Heart } from "lucide-react";

export default function ShopProducts({ products }) {
  return (
    <section className="w-full py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col justify-between">
              <div>
                {/* Image Container */}
                <div className="relative aspect-[4/5] rounded-[4px] overflow-hidden mb-6 bg-muted/20 border border-border group-hover:border-primary/40 transition-all duration-300">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  
                  {/* Heart Button */}
                  <button className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-background/20 hover:bg-background/40 transition-colors text-foreground">
                    <Heart size={16} />
                  </button>
                </div>

                {/* Content Section */}
                <div className="space-y-1 mb-6 text-left px-1">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-bold">{product.category}</p>
                  <h3 className="text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-colors cursor-pointer leading-snug">
                    {product.name}
                  </h3>
                </div>
              </div>

              {/* Price and Button Row */}
              <div className="flex items-center justify-between gap-4 px-1 pt-2 pb-1 border-t border-border/50">
                <p className="text-base font-bold text-foreground opacity-90 tracking-tight">
                  {product.price}
                </p>
                <button className="py-2.5 px-4 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/20 rounded-[4px] text-[9px] font-bold uppercase tracking-[0.1em] transition-all active:scale-[0.95]">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-10">
           <button className="px-10 py-4 bg-card border border-border text-foreground font-bold uppercase tracking-widest text-xs rounded-[4px] hover:border-primary/40 hover:bg-muted/50 transition-all">
             Load More Designs
           </button>
        </div>
      </div>
    </section>
  );
}
