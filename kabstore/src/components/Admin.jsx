import React , {useState} from 'react'
import { BsPeople } from "react-icons/bs";
import {BsToggleOn} from 'react-icons/bs';
import {BsToggleOff} from 'react-icons/bs'

function Admin() {

    const [change,setChange] = useState(false)
  return (
    <div className='w-full h-screen bg-blue-600'>
        <div className="flex">
            <div className="bg-white h-screen w-[53vw]  p-36">
                <div className="">
                    <h1 className='text-4xl '>Log In To <span className='font-bold text-4xl'>KABSTORE</span> </h1>
                    <h2 className=' font-medium text-3xl'>Admin</h2>
                </div>
                <div className="icon flex p-6 border-b-2 border-gray-300 gap-4">
                    <i className='text-3xl'><BsPeople /></i>
                    <input type="text" className=" w-[18vw] outline-none " placeholder='User Id' ></input>
                    </div>
                    <div className="icon flex p-6 border-b-2 border-gray-300 gap-4 mt-8">
                    <i className='text-3xl'><BsPeople /></i>
                    <input type="text" className=" w-[18vw] outline-none " placeholder='User Id' ></input>
                    </div>
                    <div className = "flex justify-around p-8">
                    <div className=" flex gap-2 ">
                        <h2>Show Password</h2>
                        <i className = "mt-1" ><BsToggleOff/></i>

                    </div>
                    <button className = "bg-black rounded-xl text-white w-[5vw] h-[5vh]">login in</button>
                    </div>
                    <div className = "flex p-6 gap-3 ">
                        <input type= "checkbox"/>
                        <h1>Keep me signed in</h1>
                       </div>
                       <div>
                       <h1 className = "pl-8">Forgot Password</h1>
                        </div>
                        <div className='mt-6'>
                            <h1>@2023 All Rights Reserved.Kab Store.cookie</h1>
                            <p>Preferences ,Privacy ,and Terms</p>
                        </div>
                   

            </div>
            <div className="bg-gray-300 h-screen w-[47vw]">

            </div>
        </div>

    </div>
  )
}

export default Admin