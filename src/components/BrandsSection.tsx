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
  const [activePriceLevel, setActivePriceLevel] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBrands = brands.filter((brand) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      brand.name.toLowerCase().includes(q) ||
      brand.country.toLowerCase().includes(q) ||
      brand.clothingTypes.some((t) => t.toLowerCase().includes(q)) ||
      brand.category.toLowerCase().includes(q);
    const matchesPrice = !activePriceLevel || brand.priceLevel === activePriceLevel;
    return matchesSearch && matchesPrice;
  });

  return (
    <section id="merken" className="relative pt-20 pb-12 md:py-24 px-4 md:px-6 overflow-hidden scroll-mt-14">
      <div className="container mx-auto max-w-6xl px-0 md:px-8">
        <div className="text-center mb-3 md:mb-16">
          <p className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-1 md:mb-3">
            Ontdek Europees
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">
            Uitgelichte <span className="italic">merken</span>
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground mt-1 md:mt-4 max-w-lg mx-auto mb-3 md:mb-6">
            Wij hebben deze merken zorgvuldig voor jou geselecteerd.
          </p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Zoek op merk, land of kledingstuk..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 md:py-2.5 rounded-full border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>
        </div>

        {/* Price filter */}
        <div className="flex justify-center gap-2 md:gap-3 mb-3 md:mb-16">
          <span className="font-body text-sm text-muted-foreground self-center mr-1">Prijs:</span>
          {([1, 2, 3] as const).map((level) => (
            <button
              key={level}
              onClick={() => setActivePriceLevel(activePriceLevel === level ? null : level)}
              className={`font-body text-sm px-3 py-1 md:px-4 md:py-2 rounded-full border transition-all duration-200 ${
                activePriceLevel === level
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              <PriceLabel level={level} active={activePriceLevel === level} />
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
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
