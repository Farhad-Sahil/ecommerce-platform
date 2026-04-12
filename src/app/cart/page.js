import CartHeader from "@/components/cart/CartHeader";
import CartItems from "@/components/cart/CartItems";
import CartSummary from "@/components/cart/CartSummary";

export default function Cart() {
  const cartItems = [
    { id: 1, name: "Saffron Silk Saree", price: 299, quantity: 1, image: "/watch.png", category: "Pure Silk" },
    { id: 3, name: "Velvet Shawl with Zari", price: 120, quantity: 2, image: "/watch.png", category: "Accessories" },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 15;
  const total = subtotal + shipping;

  return (
    <div className="flex flex-col min-h-screen bg-background pb-20">
      <CartHeader itemCount={cartItems.length} />
      <div className="max-w-7xl mx-auto px-6 lg:px-20 w-full grid grid-cols-1 lg:grid-cols-3 gap-16 py-20">
        <div className="lg:col-span-2">
          <CartItems items={cartItems} />
        </div>
        <div>
          <CartSummary subtotal={subtotal} shipping={shipping} total={total} />
        </div>
      </div>
    </div>
  );
}
