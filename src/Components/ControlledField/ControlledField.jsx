import React, { useState } from "react";

const ControlledField = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  const [password, setPassword] = useState("");
  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="" placeholder="Email" required />
        <br />
        <input
          type="password"
          name="password"
          onChange={handlePasswordOnChange}
          defaultValue={password}
          id=""
          placeholder="Password"
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ControlledField;
