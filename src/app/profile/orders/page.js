import { Package, ExternalLink, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function MyOrders() {
  const orders = [
    { id: "#SS-2026-001", date: "Oct 12, 2026", status: "Delivered", total: "$850.00", items: 2 },
    { id: "#SS-2026-042", date: "Sep 28, 2026", status: "In Transit", total: "$120.00", items: 1 },
    { id: "#SS-2026-089", date: "Sep 15, 2026", status: "Processing", total: "$45.00", items: 1 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
         <h1 className="text-3xl font-bold">My Orders</h1>
         <Link href="/profile" className="md:hidden text-primary text-sm font-semibold">Back to Menu</Link>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="glass p-6 rounded-3xl border border-white/5 hover:border-primary/20 transition-all group">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Package size={24} />
                </div>
                <div>
                  <h3 className="font-bold">{order.id}</h3>
                  <p className="text-xs text-muted-foreground">{order.date} • {order.items} Items</p>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-12">
                <div className="text-right">
                   <p className="text-sm font-bold">{order.total}</p>
                   <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full ${
                     order.status === 'Delivered' ? 'bg-emerald-500/10 text-emerald-500' : 
                     order.status === 'In Transit' ? 'bg-amber-500/10 text-amber-500' : 'bg-primary/10 text-primary'
                   }`}>
                     {order.status}
                   </span>
                </div>
                <button className="p-2 glass rounded-lg hover:text-primary transition-colors">
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
