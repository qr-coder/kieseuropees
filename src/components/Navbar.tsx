import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-heading text-xl">
          <span className={scrolled ? "text-foreground" : "text-primary-foreground"}>
            Kies <span className="italic">Europees</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-body text-sm tracking-wide">
          {[
            { label: "Merken", href: "#merken" },
            { label: "Waarom Europees?", href: "#waarom" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors hover:opacity-100 ${
                scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
