export default function ContactHero() {
  return (
    <div className="w-full bg-muted/10 py-20 px-6 lg:px-20 border-b border-border">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <span className="text-primary font-bold text-xs uppercase tracking-[0.4em]">Customer Care</span>
        <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-tight tracking-tight">
          How can we <span className="gradient-text italic font-normal">Assist You?</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
          Whether you have a question about our collections or an existing order, 
          our dedicated team is here to provide you with premium assistance.
        </p>
      </div>
    </div>
  );
}
