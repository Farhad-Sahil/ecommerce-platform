import CollectionHero from "@/components/collections/CollectionHero";
import CollectionGrid from "@/components/collections/CollectionGrid";
import SeasonalPromo from "@/components/collections/SeasonalPromo";
import { collections } from "@/lib/data";

export default function Collections() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <CollectionHero />
      <CollectionGrid collections={collections} />
      <SeasonalPromo />
    </div>
  );
}
