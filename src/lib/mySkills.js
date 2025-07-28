import { Key } from "lucide-react";

export const mySkills = [
  { name: "HTML", level: 90, category: "Frontend" },
  { name: "CSS", level: 95, category: "Frontend" },
  { name: "Javascript", level: 80, category: "Frontend" },
  { name: "React", level: 80, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Node.js", level: 80, category: "Frontend" },
  { name: "PostgresSQL", level: 95, category: "Backend" },
  { name: "Python", level: 95, category: "Backend" },
  { name: "Git/GitHub", level: 90, category: "Tools" },
  { name: "VS Code", level: 95, category: "Tools" },
  { name: "Express", level: 75, category: "Backend" },
  { name: "Indonesian", level: 99, category: "Languages" },
  { name: "Chinese", level: 80, category: "Languages" },
  { name: "English", level: 90, category: "Languages" },
];

const categories = [...new Set(mySkills.map((skill) => skill.category))];
categories.unshift("All");

const skillsCategory = "Frontend";

const calculateSkills = () => {
  const skillsInCategory = mySkills.filter(
    (skill) => skill.category === skillsCategory
  );
};
