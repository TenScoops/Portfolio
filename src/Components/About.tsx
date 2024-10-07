// import helmet from "../assets/helmetleft.jpg";
import moon from "../assets/moon1.jpg";
// import LineRocket from "../assets/rocketline.webp"
import { useState } from "react";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { LuPencilRuler } from "react-icons/lu";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import Helmet from "../assets/helmet.jpg";
import { Checkmark } from '../icons';

const About = () => {

    const[hidden, setHidden] = useState(false)
    const frontend = ["Javascript", "React JS", "Typescript", "CSS", "TailwindCSS", "Git", "Figma", "HTML"]
    const backend = ["Javascript", "Node JS", "Express JS", "MySQL", "Restful API"]

    return(<div className="flex flex-col z-49 items-center h-screen mt-36 space-y-5 w-full tracking-widest ">
            <div>
                <div className='flex flex-col items-center justify-center'>
                    <div className="flex flex-col lg:flex-row items-center justify-center ">
                        <p className='text-lg md:text-xl px-7 xl:px-0 max-w-4xl mb-12 xl:mb-10 leading-relaxed order-2 lg:order-1 slide-right'>
                        “ I don’t create for the sake of creating, I create to <strong>solve a problem</strong>. Each personal project I’ve worked 
                        on <strong>has a sense of purpose</strong>. And I take immense pride in my work. I believe that’s what programming/designing 
                        is about, to solve problems. ”
                        </p>
                        {/* astronaut image */}
                        <img src={Helmet} width={260} className="rounded-full mb-10 order-1 lg:order-2 transform active:scale-95 transition 
                                            duration-150 icon-hover3 slide-left"/>
                    </div>
                    <button onClick={()=>{setHidden(true)}} className={` flex-row items-center lg:mr-32 mr-8 icon-hover3 ${hidden?'hidden':'flex'}`}>
                        <RiArrowDownDoubleLine size={45}/>
                        <h3 className="text-lg ml-3 tracking-widest font-semibold">View more</h3>
                    </button>
                </div>
            </div>
        <div className={`flex-col lg2:flex-row items-center md:space-x-8 ${hidden ?'flex' : 'hidden'} slide-up2`}>
            {/* moon image */}
            <img src={moon} className="rounded-full transform active:scale-95 transition 
                                            duration-150 icon-hover3" width={400}/>
            <div className='m-0 lg2:pr-44'>
                <div className='space-y-4 flex flex-col items-center xl:items-baseline mt-5 lg:mt-0 '>
                    <div className="flex flex-row items-center justify-center w-[580px]">
                        <h1 className='font-bold text-2xl mr-3'>Education</h1>
                        <HiOutlineAcademicCap size={32}/>
                    </div>
                    <div className="w-80 h-44 sm:w-[620px] md:h-[180px] flex flex-col justify-center rounded-2xl  space-y-6 sm:text-lg md:text-xl">
                        <h1 >Associate’s in <strong>Computer Science</strong> at Howard Community College</h1>
                        <h1 >Bachelor’s in <strong>Technology and Information Design</strong> at University of Maryland, College Park</h1>
                    </div>
                </div>

                <div className='flex flex-col items-center xl:items-baseline space-y-4 mt-6 mb-12'>
                    <div className="flex flex-row sm:w-[560px] justify-center">
                        <h1 className='font-bold text-2xl mr-3 '>Skills</h1>
                        <LuPencilRuler size={30}/>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-col sm:flex-row sm:space-x-5 space-y-5 sm:space-y-0 items-center'>
                         
                            <div className="w-[280px] md:w-[350px] h-[215px] space-y-1 sm:text-lg md:text-xl">    
                                <h1 className='font-bold mt-2'>Frontend</h1>
                                <div className='flex flex-wrap h-[160px] w-[300px]'>
                                    {frontend.map((item)=>(
                                        <div className='flex flex-row items-center'>
                                            <Checkmark />
                                            <h1 className='ml-1 mr-5'>{item}</h1>
                                        </div>
                                    ))}
                                
                                </div>
                            </div>
                          
                            <div className="w-[280px] h-[215px] rounded-2xl  space-y-2 sm:text-lg md:text-xl ">    
                                <h1 className='font-bold mt-2'>Backend</h1>
                                <div className='flex  flex-wrap lg:text-xl h-[120px] ml-1'>
                                    {backend.map((item)=>(
                                        <div className='flex flex-row items-center'>
                                            <Checkmark />
                                            <h1 className='ml-1 mr-4'>{item}</h1>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            
        </div>
</div>)
}

export default About