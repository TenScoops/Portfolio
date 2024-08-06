import { FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiExpress, SiJavascript, SiMysql } from "react-icons/si";
import pomodoroImg from "../assets/pomo.png";
import { ArrowBack, GitIcon, SiteIcon } from "../icons";

const Pomoprogress = () =>{
    return(<div className="flex flex-col justify-center items-center h-screen">
        <div className="w-[900px]">
            <button className="border border-black rounded-md h-12 w-12 flex items-center justify-center shadow-sharp-sm hover:shadow-sharp-md icon-hover3">
                <ArrowBack />
            </button>
        </div>
        <div className="flex flex-row items-center justify-center w-full">
            {/* <h1 className="font-bold">Project: Pomodoro</h1> */}
            <div className="flex flex-col items-center mt-14">
                <img className=" shadow-sharp-md-noborder" src={pomodoroImg} width={470}/>
                <div className="flex flex-row space-x-8 mt-5">
                    <a href="https://github.com/TenScoops/the_pomodoro_project" target="_blank" rel="noopener noreferrer">
                        <button className="flex flex-row items-center justify-center w-28 h-12 border border-black space-x-2 shadow-sharp-sm hover:shadow-sharp-lg rounded-md icon-hover2">
                            <GitIcon />
                            <h1>Github</h1>
                        </button>
                    </a>
                    <a href="https://the-pomodoro-project.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <button className="flex flex-row items-center justify-center w-28 h-12 border border-black space-x-2 shadow-sharp-sm hover:shadow-sharp-lg rounded-md icon-hover2">
                            <SiteIcon />
                            <h1>Website</h1>
                        </button>
                    </a>
                </div>
            </div>
            <div className="w-0 h-[440px] border border-black ml-8 mr-8"></div>
            <div className="flex flex-col  ">
                <div className="flex flex-row items-center  mb-2">
                    <h1 className="font-bold">Project Title:</h1>
                    <h1 className="ml-2 text-lg">Pomoprogress</h1>
                </div>
                <div className="space-y-1">
                    <h1 className="font-bold">Description</h1>
                    <p className="max-w-[500px] text-lg">
                    Pomoprogress is designed to help individuals hold themselves accountable and improve their productivity. 
                    The app features a rating system that allows users to evaluate their progress after each work session. This 
                    data is then mapped on a graph, showcasing trends and patterns in work habits over time. By providing clear 
                    visual feedback, Progress Pomodoro aims to naturally enhance work ethic and productivity.
                    </p>
                </div>
                <div className="flex flex-col space-y-2 mt-5">
                    <h1 className="font-bold">Technologies</h1>
                    <div className="flex flex-row space-x-2">
                        <FaReact size={30}/>
                        <FaNode size={30}/>
                        <SiMysql size={30}/>
                        <SiExpress size={30}/>
                        <FaHtml5 size={30}/>
                        <IoLogoCss3 size={30}/>
                        <SiJavascript size={30}/>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 mt-5">
                    <h1 className="font-bold">Aim</h1>
                    <p className="max-w-[500px] text-lg"> 
                       Take an innovative, never before done approach to improve the productivity and lives of many.
                    </p>
                </div>
                
                <div className="flex flex-col mt-4 space-y-1">
                    <h1 className="font-bold mb-1">Key Features</h1>
                    <p>
                        Rating System: Rate your productivity after each session.
                    </p>
                    <p>
                        Visual Feedback: View your progress on an interactive graph.
                    </p>
                    <p>
                        Trend Analysis: Analyze and identify patterns in your work habits.
                    </p>
                    <p>
                        Customizable Sessions: Tailor session lengths to fit your own workflow.
                    </p>
                </div>
            </div>
            
        </div>
        
    </div>)
}
export default Pomoprogress