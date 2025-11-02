import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Stats } from "@/components/Stats";
import { ManuscriptPreview } from "@/components/ManuscriptPreview";
import { CTA } from "@/components/CTA";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <ManuscriptPreview />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
