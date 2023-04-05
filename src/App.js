import logo from "./logo.svg";
import "./App.css";
import Home from "./PortfolioContainer/Home/Home.js";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Navbar from "./PortfolioContainer/Navbar/Navbar";
import Contact from "./PortfolioContainer/ContactMe/Contact";
import Skills from "./PortfolioContainer/Skills/Skills";
import Resume from "./PortfolioContainer/MyResume/Resume";

function App() {
  return (
    <div className="App">
      <Home />
      <Navbar/>
      {/* <Resume/> */}
      {/* <AboutMe /> */}
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
