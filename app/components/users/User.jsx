"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function User({ user }) {
  // Debug: Check what `user` contains
 

  // Initialize state correctly based on `user` type
  const [users, setUsers] = useState([]);

  // Debug: Check initial state
  useEffect(() => {
    const fetchUserData = async () => {
  try {
    // Encode the email to handle special characters
   
    const res = await fetch(`/api/login`);
    
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    
    const data = await res.json();
    console.log(data);
    setUsers(data);
  } catch (error) {
    console.error('Failed to fetch user data:', error);
  }
};
fetchUserData();

},[]);

    return (
      <section className="py-8 md:ml-[320px] mt-8">

         
            <div className="container px-4 mx-auto" >
              <div className="p-4 mb-6 bg-white shadow rounded overflow-x-auto">
                <table className="table-auto w-full">
                  <thead>
                    <tr className="text-xs text-gray-500 text-left">
                      <th className="pl-6 pb-3 font-medium">Customer ID</th>
                      <th className="pb-3 font-medium">User</th>
                      <th className="pb-3 font-medium">Uti Number</th>
                      <th className="pb-3 font-medium">Refferal</th>
                      <th className="pb-3 font-medium">Phone</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium">Level</th>
                      <th className="pb-3 font-medium">Plan</th>
                    </tr>
                  </thead>
                  <tbody>
                  { users.map((data) => (
                    <tr className="text-xs bg-gray-50" key={data._id}>
                      <td className="py-5 px-6 font-medium">{data._id}</td>
                      <td className="flex px-4 py-3">
                        <img
                          className="w-8 h-8 mr-4 object-cover rounded-md"
                          src="https://images.unsplash.com/photo-1559893088-c0787ebfc084?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                          alt=""
                        />
                        <div>
                          <p className="font-medium">{data.username}</p>
                          <p className="text-gray-500">{data.email}</p>
                        </div>
                      </td>
                      <td className="font-medium">
                      <button>{data.utiNumber ? data.utiNumber : 'pending'}</button>
                      </td>
                      <td className="font-medium">{data.referalId === '' ? 'Null' : data.referalId}</td>
                      
                      <td className="font-medium">{data.number === '' ? 'Null' : data.number}</td>
                      <td>
                        <span
                          className={`inline-block py-1 px-2 text-white rounded-full cursor-pointer ${
                            data.status === 'Paid' ? 'bg-green-500' : 'bg-red-500'
                          }`}
                        >
                          {data.status}
                        </span>
                      </td>
                      <td>
                        <span className="inline-block py-1 px-2 text-purple-500 bg-purple-50 rounded-full">
                          {data.level}
                        </span>
                      </td>
                      <td>
                        <span className="inline-block py-1 px-2 text-purple-500 bg-purple-50 rounded-full">
                          {data.planName === '' || data.planName === null ? 'Null' : data.planName}
                        </span>
                      </td>
                      <td>
                        <Link href={`/admin/users/${data._id}`}>
                        <span

                          className={`inline-block py-1 px-2 text-white rounded-full cursor-pointer bg-green-500
                            }`}
                            >
                          Edit
                        </span>
                          </Link>
                      </td>
                    </tr>
                ))}
                  </tbody>
                </table>
              </div>
            </div>
        
      </section>
        
    );
  

  }