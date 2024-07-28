import Astronaut from '../assets/astronaut.png'

const About = () => {
    return(<div className="flex flex-col items-center justify-center">
        <h1>“ I’m a programmer who has a passion for coding, creating, and designing with the understanding and 
            application of UI/UX principles. The user is always placed at the forefront. “
            </h1>
            <div>
                <img src={Astronaut} width={400}/>
                <div>
                    <div>Education</div>
                    <div>Technologies</div>
                </div>
            </div>
    </div>)
}

export default About