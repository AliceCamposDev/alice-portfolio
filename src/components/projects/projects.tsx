import placeholder from "../../assets/placeholder.jpg"
import "./projects.css"
import ProjectCard from "../projectCard/projectCard";

export default function Projects() {
  return (
    <>
      <h3>Projects</h3>
      <div className="projectGrid">
        <ProjectCard title="My New Project" subtitle="React App" img={placeholder} />
        <ProjectCard title="My New Project" subtitle="React App" img={placeholder} />
        <ProjectCard title="My New Project" subtitle="React App" img={placeholder} />
        <ProjectCard title="My New Project" subtitle="React App" img={placeholder} />
        <ProjectCard title="My New Project" subtitle="React App" img={placeholder} />
        <ProjectCard title="My New Project" subtitle="React App" img={placeholder} />
        <ProjectCard title="My New Project" subtitle="React App" img={placeholder} />

      </div>
       
    </>
  );
}
