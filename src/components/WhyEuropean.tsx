import { Link } from "react-router-dom";
import { reasons } from "@/data/reasons";
import { ArrowRight } from "lucide-react";

const WhyEuropean = () => {
  return (
    <section id="waarom" className="relative py-24 px-6 bg-primary overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/70 mb-3">
            De kracht van Europese mode
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground">
            Waarom <span className="italic">Europees</span> kopen?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <Link
              key={reason.slug}
              to={`/waarom/${reason.slug}`}
              className="group flex gap-5 p-6 rounded-lg bg-background border border-border hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <reason.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                  {reason.description}
                </p>
                <span className="inline-flex items-center gap-1 font-body text-xs tracking-wider uppercase text-primary">
                  Lees meer <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEuropean;
