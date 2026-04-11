import Image from "next/image";
import { Award, Users, Heart, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-12 text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Crafting <span className="gradient-text italic">Modern Legacies</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Founded in 2026, SaffronStitch was born from a desire to bridge the gap between traditional ethnic craftsmanship and contemporary luxury design.
        </p>
        <div className="relative aspect-[21/9] w-full rounded-[3rem] overflow-hidden glass">
          <Image src="/hero-fashion.png" alt="Our Atelier" fill className="object-cover" />
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {[
          { icon: Award, title: "Authenticity", desc: "Every thread is sourced from heritage looms across the globe." },
          { icon: Users, title: "Artisan-Led", desc: "Supporting local craft communities through fair trade practices." },
          { icon: Heart, title: "Sustainable", desc: "Slow fashion approach with eco-friendly dyes and organic fabrics." },
          { icon: Globe, title: "Global Reach", desc: "Blending Eastern heritage with Western silhouettes for the world." },
        ].map((value, idx) => (
          <div key={idx} className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
              <value.icon size={32} />
            </div>
            <h3 className="text-xl font-bold">{value.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
          </div>
        ))}
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8 order-2 lg:order-1">
          <h2 className="text-4xl font-bold">The SaffronStitch Journey</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Our journey started in a small workshop with a single loom and a vision. We believed that ethnic wear shouldn't just be for special occasions, but a statement of identity and luxury.
            </p>
            <p>
              Today, SaffronStitch stands as a beacon of modern ethnic luxury, empowering artisans and delighting customers who seek more than just clothing — they seek a story.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <p className="text-3xl font-bold gradient-text">50+</p>
              <p className="text-sm text-muted-foreground">Master Artisans</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text">10k+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="relative aspect-square rounded-[3rem] overflow-hidden glass order-1 lg:order-2">
          <Image src="/watch.png" alt="Our Story" fill className="object-cover" />
        </div>
      </section>
    </div>
  );
}
