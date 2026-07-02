import { useState, useId } from "react";
import ExperienceField from "./ExperienceField";

const experienceDict = {
  "Company Name": "",
  "Position Title": "",
  "Description": "",
  "Start Date": "",
  "End Date": ""
};

export default function Experience({formVisible = false}){
  const [experiences, setExperiences] = useState([{values: experienceDict, id: crypto.randomUUID()}]);

  function updateExperience(id, newValues){
    for(let i = 0; i < experiences.length; i++){
      const currExperience = experiences[i];
      if(currExperience.id === id){
        currExperience.values = newValues;
      }
    }
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
            <p>{experience.values["Company Name"]}</p>
            <p>{experience.values["Position Title"]}</p>
            <p>{experience.values["Description"]}</p>
            <p>{experience.values["Start Date"]}</p>
            <p>{experience.values["End Date"]}</p>
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