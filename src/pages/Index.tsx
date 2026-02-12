import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandsSection from "@/components/BrandsSection";
import WhyEuropean from "@/components/WhyEuropean";
import Footer from "@/components/Footer";

const Index = () => {
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

export default Index;
