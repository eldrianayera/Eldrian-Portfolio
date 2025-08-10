import { BrainCircuit, Code2Icon, Handshake } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col  py-24 px-4"
      id="about"
    >
      <div className="container mx-auto max-w-5xl">
        <h2
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="section-header"
        >
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
          <div className="flex flex-col items-center justify-center space-y-6">
            <h3
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="text-2xl font-semibold text-glow"
            >
              Passionate Web Developer
            </h3>
            <p data-aos="fade-up">
              I'm a web developer who enjoys creating clean and easy-to-use
              websites. I work with HTML, CSS, JavaScript, React, and
              TailwindCSS to build responsive sites that look good on any
              device. I like solving problems and learning new tools to make
              better and faster websites.
            </p>

            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="flex flex-col md:flex-row justify-center gap-4 pt-4"
            >
              <a className="cosmic-button rounded-lg" href="#contact">
                Get in touch
              </a>
              <a
                className="cosmic-button rounded-lg bg-foreground/70"
                href="/cv.pdf"
                download="Eldrian_Muljadi_CV.pdf"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div
              data-aos="fade-up"
              className="flex items-start bg-primary/20 rounded-xl  card-hover p-6"
            >
              <Code2Icon className="h-15 w-15 mr-5" />
              <div className="text-left">
                <h4 className="text-xl ">Frontend Development</h4>
                <p className="text-sm">
                  Crafting responsive, user-friendly interfaces. My focus is on
                  clean design, performance, and accessibility.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="flex items-start bg-primary/20 rounded-xl  card-hover p-6"
            >
              <BrainCircuit className="h-15 w-15 mr-5" />
              <div className="text-left">
                <h4 className="text-xl ">Problem Solving & Logic</h4>
                <p className="text-sm">
                  Love turning complex problems into simple, functional web
                  solutions.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="flex items-start bg-primary/20 rounded-xl  card-hover p-6"
            >
              <Handshake className="h-15 w-15 mr-5" />
              <div className="text-left">
                <h4 className="text-xl ">Tools & Workflow</h4>
                <p className="text-sm">
                  Use Git, GitHub, VS Code, and Figma to stay efficient and
                  organized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
