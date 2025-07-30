import { useSearchParams } from "react-router-dom";
import { cn } from "../lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export const NavBar = () => {
  const NavItem = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Desktop Navbar
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10">
            <span className="text-foreground text-glow">EldrianTech </span>{" "}
            Portfolio
          </span>
        </a>

        {/* Desktop Navbar */}

        <div className="hidden md:flex space-x-8">
          {NavItem.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Navbar */}

        <button
          className="md:hidden p-2 z-50 text-foreground"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-colors duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {NavItem.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
