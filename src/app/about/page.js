import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>Our Legacy</span>
        <h1 className="gradient-text">Beyond Fashion</h1>
        <p>Founded on the principles of timeless elegance and functional luxury, LuxeCommerce is more than just a brand—it's a lifestyle curation.</p>
      </header>

      <div className={styles.storySection}>
        <div className={styles.textContent}>
          <h3>The Philosophy</h3>
          <p>
            We believe that every piece should tell a story. Not just any story, but yours. Our team travels the globe to find artisans who share our commitment to quality, sustainability, and unparalleled craftsmanship.
          </p>
          <div className={`${styles.card} glass`}>
             <p>"Quality is not an act, it is a habit." – Aristoteleen luxury</p>
          </div>
        </div>
        <div className={`${styles.imagePlaceholder} glass hover-scale`}>
           {/* Visual Storytelling Element */}
        </div>
      </div>

      <div className={styles.values}>
        <div className={styles.valueItem}>
          <span className={styles.number}>01</span>
          <h4>Unrivaled Quality</h4>
          <p>We only source the finest materials from heritage mills and tanneries across Europe and Japan.</p>
        </div>
        <div className={styles.valueItem}>
          <span className={styles.number}>02</span>
          <h4>Artisan Crafted</h4>
          <p>Every product is handmade by master craftsmen who have spent decades perfecting their trade.</p>
        </div>
        <div className={styles.valueItem}>
          <span className={styles.number}>03</span>
          <h4>Conscious Luxury</h4>
          <p>Our commitment to sustainability is woven into every thread, prioritizing mindful consumption.</p>
        </div>
      </div>
    </div>
  );
}
