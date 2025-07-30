import {
  Brain,
  BrainCircuit,
  BrainCog,
  BrainIcon,
  Briefcase,
  Code,
  Code2Icon,
  Cpu,
  Dribbble,
  Handshake,
} from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col  py-24 px-4"
      id="about"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
          <div className="flex flex-col items-center justify-center animate-fade-in opacity-0 space-y-6">
            <h3 className="text-2xl font-semibold text-glow">
              Passionate Web Developer
            </h3>
            <p>
              I'm a dedicated and creative web developer with a passion for
              building modern, responsive, and user-friendly websites. Whether
              it's crafting elegant UIs or optimizing backend functionality, I
              love turning ideas into digital experiences that work beautifully
              across all devices.
            </p>

            <p>
              With a strong foundation in HTML, CSS, JavaScript, React, and
              TailwindCSS, I strive to deliver clean, efficient, and scalable
              code in every project. I'm continuously learning and staying
              up-to-date with the latest web technologies to bring innovative
              solutions to life.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 pt-4">
              <a className="cosmic-button" href="#contact">
                Get in touch
              </a>
              <a className="cosmic-button bg-pink-400/70" href="">
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start bg-primary/20 rounded-xl animate-fade-in-delay-2 opacity-0 card-hover p-6">
              <Code2Icon className="h-15 w-15 mr-5" />
              <div className="text-left">
                <h4 className="text-xl ">Frontend Development</h4>
                <p className="text-sm">
                  Crafting responsive, user-friendly interfaces. My focus is on
                  clean design, performance, and accessibility.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-primary/20 rounded-xl animate-fade-in-delay-2 opacity-0 card-hover p-6">
              <BrainCircuit className="h-15 w-15 mr-5" />
              <div className="text-left">
                <h4 className="text-xl ">Problem Solving & Logic</h4>
                <p className="text-sm">
                  Love turning complex problems into simple, functional web
                  solutions.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-primary/20 rounded-xl animate-fade-in-delay-2 opacity-0 card-hover p-6">
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
