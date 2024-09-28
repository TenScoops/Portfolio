import { useEffect, useRef, useState } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import ImaginAi from "./Components/ImaginAI";
import LifeXP from "./Components/LifeXP";
import Navbar from "./Components/Navbar";
import Pomoprogress from "./Components/Pomoprogress";
import Projects from "./Components/Projects";
// import { RocketIcon2 } from "./icons";
import { RxRocket } from "react-icons/rx";

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
  }

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
  }

  const handleNextSection = () => {
    if (activeSection === "home") {
      handleSectionClick("projects");
    } else if (activeSection === "projects") {
      handleSectionClick("about");
    } else if (activeSection === "about") {
      handleSectionClick("contact");
    } else if(activeSection === "contact") {
      handleSectionClick("home")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling]); 

  return (
    <Router>
      <div className="flex flex-row w-full font-noto tracking-wide ">
        <Navbar activeSection={activeSection} handleSectionClick={handleSectionClick} />
        <div className="flex flex-col w-full space-y-32 xl:space-y-0 xl:ml-60 3xl:ml-0">
          <div className="fixed flex top-5 left-5 xl:hidden z-50 items-center">
            <RxRocket size={40}/>
            {/* <RocketIcon2 /> */}
            {/* <h1 className="text-lg ml-2 italic">Philipe Ayres</h1> */}
            </div>
          <Routes>
            <Route path="/" element={
              <>
                <div className="w-full" ref={homeRef}><Home handleSectionClick={handleSectionClick}/></div>
                <div className="w-full" ref={projectsRef}><Projects /></div>
                <div className="w-full" ref={aboutRef}><About /></div>
                <div className="w-full" ref={contactRef}><Contact /></div>

                {/* arrow button */}
                <div className="hidden fixed left-10 xl:left-60 bottom-10 xl:flex items-center space-x-2">
                  {activeSection === "contact"?<button className="border mr-2 px-2 transform active:scale-95 transition duration-150 bg-white border-black rounded py-2 shadow-sharp-md hover:shadow-sharp-lg icon-hover "
                          onClick={handleNextSection}>
                    <BsArrowUp size={30}/>
                  </button>:
                  <button className="border mr-2 px-2 transform active:scale-95 transition duration-150 bg-white border-black rounded py-2 shadow-sharp-md hover:shadow-sharp-lg icon-hover "
                          onClick={handleNextSection}>
                    <BsArrowDown size={30}/>
                  </button>}
                  {/* <h1 className="text-lg">Home</h1> */}
                </div>
              </>
            } />
            <Route path="/projects/lifexp" element={<LifeXP handleSectionClick={handleSectionClick}/>} />
            <Route path="/projects/pomoprogress" element={<Pomoprogress handleSectionClick={handleSectionClick}/>} />
            <Route path="/projects/imaginai" element={<ImaginAi handleSectionClick={handleSectionClick}/>} />
          </Routes>
        </div>
        {/* nav arrow */}
      </div>
    </Router>
  );
};

export default App;
