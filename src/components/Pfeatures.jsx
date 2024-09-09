import { useState } from "react"
import React from 'react'
import photo from "../assets/Featurebackground.png"
import quick from "../assets/quick.png"
import simple from "../assets/simple.png"
import icon from "../assets/featureicon.svg"
import { CircleArrowRight } from 'lucide-react'
import { featureItems1 } from "../constants"
import { featureItems2 } from "../constants"
import { featureItems3 } from "../constants"
import { Link } from "react-router-dom"



const Pfeatures=()=> {
  const [activeButton, setActiveButton] = useState(1)

    const [img, setImg] = useState(simple);
    const [Li, setLi]  = useState(featureItems1);
    const handleImg=(index)=>{
      setActiveButton(index)
        if(index===1)
        {
            setImg(simple)
            setLi(featureItems1)
        }
        else if(index===2)
        {
            setImg(photo)
            setLi(featureItems2)
        }
        else
        {
            setImg(quick)
            setLi(featureItems3)
        }
    }
    return (
      <div className="my-20 grid grid-cols-1 lg:grid-cols-7 ">
      <div className="col-span-1 lg:col-span-4 justify-between bg-[#F7EFE5] p-6 lg:p-16">
        <div className="mt-10 font-playfair flex flex-nowrap   justify-between gap-2 lg:max-w-[80%] ">
          <button onClick={() => handleImg(1)} 
            
           className={`py-4 px-6 text-xm font-semibold rounded-md
           ${activeButton===1 ?  'bg-[#041558] text-white' : 'hover:bg-[#041558] hover:text-white'}`}>
            PACAM IS SIMPLE
          </button>


          <button onClick={() => handleImg(2)}           
           className={`py-4 px-6 text-xm font-semibold rounded-md
           ${activeButton===2 ?  'bg-[#041558] text-white' : 'hover:bg-[#041558] hover:text-white'}`}>
            PACAM IS EASY
          </button>


          <button onClick={() => handleImg(3)}           
           className={`py-4 px-6 text-xm font-semibold rounded-md
           ${activeButton===3 ?  'bg-[#041558] text-white' : 'hover:bg-[#041558] hover:text-white'}`}>
            PACAM IS QUICK
          </button>

        </div>
    
        <ul className=" font-lora flex flex-col lg:h-[200px] justify-center p-5 lg:p-6 mt-10">
          {Li.map((item, index) => (
            <li className="flex mb-2 text-xm lg:text-lg text-justify" key={index}>
              <img className="pr-2" src={icon} alt="" /> {item.text}
            </li>
          ))}
        </ul>
    
        <Link to="/contact"
        className=" inline-flex flex mt-5 py-4 px-6 hover:bg-[#041558] hover:text-white rounded-md bg-transparent">
          Learn More
          <CircleArrowRight size={20} className="ml-2" />
          </Link> 
      </div>
    
      <div className="col-span-1 lg:col-span-3 w-full bg-[#F3E2D3] flex justify-center items-center">
        <img className=" rounded-lg  w-full h-auto object-cover" src={img} alt="package" />
      </div>
    </div>
    
    )
}

export default Pfeatures
