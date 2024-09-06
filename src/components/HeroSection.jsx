// import video1 from "../assets/video1.mp4";
// import video2 from "../assets/video2.mp4";
import { CircleArrowRight } from 'lucide-react'
import { MoveRight } from 'lucide-react';
import home from "../assets/home.png";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    
    <div className="flex flex-col items-center bg-[#F9F3EE]   p-5 md:p-10 lg:p-20 ">
      <h1 className="mt-18 text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Let's Make
        <span className="text-[#041558]  bg-clip-text">
          {" "}
          Customer Claims
        </span><br />
        a Breeze for You
      </h1>
      <p className="mt-12 text-lg text-center text-neutral-500 max-w-4xl">
        Ensuring transparency and trust with every scan, so you always know your  product's authenticity
      </p>
      <div className="flex justify-center my-10">
      <Link
          to="/contact"

        className="py-3 px-4 mx-3 bg-black text-white rounded-md border flex items-center hover:bg-black hover:text-white cursor:pointer">
        Get Started
        <CircleArrowRight size={20} absoluteStrokeWidth={true} className="ml-2 "  />
        </Link>
    
        <Link
                to="/contact"
             className=" py-3 px-4 mx-3 rounded-md border flex items-center hover:bg-black hover:text-white cursor:pointer">
                Discover Now<CircleArrowRight size={20}  absoluteStrokeWidth={true} className="ml-2"  />
                </Link>
  </div>
  <img  className='p-3 ' src={home} alt="/home" />
</div>

     
    
  );
};

export default HeroSection;
