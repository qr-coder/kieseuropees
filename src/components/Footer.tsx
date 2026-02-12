const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <h3 className="font-heading text-3xl mb-2">
              Kies <span className="italic">Europees</span>
            </h3>
            <p className="font-body text-sm text-primary-foreground/60 max-w-sm">
              Een initiatief om Europese kledingmerken te promoten als
              duurzaam en eerlijk alternatief voor fast fashion.
            </p>
          </div>

          <div className="font-body text-sm text-primary-foreground/40">
            <p>© {new Date().getFullYear()} Kies Europees</p>
            <p className="mt-1">Gemaakt met 🇪🇺 in Europa</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
