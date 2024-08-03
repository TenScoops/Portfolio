import pomodoroImg from "../assets/image.png"
import { ArrowBack, GitIcon, SiteIcon } from "../icons"
const Pomoprogress = () =>{
    return(<div className="flex flex-col justify-center items-center h-screen">
        <div className="w-[900px]">
            <button className="border border-black rounded-md h-12 w-12 flex items-center justify-center shadow-sharp-sm hover:shadow-sharp-md icon-hover3">
                <ArrowBack />
            </button>
        </div>
        <div className="flex flex-row items-center justify-center w-full">
            {/* <h1 className="font-bold">Project: Pomodoro</h1> */}
            <div className="flex flex-col items-center mr-16 mt-14">
                <img src={pomodoroImg} width={450}/>
                <div className="flex flex-row space-x-8 mt-5">
                    
                    <button className="flex flex-row items-center justify-center w-28 h-12 border border-black space-x-2 shadow-sharp-sm hover:shadow-sharp-lg rounded-md icon-hover2">
                        <GitIcon />
                        <h1>Github</h1>
                    </button>
                    <button className="flex flex-row items-center justify-center w-28 h-12 border border-black space-x-2 shadow-sharp-sm hover:shadow-sharp-lg rounded-md icon-hover2">
                        <SiteIcon />
                        <h1>Website</h1>
                    </button>
                </div>
            </div>
            <div className="flex flex-col  ">
                <h1 className="font-bold">Description</h1>
                <p className="max-w-[500px] text-lg">LifeXP is a web app that merges gamification with resources for emotional well-being and personal  growth. It offers a diverse approach to self-improvement. By offering a gaming experience to life and an  emotional well-being system, people can see growth in their mental and physical health. Its versatility  lies in creating an engaging approach to life.</p>
                <h1 className="font-bold">Technologies</h1>
                <h1 className="font-bold">Aim</h1>
                <h1 className="max-w-[500px] text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos inventore temporibus debitis natus iusto, atque eum necessitatibus nisi esse eos non autem et rerum quas voluptas, illum quaerat odio. Magni!
                Ipsa rerum porro quos ipsum reiciendis sunt aut voluptas sapiente enim omnis facilis repellat officia temporibus praesentium nihil illo mollitia, iste numquam non pariatur. Maiores ad praesentium reprehenderit laborum laudantium.</h1>
            
            </div>
        </div>
    </div>)
}
export default Pomoprogress