import { useEffect, useState } from "react"
import "./UserCard.css"


export default function UserCard({username, description, imgSrc}) {

  const counts = JSON.parse(localStorage.getItem(JSON.stringify(username)))

  const [count, setCount] = useState(counts ? counts : 0)

  const decrease = () => {
    if(count > 0) setCount(count - 1)
  }

  useEffect(() => {
    localStorage.setItem(JSON.stringify(username), JSON.stringify(count))
  }, [count])

  
  return (
    <div className='container' style={{"borderRadius": "20px"}}>
      <p id='userName'>{username}</p>
      <img src={imgSrc} alt={username + "'s Pic"} />
      <p id='description'>{description}</p>
      <div className="counter">
        <button onClick={decrease}>-</button> 
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  )
}
