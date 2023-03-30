import React, { useRef } from "react";

function Practical3() {
  const refElement = useRef(null);

  function handleclick() {
    var value = refElement.current.innerHTML;

    if (value == "ABC") {
      refElement.current.innerHTML = "XYZ";
    } else if ((value == "XYZ")) {
      refElement.current.innerHTML = "ABC";
    }
  }

  return (
    <>
      <div>Practical3</div>
      <div ref={refElement} onClick={handleclick}>
        ABC
      </div>
    </>
  );
}

export default Practical3;
