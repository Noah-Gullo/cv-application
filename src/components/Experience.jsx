import DateField from "./DateField.jsx"
import TextField from "./TextField.jsx";

function Experience(){
  return (
    <section id="Experience">
      <h1>Experience</h1>
      <TextField text="Company Name"></TextField>
      <TextField text="Position Title"></TextField>
      <DateField text="Start Date"></DateField>
      <DateField text="End Date"></DateField>
    </section>
  );
}

export default Experience;