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
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi , I'm</span>
            <span className="opacity-0 animate-fade-in-delay-1 text-primary">
              {" "}
              Eldrian
            </span>
            <span className="opacity-0 animate-fade-in-delay-2"> Muljadi</span>
          </h1>

          <p className="opacity-0 animate-fade-in-delay-3 text-foreground text-lg md:text-xl max-2-2xl mx-auto ">
            A passionate web developer focused on building clean, responsive,
            and user-friendly websites using modern tools. I enjoy turning ideas
            into functional, visually appealing digital experiences, and I'm
            always eager to learn, solve problems, and bring creativity to every
            project I work on.
          </p>
        </div>

        <div className="pt-8 opacity-0 animate-fade-in-delay-4">
          <a href="#projects" className="cosmic-button">
            View My Work
          </a>
        </div>
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
