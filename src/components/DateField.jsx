export default function DateField({text = "Enter date"}){
    return (
       <div className="dateField">
        <label htmlFor="date">{text}</label>
        <input type="Date" name="date"></input>
       </div>
    );
}