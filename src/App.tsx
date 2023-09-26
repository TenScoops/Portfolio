import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import {HiOutlineLightBulb} from "react-icons/hi"

const App = () => {
  return(
    <div className="bg-slate-50">
      <Navbar/>
      <Home/>
      <Projects/>
      <button className="fixed right-4 bottom-4 border-2 shadow-slate-500 shadow-md
                      transform active:scale-95 transition duration-150 border-black rounded-full py-1 px-1">
        <HiOutlineLightBulb size={30}/>
      </button>
    </div>
  )
}

export default App
