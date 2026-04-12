import Image from "next/image";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function CartItems({ items }) {
  if (items.length === 0) {
    return (
      <div className="text-center py-24 bg-[#F9F7F4] rounded-[4px] border border-border/50 flex flex-col items-center space-y-6">
        <div className="p-8 bg-muted/20 border border-border/50 rounded-full text-muted-foreground/30">
          <ShoppingBag size={64} strokeWidth={1} />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-serif text-foreground">Your bag is empty</h2>
          <p className="text-muted-foreground font-light px-8 max-w-sm mx-auto">
            It seems you haven't discovered your next masterpiece yet.
          </p>
        </div>
        <Link href="/shop" className="button-premium !px-10 !py-4 font-bold uppercase tracking-widest text-xs">
          Discover Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div key={item.id} className="flex flex-col sm:flex-row gap-8 p-6 bg-card border border-border rounded-[4px] group hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-md">
          <div className="relative aspect-[4/5] w-full sm:w-32 rounded-[4px] overflow-hidden bg-muted/20 shrink-0">
            <Image 
              src={item.image} 
              alt={item.name} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>
          
          <div className="flex-1 flex flex-col justify-between py-2 space-y-6 sm:space-y-0">
            <div className="flex justify-between items-start gap-4">
              <div className="space-y-1">
                <p className="text-[9px] uppercase tracking-[0.2em] text-primary font-bold">{item.category}</p>
                <h3 className="text-xl font-bold leading-tight text-foreground tracking-tight group-hover:text-primary transition-colors cursor-pointer capitalize">
                  {item.name}
                </h3>
              </div>
              <button className="text-muted-foreground/40 hover:text-destructive transition-colors p-2">
                <Trash2 size={18} />
              </button>
            </div>

            <div className="flex items-center justify-between border-t border-border/50 sm:border-0 pt-6 sm:pt-0">
              <div className="flex items-center gap-6 bg-muted/20 px-4 py-2 rounded-[4px] border border-border/50">
                <button className="hover:text-primary p-1 transition-colors"><Minus size={14} /></button>
                <span className="font-bold text-xs w-6 text-center">{item.quantity}</span>
                <button className="hover:text-primary p-1 transition-colors"><Plus size={14} /></button>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-foreground font-serif">${(item.price * item.quantity).toFixed(2)}</p>
                <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold mt-1">Total Piece</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
