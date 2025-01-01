import React from 'react'

export default function Card({name, setName, title}) {
  return (
    <div>
      <input type="text"  onChange={(e) => setName(e.target.value)}/>

      <p>Value inside the {title} : {name}</p>
    </div>
  )
}
