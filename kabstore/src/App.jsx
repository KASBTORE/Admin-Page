import { useState } from 'react'
// Sidebar
// import reactLogo from './assets/react.svg'

// import './App.css'
import Sidebar from './components/Sidebar'
import Chart from './components/Chart'
import DashBoard from './components/DashBoard'
import Charts from './components/Charts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-screen">
      <DashBoard />
     {/* <Charts /> */}
     
    </div>
  )
}

export default App
