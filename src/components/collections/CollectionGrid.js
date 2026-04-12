import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CollectionGrid({ collections }) {
  return (
    <section className="w-full py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {collections.map((col) => (
          <Link 
            key={col.id} 
            href={`/shop?collection=${col.id}`} 
            className="group relative flex flex-col w-full min-h-[600px] overflow-hidden rounded-[4px] border border-border/50 bg-[#F9F7F4] shadow-sm hover:shadow-xl transition-all duration-700"
          >
             {/* Top Image Area */}
             <div className="relative h-[350px] w-full overflow-hidden">
               <Image 
                src={col.image} 
                alt={col.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
               />
               <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700"></div>
             </div>

             {/* Bottom Content Area */}
             <div className="flex-1 p-8 md:p-12 flex flex-col justify-between space-y-6">
               <div className="space-y-4">
                 <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/60">
                   {col.count}
                 </span>
                 <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] leading-tight tracking-tight">
                   {col.title}
                 </h2>
                 <p className="max-w-sm text-[#4A4A4A] text-base font-light leading-relaxed line-clamp-2">
                   {col.desc}
                 </p>
               </div>
               
               <div>
                 <div className="inline-flex items-center gap-4 px-8 py-3.5 bg-[#EBE5DE] rounded-[4px] text-xs font-bold uppercase tracking-widest text-[#1A1A1A] hover:bg-[#E2D8CF] transition-colors group/btn">
                    Explore Collection 
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                 </div>
               </div>
             </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
