// import HappyDwarf from "../assets/HappyDwarf.jpg"
// import Flight from "../assets/flight.jpg"
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { IoEnterOutline } from "react-icons/io5";
// import ProfilePic from "../assets/profile.png";
import Spaceman from "../assets/spaceman.jpg";




const Home = () =>{
    return(
        <div id="Home" className="flex flex-row justify-center items-center h-screen">
            {/* image */}
            <div className="mr-20">
                <img className="rounded-full transform active:scale-95 transition 
                                duration-150 border-2 border-black cursor-pointer" 
                     src={Spaceman} 
                    
                     width={400}
                     />
            </div>
            {/* Greetings and CTA */}
            <div className=" flex flex-col justify-center space-y-14">
                <div className="space-y-6 flex items-center justify-start flex-col">
                    <h1 className="text-4xl flex flex-col ">
                        Hi! I'm Philipe Ayres, a     
                    </h1>
                    <h1 className="text-4xl font-bold">
                        frontend developer
                    </h1>
                </div>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.ratione quasi ad <br/>o veritatis quam rerum odio velit ea! Nobis, veniam.</p> */}
                <div className="flex flex-row items-center justify-center ">
                    <button className="flex flex-row icon-hover2 justify-center mr-4 bg-black rounded py-4 text-white w-1/4 shadow-transition duration-200 shadow-sharp-md border border-white hover:shadow-sharp-lg">
                        Resume <IoEnterOutline className="ml-1" size={25}/>
                    </button>

                    <button className="text-medium border rounded w-1/4 border-black ml-4 py-4 icon-hover2 cursor-pointer hover:no-underline shadow-transition duration-200 shadow-sharp-md hover:shadow-sharp-lg">
                        Contact
                    </button>
                    {/* <button className="flex flex-row justify-center bg-black rounded py-3 text-white w-1/4 ">
                        Linkedin<BsLinkedin className="ml-3" size = {25}/>
                    </button> */}
                    
                </div>
                <div className="flex flex-row items-center justify-center w-[500px] space-x-3">
                    <BsGithub className="icon-hover cursor-pointer" size={35}/>
                    <FaLinkedin className="icon-hover cursor-pointer" size={35}/>
                </div>
                {/* <div className="flex space-x-5 flex-row">
                    <FaHtml5 className="text-orange-500 cursor-pointer" size={30}/>
                    <IoLogoCss3 className="text-blue-400 cursor-pointer" size={30}/>
                    <IoLogoJavascript className="text-yellow-400 bg-black cursor-pointer rounded" size={28}/>
                    <FaReact className="text-blue-500 cursor-pointer" size={29}/>
                    <SiTailwindcss className="text-cyan-400 cursor-pointer" size={29}/>
                    <FaNode className="text-green-600 cursor-pointer" size={31} />
                </div> */}
            </div>
            
        </div>
    )
}
export default Home