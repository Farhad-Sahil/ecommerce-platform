export default function Privacy() {
  const sections = [
    { 
      title: "Data Collection", 
      content: "We collect information you provide directly to us when you create an account, make a purchase, or communicate with us. This includes name, email, shipping address, and payment info." 
    },
    { 
      title: "Use of Information", 
      content: "We use the information we collect to provide, maintain, and improve our services, process transactions, and send you technical notices and support messages." 
    },
    { 
      title: "Data Sharing", 
      content: "We do not share your personal data with third parties except as necessary to fulfill your orders (e.g., sharing your address with couriers) or as required by law." 
    },
    { 
      title: "Security", 
      content: "We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access. All payments are processed via secure 256-bit SSL encryption." 
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Privacy <span className="gradient-text italic">Policy</span></h1>
        <p className="text-muted-foreground italic">Last Updated: April 11, 2026</p>
      </div>

      <div className="space-y-12">
        <p className="text-lg text-muted-foreground leading-relaxed italic">
          Your privacy is a fundamental right at SaffronStitch. We are committed to being transparent about how we collect and use your data to provide a seamless luxury experience.
        </p>

        <div className="space-y-10">
          {sections.map((section, idx) => (
            <section key={idx} className="space-y-4 pt-10 border-t border-white/10">
               <h2 className="text-2xl font-bold">{section.title}</h2>
               <p className="text-muted-foreground italic leading-relaxed">{section.content}</p>
            </section>
          ))}
        </div>
      </div>
      
      <div className="glass p-12 rounded-[3rem] border border-white/5 space-y-4">
         <h3 className="font-bold text-xl">Feedback & Questions</h3>
         <p className="text-muted-foreground italic leading-relaxed">If you have any questions regarding this policy or your data rights, please contact our legal team at legal@saffronstitch.com</p>
      </div>
    </div>
  );
}
