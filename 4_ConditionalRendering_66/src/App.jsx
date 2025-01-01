
import { useState } from 'react'
import './App.css'
import LoginBtn from './Components/LoginBtn'
import LogoutBtn from './Components/LogoutBtn'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  if(!isLoggedIn) return <LoginBtn />
  return (
    <div>
      {isLoggedIn && <LogoutBtn />}
    </div>
  )



  // return (
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn />}
  //   </div>
  // )



  // if(isLoggedIn) return <LogoutBtn />
  // else return <LoginBtn />



}

export default App
