import React from 'react'

export default function Card(props) {
  return (
    <div>
      <h2>Card Components</h2>
      {props.children}
    </div>
  )
}
