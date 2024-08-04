"use client";
import { useState, useEffect } from "react";

export default function Profile({ user }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Ensure `user` is always an array
    if (Array.isArray(user)) {
      setData(user);
    } else if (user && typeof user === 'object') {
      // If `user` is a single object, wrap it in an array
      setData([user]);
    } else {
      // Handle cases where `user` is neither an array nor an object
      console.error("Expected user to be an array or an object, received:", user);
      setData([]);
    }
  }, [user]);
  return (
  
      
    <section className="py-8 md:ml-[320px] mt-8">
  <div className="container px-4 mx-auto">
    <div className="p-4 mb-6 bg-white shadow rounded overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr className="text-xs text-gray-500 text-left"><th className="pl-6 pb-3 font-medium">Username</th><th className="pl-6 pb-3 font-medium">Email</th><th className="pl-6 pb-3 font-medium">Phone</th><th className="pb-3 font-medium">Status</th></tr>
        </thead>
        <tbody>
        {data.map((result) => (


          <tr className="text-xs bg-gray-50" key={result._id}>
            <td className="py-5 px-6 font-medium">{result.username}</td>
            <td className="py-5 px-6 font-medium">{result.email}</td>
            <td className="py-5 px-6 font-medium">{result.number}</td>
            <td>
              <span className={`inline-block py-1 px-2 text-white bg-green-500 rounded-full ${
                            result.status === 'Paid' ? 'bg-green-500' : 'bg-red-500'
                          }`}>{result.status}</span>
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
