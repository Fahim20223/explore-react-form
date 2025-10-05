import React, { use } from "react";
import Cousine from "./Cousine";
import { MoneyContext } from "./FamilyTree";

const Aunt = ({ asset }) => {
  const [money, setMoney] = use(MoneyContext);
  const handleAddMoney = () => {
    setMoney(money + 5000);
  };
  return (
    <div>
      <h2>Aunt</h2>
      <section className="flex">
        <Cousine asset={asset} name="Tom Tom"></Cousine>
        <Cousine name="jo jo"></Cousine>
        <button
          onClick={handleAddMoney}
          // onClick={() => {
          //   setMoney(money + 5000);
          // }}
        >
          Add 5000 taka{" "}
        </button>
      </section>
    </div>
  );
};

export default Aunt;
