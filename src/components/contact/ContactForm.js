import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="bg-card p-10 md:p-14 rounded-[4px] border border-border shadow-sm space-y-10">
      <div className="space-y-3">
        <h2 className="text-3xl font-serif text-foreground">Send a Message</h2>
        <p className="text-muted-foreground font-light">We typically respond within 24 business hours.</p>
      </div>

      <form className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">First Name</label>
            <input
              type="text"
              placeholder="e.g. Elena"
              className="w-full bg-muted/20 border border-border rounded-[4px] px-6 py-4 text-sm focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground/30"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Last Name</label>
            <input
              type="text"
              placeholder="e.g. Rossi"
              className="w-full bg-muted/20 border border-border rounded-[4px] px-6 py-4 text-sm focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground/30"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
          <input
            type="email"
            placeholder="elena@example.com"
            className="w-full bg-muted/20 border border-border rounded-[4px] px-6 py-4 text-sm focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground/30"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Your Message</label>
          <textarea
            placeholder="Tell us how we can help..."
            rows={5}
            className="w-full bg-muted/20 border border-border rounded-[4px] px-6 py-4 text-sm focus:outline-none focus:border-primary/50 transition-all resize-none placeholder:text-muted-foreground/30"
          ></textarea>
        </div>

        <button type="submit" className="button-premium w-full !py-5 uppercase tracking-[0.2em] text-xs font-bold group">
          Send Message <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
        </button>
      </form>
    </div>
  );
}
