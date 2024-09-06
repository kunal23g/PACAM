import React from 'react'
import tools from "../assets/Tools.png"
import { CircleArrowRight } from 'lucide-react'



function Tools() {
    return (
        <div className=" p-2  max-w-[1240px] mx-auto  my-20   md:grid grid-cols-2 ">

        <div className=" col-span-1 p-3 flex flex-col justify-center ">
        <h1 className="text-3xl  text-dark-blue mb-4 ">Connect PACAM To  <br />Other Tools You Use.</h1>
        <p className="text-xs w-[70%]  text-gray-600 mb-5">Easily  integrate it with your WMS (Warehouse Management System) or OMS (Order Management System) to maintain efficiency and create video los for your customers </p>

        <button className="flex hover:text-[#041558] mt-5">
        Find More Solution Partners
        <CircleArrowRight size={20} className="ml-2" />
      </button>
            
         </div>
        <div className=" mt-2 col-span-1">
            <img className='p-3' src={tools} alt="package" />
        </div>



        </div>
    )
}

export default Tools
