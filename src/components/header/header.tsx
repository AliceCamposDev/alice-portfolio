import kuromi from "/public/assets/project_thumb/kuromi.png";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-img">
        <img src={kuromi} alt="kuromi" className="avatar" />
      </div>
      <div className="header-text">
        <h1>Alice Campos</h1>
        <p className="subtitle">🖤 Data Scientist 💜</p>
        <p className="subtitle">💜 Full-stack developer 🖤</p>
      </div>
    </header>
  );
}
