"use client";

import Link from "next/link";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import SearchModal from "./SearchModal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "glass py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center">
          SAFFRON<span className="gradient-text">STITCH</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/shop" className="text-sm font-medium hover:text-primary transition-colors">
            Shop
          </Link>
          <Link href="/collections" className="text-sm font-medium hover:text-primary transition-colors">
            Collections
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <button 
            className="hidden sm:flex hover:text-primary transition-colors"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search size={20} />
          </button>
          <Link href="/profile" className="hover:text-primary transition-colors">
            <User size={20} />
          </Link>
          <Link href="/cart" className="relative group hover:text-primary transition-colors">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-primary text-[10px] text-primary-foreground font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
          <button
            className="md:hidden hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 glass h-screen transition-all duration-300 transform",
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
      >
        <div className="flex flex-col p-8 gap-6 text-xl">
          <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link href="/collections" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
      </div>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
  );
}
