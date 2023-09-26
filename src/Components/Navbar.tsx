
// import {FaCode} from "react-icons/fa6"
import {BsGithub, BsLinkedin} from "react-icons/bs"
const Navbar = () =>{
    return(
    <div className="flex flex-col items-center justify-center bg-slate-800 text-white">
        <nav className="flex flex-row justify-between items-center md:flex-col border-b border-slate-800 py-1 w-[95%]">
            {/* <span><FaCode className="italic" size={20}/></span> */}
            <div className="bg-white text-black px-2 py-2 rounded-full">
                <h1 className="font-bold text-base tracking-wider">PA</h1>
            </div>
            <ul className="flex flex-row space-x-8">
                <div><li className="bg-white text-black py-[6px] px-4 rounded">
                    Home
                </li></div>
                <li className="py-2 px-2">
                    Projects
                </li>
                <li className="py-2 px-2">
                    About
                </li>
            </ul>
            <div className="space-x-4 flex justify-center">
                <button><BsGithub size = {30}/></button>
                <button><BsLinkedin size = {30}/></button>
            </div>
        
        </nav>
        {/* <div className="w-[80%] bg-black h-[0.2px]"></div> */}
        </div>
    )
}
export default Navbar