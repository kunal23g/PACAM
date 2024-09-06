import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import ContactUs from './ContactUs'
import Integration from './Integration'



const Layout=()=> {
    return (
        <>
        <Navbar/>
        
        <div className="mt-16"></div>
        <Outlet/>
        
        <Footer/>

        
        </>
    )
}

export default Layout
