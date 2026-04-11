import { Package, Heart, Settings, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ProfileDashboard() {
  const stats = [
    { label: "Active Orders", value: "2", icon: Package },
    { label: "Wishlist", value: "12", icon: Heart },
    { label: "Reviews", value: "5", icon: Settings },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Account Overview</h1>
        <p className="text-muted-foreground">Welcome back, Sahil. Here's what's happening with your account.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass p-8 rounded-[2rem] border border-white/5 space-y-3 relative group overflow-hidden">
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            <stat.icon className="text-primary relative z-10" size={28} />
            <div className="relative z-10">
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders Preview */}
        <div className="glass rounded-[2.5rem] border border-white/5 overflow-hidden">
          <div className="px-8 py-6 border-b border-white/5 flex justify-between items-center bg-white/5">
            <h3 className="font-bold">Recent Orders</h3>
            <Link href="/profile/orders" className="text-xs text-primary font-bold hover:underline">View All</Link>
          </div>
          <div className="p-8 space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center gap-4 py-2">
                 <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center font-bold text-xs">#0{i}</div>
                 <div className="flex-1">
                    <p className="text-sm font-bold">In Transit</p>
                    <p className="text-[10px] text-muted-foreground">Expected by Oct 15</p>
                 </div>
                 <ChevronRight size={16} className="text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>

        {/* Account Quick Links */}
        <div className="glass rounded-[2.5rem] border border-white/5 overflow-hidden">
          <div className="px-8 py-6 border-b border-white/5 bg-white/5">
            <h3 className="font-bold">Account Tips</h3>
          </div>
          <div className="p-8 space-y-6">
             <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                <p className="text-xs font-semibold leading-relaxed">
                  Did you know? Elite members get <span className="text-primary italic">free express shipping</span> on all orders over $200.
                </p>
             </div>
             <div className="space-y-3">
               <Link href="/profile/settings" className="block text-sm hover:text-primary transition-colors">• Update phone number</Link>
               <Link href="/profile/addresses" className="block text-sm hover:text-primary transition-colors">• Add a shipping address</Link>
               <Link href="/shop" className="block text-sm hover:text-primary transition-colors">• View latest collections</Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
