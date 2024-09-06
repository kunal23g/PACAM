import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import HomePage from './components/HomePage.jsx'
import Aboutus from './components/Aboutus.jsx'
import Features from './components/Features.jsx'
import { useEffect } from 'react'
import ContactUs from './components/ContactUs.jsx'
import Integration from './components/Integration.jsx'

// New ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  console.log(pathname);
  
  
  return null;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <Layout />
      </>
    ),
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "about-us",
        element: <Aboutus />
      },
      {
        path: "features",
        element: <Features />
      },
      {
        path: "contact",
        element: <ContactUs/>
      },
      {
        path: "integration",
        element: <Integration/>
      },
      {
        path:"pricing",
        element:<ContactUs/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
