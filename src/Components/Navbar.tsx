
// import {FaCode} from "react-icons/fa6"
import {BsGithub, BsLinkedin} from "react-icons/bs"
const Navbar = () =>{
    return(
    <div className="flex items-center justify-center">
        <nav className="flex flex-row justify-between items-center md:flex-col border-b border-slate-500 py-2 w-[85%]">
            {/* <span><FaCode className="italic" size={20}/></span> */}
            <div className="bg-black rounded-full text-white w-[40px] h-[40px]  flex justify-center items-center">
                <h1 className="font-bold text-lg tracking-wider"><i>PA</i></h1>
            </div>
            <ul className="flex flex-row space-x-8">
                <li className="bg-black text-white py-[8px] px-4 rounded">
                    Home
                </li>
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
        </div>
    )
}
export default Navbar