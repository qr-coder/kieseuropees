import { useState } from "react";
import { Search } from "lucide-react";
import BrandCard from "./BrandCard";
import { brands, clothingTypeOptions } from "@/data/brands";

const EUStars = () => {
  const stars = Array.from({ length: 12 });
  const radius = 120;
  const cx = 150;
  const cy = 150;

  return (
    <svg
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.07] pointer-events-none"
      viewBox="0 0 300 300"
      fill="none"
    >
      {stars.map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        return (
          <polygon
            key={i}
            points="0,-10 2.9,-4 9.5,-3.1 4.8,1.5 5.9,8.1 0,5 -5.9,8.1 -4.8,1.5 -9.5,-3.1 -2.9,-4"
            transform={`translate(${x}, ${y})`}
            fill="hsl(45, 80%, 55%)"
          />
        );
      })}
    </svg>
  );
};

const BrandsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBrands = brands.filter((brand) => {
    const matchesFilter = !activeFilter || brand.clothingTypes.includes(activeFilter);
    const matchesSearch = !searchQuery || brand.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="merken" className="relative py-24 px-6 overflow-hidden">
      <EUStars />
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Ontdek Europees
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">
            Uitgelichte <span className="italic">merken</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
            Van Scandinavisch minimalisme tot Frans vakmanschap — ontdek merken die staan voor kwaliteit, duurzaamheid en Europese waarden.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveFilter(null)}
            className={`font-body text-sm px-4 py-2 rounded-full border transition-all duration-200 ${
              activeFilter === null
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
            }`}
          >
            Alles
          </button>
          {clothingTypeOptions.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(activeFilter === type ? null : type)}
              className={`font-body text-sm px-4 py-2 rounded-full border transition-all duration-200 ${
                activeFilter === type
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBrands.map((brand) => (
            <BrandCard key={brand.name} {...brand} />
          ))}
        </div>

        {filteredBrands.length === 0 && (
          <p className="text-center text-muted-foreground font-body mt-8">
            Geen merken gevonden voor dit type kleding.
          </p>
        )}
      </div>
    </section>
  );
};

export default BrandsSection;
