import Image from "next/image";
import Link from "next/link";

export default function CollectionCTA() {
  return (
    <section className="w-full relative overflow-hidden h-[500px] flex items-center px-6 lg:px-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-fashion.png"
          alt="Collection"
          fill
          className="object-cover"
        />
        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10"></div>
      </div>
      
      <div className="relative z-20 max-w-xl space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
          The Silk Route <br /> 
          <span className="gradient-text">Masterpieces</span>
        </h2>
        <p className="text-white/80 text-lg leading-relaxed">
          Unveiling our most intricate hand-woven sarees, combining centuries of tradition with modern aesthetics. Experience pure luxury.
        </p>
        <Link href="/collections" className="button-premium !rounded-[4px] text-lg">
          Explore Collection 
        </Link>
      </div>
    </section>
  );
}
