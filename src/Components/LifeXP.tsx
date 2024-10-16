import { useState } from 'react';
import { IconType } from 'react-icons';
import { FaFigma, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import lifexpimg from "../assets/xp.webp";
import { ArrowBack, FigmaIcon, GitIcon, SiteIcon } from "../icons";
import ProjectInfo from './ProjectInfo';

interface LifeXPProps{
    handleSectionClick: (section:string)=>void
}

const paragraph = () =>{
    return <p className=''>
        " <strong>LifeXP</strong> combines gamification with tools for emotional well-being and personal growth. By combining game-like features with resources 
            for self-improvement, it provides a unique way to track and <strong>enhance both mental and physical health</strong>. The app makes self-care engaging and effective, 
            helping users see real progress in their personal development. "
    </p>
}
const approach = () =>{
    return <p className=" "> 
                Design from ground up and program an app that can <strong>improve people's mental and physical health</strong> through an all-encompassing, intuitive, and engaging approach.
            </p>
}

const LifeXP:React.FC<LifeXPProps> = ({handleSectionClick}) =>{

    const [openMore, setOpenMore] = useState(false)

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

      
    return(<div className="flex flex-col  items-center xl:h-screen mt-24 mb-20 ">
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
        <div className="w-[345px] sm0:w-[440px] sm1:w-[520px] sm:w-[620px] md:w-[680px] lg:w-[1000px] lg2:w-[1100px]">
            <button className="border border-black h-12 w-12 flex items-center justify-center shadow-sharp-sm hover:shadow-sharp-md"
                    onClick={handleButtonClick}>
                <ArrowBack />
            </button>
        </div>
        
            <ProjectInfo paragraph = {paragraph} approach = {approach}/>
       
        {/* view more button */}
        <div onClick={()=>{setOpenMore(true)}} className={`${openMore?'hidden':'flex'} flex-row icon-hover3 mt-5 lg:pr-48 space-x-1 fade-in`}>
            <RiArrowDownSLine size={45}/>
            <button className='tracking-widest text-lg font-semibold'>View more</button>
        </div>

        {/* project image/tech/buttons */}
        <div className= {`${openMore?'flex':'hidden'} flex-col lg:flex-row justify-center items-center w-full mt-6 lg:pr-12 slide-up2`}>
            <div className="flex flex-col items-center mt-10 border-r border-black lg:px-8">
                {/* images */}
                <img className="sm:hidden shadow-sharp-md-noborder" src={lifexpimg} width={350}/>
                <img className="hidden sm:block shadow-sharp-md-noborder" src={lifexpimg} width={460}/>
            </div>

            {/* divider */}
            {/* <div className="w-0 h-[440px] border border-black ml-8 mr-8 mt-5 hidden lg:block"></div> */}
            
                {/* Technologies */}
            <div className="flex flex-col items-center lg:items-baseline mt-10 lg:mt-0  space-y-10 lg:px-8">
                {/* buttons */}
               <div className="flex flex-row space-x-8 mt-5">
                    <a href="https://www.figma.com/design/BmSVm7SwGyJOQo4gjdm8tY/Final-prototype---no-interactions-yet?node-id=0-1&t=YgxkDQqeitSYVZxr-0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center tracking-wider justify-center w-14 sm:w-28 h-12 border border-black space-x-2 shadow-sharp-sm hover:shadow-sharp-lg icon-hover2">
                            <FigmaIcon />
                            <h1 className="hidden sm:block">Figma</h1>
                    </a>
                    <a href="https://github.com/TenScoops/LifeXP" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-row items-center tracking-wider justify-center w-14 sm:w-28 h-12 border border-black space-x-2 shadow-sharp-sm hover:shadow-sharp-lg icon-hover2">
                            <GitIcon />
                            <h1 className="hidden sm:block">Github</h1>
                    </a>
                    <a href="https://life-xp-kappa.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-row items-center tracking-wider justify-center w-14 sm:w-28 h-12 border border-black space-x-2 shadow-sharp-sm hover:shadow-sharp-lg icon-hover2">
                            <SiteIcon />
                            <h1 className="hidden sm:block">Website</h1>
                    </a>
                </div>
                
                <div className="flex flex-col mt-5 items-center lg:items-baseline space-y-3">
                    <h1 className="font-bold text-lg">Technologies</h1>
                    <div className="flex flex-row flex-wrap leading-10 max-w-2xl justify-center lg:justify-start">

                        {technologies.map((item, index) => (
                            <div key={index} className="flex flex-row mr-3 text-md">
                                <item.Icon className="mr-1" size={30} /> 
                                <h1>{item.tech}</h1> 
                            </div>
                        ))}
                        
                    </div>
                </div>

                
                {/* Key Features */}
                <div className="flex flex-col mt-4 space-y-1 lg:items-baseline px-4 lg:px-0">
                <div className='flex items-center justify-center'><h1 className="font-bold mb-1 text-lg">Key Features</h1></div>
                    <p className="max-w-2xl sm:text-lg">
                        Gamified Experience: <strong>Complete quests</strong>, tasks and challenges to <strong>earn XP</strong> and rewards
                    </p>
                    <p className="max-w-2xl sm:text-lg">
                        Emotional Well-Being: Keep track of your mood for <strong>better mental wellness</strong>.
                    </p>
                    <p className="max-w-2xl sm:text-lg">
                        Personalized Feedback: Use reflective journals to <strong>stay on track with your goals</strong>.
                    </p>
                </div>

                
                

            </div>
        </div>
    </div>)
}

export default LifeXP