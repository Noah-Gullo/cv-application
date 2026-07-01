import { useState } from "react";
import DateField from "./DateField.jsx"
import TextField from "./TextField.jsx";

const valuesDict = {
  "Company Name": "Example company name",
  "Position Title": "Example position title",
  "Description": "Example description",
  "Start Date": "mm-dd-yyyy",
  "End Date": "mm-dd-yyyy"
}

export default function ExperienceField(id){
    const [values, setValues] = useState(valuesDict);
    function handleValue(value, type){
        valuesDict[type] = value;
    }

    return (
        <>
            <TextField text="Company Name" handleValue={handleValue}></TextField>
            <TextField text="Position Title" handleValue={handleValue}></TextField>
            <TextField text="Description" handleValue={handleValue}></TextField>
            <DateField text="Start Date" handleValue={handleValue}></DateField>
            <DateField text="End Date" handleValue={handleValue}></DateField>
        </>
    );
}
