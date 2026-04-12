import { Package, Heart, Star } from "lucide-react";

const stats = [
  { label: "Active Orders", value: "02", icon: Package },
  { label: "Wishlist Pieces", value: "12", icon: Heart },
  { label: "Product Reviews", value: "05", icon: Star },
];

export default function ProfileStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-[#F9F7F4] p-10 rounded-[4px] border border-border/50 space-y-4 group hover:shadow-lg transition-all duration-500">
          <stat.icon className="text-primary group-hover:scale-110 transition-transform" size={28} />
          <div>
            <p className="text-4xl font-serif text-foreground leading-none">{stat.value}</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold mt-2">
              {stat.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
