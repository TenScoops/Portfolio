
import lifexpimg from "../assets/lifexpimg.png"

const LifeXP = () =>{
    return(<div className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col items-center w-full">
            <img src={lifexpimg} width={600}/>
            <div>
                <button>Figma</button>
                <button>Git</button>
                <button>Site</button>
            </div>
        </div>
        <div className="flex flex-col ">
            <h1 className="font-bold">Description</h1>
            <p className="max-w-[700px]">LifeXP is a web app that merges gamification with resources for emotional well-being and personal  growth. It offers a diverse approach to self-improvement. By offering a gaming experience to life and an  emotional well-being system, people can see growth in their mental and physical health. Its versatility  lies in creating an engaging approach to life.</p>
            <h1 className="font-bold">Technologies</h1>
        </div>
    </div>)
}

export default LifeXP