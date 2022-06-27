import React, { useState } from "react";
import "./input.css";
const Input = (props) => {
  const [focused, setFocused] = useState(false);

  const { label, onChange, errorMessage, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="input">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus} //click and leave
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default Input;
