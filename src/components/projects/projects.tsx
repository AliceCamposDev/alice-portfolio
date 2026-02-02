// import placeholder from "../../../public/assets/project_thumb/placeholder.jpg"
// import d20 from "../../../public/assets/project_thumb/d20.svg"
// import d4 from "../../../public/assets/project_thumb/d4.svg"
// import kuromi from "../../../public/assets/project_thumb/kuromi.png"
// import obsidianLogo from "../../../public/assets/project_thumb/obsidianLogo.png"

import placeholder from "/public/assets/project_thumb/placeholder.jpg"
import d20 from  "/public/assets/project_thumb/d20.svg"
import d4 from "/public/assets/project_thumb/d4.svg"
import kuromi from "/public/assets/project_thumb/kuromi.png"
import obsidianLogo from "/public/assets/project_thumb/obsidianLogo.png"


import "./projects.css"
import ProjectCard from "../projectCard/projectCard";

export default function Projects() {
  return (
    <>
      <h3 className = "sectionTitle">Projects</h3>
      <div className="projectGrid">
        <ProjectCard title="My portfolio" subtitle="React website to show my projects" img={kuromi} links={[{name: "GitHub", url: "https://github.com/AliceCamposDev/alice-portfolio"},{name: "Live demo", url:"https://alice-portfolio-five.vercel.app/"}]}/>
        <ProjectCard title="Guerrilha Urbana" subtitle="Angular website for a TTRPG game" img={d20} links={[{name: "GitHub", url: "https://github.com/AliceCamposDev/rpg-guerrilha-urbana"},{name: "Live demo", url:"https://alicecamposdev.github.io/rpg-guerrilha-urbana/"}]}/>
        <ProjectCard title="Guerrilha Urbana Backend" subtitle="Python fast api for Guerrilha Urbana rpg" img={d4} links={[{name: "GitHub", url: "https://github.com/AliceCamposDev/rpg-guerrilha-urbana-back"}]}/>
        <ProjectCard title="Obsidian LLM RAG" subtitle="Context retrieve and RAG implementation for Obsidian vaults" img={obsidianLogo} links={[{name: "GitHub", url: "https://github.com/AliceCamposDev/obsidian-rag"}]}/>
        <ProjectCard title="Rexx Network coin" subtitle="Cryptocurrency" img={placeholder} />
        <ProjectCard title="My New Project" subtitle="React App" img={placeholder} />

      </div>
       
    </>
  );
}
