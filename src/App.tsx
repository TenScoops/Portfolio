import { FaArrowDownLong } from "react-icons/fa6";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

const App = () => {
  return(
    <div className=" flex flex-row">
      <Navbar/>
      <div className="flex flex-col">
      <Home/>
      <Projects/>
      </div>
      <div className=" fixed left-60 bottom-10 flex items-center space-x-2">
        <button className="border-2 shadow-slate-500 shadow-md
                        transform active:scale-95 transition duration-150 bg-white border-black rounded-lg py-[0.6rem] px-[0.6rem]">
          <FaArrowDownLong size={27}/>
        </button>
        <h1 className="text-lg">Home</h1>
      </div>
    </div>
  )
}

export default App
