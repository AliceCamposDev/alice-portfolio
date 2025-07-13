import Header from "./components/header/header";
import About from "./components/about/about";
import Stacks from "./components/stacks/stacks";
import Projects from "./components/projects/projects";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Stacks/>
      <Projects />
    </div>
  );
}

export default App;
