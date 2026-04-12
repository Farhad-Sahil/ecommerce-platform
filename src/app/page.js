import Hero from "@/components/home/Hero";
import TrustBadges from "@/components/home/TrustBadges";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CollectionCTA from "@/components/home/CollectionCTA";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <TrustBadges />
      <FeaturedProducts />
      <CollectionCTA />
      <Newsletter />
    </div>
  );
}
