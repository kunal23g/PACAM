import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { FaYoutubeSquare,FaTwitterSquare,FaFacebookSquare,FaInstagramSquare  } from "react-icons/fa";
const Footer = () => {
    const [price, setPrice] = useState('');
    const [displayPrice, setDisplayPrice] = useState('');
    const [isOpen,setIsOpen] =useState(false)
    const [isInput,setIsInput] =useState(false)
    const handlePriceSubmit = (e) => {
        e.preventDefault();
        setDisplayPrice(price);
        setPrice('');
    };

    return (
      <>
     
        <div className=" bg-black">
            <div className=' text-white py-20 grid md:grid-cols-2  text-white'>
                <div className=" lg:col-span-1 px-5 lg:px-10">
                    <img className="h-8 w-auto" src={logo} alt="" />
                    <p className='py-4'>Contact us start now <br /><span className="underline hover:cursor-pointer">Let's talk</span></p>
                    <div className='flex my-6'>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@gmail.com" target="_blank" rel="noopener noreferrer">
                           <button className="py-[0.5rem] px-[1rem] text-xs border border-gray-400 mr-4">hello@gmail.com</button>
                          </a>
                        <button className="py-[0.5rem] px-[1rem] text-xs border border-gray-400 mr-4">9211</button>
                    </div>
                    
                </div>
                <div className=' lg:col-span-1 flex justify-around'>
                    <div>
                        <h6 className='font-medium'>Solutions</h6>
                        <ul>
                          {
                            ["Analytics","Marketing","Commerce","Insights"].map((item)=>
                            (
                              <li key={item} className='py-2 text-xs hover:underline hover:cursor-pointer' >
                                {item}
                              </li>
                            ))
                          }
                            
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium'>Support</h6>
                        <ul>
                            <li  onClick={() => setIsInput(!(isInput))} className='py-2 text-xs hover:underline hover:cursor-pointer'>Pricing</li>
                            <li className='py-2 text-xs hover:underline hover:cursor-pointer'>Documentation</li>
                            <li className='py-2 text-xs hover:underline hover:cursor-pointer'>Guides</li>
                            <li className='py-2 text-xs hover:underline hover:cursor-pointer'>API Status</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium'>Company</h6>
                        <ul>
                            {
                              ["About","Blog","Jobs","Press","Careers"].map((item)=>
                              (
                                <li key={item} className='py-2 text-xs hover:underline hover:cursor-pointer'>
                                {item}

                                </li>
                              ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="lg:col-span-1 px-10">
                {isInput && (<button
        onClick={() => setIsOpen(!(isOpen))}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Open Input Box
      </button>)}
      {isInput && isOpen && (<form onSubmit={handlePriceSubmit} className="mb-4">
                        <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Enter price"
                            className="py-2 px-3 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Submit
                        </button>
                    </form>)}
                    {isInput&&isOpen && displayPrice && (
                        <p className="text-white">Entered Price: ${displayPrice}</p>
                    )}
                </div>
            </div>
            
            <div className="flex md:flex-row flex-col justify-between mx-3 pt-4 border-t bg-black border-gray-700">
                <div>
                  <p className="text-gray-400 mb-4 lg:px-5">© 2023 Pacam. All rights reserved.</p>
                  </div>
                  <div className="flex space-x-4 pr-5">
  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
    <FaYoutubeSquare className='w-5 h-5' />
  </a>
  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
    <FaTwitterSquare className='w-5 h-5' />
  </a>
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
    <FaFacebookSquare className='w-5 h-5' />
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
    <FaInstagramSquare className='w-5 h-5' />
  </a>
</div>

            </div>
            </div>
            </>
    );
};

export default Footer;