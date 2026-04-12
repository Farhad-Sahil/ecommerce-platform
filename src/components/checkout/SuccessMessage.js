import { CheckCircle } from "lucide-react";

export default function SuccessMessage() {
  return (
    <div className="space-y-8 text-center pt-10">
      <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto border border-primary/20">
        <CheckCircle size={48} strokeWidth={1.5} />
      </div>
      <div className="space-y-4">
        <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">Transaction Successful</span>
        <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-tight tracking-tight">
          Order <span className="gradient-text italic font-normal">Confirmed</span>
        </h1>
        <p className="text-lg text-muted-foreground font-light max-w-lg mx-auto leading-relaxed">
          Thank you for choosing SaffronStitch. Your order <span className="text-foreground font-bold italic">#SS-2026-892</span> has 
          been placed and is being prepared for artisanal craftsmanship.
        </p>
      </div>
    </div>
  );
}
