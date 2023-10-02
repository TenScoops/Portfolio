
// import {FaCode} from "react-icons/fa6"
import {BsGithub, BsLinkedin} from "react-icons/bs"
import {GiLibertyWing} from "react-icons/gi"
const Navbar = () =>{
    return(
    <div className="flex flex-col items-center justify-center bg-slate-50 text-black">
        <nav className="flex flex-row justify-between items-center md:flex-col  py-1 w-[85%]">
            {/* <span><FaCode className="italic" size={20}/></span> */}
            <div className=" px-2 py-1 rounded-full">
                {/* <h1 className="font-bold text-base tracking-wider">PA</h1> */}
                <GiLibertyWing size={30}/>
            </div>
            <ul className="flex flex-row items-center space-x-8">
                <div><li className=" text-black border-b-[3px] border-black cursor-pointer py-[6px] px-4">
                    Home
                </li></div>
                <li className="py-2 px-2 cursor-pointer">
                    Projects
                </li>
                <li className="py-2 px-2 cursor-pointer">
                    About
                </li>
                {/* <li className="py-2 px-2 cursor-pointer">
                    Contact
                </li> */}
            </ul>
            <div className="space-x-4 flex justify-center">
                <button><BsGithub size = {28}/></button>
                <button><BsLinkedin size = {28}/></button>
            </div>
        
        </nav>
        {/* <div className="w-[80%] bg-black h-[0.2px]"></div> */}
        </div>
    )
}
export default Navbar