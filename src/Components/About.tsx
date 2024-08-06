import Rocket from '../assets/Rocket.png'
import { Checkmark } from '../icons'

const About = () => {
    return(<div className="flex flex-col items-center justify-center h-screen space-y-5 w-full">
        <h1 className='text-xl max-w-5xl mb-12 leading-relaxed'>
            “ I’m a programmer who has a passion for coding, creating, and designing with the understanding and 
            application of UI/UX principles. The user is always placed at the forefront. Currently, I work as an AI Training Specialist, enhancing my technical skills daily. “
        </h1>
        <div className='flex flex-row items-center space-x-8 '>
            <div className='rounded-full'>
                <img className='rounded-full transform active:scale-95 transition 
                                duration-150 cursor-pointer' src={Rocket} width={400}/>
            </div>
            <div className=''>
                <div className='space-y-4'>
                    <h1 className='font-bold text-2xl'>Education</h1>
                    <div className="w-[580px] h-[220px] flex flex-col justify-center border border-black rounded-2xl  border-b-2 px-9 space-y-6 text-xl hover:border-2">
                        <h1 >Associate’s in Computer Science at Howard Community College</h1>
                        <h1 >Bachelor’s in Technology and Information Design at University of Maryland, College Park</h1>
                    </div>
                </div>

                <div className='space-y-4 mt-6 mb-12'>
                    <h1 className='font-bold text-2xl '>Skills</h1>
                    <div className='flex flex-col'>
                        <div className='flex flex-row space-x-5'>
                            <div className="w-[280px] h-[215px] border border-black rounded-2xl border-b-2 px-5 space-y-1 text-xl hover:border-2">    
                            <h1 className='font-bold mt-2'>Frontend</h1>
                            <div className='flex  flex-wrap text-xl h-[160px]'>
                                <div className='flex flex-row items-center'>
                                    <Checkmark />
                                    <h1 className='ml-1 mr-4'>Javascript</h1>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <Checkmark />
                                    <h1 className='ml-1 mr-4'>React js</h1>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <Checkmark />
                                    <h1 className='ml-1 mr-4'>Typescript</h1>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <Checkmark />
                                    <h1 className='ml-1 mr-4'>CSS</h1>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <Checkmark />
                                    <h1 className='ml-1 mr-4'>Tailwindcss</h1>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <Checkmark />
                                    <h1 className='ml-1 mr-4'>Git</h1>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <Checkmark />
                                    <h1 className='ml-1 mr-4'>Figma</h1>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <Checkmark />
                                    <h1 className='ml-1 mr-4'>HTML</h1>
                                </div>
                                
                            
                            </div>
                        </div>
                        <div className="w-[280px] h-[215px] border border-black rounded-2xl border-b-2 px-5 space-y-2 text-xl hover:border-2">    
                            <h1 className='font-bold mt-2'>Backend</h1>
                            <div className='flex  flex-wrap  text-xl h-[90px]'>
                                <div className='flex flex-row items-center'>
                                    <Checkmark />
                                    <h1 className='ml-1 mr-4'>Javascript</h1>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <Checkmark />
                                    <h1 className='ml-1 mr-4'>Node js</h1>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <Checkmark />
                                    <h1 className='ml-1 mr-4'>Express js</h1>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <Checkmark />
                                    <h1 className='ml-1 mr-4'>MySQL</h1>
                                </div>
                                
                            
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