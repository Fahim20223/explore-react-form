import React from "react";
import Special from "./Special";

const Cousine = ({ name }) => {
  return (
    <div>
      <h2>{name}</h2>
      {name === "Tom Tom" && <Special></Special>}
    </div>
  );
};

export default Cousine;
