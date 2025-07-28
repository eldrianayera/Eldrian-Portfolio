import { useState } from "react";
import { mySkills } from "../lib/mySkills";
import { cn } from "../lib/utils";

export const SkillsSection = () => {
  const [skillsCategory, setSkillsCategory] = useState("All");

  const categories = [...new Set(mySkills.map((skill) => skill.category))];
  categories.unshift("All");

  const handleCategory = (category) => {
    setSkillsCategory(category);
  };

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
          {categories.map((category) => {
            return (
              <button
                onClick={() => handleCategory(category)}
                className={cn(
                  "cosmic-button scale-80",
                  category === skillsCategory
                    ? "scale-105"
                    : "bg-primary/20 hover:scale-70"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="card-hover flex flex-col bg-primary/30 gap-5 p-4 rounded-lg ">
            <h3 className="self-start font-bold">Javascript</h3>
            <div className="self-center bg-black h-2 w-full rounded-md">
              <div className="w-70/100 h-full bg-primary rounded-md "></div>
            </div>
            <p className="self-end">20%</p>
          </div>
        </div>
      </div>
    </section>
  );
};
