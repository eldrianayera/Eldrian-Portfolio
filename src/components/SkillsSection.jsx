import { useState } from "react";
import { mySkills } from "../lib/mySkills";
import { cn } from "../lib/utils";

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [...new Set(mySkills.map((skill) => skill.category))];
  categories.unshift("All");

  const handleCategory = (category) => {
    setActiveCategory(category);
  };

  const filteredSkills =
    activeCategory === "All"
      ? mySkills
      : mySkills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      className="relative min-h-screen flex flex-col py-24 px-4"
      id="skills"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 data-aos="fade-up" className="section-header">
          My <span className="text-primary">Skills</span>
        </h2>
        <div
          data-aos="fade-up"
          className="justify-center hidden md:flex gap-3 mb-12"
        >
          {categories.map((category, key) => {
            return (
              <button
                data-aos="fade-up"
                key={key}
                onClick={() => handleCategory(category)}
                className={cn(
                  "cosmic-button scale-80 rounded-lg py-1",
                  category === activeCategory
                    ? "scale-105"
                    : "bg-primary/20 hover:scale-70"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {filteredSkills.map((skill, key) => {
            const delay = Math.floor(Math.random() * 4);
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={(key % 3) * 200}
                className="animate-float card-hover flex flex-col bg-foreground text-background gap-5 p-4 rounded-lg w-full max-w-100 mx-auto"
                style={{
                  animationDelay: `${delay}s`,
                }}
                key={key}
              >
                <div className="flex items-center justify-evenly">
                  <img src={skill.image} alt={skill.name} className="h-12" />
                  <h3 className="font-bold">{skill.name}</h3>
                </div>
                {/* <div className="self-center bg-black h-2 w-full rounded-md">
                  <div
                    className="h-full bg-primary rounded-md"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
