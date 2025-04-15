import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Research from "./components/Research";
import WorkExp from "./components/WorkExp";
import Project from "./components/Projects";
import Leetcode from "./components/Leetcode";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Research />
      <WorkExp />
      <Project/>
      <Skills />
      <Leetcode />
      <Contact />

    </div>
  );
}

export default App;
