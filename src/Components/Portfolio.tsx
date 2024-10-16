import { useState } from 'react';
import { FaFigma } from "react-icons/fa";
// import { RiArrowDownDoubleLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Design from "../assets/design1.png";
import { ArrowBack } from "../icons";
import ProjectInfo from './ProjectInfo';
interface PortfolioProps{
    handleSectionClick: (section:string)=>void
}
const paragraph = () =>{
    return <p className=''>
        " <strong>My portfolio</strong> was designed and coded from the ground up to encompass 
        all my skills as a programmer and designer. I wanted to demonstrate that I’m not just a programmer 
        but also someone who can design and bring ideas to life through code—just like I did with LifeXP. 
        The portfolio showcases <strong>my ability to think through every aspect of a project, from concept to 
        execution</strong>, highlighting my attention to detail, creativity, and technical expertise.
        "
    </p>
}
const approach = () =>{
    return <p className=""> 
                Create a portfolio that holds a collection of my works which reflects <strong>my problem-solving and design mindset</strong>. Each section, 
                interaction, and design choice was carefully considered to ensure a seamless user experience, while 
                also allowing my projects to shine. This portfolio brings together <strong>my passion for coding, my eye for 
                design, and my commitment to delivering clean, and functional solutions</strong>.
            </p>
}
const Portfolio:React.FC<PortfolioProps> = ({handleSectionClick}) =>{
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
         <div className= {`${openMore?'flex':'hidden'} flex-col lg:flex-row justify-center items-center w-full mt-6 pr-12 slide-up2`}>
             <div className="flex flex-col items-center mt-10 border-r border-black px-8">
                 {/* images */}
                 <img className="sm:hidden shadow-sharp-md-noborder" src={Design} width={350}/>
                 <img className="hidden sm:block shadow-sharp-md" src={Design} width={560} />
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
                     
                     <a href="https://www.figma.com/design/dfBDgU6yZsmd7MM691RsU3/Portfolio-Design-final?node-id=0-1&t=vePDFiSSGaBHwOIt-1" 
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

export default Portfolio