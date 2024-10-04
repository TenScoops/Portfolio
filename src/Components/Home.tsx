import { BsGithub } from "react-icons/bs";

import { IoRocketOutline } from "react-icons/io5";

import Helmet from "../assets/helmet.png";

import { FaLinkedin } from "react-icons/fa";


const Home = () =>{
    return(
        <div className="flex flex-col lg:flex-row justify-center items-center h-screen w-full md:mt-10  tracking-widest"> 
            {/* content1 */}
            <div className=" flex flex-col justify-center space-y-14 order-2 lg:order-1">
                    <div className="space-y-6 flex items-center flex-col">
                        <div className="flex flex-row items-start justify-start px-7 sm0:px-0  w-[400px] sm1:w-[500px]">
                            <h1 className="flex flex-col text-2xl mr-2 sm:text-3xl typewriter">
                                Hi, I'm Philipe Ayres    
                            </h1>
                            <IoRocketOutline className="icon-hover " size={35}/>
                        </div>
                        <p className=" text-lg sm:text-xl px-7 sm0:px-0 w-[400px] sm1:w-[500px] leading-relaxed slide-right">
                            “ I’m a <strong>frontend developer/UX Designer</strong> who has a passion for coding, creating, 
                            and designing with the understanding and application of UI/UX principles. The 
                            user is always placed at the forefront. “
                        </p>
                    
                    </div>

            </div>

            {/* content2 */}
             {/* image */}
             <div className="mb-10 lg:mb-0 flex flex-col lg:flex-row order-1 lg:order-2 slide-left">
                <img className=" transform active:scale-95 transition 
                                duration-150 icon-hover3 rounded-full" 
                     src={Helmet} 
                    
                     width={500}
                     />
                <div className="flex flex-row lg:flex-col justify-center mt-8 space-x-2 lg:space-x-0 lg:mt-0 lg:space-y-2 slide-up">
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