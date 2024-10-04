import { useState } from "react";
import { Link } from "react-router-dom";
import helmet from "../assets/helmetleft.jpg";
import { AiIcon, Gamepad, ProgressBar } from "../icons";

const Projects = ()=> {
    const [section, setSection] = useState<string>("apps")
    return (
    <div className="flex flex-col items-center  xl:h-screen  w-full tracking-widest mt-28">
        {/* <div className="xl:hidden"><h1 className="text-3xl font-bold mb-12">Projects</h1></div> */}
        <div className="flex flex-col md:flex-row items-center">
            <p className="text-lg mr-10 order-2 md:order-1 mt-10 md:mt-0 pl-10 md:pl-0">Which project would you like to see?</p>
            <img src={helmet} width={280} className="rounded-full order-1 md:order-2"/>

        </div>
        <div className="flex items-center justify-end space-x-12 mt-16">
            <div className="">
                <h1 onClick={()=>{setSection("apps")}} className={`text-xl cursor-pointer ${section === "apps" && 'font-bold underline'}`}>Apps</h1>
                
            </div>
            <div className="">
                <h1 onClick={()=>{setSection("designs")}} className={`text-xl cursor-pointer  ${section === "designs" && 'font-bold underline'}`}>Designs</h1>
               
            </div>
        </div>
        {section === "apps"&&
        <div className="flex flex-col items-center justify-center mt-8 space-y-10 ">
            <Link to="/projects/lifexp" 
                  className="flex flex-row items-center shadow-sharp-lg hover:shadow-sharp-2xl w-80 h-40 sm:w-[420px] sm:h-[210px] rounded-3xl cursor-pointer shadow-transition duration-200 icon-hover3 bg-white">
                <div className="pl-16 pr-10"><Gamepad /></div>
                <h1 className="text-xl ">LifeXP</h1>
                {/* <h1 className="italic">Click for info on project</h1> */}
            </Link>
            <Link to="projects/pomoprogress"
                  className="flex flex-row items-center shadow-sharp-lg hover:shadow-sharp-2xl w-80 h-40 sm:w-[420px] sm:h-[210px] rounded-3xl cursor-pointer shadow-transition duration-200 icon-hover3 bg-white">
                <div className="pl-16 pr-10"><ProgressBar /></div>
                <h1 className="text-xl flex-wrap "> Progress Pomodoro</h1>
                {/* <h1 className="italic">Click for info on project</h1> */}
            </Link>
        </div>}

        {section ==="designs"&&
        <div className="flex flex-row space-x-28 mt-8">
            <Link to="/projects/imaginai" 
                className="flex flex-row items-center shadow-sharp-lg hover:shadow-sharp-2xl w-80 h-40 sm:w-[420px] sm:h-[210px] rounded-3xl cursor-pointer shadow-transition duration-200 icon-hover3 bg-white">
                <div className="pl-16 pr-10"><AiIcon /></div>
                <h1 className="text-xl ">ImaginAI</h1>
                {/* <h1 className="italic">Click for info on project</h1> */}
            </Link>
        
        </div>}
     
    </div>
    )
}
export default Projects