import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Practical10.css"
function Practical10() {
  const [user, setuser] = useState();
  const getdata = async () => {
    try {
      const response = await axios.get("https://64142404ebce1f9d8c605bec.mockapi.io/user");
    //   console.log("response", response.data);
      setuser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);


  return (
    <>
      <div>Practical10</div>
      <table border={"1px solid black"} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {user &&
            user.map((item,index) => (
               
                <tr  className={ item.age>= 50 ? "red" : 
                    item.age< 20 ? "green"  :
                    20<= item.age < 50 ? "yellow" : "" }  key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.email}</td>
            </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
//  style={item.age>= 50 ?style.red :20<= item.age < 50 ? style.yellow:item.age>= 10 && item.age <= 20?style.green :null }
export default Practical10;
