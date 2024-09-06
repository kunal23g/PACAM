import React from 'react'
import { CircleArrowRight } from 'lucide-react'

const ContactUs=()=> {
    return (
        <div className="bg-[#F7EFE5] py-12">
  <div className="max-w-[1380px] mx-auto px-6">
    {/* Title and Description */}
    <div className="text-left lg:flex md:justify-between mb-12">
      <div>
        <p className="text-xm uppercase text-neutral-500 font-light ">Contact Us</p>
        <h1 className="text-4xl font-bold text-blue-900 mt-2">
          Efficiency Starts With PACAM
        </h1>
      </div>
      <p className="py-2 md:mt-0 text-neutral-500 font-light max-w-md">
        Just fill in the details below, and our friendly experts will reach out to you shortly. We're excited to help!
      </p>
    </div>

    {/* Form */}
    <form className="lg:grid  lg:grid-cols-2 gap-6 bg-[#F3E2D3] p-8 rounded-lg shadow-md">
      {/* Name */}
      <div className='mb-3 shadow-md'>
        <label className=" text-sm font-semibold mb-2">Name</label>
        <input
          type="text"
          placeholder="eg. Adesh Gaikwad"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      {/* Contact Number */}
      <div className='mb-3 shadow-md'>
        <label className=" text-sm font-semibold mb-2">Contact Number</label>
        <input
          type="text"
          placeholder="eg. +91 78908 76555"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      {/* Email */}
      <div className='mb-3 shadow-md'>
        <label className=" text-sm font-semibold mb-2">E-Mail</label>
        <input
          type="email"
          placeholder="eg. adeshgaikwad@gmail.com"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      {/* Company Name */}
      <div className='mb-3 shadow-md'>
        <label className=" text-sm font-semibold mb-2">Company Name</label>
        <input
          type="text"
          placeholder="eg. PACAM OPC. PVT. LTD."
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      {/* Average Number of Shipments */}
      <div className='mb-3 shadow-md'>
        <label className=" text-sm font-semibold mb-2">
          Average Number Of Shipments Per Month
        </label>
        <select className="w-full p-3 border border-gray-300 rounded-md">
          <option>Select Number Of Shipments</option>
        </select>
      </div>

      {/* Number of Packing Workers */}
      <div className=''>
        <label className=" text-sm font-semibold mb-2">
          Number Of Packing Workers
        </label>
        <select className="w-full p-3 border border-gray-300 rounded-md">
          <option>Select Number Of Workers</option>
        </select>
      </div>

      {/* Checkboxes */}
      <div className=" md:flex col-span-2 justify-between my-5 ">
        <div className="flex flex-col  ">
            <div className='flex mb-4 items-center'>

            
          <input
            type="checkbox"
            id="personal-info"
            className="mr-2"
          />
          <label htmlFor="personal-info" className="text-sm">
            Agree to <a href="#" className="text-blue-600 underline">The Collection and Use of Personal Information</a>
          </label>
        </div>

        <div className="flex mb-4 items-center">
          <input
            type="checkbox"
            id="marketing-info"
            className="mr-2"
          />
          <label htmlFor="marketing-info" className="text-sm">
            Agree to <a href="#" className="text-blue-600 underline">Promotion and Marketing Information</a>
          </label>
        </div>
        </div>
      

      {/* Submit Button */}
      <div className="">
        <button
          type="submit"
          className="flex md:w-auto py-3 px-6 bg-black text-white   hover:bg-gray-800 transition"
        >
          Submit<CircleArrowRight size={19} className="ml-2 mt-[2px] "  />
        </button>
      </div>
      </div>



    </form>
  </div>
</div>

    )
}

export default ContactUs
