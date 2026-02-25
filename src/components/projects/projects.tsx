// import placeholder from "../../../public/assets/project_thumb/placeholder.jpg"
// import d20 from "../../../public/assets/project_thumb/d20.svg"
// import d4 from "../../../public/assets/project_thumb/d4.svg"
// import kuromi from "../../../public/assets/project_thumb/kuromi.png"
// import obsidianLogo from "../../../public/assets/project_thumb/obsidianLogo.png"

import placeholder from "/public/assets/project_thumb/placeholder.jpg";
import d20 from "/public/assets/project_thumb/d20.svg";
import d4 from "/public/assets/project_thumb/d4.svg";
import kuromi from "/public/assets/project_thumb/kuromi.png";
import obsidianLogo from "/public/assets/project_thumb/obsidianLogo.png";
import rexxTorneios from "/public/assets/project_thumb/rexxTorneios.png";

import "./projects.css";
import ProjectCard from "../projectCard/projectCard";

export default function Projects() {
  return (
    <section className="projects">
      <h3>Projects</h3>
      <div className="projectGrid">
        <ProjectCard
          title="Obsidian LLM RAG"
          subtitle="Python RAG System"
          img={obsidianLogo}
          links={[
            {
              name: "GitHub",
              url: "https://github.com/AliceCamposDev/obsidian-rag",
            },
          ]}
          desc="Python LLM assistant that answer questions based in the context of a given Obsidian Vault"
        />
        <ProjectCard
          title="My portfolio"
          subtitle="React website"
          img={kuromi}
          links={[
            {
              name: "GitHub",
              url: "https://github.com/AliceCamposDev/alice-portfolio",
            },
            {
              name: "Live demo",
              url: "https://alice-portfolio-five.vercel.app/",
            },
          ]}
          desc="simple front-end to show my projects I'M NOT A DESIGNER, SORRY"
        />
        <ProjectCard
          title="Guerrilha Urbana"
          subtitle="Angular website"
          img={d20}
          links={[
            {
              name: "GitHub",
              url: "https://github.com/AliceCamposDev/rpg-guerrilha-urbana",
            },
            {
              name: "Live demo",
              url: "https://alicecamposdev.github.io/rpg-guerrilha-urbana/",
            },
          ]}
          desc="Angular website for my TTRPG system, help players navigate trough game material and automate character sheet creation"
        />
        <ProjectCard
          title="Guerrilha Urbana Backend"
          subtitle="Python / Fast API"
          img={d4}
          links={[
            {
              name: "GitHub",
              url: "https://github.com/AliceCamposDev/rpg-guerrilha-urbana-back",
            },
            {
              name: "Live demo",
              url: "https://rpg-guerrilha-urbana-back-fastapi.vercel.app/",
            },
          ]}
          desc="Back end to serve the TTRPG book to the front-end as a graph through a API"
        />
        {/* <ProjectCard title="Rexx Network coin" subtitle="Cryptocurrency" img={placeholder} /> */}
        <ProjectCard
          title="TODO List :/"
          subtitle="ReacJs NodeJs MongoDb"
          img={placeholder}
          links={[
            {
              name: "Front GitHub",
              url: "https://github.com/AliceCamposDev/Front-TODO-list-Robbyson",
            },
            {
              name: "Back GitHub",
              url: "https://github.com/AliceCamposDev/Back-TODO-list-Robbyson",
            },
          ]}
          desc="simple & boring todo list, using NodeJs, ReactJs n MongoDb"
        />
        <ProjectCard
          title="Rexx Network"
          subtitle="React TS website"
          img={rexxTorneios}
          links={[
            {
              name: "GitHub",
              url: "https://github.com/AliceCamposDev/rexx-network",
            },
          ]}
          desc="website to organize (totally legal) league of legends championships (also never finished)"
        />
      </div>
    </section>
  );
}
