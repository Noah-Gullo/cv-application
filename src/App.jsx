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
        <GeneralInfo formVisible={true}/>
        <Education formVisible={true}/>
        <Experience formVisible={true}/>
        <button id="editButton" onClick={submitCV}>Edit</button>
      </>
    )
  }

  return (
    <>
      <GeneralInfo formVisible={false}/>
      <Education formVisible={false}/>
      <Experience formVisible={false}/>
      <button id="submitButton" onClick={submitCV}>Submit</button>
    </>
  );
}

export default App
