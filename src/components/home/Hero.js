import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center px-6 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-fashion.png"
          alt="Hero Fashion"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-1" />
      </div>
      
      <div className="relative z-10 max-w-2xl space-y-6 animate-slide-up">
        <span className="inline-block px-4 py-1.5 rounded-[4px] glass text-xs font-bold tracking-wider text-primary uppercase">
          Spring Collection 2026
        </span>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
          Elevate Your <br />
          <span className="gradient-text">Ethnic Elegance</span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
          Discover the perfect blend of traditional craftsmanship and contemporary luxury. Hand-stitched with love, designed for the modern soul.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Link href="/shop" className="button-premium text-base group !rounded-[4px] px-8">
            Shop Collection <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
          <Link href="/about" className="glass px-8 py-3 !rounded-[4px] font-bold text-base hover:bg-primary/10 transition-all active:scale-95 border border-border">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
