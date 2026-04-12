import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Truck } from "lucide-react";

export default function CheckoutSummary() {
  return (
    <aside className="space-y-8 sticky top-28">
      <div className="bg-card p-10 rounded-[4px] border border-border shadow-md space-y-10">
        <h2 className="text-xl font-bold uppercase tracking-widest text-foreground">Review Order</h2>
        
        <div className="space-y-6 max-h-[300px] overflow-y-auto no-scrollbar pr-2">
          {[1, 2].map((i) => (
            <div key={i} className="flex gap-4 items-center group">
              <div className="relative w-14 h-20 rounded-[4px] overflow-hidden flex-shrink-0 bg-muted/20 border border-border/50">
                <Image src="/watch.png" alt="item" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold truncate uppercase tracking-tight text-foreground">Premium Silk Saree</h4>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">Qty: 01</p>
                <p className="text-sm font-serif text-foreground mt-1">$299.00</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6 pt-8 border-t border-border">
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <span>Subtotal</span>
              <span className="text-foreground">$598.00</span>
            </div>
            <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <span>Shipping</span>
              <span className="text-primary">FREE</span>
            </div>
          </div>
          
          <div className="pt-6 border-t border-border/50 flex justify-between items-center text-lg font-bold">
            <span className="uppercase tracking-widest text-sm">Total</span>
            <span className="text-3xl font-serif text-primary">$598.00</span>
          </div>
        </div>

        <Link 
          href="/checkout/success" 
          className="button-premium w-full !py-5 uppercase tracking-[0.2em] text-xs font-bold text-center block"
        >
          Place Order
        </Link>

        <div className="space-y-4 pt-6">
           <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground/60">
              <ShieldCheck size={14} className="text-primary" />
              <span>Certified 256-bit Secure</span>
           </div>
           <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground/60">
              <Truck size={14} className="text-primary" />
              <span>Premium Insured Shipping</span>
           </div>
        </div>
      </div>
    </aside>
  );
}
