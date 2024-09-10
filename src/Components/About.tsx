// import Rocket from '../assets/Rocket.png'
import LineRocket from "../assets/rocketline.avif"
import { Checkmark } from '../icons'

const About = () => {

    const frontend = ["Javascript", "React JS", "Typescript", "CSS", "TailwindCSS", "Git", "Figma", "HTML"]
    const backend = ["Javascript", "Node JS", "Express JS", "MySQL", "Restful API"]

    return(<div className="flex flex-col items-center justify-center  xl:h-screen space-y-5 w-full ">
        <div className='xl:hidden'><h1 className='text-3xl font-bold mb-6'>About</h1></div>
        <div className='flex items-center justify-center'>
            <h1 className='text-lg md:text-xl px-7 lg:px-0 max-w-5xl mb-12 leading-relaxed'>
                “I'm a programmer who has a passion for coding, creating, and designing with the understanding 
                and application of UI/UX principles. The user is always placed at the forefront. Through my projects, 
                I focus on creating innovative solutions that enhance user experiences with the goal 
                of making a positive impact on their lives."

                
            </h1>
        </div>
        <div className='flex flex-col lg:flex-row items-center md:space-x-8 '>
            <div className='rounded-full'>
                <img className=' transform active:scale-95 transition 
                                duration-150 cursor-pointer icon-hover3' src={LineRocket} width={400}/>
            </div>
            <div className='m-0'>
                <div className='space-y-4 flex flex-col items-center xl:items-baseline mt-5 lg:mt-0 '>
                    <h1 className='font-bold text-2xl'>Education</h1>
                    <div className="w-80 h-44 sm:w-[580px] md:h-[210px] flex flex-col justify-center border border-black rounded-2xl  border-b-2 px-9 space-y-6 sm:text-lg md:text-xl hover:border-2">
                        <h1 >Associate’s in Computer Science at Howard Community College</h1>
                        <h1 >Bachelor’s in Technology and Information Design at University of Maryland, College Park</h1>
                    </div>
                </div>

                <div className='flex flex-col items-center xl:items-baseline space-y-4 mt-6 mb-12'>
                    <h1 className='font-bold text-2xl '>Skills</h1>
                    <div className='flex flex-col'>
                        <div className='flex flex-col sm:flex-row sm:space-x-5 space-y-5 sm:space-y-0'>
                            {/* frontend skills */}
                            <div className="w-[280px] h-[215px] border border-black rounded-2xl border-b-2 px-5 space-y-1 sm:text-lg md:text-xl hover:border-2">    
                                <h1 className='font-bold mt-2'>Frontend</h1>
                                <div className='flex  flex-wrap  h-[160px] ml-1'>
                                    {frontend.map((item)=>(
                                        <div className='flex flex-row items-center'>
                                            <Checkmark />
                                            <h1 className='ml-1 mr-5'>{item}</h1>
                                        </div>
                                    ))}
                                
                                </div>
                            </div>
                            {/* backend skills */}
                            <div className="w-[280px] h-[215px] border border-black rounded-2xl border-b-2 px-[19px] space-y-2 sm:text-lg md:text-xl hover:border-2">    
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