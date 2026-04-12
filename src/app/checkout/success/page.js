import SuccessMessage from "@/components/checkout/SuccessMessage";
import SuccessDetails from "@/components/checkout/SuccessDetails";
import SuccessActions from "@/components/checkout/SuccessActions";

export default function OrderSuccess() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-background pb-32">
      <div className="max-w-4xl w-full px-6 lg:px-20 space-y-16 py-20">
        <SuccessMessage />
        <SuccessDetails />
        <SuccessActions />
        
        <div className="pt-20 text-center">
          <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.4em] italic opacity-50">
            Luxury ethnic wear, hand-stitched with love since 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
