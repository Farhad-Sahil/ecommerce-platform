export default function ProfileHeader() {
  return (
    <div className="w-full bg-muted/10 py-20 px-6 lg:px-20 border-b border-border">
      <div className="max-w-7xl mx-auto space-y-4">
        <span className="text-primary font-bold text-xs uppercase tracking-[0.4em]">Member Profile</span>
        <h1 className="text-5xl md:text-6xl font-serif text-foreground leading-tight tracking-tight">
          Welcome back, <span className="gradient-text italic font-normal">Sahil</span>
        </h1>
        <p className="text-lg text-muted-foreground font-light max-w-xl">
          Here's a detailed overview of your recent activity and account status.
        </p>
      </div>
    </div>
  );
}
