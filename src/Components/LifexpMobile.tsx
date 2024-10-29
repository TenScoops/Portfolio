import { useState } from 'react';
import { FaFigma } from "react-icons/fa";
// import { RiArrowDownDoubleLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import lifemobile from '../assets/lifexpmobile.png';
import { ArrowBack } from "../icons";
import ProjectInfo from './ProjectInfo';
interface PortfolioProps{
    handleSectionClick: (section:string)=>void
}
const paragraph = () =>{
    return <p className=''>
        " My LifeXP mobile design captures my approach to creating an <strong>engaging and intuitive user experience for mental and physical well-being</strong>. 
        With this project, I focused on optimizing the interface for mobile, making it accessible and visually cohesive across devices. Each design 
        element was crafted in Figma to ensure the app felt familiar, inspiring, and functional for users pursuing self-improvement goals on the go. 
        <strong>This project represents my skill in translating complex interactions into clean, user-friendly mobile layouts, showcasing my dedication to responsive, 
        adaptive design, and attention to accessibility in real-world applications.</strong>
        "
    </p>
}
const approach = () =>{
    return <p className=""> 
                Design a mobile experience that motivates and supports users on their personal growth journey, <strong>keeping accessibility and usability as top priorities. </strong> 
                Every screen layout, color choice, and interaction was crafted to provide a seamless experience that feels intuitive and engaging. I approached this 
                design with the aim of balancing function with inspiration, ensuring the app is not only <strong>easy to navigate but also inviting and supportive of users' 
                mental and physical well-being goals.</strong>
            </p>
}
const LifexpMobile:React.FC<PortfolioProps> = ({handleSectionClick}) =>{
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
         <div className="w-[345px] sm0:w-[440px] sm1:w-[520px] sm:w-[620px] md:w-[680px] lg:w-[1000px]  lg2:w-[1100px] ">
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
         <div className= {`${openMore?'flex':'hidden'} flex-col lg:flex-row justify-center items-center w-full mt-12 lg:pr-12 slide-up2`}>
             <div className="flex flex-col items-center mt-10 lg:border-r border-black px-8">
                 {/* images */}
                 <img className="sm:hidden " src={lifemobile} width={350}/>
                 <img className="hidden sm:block " src={lifemobile} width={560} />
             </div>
             {/* <div className="w-0 h-[440px] border border-black ml-8 mr-8 mt-5 hidden lg:block"></div> */}
             
                 {/* Technologies */}
             <div className="flex flex-col items-center lg:items-baseline mt-10 lg:mt-0  space-y-10 px-8">
                
                 
                 <div className="flex flex-col mt-5 items-center lg:items-baseline space-y-3">
                     <h1 className="font-bold text-lg">Technologies</h1>
                     <div>
                        <FaFigma size={30}/>
                     </div>
                 </div>
 
                 
                  {/* buttons */}
                <div className="flex flex-row space-x-8 mt-5">
                     
                     <a href="https://www.figma.com/design/nIHArFoFcMIDIUVSubVpL6/LifeXPMobile---final?node-id=0-1&node-type=canvas&t=ggGptum7YRRFc1n2-0" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex flex-row items-center justify-center w-14 sm:w-28 h-12 border border-black space-x-2 shadow-sharp-sm hover:shadow-sharp-lg  icon-hover2">
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

export default LifexpMobile