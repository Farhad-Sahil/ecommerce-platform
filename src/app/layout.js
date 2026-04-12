import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "SaffronStitch | Premium Ethnic Wear & Modern Luxury",
  description: "Discover a curated collection of premium ethnic wear and modern luxury pieces at SaffronStitch. Timeless craftsmanship meet modern elegance.",
  keywords: "saffronstitch, ethnic wear, luxury fashion, premium clothing, nextjs, ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} bg-background text-foreground antialiased`} suppressHydrationWarning>
        <Navbar />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
