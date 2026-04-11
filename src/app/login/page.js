import Link from "next/link";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md space-y-8 glass p-8 md:p-12 rounded-[2rem] border border-white/10">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your SaffronStitch account</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-4">
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

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-white/10 bg-background/50 text-primary" />
              <span>Remember me</span>
            </label>
            <Link href="#" className="text-primary hover:underline">Forgot password?</Link>
          </div>

          <button type="submit" className="button-premium w-full group py-3.5 text-lg">
            Sign In <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </form>

        <div className="text-center text-sm">
          <p className="text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/register" className="text-primary font-semibold hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
