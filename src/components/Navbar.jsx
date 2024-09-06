import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    const body = document.body;
    if (mobileDrawerOpen) {
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.width = '100%';
      body.style.height = '100%';
    } else {
      body.style.overflow = '';
      body.style.position = '';
      body.style.width = '';
      body.style.height = '';
    }

    return () => {
      body.style.overflow = '';
      body.style.position = '';
      body.style.width = '';
      body.style.height = '';
    };
  }, [mobileDrawerOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F3EE] border-b border-neutral-700/80">
      <div className="   mx-auto px-4 sm:px-6 lg:px-12 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              <img className="h-8 w-auto" src={logo} alt="Logo" />
            </Link>
          </div>

          <ul className="hidden lg:flex space-x-8">
            {["Features", "About Us", "Pricing", "Integration"].map((item) => (
              <li key={item}>
                <NavLink
                  to={item.toLowerCase().replace(' ', '-')}
                  className={({ isActive }) =>
                    `py-2 px-3 rounded-xl transition duration-200 ${
                      isActive
                        ? "text-white bg-black"
                        : "text-gray-700 hover:bg-black hover:text-white"
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="py-2 px-4 rounded-md bg-black text-white hover:bg-gray-800 transition duration-200"
            >
              Contact Us
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              className="p-2 rounded-md text-gray-700 hover:text-black focus:outline-none"
            >
              {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-black transform ${
          mobileDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-600">
          <Link to="/" onClick={() => setMobileDrawerOpen(false)}>
            <img className="h-8 w-auto px-3" src={logo2} alt="Logo" />
          </Link>
          <button
            onClick={toggleNavbar}
            className="p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="mt-8">
          <ul className="px-4 space-y-4">
            {["Features", "About Us", "Pricing", "Integration"].map((item) => (
              <li key={item}>
                <NavLink
                  to={item.toLowerCase().replace(' ', '-')}
                  onClick={() => setMobileDrawerOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-md text-lg ${
                      isActive
                        ? "bg-white text-black"
                        : "text-white hover:bg-gray-800"
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/contact"
                onClick={() => setMobileDrawerOpen(false)}
                
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-md text-lg ${
                    isActive
                      ? "bg-white text-black"
                      : "text-white hover:bg-gray-800"
                  }`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
