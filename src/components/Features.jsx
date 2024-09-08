import React from 'react'
import card1 from "../assets/featureCard1.png"
import recording from "../assets/recordingFeature.png"
import autoRecord from "../assets/autoRecord.png"
import link from "../assets/link.png"
import videoPlay from "../assets/videoPlay.png"
import directSend from "../assets/directSend.png"
import { Link, NavLink } from "react-router-dom";

import Email1 from "../assets/Email1.png"
import Email2 from "../assets/Email2.png"
import optimize from "../assets/optimized.png"
import management from "../assets/management.png"
import inspection from "../assets/inspection.png"
import api1 from "../assets/Api1.png"
import api2 from "../assets/Api2.png"
import api3 from "../assets/Api3.png"
import { CircleArrowRight } from 'lucide-react'
import  { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import { motion } from 'framer-motion';


const Features=({optimized})=> {
    const [activeButton, setActiveButton] = useState(1)
    const [img, setImg] = useState(api1);
    const handleImg=(index)=>{
        setActiveButton(index);
        if(index===1)
        {
            setImg(api1)
            
        }
        else if(index===2)
        {
            setImg(api2)
            
        }
        else
        {
            setImg(api3)
            
        }
    }
    const [isVisible, setIsVisible] = useState(false);
    
      const onEnterViewport = () => {
        setIsVisible(true);
      }

    
    
    
    return (
        <>
        {/* HEROSECTION1  */}
        <div className="bg-[#F7EFE5] p-5 items-center md:p-10 lg:p-18">
  {/* Heading Section */}
  <h1 className=" mt-9 md:mt-18 text-4xl  sm:text-6xl lg:text-7xl text-center  tracking-wide">
        Effortlessly Streamline Your <br />Tasks with 
        <span className="text-[#041558] font-bold  bg-clip-text">
          {" "}
          PACAM
        </span>
      </h1>
      <p className="mt-12  text-lg text-center text-neutral-500 ">
        Authenticity at Every Step Making <br /> Your Distribution Smooth and Transparent 
      </p>

  {/* Features Section */}
  <div className="grid p-5  justify-center justify-around lg:max-w-[1240px] lg:mx-auto grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 mt-12 ">
    {/* Feature 1 */}
    <div className="bg-white p-6 hover:scale-105 duration-500 rounded-lg shadow-lg  text-center">
      <div className="bg-[#F3E2D3] p-4 mb-8">
        <img src={autoRecord} alt="Auto-Record" className="mx-auto my-5 " />
      </div>
      <h2 className="text-lg font-semibold ">Auto-Record</h2>
    </div>

    {/* Feature 2 */}
    <div className="bg-white p-6 hover:scale-105 duration-500 rounded-lg shadow-lg  text-center">
      <div className="bg-[#F3E2D3] p-4 mb-8">
        <img src={videoPlay} alt="Auto-Record" className="mx-auto my-5 " />
      </div>
      <h2 className="text-lg font-semibold ">Access Your Videos <br /> on the Go</h2>
    </div>

    {/* Feature 3 */}
    <div className="bg-white p-6 hover:scale-105 duration-500 rounded-lg shadow-lg  text-center">
      <div className="bg-[#F3E2D3] p-4 mb-8">
        <img src={directSend} alt="Auto-Record" className="mx-auto my-5 " />
      </div>
      <h2 className="text-lg font-semibold ">Send with Ease</h2>
    </div>

    {/* Feature 4 */}
    <div className="bg-white p-6 hover:scale-105 duration-500 rounded-lg shadow-lg  text-center">
      <div className="bg-[#F3E2D3] p-4 mb-8">
        <img src={link} alt="Auto-Record" className="mx-auto my-5 " />
      </div>
      <h2 className="text-lg font-semibold ">Seamless <br /> Integration</h2>
    </div>
  </div>
</div>

{/* Recording  */}
<div className='bg-[#F7EFE5]'>
<div className=' mb-20 lg:mx-16'>
        <div className='bg-[#F3E2D3]   lg:flex flex-col p-5 md:p-10 lg:px-[70px]'>
            <div className='justify-between lg:flex-row flex-col  flex '>
                <h1 className=' text-3xl lg:text-4xl  text-[#041558] font-bold '><span className="  text-xs  text-neutral-500 font-light pl-1">RECORDING STUDIO SUITE <br /></span  > Instantly Record Video Logs <br />with a Simple Connection </h1>

                
                <p className=" lg:px-5 py-4 lg:p-9 text-xm  lg:text-lg text-[15px]  text-[#4F4F4F] max-w-2xl  lg:text-justify">Recording a video log for each order simplifies its retrieval whenever needed. Video logs can serve various purposes, including as evidence for customer claims, marketing materials, and logistical records.</p>
            </div>
            <div className=' mt-5 '><img className='w-full h-full object-cover' src={recording} alt="" /></div>
            </div>
            
</div>
</div>


         {/* Optimized Cloud solutions */}
        <>
        <ScrollTrigger onEnter={onEnterViewport}>
      <div className="p-10 mb-20 lg:p-[65px] my-20 gap-5 lg:gap-0 md:grid grid-cols-2">
        <div className="col-span-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h6 className="text-xm font-medium text-gray-600 mb-2 font-playfair">
              CLOUD-DRIVEN SOLUTIONS
            </h6>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h1 className="text-3xl text-dark-blue mb-4 font-playfair font-medium">
              Optimized Cloud Solutions
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <h1 className='flex mb-4 text-md lg:w-[80%] font-lora text-gray-600 text-justify pr-3'>
              Cut development costs and boost service quality with global cloud access, offering top-notch security. Enjoy seamless CMS access from anywhere, effortlessly view and share video logs without worrying about hardware limitations.
            </h1>
          </motion.div>
        </div>
        <motion.div 
          className="col-span-1"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <img className='w-full h-full object-cover' src={optimize} alt="package" />
        </motion.div>
      </div>
    </ScrollTrigger>
        </>

{/* Management */}

<div className=" p-10 bg-indigo-200 bg-opacity-20    my-20   md:grid grid-cols-3 ">

<div className="  p-2 md:p-6 col-span-2">
            <img  src={management} alt="package" />
        </div>

        <div className="p-2 lg:pl-5 col-span-1  flex flex-col justify-center ">
        <h6 className="text-xs text-gray-600 mb-2 ">MANAGE ACCESS FOR SUB-ACCOUNTS</h6>

        <h1 className="text-3xl  text-dark-blue mb-6 ">Management <br />Becomes Simpler</h1>

        <ul className=' text-justify text-[#4F4F4F] w-[80%]' >
            <li className=" flex mb-2 text-md  text-justify" >
            Admins can set up sub-accounts and assign permissions tailored to departments or roles, simplifying management. With advanced permission controls, data security is boosted as users only access features relevant to their roles.
            </li>
            

            </ul>

            
         </div>
        



        </div>
 {/* Inspection */}
 <div className='bg-[#F9F3EE] mb-20 p-1 lg:max-w-[1380px] mx-auto'>
        <div className='bg-[#F9F3EE]   p-10 lg:flex flex-col '>
            <div className='justify-between mb-5  lg:flex flex-col lg:flex-row'>
                <h1 className='lg:p-4  text-4xl  text-[#041558]  '><span className="  text-xs  text-neutral-500 font-light pl-1">INSPECTION MODE <br /></span  > Accurate Orders, <br />Every Shipment
                </h1>
                <p className=" lg:px-5 py-4 lg:p-9 text-xm  lg:text-lg text-[15px]  text-[#4F4F4F] max-w-2xl  lg:text-justify ">Pacam's inspection mode guarantees your shipments are accurate, even without integrated logistics. It verifies products and quantities against orders, alerting you to any mispackaged items and preventing mistakes before they happen.</p>
            </div>
            <div className='  '><img className='  w-full h-full object-cover' src={inspection} alt="" /></div>
            </div>
            
</div>

{/* Card  */}

<div className='grid lg:grid-cols-2 md:mx-8 p-10 gap-5 '>
    <div className='p-5 col-span-1 flex flex-col bg-[#F3F8FF]'>
    <h1 className="  text-xs uppercase text-neutral-500 font-light pl-1">Message broadcasting</h1>
    <h1 className=' lg:h-[50px] text-2xl pl-1'>Efffortless Bulk Video Log Distribution</h1>
    <p className="  text-xm mt-4 lg:h-[100px] text-justify text-neutral-500 font-light pl-1">After uploading order details to the CMS, you can use the bulk messaging feature to send video logs to customers globally. You can send messages via SMS or email and track their performance directly within the CMS</p>
    <img className='mt-10  md:mt-5 mb-9' src={Email1} alt="" />
     </div>
    <div className='p-5 col-span-1 flex flex-col bg-[#F3F8FF]'>
    <h1 className="  text-xs  text-neutral-500 font-light pl-1">VIDEO MEMO</h1>
    <h1 className='lg:h-[50px] text-2xl pl-1'>Make Every Customer Interaction Special</h1>
    <p className="  text-xm mt-4 text-justify lg:h-[100px] text-neutral-500 font-light pl-1">Enhance customer experience with video messages for order confirmations, review widgets, and status updates. Personalize with your logo or a pre-roll ad for extra impact.</p>
    <img className='mt-10 md:mt-5 mb-9' src={Email2} alt="" />
     </div>
    


    

</div>



{/* APIS */}
<div className="my-20 grid grid-cols-1 lg:grid-cols-7">
      <div className="col-span-4 justify-around bg-[#F7EFE5] p-6 lg:p-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#041558] mb-6 lg:mb-10">
          Empower Innovation with APIs
        </h1>
        <div className="flex  flex-col md:flex-row flex-nowrap lg:justify-between justify-around lg:max-w-[80%] gap-1 ">
          <button
            onClick={() => handleImg(1)} 
            className={`py-4 px-6 text-sm font-light rounded-md ${
              activeButton === 1 ? 'bg-[#041558] text-white' : 'hover:bg-[#041558] hover:text-white'
            }`}
          >
            SIMPLE INTEGRATION
          </button>
          <button
            onClick={() => handleImg(2)} 
            className={`py-4 px-6 text-sm font-light rounded-md ${
              activeButton === 2 ? 'bg-[#041558] text-white' : 'hover:bg-[#041558] hover:text-white'
            }`}
          >
            ADD A URL
          </button>
          <button
            onClick={() => handleImg(3)} 
            className={`py-4 px-6 text-sm font-light rounded-md ${
              activeButton === 3 ? 'bg-[#041558] text-white' : 'hover:bg-[#041558] hover:text-white'
            }`}
          >
            EMBED VIDEO LOG
          </button>
        </div>
        <ul className="flex flex-col justify-center mt-8 lg:mt-12">
          <h1 className="text-3xl mb-4">Seamless Integration with Your Favourite Tools</h1>
          <p className="text-sm text-neutral-500 font-light text-justify">
            Seamlessly connect to our new logistics program for effortless integration with your warehouse management systems. Record video logs without disrupting your current workflow.
          </p>
        </ul>
      </div>

      <div className="col-span-3 bg-[#F3E2D3] flex justify-center items-center">
        <img className="lg:max-w-full h-auto lg:h-[500px] mx-auto px-3 lg:mx-16 py-3" src={img} alt="package" />
      </div>
    </div>

  

{/* Cards */}
<div className=" max-w-[1380px]  mx-auto py-10 flex flex-col px-2  ">
    
<div className="md:grid grid-cols-3 gap-5 p-2 px-3">
  <div className="flex flex-col p-4   shadow-xl  my-3 hover:scale-105 duration-500 ">
  <h1 className=" mb-2 text-xs  text-neutral-500 font-light pl-1">EFFORTLESS ONBOARDING</h1>
  <h1 className='text-2xl lg:text-3xl mb-4'>Get Going Quickly and Easily</h1>

    <div className="mb-5 bg-[#F3F8FF]">
      <img src={card1} alt="Card Image" className="w-full p-11 h-full object-cover" />
    </div>
    <h1 className="lg:pl-3   text-2xl mb-5">Get Started with Ready Gear</h1>

    <h1 className="lg:pl-3 text-xm  mb-20  text-neutral-500 text-justify">
    Just grab a webcam, barcode scanner, and laptop. With our ready-to-use products, you can start recording video logs right away, wherever you are.
    </h1>

  </div>
  <div className="flex flex-col p-4  shadow-xl  my-3 hover:scale-105 duration-500 ">
  <h1 className=" mb-2 text-xs  text-neutral-500 font-light pl-1">TOOLS AND UPKEEP</h1>
  <h1 className='text-2xl lg:text-3xl mb-4'>Move Equipment with Ease</h1>

    <div className="mb-5 bg-[#F3F8FF]">
      <img src={card1} alt="Card Image" className="w-full p-11 h-full object-cover" />
    </div>
    <h1 className="lg:pl-3   text-2xl mb-5">Move Equipment with Ease</h1>

    <h1 className="lg:pl-3 text-xm  mb-20  text-neutral-500 text-justify">
    The straightforward design of the equipment makes it easy to move and set up. You can easily customise your workspace to fit your needs.
    </h1>

  </div>
  <div className="flex flex-col p-4  shadow-xl  my-3 hover:scale-105 duration-500 ">
  <h1 className=" mb-2 text-xs  text-neutral-500 font-light pl-1">SUPPORT CENTER</h1>
  <h1 className='text-2xl lg:text-3xl mb-4'>All-Day, Every Day support</h1>

    <div className="mb-5  bg-[#F3F8FF]">
      <img src={card1} alt="Card Image" className="w-full p-11 h-full object-cover" />
    </div>
    <h1 className="lg:pl-3   text-2xl mb-5">Varieties of Communication</h1>

    <h1 className="lg:pl-3 text-xm  mb-20  text-neutral-500 text-justify">
    We offer a variety of communication options to ensure top-notch service: chat, phone, email, remote support, and more.
    </h1>

  </div>
  
  

  
</div>
</div>

{/* contact  */}
<div className='lg:max-w-[1380px] lg:mx-auto py-10 items-center mb-14  flex flex-col bg-[#F3E2D3] '>
        <div className='mb-4  align-center p-5'>
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-dark-blue text-center">Enhance Your Work Efficiency </h1>

        </div>
        <div className='  md:justify-center '>
         <Link to="/contact"  className=" rounded-md flex  justify-center py-[1rem] px-[1rem] mt-5    text-white bg-black">
                Contact Us<CircleArrowRight size={19} className="ml-2 mt-[2px] "  />
            
                </Link> 
            </div>
    </div>



        </>

    )
}

export default Features
