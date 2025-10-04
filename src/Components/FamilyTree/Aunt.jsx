import React from "react";
import Cousine from "./Cousine";

const Aunt = () => {
  return (
    <div>
      <h2>Aunt</h2>
      <section className="flex">
        <Cousine name="Tom Tom"></Cousine>
        <Cousine name="jo joo"></Cousine>
      </section>
    </div>
  );
};

export default Aunt;
