import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"

const App = () => {
  return(
    <div className="bg-slate-50">
      <Navbar/>
      <Home/>
      <Projects/>
    </div>
  )
}

export default App
