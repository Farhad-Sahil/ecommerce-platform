import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <Link href="/" className={styles.logo}>
            LUXE<span className="gradient-text">.</span>
          </Link>
          <p>Redefining luxury through curated pieces and modern elegance.</p>
        </div>
        <div className={styles.nav}>
          <div className={styles.column}>
            <h4>Shop</h4>
            <Link href="/new">All Collections</Link>
            <Link href="/featured">Best Sellers</Link>
            <Link href="/deals">Exclusives</Link>
          </div>
          <div className={styles.column}>
            <h4>Help</h4>
            <Link href="/faq">FAQ</Link>
            <Link href="/shipping">Shipping</Link>
            <Link href="/returns">Returns</Link>
          </div>
          <div className={styles.column}>
            <h4>Social</h4>
            <Link href="/instagram">Instagram</Link>
            <Link href="/twitter">Twitter</Link>
            <Link href="/luxury">LinkedIn</Link>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} LuxeCommerce Inc. All Rights Reserved.
      </div>
    </footer>
  );
}
