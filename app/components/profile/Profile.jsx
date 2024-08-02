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
          <tr className="text-xs text-gray-500 text-left"><th className="pl-6 pb-3 font-medium">Customer ID</th><th className="pb-3 font-medium">User</th><th className="pb-3 font-medium">Joined</th><th className="pb-3 font-medium">Status</th></tr>
        </thead>
        <tbody>
        {data.map((result) => (


          <tr className="text-xs bg-gray-50" key={result._id}>
            <td className="py-5 px-6 font-medium">{result._id}</td>
            <td className="flex px-4 py-3">
              <img className="w-8 h-8 mr-4 object-cover rounded-md" src="https://images.unsplash.com/photo-1559893088-c0787ebfc084?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
              <div>
                <p className="font-medium">{result.username}</p>
                <p className="text-gray-500">{result.email}</p>
              </div>
            </td>
            <td className="font-medium">09/04/2021</td>
            <td>
              <span className="inline-block py-1 px-2 text-white bg-green-500 rounded-full">{result.status}</span>
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
