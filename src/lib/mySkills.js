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

export const mySkills = [
  { name: "HTML", level: 90, category: "Frontend", image: htmlImg },
  { name: "CSS", level: 95, category: "Frontend", image: cssImg },
  { name: "XML", level: 80, category: "Frontend", image: xmlImg },
  { name: "Javascript", level: 80, category: "Frontend", image: javascriptImg },
  { name: "Typescript", level: 70, category: "Frontend", image: typescriptImg },
  { name: "React.js", level: 70, category: "Frontend", image: reactImg },
  { name: "Tailwind CSS", level: 90, category: "Frontend", image: tailwindImg },
  { name: "Node.js", level: 80, category: "Backend", image: nodeImg },
  { name: "PostgresSQL", level: 95, category: "Backend", image: postgresqlImg },
  { name: "Python", level: 80, category: "Backend", image: pythonImg },
  { name: "Git/GitHub", level: 90, category: "Tools", image: githubImg },
  { name: "VS Code", level: 95, category: "Tools", image: vscodeImg },
  { name: "Next.js", level: 50, category: "Frontend", image: nextImg },
  { name: "Express", level: 65, category: "Backend", image: expressImg },
];

const categories = [...new Set(mySkills.map((skill) => skill.category))];
