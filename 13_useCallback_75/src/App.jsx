import './App.css'

import { useCallback, useState } from 'react'
import ChildComponent from './Components/ChildComponent'
import ExpensiveComponent from './Components/ExpensiveComponent'


function App() {
  // const [count, setCount] = useState(0)


  // const handleClick = useCallback(() => {
  //     setCount(count + 1)
  //   }, [count])


  return (
    <>

      <ExpensiveComponent />


      {/* <div> Count : {count} </div>
      <div>
        <button onClick={handleClick}> Increment </button>
      </div>

      <br />  <br />
      <div>
        <ChildComponent buttonName="Click Me" handleClick={handleClick}/>
      </div> */}
    </>
  )
}

export default App
