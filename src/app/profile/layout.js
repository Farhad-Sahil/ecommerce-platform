"use client";

import { User, Package, Heart, Settings, MapPin, LogOut, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ProfileLayout({ children }) {
  const pathname = usePathname();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const menuItems = [
    { label: "Overview", href: "/profile", icon: User },
    { label: "Orders", href: "/profile/orders", icon: Package },
    { label: "Addresses", href: "/profile/addresses", icon: MapPin },
    { label: "Settings", href: "/profile/settings", icon: Settings },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20 pb-32">
      <div className="flex flex-col md:flex-row gap-16">
        {/* Sidebar */}
        <aside className="w-full md:w-72 space-y-8">
          <div className="bg-[#F9F7F4] p-10 rounded-[4px] text-center space-y-6 border border-border flex flex-col items-center">
            <div className="relative group">
              <div className="w-24 h-24 bg-card rounded-full overflow-hidden border border-border shadow-sm">
                <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary">
                  <User size={40} strokeWidth={1.5} />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-[8px] font-bold border-2 border-white">
                ELITE
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl text-foreground leading-tight">Sahil <span className="italic">Khan</span></h2>
              <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-bold mt-2">Member since 2026</p>
            </div>
          </div>

          <nav className="bg-card rounded-[4px] border border-border overflow-hidden shadow-sm">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-4 px-8 py-5 text-[11px] font-bold uppercase tracking-[0.15em] transition-all border-l-[3px]",
                    isActive 
                      ? "text-primary bg-primary/5 border-primary" 
                      : "text-muted-foreground border-transparent hover:bg-muted/30 hover:text-foreground"
                  )}
                >
                  <item.icon size={16} strokeWidth={ isActive ? 2 : 1.5 } />
                  {item.label}
                </Link>
              );
            })}
            <button
              onClick={() => setShowLogoutModal(true)}
              className="w-full flex items-center gap-4 px-8 py-6 text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground border-l-[3px] border-transparent hover:bg-destructive/5 hover:text-destructive transition-all border-t border-border"
            >
              <LogOut size={16} strokeWidth={1.5} />
              Sign Out
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-background/90 backdrop-blur-md" onClick={() => setShowLogoutModal(false)}></div>
          <div className="relative bg-card p-12 rounded-[4px] border border-border max-w-sm w-full space-y-10 shadow-2xl animate-fade-in">
             <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-destructive/5 text-destructive rounded-full flex items-center justify-center mx-auto mb-6 border border-destructive/10">
                   <LogOut size={32} />
                </div>
                <h2 className="text-3xl font-serif text-foreground leading-tight">End Session?</h2>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">Are you sure you want to log out of SaffronStitch? We'll miss having you here.</p>
             </div>

             <div className="grid grid-cols-1 gap-4">
                <button 
                  onClick={() => setShowLogoutModal(false)}
                  className="bg-primary text-white py-4 rounded-[4px] text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg"
                >
                  Stay in Boutique
                </button>
                <button 
                  className="bg-transparent text-muted-foreground py-4 rounded-[4px] text-[10px] font-bold uppercase tracking-widest hover:text-destructive transition-colors"
                >
                  Sign Out
                </button>
             </div>
             
             <button 
              onClick={() => setShowLogoutModal(false)}
              className="absolute top-6 right-6 p-2 text-muted-foreground/30 hover:text-foreground transition-colors"
             >
                <X size={20} />
             </button>
          </div>
        </div>
      )}
    </div>
  );
}
