import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-card border border-border p-3 rounded-[4px] hover:border-primary/40 transition-all duration-300 hover:shadow-md flex flex-col justify-between h-full">
      <Link href={`/shop/${product.id}`} className="block">
        <div>
          {/* Image Container */}
          <div className="relative aspect-[4/5] rounded-[4px] overflow-hidden mb-6">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 z-10">
               <span className="bg-background/80 backdrop-blur-md text-[8px] font-bold px-2 py-1 rounded-[2px] uppercase tracking-widest text-foreground border border-border">
                 New
               </span>
            </div>
            
            <button className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-background/20 hover:bg-background/40 transition-colors text-foreground">
              <Heart size={16} />
            </button>
          </div>

          {/* Content Section - Left Aligned */}
          <div className="space-y-1 mb-6 text-left px-1">
            <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-bold">{product.category}</p>
            <h3 className="text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-all cursor-pointer leading-snug">
              {product.name}
            </h3>
          </div>
        </div>
      </Link>

      {/* Price and Button Row */}
      <div className="flex items-center justify-between gap-4 px-1 pt-2 pb-1 border-t border-border mt-auto">
        <p className="text-base font-bold text-foreground opacity-90 tracking-tight">
          ${product.price.toString().replace('$', '')}
        </p>
        <button className="py-2.5 px-4 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/20 rounded-[4px] text-[9px] font-bold uppercase tracking-[0.1em] transition-all active:scale-[0.95]">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
