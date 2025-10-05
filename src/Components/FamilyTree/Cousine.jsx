import React from "react";
import Special from "./Special";
import Friend from "./Friend";

const Cousine = ({ name, asset }) => {
  return (
    <div>
      <h2>{name}</h2>
      {name === "Tom Tom" && <Special asset={asset}></Special>}
      {name === "jo jo" && <Friend></Friend>}
    </div>
  );
};

export default Cousine;
