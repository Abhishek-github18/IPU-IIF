import React from "react";
import Rotating_earth from "./Rotating_earth.gif";

const spinner = () => {
  return (
    <div>
      <img
        src={Rotating_earth}
        style={{ width: "100px", margin: "auto", display: "block" }}
        alt=""
      />
    </div>
  );
};

export default spinner;
