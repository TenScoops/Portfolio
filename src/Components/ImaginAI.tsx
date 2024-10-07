import { useState } from 'react';
import { FaFigma } from "react-icons/fa";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import AIimg from "../assets/AI.webp";
import { ArrowBack } from "../icons";
import ProjectInfo from './ProjectInfo';

interface ImaginAIProps{
    handleSectionClick: (section:string)=>void
}
const paragraph = () =>{
    return <p className=''>
        " ImaginAI is a design concept for an image generator that transforms ideas into high-quality 
        visuals. The concept focuses on creating a tool that would simplify the process of generating 
        and customizing images. This makes it an effective solution and tool for both personal and 
        professional projects. Its goal is to <strong>provide a better approach to visual creation, enhancing 
        creativity and efficiency</strong>. "
    </p>
}
const approach = () =>{
    return <p className=""> 
                Create a concept for AI image generation and enhance creativity and efficiency
            </p>
}
const ImaginAi:React.FC<ImaginAIProps> = ({handleSectionClick}) =>{
    const [openMore, setOpenMore] = useState(false)
    const navigate = useNavigate()

    const handleButtonClick=() =>{
        navigate("/projects")
        setTimeout(()=>{
            handleSectionClick("projects")
        },50)
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
             <button className="border border-black rounded h-12 w-12 flex items-center justify-center shadow-sharp-sm hover:shadow-sharp-md"
                     onClick={handleButtonClick}>
                 <ArrowBack />
             </button>
         </div>
         
             <ProjectInfo paragraph = {paragraph} approach = {approach}/>
        
         {/* view more button */}
         <div onClick={()=>{setOpenMore(true)}} className={`${openMore?'hidden':'flex'} flex-row icon-hover3 mt-5 lg:pr-60 space-x-1 fade-in`}>
             <RiArrowDownDoubleLine size={45}/>
             <button className='tracking-widest text-lg font-semibold'>View more</button>
         </div>
 
         {/* project image/tech/buttons */}
         <div className= {`${openMore?'flex':'hidden'} flex-col lg:flex-row justify-center items-center w-full mt-6 pr-12 slide-up2`}>
             <div className="flex flex-col items-center mt-10">
                 {/* images */}
                 <img className="sm:hidden shadow-sharp-md-noborder" src={AIimg} width={350}/>
                 <img className="hidden sm:block shadow-sharp-md-noborder" src={AIimg} width={460}/>
             </div>
             <div className="w-0 h-[440px] border border-black ml-8 mr-8 mt-5 hidden lg:block"></div>
             
                 {/* Technologies */}
             <div className="flex flex-col items-center lg:items-baseline mt-10 lg:mt-0  space-y-10">
                
                 
                 <div className="flex flex-col mt-5 items-center lg:items-baseline space-y-3">
                     <h1 className="font-bold text-lg">Technologies</h1>
                     <div>
                        <FaFigma size={30}/>
                     </div>
                 </div>
 
                 
                  {/* buttons */}
                <div className="flex flex-row space-x-8 mt-5">
                     
                     <a href="https://www.figma.com/design/3ZnZIo9oCbOosKmQ140Fg0/ImaginAI---Final-prototype?node-id=0-1&node-type=canvas&t=CnTxvoXDEnUtzR0u-0" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex flex-row items-center justify-center w-14 sm:w-28 h-12 border border-black space-x-2 shadow-sharp-sm hover:shadow-sharp-lg rounded icon-hover2">
                             <FaFigma size={25} />
                             <h1 className="hidden sm:block">Figma</h1>
                     </a>
                 </div>

                 {/* for spacing */}
                 <div className='lg:h-40'>

                 </div>
                 <div>

                 </div>
 
                 
 
             </div>
         </div>
     </div>)
}

export default ImaginAi