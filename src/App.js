import "./App.css";
import { About } from "./Component/About";
import { Hero } from "./Component/Hero";
import {Navbar} from "./Component/Navbar"
import { Skills } from "./Component/Skills";

function App() {
  return (
    <div className="pb-10 bg-richblack-900 w-screen min-h-screen">
       <Navbar/>
       <Hero/>
       <About/>
       <Skills/>
    </div>
  );
}

export default App;
