import Link from "next/link";
import { Share2, Share, Camera, Play, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              SAFFRON<span className="gradient-text">STITCH</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Elevating your wardrobe with timeless craftsmanship and modern ethnic aesthetics. Experience the art of luxury dressing.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary transition-colors hover-scale">
                <Camera size={20} />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors hover-scale">
                <Share size={20} />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors hover-scale">
                <Share2 size={20} />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors hover-scale">
                <Play size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/shop" className="hover:text-primary transition-colors">All Products</Link></li>
              <li><Link href="/collections" className="hover:text-primary transition-colors">New Arrivals</Link></li>
              <li><Link href="/featured" className="hover:text-primary transition-colors">Best Sellers</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-6">Customer Service</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/contact" className="hover:text-primary transition-colors">Support Center</Link></li>
              <li><Link href="/shipping" className="hover:text-primary transition-colors">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:text-primary transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-6">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Join our list for exclusive offers and seasonal updates.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 p-1.5 bg-primary rounded-md text-primary-foreground hover:bg-accent transition-colors"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} SaffronStitch. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
