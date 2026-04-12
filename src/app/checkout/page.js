import CheckoutHeader from "@/components/checkout/CheckoutHeader";
import ShippingForm from "@/components/checkout/ShippingForm";
import PaymentForm from "@/components/checkout/PaymentForm";
import CheckoutSummary from "@/components/checkout/CheckoutSummary";

export default function Checkout() {
  return (
    <div className="flex flex-col min-h-screen bg-background pb-24">
      <CheckoutHeader />
      <div className="max-w-7xl mx-auto px-6 lg:px-20 w-full grid grid-cols-1 lg:grid-cols-3 gap-16 py-20">
        <div className="lg:col-span-2 space-y-12">
          <ShippingForm />
          <PaymentForm />
        </div>
        <div>
          <CheckoutSummary />
        </div>
      </div>
    </div>
  );
}
