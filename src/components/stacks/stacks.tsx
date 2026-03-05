import './stacks.css';

export default function Stacks() {
  return (
    <div className="stacks">
      <h3>Main Stacks</h3>
      {/* i know it could be a new component and etc but it would be toooo much over engineering */}
      <div className="stacks-grid"> 
        
        <div className="stacks-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python"
          />
          <p>Python</p>
        </div>
        
        <div className="stacks-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg"
            alt="Angular"
          />
          <p>Angular</p>
        </div>

        <div className="stacks-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
          />
          <p>React</p>
        </div>
        <div className="stacks-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="Typescript"
          />
          <p>Typescript</p>
        </div>

        <div className="stacks-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="Javascript"
          />
          <p>Javascript</p>
        </div>

        <div className="stacks-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML5"
          />
          <p>HTML</p>
        </div>

        <div className="stacks-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS3"
          />
          <p>CSS</p>
        </div>

        <div className="stacks-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
            alt="Docker"
          />
          <p>Docker</p>
        </div>

        <div className="stacks-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="Git"
          />
          <p>Git</p>
        </div>

      </div>
    </div>
  );
}
