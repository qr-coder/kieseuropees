import { useParams, Link } from "react-router-dom";
import { reasons } from "@/data/reasons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const ReasonPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const reason = reasons.find((r) => r.slug === slug);

  if (!reason) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-foreground mb-4">Pagina niet gevonden</h1>
          <Link to="/" className="font-body text-primary hover:underline">
            ← Terug naar home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = reason.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="relative bg-primary pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link
            to="/#waarom"
            className="inline-flex items-center gap-2 font-body text-sm text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Terug naar overzicht
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-background/10 flex items-center justify-center">
              <Icon className="w-7 h-7 text-primary-foreground" />
            </div>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl text-primary-foreground">
            {reason.title}
          </h1>
          <p className="font-body text-lg text-primary-foreground/80 mt-4 max-w-2xl">
            {reason.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Long description */}
          <div className="prose prose-lg max-w-none mb-12">
            {reason.longDescription.split("\n\n").map((paragraph, i) => (
              <p key={i} className="font-body text-foreground/80 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlights */}
          <div className="bg-card rounded-lg p-8 border border-border mb-12">
            <h2 className="font-heading text-2xl text-card-foreground mb-6">Belangrijkste punten</h2>
            <ul className="space-y-4">
              {reason.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="font-body text-card-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              to="/#merken"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Ontdek onze merken
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReasonPage;
