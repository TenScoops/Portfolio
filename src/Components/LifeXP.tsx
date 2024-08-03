import lifexpimg from "../assets/lifexpimg.png"
import { ArrowBack, FigmaIcon, GitIcon, SiteIcon } from "../icons"

const LifeXP = () =>{
    return(<div className="flex flex-col justify-center items-center h-screen">
        <div className="flex items-start justify-start">
            <button className="border border-black rounded-md h-10 w-10 flex items-center justify-center">
                <ArrowBack />
            </button>
        </div>
        <h1 className="font-bold">Project: LifeXP</h1>
        <div className="flex flex-col items-center w-full">
            <img src={lifexpimg} width={670}/>
            <div className="flex flex-row space-x-8">
                <button className="flex flex-row items-center justify-center w-28 h-12 border border-black space-x-2 shadow-sharp-sm hover:shadow-sharp-lg rounded-md icon-hover2">
                    <FigmaIcon />
                    <h1>Figma</h1>
                </button>
                <button className="flex flex-row items-center justify-center w-28 h-12 border border-black space-x-2 shadow-sharp-sm hover:shadow-sharp-lg rounded-md icon-hover2">
                    <GitIcon />
                    <h1>Github</h1>
                </button>
                <button className="flex flex-row items-center justify-center w-28 h-12 border border-black space-x-2 shadow-sharp-sm hover:shadow-sharp-lg rounded-md icon-hover2">
                    <SiteIcon />
                    <h1>Figma</h1>
                </button>
            </div>
        </div>
        <div className="flex flex-col mt-8 ">
            <h1 className="font-bold">Description</h1>
            <p className="max-w-[700px] text-lg">LifeXP is a web app that merges gamification with resources for emotional well-being and personal  growth. It offers a diverse approach to self-improvement. By offering a gaming experience to life and an  emotional well-being system, people can see growth in their mental and physical health. Its versatility  lies in creating an engaging approach to life.</p>
            <h1 className="font-bold">Technologies</h1>
        </div>
    </div>)
}

export default LifeXP