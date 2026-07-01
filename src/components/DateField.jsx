export default function DateField({text = "Enter date", handleValue}){
    return (
       <div className="dateField">
        <label htmlFor="date">{text}</label>
        <input type="Date" name="date" onChange={(e) => {
            let value = e.target.value;
            value = value.slice(5) + "-" + value.slice(0, 4);
            handleValue(value, text)
        }}></input>
       </div>
    );
}