import './stacks.css';

export default function Stacks() {
  return (
    <div className="stacks">
      <h3>Main Stacks</h3>
      <div className="stacks-grid">
        <div className="stacks-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
          />
          <p>React</p>
        </div>
        <div className="stacks-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python"
          />
          <p>Python</p>
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
      </div>
    </div>
  );
}
