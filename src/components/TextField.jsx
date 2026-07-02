import { useState } from "react";
export default function TextField({placeholder = "Enter here", text = "", handleValue}){
   const [value, setValue] = useState("");
  return (
    <input placeholder={placeholder} value={value} className="textField" onChange={(e) => {
      setValue(e.target.value);
      handleValue(e.target.value, placeholder);
    }}/>
  );
}