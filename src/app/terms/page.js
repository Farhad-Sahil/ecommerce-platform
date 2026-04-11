export default function Terms() {
  const terms = [
    { 
      title: "Agreement to Terms", 
      content: "By accessing or using the SaffronStitch website, you agree to be bound by these Terms of Service and all applicable laws and regulations." 
    },
    { 
      title: "Intellectual Property", 
      content: "All content on this site, including designs, text, and images, is the property of SaffronStitch and protected by international copyright laws. Any unauthorized use is strictly prohibited." 
    },
    { 
      title: "Product Accuracy", 
      content: "We strive for complete accuracy in our product displays. However, due to the hand-woven nature of our fabrics and digital display variations, slight differences in color and texture may occur." 
    },
    { 
      title: "Limitation of Liability", 
      content: "SaffronStitch shall not be liable for any indirect, incidental, or punitive damages arising from the use of our products or website." 
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Terms of <span className="gradient-text italic">Service</span></h1>
        <p className="text-muted-foreground italic">Last Updated: April 11, 2026</p>
      </div>

      <div className="space-y-12">
        <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6">
          These terms govern your use of our website and purchase of our luxury goods. Please read them carefully before making a purchase.
        </p>

        <div className="space-y-10">
          {terms.map((term, idx) => (
            <section key={idx} className="space-y-4 pt-10 border-t border-white/10">
               <h2 className="text-2xl font-bold">{term.title}</h2>
               <p className="text-muted-foreground italic leading-relaxed">{term.content}</p>
            </section>
          ))}
        </div>
      </div>
      
      <div className="text-center text-xs text-muted-foreground italic pt-12">
         Governed by the laws of the State of New York, United States.
      </div>
    </div>
  );
}
