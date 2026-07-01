import DateField from "./DateField.jsx";
import TextField from "./TextField.jsx";

export default function Education({formVisible = false}){
  if(formVisible){
    return (
      <section id="Education">
        <p>SCHOOL NAME</p>
      </section>
    );
  }

  return (
    <section id="Education">
      <h1>Education</h1>
      <TextField text="School Name"></TextField>
      <TextField text="Degree Name"></TextField>
      <DateField text="Start Date"></DateField>
      <DateField text="End Date"></DateField>
    </section>
  );
}