import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandsSection from "@/components/BrandsSection";
import WhyEuropean from "@/components/WhyEuropean";
import Footer from "@/components/Footer";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => {
        document.getElementById("merken")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <BrandsSection />
      <WhyEuropean />
      <Footer />
    </div>
  );
};
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <BrandsSection />
      <WhyEuropean />
      <Footer />
    </div>
  );
};

export default Index;
