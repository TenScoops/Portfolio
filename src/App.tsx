import { useEffect, useRef, useState } from "react";
// import { BsArrowDown } from "react-icons/bs";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import ImaginAi from "./Components/ImaginAI";
import LifeXP from "./Components/LifeXP";
import Navbar from "./Components/Navbar";
import Pomoprogress from "./Components/Pomoprogress";
import Projects from "./Components/Projects";


const App = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    setIsScrolling(true);

    if (section === "home" && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "projects" && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }

    // Adjust the timeout based on your smooth scroll duration
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000); 
  };

  const handleScroll = () => {
    if (isScrolling === false) {  // Only run if not scrolling 
      if (homeRef.current && projectsRef.current && aboutRef.current && contactRef.current) {
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
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling]); 

  return (
    <Router>
      <div className="flex flex-row w-full">
        <Navbar activeSection={activeSection} handleSectionClick={handleSectionClick} />
        <div className="flex flex-col w-full ">
          <Routes>
            <Route path="/" element={
              <>
                <div className="w-full" ref={homeRef}><Home handleSectionClick={handleSectionClick}/></div>
                <div className="w-full" ref={projectsRef}><Projects /></div>
                <div className="w-full" ref={aboutRef}><About /></div>
                <div className="w-full" ref={contactRef}><Contact /></div>
              </>
            } />
            <Route path="/projects/lifexp" element={<LifeXP />} />
            <Route path="/projects/pomoprogress" element={<Pomoprogress />} />
            <Route path="/projects/imaginai" element={<ImaginAi />} />
          </Routes>
        </div>
        {/* nav arrow */}
        {/* <div className="fixed left-60 bottom-10 flex items-center space-x-2">
          <button className="border mr-2 px-2 transform active:scale-95 transition duration-150 bg-white border-black rounded-sm py-2 shadow-sharp-md icon-hover ">
            <BsArrowDown size={30}/>
          </button>
          <h1 className="text-lg">Home</h1>
        </div> */}
      </div>
    </Router>
  );
};

export default App;
