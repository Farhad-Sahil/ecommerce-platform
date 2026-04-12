import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Heart, Share2, Star, ChevronRight, Truck, ShieldCheck, Undo2 } from "lucide-react";

export default function ProductDetail({ params }) {
  const product = {
    id: params.id,
    name: "Luxury Saffron Silk Saree",
    price: "$299.00",
    description: "Experience the ultimate elegance with our hand-woven Saffron Silk Saree. This masterpiece features intricate Zari work and premium mulberry silk, making it a timeless addition to your luxury wardrobe.",
    details: [
      "100% Pure Mulberry Silk",
      "Hand-woven by master artisans",
      "Include unstitched blouse piece",
      "Length: 6.5 meters",
      "Weight: 850g approx"
    ],
    images: ["/watch.png", "/watch.png", "/watch.png"],
    rating: 4.8,
    reviews: 124,
    colors: ["#F59E0B", "#DC2626", "#4B5563"],
    sizes: ["Standard"]
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pb-32">
      {/* Breadcrumb Header */}
      <div className="w-full border-b border-border bg-muted/10 py-8 px-6 lg:px-20">
        <nav className="max-w-7xl mx-auto flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link href="/shop" className="hover:text-primary transition-colors">Boutique</Link>
          <ChevronRight size={10} />
          <span className="text-foreground tracking-widest">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Visual Gallery */}
        <div className="space-y-8">
          <div className="relative aspect-[4/5] rounded-[4px] overflow-hidden border border-border bg-muted/20 group">
             <Image 
              src={product.images[0]} 
              alt={product.name} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
             />
             <div className="absolute top-6 right-6 flex flex-col gap-4">
                <button className="p-4 bg-white/80 backdrop-blur-md rounded-full text-foreground hover:text-primary transition-all shadow-lg">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
                <button className="p-4 bg-white/80 backdrop-blur-md rounded-full text-foreground hover:text-primary transition-all shadow-lg">
                  <Share2 size={20} strokeWidth={1.5} />
                </button>
             </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
             {product.images.map((img, i) => (
                <div key={i} className="relative aspect-square rounded-[4px] overflow-hidden border border-border cursor-pointer group">
                  <Image 
                    src={img} 
                    alt={`view-${i}`} 
                    fill 
                    className="object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                  />
                </div>
             ))}
          </div>
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-amber-500">
               <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={12} fill={s <= 4 ? "currentColor" : "none"} />)}
               </div>
               <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">({product.reviews} reviews)</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-foreground leading-[1.1] tracking-tight">{product.name}</h1>
            <p className="text-4xl font-serif text-primary">{product.price}</p>
          </div>

          <div className="bg-[#F9F7F4] p-10 rounded-[4px] border border-border/50">
            <p className="text-muted-foreground leading-relaxed text-lg font-light italic">
              "{product.description}"
            </p>
          </div>

          <div className="space-y-10">
            {/* Color Selection */}
            <div className="space-y-4">
               <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Selected Palette</label>
               <div className="flex gap-4">
                  {product.colors.map((c, i) => (
                    <button key={i} className={`w-10 h-10 rounded-full border border-border p-1 transition-all flex items-center justify-center ${i === 0 ? 'ring-2 ring-primary ring-offset-2' : ''}`}>
                       <div className="w-full h-full rounded-full" style={{backgroundColor: c}}></div>
                    </button>
                  ))}
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
               <button className="button-premium !py-5 flex-1 uppercase tracking-[0.2em] text-xs font-bold group shadow-xl">
                  <ShoppingBag size={18} className="mr-3 group-hover:translate-y-[-2px] transition-transform" />
                  Add to Collection
               </button>
               <button className="flex-1 py-5 border border-border rounded-[4px] text-xs font-bold uppercase tracking-[0.2em] hover:bg-muted/10 transition-all">
                  Direct Checkout
               </button>
            </div>
          </div>

          {/* Secure Trust Factors */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-border">
             <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
               <Truck className="text-primary" size={16} />
               <span>Express Ship</span>
             </div>
             <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
               <ShieldCheck className="text-primary" size={16} />
               <span>Authentic</span>
             </div>
             <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
               <Undo2 className="text-primary" size={16} />
               <span>30-Day Return</span>
             </div>
          </div>
        </div>
      </div>

      {/* Narrative Section */}
      <section className="w-full py-24 bg-muted/5 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
             <div className="space-y-4">
               <span className="text-primary font-bold text-xs uppercase tracking-[0.4em]">Heritage</span>
               <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">Artisanal <br/>Craftsmanship</h2>
             </div>
             <ul className="space-y-6">
                {product.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                     <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></div>
                     <span className="text-muted-foreground text-base leading-relaxed font-light">{detail}</span>
                  </li>
                ))}
             </ul>
          </div>
          <div className="relative aspect-video rounded-[4px] overflow-hidden shadow-2xl group">
             <Image 
              src="/hero-fashion.png" 
              alt="Artisan Process" 
              fill 
              className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000" 
             />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                <button className="button-premium !px-10 !py-5 uppercase tracking-[0.2em] text-xs font-bold">Watch the Craft</button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
