import Astronaut from '../assets/astronaut.png'

const About = () => {
    return(<div className="flex flex-col items-center justify-center h-screen space-y-5 w-full">
        <h1 className='text-lg max-w-5xl oblique'>
            “ I’m a programmer who has a passion for coding, creating, and designing with the understanding and 
            application of UI/UX principles. The user is always placed at the forefront. “
        </h1>
        <div className='flex flex-row space-x-8 '>
            <div>
                <img src={Astronaut} width={400}/>
            </div>
            <div className='space-y-8'>
                <div className="w-[500px] h-[200px] border border-black rounded-2xl shadow-lg border-b-2">Education</div>
                <div className="w-[500px] h-[200px] border border-black rounded-2xl shadow-lg border-b-2">Technologies</div>
            </div>
        </div>
</div>)
}

export default About