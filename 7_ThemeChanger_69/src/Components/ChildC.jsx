import React, { useContext } from 'react'
import { ThemeContext, UserContext } from '../App'

function ChildC() {

  const user = useContext(UserContext)

 const {theme, setTheme} =  useContext(ThemeContext)

 const handleClick = () => { setTheme(!theme) }

 
  return (
    <div>
      <h2>data: {user.name}</h2>
      <button onClick={handleClick}>Change Theme</button>
      
    </div>
  )
}

export default ChildC