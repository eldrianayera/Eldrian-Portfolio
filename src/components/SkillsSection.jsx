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
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="justify-center hidden md:flex gap-3 mb-12">
          {categories.map((category, key) => {
            return (
              <button
                key={key}
                onClick={() => handleCategory(category)}
                className={cn(
                  "cosmic-button scale-80",
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {filteredSkills.map((skill, key) => {
            return (
              <div
                className="card-hover flex flex-col bg-primary/30 gap-5 p-4 rounded-lg w-full max-w-100 mx-auto"
                key={key}
              >
                <h3 className="self-start font-bold">{skill.name}</h3>
                <div className="self-center bg-black h-2 w-full rounded-md">
                  <div
                    className="h-full bg-primary rounded-md"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="self-end">{skill.level}%</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
