import React, { createContext } from "react";
import B from "./B";

 const myContext = createContext();

function A() {
  const name = "hary";

  return (
    <myContext.Provider value={name}>
      <div> Component A {name}</div>
      <B />
    </myContext.Provider>
  );
}

export default A;
export{ myContext };
