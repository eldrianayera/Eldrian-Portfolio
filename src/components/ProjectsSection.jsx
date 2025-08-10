import { ArrowBigRightDash, Github, Share2 } from "lucide-react";
import { myProjects } from "../lib/myProjects";

export const ProjectsSection = () => {
  return (
    <section className="min-h-screen py-24 px-4" id="projects">
      <div className="container mx-auto flex flex-col items-center">
        {" "}
        <h2 data-aos="fade-up" className="section-header">
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <div data-aos="fade-up" className="max-w-2xl">
          {" "}
          <p>
            A showcase of the websites and applications I've built — Each
            project reflects my growth, creativity, and passion for clean,
            functional design.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project, key) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-delay={(key % 3) * 150}
                key={key}
                className="rounded-lg overflow-hidden mx-auto card-hover shadow-xs group bg-card h-full flex flex-col"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 scale-100 group-hover:scale-107 rounded-t-lg"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6">
                  {/* Tools */}
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tools.map((tool, idx) => (
                      <div
                        key={idx}
                        className="text-xs px-2 py-1 rounded-full font-medium bg-primary/40"
                      >
                        {tool}
                      </div>
                    ))}
                  </div>

                  {/* Name */}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                    className="font-bold text-xl m-2"
                  >
                    {project.name}
                  </a>

                  {/* Description */}
                  <p className="text-sm mb-4 flex-grow m-3">
                    {project.description}
                  </p>

                  {/* Bottom actions */}
                  <div className="flex justify-between mt-auto pt-4 border-t border-border">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.github}
                      className="w-10 h-10 rounded-full hover:bg-foreground flex items-center justify-center"
                    >
                      <Github className="w-6 h-6 text-foreground hover:text-background" />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.link}
                      className="w-10 h-10 rounded-full hover:bg-foreground flex items-center justify-center"
                    >
                      <Share2 className="w-6 h-6 text-foreground hover:text-background" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <a
          href="https://github.com/eldrianayera"
          className="flex gap-2 cosmic-button mt-10 animate-bounce"
        >
          Check My Github{" "}
          <span>
            <ArrowBigRightDash />
          </span>
        </a>
      </div>
    </section>
  );
};
