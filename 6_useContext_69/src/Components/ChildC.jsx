import React, { useCallback, useContext } from 'react'
import { UserContext } from '../App'

function ChildC() {
 const user =  useContext(UserContext)
  return (
    <div>
      <h2>Hello ChildC</h2>
      {user.name}
    </div>
  )
}

export default ChildC