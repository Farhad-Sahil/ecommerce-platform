import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SuccessActions() {
  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
      <Link 
        href="/profile/orders" 
        className="button-premium !px-12 !py-5 uppercase tracking-[0.2em] text-xs font-bold group"
      >
        View Account Orders <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
      </Link>
      <Link 
        href="/shop" 
        className="px-12 py-5 border border-border rounded-[4px] text-xs font-bold uppercase tracking-[0.2em] hover:bg-muted/10 transition-all"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
