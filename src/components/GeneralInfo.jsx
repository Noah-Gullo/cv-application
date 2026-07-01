import { useState } from "react";
import TextField from "./TextField.jsx";

const valuesDict = {
  "Name": "a",
  "Email": "a@gmail.com",
  "Phone Number": "111-1111-1111"
};

export default function GeneralInfo({formVisible = false}){
  const [values, setValues] = useState(valuesDict);

  function handleValue(value, type){
    valuesDict[type] = value;
  }

  if(formVisible){
    return (
      <section id="GeneralInfo">
        <p>{values["Name"]}</p>
        <p>{values["Email"]}</p>
        <p>{values["Phone Number"]}</p>
      </section>
    );
  }

  return (
    <section id="GeneralInfo">
      <h1>General Information</h1>
      <TextField text="Name" handleValue={handleValue}/>
      <TextField text="Email" handleValue={handleValue}/>
      <TextField text="Phone Number" handleValue={handleValue}/>
    </section>
  );
}