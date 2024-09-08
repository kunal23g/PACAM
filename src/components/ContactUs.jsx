import React, { useState } from 'react';
import { CircleArrowRight } from 'lucide-react';

// Custom Alert Component
const CustomAlert = ({ message }) => (
  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-2" role="alert">
    <span className="block sm:inline">{message}</span>
  </div>
);

const ContactUs = () => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [shipments, setShipments] = useState('');
  const [workers, setWorkers] = useState('');
  const [agreePersonalInfo, setAgreePersonalInfo] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let formErrors = {};
    if (!name) formErrors.name = "Name is required";
    if (!contactNumber) formErrors.contactNumber = "Contact number is required";
    if (!email) formErrors.email = "Email is required";
    if (!companyName) formErrors.companyName = "Company name is required";
    if (!shipments) formErrors.shipments = "Number of shipments is required";
    if (!workers) formErrors.workers = "Number of workers is required";
    if (!agreePersonalInfo) formErrors.agreePersonalInfo = "You must agree to the collection and use of personal information";
    if (!agreeMarketing) formErrors.agreeMarketing = "You must agree to receive promotion and marketing information";
    
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log({
        name,
        contactNumber,
        email,
        companyName,
        shipments,
        workers,
        agreePersonalInfo,
        agreeMarketing
      });
      // Here you would typically send this data to your backend
      setIsSubmitted(true);
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  const ThankYouMessage = () => (
    <div className="flex items-center justify-center ">
      <div className="text-center">
        <h2 className=" font-playfair text-3xl font-bold text-blue-900 mb-4">Thank You for Connecting With Us!</h2>
        <p className="text-xl text-neutral-700">We appreciate your interest and will get back to you shortly.</p>
      </div>
    </div>
  );

  return (
    <div className="bg-[#F7EFE5] py-12">
      <div className="max-w-[1380px] mx-auto px-6">
        {/* Title and Description */}
        <div className="text-left lg:flex md:justify-between mb-12">
          <div>
            <p className=" font-playfair font-semibold text-xm uppercase text-neutral-500 font-light">Contact Us</p>
            <h1 className="font-playfair  text-4xl font-bold text-blue-900 mt-2">
              Efficiency Starts With PACAM
            </h1>
          </div>
          <p className=" font-lora py-2 md:mt-0 text-neutral-500 font-light max-w-md">
            Just fill in the details below, and our friendly experts will reach out to you shortly. We're excited to help!
          </p>
        </div>

        {/* Form or Thank You Message */}
        <div className="bg-[#F3E2D3] p-8 rounded-lg shadow-md ">
          {isSubmitted ? (
            <ThankYouMessage />
          ) : (
            <form onSubmit={handleSubmit} className="lg:grid lg:grid-cols-2 gap-6">
              {/* Name */}
              <div className='mb-3 shadow-md'>
                <label className="text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  placeholder="eg. Hello User "
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <CustomAlert message={errors.name} />}
              </div>

              {/* Contact Number */}
              <div className='mb-3 shadow-md'>
                <label className="text-sm font-semibold mb-2">Contact Number</label>
                <input
                  type="text"
                  placeholder="eg. +91 78908 76555"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
                {errors.contactNumber && <CustomAlert message={errors.contactNumber} />}
              </div>

              {/* Email */}
              <div className='mb-3 shadow-md'>
                <label className="text-sm font-semibold mb-2">E-Mail</label>
                <input
                  type="email"
                  placeholder="eg. hello@gmail.com"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <CustomAlert message={errors.email} />}
              </div>

              {/* Company Name */}
              <div className='mb-3 shadow-md'>
                <label className="text-sm font-semibold mb-2">Company Name</label>
                <input
                  type="text"
                  placeholder="eg. PACAM OPC. PVT. LTD."
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                {errors.companyName && <CustomAlert message={errors.companyName} />}
              </div>

              {/* Average Number of Shipments */}
              <div className='mb-3 shadow-md'>
                <label className="text-sm font-semibold mb-2">
                  Average Number Of Shipments Per Month
                </label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={shipments}
                  onChange={(e) => setShipments(e.target.value)}
                >
                  <option value="">Select Number Of Shipments</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
                {errors.shipments && <CustomAlert message={errors.shipments} />}
              </div>

              {/* Number of Packing Workers */}
              <div className=''>
                <label className="text-sm font-semibold mb-2">
                  Number Of Packing Workers
                </label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={workers}
                  onChange={(e) => setWorkers(e.target.value)}
                >
                  <option value="">Select Number Of Workers</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
                {errors.workers && <CustomAlert message={errors.workers} />}
              </div>

              {/* Checkboxes */}
              <div className="md:flex col-span-2 justify-between my-5">
                <div className="flex flex-col">
                  <div className='flex mb-4 items-center'>
                    <input
                      type="checkbox"
                      id="personal-info"
                      className="mr-2"
                      checked={agreePersonalInfo}
                      onChange={(e) => setAgreePersonalInfo(e.target.checked)}
                    />
                    <label htmlFor="personal-info" className="text-sm">
                      Agree to <a href="#" className="text-blue-600 underline">The Collection and Use of Personal Information</a>
                    </label>
                  </div>
                  {errors.agreePersonalInfo && <CustomAlert message={errors.agreePersonalInfo} />}

                  <div className="flex mb-4 items-center">
                    <input
                      type="checkbox"
                      id="marketing-info"
                      className="mr-2"
                      checked={agreeMarketing}
                      onChange={(e) => setAgreeMarketing(e.target.checked)}
                    />
                    <label htmlFor="marketing-info" className="text-sm">
                      Agree to <a href="#" className="text-blue-600 underline">Promotion and Marketing Information</a>
                    </label>
                  </div>
                  {errors.agreeMarketing && <CustomAlert message={errors.agreeMarketing} />}
                </div>

                {/* Submit Button */}
                <div className="">
                  <button
                    type="submit"
                    className="flex 
                     md:w-auto py-3 px-6 bg-black text-white hover:bg-gray-800 transition"
                  >
                    Submit<CircleArrowRight size={19} className="ml-2 mt-[2px]" />
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
