import { myProjects } from "../lib/myProjects";

export const ProjectsSection = () => {
  return (
    <section className="min-h-screen flex flex-col py-24 px-4" id="projects">
      <div className="container mx-auto max-w-2xl">
        {" "}
        <h2 className="text-3xl md:text-4xl font-bold mb-7 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p>
          A showcase of the websites and applications I've built — Each project
          reflects my growth, creativity, and passion for clean, functional
          design.
        </p>
        <div className="border-4 mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {myProjects.map((project) => {
            return (
              <div>
                <img src={project.img} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
