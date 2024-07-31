import Astronaut from '../assets/astronaut.png'

const About = () => {
    return(<div className="flex flex-col items-center justify-center h-screen space-y-5 w-full">
        <h1 className='text-xl max-w-5xl oblique mb-12'>
            “ I’m a programmer who has a passion for coding, creating, and designing with the understanding and 
            application of UI/UX principles. The user is always placed at the forefront. “
        </h1>
        <div className='flex flex-row space-x-8 '>
            <div>
                <img src={Astronaut} width={500}/>
            </div>
            <div className='space-y-8'>
                <div className="w-[600px] h-[250px] border border-black rounded-2xl  border-b-2 px-9 space-y-3 text-xl hover:border-2">
                    <h1 className='font-bold mt-2 '>Education</h1>
                    <h1 >Associate’s in Computer Science at Howard Community College</h1>
                    <h1 >Bachelor’s in Technology and Information Design at University of Maryland, College Park</h1>
                </div>
                <div className="w-[600px] h-[250px] border border-black rounded-2xl border-b-2 px-9 text-xl hover:border-2">
                    <h1 className='font-bold mt-2'>Technologies</h1>
                    <h1>Java</h1>
                    <h1>Java</h1>
                    <h1>Java</h1>
                    <h1>Java</h1>
                </div>
            </div>
        </div>
</div>)
}

export default About