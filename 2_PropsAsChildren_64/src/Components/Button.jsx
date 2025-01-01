import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button onClick={props.handleClick}> 
        {props.count}
      </button>
    </div>
  )
}