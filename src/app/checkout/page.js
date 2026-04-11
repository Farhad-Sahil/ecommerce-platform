import { ArrowLeft, ShieldCheck, Truck, CreditCard, Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Checkout() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <div className="flex items-center gap-4">
        <Link href="/cart" className="p-2 glass rounded-full hover:text-primary transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Checkout</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Shipping & Payment */}
        <div className="lg:col-span-2 space-y-8">
          {/* Shipping Address */}
          <section className="glass p-8 rounded-3xl border border-white/5 space-y-6">
            <div className="flex items-center gap-4 text-primary">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold">1</div>
              <h2 className="text-xl font-bold text-foreground">Shipping Information</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-1">First Name</label>
                <input type="text" className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-1">Last Name</label>
                <input type="text" className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-1">Street Address</label>
                <input type="text" className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-1">City</label>
                <input type="text" className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-1">State</label>
                  <input type="text" className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-1">ZIP</label>
                  <input type="text" className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section className="glass p-8 rounded-3xl border border-white/5 space-y-6">
            <div className="flex items-center gap-4 text-primary">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold">2</div>
              <h2 className="text-xl font-bold text-foreground">Payment Method</h2>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <button className="flex flex-col items-center gap-3 p-6 glass rounded-2xl border-2 border-primary ring-2 ring-primary/20 transition-all">
                  <CreditCard size={24} />
                  <span className="text-xs font-bold">Credit Card</span>
                </button>
                <button className="flex flex-col items-center gap-3 p-6 glass rounded-2xl border border-white/5 hover:border-primary/50 transition-all opacity-50 grayscale hover:grayscale-0">
                   <span className="text-xs font-bold">PayPal</span>
                </button>
                <button className="flex flex-col items-center gap-3 p-6 glass rounded-2xl border border-white/5 hover:border-primary/50 transition-all opacity-50 grayscale hover:grayscale-0">
                   <span className="text-xs font-bold">Apple Pay</span>
                </button>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-1">Card Number</label>
                  <div className="relative">
                    <input type="text" placeholder="xxxx xxxx xxxx xxxx" className="w-full bg-background border border-white/10 rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                    <Lock size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-1">Expiry Date</label>
                    <input type="text" placeholder="MM/YY" className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-1">CVC</label>
                    <input type="text" placeholder="***" className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Order Summary Table */}
        <aside className="space-y-6">
          <div className="glass p-8 rounded-3xl border border-white/10 space-y-6 sticky top-28">
            <h2 className="text-xl font-bold">Review Order</h2>
            
            <div className="space-y-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
              {[1, 2].map((i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="relative w-12 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                    <Image src="/watch.png" alt="item" fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold truncate">Premium Silk Saree</h4>
                    <p className="text-xs text-muted-foreground">Qty: 1</p>
                  </div>
                  <p className="text-sm font-bold">$299</p>
                </div>
              ))}
            </div>

            <div className="h-px bg-white/10 my-4"></div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>$598.00</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span>$15.00</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-4 border-t border-white/10">
                <span>Total</span>
                <span className="gradient-text">$613.00</span>
              </div>
            </div>

            <Link href="/checkout/success" className="button-premium w-full py-4 text-lg text-center">
              Place Order
            </Link>

            <div className="space-y-4 pt-6 border-t border-white/10">
               <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                  <ShieldCheck size={14} className="text-primary" />
                  <span>Secure 256-bit SSL encrypted payment</span>
               </div>
               <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                  <Truck size={14} className="text-primary" />
                  <span>Premium worldwide insured shipping</span>
               </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
