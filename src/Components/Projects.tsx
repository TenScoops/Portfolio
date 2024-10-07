import { useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "../assets/helmet.webp";
import { AiIcon, Gamepad, ProgressBar } from "../icons";

const Projects = ()=> {
    const [section, setSection] = useState<string>("apps")
    return (
    <div className="flex flex-col items-center h-screen  w-full tracking-widest mt-28 mb-10 ">
        {/* <div className="xl:hidden"><h1 className="text-3xl font-bold mb-12">Projects</h1></div> */}
        <div className="flex flex-col md:flex-row items-center">
            <p className="sm0:text-lg lg:text-xl md:mr-10 order-2 md:order-1 mt-10 md:mt-0 md:pl-0 typewriter2">"Which project would you like to see?"</p>
            <img src={Helmet} width={260} className="rounded-full order-1 md:order-2 transform active:scale-95 transition 
                                duration-150 icon-hover3"/>

        </div>
        <div className="flex items-center justify-end space-x-12 mt-16 ">
            <div className="">
                <h1 onClick={()=>{setSection("apps")}} className={`text-xl cursor-pointer ${section === "apps" && 'font-bold underline'}`}>Apps</h1>
                
            </div>
            <div className="">
                <h1 onClick={()=>{setSection("designs")}} className={`text-xl cursor-pointer  ${section === "designs" && 'font-bold underline'}`}>Designs</h1>
               
            </div>
        </div>
        {section === "apps"&&
        <div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:space-x-10 space-y-10 lg:space-y-0  slide-up">
            <Link to="/projects/lifexp" 
                  className="flex flex-row items-center shadow-sharp-lg hover:shadow-sharp-2xl w-80 h-40 sm:w-[480px] sm:h-[200px] rounded-3xl cursor-pointer shadow-transition duration-200 icon-hover3 bg-white">
                <div className="pl-16 pr-10"><Gamepad /></div>
                <h1 className="text-xl font-semibold">LifeXP</h1>
                {/* <h1 className="italic">Click for info on project</h1> */}
            </Link>
            <Link to="/projects/pomoprogress"
                  className="flex flex-row items-center shadow-sharp-lg hover:shadow-sharp-2xl w-80 h-40 sm:w-[480px] sm:h-[200px] rounded-3xl cursor-pointer shadow-transition duration-200 icon-hover3 bg-white">
                <div className="pl-16 pr-10"><ProgressBar /></div>
                <h1 className="text-xl flex-wrap font-semibold"> Progress Pomodoro</h1>
                {/* <h1 className="italic">Click for info on project</h1> */}
            </Link>
        </div>}

        {section ==="designs"&&
        <div className="flex flex-row space-x-28 mt-8 slide-up">
            <Link to="/projects/imaginai" 
                className="flex flex-row items-center shadow-sharp-lg hover:shadow-sharp-2xl w-80 h-40 sm:w-[480px] sm:h-[200px] rounded-3xl cursor-pointer shadow-transition duration-200 icon-hover3 bg-white">
                <div className="pl-16 pr-10"><AiIcon /></div>
                <h1 className="text-xl font-semibold">ImaginAI</h1>
                {/* <h1 className="italic">Click for info on project</h1> */}
            </Link>
        
        </div>}
     
    </div>
    )
}
export default Projects