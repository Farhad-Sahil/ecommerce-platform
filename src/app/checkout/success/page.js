import Link from "next/link";
import { CheckCircle, Package, ArrowRight, Download } from "lucide-react";

export default function OrderSuccess() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-center space-y-12">
      <div className="space-y-6">
        <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto animate-scale-in">
          <CheckCircle size={48} />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Order <span className="gradient-text italic">Confirmed</span></h1>
        <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Thank you for choosing SaffronStitch. Your order <span className="text-foreground font-bold italic">#SS-2026-892</span> has been placed successfully and is being prepared for artisanal craftsmanship.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-8 border-b border-white/10">
        <div className="glass p-8 rounded-[2rem] border border-white/5 space-y-4 text-left">
           <Package className="text-primary" size={24} />
           <h3 className="font-bold">Next Steps</h3>
           <p className="text-xs text-muted-foreground leading-relaxed">
             You'll receive a confirmation email shortly with full order details and a tracking link once your items leave our boutique.
           </p>
        </div>
        <div className="glass p-8 rounded-[2rem] border border-white/5 space-y-4 text-left">
           <Download className="text-primary" size={24} />
           <h3 className="font-bold">Order Summary</h3>
           <p className="text-xs text-muted-foreground leading-relaxed">
             Need a copy for your records? You can download your official invoice or view the full history in your profile.
           </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
        <Link href="/profile/orders" className="button-premium px-10 group">
          View My Orders <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link href="/shop" className="glass px-10 py-3 rounded-xl font-bold hover:bg-white/5 transition-all">
          Continue Shopping
        </Link>
      </div>

      <p className="text-[10px] text-muted-foreground italic pt-12 uppercase tracking-[0.2em] font-bold">
        Luxury ethnic wear, hand-stitched with love since 2026.
      </p>
    </div>
  );
}
