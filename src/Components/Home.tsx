// import HappyDwarf from "../assets/HappyDwarf.jpg"
// import Flight from "../assets/flight.jpg"
import { BsGithub } from "react-icons/bs";
// import { IoIosRocket } from "react-icons/io";
import { IoRocketOutline } from "react-icons/io5";
// import resume from "../assets/Philipe_Ayres_Resume.pdf";
// import Spaceman from "../assets/spaceman.jpg";
import Helmet from "../assets/helmet.png";
// import Lineastronaut from "../assets/lineastronaut.webp";
import { FaLinkedin } from "react-icons/fa";

interface HomeProps {
    handleSectionClick: (section:string)=>void
}


const Home: React.FC<HomeProps> = ({handleSectionClick}) =>{
    return(
        <div className="flex flex-col lg:flex-row justify-center items-center xl:h-screen w-full xl:mt-0 tracking-widest"> 
            {/* content1 */}
            <div className=" flex flex-col justify-center space-y-14 order-2 lg:order-1">
                    <div className="space-y-6 flex items-center flex-col">
                        <div className="flex flex-row items-start justify-start w-[500px]">
                            <h1 className="text-3xl flex flex-col mr-2">
                                Hi, I'm Philipe Ayres    
                            </h1>
                            <IoRocketOutline className="icon-hover hidden sm0:block" size={35}/>
                        </div>
                        <p className="text-xl w-[500px] leading-relaxed">
                            “ I’m a <strong>frontend developer/UX Designer</strong> who has a passion for coding, creating, 
                            and designing with the understanding and application of UI/UX principles. The 
                            user is always placed at the forefront. “
                        </p>
                    
                    </div>

            </div>

            {/* content2 */}
             {/* image */}
             <div className="mb-10 lg:mb-0 flex flex-col lg:flex-row order-1 lg:order-2">
                <img className=" transform active:scale-95 transition 
                                duration-150 icon-hover3 rounded-full" 
                     src={Helmet} 
                    
                     width={500}
                     />
                <div className="flex flex-row lg:flex-col justify-center mt-8 space-x-2 lg:space-x-0 lg:mt-0 lg:space-y-2">
                    <a href="https://www.linkedin.com/in/philipe-ayres-2b0aab206/" target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-row icon-hover justify-center duration-200">
                        <FaLinkedin  size={35}/>
                    </a>
                    <a href="https://github.com/TenScoops" target="_blank" rel="noopener noreferrer">
                        <BsGithub className="icon-hover cursor-pointer" size={35}/>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Home