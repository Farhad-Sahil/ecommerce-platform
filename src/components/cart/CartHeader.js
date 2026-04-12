import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CartHeader({ itemCount }) {
  return (
    <div className="w-full bg-muted/10 py-16 px-6 lg:px-20 border-b border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.4em]">Shopping Bag</span>
          <h1 className="text-5xl md:text-6xl font-serif text-foreground leading-tight tracking-tight">
            Your <span className="gradient-text italic font-normal">Selection</span>
          </h1>
          <p className="text-lg text-muted-foreground font-light">
            You have carefully selected {itemCount} premium pieces.
          </p>
        </div>
        
        <Link 
          href="/shop" 
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors"
        >
          <ArrowLeft size={16} /> Continue Exploring
        </Link>
      </div>
    </div>
  );
}
