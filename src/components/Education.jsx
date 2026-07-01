import { useState } from "react";
import DateField from "./DateField.jsx";
import TextField from "./TextField.jsx";

const valuesDict = {
  "School Name": "Example School Name",
  "Degree Name": "Example Degree Name",
  "Start Date": "01-01-1970",
  "End Date": "01-01-1970",
}

export default function Education({formVisible = false}){
  const [values, setValues] = useState(valuesDict);

  function handleValue(value, type){
    valuesDict[type] = value;
  }

  if(formVisible){
    return (
      <section id="Education">
        <p>{valuesDict["School Name"]}</p>
        <p>{valuesDict["Degree Name"]}</p>
        <p>{valuesDict["Start Date"]}</p>
        <p>{valuesDict["End Date"]}</p>
      </section>
    );
  }

  return (
    <section id="Education">
      <h1>Education</h1>
      <TextField text="School Name" handleValue={handleValue}></TextField>
      <TextField text="Degree Name" handleValue={handleValue}></TextField>
      <DateField text="Start Date" handleValue={handleValue}></DateField>
      <DateField text="End Date" handleValue={handleValue}></DateField>
    </section>
  );
}