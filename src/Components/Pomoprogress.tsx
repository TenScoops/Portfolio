import { useState } from 'react';
import { IconType } from 'react-icons';
import { FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { SiExpress, SiJavascript, SiMysql } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import pomodoroImg from "../assets/pomo.webp";
import { ArrowBack, GitIcon, SiteIcon } from "../icons";
import ProjectInfo from './ProjectInfo';

interface PomoprogressProps {
    handleSectionClick: (section:string)=>void
}

const Pomoprogress: React.FC<PomoprogressProps> = ({handleSectionClick}) =>{
    const [openMore, setOpenMore] = useState(false)

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
        navigate("/projects")
        setTimeout(()=>{
            handleSectionClick("projects")
        },50)
    }

    const paragraph = () => {
        return <p className="">
        "<strong>The Progress Pomodoro</strong> is designed to help individuals hold themselves accountable and improve their productivity. 
        The app features a rating system that allows users to evaluate their progress after each work session. This 
        data is then mapped on a graph, showcasing trends and patterns in work habits over time. By providing clear 
        visual feedback, Progress Pomodoro aims to naturally <strong>enhance work ethic and productivity</strong>. "
        </p>
    }
    const approach = () => {
        return <p className=""> 
        Take an innovative, never before done approach to <strong>improve the productivity and lives of many</strong>.
        </p>
    }
    return(<div className="flex flex-col  items-center xl:h-screen mt-24 mb-20">
        {/* < div className="fixed top-5 left-5 xl:hidden z-50 p-0 m-0"><RocketIcon2 /></div> */}
         
         {/* <h1 className="font-bold">Project: LifeXP</h1> */}
         {/* <div className='flex flex-row items-center'>
             <p className='max-w-4xl slide-right text-lg'>
             " <strong>LifeXP</strong> combines gamification with tools for emotional well-being and personal growth. By combining game-like features with resources 
             for self-improvement, it provides a unique way to track and <strong>enhance both mental and physical health</strong>. The app makes self-care engaging and effective, 
             helping users see real progress in their personal development. "
             </p>
 
             <img src={helmet} width={280} className='rounded-full slide-left'/>
         </div> */}
         <div className="w-[345px] sm:w-[470px] lg:w-[1030px] lg2:w-[1100px] ">
             <button className="border border-black h-12 w-12 flex items-center justify-center shadow-sharp-sm hover:shadow-sharp-md"
                     onClick={handleButtonClick}>
                 <ArrowBack />
             </button>
         </div>
         
             <ProjectInfo paragraph = {paragraph} approach = {approach}/>
        
         {/* view more button */}
         <div onClick={()=>{setOpenMore(true)}} className={`${openMore?'hidden':'flex'} flex-row icon-hover3 lg:pr-48 mt-5 space-x-1 fade-in`}>
             <RiArrowDownSLine size={45}/>
             <button className='tracking-widest text-lg font-semibold'>View more</button>
         </div>
 
         {/* project image/tech/buttons */}
         <div className= {`${openMore?'flex':'hidden'} flex-col lg:flex-row justify-center items-center w-full mt-6 lg:pr-12 slide-up2 `}>
             <div className="flex flex-col items-center mt-10 lg:px-8 border-r border-black">
                 {/* images */}
                 <img className="sm:hidden shadow-sharp-md-noborder" src={pomodoroImg} width={350}/>
                 <img className="hidden sm:block shadow-sharp-md-noborder" src={pomodoroImg} width={460}/>
             </div>

             {/* divider */}
             {/* <div className="w-0 h-[440px] border border-black ml-8 mr-8 mt-5 hidden lg:block"></div> */}
             
                 {/* Technologies */}
             <div className="flex flex-col items-center lg:items-baseline mt-10 lg:mt-0  space-y-10 lg:px-8">
                 
                  {/* buttons */}
                  <div className="flex flex-row space-x-8 mt-5 tracking-wider">
                     
                     <a href="https://github.com/TenScoops/the_pomodoro_project" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex flex-row items-center justify-center w-14 sm:w-28 h-12 border border-black space-x-2 shadow-sharp-sm hover:shadow-sharp-lg icon-hover2">
                             <GitIcon />
                             <h1 className="hidden sm:block">Github</h1>
                     </a>
                     <a href="https://the-pomodoro-project.vercel.app/" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex flex-row items-center justify-center w-14 sm:w-28 h-12 border border-black space-x-2 shadow-sharp-sm hover:shadow-sharp-lg icon-hover2">
                             <SiteIcon />
                             <h1 className="hidden sm:block">Website</h1>
                     </a>
                 </div>
                 
                 
                 
                 <div className="flex flex-col mt-5 items-center lg:items-baseline space-y-3">
                     <h1 className="font-bold text-lg">Technologies</h1>
                     <div className="flex flex-row flex-wrap leading-10 max-w-2xl justify-center lg:justify-start">
 
                         {technologies.map((item, index) => (
                             <div key={index} className="flex flex-row mr-3">
                                 <item.Icon className="mr-1" size={30} /> 
                                 <h1>{item.tech}</h1> 
                             </div>
                         ))}
                         
                     </div>
                 </div>
 
                
                {/* Key Features */}
                <div className="flex flex-col mt-4 space-y-1  lg:items-baseline px-4 lg:px-0">
                     <div className='flex items-center justify-center'><h1 className="font-bold mb-1 text-lg">Key Features</h1></div>
                     <p className="max-w-2xl sm:text-lg">
                        Rating System: <strong>Rate your productivity</strong> after each session.
                     </p>
                     <p className="max-w-2xl sm:text-lg">
                        Visual Feedback: <strong>View your progress</strong> on an interactive graph.
                     </p>
                     <p className="max-w-2xl sm:text-lg">
                        Trend Analysis: <strong>Analyze and identify patterns</strong> in your work habits.
                     </p>
                     <p className="max-w-2xl sm:text-lg">
                        Customizable Sessions: Tailor session lengths to fit your own workflow.
                     </p>
                 </div>
 
                 
 
             </div>
         </div>
     </div>)
}
export default Pomoprogress