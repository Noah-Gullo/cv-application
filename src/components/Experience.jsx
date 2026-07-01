import { useState, useId } from "react";
import ExperienceField from "./ExperienceField";

export default function Experience({formVisible = false}){
  const [experiences, setExperiences] = useState([{id: crypto.randomUUID()}]);

  function addExperience(){
    setExperiences([
      ...experiences,
      {id: crypto.randomUUID()}
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
        <p>EXPERIENCE 1</p>
      </section>
    );
  }

  return (
    <section id="Experience">
      <h1>Experience</h1>
      {experiences.map((experience) => (
        <div className="experience" id={experience.id} key={experience.id}>
          <ExperienceField></ExperienceField>
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