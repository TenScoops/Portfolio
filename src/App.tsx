import { useEffect, useRef, useState } from "react";
// import { BsArrowDown, BsArrowUp } from "react-icons/bs";
// import { RxRocket } from "react-icons/rx";
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
  const [loading, setLoading] = useState(true); // State for loading
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

    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  }

  // const handleScroll = () => {
  //   if (isScrolling === false) {
  //     if (homeRef.current && projectsRef.current && aboutRef.current && contactRef.current) {
  //       const homeOffset = homeRef.current.offsetTop;
  //       const projectsOffset = projectsRef.current.offsetTop;
  //       const aboutOffset = aboutRef.current.offsetTop;
  //       const contactOffset = contactRef.current.offsetTop;
  //       const scrollPosition = window.scrollY + window.innerHeight / 2;

  //       if (scrollPosition >= contactOffset) {
  //         setActiveSection("contact");
  //       } else if (scrollPosition >= aboutOffset) {
  //         setActiveSection("about");
  //       } else if (scrollPosition >= projectsOffset) {
  //         setActiveSection("projects");
  //       } else if (scrollPosition >= homeOffset) {
  //         setActiveSection("home");
  //       }
  //     }
  //   }
  // }

  // const handleNextSection = () => {
  //   if (activeSection === "home") {
  //     handleSectionClick("projects");
  //   } else if (activeSection === "projects") {
  //     handleSectionClick("about");
  //   } else if (activeSection === "about") {
  //     handleSectionClick("contact");
  //   } else if (activeSection === "contact") {
  //     handleSectionClick("home");
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [isScrolling]);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); //loading duration
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Render loading screen when the app is still loading
    return (
      <div className="flex items-center justify-center w-full h-screen bg-white">
        <div className="animate-spin rounded-full h-24 w-24 border-b-4 border-black"> </div>
        <p className="ml-4 text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <Router>
      <div className="flex flex-row w-full font-noto tracking-wider">
        
        <div className="w-full flex flex-col">
          {/* <div className="fixed flex top-5 left-5 xl:hidden z-50 items-center">
            <RxRocket size={40} />
          </div> */}
          <Navbar activeSection={activeSection} handleSectionClick={handleSectionClick} />

          <Routes>
            {/* main routes */}
            <Route path="/"element={<div className="w-full" ref={homeRef}><Home /></div>} />
            <Route path="/projects" element={<div className="w-full" ref={projectsRef}><Projects /></div>} />
            <Route path="/about" element={<div className="w-full" ref={aboutRef}><About /></div>} />
            <Route path="/contact" element={<div className="w-full" ref={contactRef}><Contact /></div>}/>
            {/* secondary routes */}
            <Route path="/projects/lifexp" element={<LifeXP handleSectionClick={handleSectionClick} />} />
            <Route path="/projects/pomoprogress" element={<Pomoprogress handleSectionClick={handleSectionClick} />} />
            <Route path="/projects/imaginai" element={<ImaginAi handleSectionClick={handleSectionClick} />} />
            
          </Routes>
        </div>

        {/* <div className="w-full" ref={projectsRef}><Projects /></div>
                  <div className="w-full" ref={aboutRef}><About /></div>
                  <div className="w-full" ref={contactRef}><Contact /></div> */}
      </div>

       {/* arrow button */}
                  {/* <div className="hidden fixed left-10 xl:left-60 bottom-10 xl:flex items-center space-x-2">
                    {activeSection === "contact" ? (
                      <button
                        className="border mr-2 px-2 transform active:scale-95 transition duration-150 bg-white border-black rounded py-2 shadow-sharp-md hover:shadow-sharp-lg icon-hover"
                        onClick={handleNextSection}
                      >
                        <BsArrowUp size={30} />
                      </button>
                    ) : (
                      <button
                        className="border mr-2 px-2 transform active:scale-95 transition duration-150 bg-white border-black rounded py-2 shadow-sharp-md hover:shadow-sharp-lg icon-hover"
                        onClick={handleNextSection}
                      >
                        <BsArrowDown size={30} />
                      </button>
                    )}
                  </div> */}
    </Router>
  );
};

export default App;
