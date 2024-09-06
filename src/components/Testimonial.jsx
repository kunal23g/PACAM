import photo from "../assets/testimonial.png"
import { ChartLine } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { PersonStanding } from 'lucide-react';
import { BookUp2 } from 'lucide-react';
const Testimonials = () => {
    return (
        <div className=" p-2  max-w-[1240px] mx-auto  my-20   md:grid grid-cols-2 ">

        <div className=" col-span-1 p-3 lg:w-[80%] flex flex-col justify-center ">
        <h6 className="text-xm text-gray-600 mb-2 ">Marketing : Enhance branding</h6>
        <h1 className="text-2xl font-bold text-dark-blue mb-4 ">Boost Your Brand's Personality</h1>
        <p className="text-xm text-gray-600 mb-5">Deliver every customer experience uniquely unforgettable.</p>

        <ul >
            <li className=" flex mb-2 text-md  text-justify" >
            <ChartLine size={19}/><span className="pl-2">Boost Your Trust Factor</span>  
            </li>
            <li className="flex mb-2 text-md text-justify">
                <ShoppingCart size={19}/> <span className="pl-2">Keep Them Coming Back, Boosting Customer Loyalty</span>
            </li>
            <li className="flex mb-2 text-md text-justify">
                <PersonStanding size={19}/><span className="pl-2">The Power of Sharing, The Word-of-Mouth Effect</span> 
            </li>
            <li className="flex mb-2 text-md text-justify">
                <BookUp2 size={19}/><span className="pl-2">Fresh Perspectives on Branding</span> 
                </li>
        </ul>

            
         </div>
        <div className=" mt-2 col-span-1">
            <img className="p-2" src={photo} alt="package" />
        </div>



        </div>
    );
  };
  
  export default Testimonials;
  
