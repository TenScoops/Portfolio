import { IconType } from 'react-icons';
import { FaFigma, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import lifexpimg from "../assets/xp.webp";
import { ArrowBack, FigmaIcon, GitIcon, SiteIcon } from "../icons";

interface LifeXPProps{
    handleSectionClick: (section:string)=>void
}

const LifeXP:React.FC<LifeXPProps> = ({handleSectionClick}) =>{
    const navigate = useNavigate()

    const handleButtonClick=() =>{
        navigate("/projects")
        setTimeout(()=>{
            handleSectionClick("projects")
        },50)
    }

    const technologies : { Icon: IconType, tech: string }[] = [
        { Icon: FaReact, tech: "React JS" },
        { Icon: SiTailwindcss, tech: "TailwindCSS" },
        { Icon: SiTypescript, tech: "Typescript" },
        { Icon: FaHtml5, tech: "HTML" },
        { Icon: IoLogoCss3, tech: "CSS" },
        { Icon: SiJavascript, tech: "Javascript" },
        { Icon: FaFigma, tech: "Figma" },
      ];

    return(<div className="flex flex-col justify-center items-center xl:h-screen mt-10 lg:mt-0 ">
       {/* < div className="fixed top-5 left-5 xl:hidden z-50 p-0 m-0"><RocketIcon2 /></div> */}
        <div className="w-[345px] sm:w-[470px] lg:w-[1030px] lg2:w-[1100px] ">
            <button className="border border-black rounded h-12 w-12 flex items-center justify-center shadow-sharp-sm hover:shadow-sharp-md"
                    onClick={handleButtonClick}>
                <ArrowBack />
            </button>
        </div>
        {/* <h1 className="font-bold">Project: LifeXP</h1> */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full">
            <div className="flex flex-col items-center mt-10">

                {/* images */}
                <img className="sm:hidden shadow-sharp-md-noborder" src={lifexpimg} width={350}/>
                <img className="hidden sm:block shadow-sharp-md-noborder" src={lifexpimg} width={470}/>

                {/* buttons */}
                <div className="flex flex-row space-x-8 mt-5">
                    <a href="https://www.figma.com/design/BmSVm7SwGyJOQo4gjdm8tY/Final-prototype---no-interactions-yet?node-id=0-1&t=YgxkDQqeitSYVZxr-0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center justify-center w-14 sm:w-28 h-12 border border-black space-x-2 shadow-sharp-sm hover:shadow-sharp-lg rounded icon-hover2">
                            <FigmaIcon />
                            <h1 className="hidden sm:block">Figma</h1>
                    </a>
                    <a href="https://github.com/TenScoops/LifeXP" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-row items-center justify-center w-14 sm:w-28 h-12 border border-black space-x-2 shadow-sharp-sm hover:shadow-sharp-lg rounded icon-hover2">
                            <GitIcon />
                            <h1 className="hidden sm:block">Github</h1>
                    </a>
                    <a href="https://life-xp-kappa.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-row items-center justify-center w-14 sm:w-28 h-12 border border-black space-x-2 shadow-sharp-sm hover:shadow-sharp-lg rounded icon-hover2">
                            <SiteIcon />
                            <h1 className="hidden sm:block">Website</h1>
                    </a>
                </div>
            </div>
            <div className="w-0 h-[440px] border border-black ml-8 mr-8 hidden lg:block"></div>
            <div className="flex flex-col items-center lg:items-baseline mt-10 lg:mt-0 px-5 pb-5 sm:px-0 lg:pb-0">
                <div className="flex flex-row items-center  mb-2">
                    <h1 className="font-bold">Project Title:</h1>
                    <h1 className="ml-2 text-lg">LifeXP</h1>
                </div>

                {/* Description */}
                <div className="space-y-1 flex flex-col items-center lg:items-baseline">
                    <h1 className="font-bold">Description</h1>
                    <p className="max-w-[500px] text-base sm:text-lg text-center lg:text-start ">
                        LifeXP combines gamification with tools for emotional well-being and personal growth. By combining game-like features with resources 
                        for self-improvement, it provides a unique way to track and enhance both mental and physical health. The app makes self-care engaging and effective, 
                        helping users see real progress in their personal development.
                    </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-col space-y-2 mt-5 items-center lg:items-baseline">
                    <h1 className="font-bold">Technologies</h1>
                    <div className="flex flex-row flex-wrap  max-w-[500px] justify-center lg:justify-start">

                    {technologies.map((item, index) => (
                        <div key={index} className="flex flex-row mr-2">
                            <item.Icon className="mr-1" size={30} /> 
                            <h1>{item.tech}</h1> 
                        </div>
                    ))}
                        
                    </div>
                </div>

                {/* Aim */}
                <div className="space-y-2 mt-5 flex flex-col items-center lg:items-baseline">
                    <h1 className="font-bold">Aim</h1>
                    <p className="max-w-[500px] text-base sm:text-lg text-center lg:text-start "> 
                        Improve the lives of many through an all-encompassing, intuitive, and engaging approach
                    </p>
                </div>
                
                {/* Key Features */}
                <div className="flex flex-col mt-4 space-y-1 items-center lg:items-baseline">
                    <h1 className="font-bold mb-1">Key Features</h1>
                    <p className="text-center sm:text-lg lg:text-base lg:text-start">
                        Gamified Experience: Complete quests, tasks and challenges to earn XP and rewards
                    </p>
                    <p className="text-center sm:text-lg lg:text-base lg:text-start">
                        Emotional Well-Being: Keep track of your mood for better mental wellness
                    </p>
                    <p className="text-center sm:text-lg lg:text-base lg:text-start">
                        Personalized Feedback: Use reflective journals to stay on track with your goals.
                    </p>
                </div>

            </div>
        </div>
    </div>)
}

export default LifeXP