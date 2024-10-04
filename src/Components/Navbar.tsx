import { IoRocketOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";

interface NavbarProps {
  activeSection: string;
  handleSectionClick: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, handleSectionClick }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavClick = (section: string) => {
    navigate("/"); // Navigate to the home page
    setTimeout(() => {
      handleSectionClick(section); // Trigger the scroll after a short delay
    }, 50); // Adjust the timeout duration if necessary
  };

  return (
    <div className="flex items-center fixed z-50 justify-center text-black bg-white w-full py-4 tracking-widest">
      <nav className="w-full">
        <ul className="flex justify-end mx-auto text-xl space-x-12 mr-10">
          <Link to="/"
            className={`flex items-center justify-center cursor-pointer py-2 px-2 ${
              activeSection === "home" && "font-bold underline"
            }`}
            onClick={() => handleNavClick("home")}
          >
            <h1>Home</h1>
            {activeSection === "home" && (
              <div className="w-3 h-3 bg-white mt-1 ml-2 rounded-full blink">
                <IoRocketOutline size={30} />
              </div>
            )}
          </Link>
          <Link to="/projects"
            className={`flex items-center justify-center cursor-pointer py-2 px-2 ${
              activeSection === "projects" && "font-bold underline"
            }`}
            onClick={() => handleNavClick("projects")}
          >
            <h1>Projects</h1>
            {activeSection === "projects" && (
              <div className="w-3 h-3 bg-white mt-1 ml-2 rounded-full blink">
                <IoRocketOutline size={30} />
              </div>
            )}
          </Link>
          <Link to="about"
            className={`flex items-center justify-center cursor-pointer py-2 px-2 ${
              activeSection === "about" && "font-bold underline"
            }`}
            onClick={() => handleNavClick("about")}
          >
            <h1>About</h1>
            {activeSection === "about" && (
              <div className="w-3 h-3 bg-white mt-1 ml-2 rounded-full blink">
                <IoRocketOutline size={30} />
              </div>
            )}
          </Link>
          <Link to="contact"
            className={`flex items-center justify-center cursor-pointer py-2 px-2 ${
              activeSection === "contact" && "font-bold underline"
            }`}
            onClick={() => handleNavClick("contact")}
          >
            <h1>Contact</h1>
            {activeSection === "contact" && (
              <div className="w-3 h-3 bg-white mt-1 ml-2 rounded-full blink">
                <IoRocketOutline size={30} />
              </div>
            )}
          </Link>
        </ul>
      </nav>
      <button className="mr-6">
        <RxHamburgerMenu size={30} />
      </button>
    </div>
  );
};

export default Navbar;
