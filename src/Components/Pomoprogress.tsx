import { IconType } from 'react-icons';
import { FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiExpress, SiJavascript, SiMysql } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import pomodoroImg from "../assets/pomo.png";
import { ArrowBack, GitIcon, RocketIcon2, SiteIcon } from "../icons";

interface PomoprogressProps {
    handleSectionClick: (section:string)=>void
}

const Pomoprogress: React.FC<PomoprogressProps> = ({handleSectionClick}) =>{

    const technologies: { Icon: IconType, tech: string }[] = [
        { Icon: FaReact, tech: "React JS" },
        { Icon: FaNode, tech: "Node JS" },
        { Icon: SiMysql, tech: "MySQL" },
        { Icon: SiExpress, tech: "Express JS" },
        { Icon: FaHtml5, tech: "HTML" },
        { Icon: IoLogoCss3, tech: "CSS" },
        { Icon: SiJavascript, tech: "Javascript" }
      ];

    const navigate = useNavigate()

    const handleButtonClick=() =>{
        navigate("/")
        setTimeout(()=>{
            handleSectionClick("projects")
        },50)
    }
    return(<div className="flex flex-col justify-center items-center xl:h-screen lg:mt-0">
       < div className="fixed top-5 left-5 xl:hidden z-50 p-0 m-0"><RocketIcon2 /></div>
        <div className="w-[345px] sm:w-[470px] lg:w-[1030px] lg2:w-[1037px] ">
            <button className="border border-black rounded h-12 w-12 flex items-center justify-center shadow-sharp-sm hover:shadow-sharp-md"
                    onClick={handleButtonClick}>
                <ArrowBack />
            </button>
        </div>
        {/* <h1 className="font-bold">Project: LifeXP</h1> */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full">
            <div className="flex flex-col items-center mt-10">
                {/* images */}
                <img className="sm:hidden shadow-sharp-md-noborder" src={pomodoroImg} width={350}/>
                <img className="hidden sm:block shadow-sharp-md-noborder" src={pomodoroImg} width={470}/>

                {/* buttons */}
                <div className="flex flex-row space-x-8 mt-5">
                   
                    <a href="https://github.com/TenScoops/the_pomodoro_project" target="_blank" rel="noopener noreferrer">
                        <button className="flex flex-row items-center justify-center w-14 sm:w-28 h-12 border border-black space-x-2 shadow-sharp-sm hover:shadow-sharp-lg rounded icon-hover2">
                            <GitIcon />
                            <h1 className="hidden sm:block">Github</h1>
                        </button>
                    </a>
                    <a href="https://the-pomodoro-project.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <button className="flex flex-row items-center justify-center w-14 sm:w-28 h-12 border border-black space-x-2 shadow-sharp-sm hover:shadow-sharp-lg rounded icon-hover2">
                            <SiteIcon />
                            
                            <h1 className="hidden sm:block">Website</h1>
                            
                        </button>
                    </a>
                </div>
            </div>
            <div className="w-0 h-[440px] border border-black ml-8 mr-8 hidden lg:block"></div>
            <div className="flex flex-col items-center lg:items-baseline mt-10 lg:mt-0 px-5 pb-5 sm:px-0 lg:pb-0">
                <div className="flex flex-row items-center  mb-2">
                    <h1 className="font-bold">Project Title:</h1>
                    <h1 className="ml-2 text-lg">The Progress Pomodoro</h1>
                </div>

                {/* Description */}
                <div className="space-y-1 flex flex-col items-center lg:items-baseline">
                    <h1 className="font-bold">Description</h1>
                    <p className="max-w-[500px] text-base sm:text-lg text-center lg:text-start ">
                        The Progress Pomodoro is designed to help individuals hold themselves accountable and improve their productivity. 
                        The app features a rating system that allows users to evaluate their progress after each work session. This 
                        data is then mapped on a graph, showcasing trends and patterns in work habits over time. By providing clear 
                        visual feedback, Progress Pomodoro aims to naturally enhance work ethic and productivity.
                    </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-col space-y-2 mt-5 items-center lg:items-baseline">
                    <h1 className="font-bold">Technologies</h1>
                    <div className="flex flex-row flex-wrap  max-w-[500px] justify-center lg:justify-start">
                        {technologies.map((item, index)=>(
                            <div key={index} className="flex flex-row mr-2">
                                <item.Icon className="mr-1"  size={30}/>
                                <h1>{item.tech}</h1>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-2 mt-5 flex flex-col items-center lg:items-baseline">
                    <h1 className="font-bold">Aim</h1>
                    <p className="max-w-[500px] text-base sm:text-lg text-center lg:text-start "> 
                    Take an innovative, never before done approach to improve the productivity and lives of many.
                    </p>
                </div>

                {/* Key features */}
                <div className="flex flex-col mt-4 space-y-1 items-center lg:items-baseline">
                    <h1 className="font-bold mb-1">Key Features</h1>
                    <p className="text-center sm:text-lg lg:text-base lg:text-start">
                        Rating System: Rate your productivity after each session.
                    </p>
                    <p className="text-center sm:text-lg lg:text-base lg:text-start">
                        Visual Feedback: View your progress on an interactive graph.
                    </p>
                    <p className="text-center sm:text-lg lg:text-base lg:text-start">
                        Trend Analysis: Analyze and identify patterns in your work habits.
                    </p>
                    <p className="text-center sm:text-lg lg:text-base lg:text-start">
                        Customizable Sessions: Tailor session lengths to fit your own workflow.
                    </p>
                </div>

            </div>
        </div>
    </div>)
}
export default Pomoprogress