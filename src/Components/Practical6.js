import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./Practical6/Style/navbar.css";
import App from '../App';
import CommanComp from './Practical6/CommanComp';



function Practical6() {
  return (
    <BrowserRouter>
    Praction:- 6
    <div className="main">
      <div className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <div className="dropdown">
          <Link to="/collection" className="dropbtn">
            Collection
          </Link>
          <div className="dropdown-content">
            <Link to="/c1">C1</Link>
            <div className="second-drop">
              <Link to="/p1">P1</Link>
              <Link to="/p2">P2</Link>
              <Link to="/p3">P3</Link>
            </div>
            <Link to="/c2">C2</Link>
            <Link to="/c3">C3</Link>
          </div>
        </div>
      </div>
    </div>   
       <Routes>
        <Route  element={<App/>} exact />
        <Route path="/home" element={<CommanComp name="Home Component"/>} exact />
        <Route path="/contact" element={<CommanComp name="Contact Component"/>} exact />
        <Route path="/about" element={<CommanComp name="About Component"/>} exact />
        <Route path="/collection" element={<CommanComp name="Collection Component"/>} exact />
        <Route path="/c1" element={<CommanComp name="C1 Component"/>} exact />
        <Route path="/c2" element={<CommanComp name="C2 Component"/>} exact />
        <Route path="/c3" element={<CommanComp name="C3 Component"/>} exact />
        <Route path="/p1" element={<CommanComp name="P1 Component"/>} exact />
        <Route path="/p2" element={<CommanComp name="P2 Component"/>} exact />
        <Route path="/p3" element={<CommanComp name="P3 Component"/>} exact />

      </Routes>
    </BrowserRouter>  )
}






export default Practical6