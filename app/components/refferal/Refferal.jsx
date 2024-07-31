"use client"
import React, { useState } from 'react'

const Refferal = () => {
  const [buttonText, setButtonText] = useState("Copy");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setButtonText("Copied");
      setTimeout(() => {
        setButtonText("Copy");
      }, 2000);
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  }

  const referralId = "SR2451EW32";

  return (
    <div className="mt-8 md:ml-[320px] top-0">
      <div className="container px-4 mx-auto">
        <div className="pt-4 bg-white shadow rounded">
          <div className="flex px-6 pb-4 border-b">
            <h3 className="text-xl font-bold">Recent Transactions</h3>
          </div>
          <div className="p-4 overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr className="text-xxl text-gray-500 text-left">
                  <th className="pb-3 font-medium">Referral ID</th>
                  <th className="pb-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-x bg-gray-50">
                  <td className="py-5 px-6 font-medium">{referralId}</td>
                  <td>
                    <button
                      onClick={() => copyToClipboard(referralId)}
                      className="py-2 px-5 text-white bg-indigo-500 rounded-full"
                    >
                      {buttonText}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Refferal
