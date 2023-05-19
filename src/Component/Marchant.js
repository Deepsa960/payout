import React from "react";
import axios from "axios";

export default function Marchant() {
    axios.get("https://stekpayout.onrender.com/merchants")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        alert("Something went wrong.");
      });
 
  return (
    <div>
      <h1>kjkl</h1>
    </div>
  );
}
