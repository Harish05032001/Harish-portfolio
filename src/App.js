import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Footer from "./components/Footer/footer";
import Tech from "./components/Tech/tech";
import Contact from "./components/Contact/contact";
import KeySkills from "./components/KeySkills/keyskills";
import ScrollToTop from "./components/ScrollToTop/scrolltotop";



// import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {  
  
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/about" element={<About />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter> */}

        

        <Navbar/>
          <div className="AppSec1"> 
            <Intro/>
            <About/>
            <Tech/>
            <KeySkills/>
            <Contact/>
          </div>
        <ScrollToTop/>
        <Footer/>


      
      
    </div>
  );
}

export default App;
