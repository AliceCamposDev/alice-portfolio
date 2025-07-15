import placeholder from '../../assets/placeholder.jpg'
import './projectCard.css'

export default function ProjectCard({ title = "Infinity Shards", subtitle = "card game", img = placeholder }) {
  return (
    <div className="project">
      <div className="projectTitle">
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
      <div className="projectImgContainer">
        <img className="projectImg" src={img} alt={title} />
      </div>
    </div>
  );
}