import React, { useEffect, useRef, useState } from 'react';
import tools from "../assets/Tools.png";
import { CircleArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Tools() {
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
        <div ref={ref} className="p-2 max-w-[1240px] mx-auto my-20 md:grid grid-cols-2 gap-6">
            
            {/* Text Content */}
            <motion.div 
                className="col-span-1 p-3 flex flex-col justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <h1 className="text-3xl font-playfair font-bold text-dark-blue mb-4">
                    Connect PACAM To <br />Other Tools You Use.
                </h1>
                <p className="text-xm  lg:text-lg w-[70%] font-lora text-gray-600 mb-5">
                    Easily integrate it with your WMS (Warehouse Management System) or OMS (Order Management System) to maintain efficiency and create video logs for your customers.
                </p>
                <Link to="/contact" className="text-xm  lg:text-lg font-lora flex items-center hover:text-[#041558] mt-5">
                    Find More Solution Partners
                    <CircleArrowRight size={20} className="ml-2" />
                </Link>
            </motion.div>
            
            {/* Image */}
            <motion.div 
                className="col-span-1 mt-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
            >
                <img className="p-3 rounded-lg shadow-lg" src={tools} alt="Tools" />
            </motion.div>

        </div>
    );
}

export default Tools;
