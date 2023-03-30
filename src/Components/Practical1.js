import React, { useState } from 'react'

function Practical1() {
    const [name, setname] = useState("")
  return (
    <>
    <div>Practical1</div>
        <label>{name}</label><br/>
         <input id="name" name="name" onChange={(e)=>setname(e.target.value)}/>   
    </>
  )
}

export default Practical1