import { CreditCard, Lock } from "lucide-react";

export default function PaymentForm() {
  return (
    <div className="bg-[#F9F7F4] p-10 rounded-[4px] border border-border/50 space-y-10">
      <div className="flex items-center gap-6">
        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg">2</div>
        <h2 className="text-2xl font-serif text-foreground">Payment Method</h2>
      </div>
      
      <div className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex flex-col items-center justify-center gap-3 p-6 bg-white border-2 border-primary rounded-[4px] shadow-md transition-all">
            <CreditCard size={24} className="text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-foreground">Credit Card</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-3 p-6 bg-white border border-border/50 rounded-[4px] opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">PayPal</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-3 p-6 bg-white border border-border/50 rounded-[4px] opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Apple Pay</span>
          </button>
        </div>

        <div className="space-y-6 pt-6 border-t border-border/50">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Card Number</label>
            <div className="relative">
              <input type="text" placeholder="xxxx xxxx xxxx xxxx" className="w-full bg-white border border-border/80 rounded-[4px] pl-6 pr-12 py-3.5 text-sm focus:outline-none focus:border-primary/50" />
              <Lock size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-muted-foreground/30" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
             <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Expiry Date</label>
              <input type="text" placeholder="MM/YY" className="w-full bg-white border border-border/80 rounded-[4px] px-6 py-3.5 text-sm focus:outline-none focus:border-primary/50" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">CVC</label>
              <input type="text" placeholder="***" className="w-full bg-white border border-border/80 rounded-[4px] px-6 py-3.5 text-sm focus:outline-none focus:border-primary/50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
