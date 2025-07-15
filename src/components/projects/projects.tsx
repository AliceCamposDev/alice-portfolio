import placeholder from "../../assets/placeholder.jpg"
import "./projects.css"
import ProjectCard from "../projectCard/projectCard";

export default function Projects() {
  return (
    <>
      <h3 className = "sectionTitle">Projects</h3>
      <div className="projectGrid">
        <ProjectCard title="Infinity Shards" subtitle="Card Game" img={placeholder} />
        <ProjectCard title="Grind Coin" subtitle="Cryptocurrency" img={placeholder} />
        <ProjectCard title="Humor Analyzer" subtitle="NLP / ML" img={placeholder} />
        <ProjectCard title="My New Project" subtitle="React App" img={placeholder} />
        <ProjectCard title="My New Project" subtitle="React App" img={placeholder} />
        <ProjectCard title="My New Project" subtitle="React App" img={placeholder} />
        <ProjectCard title="My New Project" subtitle="React App" img={placeholder} />

      </div>
       
    </>
  );
}
