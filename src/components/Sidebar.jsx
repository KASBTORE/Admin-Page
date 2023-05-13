import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import logo from "../images/logo-white.png";
import { GrCatalog } from "react-icons/gr";
import { SiAffinitydesigner } from "react-icons/si";
import { AiOutlineAntDesign } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { BiDownArrowAlt } from "react-icons/bi";

// import { useState } from 'react'
// import logo from '/images/logo-white'

function Sidebar() {
  const [dropDown, setDropDown] = useState(true);
  const [change,setChange] = useState(true);
  const [flash,setFlash] = useState(true)
  const [swipe,setSwipe] = useState(true)
  

  return (
    // <div className=" w-full h-screen bg-[#060818] ">
      <div className=" h-screen w-[20vw] bg-[#060818] ">
        <div className="flex  p-2 gap-2 ">
          <img src={logo} className="w-[60%]"></img>
          <i className="text-white text-3xl mt-2">
            <FiArrowLeft />
          </i>
        </div>
        <div className="sides p-4">
          <div className="flex gap-2 text-2xl hover:bg-[#191B30] text-[#888ea8]  w-[75%] h-[50px] rounded-2xl">
            <i className="mt-2">
              <GrCatalog />
            </i>
            <h1>DashBoard</h1>
          </div>
          <div
            className={`flex   hover:bg-[#191B30] text-[#888ea8]  w-[75%] h-[50px] rounded-2xl mt-2 justify-between`}
            onClick={() => {
              setDropDown(!dropDown);
            //   setDropDown(<BiDownArrowAlt/>)
            }}
          >
              <div className="flex gap-2">
                <i className="mt-4">
                   
                        <SiAffinitydesigner />
                   

                </i>
                <button className="">Catalog</button>
                </div>
                <i className="justify-end flex mt-4 " > 
                { dropDown ? <BiDownArrowAlt/> :  <AiOutlineRight /> }
                </i>
              </div>
            {dropDown && (
                <div className=" text-[#888ea8]">
                    
                  <li>
                    <a>Orders</a>
                  </li>
                  <li>
                    <a>Payments</a>
                  </li>
                </div>
            )}
<div
            className={`flex   hover:bg-[#191B30] text-white  w-[75%] h-[50px] rounded-2xl mt-2 justify-between`}
            onClick={() => {
              setChange(!change);
            //   setDropDown(<BiDownArrowAlt/>)
            }}
          >
              <div className="flex gap-2">
                <i className="mt-4 text-white">
                   
                        <AiOutlineAntDesign />
                   

                </i>
                <button className="text-[#888ea8]">Design</button>
                </div>
                <i className="justify-end flex mt-4 text-[#888ea8]" > 
                { change ? <BiDownArrowAlt/> :  <AiOutlineRight /> }
                </i>
              </div>
            {change && (
                <div className="text-[#888ea8]">
                    
                  <li>
                    <a>Banners</a>
                  </li>
                  <li>
                    <a>Slides</a>
                  </li>
                </div>
            )}


<div
            className={`flex   hover:bg-[#191B30] text-white  w-[75%] h-[50px] rounded-2xl mt-2 justify-between`}
            onClick={() => {
              setFlash(!flash);
            //   setDropDown(<BiDownArrowAlt/>)
            }}
          >
              <div className="flex gap-2 text-[#888ea8]">
                <i className="mt-4">
                   
                        <AiOutlineAntDesign />
                   

                </i>
                <button className="">Sales</button>
                </div>
                <i className="justify-end flex mt-4 text-[#888ea8]" > 
                { flash ? <BiDownArrowAlt/> :  <AiOutlineRight /> }
                </i>
              </div>
            {flash && (
                <div className="text-[#888ea8]">
                    
                  <li>
                    <a>Categories</a>
                  </li>
                  <li>
                    <a>Products</a>
                  </li>
                </div>
            )}



<div
            className={`flex   hover:bg-[#191B30] text-white  w-[75%] h-[50px] rounded-2xl mt-2 justify-between`}
            onClick={() => {
              setSwipe(!swipe);
            //   setDropDown(<BiDownArrowAlt/>)
            }}
          >
              <div className="flex gap-2">
                <i className="mt-4">
                   
                        <BsPeople />
                   

                </i>
                <button className="text-[#888ea8]">Customers</button>
                </div>
                <i className="justify-end flex mt-4 text-[#888ea8] " > 
                { swipe ? <BiDownArrowAlt/> :  <AiOutlineRight /> }
                </i>
              </div>
            {swipe && (
                <div className="text-[#888ea8]">
                    
                  <li>
                    <a>Add new</a>
                  </li>
                  <li>
                    <a>Report</a>
                  </li>
                </div>
            )}

        </div>
      </div>
    // </div>
  );
}

export default Sidebar;
