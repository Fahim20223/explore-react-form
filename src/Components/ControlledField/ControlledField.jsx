import React, { useState } from "react";

const ControlledField = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", email, password);

    // if (password.length < 6) {
    //   setError("Password must be greater than 6 words");
    // } else {
    //   setError("");
    // }
  };
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);

    if (password.length < 6) {
      setError("Password must be greater than 6 words");
    } else {
      setError("");
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleEmailChange}
          defaultValue={email}
          type="email"
          name="email"
          id=""
          placeholder="Email"
          required
        />
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
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;
