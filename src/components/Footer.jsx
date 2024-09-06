import React, { useState } from 'react';
import logo2 from "../assets/logo2.png";
import { FaYoutubeSquare,FaTwitterSquare,FaFacebookSquare,FaInstagramSquare,FaPhoneAlt   } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { CircleArrowRight } from 'lucide-react'

const Footer = () => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = `mailto:pacam@gmail.com`;
    
  };

    return (
      <>
     
        <div className=" lg:pl-10 bg-black bg-opacity-[94%]	">
            <div className=' text-white py-20 grid md:grid-cols-2  text-white'>
                <div className=" lg:col-span-1 px-5 ">
                    <Link to="/">
                      <img className="h-10 w-auto mb-5" src={logo2} alt="Logo" />
                    </Link>                    <Link   to="/contact"                
                     className='py-4'>Contact us start now <br /><span className="underline hover:cursor-pointer">Let's talk</span>
                    </Link>
                    <div className='flex my-6'>
                    <a 
                        href={`mailto:pacam@gmail.com`}
                        onClick={handleClick}
                        
                      >
                        <button className="flex items-center py-[0.5rem] px-[1rem] text-xs border border-gray-400 hover:bg-white hover:text-black font-bold transition duration-300 mr-4">
                          <MdOutgoingMail className='w-5 h-5 mr-2'/>
                          pacam@gmail.com
                        </button>
                    </a>
                        <button className="flex items-center py-[0.5rem] px-[1rem] text-xs font-bold border border-gray-400 mr-4 hover:bg-white hover:text-black transition duration-300"><FaPhoneAlt   className='w-3 h-4  mr-2'/>9211</button>
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
                            <li className='py-2 text-xs hover:underline hover:cursor-pointer'>Pricing</li>
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
                
            </div>
            
            <div className=" flex md:flex-row flex-col justify-between mx-3 pt-4 border-t  bg-opacity-95 border-gray-700">
                <div>
                  <p className="text-gray-400 mb-4 lg:px-5">© 2023 Pacam. All rights reserved.</p>
                  </div>
                  <div className="flex space-x-4 p-4 md:pr-5">
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
