
import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Panel from './Components/Panel';

function App() {

  const [name, setName] = useState('');


  const [isActive, setIsActive] = useState(true);

  const showHandler = () => {
    setIsActive(!isActive)
  }


  return (
    <>
      <Card title="card1" name={name} setName={setName}/ >
      <Card title="card2" name={name} setName={setName}/ >

      <p>Value inside the parent : {name}</p>


      <Panel activeIndex={isActive === true} title="About" showHandler={showHandler}>
       <h4>This is the ABOUT Page.</h4>
      </Panel>


      <Panel activeIndex={isActive === false} title="Menu" showHandler={showHandler}>
       <h4>This is the MENU Page.</h4>
      </Panel>

    </>
  )
}

export default App
