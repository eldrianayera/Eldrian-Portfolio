import { Briefcase, Cpu, Dribbble, Handshake } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-evenly py-24 px-4"
      id="about"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-4xl font-bold">
          About <span className="text-primary">Me</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-4 pl-30">
          <div className="animate-fade-in opacity-0">
            <h3 className="text-2xl text-primary">Passionate Web Developer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              velit voluptate atque tempore fugiat dolorum ratione eaque quis
              amet, recusandae, animi cumque repellat praesentium libero
              nesciunt corrupti incidunt nam quam?
            </p>
          </div>

          <div className="animate-fade-in-delay-1 opacity-0">
            <h3 className="text-2xl text-primary mt-3">Fast Learner</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 px-30">
          <div className="container border-2 h-full flex items-center justify-between bg-primary/20 rounded-xl animate-fade-in-delay-2 opacity-0 pt-2 pb-3">
            <Briefcase className="h-15 w-15 mr-5" />
            <div className="text-left">
              <h4 className="text-xl ">Eldrian</h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                dolorem dolores tempora repellendus optio eius ea
              </p>
            </div>
          </div>
          <div className="container border-2 h-full flex items-center justify-between bg-primary/20 rounded-xl animate-fade-in-delay-3 opacity-0 pt-2 pb-3">
            <Cpu className="h-15 w-15 mr-5" />
            <div className="text-left">
              <h4 className="text-xl ">Ayera</h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                dolorem dolores tempora repellendus optio eius ea
              </p>
            </div>
          </div>
          <div className="container border-2 h-full flex items-center justify-between bg-primary/20 rounded-xl animate-fade-in-delay-4 opacity-0 pt-2 pb-3">
            <Handshake className="h-15 w-15 mr-5" />
            <div className="text-left">
              <h4 className="text-xl ">Muljadi</h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                dolorem dolores tempora repellendus optio eius ea
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};
