"use client"
import React, { useState } from 'react';

const Pricing = () => {
  const [toggle, setToggle] = useState(true);

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
            <div 
              onClick={() => setToggle(!toggle)} 
              className="relative inline-flex p-1 w-12 h-7 items-center justify-end bg-gray-100 rounded-full cursor-pointer"
            >
              <span className={`absolute left-1 w-5 h-5 bg-orange-900 rounded-full transition-all duration-500 ${toggle ? 'left-1/2' : ''}`}></span>
            </div>
            {!toggle && <span className="ml-3 text-xl text-gray-900">Monthly pricing (save 20%)</span>}
            {toggle && <span className="ml-3 text-xl text-gray-900">Annual pricing (save 20%)</span>}
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 lg:pt-16 mb-8 lg:mb-0">
              <div className="max-w-sm mx-auto p-10 bg-gray-50 border border-gray-100 rounded-3xl">
                <div className="flex mb-4 items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
                  <img src="https://static.shuffle.dev/components/preview/c4e6b06e-6b70-403f-92e9-fa62e0a96eef/assets/public/saturn-assets/images/pricing/icon1.svg" alt="" />
                </div>
                <span className="block text-2xl font-semibold text-gray-900 mb-2">Starter</span>
                <p className="text-gray-500 mb-6">Simply dummy text of the printing and typesetting industry.</p>
                <span className="flex items-end">
                  {!toggle && <span className="text-5xl font-extrabold text-gray-900 leading-none">$100</span>}
                  {!toggle && <span className="text-gray-400">/month</span>}
                  {toggle && <span className="text-5xl font-extrabold text-gray-900 leading-none">$200</span>}
                  {toggle && <span className="text-gray-400">/year</span>}
                </span>
                <div className="mt-6">
                  <span className="block font-bold mb-4">What&apos;s included:</span>
                  <ul className="mb-10">
                    <li className="flex mb-6 items-center">
                      <img src="https://static.shuffle.dev/components/preview/c4e6b06e-6b70-403f-92e9-fa62e0a96eef/assets/public/saturn-assets/images/pricing/green-check.svg" alt="" />
                      <span className="ml-2 text-sm text-gray-900">Unlimited Upload</span>
                    </li>
                    <li className="flex mb-6 items-center">
                      <img src="https://static.shuffle.dev/components/preview/c4e6b06e-6b70-403f-92e9-fa62e0a96eef/assets/public/saturn-assets/images/pricing/green-check.svg" alt="" />
                      <span className="ml-2 text-sm text-gray-900">Advanced Statistic</span>
                    </li>
                    <li className="flex mb-6 items-center">
                      <img src="https://static.shuffle.dev/components/preview/c4e6b06e-6b70-403f-92e9-fa62e0a96eef/assets/public/saturn-assets/images/pricing/check-circle-grey.svg" alt="" />
                      <span className="ml-2 text-sm text-gray-500 line-through">Chat support</span>
                    </li>
                  </ul>
                  <a 
                    className="relative group inline-block py-4 px-7 text-sm text-center text-orange-900 hover:text-orange-50 font-semibold border border-gray-200 rounded-full overflow-hidden transition duration-200" 
                    href="#"
                  >
                    <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                    <span className="relative">Choose Plan</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <div className="max-w-sm mx-auto p-10 bg-gray-900 rounded-3xl">
                <div className="flex mb-4 items-center justify-center w-10 h-10 bg-orange-900 rounded-full">
                  <img src="https://static.shuffle.dev/components/preview/c4e6b06e-6b70-403f-92e9-fa62e0a96eef/assets/public/saturn-assets/images/pricing/icon3.svg" alt="" />
                </div>
                <span className="block text-2xl font-semibold text-white mb-2">Popular</span>
                <p className="text-gray-500 mb-6">Simply dummy text of the printing and typesetting industry.</p>
                <span className="flex items-end">
                  {!toggle && <span className="text-5xl font-extrabold text-white leading-none">$1400</span>}
                  {!toggle && <span className="text-gray-50">/month</span>}
                  {toggle && <span className="text-5xl font-extrabold text-white leading-none">$2800</span>}
                  {toggle && <span className="text-gray-50">/year</span>}
                </span>
                <div className="mt-6">
                  <span className="block text-white font-bold mb-4">What&apos;s included:</span>
                  <ul className="mb-10">
                    <li className="flex mb-6 items-center">
                      <img src="https://static.shuffle.dev/components/preview/c4e6b06e-6b70-403f-92e9-fa62e0a96eef/assets/public/saturn-assets/images/pricing/green-check.svg" alt="" />
                      <span className="ml-2 text-sm text-white">Unlimited Upload</span>
                    </li>
                    <li className="flex mb-6 items-center">
                      <img src="https://static.shuffle.dev/components/preview/c4e6b06e-6b70-403f-92e9-fa62e0a96eef/assets/public/saturn-assets/images/pricing/green-check.svg" alt="" />
                      <span className="ml-2 text-sm text-white">Advanced Statistic</span>
                    </li>
                    <li className="flex mb-6 items-center">
                      <img src="https://static.shuffle.dev/components/preview/c4e6b06e-6b70-403f-92e9-fa62e0a96eef/assets/public/saturn-assets/images/pricing/check-circle-grey.svg" alt="" />
                      <span className="ml-2 text-sm text-gray-500 line-through">Display Your Workshops</span>
                    </li>
                  </ul>
                  <a 
                    className="relative group inline-block py-4 px-7 text-sm text-center text-orange-50 hover:text-orange-900 font-semibold bg-orange-900 rounded-full overflow-hidden transition duration-200" 
                    href="#"
                  >
                    <div className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                    <span className="relative">Choose Plan</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 lg:pt-16">
              <div className="max-w-sm mx-auto p-10 bg-gray-50 border border-gray-100 rounded-3xl">
                <div className="flex mb-4 items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
                  <img src="https://static.shuffle.dev/components/preview/c4e6b06e-6b70-403f-92e9-fa62e0a96eef/assets/public/saturn-assets/images/pricing/icon2.svg" alt="" />
                </div>
                <span className="block text-2xl font-semibold text-gray-900 mb-2">Enterprise</span>
                <p className="text-gray-500 mb-6">Simply dummy text of the printing and typesetting industry.</p>
                <span className="flex items-end">
                  {!toggle && <span className="text-5xl font-extrabold text-gray-900 leading-none">$2100</span>}
                  {!toggle && <span className="text-gray-400">/month</span>}
                  {toggle && <span className="text-5xl font-extrabold text-gray-900 leading-none">$4200</span>}
                  {toggle && <span className="text-gray-400">/year</span>}
                </span>
                <div className="mt-6">
                  <span className="block font-bold mb-4">What&apos;s included:</span>
                  <ul className="mb-10">
                    <li className="flex mb-6 items-center">
                      <img src="https://static.shuffle.dev/components/preview/c4e6b06e-6b70-403f-92e9-fa62e0a96eef/assets/public/saturn-assets/images/pricing/green-check.svg" alt="" />
                      <span className="ml-2 text-sm text-gray-900">Unlimited Upload</span>
                    </li>
                    <li className="flex mb-6 items-center">
                      <img src="https://static.shuffle.dev/components/preview/c4e6b06e-6b70-403f-92e9-fa62e0a96eef/assets/public/saturn-assets/images/pricing/green-check.svg" alt="" />
                      <span className="ml-2 text-sm text-gray-900">Advanced Statistic</span>
                    </li>
                    <li className="flex mb-6 items-center">
                      <img src="https://static.shuffle.dev/components/preview/c4e6b06e-6b70-403f-92e9-fa62e0a96eef/assets/public/saturn-assets/images/pricing/green-check.svg" alt="" />
                      <span className="ml-2 text-sm text-gray-900">Profile Badge</span>
                    </li>
                  </ul>
                  <a 
                    className="relative group inline-block py-4 px-7 text-sm text-center text-orange-900 hover:text-orange-50 font-semibold border border-gray-200 rounded-full overflow-hidden transition duration-200" 
                    href="#"
                  >
                    <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                    <span className="relative">Choose Plan</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
