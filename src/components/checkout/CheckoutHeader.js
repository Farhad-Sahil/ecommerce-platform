import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CheckoutHeader() {
  return (
    <div className="w-full bg-muted/10 py-16 px-6 lg:px-20 border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center gap-8">
        <Link 
          href="/cart" 
          className="p-3 bg-card border border-border rounded-full hover:bg-muted transition-all"
        >
          <ArrowLeft size={20} />
        </Link>
        <div className="space-y-1">
          <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">Secure Checkout</span>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight tracking-tight">
            Finalize Your <span className="gradient-text italic font-normal">Order</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
