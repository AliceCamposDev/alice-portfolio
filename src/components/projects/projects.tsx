import placeholder from "../../assets/placeholder.jpg"
import "./projects.css"

export default function Projects() {
  return (
    <>
      <h3>Projects</h3>
      <div className="projectGrid">
         <div className="project">
          <div className="projectTitle">
            <p>Infinity Shards</p>
            <p>card game</p>
          </div>
          <div className = "projectImgContainer">
            <img className = "projectImg" src={placeholder} alt="" />
          </div>
  
          <a href="#">View Project</a>
        </div>

        <div className="project">
          <div className="projectTitle">
            <p>Infinity Shards</p>
            <p>card game</p>
          </div>
          <div className = "projectImgContainer">
            <img className = "projectImg" src={placeholder} alt="" />
          </div>
  
          <a href="#">View Project</a>
        </div>
        <div className="project">
          <div className="projectTitle">
            <p>Infinity Shards</p>
            <p>card game</p>
          </div>
          <div className = "projectImgContainer">
            <img className = "projectImg" src={placeholder} alt="" />
          </div>
  
          <a href="#">View Project</a>
        </div>
        <div className="project">
          <div className="projectTitle">
            <p>Infinity Shards</p>
            <p>card game</p>
          </div>
          <div className = "projectImgContainer">
            <img className = "projectImg" src={placeholder} alt="" />
          </div>
  
          <a href="#">View Project</a>
        </div>
        <div className="project">
          <div className="projectTitle">
            <p>Infinity Shards</p>
            <p>card game</p>
          </div>
          <div className = "projectImgContainer">
            <img className = "projectImg" src={placeholder} alt="" />
          </div>
  
          <a href="#">View Project</a>
        </div>
      </div>
       
    </>
  );
}
