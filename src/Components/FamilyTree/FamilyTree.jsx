import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";
import "./FamilyTree.css";

export const AssetContext = createContext("");
export const MoneyContext = createContext();
const FamilyTree = () => {
  const asset = "Diamond";
  const newAsset = "gold";
  const [money, setMoney] = useState(0);
  return (
    <div className="family-tree">
      <h1>Family Tree</h1>
      <h4>Total Family Money: {money} </h4>
      <MoneyContext value={[money, setMoney]}>
        <AssetContext.Provider value={newAsset}>
          <Grandpa asset={asset}></Grandpa>
        </AssetContext.Provider>
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;

/**
 * 1. create a context using createContext with a default value
 * make sure you export the context to be used in other files
 */
