import React, { useState } from "react";

function Practical5() {
  const [counter, setcounter] = useState(1);
  const [data, setdata] = useState([]);
  

  const increment = () => {
    setdata((prev) => [...prev, counter]);
    setcounter(counter + 1);
  };
  return (
    <>
      <div>Practical5:</div>
      <br />
      <div onClick={() => increment()}>
     {data}{counter}
       
      </div>
    </>
  );
}

export default Practical5;
