export default function ShippingForm() {
  return (
    <div className="bg-[#F9F7F4] p-10 rounded-[4px] border border-border/50 space-y-10">
      <div className="flex items-center gap-6">
        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg">1</div>
        <h2 className="text-2xl font-serif text-foreground">Shipping Details</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">First Name</label>
          <input type="text" placeholder="e.g. Elena" className="w-full bg-white border border-border/80 rounded-[4px] px-6 py-3.5 text-sm focus:outline-none focus:border-primary/50" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Last Name</label>
          <input type="text" placeholder="e.g. Rossi" className="w-full bg-white border border-border/80 rounded-[4px] px-6 py-3.5 text-sm focus:outline-none focus:border-primary/50" />
        </div>
        <div className="sm:col-span-2 space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Street Address</label>
          <input type="text" placeholder="123 Luxury Avenue" className="w-full bg-white border border-border/80 rounded-[4px] px-6 py-3.5 text-sm focus:outline-none focus:border-primary/50" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">City</label>
          <input type="text" placeholder="New York" className="w-full bg-white border border-border/80 rounded-[4px] px-6 py-3.5 text-sm focus:outline-none focus:border-primary/50" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">State</label>
            <input type="text" placeholder="NY" className="w-full bg-white border border-border/80 rounded-[4px] px-6 py-3.5 text-sm focus:outline-none focus:border-primary/50" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">ZIP</label>
            <input type="text" placeholder="10001" className="w-full bg-white border border-border/80 rounded-[4px] px-6 py-3.5 text-sm focus:outline-none focus:border-primary/50" />
          </div>
        </div>
      </div>
    </div>
  );
}
