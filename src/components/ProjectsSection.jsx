import {
  ArrowBigRightDash,
  GitBranchIcon,
  Github,
  GithubIcon,
} from "lucide-react";
import { myProjects } from "../lib/myProjects";

export const ProjectsSection = () => {
  return (
    <section className="min-h-screen py-24 px-4" id="projects">
      <div className="container mx-auto flex flex-col items-center">
        {" "}
        <h2 className="text-3xl md:text-4xl font-bold mb-7 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <div className="max-w-2xl">
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
                key={key}
                className="rounded-lg overflow-hidden mx-auto card-hover shadow-xs group bg-card"
              >
                <div className="h-48 overflow-hidden">
                  {" "}
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 scale-80 group-hover:scale-100 rounded-t-lg"
                  />
                </div>

                <div className="p-6">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tools.map((tool, key) => {
                      return (
                        <div
                          key={key}
                          className="text-xs px-2 py-1 rounded-full font-medium bg-primary/40"
                        >
                          {tool}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <h2 className="font-bold text-xl mb-1">{project.name}</h2>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="p-6 ">
                  <a href={project.link}>{<Github />}</a>
                </div>
              </div>
            );
          })}
        </div>
        <a href="" className="flex gap-2 cosmic-button mt-10 animate-bounce">
          Check My Github{" "}
          <span>
            <ArrowBigRightDash />
          </span>
        </a>
      </div>
    </section>
  );
};
