import Link from "next/link";
import { Mail, Lock, User, ArrowRight } from "lucide-react";

export default function Register() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md space-y-8 glass p-8 md:p-12 rounded-[2rem] border border-white/10">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Join the Circle</h1>
          <p className="text-muted-foreground">Experience luxury at SaffronStitch</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-background/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-background/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-background/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          <p className="text-[10px] text-muted-foreground text-center">
            By signing up, you agree to our <Link href="#" className="underline">Terms of Service</Link> and <Link href="#" className="underline">Privacy Policy</Link>.
          </p>

          <button type="submit" className="button-premium w-full group py-3.5 text-lg">
            Create Account <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </form>

        <div className="text-center text-sm">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-semibold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
