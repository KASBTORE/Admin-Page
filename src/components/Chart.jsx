import React ,{useState}from "react";
// import Chartjs from 'chart.js'
import { TbMessageCircle2 } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxPerson } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import {IoMdAdd} from 'react-icons/io'
import {GiAmmoBox} from 'react-icons/gi'
import Chartjs from "chart.js/auto";
Charts;
import moment from "moment";
import Charts from "./Charts";
// Chartjs

function Chart() {
  const [showXAxisSidebar, setShowXAxisSidebar] = useState(true);
  return (
    // <div className= "w-screen h-full">
   
   <div className="bg-white w-[80%] h-screen float-right flex overflow-x-auto ">
      <div className="bg-white h-screen w-screen shadow-2xl flex-1 ">
        <div className="contains flex  justify-between">
          <div className="input flex w-[30%]  h-[45px] bg-white m-2 gap-2 border-gray-200 border-2  rounded-xl ">
            <i className="mt-2 text-2xl">
              <CiSearch />
            </i>
            <input
              type="text"
              placeholder="search products ...."
              className="outline-none bg-white"
            ></input>
          </div>
          <div className=" flex gap-14 mr-4 m-2">
            <div className="drop">
              <select>
                English
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Swahili">Swahili</option>
              </select>
            </div>
            <div className="flex gap-2 text-2xl">
              <i>
                <TbMessageCircle2 />
              </i>
              <i>
                <IoMdNotificationsOutline />
              </i>
              <i>
                <RxPerson />
              </i>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-6 mt-6 p-3">
          <div className="bg-white w-[35vw] h-[30vh] shadow-2xl rounded-xl">
            <h1 className="p-3 text-white">Stastics</h1>
            <div className="flex justify-between ">
              <div className="orders ">
                <div className="ml-2">
                  <h1>orders</h1>
                  <p className="text-red-600">O</p>
                </div>

                <div className="mt-[-20px]">
                  <Charts />
                </div>
              </div>
              <div className="sales">
                <div className="ml-2">
                  <h1>sales</h1>
                  <p className="text-red-600">O</p>
                </div>

                <div className="mt-[-20px]">
                  <Charts />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-600 w-[25vw] h-[30vh] shadow-2xl rounded-xl flex flex-col justify-between">
            <div className="flex justify-between text-white p-3">
              <h1 className=" ">Product</h1>
              <p>75</p>
            </div>
            <div className="flex justify-between bottom-0">
              <div className="flex gap-2 ">
                <div className="rounded-xl w-[2vw] h-[4vh] bg-blue-600  flex justify-center items-center border-2 border-gray-400">
                  <i>
                    <IoMdAdd />
                  </i>
                </div>
                <div className="rounded-xl w-[2vw] h-[4vh] bg-blue-600  flex justify-center items-center border-2 border-gray-400">
                  <i>
                    <GiAmmoBox />
                  </i>
                </div>
              </div>
              <div className="w-[5vw] h-[5vh] bg-blue-600 mb-2 mr-2 flex justify-center rounded-2xl border-gray-400 border-2">
                <button>details</button>
              </div>
            </div>
          </div>
          <div className="bg-white w-[35vw] h-[30vh] shadow-2xl rounded-xl flex flex-col justify-between">
            <div className="flex justify-between p-4">
              <div className="">
                <h1>O</h1>
                <h1 className="mt-3">Customers</h1>
              </div>
              <div className="text-2xl bg-purple-400 w-[3vw] h-[5vh] rounded-full items-center justify-center flex">
                <i>
                  <RxPerson />
                </i>
              </div>
            </div>
            <div className="bg-gray-200 w-[25vw] h-[2vh] ml-2 rounded-xl mb-8">
              <div className="bg-purple-500 w-[17vw] h-[2vh] rounded-xl"></div>
            </div>
          </div>
        </div>
        <div className="flex gap-6 p-3 mt-8">
          <div className="bg-white w-[40vw] h-[35vh] rounded-xl shadow-xl ">
            <h1 className="p-4">Orders</h1>
            <div className="flex gap-2">
              <div className="text-2xl bg-purple-400 w-[2vw] h-[4vh] rounded-full items-center justify-center flex ml-2">
                <i>
                  <RxPerson />
                </i>
              </div>

              <div className="flex justify-between w-[70%] text-gray-400">
                <p>pending</p>
                <p>-%</p>
              </div>
            </div>
            <div className="bg-gray-200 w-[25vw] h-[2vh] ml-14 rounded-xl  ">
              <div className="bg-purple-500 w-[17vw] h-[2vh] rounded-xl"></div>
            </div>

            <div className="flex gap-2 mt-4">
              <div className="text-2xl bg-red-100 w-[2vw] h-[4vh] rounded-full items-center justify-center flex ml-2">
                <i className="text-red-400">
                  <RxPerson />
                </i>
              </div>

              <div className="flex justify-between w-[70%] text-gray-400">
                <p>pending</p>
                <p>-%</p>
              </div>
            </div>
            <div className="bg-gray-200 w-[25vw] h-[2vh] ml-14 rounded-xl  ">
              <div className="bg-red-400 w-[10vw] h-[2vh] rounded-xl"></div>
            </div>
            <div className="flex gap-2 mt-4">
              <div className="text-2xl bg-orange-300  w-[2vw] h-[4vh] rounded-full items-center justify-center flex ml-2">
                <i className="text-orange-400 ">
                  <RxPerson />
                </i>
              </div>

              <div className="flex justify-between w-[70%] text-gray-400">
                <p>pending</p>
                <p>-%</p>
              </div>
            </div>
            <div className="bg-gray-200 w-[25vw] h-[2vh] ml-14 rounded-xl  ">
              <div className="bg-orange-300 w-[5vw] h-[2vh] rounded-xl"></div>
            </div>
          </div>
          <div className="bg-[#D1E6FF] w-[20vw] h-[35vh] rounded-xl shadow-xl">
            <div className="flex flex-col p-4 text-gray-400">
              <div className="text-2xl bg-blue-200 w-[2vw] h-[4vh] rounded-full items-center justify-center flex ">
                <i className="text-black">
                  <RxPerson />
                </i>
              </div>
              <h1>0</h1>
              <p>Pending</p>
            </div>

            <Charts />
          </div>
          <div className="bg-red-100  w-[20vw] h-[35vh] rounded-xl shadow-xl">
            <div className="flex flex-col p-4 text-gray-400">
              <div className="text-2xl bg-red-300 w-[2vw] h-[4vh] rounded-full items-center justify-center flex ">
                <i className="text-red-400">
                  <RxPerson />
                </i>
              </div>
              <h1>0</h1>
              <p>Pending</p>
            </div>

            <Charts />
          </div>
          <div className="bg-green-200 w-[20vw] h-[35vh] rounded-xl shadow-xl">
            <div className="flex flex-col p-4 text-gray-400">
              <div className="text-2xl bg-green-300 w-[2vw] h-[4vh] rounded-full items-center justify-center flex ">
                <i className="bg-green-200">
                  <RxPerson />
                </i>
              </div>
              <h1>0</h1>
              <p>Pending</p>
            </div>

            <Charts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
