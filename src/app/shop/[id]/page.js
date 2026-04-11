import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Heart, Share2, Star, ChevronRight, Truck, ShieldCheck, Undo2 } from "lucide-react";

export default function ProductDetail({ params }) {
  // Mock data for a single product
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
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      <nav className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
        <ChevronRight size={12} />
        <span className="text-foreground font-bold">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Product Images */}
        <div className="space-y-6">
          <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden glass border border-white/10 group">
             <Image src={product.images[0]} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute top-6 right-6 flex flex-col gap-3">
                <button className="p-3 glass rounded-full hover:text-primary transition-all hover-scale">
                  <Heart size={20} />
                </button>
                <button className="p-3 glass rounded-full hover:text-primary transition-all hover-scale">
                  <Share2 size={20} />
                </button>
             </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
             {product.images.map((img, i) => (
                <div key={i} className="relative aspect-square rounded-3xl overflow-hidden glass border border-white/5 cursor-pointer hover:border-primary/50 transition-all">
                  <Image src={img} alt={`view-${i}`} fill className="object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
             ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-amber-500">
               <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill={s <= 4 ? "currentColor" : "none"} />)}
               </div>
               <span className="text-xs font-bold text-muted-foreground">({product.reviews} reviews)</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">{product.name}</h1>
            <p className="text-3xl font-bold gradient-text">{product.price}</p>
          </div>

          <p className="text-muted-foreground leading-relaxed text-lg italic">
            "{product.description}"
          </p>

          <div className="space-y-6">
            <div className="space-y-3">
               <label className="text-xs font-bold uppercase tracking-widest">Select Color</label>
               <div className="flex gap-3">
                  {product.colors.map((c, i) => (
                    <button key={i} className={`w-10 h-10 rounded-full border-2 p-1 transition-all ${i === 0 ? 'border-primary' : 'border-transparent'}`}>
                       <div className="w-full h-full rounded-full shadow-inner" style={{backgroundColor: c}}></div>
                    </button>
                  ))}
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <button className="button-premium flex-1 py-4 text-lg group">
                  <ShoppingBag className="mr-3 group-hover:rotate-12 transition-transform" size={20} />
                  Add to Cart
               </button>
               <button className="glass flex-1 py-4 font-bold rounded-2xl hover:bg-white/5 transition-all">
                  Buy Now
               </button>
            </div>
          </div>

          {/* Trust Factors */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
             <div className="flex items-center gap-3 text-xs font-medium">
               <Truck className="text-primary" size={18} />
               <span>Free Express Shipping</span>
             </div>
             <div className="flex items-center gap-3 text-xs font-medium">
               <ShieldCheck className="text-primary" size={18} />
               <span>Authenticity Guaranteed</span>
             </div>
             <div className="flex items-center gap-3 text-xs font-medium">
               <Undo2 className="text-primary" size={18} />
               <span>30-Day Luxury Return</span>
             </div>
          </div>
        </div>
      </div>

      {/* Deep Details */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-20 py-20 border-t border-white/10">
        <div className="space-y-8">
           <h2 className="text-3xl font-bold">Artisanal Craftsmanship</h2>
           <ul className="space-y-4">
              {product.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3">
                   <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                   <span className="text-muted-foreground leading-relaxed italic">{detail}</span>
                </li>
              ))}
           </ul>
        </div>
        <div className="relative aspect-video rounded-[3rem] overflow-hidden glass border border-white/5">
           <Image src="/hero-fashion.png" alt="Process" fill className="object-cover brightness-50" />
           <div className="absolute inset-0 flex items-center justify-center">
              <Link href="#" className="button-premium px-8">Watch the Craft</Link>
           </div>
        </div>
      </section>
    </div>
  );
}
