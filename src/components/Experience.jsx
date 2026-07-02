import { useState, useId } from "react";
import ExperienceField from "./ExperienceField";

const experienceDict = {
  "Company Name": "Example company name",
  "Position Title": "Example position title",
  "Description": "Example description",
  "Start Date": "01-01-1970",
  "End Date": "01-01-1970"
};

export default function Experience({formVisible = false}){
  const [experiences, setExperiences] = useState([{values: experienceDict, id: crypto.randomUUID()}]);

  function updateExperience(id, newValues){
    experiences[id] = newValues;
  }

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
            <p>{experiences[experience.id]["Company Name"]}</p>
            <p>{experiences[experience.id]["Position Title"]}</p>
            <p>{experiences[experience.id]["Description"]}</p>
            <p>{experiences[experience.id]["Start Date"]}</p>
            <p>{experiences[experience.id]["End Date"]}</p>
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
          <ExperienceField id={experience.id} updateExperience={updateExperience}></ExperienceField>
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