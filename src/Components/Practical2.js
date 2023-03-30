import React, { useState,useRef } from "react";

function Practical2() {
    const refElement = useRef(null)
    const rElement = useRef(null)
    
    const handleclick=()=>{
      rElement.current.innerHTML =   refElement.current.value
    }
    
    return (
        <>
      <div>Practical2</div>
      <input ref={refElement}  />   
      <button onClick={handleclick}>Click me</button>
      <p ref={rElement} ></p>

    </>
  );
}

export default Practical2;
