import { useState } from "react"
import { Link } from "react-router-dom"
import { AiIcon, Gamepad, ProgressBar } from "../icons"

const Projects = ()=> {
    const [section, setSection] = useState<string>("apps")
    return (
    <div className="flex flex-col items-center justify-center xl:h-screen  w-full">
        <div className="xl:hidden"><h1 className="text-3xl font-bold mb-12">Projects</h1></div>
        <div className="flex items-start justify-start max-w-[1000px] lg:w-[1000px] space-x-12">
            <h1 onClick={()=>{setSection("apps")}} className={`text-xl cursor-pointer ${section === "apps" && 'font-bold underline'}`}>Apps</h1>
            <h1 onClick={()=>{setSection("designs")}} className={`text-xl cursor-pointer  ${section === "designs" && 'font-bold underline'}`}>Designs</h1>
        </div>
        {section === "apps"&&
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-20  mt-16 space-y-10 lg:space-y-0">
            <Link to="/projects/lifexp" 
                  className="flex flex-col items-center justify-center shadow-sharp-md hover:shadow-sharp-2xl w-80 h-80 sm:w-[420px] sm:h-[420px] xl:w-[470px] xl:h-[470px] space-y-3 rounded-3xl cursor-pointer shadow-transition duration-200 icon-hover3">
                <Gamepad />
                <h1 className="text-xl font-bold italic pt-3">Project: LifeXP</h1>
                <h1 className="italic">Click for info on project</h1>
            </Link>
            <Link to="projects/pomoprogress"
                  className="flex flex-col items-center justify-center shadow-sharp-md hover:shadow-sharp-2xl w-80 h-80 sm:w-[420px] sm:h-[420px] xl:w-[470px] xl:h-[470px] space-y-2 rounded-3xl cursor-pointer shadow-transition duration-200 icon-hover3">
                <ProgressBar />
                <h1 className="text-xl font-bold italic pt-3">Progress Pomodoro</h1>
                <h1 className="italic">Click for info on project</h1>
            </Link>
        </div>}

        {section ==="designs"&&
        <div className="flex flex-row space-x-28 mt-16">
            <Link to="/projects/imaginai" 
                className="flex flex-col items-center justify-center shadow-sharp-md hover:shadow-sharp-2xl w-80 h-80 sm:w-[420px] sm:h-[420px] xl:w-[470px] xl:h-[470px] rounded-3xl space-y-2 cursor-pointer shadow-transition duration-200 icon-hover3">
                <AiIcon />
                <h1 className="text-xl font-bold italic pt-3">Project: ImaginAI</h1>
                <h1 className="italic">Click for info on project</h1>
            </Link>
        
        </div>}
     
    </div>
    )
}
export default Projects