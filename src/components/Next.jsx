import React from 'react'
import { CircleArrowRight } from 'lucide-react'


const Next=()=> {
    return (
        <div className='max-w-[1240px] mx-auto py-10 pl-5  flex flex-col bg-indigo-200 bg-opacity-20 '>
            <div className='mb-4'>
            <h6 className="text-xs text-gray-600 md:text-center mb-3">Ready to Take the Next Step?</h6>
            <h1 className="text-4xl text-dark-blue md:text-center">Set It Up And Start Using Pacam Today</h1>

            </div>
            <div className=' flex md:justify-center '>
                <button className=" flex  justify-center py-[1rem] px-[1rem] mt-5    text-white bg-black">
                    Contact Us<CircleArrowRight size={20} className="ml-2 mt-[1px] "  /></button>
                <button className=" flex  text-center py-[1rem] px-[1rem] mt-5 ml-5   text-white bg-black">
                    Discover Now<CircleArrowRight size={20} className="ml-2 mt-[1px]"  /></button>
                
                </div>
        </div>
    )
}

export default Next
