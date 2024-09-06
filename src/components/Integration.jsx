import React from 'react'
import Buy from "../assets/Buy.png"
import Query from "../assets/Query.png"
import SignUp from "../assets/SignUp.png"
import Expose from "../assets/Expose.png"
import Integration1 from "../assets/Integration1.png"
import Integration2 from "../assets/Integration2.png"
import Integration3 from "../assets/Integration3.png"
import { CircleArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'


const Integration=()=> {
    return (
        <>
        
        <div className="bg-[#F7EFE5] py-12">
  <div className="max-w-[1400px] mx-auto px-4 ">
  <div className=' border justify-between text-justify lg:h-[200px]  lg:flex lg:flex-row flex-col'>
               <div className=''>
                <h1 className='text-4xl  lg:text-6xl  text-[#041558]  '><span className="  text-xs  text-neutral-500 font-light pl-1">CONNECTED CAPABILITIES <br /></span  > Streamlined Integration </h1>
                </div> 
               <div className='text-center'>
                <p className="  p-1 my-4 lg:my-0  lg:p-12 text-xm  lg:text-lg   text-[#4F4F4F] lg:max-w-2xl text-center text-justify  ">
                Streamline your workflow with Pacam’s powerful integration capabilities and your favorite tools    
                </p>
                </div> 
            </div>
    <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 md:mt-6 lg:mt-1 ">
      {/* Card 1 */}
      <div className="bg-white p-6  rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-top">
          <img src={Buy} alt="Buy Solution Icon" className="w-8 mr-1 h-8" />
          <div className="ml-4">
            <h3 className="text-xl  font-semibold">Buy Solution</h3>
            <p className="mt-2 lg:max-w-[70%] text-gray-600 text-justify">
              Innovative API for Hassle-Free Buying, Seamless Tracking, and Optimized E-commerce Logistics.
            </p>
            <a href="#" className="text-blue-600 mt-4 inline-flex items-center space-x-2">
              <span>Read More</span>
            </a>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6  rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-top">
          <img src={SignUp} alt="Sign Up Icon" className="w-8 mr-1 h-8" />
          <div className="ml-4 ">
            <h3 className="text-xl font-semibold">Sign Up</h3>
            <p className="mt-2 lg:max-w-[70%]  text-gray-600">
              Enhance engagement, improve security, and streamline both the tracking of goods and the purchasing process.
            </p>
            <a href="#" className="text-blue-600 mt-4 inline-flex items-center space-x-2">
              <span>Read More</span>
              
            </a>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-top">
          <img src={Query} alt="Query Icon" className="w-8 mr-1 h-8" />
          <div className="ml-4">
            <h3 className="text-xl font-semibold">Query</h3>
            <p className="mt-2 lg:max-w-[70%] text-gray-600">
              Enhance e-commerce experience by providing seamless integration and easy buying solutions.
            </p>
            <a href="#" className="text-blue-600 mt-4 inline-flex items-center space-x-2">
              <span>Read More</span>
              
            </a>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-top">
          <img src={Expose} alt="Expose APIs Icon" className="w-8 mr-1 h-8" />
          <div className="ml-4">
            <h3 className="text-xl font-semibold">Expose API’s</h3>
            <p className="mt-2 lg:max-w-[70%] text-gray-600">
              Accessing and consuming data and services from thousands of independent sources.
            </p>
            <a href="#" className="text-blue-600 mt-4 inline-flex items-center space-x-2">
              <span>Read More</span>
              
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* SECTION2  */}

<div className="bg-[#F1F6FF] py-12">
  <div className="max-w-[1460px] mx-auto  px-4 sm:px-6 lg:px-8">
    <h3 className="text-sm  text-gray-500 mb-4">TESTIMONIAL</h3>
    <h2 className="text-4xl  text-gray-900 mb-8">Customer Review</h2>

    <div className="flex flex-col md:flex-row md:items-center gap-8">
      {/* Left Section: Inside Overview as an image */}
      <div className="flex-1 w-full max-w-lg">
        <img 
          src={Integration2}
          alt="Inside Overview" 
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* Right Section: Testimonial Content */}
      <div className="flex-1  lg:p-10  space-y-4">
        <h3 className="text-2xl  text-gray-900">Master the Art of Marketing Analytics</h3>
        <p className="text-justify text-gray-600">
          Unlock the power of data with a fun and friendly guide to analytics! Dive into the world of data visualisation and learn how to turn numbers into actionable insights that can transform your decision-making. Let’s make data your best ally on this exciting journey!
        </p>
        <div className="py-3 flex items-center mt-6">
          <img src={Integration1} alt="Darlene Robertson" className="w-12 h-12 rounded-full" />
          <div className="ml-4">
            <p className="font-medium text-gray-900">Darlene Robertson</p>
            <p className="text-gray-500">Marketing Analyst</p>
          </div>
        </div>
      </div>
    </div>

    
    
  </div>
</div>

{/* SECTION3  */}
<div className="bg-[#F3E2D3]  mx-auto mt-14 py-4 lg:py-12">
  <div className="   lg:px-8 flex flex-col lg:flex-row mx-5  lg:gap-8">
    
    {/* Left Section: Text content */}
    <div className="lg:mt-8   ">
      <h4 className="text-sm  mb-2 text-gray-600">READY TO TAKE THE NEXT STEP?</h4>
      <h2 className="text-4xl mb-5 text-gray-900 leading-tight ">Hop on board and discover the difference today!</h2>
      
      <div className="flex  mb-3 sm:flex-row      ">
        <div className='border-y   border-gray-600 pr-14 py-5'>
          <h3 className=" text-4xl  text-[#162460]">400+</h3>
          <p className="text-sm text-gray-600">Partners in Success!</p>
        </div>
        <div className='border-t border-y border-l  border-gray-600 pl-14 py-5'>
          <h3 className="text-4xl  text-[#162460]">1000+</h3>
          <p className="text-sm text-gray-600">Flourished with Our Help!</p>
        </div>
      </div>
      
      <p className="text-justify max-w-[80%] text-gray-600">
        Guiding your journey with a passion for excellence, we're here to fuel your future with top-notch solutions that help you succeed and thrive every step of the way.
      </p>
      
      <Link to="/contact" className="inline-flex mb-4 mt-5 flex items-center text-sm font-medium text-[#162460]">
        Get Started
        <CircleArrowRight size={20} className="ml-2" />
      </Link>
    </div>
    
    {/* Right Section: Image */}
    <div className="w-full   max-w-lg">
      <img 
        src={Integration3}
        alt="Reporting Overview" 
        className="  rounded-lg shadow-lg w-full h-auto object-cover"
      />
    </div>
  </div>
</div>


</>
    )
}

export default Integration
