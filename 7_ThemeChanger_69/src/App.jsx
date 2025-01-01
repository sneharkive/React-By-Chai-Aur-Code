import { createContext, useState } from 'react'

import './App.css'
import ChildA from './Components/ChildA'


const UserContext = createContext() 

const ThemeContext = createContext ()

function App() {

  const [user, setUser] = useState({name: "Sneha"})

  const [theme, setTheme] = useState(true)


  return (
    <>

    <UserContext.Provider value={user}>   

      <ThemeContext.Provider value={{theme, setTheme}}>
          <div id='container' style={{backgroundColor: theme === true ? 'antiquewhite' : "blueviolet" }}>
            <ChildA />
          </div>
      </ThemeContext.Provider>

    </UserContext.Provider>

    </>
  )
}

export default App


export {UserContext}

export {ThemeContext}