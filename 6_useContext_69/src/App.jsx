
import { createContext, useState } from 'react'
import './App.css'
import ChildA from './Components/ChildA'


//3 steps of useContext
  // 1) Create Context
  // 2) Provide
  // 3) Consume


  //step 1 : Create Context
  const UserContext = createContext() 


function App() {

  
  const [user, setUser] = useState({name: "Sneha"})



  return (
    <>
      {/* step 2 : wrap all the child (who want to access data (/ who want to be consumer)) inside a provider */}

      <UserContext.Provider value={user}>   
      {/* step 3 : Pass Value */}

        <ChildA />

      </UserContext.Provider>
      
    </>
  )
}

export default App


// step : 4 Export
export {UserContext}

//step 5 : now consume the value at the any child who are wrapped by provider

