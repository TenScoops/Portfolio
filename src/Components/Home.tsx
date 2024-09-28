// import HappyDwarf from "../assets/HappyDwarf.jpg"
// import Flight from "../assets/flight.jpg"
import { BsGithub } from "react-icons/bs";
// import { IoIosRocket } from "react-icons/io";
import { IoEnterOutline, IoRocketOutline } from "react-icons/io5";
// import resume from "../assets/Philipe_Ayres_Resume.pdf";
import Spaceman from "../assets/spaceman.jpg";
// import Lineastronaut from "../assets/lineastronaut.webp";
interface HomeProps {
    handleSectionClick: (section:string)=>void
}


const Home: React.FC<HomeProps> = ({handleSectionClick}) =>{
    return(
        <div className="flex flex-col lg:flex-row justify-center items-center xl:h-screen w-full mt-20 xl:mt-0">
            {/* image */}
            <div className="mb-10 lg:mb-0 lg:mr-20">
                <img className=" transform active:scale-95 transition 
                                duration-150 icon-hover3 rounded-full" 
                     src={Spaceman} 
                    
                     width={410}
                     />
            </div>
            {/* Greetings and CTA */}
            <div className=" flex flex-col justify-center space-y-14">
                <div className="flex items-center justify-center">
                    <div className="space-y-6 flex items-center flex-col">
                        <h1 className="text-2xl flex flex-col mr-2">
                            Hi! I'm Philipe Ayres, a     
                        </h1>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="flex flex-row  items-center space-x-2">
                                <h1 className="text-2xl text-center sm:text-3xl font-bold">
                                    Frontend Developer / UX Designer
                                </h1>
                                <IoRocketOutline className="icon-hover hidden sm0:block" size={35}/>
                            </div>
                            {/* <span className="text-3xl font-bold">and</span>
                            <div className="flex flex-row items-center space-x-2">
                                <h1 className="text-4xl font-bold">UX Designer</h1>
                                <IoRocketOutline className="icon-hover" size={35}/>
                            </div> */}

                        </div>
                    </div>
                </div>
              
                <div className="flex flex-row items-center justify-center ">
                    <a href="https://www.linkedin.com/in/philipe-ayres-2b0aab206/" target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-row icon-hover2 justify-center w-32 mr-4 bg-black rounded py-4 text-white px-5 shadow-transition duration-200 shadow-sharp-md border border-white hover:shadow-sharp-lg">
                        Linkedin <IoEnterOutline className="ml-1" size={25}/>
                    </a>

                    <button className="text-medium border rounded  border-black w-32 ml-4 py-4 px-5 icon-hover2 cursor-pointer hover:no-underline shadow-transition duration-200 shadow-sharp-md hover:shadow-sharp-lg"
                            onClick={()=>handleSectionClick("contact")}>
                        Contact
                    </button>
                </div>
                <div className="flex flex-row items-center justify-center space-x-3">
                    <a href="https://github.com/TenScoops" target="_blank" rel="noopener noreferrer">
                        <BsGithub className="icon-hover cursor-pointer" size={35}/>
                    </a>
                    {/* <a href="https://www.linkedin.com/in/philipe-ayres-2b0aab206/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon-hover cursor-pointer" size={35}/>
                    </a> */}
                </div>
            </div>
            
        </div>
    )
}
export default Home