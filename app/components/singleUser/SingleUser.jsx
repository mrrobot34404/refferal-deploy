"use client";
import { useEffect, useState } from 'react';
import { CldImage } from "next-cloudinary";

export default function SingleUser({ user }) {
  const [users, setUsers] = useState([]);
  const [ss, setSs] = useState('');
  const [updateLevel, setUpdateLevel] = useState(null);

  useEffect(() => {
    if (Array.isArray(user)) {
      setUsers(user);
      setSs(user.screenShot ? user.screenShot : '');
      setUpdateLevel(user.level ? user.level : null);
    } else if (user && typeof user === 'object') {
      setUsers([user]);
      setSs(user.screenShot ? user.screenShot : '');
      setUpdateLevel(user.level ? user.level : null);
    } else {
      console.error("Expected user to be an array or an object, received:", user);
      setUsers([]);
      setSs("");
      setUpdateLevel(null);
    }
  }, [user]);

  const togglePaymentStatus = async (id) => {
    const updatedUser = users.find(user => user._id === id);
    if (!updatedUser) {
      console.error('User not found');
      return;
    }
    const newStatus = updatedUser.status === 'Paid' ? 'Unpaid' : 'Paid';
    try {
      const response = await fetch(`/api/login/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!response.ok) throw new Error('Failed to update user');
      const updatedUsers = users.map(user => user._id === id ? { ...user, status: newStatus } : user);
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const incrementLevel = async (id) => {
    const updatedUser = users.find(user => user._id === id);
    if (!updatedUser) {
      console.error('User not found');
      return;
    }
    const newLevel = (updatedUser.level + 1) % 6;
    try {
      const response = await fetch(`/api/login/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ level: newLevel }),
      });
      if (!response.ok) throw new Error('Failed to update user');
      const updatedUsers = users.map(user => user._id === id ? { ...user, level: newLevel } : user);
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const toggleVerification = async (id) => {
    const updatedUser = users.find(user => user._id === id);
    if (!updatedUser) {
      console.error('User not found');
      return;
    }
    const newVerification = !updatedUser.verified;
    try {
      const response = await fetch(`/api/login/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ verified: newVerification }),
      });
      if (!response.ok) throw new Error('Failed to update user');
      const updatedUsers = users.map(user => user._id === id ? { ...user, verified: newVerification } : user);
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="py-8 md:ml-[320px] mt-8">
      <div className="container px-4 mx-auto">
        <div className="p-4 mb-6 bg-white shadow rounded overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="text-xs text-gray-500 text-left">
                <th className="pl-6 pb-3 font-medium">Customer ID</th>
                <th className="pb-3 font-medium">User</th>
                <th className="pb-3 font-medium">Uti Number</th>
                <th className="pb-3 font-medium">Phone</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Level</th>
                <th className="pb-3 font-medium">Verified</th>
                <th className="pb-3 font-medium">Plan</th>
              </tr>
            </thead>
            <tbody>
              {users.map((data) => (
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
                  <td className="font-medium">{data.number === '' ? 'Null' : data.number}</td>
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
                    <span
                      className="inline-block py-1 px-2 text-purple-500 bg-purple-50 rounded-full cursor-pointer"
                      onClick={() => incrementLevel(data._id)}
                    >
                      {data.level}
                    </span>
                  </td>
                  <td>
                    <span
                      className="inline-block py-1 px-2 text-purple-500 bg-purple-50 rounded-full cursor-pointer"
                      onClick={() => toggleVerification(data._id)}
                    >
                      {data.verified === false ? 'Not' : 'Verified'}
                    </span>
                  </td>
                  <td>
                    <span className="inline-block py-1 px-2 text-purple-500 bg-purple-50 rounded-full">
                      {data.planName === '' || data.planName === null ? 'Null' : data.planName}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="container px-4 mx-auto relative z-50">
        <div className="py-12">
          <h1 className="text-white text-2xl font-semibold uppercase mb-2 text-center font-heading">
            <span>UTI Number</span>
          </h1>
          <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-6xl mx-auto mb-12">
            <div className="flex flex-wrap justify-center -mx-2 -mb-4">
              <div className="w-full xs:w-1/4 md:w-1/2 px-2 mb-4">
                <div className="block w-full rounded-xl">
                  {ss && (
                    <CldImage
                      width="960"
                      height="600"
                      src={ss ? ss : ''}
                      sizes="100vw"
                      alt="Description of my image"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
