import kuromi from "../../assets/kuromi.png";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-img">
        <img src={kuromi} alt="kuromi" className="avatar" />
      </div>
      <div className="header-text">
        <h1>Alice Campos</h1>
        <p className="subtitle">full stack dev🖤</p>
      </div>
    </header>
  );
}
