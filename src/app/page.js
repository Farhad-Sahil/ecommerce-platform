import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>New Collection 2026</span>
          <h1 className="gradient-text">Redefining Elegance</h1>
          <p>
            Discover our curated collection of luxury pieces, where timeless design meets modern sophistication.
          </p>
          <div className={styles.cta}>
            <button className="button-premium">Shop Now</button>
            <button className={styles.secondaryButton}>View Lookbook</button>
          </div>
        </div>
        <div className={`${styles.heroImage} glass`}>
           <div className={styles.placeholderImage}>
              {/* Image will be here */}
           </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className={styles.categories}>
        <div className="glass hover-scaleCategory">
          <div className={`${styles.categoryCard} glass hover-scale`}>
            <h3>Modern Minimal</h3>
            <p>Clean lines, pure style.</p>
          </div>
        </div>
        <div className={`${styles.categoryCard} glass hover-scale`}>
          <h3>Urban Luxe</h3>
          <p>Street meet sophistication.</p>
        </div>
        <div className={`${styles.categoryCard} glass hover-scale`}>
          <h3>Core Essentials</h3>
          <p>The foundation of your wardrobe.</p>
        </div>
      </section>
    </div>
  );
}
