import React from 'react'

const Featured = () => {
  return (
    <div className="container px-4 mx-auto">
    <div className="flex flex-wrap -m-8">
      <div className="w-full md:w-1/2 p-8">
        <div className="inline-block mb-6 px-2 py-1 font-semibold bg-green-100 rounded-full">
          <div className="flex flex-wrap items-center -m-1">
            <div className="w-auto p-1">
              <a className="text-sm" href="">
                👋 Get 20% Profit on every Referral
              </a>
            </div>
            <div className="w-auto p-1">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.66667 3.41675L12.75 7.50008M12.75 7.50008L8.66667 11.5834M12.75 7.50008L2.25 7.50008"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <h1 className="mb-6 text-6xl md:text-8xl lg:text-10xl font-bold font-heading md:max-w-xl leading-none">
          Discover mentors that helps you grow
        </h1>
        <p className="mb-11 text-lg text-gray-900 font-medium md:max-w-md">
          Get the best-in-class group mentoring plans and professional benefits for your team
        </p>
        <div className="flex flex-wrap -m-2.5 mb-20">
          <div className="w-full md:w-auto p-2.5">
            <div className="block">
              <button
                className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                type="button"
              >
                Join Free for 30 Days
              </button>
            </div>
          </div>
        </div>
        <p className="mb-6 text-sm text-gray-500 font-semibold uppercase">
          Trusted and loved by 100+ tech first teams
        </p>
        <div className="flex flex-wrap -m-3">
          <div className="w-auto p-3">
            <img src="https://static.shuffle.dev/components/preview/cb300428-eada-4b45-aa61-38d535338608/assets/public/flaro-assets/logos/brands/brand.png" alt="" />
          </div>
          <div className="w-auto p-3">
            <img src="https://static.shuffle.dev/components/preview/cb300428-eada-4b45-aa61-38d535338608/assets/public/flaro-assets/logos/brands/brand2.png" alt="" />
          </div>
          <div className="w-auto p-3">
            <img src="https://static.shuffle.dev/components/preview/cb300428-eada-4b45-aa61-38d535338608/assets/public/flaro-assets/logos/brands/brand3.png" alt="" />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-8">
        <img
          className="transform hover:-translate-y-16 transition ease-in-out duration-1000"
          src="https://static.shuffle.dev/components/preview/cb300428-eada-4b45-aa61-38d535338608/assets/public/flaro-assets/images/headers/header.png"
          alt=""
        />
      </div>
    </div>
  </div>
  )
}

export default Featured