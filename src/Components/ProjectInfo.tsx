// import helmet from "../assets/helmetleft.jpg";
// import { IoRocketOutline } from "react-icons/io5";
import Helmet from "../assets/helmet.png";

interface ProjectInfoProps{
    paragraph: ()=>React.ReactNode,
    approach: ()=>React.ReactNode
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({paragraph, approach}) =>{
return(<>
    <div className='flex flex-row items-center'>
        {paragraph()}
        <img src={Helmet} width={280} className='rounded-full slide-right'/>
    </div>
        <div className="space-y-2 mt-5 flex flex-col items-center pr-64">
            
            <div className="flex flex-row items-center">
                <h1 className="font-bold text-lg mr-2">My approach</h1>
                {/* <IoRocketOutline size={27}/> */}
            </div>
            {approach()}
        </div>

</>)
}

export default ProjectInfo