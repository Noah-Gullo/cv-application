import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import './styles/App.css'

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
