import { useEffect, useRef, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import LifeXP from "./Components/LifeXP";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import { ArrowDown } from "./icons";


const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = () => {
    const homeOffset = homeRef.current.offsetTop;
    const projectsOffset = projectsRef.current.offsetTop;
    const aboutOffset = aboutRef.current.offsetTop;
    const contactOffset = contactRef.current.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    if (scrollPosition >= contactOffset) {
      setActiveSection("contact");
    } else if (scrollPosition >= aboutOffset) {
      setActiveSection("about");
    } else if (scrollPosition >= projectsOffset) {
      setActiveSection("projects");
    } else if (scrollPosition >= homeOffset) {
      setActiveSection("home");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="flex flex-row">
        
        <Navbar activeSection={activeSection} />

        <div className="flex flex-col w-full">
          <Routes>
            <Route path="/" element={
              <>
                <div ref={homeRef}>
                <Home />
                </div>
                <div ref={projectsRef}>
                  <Projects />
                </div>
                <div ref={aboutRef}>
                  <About />
                </div>
                <div ref={contactRef}>
                  <Contact />
                </div>
              </>
              } />
            <Route path="/projects/lifexp" element={<LifeXP />}/>
            <Route path="/projects/pomoprogress" element={<LifeXP />}/>
            <Route path="/projects/imaginai" element={<LifeXP />}/>
          </Routes>
        </div>
        {/* nav arrow */}
        <div className="fixed left-60 bottom-10 flex items-center space-x-2">
          <button className="border mr-2 px-4 transform active:scale-95 transition duration-150 bg-white border-black rounded-sm py-[0.6rem] shadow-sharp-sm icon-hover hover:shadow-sharp-md">
            <ArrowDown />
          </button>
          <h1 className="text-lg">Home</h1>
        </div>
      </div>
    </Router>
  );
};

export default App;
