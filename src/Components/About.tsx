import Rocket from '../assets/Rocket.png'
import { Checkmark } from '../icons'

const About = () => {
    return(<div className="flex flex-col items-center justify-center h-screen space-y-5 w-full">
        <h1 className='text-xl max-w-5xl oblique mb-12'>
            “ I’m a programmer who has a passion for coding, creating, and designing with the understanding and 
            application of UI/UX principles. The user is always placed at the forefront. “
        </h1>
        <div className='flex flex-row items-center space-x-8 '>
            <div className='rounded-full'>
                <img className='rounded-full' src={Rocket} width={400}/>
            </div>
            <div className=''>
                <div className='space-y-4'>
                    <h1 className='font-bold text-2xl  '>Education</h1>
                    <div className="w-[580px] h-[220px] flex flex-col justify-center border border-black rounded-2xl  border-b-2 px-9 space-y-6 text-xl hover:border-2">
                        <h1 >Associate’s in Computer Science at Howard Community College</h1>
                        <h1 >Bachelor’s in Technology and Information Design at University of Maryland, College Park</h1>
                    </div>
                </div>

                <div className='space-y-4 mt-6'>
                    <h1 className='font-bold text-2xl '>Skills</h1>
                    <div className='flex flex-row space-x-6'>
                        <div className="w-[280px] h-[200px] border border-black rounded-2xl border-b-2 px-9 space-y-3 text-xl hover:border-2">    
                            <h1 className='font-bold mt-2'>Frontend</h1>
                            <div className='flex flex-row max-w-[500px] space-x-5 text-xl'>
                                <h1>Javascript</h1>
                                <h1>React</h1>
                                <h1>CSS</h1>
                            
                            </div>
                        </div>
                        <div className="w-[280px] h-[200px] border border-black rounded-2xl border-b-2 px-7 space-y-3 text-xl hover:border-2">    
                            <h1 className='font-bold mt-2'>Backend</h1>
                            <div className='flex flex-row max-w-[500px] space-x-5 text-xl'>
                                <div className='flex flex-row items-center'>
                                    <Checkmark />
                                    <h1 className='ml-1'>Javascript</h1>
                                </div>
                                <h1>React</h1>
                                <h1>CSS</h1>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>)
}

export default About