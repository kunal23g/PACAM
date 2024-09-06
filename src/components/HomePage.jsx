import HeroSection from './HeroSection'
import Logoslide from './Logoslide'
import Testimonials from './Testimonial'
import Cards from './Cards'
import Problems from './Problems'
import Contact from './Contact'
import Tools from './Tools'
import Next from './Next'
import React from 'react'
import Pfeatures from './Pfeatures'

const HomePage=()=> {
    return (
        <>
        <HeroSection />
              <Logoslide />
        <Problems/>
        <Testimonials />
        <Cards/>
        <Next/>
        <Pfeatures/>
        <Tools/>
        <Contact/>
        </>
    )
}

export default HomePage
