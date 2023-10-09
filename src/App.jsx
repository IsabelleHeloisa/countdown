import './App.css'

import { Outlet } from 'react-router-dom'
import NewYear from './assets/newyear.jpg'

import { useContext } from 'react'
import { CountdownContext } from './context/CountdownContext'

function App() {
  const { event } = useContext(CountdownContext)

  let eventImage = null

  if (event) eventImage = event.image

  return (
    <div
      className="App"
      style={{
        background: `url(${eventImage || NewYear}) center/cover no-repeat`
      }}
    >
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default App
