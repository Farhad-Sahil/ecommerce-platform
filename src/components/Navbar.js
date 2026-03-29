import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} glass`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          LUXE<span className="gradient-text">.</span>
        </Link>
        <div className={styles.links}>
          <Link href="/shop" className={styles.link}>Shop</Link>
          <Link href="/collections" className={styles.link}>Collections</Link>
          <Link href="/about" className={styles.link}>About</Link>
        </div>
        <div className={styles.actions}>
          <Link href="/cart" className="button-premium">Cart (0)</Link>
        </div>
      </div>
    </nav>
  );
}
