import { useState, useId } from "react";
import ExperienceField from "./ExperienceField";

const experienceDict = {
  "Company Name": "Example company name",
  "Position Title": "Example position title",
  "Description": "Example description",
  "Start Date": "mm-dd-yyyy",
  "End Date": "mm-dd-yyyy"
};

export default function Experience({formVisible = false}){
  const [experiences, setExperiences] = useState([{values: experienceDict, id: crypto.randomUUID()}]);

  function addExperience(){
    const randomID = crypto.randomUUID();
    setExperiences([
      ...experiences,
      {values: experienceDict, id: randomID}
    ]);
  }

  function removeExperience(targetID){
    setExperiences(
      experiences => experiences.filter(experience => experience.id !== targetID)
    );
  }

  if(formVisible){
    return (
      <section id="Experience">
        {experiences.map((experience) => (
          <div className="experience" id={experience.id} key={experience.id}>
            <p>{experience.id}</p>
          </div>
        ))}
      </section>
    );
  }

  return (
    <section id="Experience">
      <h1>Experience</h1>
      {experiences.map((experience) => (
        <div className="experience" id={experience.id} key={experience.id}>
          <ExperienceField id={experience.id}></ExperienceField>
          <button onClick={() => {
            removeExperience(experience.id);
          }}>Remove Experience</button>
        </div>
      ))}

      <button onClick={() => {
        addExperience();
      }}>Add Experience </button>
    </section>
  );
}