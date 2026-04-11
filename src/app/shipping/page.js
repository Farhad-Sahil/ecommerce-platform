import { Truck, Globe, MapPin, Clock } from "lucide-react";

export default function Shipping() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-20">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Shipping <span className="gradient-text italic">Policy</span></h1>
        <p className="text-lg text-muted-foreground leading-relaxed italic">At SaffronStitch, we ensure that your luxury pieces reaching you in perfect condition, no matter where you are in the world.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { icon: Truck, title: "Standard Delivery", desc: "5-7 Business Days", price: "Free (Orders over $150)" },
          { icon: Globe, title: "Express Worldwide", desc: "2-4 Business Days", price: "$35 Flat Rate" },
          { icon: Clock, title: "Next Day Priority", desc: "Order by 2pm EST", price: "$50 (Select Cities)" },
          { icon: MapPin, title: "Insured Tracked", desc: "Secure Handling", price: "Included as Standard" },
        ].map((item, idx) => (
          <div key={idx} className="glass p-8 rounded-3xl border border-white/5 space-y-4">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
              <item.icon size={24} />
            </div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">{item.price}</p>
          </div>
        ))}
      </div>

      <div className="space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">International Shipping</h2>
          <p className="text-muted-foreground italic leading-relaxed">
            We ship to over 80 countries. Custom duties and taxes are calculated at checkout for most locations to ensure a smooth delivery process without unexpected fees at your doorstep.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Packaging & Ethics</h2>
          <p className="text-muted-foreground italic leading-relaxed">
            Every garment is packed in our signature sustainable luxury box, lined with acid-free tissue to preserve the fabric. We use 100% recyclable outer mailers to minimize our environmental footprint.
          </p>
        </section>
      </div>

      <div className="glass p-8 rounded-3xl border border-primary/20 text-center space-y-4 bg-primary/5">
        <p className="font-bold">Need help tracking an order?</p>
        <button className="button-premium">Visit Support Center</button>
      </div>
    </div>
  );
}
