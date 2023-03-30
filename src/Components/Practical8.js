import React from 'react'
import ComanComponent from './Practical8/ComanComponent'
import { Link, Route, Routes } from "react-router-dom";

function Practical8() {
  return (
    <>
    <div>Practical8</div>
    <div>
        <Link to="/user">User</Link>&nbsp;
        <Link to="/contact">Contact Us</Link>&nbsp;
        <Link to="/home">Home</Link>&nbsp;
      </div>
    <ComanComponent/>
  
    </>
  )
}

export default Practical8