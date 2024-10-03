import { useNavigate } from "react-router-dom";
// import { RocketIcon2 } from "../icons";
import { IoRocketOutline } from "react-icons/io5";
import { RxRocket } from "react-icons/rx";

interface NavbarProps {
  activeSection: string
  handleSectionClick: (section: string) => void
}
const Navbar:React.FC<NavbarProps> = ({ activeSection, handleSectionClick }) => {
  const navigate = useNavigate();  // Initialize useNavigate

  const handleNavClick = (section: string) => {
    navigate("/");  // Navigate to the home page
    setTimeout(() => {
      handleSectionClick(section);  // Trigger the scroll after a short delay
    }, 50);  // Adjust the timeout duration if necessary
  };
    return (
      <div className="hidden xl:flex flex-col items-center text-black bg-transparent fixed w-72 h-screen">
        
        <div className="pt-48 pb-16">
          {/* <RocketIcon2 /> */}
          <RxRocket size={35}/>
        </div>
        <nav className=" ">
          
          <ul className="flex flex-col w-16 items-start text-xl md:space-y-4 xl:space-y-8">
            <li className={`flex flex-row items-center justify-center cursor-pointer py-2 px-2 ${activeSection === "home" && "font-bold underline"}`}
                onClick={()=>handleNavClick("home")}>
                <h1>Home </h1>
                {activeSection==='home'&& <div className=" w-3 h-3 bg-white mt-1 ml-2 rounded-full blink"><IoRocketOutline size={30}/></div>}
            </li>
            <li className={`flex flex-row items-center justify-center cursor-pointer py-2 px-2 ${activeSection === "projects" && "font-bold underline" }`}
                onClick={()=>handleNavClick("projects")}>
                <h1>Projects </h1>
                {activeSection==='projects'&& <div className=" w-3 h-3 bg-white mt-1 ml-2 rounded-full blink"><IoRocketOutline size={30}/></div>}
            </li>
            <li className={`flex flex-row items-center justify-center cursor-pointer py-2 px-2 ${activeSection === "about" && "font-bold underline" }`}
                onClick={()=>handleNavClick("about")}>
                <h1>About </h1>
                {activeSection==='about'&& <div className=" w-3 h-3 bg-white mt-1 ml-2 rounded-full blink"><IoRocketOutline size={30}/></div>}
            </li>
            <li className={`flex flex-row items-center justify-center cursor-pointer py-2 px-2 ${activeSection === "contact" && "font-bold underline" }`}
                onClick={()=>handleNavClick("contact")}>
                <h1>Contact </h1>
              {activeSection==='contact'&& <div className=" w-3 h-3 bg-white mt-1 ml-2 rounded-full blink"><IoRocketOutline size={30}/></div>}
            </li>
          </ul>
        </nav>
        {/* <h1 className="italic absolute bottom-10">Philipe Ayres</h1> */}
      </div>
    );
  };
  
  export default Navbar;
  