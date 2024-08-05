import { RocketIcon2 } from "../icons";

interface NavbarProps {
  activeSection: string
  handleSectionClick: (section: string) => void
}
const Navbar:React.FC<NavbarProps> = ({ activeSection, handleSectionClick }) => {
    return (
      <div className="flex flex-col items-center text-black bg-white fixed w-72 h-screen">
        
        <div className="pt-48 pb-16">
          <RocketIcon2 />
        </div>
        <nav className="flex flex-col ">
          
          <ul className="flex flex-col w-16 items-start text-xl md:space-y-4 xl:space-y-8">
            <li className={`flex flex-row items-center justify-center cursor-pointer py-2 px-2 ${activeSection === "home" && "font-bold underline"}`}
                onClick={()=>handleSectionClick("home")}>
                <h1>Home </h1>
                {activeSection==='home'&& <div className=" w-3 h-3 bg-white mt-1 ml-2 rounded-full blink"></div>}
            </li>
            <li className={`flex flex-row items-center justify-center cursor-pointer py-2 px-2 ${activeSection === "projects" && "font-bold underline" }`}
                onClick={()=>handleSectionClick("projects")}>
                <h1>Projects </h1>
                {activeSection==='projects'&& <div className=" w-3 h-3 bg-white mt-1 ml-2 rounded-full blink"></div>}
            </li>
            <li className={`flex flex-row items-center justify-center cursor-pointer py-2 px-2 ${activeSection === "about" && "font-bold underline" }`}
                onClick={()=>handleSectionClick("about")}>
                <h1>About </h1>
                {activeSection==='about'&& <div className=" w-3 h-3 bg-white mt-1 ml-2 rounded-full blink"></div>}
            </li>
            <li className={`flex flex-row items-center justify-center cursor-pointer py-2 px-2 ${activeSection === "contact" && "font-bold underline" }`}
                onClick={()=>handleSectionClick("contact")}>
                <h1>Contact </h1>
              {activeSection==='contact'&& <div className=" w-3 h-3 bg-white mt-1 ml-2 rounded-full blink"></div>}
            </li>
          </ul>
        </nav>
        {/* <h1 className="italic absolute bottom-10">Philipe Ayres</h1> */}
      </div>
    );
  };
  
  export default Navbar;
  