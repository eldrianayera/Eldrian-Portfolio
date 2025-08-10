import { ArrowBigDown, ArrowBigDownDash, ArrowBigDownIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center px-4"
      id="hero"
    >
      <div className="container max-w-6xl mx-auto text-left z-10 ">
        <div className="space-y-6 mb-8">
          <div className="text-8xl font-bold anton tracking-wide">
            <h1 className="opacity-0 animate-fade-in-delay-1 text-primary">
              ELDRIAN
            </h1>
            <h1 className="opacity-0 animate-fade-in-delay-2 pl-15">MULJADI</h1>
          </div>

          <p className="opacity-0 animate-fade-in-delay-3 text-foreground text-lg md:text-xl max-2-2xl max-w-xl">
            Hi ! I am Eldrian Muljadi. A passionate web developer focused on
            building clean, responsive, and user-friendly websites using modern
            tools.
          </p>
        </div>

        <a href="#projects" className="cosmic-button">
          MY PROJECTS
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        {isScrolled ? (
          ""
        ) : (
          <>
            {" "}
            <span className="text-sm mb-2">Scroll</span>{" "}
            <ArrowBigDown className="text-primary h-5 w-5" />{" "}
          </>
        )}
      </div>
    </section>
  );
};
