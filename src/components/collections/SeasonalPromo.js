import Image from "next/image";

export default function SeasonalPromo() {
  return (
    <section className="w-full relative overflow-hidden h-[500px] flex items-center px-6 lg:px-20 mt-10">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-fashion.png" 
          alt="Seasonal Promotion" 
          fill 
          className="object-cover" 
        />
        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10"></div>
      </div>
      
      <div className="relative z-20 max-w-xl space-y-8 animate-fade-in">
        <div className="space-y-4">
          <span className="text-accent font-bold text-xs uppercase tracking-[0.4em]">Limited Release</span>
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Summer <br /> <span className="gradient-text">Solstice</span> Edition
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Experience the breathability of premium cotton weaves and the shimmer of daylight-inspired hues. 
            Designed for the ultimate summer luxury.
          </p>
        </div>
        <button className="button-premium !px-12 !py-4 text-xs uppercase tracking-widest font-bold">
          Request Early Access
        </button>
      </div>
    </section>
  );
}
