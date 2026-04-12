import AboutHero from "@/components/about/AboutHero";
import AboutValues from "@/components/about/AboutValues";
import AboutStory from "@/components/about/AboutStory";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AboutHero />
      <AboutValues />
      <AboutStory />
    </div>
  );
}
