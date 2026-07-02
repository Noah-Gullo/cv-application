import { useState } from "react";
export default function DateField({text = "Enter date", handleValue}){
    const [value, setValue] = useState("mm/dd/yyyy");
    const randomID = crypto.randomUUID();
    return (
       <div className="dateField">
        <label htmlFor={randomID}>{text}</label>
        <input type="Date" id={randomID} value={value} onChange={(e) => {
            setValue(e.target.value);
            handleValue(e.target.value, text)
        }}></input>
       </div>
    );
}