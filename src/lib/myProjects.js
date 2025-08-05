import saaswhiteImg from "@/lib/images/saaswhite.png";
import eldrimatchImg from "@/lib/images/eldrimatch.png";
import eldreeImg from "@/lib/images/eldree.png";
import keeperImg from "@/lib/images/keeper.png";
import portfolioImg from "@/lib/images/portfolio.png";
import fitwearImg from "@/lib/images/fitwear.png";

export const myProjects = [
  {
    name: "SaaS Landing Page",
    tools: ["React", "Javascript", "TailwindCSS"],
    img: saaswhiteImg,
    link: "https://saa-s-landing-page-eta.vercel.app/",
    github: "https://github.com/eldrianayera/SaaS-Landing-Page",
    description:
      "A responsive and Modern SaaS landing page designed to attract big companies.",
  },
  {
    name: "Portfolio Page",
    tools: ["React", "Javascript", "TailwindCSS"],
    img: portfolioImg,
    link: "https://eldrian-muljadi-portfolio.vercel.app/",
    github: "https://github.com/eldrianayera/Eldrian-Portfolio",

    description:
      "A responsive and visually appealing landing page designed to attract users to a dating app.",
  },
  {
    name: "Eldree Social Media",
    tools: ["Node.js", "Javascript", "Express.js"],
    img: eldreeImg,
    link: "https://github.com/eldrianayera/Eldrian-Portfolio",
    github: "https://github.com/eldrianayera/Eldrian-Portfolio",
    description:
      "A social media platform backend built with Node.js to support user interactions and content sharing.",
  },
  {
    name: "Dating App Landing Page",
    tools: ["HTML", "CSS"],
    img: eldrimatchImg,
    link: "https://github.com/eldrianayera/EldriMatch-Landing-Page",
    github: "https://github.com/eldrianayera/EldriMatch-Landing-Page",
    description:
      "A visually engaging and responsive landing page for a fictional dating app, built with HTML and CSS",
  },
  {
    name: "FitWear FullStack Catalogue",
    tools: [
      "Node.js",
      "Express.js",
      "Javascript",
      "React",
      "PostgresSQL",
      "Supabase",
    ],
    img: fitwearImg,
    link: "https://vercel.com/eldrian-ayera-muljadis-projects/fitwear-frontend",
    github: "https://github.com/eldrianayera/FitWear-Catalogue",
    description:
      "A full-stack e-commerce product catalogue for sports apparel, featuring a dynamic React frontend, Express.js REST API backend, and PostgreSQL database hosted on Supabase. The app allows users to browse, search, and filter products with a clean, responsive UI. Integrated API endpoints serve real product data, and the site is fully deployed with a live backend and frontend for a seamless portfolio showcase.",
  },
];
