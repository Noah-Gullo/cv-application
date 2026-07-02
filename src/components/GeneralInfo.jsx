import { useState } from "react";
import TextField from "./TextField.jsx";

const valuesDict = {
  "Name": "Joe Shmoe",
  "Email": "jshmoe@gmail.com",
  "Phone Number": "123-1234-4321"
};

export default function GeneralInfo({formVisible = false}){
  const [values, setValues] = useState(valuesDict);

  function handleValue(value, type){
    valuesDict[type] = value;
    console.log("HANDLE VALUE: " + valuesDict[type]);
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
      <TextField placeholder="Name" text={valuesDict["Name"]} handleValue={handleValue}/>
      <TextField placeholder="Email" text={valuesDict["Email"]} handleValue={handleValue}/>
      <TextField placeholder="Phone Number" text={valuesDict["Phone Number"]} handleValue={handleValue}/>
    </section>
  );
}