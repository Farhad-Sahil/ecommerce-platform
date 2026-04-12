import { Award, Users, Heart, Globe } from "lucide-react";

const values = [
  { icon: Award, title: "Authenticity", desc: "Every thread is sourced from heritage looms across the globe." },
  { icon: Users, title: "Artisan-Led", desc: "Supporting local craft communities through fair trade practices." },
  { icon: Heart, title: "Sustainable", desc: "Slow fashion approach with eco-friendly dyes and organic fabrics." },
  { icon: Globe, title: "Global Reach", desc: "Blending Eastern heritage with Western silhouettes for the world." },
];

export default function AboutValues() {
  return (
    <section className="w-full py-24 px-6 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {values.map((v, idx) => (
          <div key={idx} className="group space-y-6">
            <div className="w-16 h-16 bg-[#F9F7F4] border border-border/50 text-primary rounded-[4px] flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-sm">
              <v.icon size={28} />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground uppercase tracking-wider">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-light">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
