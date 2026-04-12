import ProductCard from "@/components/common/ProductCard";
import { featuredProducts } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FeaturedProducts() {
  return (
    <section className="w-full py-24 bg-muted/10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-4">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.4em]">Curated Selection</span>
            <h2 className="text-5xl md:text-6xl font-serif text-foreground tracking-tight leading-tight">Featured <br />Arrivals</h2>
            <p className="text-muted-foreground text-lg max-w-sm font-light leading-relaxed">Hand-picked treasures from our latest collection of artisanal heritage.</p>
          </div>
          <Link href="/shop" className="text-xs font-bold text-primary hover:text-accent flex items-center gap-2 group transition-all tracking-[0.2em] uppercase">
            View All Collection <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
