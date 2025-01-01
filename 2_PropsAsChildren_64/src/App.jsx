import { useState } from 'react'
import './App.css'
import Button from './Components/Button'
import Card from './Components/Card'

function App() {

  const [count, setCount] = useState(0)

  const handleClick = () => setCount(count + 1)

  return (
    <>
      {/* <Card /> */}


      <Card>
        <h1>Hello World</h1>
        <p>This is Sneha Roy.</p>
      </Card>


      <Card children="This is a Children"/>


      <Card children="This is a Children with lower priority.">
        {/* This is a inside Children with higher priority. */}
      </Card>


      <Button handleClick={handleClick} count={count}/>


    </>
  )
}

export default App
