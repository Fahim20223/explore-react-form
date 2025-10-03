import React from "react";
import UseInputField from "../hooks/UseInputField";

const HookForm = () => {
  const [name, nameOnChange] = UseInputField("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={name} onChange={nameOnChange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
