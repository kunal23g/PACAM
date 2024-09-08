import React from 'react'
import { CircleArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'


const Next=()=> {
    return (
        <div className=' font-playfair max-w-[1240px] mx-auto py-10 pl-5  flex flex-col bg-indigo-200 bg-opacity-20 '>
            <div className='mb-4'>
            <h6 className="text-xl text-gray-600 md:text-center mb-3">Ready to Take the Next Step?</h6>
            <h1 className="text-4xl text-dark-blue md:text-center">Set It Up And Start Using Pacam Today</h1>

            </div>
            <div className=' flex md:justify-center '>
                <Link to="/contact"
                className=" flex  justify-center py-[1rem] px-[1rem] mt-5    text-white bg-black">
                    Contact Us<CircleArrowRight size={20} className="ml-2 mt-[1px] "  />
                    </Link> 
                <Link to="/contact"
                className=" flex  text-center py-[1rem] px-[1rem] mt-5 ml-5   text-white bg-black">
                    Discover Now<CircleArrowRight size={20} className="ml-2 mt-[1px]"  />
                    </Link> 
                </div>
        </div>
    )
}

export default Next
