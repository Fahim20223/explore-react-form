import React, { useState } from "react";

const UseInputField = (defaultValue) => {
  const [fieldValue, setField] = useState(defaultValue);

  const handleFieldOnChange = (e) => {
    setField(e.target.value);
  };

  return [fieldValue, handleFieldOnChange];
};

export default UseInputField;
