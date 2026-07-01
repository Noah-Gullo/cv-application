import { useState } from "react";
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import './styles/App.css'

function App() {  
  const [formVisible, setVisible] = useState(false);

  function submitCV(){
    setVisible(!formVisible);
  }

  if(formVisible){
    return (
      <>
      <h1>test</h1>
      </>
    )
  }

  return (
    <>
      <GeneralInfo />
      <Education />
      <Experience />
      <button id="submitButton" onClick={submitCV}>Submit</button>
    </>
  );
}

export default App
