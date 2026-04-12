import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="w-full py-24 px-6 lg:px-20 bg-muted/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10 order-2 lg:order-1">
          <div className="space-y-4">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.4em]">Our Journey</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">The SaffronStitch <br/>Story</h2>
          </div>
          
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
            <p>
              Our journey started in a small workshop with a single loom and a vision. We believed that ethnic wear 
              shouldn't just be for special occasions, but a statement of identity and luxury.
            </p>
            <p>
              Today, SaffronStitch stands as a beacon of modern ethnic luxury, empowering artisans and delighting 
              customers who seek more than just clothing — they seek a story.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-6 border-t border-border">
            <div>
              <p className="text-4xl font-serif text-primary">50+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-2">Master Artisans</p>
            </div>
            <div>
              <p className="text-4xl font-serif text-primary">10k+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-2">Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/5] rounded-[4px] overflow-hidden shadow-2xl order-1 lg:order-2">
           <Image 
            src="/watch.png" 
            alt="Hand-woven excellence" 
            fill 
            className="object-cover" 
           />
           <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>
    </section>
  );
}
