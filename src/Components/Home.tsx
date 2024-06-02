// import HappyDwarf from "../assets/HappyDwarf.jpg"
// import Flight from "../assets/flight.jpg"
import { FaCode } from "react-icons/fa6"
import { IoEnterOutline } from "react-icons/io5"
import ProfilePic from "../assets/profile.png"




const Home = () =>{
    return(
        <div id="Home" className="flex flex-row justify-center items-center h-screen">
            <div className="mr-20">
                <img className="rounded-full wiggle-border transform active:scale-95 transition 
                                duration-150 border-2 border-black cursor-pointer" 
                     src={ProfilePic} 
                     height={450} 
                     width={450}
                     />
            </div>
            <div className=" flex flex-col  justify-center space-y-10">
                <h1 className="text-5xl flex flex-row items-center">
                    Hi! I'm Philipe Ayres
                    <span>
                        <FaCode className="ml-2" size={40}/>
                    </span>
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.ratione quasi ad <br/>o veritatis quam rerum odio velit ea! Nobis, veniam.</p>
                <div className="flex flex-row items-center  w-[500px]">
                    <button className="flex flex-row justify-center bg-black rounded py-3 text-white w-1/4   transform active:scale-95 transition duration-150">
                        Resume <IoEnterOutline className="ml-1" size={25}/>
                    </button>

                    <h2 className="text-medium underline ml-4 cursor-pointer hover:no-underline">
                        Contact
                    </h2>
                    {/* <button className="flex flex-row justify-center bg-black rounded py-3 text-white w-1/4 ">
                        Linkedin<BsLinkedin className="ml-3" size = {25}/>
                    </button> */}
                    
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