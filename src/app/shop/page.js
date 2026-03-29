import styles from "./shop.module.css";
import Link from "next/link";
import Image from "next/image";

const products = [
  { id: 1, name: "The Apex Watch", category: "Accessories", price: "$2,400", image: "/watch.png" },
  { id: 2, name: "Minimal Leather Tote", category: "Bags", price: "$950", image: "/bag.png" },
  { id: 3, name: "Silk Drape Shirt", category: "Clothing", price: "$420", image: "/shirt.png" },
  { id: 4, name: "Heritage Frame Glasses", category: "Accessories", price: "$350", image: "/glasses.png" },
  { id: 5, name: "Obsidian Fountain Pen", category: "Stationery", price: "$1,200", image: "/pen.png" },
  { id: 6, name: "Azure Scent No. 1", category: "Fragrance", price: "$180", image: "/perfume.png" },
];

export default function Shop() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className="gradient-text">The Collection</h1>
        <p>A curated selection of modern luxury, designed for the discerning individual.</p>
      </header>
      
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={`${styles.productCard} glass hover-scale`}>
             <div className={styles.imageWrapper}>
               {/* Image placeholder for now */}
               <div className={styles.imgPlaceholder}></div>
             </div>
             <div className={styles.info}>
               <span className={styles.category}>{product.category}</span>
               <h3>{product.name}</h3>
               <div className={styles.footer}>
                 <span className={styles.price}>{product.price}</span>
                 <button className="button-premium">Add to Cart</button>
               </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
