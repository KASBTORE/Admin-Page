import React from 'react'
import Chart from './Chart'
import Sidebar from './Sidebar'
// Chart

function DashBoard() {
  return (
    <div className='w-full h-screen flex'>
        <Sidebar />
        <Chart/>

    </div>
  )
}

export default DashBoard