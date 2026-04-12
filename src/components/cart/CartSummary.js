import Link from "next/link";

export default function CartSummary({ subtotal, shipping, total }) {
  return (
    <div className="bg-[#F9F7F4] p-10 rounded-[4px] border border-border/50 space-y-10 sticky top-28 shadow-sm">
      <div className="space-y-4 border-b border-border/50 pb-8">
        <h2 className="text-2xl font-serif text-foreground">Bag Summary</h2>
        <p className="text-xs text-muted-foreground font-light leading-relaxed">
          Complimentary shipping on orders over $500 for our elite members.
        </p>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
            <span>Subtotal</span>
            <span className="text-foreground">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
            <span>Shipping</span>
            <span className="text-foreground">${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
            <span>Estimated Tax</span>
            <span className="text-foreground">$0.00</span>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 flex justify-between items-center">
          <span className="text-sm font-bold uppercase tracking-widest text-foreground">Estimated Total</span>
          <span className="text-3xl font-serif text-primary">${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="space-y-4">
        <Link 
          href="/checkout" 
          className="button-premium w-full !py-5 uppercase tracking-[0.2em] text-xs font-bold text-center block"
        >
          Secure Checkout
        </Link>
        <div className="flex justify-center gap-4 opacity-30 grayscale hover:opacity-100 transition-all duration-700">
           {/* Payment Icons Placeholder */}
           <div className="w-8 h-5 bg-foreground/20 rounded-sm"></div>
           <div className="w-8 h-5 bg-foreground/20 rounded-sm"></div>
           <div className="w-8 h-5 bg-foreground/20 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
}
