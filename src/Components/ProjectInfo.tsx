// import helmet from "../assets/helmetleft.jpg";
// import { IoRocketOutline } from "react-icons/io5";
import Helmet from "../assets/face.jpg";

interface ProjectInfoProps{
    paragraph: ()=>React.ReactNode,
    approach: ()=>React.ReactNode
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({paragraph, approach}) =>{
return(<>
    <div className='flex flex-col lg:flex-row items-center'>
        <div className="order-2 lg:order-1 max-w-4xl slide-right text-md sm:text-lg px-4">
            {paragraph()}
        </div>
        <div className="order-1 lg:order-2 flex flex-col items-center slide-left mb-8 lg:mb-0  lg:border-l border-b lg:border-b-0 border-black">
            <img src={Helmet} width={180} className='rounded-full  mb-5 lg:mb-0 -scale-x-100'/>
            <h1 className="italic font-semibold mt-1  typewriter3">****</h1>
        </div>
    </div>
        <div className="space-y-2 mt-5 flex flex-col items-center slide-right lg:pr-44">
            
            <div className="flex flex-row items-center">
                <h1 className="font-bold text-lg mr-2">My approach</h1>
                {/* <IoRocketOutline size={27}/> */}
            </div>
            <div className="px-4 max-w-4xl text-md sm:text-lg">
                {approach()}
            </div>
        </div>

</>)
}

export default ProjectInfo