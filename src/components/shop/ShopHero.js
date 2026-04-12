import { Filter, ChevronDown } from "lucide-react";

export default function ShopHero({ totalProducts }) {
  return (
    <div className="w-full bg-muted/10 py-20 px-6 lg:px-20 border-b border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.4em]">Our Collection</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">Artisanal Heritage</h1>
          <p className="text-muted-foreground text-lg max-w-md">
            Discover {totalProducts} curated pieces designed for the modern soul with a traditional heart.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          <button className="flex items-center gap-2 bg-card border border-border px-6 py-3 rounded-[4px] text-sm font-bold uppercase tracking-widest hover:border-primary/40 transition-all text-foreground">
            <Filter size={16} /> Filter
          </button>
          <button className="flex items-center gap-2 bg-card border border-border px-6 py-3 rounded-[4px] text-sm font-bold uppercase tracking-widest hover:border-primary/40 transition-all text-foreground">
            Sort by: Featured <ChevronDown size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
