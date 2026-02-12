import heroImage from "@/assets/hero-fashion.jpg";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Europese mode op straat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/70 mb-6">
            Mode met een missie
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-[0.95] mb-6">
            Kies
            <br />
            <span className="italic">Europees</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-lg mb-10 leading-relaxed">
            Ontdek de beste Europese kledingmerken. Duurzamer, eerlijker en
            dichterbij. Steun de lokale economie en zeg nee tegen fast fashion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-body text-base px-8 py-6 tracking-wide"
              onClick={() =>
                document
                  .getElementById("merken")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Ontdek merken
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body text-base px-8 py-6 tracking-wide"
              onClick={() =>
                document
                  .getElementById("waarom")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Waarom Europees?
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="w-5 h-5 text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default Hero;
