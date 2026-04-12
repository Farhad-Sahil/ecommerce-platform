import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileStats from "@/components/profile/ProfileStats";
import ProfileOverview from "@/components/profile/ProfileOverview";

export default function ProfileDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-background pb-20">
      <ProfileHeader />
      <div className="max-w-7xl mx-auto px-6 lg:px-20 w-full py-20 space-y-16">
        <ProfileStats />
        <ProfileOverview />
      </div>
    </div>
  );
}
