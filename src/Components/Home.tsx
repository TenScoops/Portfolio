import HappyDwarf from "../assets/HappyDwarf.jpg"
import {BsGithub, BsLinkedin} from "react-icons/bs"
import {FaCode} from "react-icons/fa6"

const Home = () =>{
    return(
        <div className="flex flex-row justify-center items-center h-screen">
            <div className="mr-10 flex flex-col  justify-center space-y-10">
                <h1 className="text-5xl flex flex-row items-center">Learning and creating<span><FaCode className="ml-2" size={40}/></span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.ratione quasi ad <br/>o veritatis quam rerum odio velit ea! Nobis, veniam.</p>
                <div className="flex flex-row  space-x-2 w-[500px]">
                    <button className="flex flex-row justify-center bg-black rounded py-3 text-white w-1/4 ">
                        Github <BsGithub className="ml-3" size = {25}/>
                    </button>
                    <button className="flex flex-row justify-center bg-black rounded py-3 text-white w-1/4 ">
                        Linkedin<BsLinkedin className="ml-3" size = {25}/>
                    </button>
                </div>
            </div>
            <div>
                <img className="rounded-full border-2 border-black" src={HappyDwarf} height={450} width={450}/>
            </div>
        </div>
    )
}
export default Home