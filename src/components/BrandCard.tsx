import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Flag from "./Flag";

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

const BrandCard = ({ name, slug, country, description, category, url, flag, priceLevel }: BrandCardProps) => {
  const priceLabel = "€".repeat(priceLevel);
  const priceGray = "€".repeat(3 - priceLevel);
  const buyButton = (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="inline-flex shrink-0 items-center gap-1.5 bg-primary text-primary-foreground font-body text-xs tracking-wider uppercase px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:bg-primary/90 transition-colors"
    >
      Shop
      <ExternalLink className="w-3.5 h-3.5" />
    </a>
  );
  return (
    <Link
      to={`/merk/${slug}`}
      className="group block bg-card rounded-lg px-4 py-3 md:p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      {/* Mobile: compact 2 lines */}
      <div className="md:hidden">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-heading text-lg text-card-foreground truncate">{name}</h3>
          {buyButton}
        </div>
        <div className="flex items-center gap-2 mt-1 font-body text-xs text-muted-foreground">
          <Flag emoji={flag} className="w-4 h-auto" />
          <span>{country}</span>
          <span>·</span>
          <span className="truncate">{category}</span>
          <span className="font-semibold text-primary ml-auto">
            {priceLabel}
            <span className="text-muted-foreground/30">{priceGray}</span>
          </span>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <div className="mb-4">
          <h3 className="font-heading text-2xl text-card-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-1.5 mt-1">
            <Flag emoji={flag} />
            <span className="font-body text-sm text-muted-foreground">{country}</span>
          </div>
        </div>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block font-body text-xs tracking-wider uppercase bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
              {category}
            </span>
            <span className="font-body text-xs font-semibold text-primary">
              {priceLabel}
              <span className="text-muted-foreground/30">{priceGray}</span>
            </span>
          </div>
          {buyButton}
        </div>
      </div>
    </Link>
  );
};

export default BrandCard;
