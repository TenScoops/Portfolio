import { FaFigma } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AiImg from "../assets/AI.webp";
import { ArrowBack, FigmaIcon } from "../icons";

interface ImaginAIProps{
    handleSectionClick: (section:string)=>void
}
const ImaginAi:React.FC<ImaginAIProps> = ({handleSectionClick}) =>{
    const navigate = useNavigate()

    const handleButtonClick=() =>{
        navigate("/projects")
        setTimeout(()=>{
            handleSectionClick("projects")
        },50)
    }

    return(<div className="flex flex-col justify-center items-center h-screen">
        <div className="w-[345px] sm0:w-[420px] sm:w-[470px] lg:w-[1030px]">
            <button className="border border-black rounded-md h-12 w-12 flex items-center justify-center shadow-sharp-sm hover:shadow-sharp-md icon-hover3"
                    onClick={handleButtonClick}>
                <ArrowBack />
            </button>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full">

            <div className="flex flex-col  items-center lg:items-baseline">
                {/* Description */}
                <h1 className="font-bold mb-3">Description</h1>
                <p className="max-w-[500px] text-base sm:text-lg text-center lg:text-start ">
                    ImaginAI is a design concept for an image generator that transforms ideas into high-quality visuals. The concept focuses on creating a tool that would simplify the process of generating and customizing images. This makes it an effective solution and tool for both personal and professional projects. Its goal is to provide a better approach to visual creation, enhancing creativity and efficiency.
                </p>

                {/* Button */}
                <div className="mt-3">
                    <h1 className="font-bold mb-4">Technologies</h1>
                    <div className="flex flex-row">
                        <FaFigma size={30}/>
                        <h1>Figma</h1>
                    </div>
                </div>
               
            </div>

            <div className="hidden lg:block sw-0 h-[440px] border border-black ml-8 mr-8"></div>

            <div className="flex flex-col items-center mt-14">
            <img className="sm:hidden shadow-sharp-md-noborder" src={AiImg} width={350}/>
            <img className="hidden sm:block shadow-sharp-md-noborder" src={AiImg} width={470}/>
                <div className="flex flex-row space-x-8 mt-5">
                    <a href="https://www.figma.com/design/3ZnZIo9oCbOosKmQ140Fg0/ImaginAI---Final-prototype?node-id=0-1&t=7yIh3CLP3dHTVX3f-0" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-row items-center justify-center w-28 h-12 border border-black space-x-2 shadow-sharp-sm hover:shadow-sharp-lg rounded-md icon-hover2">
                            <FigmaIcon />
                            <h1>Figma</h1>
                    </a>
                </div>
            </div>
        </div>
    </div>)
}

export default ImaginAi