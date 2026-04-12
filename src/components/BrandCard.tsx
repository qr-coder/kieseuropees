import { ExternalLink, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface BrandCardProps {
  name: string;
  slug: string;
  country: string;
  description: string;
  category: string;
  url: string;
  flag: string;
  priceLevel: 1 | 2 | 3;
}

const BrandCard = ({ name, slug, country, description, category, url, flag }: BrandCardProps) => {
  return (
    <Link
      to={`/merk/${slug}`}
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
      </div>
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
        {description}
      </p>
      <div className="flex items-end justify-between">
        <span className="inline-block font-body text-xs tracking-wider uppercase bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
          {category}
        </span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-body text-xs tracking-wider uppercase px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Koop
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Link>
  );
};

export default BrandCard;
