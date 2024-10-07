// import helmet from "../assets/helmetleft.jpg";
// import { IoRocketOutline } from "react-icons/io5";
import Helmet from "../assets/helmet.png";

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
        <img src={Helmet} width={280} className='rounded-full slide-right order-1 lg:order-2 mb-5 lg:mb-0'/>
    </div>
        <div className="space-y-2 mt-5 flex flex-col items-center lg:pr-64">
            
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