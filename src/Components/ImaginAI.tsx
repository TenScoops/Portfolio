import { FaFigma } from "react-icons/fa";
import AiImg from "../assets/AI.png";
import { ArrowBack, FigmaIcon } from "../icons";

const ImaginAi = () =>{
    return(<div className="flex flex-col justify-center items-center h-screen">
        <div className="w-[900px]">
            <button className="border border-black rounded-md h-12 w-12 flex items-center justify-center shadow-sharp-sm hover:shadow-sharp-md icon-hover3">
                <ArrowBack />
            </button>
        </div>
        <div className="flex flex-row items-center justify-center w-full">
            {/* <h1 className="font-bold">Project: Pomodoro</h1> */}

            <div className="flex flex-col  ">
                <h1 className="font-bold mb-3">Description</h1>
                <p className="max-w-[500px] text-lg">
                ImaginAI is a design concept for an image generator that transforms ideas into high-quality visuals. The concept focuses on creating a tool that would simplify the process of generating and customizing images. This makes it an effective solution and tool for both personal and professional projects. Its goal is to provide a better approach to visual creation, enhancing creativity and efficiency.
                </p>
                <div className="mt-3">
                    <h1 className="font-bold mb-4">Technologies</h1>
                    <FaFigma size={30}/>
                </div>
               
            </div>

            <div className="w-0 h-[440px] border border-black ml-8 mr-8"></div>

            <div className="flex flex-col items-center mt-14">
                <img className=" shadow-sharp-md-noborder border border-black " src={AiImg} width={470}/>
                <div className="flex flex-row space-x-8 mt-5">
                    <a href="https://www.figma.com/design/3ZnZIo9oCbOosKmQ140Fg0/ImaginAI---Final-prototype?node-id=0-1&t=7yIh3CLP3dHTVX3f-0" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        <button className="flex flex-row items-center justify-center w-28 h-12 border border-black space-x-2 shadow-sharp-sm hover:shadow-sharp-lg rounded-md icon-hover2">
                            <FigmaIcon />
                            <h1>Figma</h1>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>)
}

export default ImaginAi