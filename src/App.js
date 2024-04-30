import "./App.css";
import { About } from "./Component/About";
import { Hero } from "./Component/Hero";
import {Navbar} from "./Component/Navbar"
import { Project } from "./Component/Project";
import { Skills } from "./Component/Skills";
import { Contact } from "./Component/Contact";
import { Footer } from "./Component/Footer";

function App() {
  return (
    <div className="bg-richblack-900  w-screen min-h-screen">
       <Navbar/>
       <Hero/>
       <About/>
       <Skills/>
       <Project/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
