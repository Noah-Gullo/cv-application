import DateField from "./DateField.jsx"
import TextField from "./TextField.jsx";

function ExperienceField(){
    return (
        <>
            <h1>Experience</h1>
            <TextField text="Company Name"></TextField>
            <TextField text="Position Title"></TextField>
            <TextField text="Description"></TextField>
            <DateField text="Start Date"></DateField>
            <DateField text="End Date"></DateField>
        </>
    );
}

export default ExperienceField;