import { useState } from "react"
import { Link } from "react-router-dom"
import { AiIcon, Gamepad, ProgressBar } from "../icons"

const Projects = ()=> {
    const [section, setSection] = useState<string>("apps")
    return (
    <div className="h-screen flex flex-col items-center w-full">
        <div className="flex items-start justify-start w-[1000px] space-x-12">
            <h1 onClick={()=>{setSection("apps")}} className={`text-xl cursor-pointer ${section === "apps" && 'font-bold underline'}`}>Apps</h1>
            <h1 onClick={()=>{setSection("designs")}} className={`text-xl cursor-pointer  ${section === "designs" && 'font-bold underline'}`}>Designs</h1>
        </div>
        {section === "apps"&&
        <div className="flex flex-row items-center justify-center space-x-28 mt-16">
            <Link to="/projects/lifexp" 
                  className="flex items-center justify-center shadow-sharp-lg hover:shadow-sharp-2xl w-[470px] h-[470px] rounded-3xl cursor-pointer shadow-transition duration-200 icon-hover3">
                <Gamepad />
            </Link>
            <Link to="projects/pomoprogress"
                  className="flex items-center justify-center shadow-sharp-lg hover:shadow-sharp-2xl w-[470px] h-[470px] rounded-3xl cursor-pointer shadow-transition duration-200 icon-hover3">
                <ProgressBar />
            </Link>
        </div>}

        {section ==="designs"&&
        <div className="flex flex-row space-x-28 mt-16">
            <Link to="/projects/imaginai" 
                className="flex items-center justify-center shadow-sharp-lg hover:shadow-sharp-2xl w-[470px] h-[470px] rounded-3xl cursor-pointer shadow-transition duration-200 icon-hover3">
                <AiIcon />
            </Link>
            <Link to="/projects/lifexp" 
                  className="flex items-center justify-center shadow-sharp-lg hover:shadow-sharp-2xl w-[470px] h-[470px] rounded-3xl cursor-pointer shadow-transition duration-200 icon-hover3">
                <Gamepad />
            </Link>
        
        </div>}
        
       
        {/* <div className="flex flex-row items-center justify-center space-x-3 mt-8">
            <img className="rounded-lg border-2 border-black" src={dwarf} height={400} width={400}/>
            <div className="w-1/3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, eligendi quos! Cum odit porro laborum quam quia totam accusantium cupiditate suscipit eaque obcaecati quaerat repudiandae, dicta ullam ad iste officia.
            Quo blanditiis distinctio itaque quod repellendus officiis sint sunt iusto possimus minima non, sit, corrupti maxime expedita. Incidunt cum debitis dignissimos delectus dolorum dolore dolores quae velit itaque, cumque esse.
            Maiores deserunt cupiditate voluptatum eaque dicta perferendis ratione? Qui sapiente expedita repellat voluptatibus nobis quam saepe. Amet, quae non facere, ipsum repudiandae minus, vel repellat corporis minima consectetur iste deserunt.</div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-3 mt-10">
            <div className="w-1/3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, eligendi quos! Cum odit porro laborum quam quia totam accusantium cupiditate suscipit eaque obcaecati quaerat repudiandae, dicta ullam ad iste officia.
                Quo blanditiis distinctio itaque quod repellendus officiis sint sunt iusto possimus minima non, sit, corrupti maxime expedita. Incidunt cum debitis dignissimos delectus dolorum dolore dolores quae velit itaque, cumque esse.
                Maiores deserunt cupiditate voluptatum eaque dicta perferendis ratione? Qui sapiente expedita repellat voluptatibus nobis quam saepe. Amet, quae non facere, ipsum repudiandae minus, vel repellat corporis minima consectetur iste deserunt.
            </div>
            <img className="rounded-lg border-2 border-black" src={dwarf} height={400} width={400}/>
            
        </div> */}
     
    </div>
    )
}
export default Projects