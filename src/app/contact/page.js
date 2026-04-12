import ContactHero from "@/components/contact/ContactHero";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-background pb-20">
      <ContactHero />
      <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 py-20">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  );
}
