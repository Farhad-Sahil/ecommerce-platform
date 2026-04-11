import { MapPin, Plus, Edit2, Trash2 } from "lucide-react";

export default function MyAddresses() {
  const addresses = [
    {
      id: 1,
      type: "Home",
      name: "Sahil Khan",
      address: "123 Luxury Avenue, Fashion District, New York, NY 10001",
      isDefault: true,
    },
    {
      id: 2,
      type: "Office",
      name: "Sahil Khan",
      address: "456 Corporate Plaza, Suite 200, Brooklyn, NY 11201",
      isDefault: false,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Addresses</h1>
        <button className="button-premium py-2 px-4 text-xs">
          <Plus size={16} className="mr-2" /> Add New
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((address) => (
          <div key={address.id} className={`glass p-8 rounded-[2rem] border transition-all ${address.isDefault ? 'border-primary/40 ring-1 ring-primary/20' : 'border-white/5'}`}>
             <div className="flex justify-between items-start mb-6">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                   <MapPin size={20} />
                 </div>
                 <div>
                   <h3 className="font-bold">{address.type}</h3>
                   {address.isDefault && <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-bold">Default</span>}
                 </div>
               </div>
               <div className="flex gap-2">
                 <button className="p-2 hover:text-primary transition-colors"><Edit2 size={16} /></button>
                 {!address.isDefault && <button className="p-2 hover:text-destructive transition-colors"><Trash2 size={16} /></button>}
               </div>
             </div>
             <p className="font-semibold text-sm mb-1">{address.name}</p>
             <p className="text-xs text-muted-foreground leading-relaxed">{address.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
