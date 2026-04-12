import { trustBadges } from "@/lib/data";

export default function TrustBadges() {
  return (
    <section className="w-full py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {trustBadges.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 p-5 rounded-[4px] bg-muted/30 border border-border/50 hover:border-primary/40 transition-all duration-300 hover:bg-muted/50">
            <div className="p-3 rounded-[4px] bg-primary/10 text-primary shrink-0">
              <item.icon size={22} />
            </div>
            <div>
              <h3 className="font-bold text-sm text-foreground">{item.title}</h3>
              <p className="text-[11px] text-muted-foreground leading-tight">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
