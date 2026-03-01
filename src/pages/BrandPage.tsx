import { useParams, Link } from "react-router-dom";
import { brands } from "@/data/brands";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, MapPin, Calendar, Building2, CheckCircle2 } from "lucide-react";

// Image imports

import sandqvistImg from "@/assets/brands/sandqvist.jpg";
import vejaImg from "@/assets/brands/veja.jpg";

import mudImg from "@/assets/brands/mud-jeans.jpg";
import ecoalfImg from "@/assets/brands/ecoalf.jpg";
import armedangelsImg from "@/assets/brands/armedangels.jpg";
import kuyichiImg from "@/assets/brands/kuyichi.jpg";
import koiImg from "@/assets/brands/kings-of-indigo.jpg";
import organicBasicsImg from "@/assets/brands/organic-basics.jpg";
import nazImg from "@/assets/brands/naz.jpg";
import colorfulStandardImg from "@/assets/brands/colorful-standard.jpg";
import thinkingMuImg from "@/assets/brands/thinking-mu.jpg";
import janNJuneImg from "@/assets/brands/jan-n-june.jpg";
import twoThirdsImg from "@/assets/brands/twothirds.jpg";
import dedicatedImg from "@/assets/brands/dedicated.jpg";
import laniusImg from "@/assets/brands/lanius.jpg";
import knowledgeCottonImg from "@/assets/brands/knowledgecotton.jpg";
import skfkImg from "@/assets/brands/skfk.jpg";
import tropicfeelImg from "@/assets/brands/tropicfeel.jpg";
import skotImg from "@/assets/brands/skot-fashion.jpg";
import anekdotImg from "@/assets/brands/anekdot.jpg";
import maiumImg from "@/assets/brands/maium.jpg";

const brandImages: Record<string, string> = {
  
  sandqvist: sandqvistImg,
  veja: vejaImg,
  
  "mud-jeans": mudImg,
  ecoalf: ecoalfImg,
  armedangels: armedangelsImg,
  kuyichi: kuyichiImg,
  "kings-of-indigo": koiImg,
  "organic-basics": organicBasicsImg,
  naz: nazImg,
  "colorful-standard": colorfulStandardImg,
  "thinking-mu": thinkingMuImg,
  "jan-n-june": janNJuneImg,
  twothirds: twoThirdsImg,
  dedicated: dedicatedImg,
  lanius: laniusImg,
  knowledgecotton: knowledgeCottonImg,
  skfk: skfkImg,
  tropicfeel: tropicfeelImg,
  "skot-fashion": skotImg,
  
  anekdot: anekdotImg,
  maium: maiumImg,
};

const BrandPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const brand = brands.find((b) => b.slug === slug);

  if (!brand) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-foreground mb-4">Merk niet gevonden</h1>
          <Link to="/" className="font-body text-primary hover:underline">
            ← Terug naar home
          </Link>
        </div>
      </div>
    );
  }

  const image = brandImages[brand.slug];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={image}
          alt={`${brand.name} producten`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto max-w-4xl">
            <Link
              to="/#merken"
              className="inline-flex items-center gap-2 font-body text-sm text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Terug naar merken
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{brand.flag}</span>
              <span className="inline-block font-body text-xs tracking-wider uppercase bg-primary text-primary-foreground px-3 py-1 rounded-full">
                {brand.category}
              </span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl text-foreground">
              {brand.name}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Meta info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <div className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Land</p>
                <p className="font-body text-sm text-card-foreground">{brand.flag} {brand.country}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border">
              <Calendar className="w-5 h-5 text-primary" />
              <div>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Opgericht</p>
                <p className="font-body text-sm text-card-foreground">{brand.founded}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border">
              <Building2 className="w-5 h-5 text-primary" />
              <div>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Hoofdkantoor</p>
                <p className="font-body text-sm text-card-foreground">{brand.headquarters}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-12">
            {brand.longDescription.split("\n\n").map((paragraph, i) => (
              <p key={i} className="font-body text-foreground/80 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlights */}
          <div className="bg-card rounded-lg p-8 border border-border mb-12">
            <h2 className="font-heading text-2xl text-card-foreground mb-6">Waarom {brand.name}?</h2>
            <ul className="space-y-4">
              {brand.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="font-body text-card-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-center gap-4">
            <a
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Koop {brand.name}
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={brand.homepageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-muted-foreground font-body text-sm tracking-wider uppercase px-8 py-4 rounded-lg hover:border-primary/50 hover:text-foreground transition-colors"
            >
              Bezoek website
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandPage;
