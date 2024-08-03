interface NavbarProps {
  activeSection: string
}
const Navbar:React.FC<NavbarProps> = ({ activeSection }) => {
    return (
      <div className="flex flex-col items-center text-black fixed w-[200px]">
        <nav className="flex flex-col items-center pt-48 pl-16">
          <ul className="flex flex-col justify-start text-xl md:space-y-4 xl:space-y-8">
            <li className={`flex flex-row items-center justify-center cursor-pointer py-2 px-2 ${activeSection === "home" && "font-bold underline"}`}>
                <h1>Home </h1>
                {activeSection==='home'&& <div className=" w-3 h-3 bg-black mt-1 ml-2 rounded-full blink"></div>}
            </li>
            <li className={`flex flex-row items-center justify-center cursor-pointer py-2 px-2 ${activeSection === "projects" && "font-bold underline" }`}>
                <h1>Projects </h1>
                {activeSection==='projects'&& <div className=" w-3 h-3 bg-black mt-1 ml-2 rounded-full blink"></div>}
            </li>
            <li className={`flex flex-row items-center justify-center cursor-pointer py-2 px-2 ${activeSection === "about" && "font-bold underline" }`}>
                <h1>About </h1>
                {activeSection==='about'&& <div className=" w-3 h-3 bg-black mt-1 ml-2 rounded-full blink"></div>}
            </li>
            <li className={`flex flex-row items-center justify-center cursor-pointer py-2 px-2 ${activeSection === "contact" && "font-bold underline" }`}>
                <h1>Contact </h1>
              {activeSection==='contact'&& <div className=" w-3 h-3 bg-black mt-1 ml-2 rounded-full blink"></div>}
            </li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default Navbar;
  