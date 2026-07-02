import { useState } from "react";
import DateField from "./DateField.jsx"
import TextField from "./TextField.jsx";

const valuesDict = {
  "Company Name": "",
  "Position Title": "",
  "Description": "",
  "Start Date": "",
  "End Date": ""
}

export default function ExperienceField({id, updateExperience}){
    const [values, setValues] = useState(valuesDict);
    function handleValue(value, type){
        valuesDict[type] = value;
        updateExperience(id, valuesDict);
    }

    return (
        <>
            <TextField placeholder="Company Name" text={valuesDict["Company Name"]} handleValue={handleValue}></TextField>
            <TextField placeholder="Position Title" text={valuesDict["Position Title"]} handleValue={handleValue}></TextField>
            <TextField placeholder="Description" text={valuesDict["Description"]} handleValue={handleValue}></TextField>
            <DateField text="Start Date" handleValue={handleValue}></DateField>
            <DateField text="End Date" handleValue={handleValue}></DateField>
        </>
    );
}
