"use client";

import { useState } from 'react';

export default function User({ user }) {
  // Debug: Check what `user` contains
  console.log('User prop:', user);

  // Initialize state correctly based on `user` type
  const [users, setUsers] = useState(Array.isArray(user) ? user : [user]);

  // Debug: Check initial state
  console.log('Initial users state:', users);

  const togglePaymentStatus = async (id) => {
    // Find the user to update
    const updatedUser = users.find(user => user._id === id);

    if (!updatedUser) {
      console.error('User not found');
      return;
    }

    // Toggle the payment status
    const newStatus = updatedUser.status === 'Paid' ? 'Unpaid' : 'Paid';

    // Send a PATCH request to update the user
    try {
      const response = await fetch(`/api/login/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: newStatus,
          plan: updatedUser.plan,
          phoneNumber: updatedUser.phoneNumber,
          level: updatedUser.level
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update user');
      }

      // Update the local state with the new status
      const updatedUsers = users.map(user =>
        user._id === id ? { ...user, status: newStatus } : user
      );
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (users[0]?.isAdmin) {
    return (
      <section className="py-8 md:ml-[320px] mt-8">
        {users.length > 0 ? (
          users.map(data => (
            <div className="container px-4 mx-auto" key={data._id}>
              <div className="p-4 mb-6 bg-white shadow rounded overflow-x-auto">
                <table className="table-auto w-full">
                  <thead>
                    <tr className="text-xs text-gray-500 text-left">
                      <th className="pl-6 pb-3 font-medium">Customer ID</th>
                      <th className="pb-3 font-medium">User</th>
                      <th className="pb-3 font-medium">Check Request</th>
                      <th className="pb-3 font-medium">Phone</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium">Level</th>
                      <th className="pb-3 font-medium">Plan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-xs bg-gray-50">
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
                      <button>{data.payments === null ? 'Null' : data.payments}</button>
                      </td>
                      
                      
                      <td className="font-medium">{data.phoneNumber === null ? 'Null' : data.phoneNumber}</td>
                      <td>
                        <span
                          onClick={() => togglePaymentStatus(data._id)}
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
                          {data.plan === null ? 'Null' : data.plan}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))
        ) : (
          <p>No users available</p>
        )}
      </section>
    );
  }

  return <p>You do not have permission to view this page.</p>;
}
