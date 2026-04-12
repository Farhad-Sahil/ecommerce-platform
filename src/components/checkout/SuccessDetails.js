import { Package, Download } from "lucide-react";

export default function SuccessDetails() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-12 border-y border-border/50">
      <div className="bg-[#F9F7F4] p-10 rounded-[4px] border border-border/50 space-y-6 text-left group hover:shadow-lg transition-all duration-500">
         <div className="w-12 h-12 bg-primary/10 text-primary rounded-[4px] flex items-center justify-center">
           <Package size={24} />
         </div>
         <div className="space-y-2">
           <h3 className="font-bold text-sm uppercase tracking-widest text-foreground">Next Steps</h3>
           <p className="text-sm text-muted-foreground leading-relaxed font-light">
             You'll receive a confirmation email shortly with full order details and a tracking link 
             once your items leave our boutique.
           </p>
         </div>
      </div>
      <div className="bg-[#F9F7F4] p-10 rounded-[4px] border border-border/50 space-y-6 text-left group hover:shadow-lg transition-all duration-500">
         <div className="w-12 h-12 bg-primary/10 text-primary rounded-[4px] flex items-center justify-center">
           <Download size={24} />
         </div>
         <div className="space-y-2">
           <h3 className="font-bold text-sm uppercase tracking-widest text-foreground">Order Summary</h3>
           <p className="text-sm text-muted-foreground leading-relaxed font-light">
             Need a copy for your records? You can download your official invoice or view 
             the full history in your profile settings.
           </p>
         </div>
      </div>
    </div>
  );
}
