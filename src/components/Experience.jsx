import { useState } from "react";
import ExperienceField from "./ExperienceField";


function Experience(){
  const [experiences, setExperiences] = useState([{id: crypto.randomUUID()}]);

  function handleClick(){
    setExperiences([
      ...experiences,
      {id: crypto.randomUUID()}
    ]);
  }
  return (
    <section id="Experience">
      <h1>Experience</h1>
      {experiences.map((experience) => (
        <ExperienceField key={experience.id}></ExperienceField>
      ))}

      <button onClick={() => {
        handleClick();
      }}>Add Experience </button>
    </section>
  );
}

export default Experience;