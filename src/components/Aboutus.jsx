import React, { useState ,useRef,useEffect } from 'react'
import aboutimg from "../assets/aboutimg.png";
import aboutaim from "../assets/aboutaim.png";
import member1 from "../assets/member1.png";
import member2 from "../assets/member2.png";
import member3 from "../assets/member3.png";
import member4 from "../assets/member4.png";
import innovation from "../assets/innovation.png";
import { CircleArrowRight } from 'lucide-react'
import { Link, } from 'react-router-dom';
import { motion } from 'framer-motion';


function Aboutus() {


    const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);



    return (
        <>
        {/* About Us  */}
        <div className='bg-[#F9F3EE] mb-20'>
        <div className='bg-[#F9F3EE] font-playfair font-medium flex flex-col p-5 md:p-10 lg:px-[70px]'>
            <div className='justify-between text-justify  lg:flex '>
                <h1 className=' text-5xl lg:text-6xl  text-[#041558] font-bold '><span className="  text-sm  text-neutral-500  pl-1">ABOUT US <br /></span  > Our Story </h1>
                <p className=" my-4 p-1 lg:my-0  lg:p-9 text-xm font-lora lg:text-lg   text-[#4F4F4F] max-w-2xl  ">At Pacam, our Recorder program is designed to help you start recording immediately, reducing cost losses by resolving claims, and enhancing your brand value and customer satisfaction.</p>
            </div>
            <div className='  '><img className='mt-2 w-full h-full object-cover' src={aboutimg} alt="" /></div>
            </div>
            <div className='md:grid grid-cols-2  p-4 md:p-5  lg:px-[50px]'>
                <div className=" pl-3 col-span-1  flex flex-col ">
                    <h1 className=' pt-2  text-3xl border-b pb-5 font-playfair border-black mb-7 font-bold'>Who we Are</h1>
                    <p className='  text-xm w-[80%]   text-[#4F4F4F] font-light font-lora ' >  We're on a mission to revolutionize the way business ooperatoe in teh digital landscape
                    </p>
                </div>
                <div className=" pl-3  col-span-1  flex flex-col ">
                    <h1 className=' pt-2  text-bottom text-3xl border-b pb-5 border-black mb-7 font-bold font-playfair '>Founded 2014</h1>
                    <p className='text-xm text-justify pr-5  text-[#4F4F4F] font-light font-lora ' > 
                    With years of collective experience in software development and a deep
understanding of industry-specific challenges, we've crafted a suite of
tools that streamline operations, enhance productivity. <br />We believe in building lasting partnerships with our clients, understanding
their unique needs, and delivering tailored solutions that exceed
expectations. </p>
                </div>
            <div>
                
            </div>

            </div>
</div>
{/* aim */}
<div ref={ref} className="p-2 bg-indigo-200 bg-opacity-20 lg:mx-[70px] my-20 md:grid grid-cols-2">
      
      {/* Image Section */}
      <motion.div
        className="p-6 col-span-1"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <img src={aboutaim} alt="package" />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="pl-5 col-span-1 flex flex-col justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h1 className="text-3xl font-playfair font-bold text-dark-blue mb-4">What We Aim For</h1>
        <ul className="font-lora text-justify text-[#4F4F4F] w-[80%]">
          <li className="flex mb-2 text-xm text-justify">
            At Pacam, we envision a digital landscape where organizations of all sizes can harness the power of technology to unlock their full potential. By fostering a culture of continuous innovation.
          </li>
          <li className="flex mb-2 text-xm text-justify">
            Our vision extends beyond mere software; it encompasses a holistic approach to enabling growth, driving sustainable success.
          </li>
          <Link to="/contact" className="flex py-[1rem] mt-5">
            Get Started <CircleArrowRight size={19} className="ml-2 mt-[2px]" />
          </Link>
        </ul>
      </motion.div>
    </div>

{/* innovation */}
<div className="   bg-[#F9F3EE]  my-20   md:grid grid-cols-3 ">

        <div className=" p-7 lg:ml-[45px] pt-3 col-span-1  flex flex-col justify-center ">
        <h6 className=" text-xm font-playfair font-medium text-gray-600 mb-2 ">INSPIRE EXCELLENCE</h6>
        <h1 className=" text-3xl font-playfair font-bold text-dark-blue mb-4 ">Innovation & <br /> Empowerment</h1>
        <p className=" text-xm w-[80%] font-lora text-gray-600 mb-5">Through cutting-edge technology and forward-
        thinking strategies, we empower businesses to
        take control of their digital future.
        </p>

        <ul  >
            <li className=" flex mb-2 text-md  text-justify" >
            </li>
        </ul>

            
         </div>
        <div className="    col-span-2 ">
            <img className='w-full h-full object-cover py-16 lg:pl-10' src={innovation} alt="package" />
        </div>



        </div>

{/* team members */}
<div className='flex p-16 flex-col'>
    <div>
        <h1 className='text-xs text-gray-600 mb-2'>MEMBERS </h1>
        <h1 className='text-4xl  text-dark-blue mb-6'>Meet our Team</h1>

        <div className='  grid md:grid-cols-2 lg:grid-cols-4 justify-around gap-20'>
        <div className='hover:scale-105 duration-500 flex flex-col text-center col-span-1 '>
            <img src={member1} alt="" />
            <h1>Rohit Sir</h1>
            <h3 className='text-md text-gray-600 mb-2'>Founder & Ceo</h3>
        </div>
        <div className='hover:scale-105 duration-500 flex flex-col text-center col-span-1 '>
            <img src={member2} alt="" />
            <h1>xyz </h1>
            <h3 className='text-md text-gray-600 mb-2'>team Leader</h3>
        </div>
        <div className='hover:scale-105 duration-500 flex flex-col text-center col-span-1'>
            <img src={member3} alt="" />
            <h1>Shashank Sir</h1>
            <h3 className='text-md text-gray-600 mb-2'>Sales Executive</h3>
        </div>
        <div className='hover:scale-105 duration-500 flex flex-col text-center col-span-1'>
            <img src={member4} alt="" />
            <h1>Hitesh Sir</h1>
            <h3 className='text-md text-gray-600 mb-2'>Marketing Manager</h3>
        </div>
        </div>
    </div>
</div>
</>


    )
}

export default Aboutus
