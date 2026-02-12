import BrandCard from "./BrandCard";
import { brands } from "@/data/brands";

const BrandsSection = () => {
  return (
    <section id="merken" className="py-24 px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <BrandCard key={brand.name} {...brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
