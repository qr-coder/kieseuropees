import { ExternalLink, MapPin } from "lucide-react";

interface BrandCardProps {
  name: string;
  country: string;
  description: string;
  category: string;
  url: string;
  flag: string;
}

const BrandCard = ({ name, country, description, category, url, flag }: BrandCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-heading text-2xl text-card-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-1.5 mt-1">
            <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="font-body text-sm text-muted-foreground">
              {flag} {country}
            </span>
          </div>
        </div>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors mt-1" />
      </div>
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>
      <span className="inline-block font-body text-xs tracking-wider uppercase bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
        {category}
      </span>
    </a>
  );
};

export default BrandCard;
