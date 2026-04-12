import ShopHero from "@/components/shop/ShopHero";
import ShopProducts from "@/components/shop/ShopProducts";
import { allProducts } from "@/lib/data";

export default function Shop() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <ShopHero totalProducts={allProducts.length} />
      <ShopProducts products={allProducts} />
    </div>
  );
}
