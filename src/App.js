import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, NavLink, Outlet } from "react-router-dom";
import Logo from "./Logo";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function App()
{
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div className="container-fluid ">
    <NavLink className="navbar-brand" to="/">Logo</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-around " id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        <NavLink className="nav-link" to="/about">about</NavLink>
        <NavLink className="nav-link" to="/resume"> resume</NavLink>
        <NavLink className="nav-link" to="/contact"> contact</NavLink>
        <NavLink className="nav-link " to="/portfolio">portfolio</NavLink>
       
      </div>
     
       <Outlet/>
 
    </div>
  </div>
</nav>
      
          <Routes>
        <Route path="/" element={<Logo/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </>
  )
}
export default App;