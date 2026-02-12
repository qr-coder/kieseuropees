import { Leaf, Heart, Factory, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Leaf,
    title: "Duurzamer",
    description:
      "Europese merken volgen strengere milieuwetgeving en kiezen vaker voor duurzame materialen en productieprocessen.",
  },
  {
    icon: Heart,
    title: "Eerlijke arbeidsomstandigheden",
    description:
      "Productie binnen Europa betekent betere lonen, veilige werkplekken en respect voor werknemersrechten.",
  },
  {
    icon: Factory,
    title: "Steun lokale economie",
    description:
      "Door Europees te kopen investeer je in banen en ambachten dicht bij huis. Je geld blijft in onze economie.",
  },
  {
    icon: ShieldCheck,
    title: "Hogere kwaliteit",
    description:
      "Europese mode staat bekend om vakmanschap en kwaliteit. Kleding die langer meegaat is de beste duurzame keuze.",
  },
];

const WhyEuropean = () => {
  return (
    <section id="waarom" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            De kracht van Europese mode
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">
            Waarom <span className="italic">Europees</span> kopen?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-5 p-6 rounded-lg bg-background border border-border"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <reason.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEuropean;
