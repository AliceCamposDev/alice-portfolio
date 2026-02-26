import placeholder from "/public/assets/project_thumb/placeholder.jpg";
import "./projectCard.css";

export default function ProjectCard({
  title = "Place Holder TTl",
  subtitle = "place holder subtitle",
  img = placeholder,
  links = [
    { name: "GitHub", url: "https://github.com/alicecamposdev" },
    { name: "Live Demo", url: "https://alicecamposdev.github.io" },
  ],
  desc = "Place holder for project description",
}) {
  return (
    <div className="project">
      <div className="vertical">
        <div className="projectTitle">
          <p>{title}</p>
          <p className="subtitle">{subtitle}</p>
        </div>
        <div className="lowerPart">
          <div className="projectImgContainer">
            <img className="projectImg" src={img} alt={title} />
          </div>
          <div className="moreInfo">{desc}</div>
        </div>
        <div className="projectLinks">
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
    </div>
  );
}
