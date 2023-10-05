import './App.css'

import { Outlet } from 'react-router-dom'
import NewYear from './assets/newyear.jpg'

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${NewYear})` }}>
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default App
