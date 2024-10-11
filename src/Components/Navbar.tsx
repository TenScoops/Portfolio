import { useEffect, useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { IoRocketOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  activeSection: string;
  handleSectionClick: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, handleSectionClick }) => {
  // const navigate = useNavigate();
  const location = useLocation();
  const [openOption, setOpenOption] = useState(false);

  // Retrieve active section from localStorage on mount
  useEffect(() => {
    const savedSection = localStorage.getItem("activeSection");
    if (savedSection && location.pathname !== '/') {
      handleSectionClick(savedSection);
    }
  }, [location.pathname, handleSectionClick]);

  const handleNavClick = (section: string) => {
    setOpenOption(false)
    setTimeout(() => {
      handleSectionClick(section); // Trigger the scroll after a short delay
      localStorage.setItem("activeSection", section); // Store active section in localStorage
    }, 50);
  };

  return (
    <div className="flex items-center fixed z-50 justify-center border-b border-gray-400 text-black bg-transparent bg-white w-full py-5 tracking-widest">
      <nav className="hidden md:block w-full">
        <ul className="flex justify-end items-center mx-auto text-xl space-x-12 mr-10">
          <Link to="/"
            className={`flex items-center justify-center cursor-pointer py-2 px-2 ${
              activeSection === "home" && "font-bold underline"
            }`}
            onClick={() => handleNavClick("home")}
          >
            <h1>Home</h1>
            {activeSection === "home" && (
              <div className="mt-1 ml-2 rounded-full blink">
                <IoRocketOutline size={26} />
              </div>
            )}
          </Link>
          <Link to="/projects"
            className={`flex items-center justify-center cursor-pointer py-2 px-2 icon-hover3 ${
              activeSection === "projects" && "font-bold underline"
            }`}
            onClick={() => handleNavClick("projects")}
          >
            <h1>Projects</h1>
            {activeSection === "projects" && (
              <div className="mt-1 ml-2 rounded-full blink">
                <IoRocketOutline size={26} />
              </div>
            )}
          </Link>
          <Link to="about"
            className={`flex items-center justify-center cursor-pointer py-2 px-2 icon-hover3 ${
              activeSection === "about" && "font-bold underline"
            }`}
            onClick={() => handleNavClick("about")}
          >
            <h1>About</h1>
            {activeSection === "about" && (
              <div className="mt-1 ml-2 rounded-full blink">
                <IoRocketOutline size={26} />
              </div>
            )}
          </Link>
          <Link to="contact"
            className={`flex items-center justify-center cursor-pointer py-2 px-2 icon-hover3 ${
              activeSection === "contact" && "font-bold underline"
            }`}
            onClick={() => handleNavClick("contact")}
          >
            <h1>Contact</h1>
            {activeSection === "contact" && (
              <div className="mt-1 ml-2 rounded-full blink">
                <IoRocketOutline size={26} />
              </div>
            )}
          </Link>
        </ul>
      </nav>
      {/* hamburger button */}
      <button onClick={() => setOpenOption(true)} className="absolute right-5 top-1 md:hidden ">
        <RxHamburgerMenu size={35} />
      </button>
      
      {/* small nav */}
      <div className={`${openOption ? 'flex' : 'hidden'} flex-col items-center justify-center fixed inset-0 bg-white z-50`}>
        <button onClick={() => setOpenOption(false)} className="absolute top-1 right-5"><HiOutlineXMark size={35} /></button>
        <nav>
          <ul className="text-xl space-y-6 flex flex-col items-start w-[100px] slide-right">
            <Link to="/"
              className={`flex items-center justify-center cursor-pointer py-2 px-2 ${
                activeSection === "home" && "font-bold underline"
              }`}
              onClick={() => handleNavClick("home")}
            >
              <h1>Home</h1>
              {activeSection === "home" && (
                <div className="mt-1 ml-2 rounded-full blink">
                  <IoRocketOutline size={26} />
                </div>
              )}
            </Link>
            <Link to="/projects"
              className={`flex items-center justify-center cursor-pointer py-2 px-2 icon-hover3 ${
                activeSection === "projects" && "font-bold underline"
              }`}
              onClick={() => handleNavClick("projects")}
            >
              <h1>Projects</h1>
              {activeSection === "projects" && (
                <div className="mt-1 ml-2 rounded-full blink">
                  <IoRocketOutline size={26} />
                </div>
              )}
            </Link>
            <Link to="about"
              className={`flex items-center justify-center cursor-pointer py-2 px-2 icon-hover3 ${
                activeSection === "about" && "font-bold underline"
              }`}
              onClick={() => handleNavClick("about")}
            >
              <h1>About</h1>
              {activeSection === "about" && (
                <div className="mt-1 ml-2 rounded-full blink">
                  <IoRocketOutline size={26} />
                </div>
              )}
            </Link>
            <Link to="contact"
              className={`flex items-center justify-center cursor-pointer py-2 px-2 icon-hover3 ${
                activeSection === "contact" && "font-bold underline"
              }`}
              onClick={() => handleNavClick("contact")}
            >
              <h1>Contact</h1>
              {activeSection === "contact" && (
                <div className="mt-1 ml-2 rounded-full blink">
                  <IoRocketOutline size={26} />
                </div>
              )}
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
