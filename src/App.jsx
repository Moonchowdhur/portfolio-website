import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  AOS.init();

  return (
    <div>
      <Navbar></Navbar>

      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;
