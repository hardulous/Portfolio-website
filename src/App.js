import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header.js";
import Nav from "./Components/Nav/Nav.js";
import About from "./Components/About/About.js";
import Experience from "./Components/Experience/Experience.js";
import Portfolio from "./Components/Portfolio/Portfolio.js";
import Contact from "./Components/Contact/Contact.js";
import Footer from "./Components/Footer/Footer.js";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Header />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </Router>
    </>
  );
}

export default App;
