import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import PriceSection from "@/components/PriceSection";
import SupportSection from "@/components/SupportSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <PriceSection />
      <SupportSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
