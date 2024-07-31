import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import { ArrowDown } from "./icons";

const App = () => {
  return(
    <div className=" flex flex-row">
      <Navbar/>
      <div className="flex flex-col w-full">
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
      <div className=" fixed left-60 bottom-10 flex items-center space-x-2">
        <button className="border mr-2 px-4 transform active:scale-95 transition duration-150 bg-white border-black rounded-sm py-[0.6rem]  shadow-sharp-sm icon-hover hover:shadow-sharp-md">
          <ArrowDown/>
        </button>
        <h1 className="text-lg">Home</h1>
      </div>
    </div>
  )
}

export default App
