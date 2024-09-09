import { motion } from 'framer-motion';
import photo from "../assets/testimonial.png";
import { ChartLine, ShoppingCart, PersonStanding, BookUp2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Testimonials = () => {
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
    <div ref={ref} className=" border border-black p-2 max-w-[1240px] mx-auto my-3 md:grid grid-cols-2">
      
      {/* Text Content */}
      <div className="font-playfair col-span-1 p-3 lg:w-[80%] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h6 className="text-xl font-medium  font-playfair  text-gray-600 mb-2">
            Marketing: Enhance branding
          </h6>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h1 className="text-3xl font-playfair font-bold text-dark-blue mb-4">
            Boost Your Brand's Personality
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <p className="text-xl font-playfair font-medium text-gray-600 mb-5">
            Deliver every customer experience uniquely unforgettable.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="font-medium text-lg"
        >
          <li className="flex mb-2  text-justify">
            <ChartLine size={19} />
            <span className="pl-2">Boost Your Trust Factor</span>
          </li>
          <li className="flex mb-2 text-md text-justify">
            <ShoppingCart size={19} />
            <span className="pl-2">Keep Them Coming Back, Boosting Customer Loyalty</span>
          </li>
          <li className="flex mb-2 text-md text-justify">
            <PersonStanding size={19} />
            <span className="pl-2">The Power of Sharing, The Word-of-Mouth Effect</span>
          </li>
          <li className="flex mb-2 text-md text-justify">
            <BookUp2 size={19} />
            <span className="pl-2">Fresh Perspectives on Branding</span>
          </li>
        </motion.ul>
      </div>

      {/* Image */}
      <motion.div
        className="mt-2 col-span-1"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <img className="p-2" src={photo} alt="testimonial" />
      </motion.div>
    </div>
  );
};

export default Testimonials;
