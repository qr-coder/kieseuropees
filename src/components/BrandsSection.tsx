import { useState } from "react";
import { Search, Euro } from "lucide-react";
import BrandCard from "./BrandCard";
import { brands } from "@/data/brands";

const PriceLabel = ({ level, active }: { level: 1 | 2 | 3; active: boolean }) => {
  const euros = Array.from({ length: 3 }, (_, i) => (
    <span
      key={i}
      className={`text-sm font-semibold transition-colors ${
        i < level
          ? active
            ? "text-primary-foreground"
            : "text-foreground"
          : active
            ? "text-primary-foreground/40"
            : "text-muted-foreground/30"
      }`}
    >
      €
    </span>
  ));
  return <span className="inline-flex gap-0.5">{euros}</span>;
};

const BrandsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activePriceLevel, setActivePriceLevel] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBrands = brands.filter((brand) => {
    const matchesFilter = !activeFilter || brand.clothingTypes.includes(activeFilter);
    const matchesSearch = !searchQuery || brand.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = !activePriceLevel || brand.priceLevel === activePriceLevel;
    return matchesFilter && matchesSearch && matchesPrice;
  });

  return (
    <section id="merken" className="relative py-24 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Ontdek Europees
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">
            Uitgelichte <span className="italic">merken</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto mb-6">
            Van Scandinavisch minimalisme tot Frans vakmanschap — ontdek merken die staan voor kwaliteit, duurzaamheid en Europese waarden.
          </p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Zoek een merk..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>
        </div>

        {/* Price filter */}
        <div className="flex justify-center gap-3 mb-6">
          <span className="font-body text-sm text-muted-foreground self-center mr-1">Prijs:</span>
          {([1, 2, 3] as const).map((level) => (
            <button
              key={level}
              onClick={() => setActivePriceLevel(activePriceLevel === level ? null : level)}
              className={`font-body text-sm px-4 py-2 rounded-full border transition-all duration-200 ${
                activePriceLevel === level
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              <PriceLabel level={level} active={activePriceLevel === level} />
            </button>
          ))}
        </div>

        {/* Clothing type filter buttons */}
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
            Geen merken gevonden voor deze selectie.
          </p>
        )}
      </div>
    </section>
  );
};

export default BrandsSection;
