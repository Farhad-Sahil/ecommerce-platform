import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Truck, ShieldCheck, Clock } from "lucide-react";

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Saffron Silk Saree",
      price: "$299.00",
      image: "/watch.png", // Using existing placeholder for now
      category: "Pure Silk",
    },
    {
      id: 2,
      name: "Gold Embroidered Lehenga",
      price: "$850.00",
      image: "/watch.png",
      category: "Bridal",
    },
    {
      id: 3,
      name: "Velvet Shawl with Zari",
      price: "$120.00",
      image: "/watch.png",
      category: "Accessories",
    },
    {
      id: 4,
      name: "Designer Kurta Set",
      price: "$180.00",
      image: "/watch.png",
      category: "Casual Ethnic",
    },
  ];

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center px-6 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-fashion.png"
            alt="Hero Fashion"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        
        <div className="relative z-10 max-w-2xl space-y-8 animate-slide-up">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-wider text-primary uppercase">
            Spring Collection 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Elevate Your <br />
            <span className="gradient-text italic">Ethnic Elegance</span>
          </h1>
          <p className="text-lg text-white/80 max-w-lg leading-relaxed">
            Discover the perfect blend of traditional craftsmanship and contemporary luxury. Hand-stitched with love, designed for the modern soul.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/shop" className="button-premium text-lg group">
              Shop Collection <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/about" className="glass px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-7xl mx-auto w-full px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: Truck, title: "Worldwide Shipping", desc: "Fast & secure delivery" },
          { icon: ShieldCheck, title: "Premium Quality", desc: "100% Authentic fabrics" },
          { icon: Clock, title: "24/7 Support", desc: "Dedicated assistance" },
          { icon: Star, title: "Exclusive Designs", desc: "Limited edition pieces" },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 p-6 rounded-2xl glass hover-scale border border-border/50">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <item.icon size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-sm">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto w-full px-6 space-y-12">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Featured Arrivals</h2>
            <p className="text-muted-foreground">Hand-picked treasures from our latest collection.</p>
          </div>
          <Link href="/shop" className="text-sm font-semibold text-primary hover:underline flex items-center gap-1 group">
            View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden glass hover-scale">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button className="absolute bottom-4 left-4 right-4 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 button-premium py-2 text-sm">
                  Quick Add
                </button>
              </div>
              <div className="space-y-1 px-1">
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold">{product.category}</p>
                <h3 className="font-semibold group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-sm font-medium">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collection CTA */}
      <section className="max-w-7xl mx-auto w-full px-6">
        <div className="relative rounded-3xl overflow-hidden h-[400px] flex items-center px-12">
          <Image
            src="/hero-fashion.png"
            alt="Collection"
            fill
            className="object-cover brightness-50 contrast-125"
          />
          <div className="relative z-10 max-w-md space-y-6">
            <h2 className="text-4xl font-bold">The Silk Route <br /> <span className="gradient-text">Masterpieces</span></h2>
            <p className="text-white/70">Unveiling our most intricate hand-woven sarees, combining centuries of tradition with modern aesthetics.</p>
            <Link href="/collections" className="button-premium"> Explore Collection </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary/5 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Stay in the Loop</h2>
          <p className="text-muted-foreground text-lg">
            Be the first to know about new arrivals, sales, and exclusive previews. Join the SaffronStitch community.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-background border border-border rounded-xl px-6 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button className="button-premium whitespace-nowrap">Subscribe Now</button>
          </form>
        </div>
      </section>
    </div>
  );
}
