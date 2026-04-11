import { User, Shield, Bell, CreditCard, ChevronRight } from "lucide-react";

export default function AccountSettings() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Account Settings</h1>

      <div className="space-y-4">
        {[
          { icon: User, label: "Personal Information", desc: "Update your name, email and phone number" },
          { icon: Shield, label: "Login & Security", desc: "Manage your password and 2FA settings" },
          { icon: Bell, label: "Notifications", desc: "Control email and marketing preferences" },
          { icon: CreditCard, label: "Payment Methods", desc: "Save and manage your payment cards" },
        ].map((item, idx) => (
          <button key={idx} className="w-full glass p-6 rounded-3xl border border-white/5 flex items-center justify-between group hover:bg-white/5 transition-all text-left">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <item.icon size={24} />
              </div>
              <div>
                <h3 className="font-bold group-hover:text-primary transition-colors">{item.label}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
            <ChevronRight className="text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
          </button>
        ))}
      </div>

      <div className="pt-8 border-t border-white/10 space-y-4">
        <h3 className="font-bold text-lg px-2">Danger Zone</h3>
        <button className="w-full glass p-6 rounded-3xl border border-destructive/20 text-destructive text-sm font-bold hover:bg-destructive/5 transition-all text-left flex justify-between items-center group">
           Deactivate Account
           <Shield size={18} className="opacity-50" />
        </button>
      </div>
    </div>
  );
}
