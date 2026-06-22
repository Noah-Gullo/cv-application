import { useState } from 'react'
import './App.css'

function GeneralInfo(){
  return (
    <>
      <form>
        <input></input>
      </form>
    </>
  );
}

function Education(){
  return (
    <>
      <p>HELLO WORLD</p>
    </>
  );
}

function Experience(){
  return (
    <>
      <h2>Experience</h2>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GeneralInfo />
      <Education />
      <Experience />
    </>
  );
}

export default App
