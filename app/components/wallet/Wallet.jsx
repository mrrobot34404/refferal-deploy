"use client"
import React, { useEffect, useState } from 'react'

const Wallet = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchWallet = async() => {
            try {
                const res = await fetch(`http://localhost:3000/api/wallet`);
        
                if (!res.ok) {
                  throw new Error(`HTTP error! Status: ${res.status}`);
                }
        
                const result = await res.json();
                console.log(result);
                setData(result.totalPlanPrice);
              } catch (error) {
                console.error('Failed to fetch user data:', error);
                setData([]);
              }
        }
        fetchWallet();
    },[])
    //console.log(data);

    if(data){
        return (
            <h2 className='text-xl font-bold text-center mt-8'>
        Total Users Investment is : {data}
      </h2>
  )
} else {
    <div>
        Loading
      </div>
}
}

export default Wallet