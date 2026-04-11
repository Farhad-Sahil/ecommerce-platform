import Image from "next/image";
import Link from "next/link";
import { Filter, ChevronDown, ShoppingBag } from "lucide-react";

export default function Shop() {
  const products = [
    { id: 1, name: "Saffron Silk Saree", price: "$299", category: "Sarees" },
    { id: 2, name: "Velvet Shawl", price: "$120", category: "Accessories" },
    { id: 3, name: "Gold Lehenga", price: "$850", category: "Bridal" },
    { id: 4, name: "Designer Kurta", price: "$180", category: "Men's Wear" },
    { id: 5, name: "Silk Tunic", price: "$95", category: "Fusion" },
    { id: 6, name: "Silver Jewelry Set", price: "$450", category: "Jewelry" },
    { id: 7, name: "Cotton Kurti", price: "$45", category: "Casual" },
    { id: 8, name: "Embroidered Dupatta", price: "$65", category: "Accessories" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Our Collection</h1>
          <p className="text-muted-foreground">Discover {products.length} exclusive pieces handpicked for you.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 glass px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors">
            <Filter size={16} /> Filter
          </button>
          <button className="flex items-center gap-2 glass px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors">
            Sort by: Featured <ChevronDown size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link key={product.id} href={`/shop/${product.id}`} className="group cursor-pointer">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass hover-scale mb-4">
              <Image
                src="/watch.png"
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <button className="absolute top-4 right-4 p-2 glass rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ShoppingBag size={18} className="text-primary" />
              </button>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-primary font-bold uppercase tracking-widest leading-none">
                {product.category}
              </span>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm font-medium text-muted-foreground">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center pt-12">
        <button className="glass px-12 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
          Load More Designs
        </button>
      </div>
    </div>
  );
}
