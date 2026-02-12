import BrandCard from "./BrandCard";

const brands = [
  {
    name: "COS",
    country: "Zweden",
    flag: "🇸🇪",
    description: "COS staat bekend om hun minimalistische, tijdloze kleding met een sterke focus op duurzame materialen en modern Scandinavisch design. Het merk biedt seizoenloze collecties die jarenlang meegaan, met aandacht voor architecturale silhouetten en hoogwaardige stoffen. Hun toewijding aan circulaire mode blijkt uit initiatieven zoals hun resale-platform en het gebruik van biologisch katoen en gerecyclede vezels.",
    category: "Minimalistisch",
    url: "https://www.cos.com",
  },
  {
    name: "Arket",
    country: "Zweden",
    flag: "🇸🇪",
    description: "Arket combineert moderne basics met een lifestyle-aanpak, waarbij transparantie in de productieketen centraal staat. Elk kledingstuk wordt vergezeld van gedetailleerde informatie over de fabriek waar het is gemaakt. Het merk biedt naast kleding ook huishoudelijke producten en heeft zelfs eigen cafés met een Scandinavisch-geïnspireerd menu, wat hun holistische benadering van duurzaam leven onderstreept.",
    category: "Basics",
    url: "https://www.arket.com",
  },
  {
    name: "A.P.C.",
    country: "Frankrijk",
    flag: "🇫🇷",
    description: "A.P.C. is het toonbeeld van Frans vakmanschap met clean, verfijnde designs die trends overstijgen. Het merk is wereldberoemd om hun iconische raw denim jeans die mooier worden naarmate je ze langer draagt. Oprichter Jean Touitou gelooft in de kracht van eenvoud, wat resulteert in stukken die seizoen na seizoen relevant blijven en een bewuste tegenhanger vormen van fast fashion.",
    category: "Premium",
    url: "https://www.apc.fr",
  },
  {
    name: "Stanley/Stella",
    country: "België",
    flag: "🇧🇪",
    description: "Stanley/Stella produceert kleding van 100% biologisch katoen met GOTS-certificering, wat garandeert dat elk stap van het productieproces aan strenge milieu- en sociale normen voldoet. Het Belgische merk werkt uitsluitend met fabrieken die eerlijke lonen betalen en veilige werkomstandigheden bieden. Hun basics zijn favoriet bij creatieve studio's en merken die op zoek zijn naar een duurzaam canvas voor eigen ontwerpen.",
    category: "Duurzaam",
    url: "https://www.stanleystella.com",
  },
  {
    name: "Sandqvist",
    country: "Zweden",
    flag: "🇸🇪",
    description: "Sandqvist ontwerpt duurzame tassen en accessoires vanuit Stockholm, met een unieke mix van Scandinavisch minimalisme en functioneel design. Het merk gebruikt steeds meer gerecyclede materialen en plantaardig gelooid leer, en investeert actief in projecten voor bosbehoud. Hun rugzakken en weekendtassen zijn ontworpen om dagelijks gebruik jarenlang te doorstaan, wat ze tot een bewuste investering maakt.",
    category: "Accessoires",
    url: "https://www.sandqvist.com",
  },
  {
    name: "Veja",
    country: "Frankrijk",
    flag: "🇫🇷",
    description: "Veja revolutioneerde de sneakerwereld door transparantie en eerlijke handel centraal te stellen. Hun schoenen worden gemaakt van wild rubber uit het Amazonegebied, biologisch katoen uit Brazilië en gerecycled plastic. Het Franse merk besteedt nul euro aan traditionele reclame en investeert dat budget volledig in betere materialen en eerlijke lonen voor alle medewerkers in de keten.",
    category: "Schoenen",
    url: "https://www.veja-store.com",
  },
  {
    name: "Filippa K",
    country: "Zweden",
    flag: "🇸🇪",
    description: "Filippa K belichaamt Scandinavische luxe met een sterk duurzaamheidsprogramma dat tot de meest ambitieuze in de mode-industrie behoort. Het merk hanteert het principe 'style over fashion' en ontwerpt klassieke stukken die meerdere seizoenen meegaan. Met hun eigen tweedehands platform en lease-opties stimuleren ze actief een langere levensduur van kleding en een circulaire economie.",
    category: "Scandinavisch",
    url: "https://www.filippa-k.com",
  },
  {
    name: "MUD Jeans",
    country: "Nederland",
    flag: "🇳🇱",
    description: "MUD Jeans is een Nederlands pioniersmerk in circulaire denim dat je de mogelijkheid biedt om jeans te leasen in plaats van te kopen. Aan het einde van de leaseperiode wordt de stof gerecycled tot nieuwe jeans, waardoor er een volledig gesloten kringloop ontstaat. Het merk gebruikt tot 40% gerecycled denim in hun producten en bespaart zo duizenden liters water per spijkerbroek vergeleken met conventionele productie.",
    category: "Circulair",
    url: "https://www.mudjeans.eu",
  },
  {
    name: "Ecoalf",
    country: "Spanje",
    flag: "🇪🇸",
    description: "Ecoalf is een Spaans modemerk met de missie om de eerste generatie gerecyclede kleding te creëren met dezelfde kwaliteit als niet-gerecyclede mode. Via hun 'Upcycling the Oceans'-project werken ze samen met vissers in de Middellandse Zee om plastic afval op te vissen en te transformeren tot hoogwaardige stoffen. Het merk bewijst dat stijlvolle mode en milieubewustzijn perfect samengaan.",
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
