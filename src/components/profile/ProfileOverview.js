import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ProfileOverview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Recent Orders Preview */}
      <div className="bg-card rounded-[4px] border border-border overflow-hidden shadow-sm flex flex-col">
        <div className="px-8 py-6 border-b border-border flex justify-between items-center bg-muted/10">
          <h3 className="font-bold text-sm uppercase tracking-widest text-foreground">Recent Orders</h3>
          <Link href="/profile/orders" className="text-[10px] text-primary font-bold hover:underline tracking-widest uppercase">
            View All
          </Link>
        </div>
        <div className="p-8 space-y-6 flex-1">
          {[1, 2].map((i) => (
            <Link key={i} href={`/profile/orders/${i}`} className="flex items-center gap-6 group">
               <div className="w-12 h-12 bg-muted/30 border border-border flex items-center justify-center font-serif text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                 #0{i}
               </div>
               <div className="flex-1">
                  <p className="text-sm font-bold text-foreground">In Transit</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">Expected by Oct 15</p>
               </div>
               <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>

      {/* Account Settings Shortcut */}
      <div className="bg-card rounded-[4px] border border-border overflow-hidden shadow-sm">
        <div className="px-8 py-6 border-b border-border bg-muted/10">
          <h3 className="font-bold text-sm uppercase tracking-widest text-foreground">Account Quick Access</h3>
        </div>
        <div className="p-8 space-y-8">
           <div className="p-6 bg-primary/5 border border-primary/10 border-l-4">
              <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-2">Member Benefit</p>
              <p className="text-sm font-light leading-relaxed text-foreground/80">
                You're <span className="text-primary font-semibold">$50 away</span> from free express shipping on all future orders.
              </p>
           </div>
           <div className="grid grid-cols-1 gap-4">
             {[
               { label: "Update phone number", href: "/profile/settings" },
               { label: "Add a shipping address", href: "/profile/addresses" },
               { label: "Browse latest collections", href: "/shop" }
             ].map((link, idx) => (
               <Link 
                key={idx} 
                href={link.href} 
                className="flex items-center justify-between p-4 bg-muted/20 border border-border/50 rounded-[4px] text-xs font-bold uppercase tracking-widest hover:bg-muted/40 transition-all"
               >
                 {link.label}
                 <ChevronRight size={14} className="text-primary" />
               </Link>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}
