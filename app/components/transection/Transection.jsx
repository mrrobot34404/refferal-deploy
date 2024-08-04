"use client";
import React, { useEffect, useState } from "react";
import NotVerified from "../notVerified/NotVerified";

const Transection = ({ team }) => {
  const [data, setData] = useState(Array.isArray(team) ? team : []);

  useEffect(() => {
    if (!team) {
      return;
    }

    const fetchRefferalUsers = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/refferal/${team}`);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const result = await res.json();
        console.log(result);
        setData(Array.isArray(result) ? result : []);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
        setData([]);
      }
    };

    fetchRefferalUsers();
  }, [team]);

  console.log(team);

  if(team){
    return (
      <div className="mt-8 md:ml-[320px] top-0">
        <div className="container px-4 mx-auto">
          <div className="pt-4 bg-white shadow rounded">
            <div className="flex px-6 pb-4 border-b">
              <h3 className="text-xl font-bold">Refferal Team</h3>
            </div>
            <div className="p-4 overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  <tr className="text-xs text-gray-500 text-left">
                    <th className="pb-3 font-medium">Username</th>
                    <th className="pb-3 font-medium">Email</th>
                    <th className="pb-3 font-medium">Payment Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((member, index) => (
                    <tr key={index} className="text-xs bg-gray-50">
                      <td className="py-5 px-6 font-medium">{member.username}</td>
                      <td className="font-medium">{member.email}</td>
                      <td>
                        <span className={`inline-block py-1 px-2 text-white bg-green-500 rounded-full ${
                              member.status === 'Paid' ? 'bg-green-500' : 'bg-red-500'
                            }`}>{member.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    <div className="mt-8 md:ml-[320px] top-0">
    <h2 className='text-xl font-bold text-center mt-8'>
        Sorry You donot have any refferal Team grow your Network
      </h2>
  </div>
  }
};

export default Transection;
