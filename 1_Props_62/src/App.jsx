
import './App.css'
import UserCard from './Components/UserCard'

import Anya from "./assets/Anya.jpeg"
import Kakashi from "./assets/Kakashi.jpg"
import Itachi from "./assets/Itachi.jpg"


function App() {
  return (
    <>
      <div className='appContainer'>
        <UserCard username="Anya Forger" description="Psychic" imgSrc={Anya} />
        <UserCard username="Kakashi Hatake" description="Ninja" imgSrc={Kakashi} />
        <UserCard username="Itachi Uchiha" description="Legend" imgSrc={Itachi} />
      </div>
    </>
  )
}

export default App
