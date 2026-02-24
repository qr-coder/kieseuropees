import { Link } from "react-router-dom";
import { reasons } from "@/data/reasons";
import { ArrowRight } from "lucide-react";

const EUStars = () => {
  const stars = Array.from({ length: 12 });
  const radius = 120;
  const cx = 150;
  const cy = 150;

  return (
    <svg
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.07] pointer-events-none"
      viewBox="0 0 300 300"
      fill="none"
    >
      {stars.map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        return (
          <polygon
            key={i}
            points="0,-10 2.9,-4 9.5,-3.1 4.8,1.5 5.9,8.1 0,5 -5.9,8.1 -4.8,1.5 -9.5,-3.1 -2.9,-4"
            transform={`translate(${x}, ${y})`}
            fill="hsl(45, 80%, 55%)"
          />
        );
      })}
    </svg>
  );
};

const WhyEuropean = () => {
  return (
    <section id="waarom" className="relative py-24 px-6 bg-primary overflow-hidden">
      <EUStars />

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
