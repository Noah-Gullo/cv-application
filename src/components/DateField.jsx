function DateField({text = "Enter date"}){
    return (
       <>
        <label htmlFor="date">{text}</label>
        <input type="Date" name="date"></input>
       </>
    );
}

export default DateField;