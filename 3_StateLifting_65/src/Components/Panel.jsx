import React from 'react'

export default function Panel({title, children, activeIndex, showHandler}) {
  return (
    <div>
      <h1>{title}</h1>
      {activeIndex ? children : 
        (<button onClick={showHandler}>Show More</button>)
      }
    </div>
  )
}
