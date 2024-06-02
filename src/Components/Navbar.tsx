
// import {FaCode} from "react-icons/fa6"
const Navbar = () =>{
    return(
    <div className="flex flex-col items-center justify-center bg-slate-50 text-black fixed">
        <nav className="flex flex-col items-center  pt-48 pl-10  ">
            {/* <span><FaCode className="italic" size={20}/></span> */}
           
            <ul className="flex flex-col  justify-start text-xl md:space-y-4 xl:space-y-8">
                <li className=" cursor-pointer py-2 px-2 ">
                    Home
                </li>
                <li className="px-2 py-2 cursor-pointer">
                    Projects
                </li>
                <li className="px-2 py-2 cursor-pointer">
                    About
                </li>
                <li className="px-2 py-2 cursor-pointer">
                    Contact
                </li>
                {/* <li className="py-2 px-2 cursor-pointer">
                    Contact
                </li> */}
            </ul>
            {/* <div className="space-x-4 flex justify-center">
                <button><BsGithub size = {28}/></button>
                <button><BsLinkedin size = {28}/></button>
            </div> */}
        
        </nav>
        {/* <div className="w-[80%] bg-black h-[0.2px]"></div> */}
        </div>
    )
}
export default Navbar