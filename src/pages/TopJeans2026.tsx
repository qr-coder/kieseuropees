import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Flag from "@/components/Flag";
import { brands } from "@/data/brands";

const SOURCE = {
  name: "COSH! – 15 more sustainable denim brands you should know (juni 2025)",
  url: "https://cosh.eco/en/articles/more-sustainable-denim-brands-shops",
};

const ranking: { slug: string; why: string }[] = [
  { slug: "mud-jeans", why: "Dé pionier in circulaire denim: jeans van gerecycled katoen die je kunt leasen en terugsturen, zodat ze opnieuw tot nieuwe jeans worden verwerkt." },
  { slug: "kings-of-indigo", why: "Amsterdams denimlabel dat Amerikaanse klassiekers maakt met biologisch en gerecycled katoen en strenge eisen aan eerlijke productie." },
  { slug: "nudie-jeans", why: "Zweeds merk met 100% biologisch katoen, gratis reparaties voor het leven en een eigen inzamel- en tweedehandsprogramma." },
  { slug: "kuyichi", why: "Een van de eerste biologische denimmerken ter wereld, met volledig transparante productieketen en gerecyclede materialen." },
  { slug: "armedangels", why: "Duits fair-fashion merk met GOTS-gecertificeerd denim en Fairtrade katoen, gemaakt met minder water en chemicaliën." },
  { slug: "flax-and-loom", why: "Denim gemaakt van vlas en katoen – vlas heeft veel minder water nodig en geeft een sterke, ademende stof." },
  { slug: "knowledgecotton", why: "Deens herenlabel met jeans van biologisch katoen en een sterke focus op duurzame, tijdloze basics." },
  { slug: "asket", why: "Volledig traceerbare jeans: van katoenveld tot naaiatelier zie je precies waar elk onderdeel vandaan komt." },
  { slug: "dedicated", why: "Zweedse streetwear met jeans van biologisch katoen en eerlijke productie onder Fair Wear-afspraken." },
  { slug: "filippa-k", why: "Scandinavisch premiummerk dat inzet op duurzame materialen, tweedehandsverkoop en tijdloze denimmodellen." },
];

const TopJeans2026 = () => {
  useEffect(() => {
    document.title = "Top 10 duurzame jeansmerken 2026 | Kies Europees";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", "De 10 meest duurzame Europese jeansmerken van het afgelopen jaar, van MUD Jeans tot Nudie Jeans.");
  }, []);

  const items = ranking
    .map((r) => ({ ...r, brand: brands.find((b) => b.slug === r.slug) }))
    .filter((r) => r.brand);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto max-w-3xl px-4 md:px-6 pt-28 pb-16">
        <p className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">Top 10 · 2026</p>
        <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
          De meest duurzame <span className="italic">jeansmerken</span>
        </h1>
        <p className="font-body text-muted-foreground mb-10">
          Een spijkerbroek kost duizenden liters water om te maken. Deze Europese merken laten zien dat het anders kan:
          met biologisch of gerecycled katoen, eerlijke productie en reparatieservices. Onze selectie is gebaseerd op het
          overzicht van{" "}
          <a href={SOURCE.url} target="_blank" rel="noopener noreferrer" className="underline text-primary">COSH!</a>,
          de onafhankelijke gids voor duurzame mode.
        </p>

        <ol className="space-y-4">
          {items.map(({ brand, why }, i) => (
            <li key={brand!.slug} className="bg-card border border-border rounded-lg p-4 md:p-6 flex gap-4">
              <span className="font-heading text-3xl md:text-4xl text-primary w-10 shrink-0">{i + 1}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <Link to={`/merk/${brand!.slug}`} className="font-heading text-2xl text-card-foreground hover:text-primary">
                    {brand!.name}
                  </Link>
                  <a
                    href={brand!.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-body text-xs tracking-wider uppercase px-4 py-2 rounded-lg hover:bg-primary/90"
                  >
                    Shop <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="font-body text-sm text-muted-foreground mt-1 flex items-center gap-1.5">
                  <Flag emoji={brand!.flag} className="w-4 h-auto" /> {brand!.country}
                </p>
                <p className="font-body text-sm text-card-foreground mt-2 leading-relaxed">{why}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="font-body text-xs text-muted-foreground mt-10">
          Bron: <a href={SOURCE.url} target="_blank" rel="noopener noreferrer" className="underline">{SOURCE.name}</a>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default TopJeans2026;
