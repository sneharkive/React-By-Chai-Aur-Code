import React from 'react'

const ChildComponent = React.memo(
  ({buttonName, handleClick}) => {

    console.log("Child Component Re-render again");

    return (
      <div>
        <button onClick={handleClick}>
          {buttonName}
        </button>
      </div>
    )
  }
)

export default ChildComponent
