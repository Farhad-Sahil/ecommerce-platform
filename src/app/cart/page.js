import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";

export default function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Saffron Silk Saree",
      price: 299,
      quantity: 1,
      image: "/watch.png",
      category: "Pure Silk",
    },
    {
      id: 3,
      name: "Velvet Shawl with Zari",
      price: 120,
      quantity: 2,
      image: "/watch.png",
      category: "Accessories",
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 15;
  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-4">
          Shopping Cart <span className="text-lg font-normal text-muted-foreground">({cartItems.length} items)</span>
        </h1>
        <Link href="/shop" className="text-sm font-semibold flex items-center gap-2 hover:text-primary transition-colors">
          <ArrowLeft size={16} /> Continue Shopping
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-8">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-6 p-6 glass rounded-3xl border border-white/5 group">
                <div className="relative w-32 h-40 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between py-2">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-primary font-bold">{item.category}</p>
                      <h3 className="text-xl font-bold">{item.name}</h3>
                    </div>
                    <button className="text-muted-foreground hover:text-destructive transition-colors">
                      <Trash2 size={20} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 glass px-3 py-1.5 rounded-xl border border-white/10">
                      <button className="hover:text-primary transition-colors"><Minus size={16} /></button>
                      <span className="font-semibold text-sm w-4 text-center">{item.quantity}</span>
                      <button className="hover:text-primary transition-colors"><Plus size={16} /></button>
                    </div>
                    <p className="text-xl font-bold">${item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 glass rounded-3xl space-y-4">
              <div className="inline-flex p-6 rounded-full bg-primary/10 text-primary mb-4">
                <ShoppingBag size={48} />
              </div>
              <h2 className="text-2xl font-bold">Your cart is empty</h2>
              <p className="text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
              <Link href="/shop" className="button-premium">Start Shopping</Link>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="space-y-6">
          <div className="glass p-8 rounded-3xl border border-white/10 space-y-6 sticky top-28">
            <h2 className="text-2xl font-bold">Order Summary</h2>
            
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Estimated Shipping</span>
                <span className="font-semibold">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span className="font-semibold">$0.00</span>
              </div>
              <div className="h-px bg-white/10 my-4"></div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="gradient-text">${total.toFixed(2)}</span>
              </div>
            </div>

            <Link href="/checkout" className="button-premium w-full py-4 text-lg text-center">
              Proceed to Checkout
            </Link>
            <p className="text-[10px] text-center text-muted-foreground">
              Secure checkout guaranteed with encrypted payments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
