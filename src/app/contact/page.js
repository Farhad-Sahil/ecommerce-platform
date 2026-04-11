import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Get in <span className="gradient-text">Touch</span></h1>
        <p className="text-lg text-muted-foreground">Have a question about our collections or an existing order? Our team is here to assist you with premium care.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-3xl border border-white/5 space-y-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                <Mail size={24} />
              </div>
              <h3 className="font-bold text-lg">Email Us</h3>
              <p className="text-sm text-muted-foreground">support@saffronstitch.com</p>
              <p className="text-sm text-muted-foreground">press@saffronstitch.com</p>
            </div>
            <div className="glass p-8 rounded-3xl border border-white/5 space-y-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                <Phone size={24} />
              </div>
              <h3 className="font-bold text-lg">Call Us</h3>
              <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              <p className="text-sm text-muted-foreground">Mon-Fri, 9am - 6pm EST</p>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl border border-white/5 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Flagship Boutique</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  123 Luxury Avenue, Fashion District<br />
                  New York, NY 10001, United States
                </p>
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="aspect-video w-full bg-muted rounded-2xl relative overflow-hidden group">
               <div className="absolute inset-0 flex items-center justify-center text-muted-foreground grayscale group-hover:grayscale-0 transition-all">
                  Interactive Map Coming Soon
               </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass p-8 md:p-12 rounded-[3rem] border border-white/10 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Send a Message</h2>
            <p className="text-muted-foreground">We typically respond within 24 business hours.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium px-1">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium px-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium px-1">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium px-1">Subject</label>
              <select className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                <option>General Inquiry</option>
                <option>Order Support</option>
                <option>Wholesale</option>
                <option>Returns</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium px-1">Your Message</label>
              <textarea
                placeholder="How can we help you?"
                rows={5}
                className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              ></textarea>
            </div>

            <button type="submit" className="button-premium w-full py-4 text-lg group">
              Send Message <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
