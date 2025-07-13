import "./about.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-list">
        <p>Languages: English and Portuguese</p>
        <p>Location: Brazil</p>
        <p>Age: 22yo</p>
      </div>
      <div className="about-buttons">
        <button
          className="button-github"
          onClick={() =>
            window.open("https://github.com/alicecamposdev", "_blank")
          }
        >
          <p>Github</p>
        </button>
        <button
          className="button-linkedin"
          onClick={() =>
            window.open("https://linkedin.com/in/alicecamposdev", "_blank")
          }
        >
          <p>Linkedin</p>
        </button>
        <button
          className="button-youtube"
          onClick={() =>
            window.open("https://www.youtube.com/@alicecamposdev", "_blank")
          }
        >
          <p>YouTube</p>
        </button>
      </div>
    </div>
  );
}
