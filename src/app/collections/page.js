import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Collections() {
  const collections = [
    {
      id: "silk",
      title: "The Silk Route",
      desc: "Pure mulberry silk with traditional hand-woven Zari borders.",
      image: "/watch.png",
      count: "24 Items",
      color: "from-amber-500/20 to-orange-500/20",
    },
    {
      id: "bridal",
      title: "Bridal Couture",
      desc: "Masterpieces designed for your most unforgettable moments.",
      image: "/watch.png",
      count: "12 Items",
      color: "from-red-500/20 to-rose-500/20",
    },
    {
      id: "velvet",
      title: "Royal Velvet",
      desc: "Plush velvet ensembles with intricate metallic embroidery.",
      image: "/watch.png",
      count: "18 Items",
      color: "from-purple-500/20 to-indigo-500/20",
    },
    {
      id: "fusion",
      title: "Fusion Drape",
      desc: "Modern silhouettes meet traditional drapes for the contemporary soul.",
      image: "/watch.png",
      count: "15 Items",
      color: "from-emerald-500/20 to-teal-500/20",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Curated <span className="gradient-text italic">Collections</span></h1>
          <p className="text-lg text-muted-foreground leading-relaxed">Each collection tells a unique story of heritage, craftsmanship, and modern elegance. Explore the art of fine dressing.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {collections.map((col) => (
          <Link key={col.id} href={`/shop?collection=${col.id}`} className="group relative overflow-hidden rounded-[3rem] glass border border-white/5 h-[500px]">
             {/* Background Gradient */}
             <div className={`absolute inset-0 bg-gradient-to-br ${col.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
             
             {/* Image */}
             <div className="absolute inset-x-0 bottom-0 top-1/4 translate-y-20 group-hover:translate-y-10 transition-transform duration-700">
               <Image 
                src={col.image} 
                alt={col.title} 
                fill 
                className="object-contain object-bottom drop-shadow-2xl"
               />
             </div>

             {/* Content */}
             <div className="relative z-10 p-12 space-y-4">
               <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{col.count}</span>
               <h2 className="text-4xl font-bold group-hover:text-primary transition-colors">{col.title}</h2>
               <p className="max-w-xs text-muted-foreground line-clamp-2">{col.desc}</p>
               <div className="pt-4 flex items-center gap-2 font-bold text-sm group-hover:gap-4 transition-all">
                  Shop Collection <ArrowRight size={18} />
               </div>
             </div>

             {/* Glass Overlay on Hover */}
             <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors pointer-events-none"></div>
          </Link>
        ))}
      </div>

      {/* Seasonal Promo */}
      <section className="relative h-[400px] rounded-[3rem] overflow-hidden flex items-center px-12">
        <Image src="/hero-fashion.png" alt="Seasonal" fill className="object-cover brightness-[0.3]" />
        <div className="relative z-10 max-w-xl space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Limited Edition <br /> <span className="gradient-text italic">Summer Solstice</span></h2>
          <p className="text-white/70">Light fabrics, ethereal colors, and breezy silhouettes designed for the ultimate summer luxury. Only available for a limited time.</p>
          <button className="button-premium">Request Early Access</button>
        </div>
      </section>
    </div>
  );
}
