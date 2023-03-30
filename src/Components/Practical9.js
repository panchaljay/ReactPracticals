import React from "react";

function Practical9({ firstname, lastname, age, city }) {
  let hell = {
    paddingRight: "50px",
    textAlign: "left",
    paddingLeft:"10px"
  };
  return (
    <>
      <div>Practical9</div>

      <table border={"1px solid black"} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr style={{}}>
            <td style={hell}>
              Full Name
            </td>
            <td style={hell}>
              Last Name
            </td>
            <td style={hell}>Age</td>
            <td style={hell}>City</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={hell}>
              {firstname}
            </td>
            <td style={hell}>{lastname}</td>
            <td style={hell}>{age}</td>
            <td style={hell}>{city}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Practical9;
