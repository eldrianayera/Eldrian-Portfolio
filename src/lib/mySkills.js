import htmlImg from "/skills-images/html.png";
import cssImg from "/skills-images/css.png";
import xmlImg from "/skills-images/xml.png";
import javascriptImg from "/skills-images/javascript.png";
import typescriptImg from "/skills-images/typescript.png";
import reactImg from "/skills-images/react.png";
import tailwindImg from "/skills-images/tailwind.png";
import nodeImg from "/skills-images/node.png";
import postgresqlImg from "/skills-images/postgresql.png";
import pythonImg from "/skills-images/python.png";
import githubImg from "/skills-images/github.png";
import vscodeImg from "/skills-images/vscode.png";
import nextImg from "/skills-images/next.png";
import expressImg from "/skills-images/express.png";
import djangoImg from "/skills-images/django.png";
import pandasImg from "/skills-images/pandas.png";
import dockerImg from "/skills-images/docker.png";

export const mySkills = [
  // --- Backend ---
  { name: "PostgreSQL", level: 95, category: "Backend", image: postgresqlImg },
  { name: "Django", level: 65, category: "Backend", image: djangoImg },
  { name: "Python", level: 80, category: "Backend", image: pythonImg },
  { name: "Express", level: 65, category: "Backend", image: expressImg },
  { name: "Node.js", level: 80, category: "Backend", image: nodeImg },

  // --- Data / Analysis ---
  { name: "Pandas", level: 65, category: "Data", image: pandasImg },

  // --- Tools ---
  { name: "Docker", level: 65, category: "Tools", image: dockerImg },
  { name: "Git/GitHub", level: 90, category: "Tools", image: githubImg },
  { name: "VS Code", level: 95, category: "Tools", image: vscodeImg },

  // --- Frontend ---
  { name: "React.js", level: 70, category: "Frontend", image: reactImg },
  { name: "Next.js", level: 50, category: "Frontend", image: nextImg },
  { name: "Tailwind CSS", level: 90, category: "Frontend", image: tailwindImg },
  { name: "Javascript", level: 80, category: "Frontend", image: javascriptImg },
  { name: "Typescript", level: 70, category: "Frontend", image: typescriptImg },
  { name: "HTML", level: 90, category: "Frontend", image: htmlImg },
  { name: "CSS", level: 95, category: "Frontend", image: cssImg },
  { name: "XML", level: 80, category: "Frontend", image: xmlImg },
];

const categories = [...new Set(mySkills.map((skill) => skill.category))];
