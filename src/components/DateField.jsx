export default function DateField({text = "Enter date", handleValue}){
    const randomID = crypto.randomUUID();
    return (
       <div className="dateField">
        <label htmlFor={randomID}>{text}</label>
        <input type="Date" id={randomID} onChange={(e) => {
            let value = e.target.value;
            value = value.slice(5) + "-" + value.slice(0, 4);
            handleValue(value, text)
        }}></input>
       </div>
    );
}