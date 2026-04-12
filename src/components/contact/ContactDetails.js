import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactDetails() {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-[#F9F7F4] p-10 rounded-[4px] border border-border/50 space-y-6">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-[4px] flex items-center justify-center">
            <Mail size={24} />
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-lg uppercase tracking-wider">Email Us</h3>
            <p className="text-sm font-light text-muted-foreground">care@saffronstitch.com</p>
            <p className="text-sm font-light text-muted-foreground">press@saffronstitch.com</p>
          </div>
        </div>
        <div className="bg-[#F9F7F4] p-10 rounded-[4px] border border-border/50 space-y-6">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-[4px] flex items-center justify-center">
            <Phone size={24} />
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-lg uppercase tracking-wider">Call Us</h3>
            <p className="text-sm font-light text-muted-foreground">+1 (555) 123-4567</p>
            <p className="text-sm font-light text-muted-foreground">Mon-Fri, 9am - 6pm EST</p>
          </div>
        </div>
      </div>

      <div className="bg-[#F9F7F4] p-10 rounded-[4px] border border-border/50 space-y-8">
        <div className="flex items-start gap-6">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-[4px] flex items-center justify-center shrink-0">
            <MapPin size={24} />
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-lg uppercase tracking-wider">Flagship Boutique</h3>
            <p className="text-muted-foreground text-base leading-relaxed font-light">
              123 Luxury Avenue, Fashion District<br />
              New York, NY 10001, United States
            </p>
          </div>
        </div>
        {/* Map Placeholder */}
        <div className="aspect-video w-full bg-muted/20 border border-border/30 rounded-[4px] relative overflow-hidden group">
           <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xs font-bold uppercase tracking-widest opacity-50">
              Interactive Map Coming Soon
           </div>
        </div>
      </div>
    </div>
  );
}
