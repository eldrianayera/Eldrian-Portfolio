import { Briefcase, Cpu, Dribbble, Handshake } from "lucide-react";

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
            <h3 className="text-2xl text-primary font-semibold ">
              Passionate Web Developer
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              velit voluptate atque tempore fugiat dolorum ratione eaque quis
              amet, recusandae, animi cumque repellat praesentium libero
              nesciunt corrupti incidunt nam quam?
            </p>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 pt-4">
              <a className="cosmic-button" href="#contact">
                Get in touch
              </a>
              <a className="cosmic-button bg-primary/10" href="">
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start bg-primary/20 rounded-xl animate-fade-in-delay-2 opacity-0 card-hover p-6">
              <Briefcase className="h-15 w-15 mr-5" />
              <div className="text-left">
                <h4 className="text-xl ">Eldrian</h4>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                  dolorem dolores tempora
                </p>
              </div>
            </div>
            <div className="flex items-start bg-primary/20 rounded-xl animate-fade-in-delay-2 opacity-0 card-hover p-6">
              <Cpu className="h-15 w-15 mr-5" />
              <div className="text-left">
                <h4 className="text-xl ">Ayera</h4>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                  dolorem dolores tempora
                </p>
              </div>
            </div>
            <div className="flex items-start bg-primary/20 rounded-xl animate-fade-in-delay-2 opacity-0 card-hover p-6">
              <Handshake className="h-15 w-15 mr-5" />
              <div className="text-left">
                <h4 className="text-xl ">Muljadi</h4>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                  dolorem dolores tempora
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
