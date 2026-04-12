import { Truck, ShieldCheck, Clock, Star } from "lucide-react";

export const allProducts = [
  { id: 1, name: "Saffron Silk Saree", price: "$299.00", image: "/watch.png", category: "Pure Silk" },
  { id: 2, name: "Gold Embroidered Lehenga", price: "$850.00", image: "/watch.png", category: "Bridal" },
  { id: 3, name: "Velvet Shawl with Zari", price: "$120.00", image: "/watch.png", category: "Accessories" },
  { id: 4, name: "Designer Kurta Set", price: "$180.00", image: "/watch.png", category: "Casual Ethnic" },
  { id: 5, name: "Emerald Anarkali", price: "$320.00", image: "/watch.png", category: "Fusion" },
  { id: 6, name: "Silver Jewelry Set", price: "$450.00", image: "/watch.png", category: "Jewelry" },
  { id: 7, name: "Cotton Daily Kurti", price: "$45.00", image: "/watch.png", category: "Casual" },
  { id: 8, name: "Hand-Stitched Jutti", price: "$85.00", image: "/watch.png", category: "Footwear" },
];

export const collections = [
  {
    id: "silk",
    title: "The Silk Route",
    desc: "Pure mulberry silk with traditional hand-woven Zari borders.",
    image: "/watch.png",
    count: "24 Items",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: "bridal",
    title: "Bridal Couture",
    desc: "Masterpieces designed for your most unforgettable moments.",
    image: "/watch.png",
    count: "12 Items",
    color: "from-red-500/20 to-rose-500/20",
  },
  {
    id: "velvet",
    title: "Royal Velvet",
    desc: "Plush velvet ensembles with intricate metallic embroidery.",
    image: "/watch.png",
    count: "18 Items",
    color: "from-purple-500/20 to-indigo-500/20",
  },
  {
    id: "fusion",
    title: "Fusion Drape",
    desc: "Modern silhouettes meet traditional drapes for the contemporary soul.",
    image: "/watch.png",
    count: "15 Items",
    color: "from-emerald-500/20 to-teal-500/20",
  },
];

export const featuredProducts = allProducts.slice(0, 4);

export const trustBadges = [
  { icon: Truck, title: "Worldwide Shipping", desc: "Fast & secure delivery" },
  { icon: ShieldCheck, title: "Premium Quality", desc: "100% Authentic fabrics" },
  { icon: Clock, title: "24/7 Support", desc: "Dedicated assistance" },
  { icon: Star, title: "Exclusive Designs", desc: "Limited edition pieces" },
];
