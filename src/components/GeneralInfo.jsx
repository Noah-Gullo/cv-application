import { useState } from "react";
import TextField from "./TextField.jsx";

const valuesDict = {
  "Name": "First Last",
  "Email": "example@gmail.com",
  "Phone Number": "123-4567-8910"
};

export default function GeneralInfo({formVisible = false}){
  const [values, setValues] = useState(valuesDict);

  function handleValue(value, type){
    valuesDict[type] = value;
  }

  if(formVisible){
    return (
      <section id="GeneralInfo">
        <p className="infoField">{values["Name"]}</p>
        <p className="infoField">{values["Email"]}</p>
        <p className="infoField">{values["Phone Number"]}</p>
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