import { ArrowBigRightDash, Github, Share2 } from "lucide-react";
import { myCertifications } from "../lib/myCertifications";

export const CertificatesSection = () => {
  return (
    <section className="min-h-screen py-24 px-4" id="certifications">
      <div className="container mx-auto flex flex-col items-center">
        {" "}
        <h2 data-aos="fade-up" className="section-header">
          My <span className="text-primary"> Certifications</span>
        </h2>
        <div data-aos="fade-up" className="max-w-2xl">
          <p>
            A showcase of the certificates I’ve earned — highlighting my
            dedication and commitment to continuous learning.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {myCertifications.map((c) => (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={c.link}
              data-aos="zoom-in"
              key={c.name}
              className="bg-card rounded-xl shadow-xl overflow-hidden transition-shadow duration-300 card-hover group"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:scale-128 max-w-xs mx-auto">
                  {c.name}
                </h3>
                <p className="text-primary text-sm mb-4 group-hover:scale-158">
                  {c.issuer}
                </p>

                <div className="relative h-80 rounded-lg overflow-hidden mb-4">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
