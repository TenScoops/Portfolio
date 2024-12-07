import { useState } from 'react';
import { IconType } from 'react-icons';
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import storyboard1 from "../assets/storyboard2.png";
import { ArrowBack, FigmaIcon, GitIcon, SiteIcon } from "../icons";
import ProjectInfo from './ProjectInfo';

interface StoryboardProps {
    handleSectionClick: (section:string)=>void
}

const Storyboard: React.FC<StoryboardProps> = ({handleSectionClick}) =>{
    const [openMore, setOpenMore] = useState(false)

    const technologies: { Icon: IconType, tech: string }[] = [
        { Icon: FaReact, tech: "React JS" },
        { Icon: SiTailwindcss, tech: "TailwindCSS"},
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
        " <strong>Storyboard</strong> is a conceptual creative hub for artists, writers, and thinkers to connect and inspire one
         another. <strong>It envisions a platform where users could explore art galleries, create stories from illustrations, 
         and engage with a vibrant community</strong>. By fostering collaboration through challenges, personalized inspiration 
         feeds, and feedback-sharing, Storyboard aims to celebrate creativity in all its forms. It offers a glimpse 
         into a space where ideas take shape, stories unfold, and imagination thrives. "
        </p>
    }
    const approach = () => {
        return <p className=""> 
       My approach with Storyboard was to <strong>design a digital haven for artists, writers, and thinkers—a space where 
       creativity could thrive and inspiration could flow</strong>. As a landing page currently, it showcases the concept of 
       transforming online art into collaborative opportunities, inviting users to imagine a platform that 
       celebrates storytelling, art, and connection. While it remains a conceptual starting point, it represents 
       a vision of empowering individuals to create, share, and inspire in meaningful ways.
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
         <div className="w-[345px] sm0:w-[440px] sm1:w-[520px] sm:w-[620px] md:w-[680px] lg:w-[1000px]  lg2:w-[1100px]">
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
         <div className= {`${openMore?'flex':'hidden'} flex-col lg:flex-row justify-center items-center w-full mt-12 lg:pr-12 slide-up2 `}>
             <div className="flex flex-col items-center mt-10 lg:px-8 border-r border-black">
                 {/* images */}
                 <img className="sm:hidden shadow-sharp-md-noborder" src={storyboard1} width={350}/>
                 <img className="hidden sm:block shadow-sharp-md-noborder" src={storyboard1} width={460}/>
             </div>

             {/* divider */}
             {/* <div className="w-0 h-[440px] border border-black ml-8 mr-8 mt-5 hidden lg:block"></div> */}
             
                 {/* Technologies */}
             <div className="flex flex-col items-center lg:items-baseline mt-10 lg:mt-0  space-y-10 lg:px-8">
                 
                  {/* buttons */}
                  <div className="flex flex-row space-x-8 mt-5">
                    <a href="https://www.figma.com/design/Xy4QqjhS0tPlwKaQQURmuZ/Untitled?node-id=0-1&node-type=canvas&t=5JBPikWbdUAMC1bG-0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center tracking-wider justify-center w-14 sm:w-28 h-12 border border-black space-x-2 shadow-sharp-sm hover:shadow-sharp-lg icon-hover2">
                            <FigmaIcon />
                            <h1 className="hidden sm:block">Figma</h1>
                    </a>
                    <a href="https://github.com/TenScoops/Storyboard" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-row items-center tracking-wider justify-center w-14 sm:w-28 h-12 border border-black space-x-2 shadow-sharp-sm hover:shadow-sharp-lg icon-hover2">
                            <GitIcon />
                            <h1 className="hidden sm:block">Github</h1>
                    </a>
                    <a href="https://storyboard-sandy.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-row items-center tracking-wider justify-center w-14 sm:w-28 h-12 border border-black space-x-2 shadow-sharp-sm hover:shadow-sharp-lg icon-hover2">
                            <SiteIcon />
                            <h1 className="hidden sm:block">Website</h1>
                    </a>
                </div>
                 
                 
                 
                 <div className="flex flex-col mt-5 items-center lg:items-baseline space-y-3">
                     <h1 className="font-bold text-lg">Technologies</h1>
                     <div className="flex flex-row flex-wrap leading-10 max-w-xl justify-center lg:justify-start">
 
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
                     <div className='flex items-center justify-center'><h1 className="font-bold mb-1 text-lg">Conceptual Feature</h1></div>
                     <p className="max-w-2xl sm:text-lg">
                     Storyboard envisions features like art galleries, story creation tools, and personalized inspiration feeds, 
                     offering a space for collaboration and creativity
                     </p>
                    
                 </div>
 
                 
 
             </div>
         </div>
     </div>)
}
export default Storyboard