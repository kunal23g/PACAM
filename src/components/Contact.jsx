import React from 'react'
import { CircleArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'


const Contact=()=> {
    return (
        <div className='font-playfair max-w-[1420px] mx-auto py-10 items-center my-20 mx  flex flex-col bg-[#F3E2D3] '>
        <div className='mb-4  align-center p-5'>
        <h1 className="text-2xl font-medium md:text-3xl lg:text-4xl text-dark-blue text-center">Pacam Is Designed For Business Of <br /> Any Size, Across All Industries And Locatoins.</h1>

        </div>
        <div className='  md:justify-center '>
            <Link
                to="/contact"
             className=" rounded-md flex  justify-center py-[1rem] px-[1rem] mt-5    text-white bg-black">
                Contact Us<CircleArrowRight size={19} className="ml-2 mt-[2px] "  />
                </Link>
            
            </div>
    </div>
    )
}

export default Contact
