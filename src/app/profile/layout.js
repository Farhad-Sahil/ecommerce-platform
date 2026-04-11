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
    { label: "Dashboard", href: "/profile", icon: User },
    { label: "My Orders", href: "/profile/orders", icon: Package },
    { label: "Addresses", href: "/profile/addresses", icon: MapPin },
    { label: "Account Settings", href: "/profile/settings", icon: Settings },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full md:w-64 space-y-4">
          <div className="glass p-6 rounded-3xl text-center space-y-4 border border-white/5">
            <div className="w-24 h-24 mx-auto bg-primary/20 rounded-full flex items-center justify-center text-primary border-4 border-background">
              <User size={48} />
            </div>
            <div>
              <h2 className="font-bold text-xl">Sahil Khan</h2>
              <p className="text-sm text-muted-foreground italic">Elite Member</p>
            </div>
          </div>

          <nav className="glass rounded-3xl border border-white/5 overflow-hidden">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-4 px-6 py-4 text-sm font-medium transition-colors hover:bg-white/5",
                    isActive ? "text-primary bg-primary/10" : "text-muted-foreground"
                  )}
                >
                  <item.icon size={18} />
                  {item.label}
                </Link>
              );
            })}
            <button
              onClick={() => setShowLogoutModal(true)}
              className="w-full flex items-center gap-4 px-6 py-4 text-sm font-medium transition-colors hover:bg-white/5 text-muted-foreground hover:text-destructive"
            >
              <LogOut size={18} />
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 pb-20">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setShowLogoutModal(false)}></div>
          <div className="relative glass p-8 md:p-12 rounded-[2.5rem] border border-white/10 max-w-sm w-full space-y-8 animate-scale-in">
             <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-destructive/10 text-destructive rounded-full flex items-center justify-center mx-auto mb-6">
                   <LogOut size={32} />
                </div>
                <h2 className="text-2xl font-bold">End Session?</h2>
                <p className="text-muted-foreground text-sm">Are you sure you want to log out of SaffronStitch? We'll miss having you here.</p>
             </div>

             <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setShowLogoutModal(false)}
                  className="glass py-3 rounded-xl font-bold hover:bg-white/5 transition-colors"
                >
                  Stay Here
                </button>
                <button 
                  className="bg-destructive text-destructive-foreground py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
                >
                  Log Out
                </button>
             </div>
             
             <button 
              onClick={() => setShowLogoutModal(false)}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground"
             >
                <X size={20} />
             </button>
          </div>
        </div>
      )}
    </div>
  );
}
