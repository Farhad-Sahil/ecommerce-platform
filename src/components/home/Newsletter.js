import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="relative py-24 px-6 lg:px-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/newsletter_bg.png"
          alt="Newsletter Background"
          fill
          className="object-cover opacity-20 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
        <div className="space-y-4">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.4em]">Join Our Community</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Subscribe to Excellence</h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Experience the latest in ethnic luxury and artisanal craft. Subscribe for exclusive updates and seasonal releases.
          </p>
        </div>

        <form className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto text-left">
          <div className="flex-1">
            <label htmlFor="user-email" className="sr-only">
              Email Address
            </label>
            <input
              id="user-email"
              type="email"
              placeholder="Enter your email address..."
              className="w-full bg-background border border-border rounded-l-[4px] border-r-0 px-6 h-14 focus:outline-none focus:ring-0 transition-all text-sm"
              required
            />
          </div>
          <button type="submit" className="button-premium !rounded-l-none !rounded-r-[4px] h-14 px-10 font-bold uppercase tracking-widest text-xs whitespace-nowrap">
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
}
