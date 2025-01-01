
import { useState } from 'react'
import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react'

function App() {

  // const [count, setCount] = useState(0)

  // let val = 0
  // let valRef = useRef(0)

  // function handleIncrement(){

  //   val += 1
  //   console.log("Value of val : ", val);

  //   valRef.current += 1
  //   console.log("Value of valRef : ", valRef.current);

  //   setCount(count + 1)
  // }

  // useEffect(() => {
  //   console.log('Render');
  // })


  // let btnRef = useRef()

  // function changeColor(){
  //   btnRef.current.style.backgroundColor = 'blue'
  // }




  const [time, setTime] = useState(0)

  let timerRef = useRef(null)

  function startTimer(){
    timerRef.current = setInterval(() => {
      setTime(time => time + 1)
    }, 1000)
  }

  function stopTimer(){
    clearInterval(timerRef.current)
    timerRef.current = null
  }

  function resetTimer(){
    stopTimer()
    setTime(0)
  }


  return (
    <>
      <h2>Stop Watch : {time} seconds </h2>
      <button onClick={startTimer}> Start </button>
      <br />  <br />
      <button onClick={stopTimer}> Stop </button>
      <br />  <br />
      <button onClick={resetTimer}> Reset </button>



      {/* <button 
      ref= {btnRef}
      onClick={handleIncrement}> Increment </button>
      <br /> <br />
      <p>Count : {count}</p>

      <br />  <br />
      <button onClick={changeColor}> Change Color of 1st Button </button> */}


    </>
  )
}

export default App
