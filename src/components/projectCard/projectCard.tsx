import placeholder from "/public/assets/placeholder.jpg";
import "./projectCard.css";
import { useState } from "react";

export default function ProjectCard({
  title = "Place Holder TTl",
  subtitle = "palce holder subtitle",
  img = placeholder,
  links = [
    { name: "GitHub", url: "https://github.com/alicecamposdev" },
    { name: "Live Demo", url: "https://alicecamposdev.github.io" },
  ],  
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="project"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="projectTitle">
        <p>{title}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
      <div className="projectImgContainer">
        <img className="projectImg" src={img} alt={title} />
      </div>
      <div className={`projectLinks ${isHovered ? "expanded" : ""}`}>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              🔗{link.name}
            </a>
          ))}
        </div>
    </div>
  );
}
