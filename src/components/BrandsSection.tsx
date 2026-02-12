import BrandCard from "./BrandCard";

const brands = [
  {
    name: "COS",
    country: "Zweden",
    flag: "🇸🇪",
    description: "Minimalistische, tijdloze kleding met focus op duurzame materialen en modern Scandinavisch design.",
    category: "Minimalistisch",
    url: "https://www.cos.com",
  },
  {
    name: "Arket",
    country: "Zweden",
    flag: "🇸🇪",
    description: "Moderne basics en lifestyle-producten met transparante productieketens en hoge kwaliteitsstandaarden.",
    category: "Basics",
    url: "https://www.arket.com",
  },
  {
    name: "A.P.C.",
    country: "Frankrijk",
    flag: "🇫🇷",
    description: "Frans vakmanschap met clean, verfijnde designs. Bekend om hun iconische denim en tijdloze stukken.",
    category: "Premium",
    url: "https://www.apc.fr",
  },
  {
    name: "Stanley/Stella",
    country: "België",
    flag: "🇧🇪",
    description: "100% biologisch katoen, eerlijke productie en GOTS-gecertificeerd. Europese makelij van begin tot eind.",
    category: "Duurzaam",
    url: "https://www.stanleystella.com",
  },
  {
    name: "Sandqvist",
    country: "Zweden",
    flag: "🇸🇪",
    description: "Duurzame tassen en accessoires met Scandinavisch design. Gebruikt gerecyclede materialen en biologisch leer.",
    category: "Accessoires",
    url: "https://www.sandqvist.com",
  },
  {
    name: "Veja",
    country: "Frankrijk",
    flag: "🇫🇷",
    description: "Sneakers gemaakt van eerlijk verhandeld rubber, biologisch katoen en gerecycled plastic. Transparant en eerlijk.",
    category: "Schoenen",
    url: "https://www.veja-store.com",
  },
  {
    name: "Filippa K",
    country: "Zweden",
    flag: "🇸🇪",
    description: "Scandinavisch luxe met een sterk duurzaamheidsprogramma. Klassieke stukken die seizoenen meegaan.",
    category: "Scandinavisch",
    url: "https://www.filippa-k.com",
  },
  {
    name: "MUD Jeans",
    country: "Nederland",
    flag: "🇳🇱",
    description: "Circulaire denim uit Nederland. Lease je jeans of koop een paar gemaakt van gerecycled denim.",
    category: "Circulair",
    url: "https://www.mudjeans.eu",
  },
  {
    name: "Ecoalf",
    country: "Spanje",
    flag: "🇪🇸",
    description: "Mode gemaakt van gerecyclede materialen uit de oceaan. Spaans design met een missie voor de planeet.",
    category: "Gerecycled",
    url: "https://ecoalf.com",
  },
];

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
