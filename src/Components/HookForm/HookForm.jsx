import React from "react";
import UseInputField from "../hooks/UseInputField";

const HookForm = () => {
  const [name, nameOnChange] = UseInputField("");
  const [email, emailOnChange] = UseInputField("");
  const [password, passwordOnChange] = UseInputField("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", name, email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={name} onChange={nameOnChange} />
        <br />
        <input defaultValue={email} onChange={emailOnChange} type="email" />
        <br />
        <input
          type="password"
          onChange={passwordOnChange}
          defaultValue={password}
          id=""
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
