import Header from "./components/header/header";
import About from "./components/about/about";
import Stacks from "./components/stacks/stacks";
import Projects from "./components/projects/projects";
import Certifications from "./components/certifications/certifications";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="neon-grid"></div>

      <Header />
      <About />
      <Stacks/>
      <Projects />
      <Certifications />
    </div>
  );
}

export default App;
