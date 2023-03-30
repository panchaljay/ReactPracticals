import React from "react";

function User(props) {
  // let result = props.data;
  // console.log("result", props.name);
  let value;
  return (
    <>
      <div >{props.Cname}</div>

      <div style={{ alignItems: "center" }}>
        <table border={"1px solid black"}>
          <caption><h3>User Data</h3></caption>
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
            </tr>
          </thead>
          <tbody>
            {props.name && props.name.map((item,index) => (
              <tr key={index}>
                <td>{item.id}</td>
                {item.first_name.charAt(0) == "L" ? (
                  <td style={{ color: "red" }}>{item.first_name} {item.last_name}</td>
                ) : (
                  <td>{item.first_name} {item.last_name}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default User;
