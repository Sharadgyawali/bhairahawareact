import React from "react";
import { useLocation } from "react-router-dom";

console.log(Location)
function Banner(p) {
  return (
    <div className=" bg-white-500">
      {p.title}
      {p.price}
      {p.location}
  
    </div>
  )
}
export default Banner