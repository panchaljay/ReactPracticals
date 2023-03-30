import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import User from "./User";
import ContactUS from "./ContactUS";
import Home from "./Home";

function ComanComponent() {
  const [apidata, setapidata] = useState();

  async function getData() {
    try {
      await axios.get("https://reqres.in/api/users?page=2").then((response) => {
        setapidata(response.data.data);
        // console.log("response**",response.data.data);
      });
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  // console.log("Practical", apidata);

 
  return (
    <>
   
      <Routes>
    <Route
      path="/user"
      element={<User name={apidata} Cname="User Component" />}
      exact
    />
    <Route
      path="/contact"
      element={<ContactUS Cname="ContactUS Page" />}
      exact
    />
    <Route path="/home" element={<Home Cname="Home Component" />} exact />
    <Route path="/" element={"Main Component"} exact />
  </Routes>
    </>
  );
}

export default ComanComponent;
