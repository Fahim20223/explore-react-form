import React from "react";
import Cousine from "./Cousine";

const Uncle = () => {
  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousine name="Rafsan"></Cousine>
        <Cousine name="Japsan"></Cousine>
      </section>
    </div>
  );
};

export default Uncle;
