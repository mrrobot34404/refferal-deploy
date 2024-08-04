"use client";
import React, { useEffect, useState } from 'react';
import { PlanManagement } from '@/utilis/auth';
import { CldUploadWidget } from 'next-cloudinary';

const Pricing = ({ user, verify }) => {
  const [userId, setUserId] = useState(user? user : '');
  const [verified, setVerified] = useState(verify? verify : false);
  const [plan, setPlan] = useState(PlanManagement);
  const [payment, setPayment] = useState(false);
  const [planPrice, setPlanPrice] = useState('');
  const [planId, setPlanId] = useState(null);
  const [planName, setPlanName] = useState('');
  const [utiNumber, setUtiNumber] = useState(null);
  const [media, setMedia] = useState('');
  const [success, setSuccess] = useState('');
 // console.log(userId? userId : '');



  const handlePlan = (id, price, name) => {
    setPayment(true);
    setPlanPrice(price);
    setPlanId(id);
    setPlanName(name);
   // console.log(id, price, name);
  }
 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate that none of the fields are empty
    if (!planName || !planPrice || !media || !utiNumber) {
      alert('All fields must be filled out');
      return; // Exit the function if any field is empty
    }
  
    try {
      const response = await fetch(`http://localhost:3000/api/login/${userId}`, {
        method: 'PATCH', // Change method to PATCH
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          planName,
          planPrice,
          screenShot: media,
          utiNumber,
        })
      });
  
      const result = await response.json();
  
      if (response.ok) {
        console.log("Updated successfully");
        setSuccess("Sent successfully");
        
      } else {
        alert(result.error || 'An error occurred');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Sorry! Failed to send your message');
    }
  };
  
  

  if (!payment) {
    return (
      <section className="relative py-20 overflow-hidden bg-gray-50">
        <img className="absolute top-0 right-0 -mr-32 md:-mr-0" src="https://static.shuffle.dev/components/preview/c4e6b06e-6b70-403f-92e9-fa62e0a96eef/assets/public/saturn-assets/images/pricing/circle-star.png" alt="" />
        <div className="relative container px-4 mx-auto">
          <div className="max-w-2xl lg:max-w-5xl mx-auto mb-24 text-center">
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
              <span>Choose a plan for a more</span>
              <span className="font-serif italic">advanced</span>
              <span>business</span>
            </h1>
            <div className="flex items-center justify-center">
              <div className="relative inline-flex p-1 w-12 h-7 items-center justify-end bg-gray-100 rounded-full cursor-pointer">
                <span className="absolute left-1 w-5 h-5 bg-orange-900 rounded-full transition-all duration-500"></span>
              </div>
              <span className="ml-3 text-xl text-gray-900">Annual Platform Fee (RS: 50)</span>
            </div>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap -mx-4">
              {plan.map((result) => (
                <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 mt-5" key={result.id}>
                  <div className="max-w-sm mx-auto p-10 bg-gray-900 rounded-3xl">
                    <div className="flex mb-4 items-center justify-center w-10 h-10 bg-orange-900 rounded-full">
                      <img src="https://static.shuffle.dev/components/preview/c4e6b06e-6b70-403f-92e9-fa62e0a96eef/assets/public/saturn-assets/images/pricing/icon3.svg" alt="" />
                    </div>
                    <span className="block text-2xl font-semibold text-white mb-2">{result.name}</span>
                    <p className="text-gray-500 mb-6">Simply dummy text of the printing and typesetting industry.</p>
                    <span className="flex items-end">
                      <span className="text-5xl font-extrabold text-white leading-none">{result.price} RS</span>
                      <span className="text-gray-50">One Time Payment</span>
                    </span>
                    <div className="mt-6">
                      <a 
                        className="relative group inline-block py-4 px-7 text-sm text-center text-white hover:text-gray-900 font-semibold border border-gray-200 rounded-full overflow-hidden transition duration-200" 
                        href="#"
                        onClick={() => handlePlan(result.id, result.price, result.name)}
                      >
                        <div className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                        <span className="relative">Choose Plan</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="bg-coolGray-50 py-4">
        <div className="container px-4 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap">
              <div className="w-full p-3">
                <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
                  <div className="flex flex-wrap pb-3 -m-3">
                    
                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-base text-coolGray-800">Enter UTI Number</p>
                      <input
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="text"
                        name="Enter UTI Number"
                        placeholder="111121111112"
                        onChange={(e) => setUtiNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="py-3">
      <div className="w-full">
        <div className="flex flex-wrap -m-3">
          <div className="w-full p-3">
            <p className="mb-1.5 font-medium text-coolGray-800 text-base">Featured Image</p>
            <div className="relative flex flex-col items-center justify-center mb-6 p-6 h-44 text-center text-green-500 focus-within:border-green-500 border border-dashed border-coolGray-200 rounded-lg">
            <CldUploadWidget
      signatureEndpoint="/api/sign-cloudinary-params"
      onSuccess={(result, { widget }) => {
        setMedia(result?.info.public_id); // { public_id, secure_url, etc }
       
      }}
    >
      {({ open }) => {
        function handleOnClick() {
          setMedia(undefined);
          open();
        }
        return (
          <button onClick={handleOnClick}>
            Upload ScreenShot
          </button>
        );
      }}
    </CldUploadWidget>
            </div>

          </div>
        </div>
      </div>
    </div>
                  <div className="py-3">
                    <div className="w-full">
                      <div className="flex flex-wrap -m-3">
                        <button className="flex flex-wrap justify-center w-full md:w-auto md:ml-auto px-4 py-2 bg-green-500 hover:bg-green-600 font-medium text-sm text-white border border-green-500 rounded-md shadow-button">
                          <p>Save</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        {success && (
          <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-base text-coolGray-800">{success}</p>
                      </div>
        )}
      </section>
    );
  }
};

export default Pricing;
