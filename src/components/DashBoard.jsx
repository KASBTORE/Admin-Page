import React from 'react'
import Chart from './Chart'
import Sidebar from './Sidebar'
// Chart

function DashBoard() {
  return (
    <div className=' h-screen flex '>
        <Sidebar />
        <Chart/>

    </div>
  )
}

export default DashBoard