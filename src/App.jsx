import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="font-google overflow-x-hidden">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
