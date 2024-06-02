import { FaRegLightbulb } from "react-icons/fa6"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"

const App = () => {
  return(
    <div className="bg-slate-50 flex flex-row">
      <Navbar/>
      <div className="flex flex-col">
      <Home/>
      <Projects/>
      </div>
      <button className="fixed right-4 bottom-4 border-2 shadow-slate-500 shadow-md
                      transform active:scale-95 transition duration-150 bg-black text-white border-black rounded-full py-[0.4rem] px-[0.4rem]">
        <FaRegLightbulb size={27}/>
      </button>
    </div>
  )
}

export default App
