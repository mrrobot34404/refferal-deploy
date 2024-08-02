"use client";
import React, { useState, useEffect } from 'react';
import PageNotFound from "@/app/components/pageNotFound/PageNotFound";
import Pricing from "@/app/components/pricing/Pricing";
import Profile from "@/app/components/profile/Profile";
import ProfileSetting from "@/app/components/profileSettings/ProfileSetting";
import Transection from "@/app/components/transection/Transection";
import User from "@/app/components/users/User";
import Withdraw from "@/app/components/withdraw/Withdraw";
import Refferal from '@/app/components/refferal/Refferal';
import Sidebar from '@/app/components/sidebar/Sidebar';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = ({ params }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const slug = params.slug[0]; // `slug` is an array of path segments

  useEffect(() => {
    if (status === "loading") {
      return;
    }

    if (!session) {
      router.push('/');
    } else {
     
      const fetchUserId = async () => {
        try {
          const res = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: session.user.email }),
          });
      
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
      
          const data = await res.json();
         // console.log(data);
          setUserData(data);
          setUserId(data._id);
          setLoading(false);
        } catch (error) {
          console.error('Failed to fetch user data:', error);
        }
      }
      fetchUserId();
    }
  }, [session, status, router]);



  // useEffect(() => {
  //   if (userId !== null ) {
  //     fetchUserData();
  //   } else {
  //     setLoading(false);
  //   }
  // }, [userId]);

  // const fetchUserData = async () => {

  
  //   try {
  //     // Encode the email to handle special characters
     
  //     const res = await fetch(`http://localhost:3000/api/login/${userId}`);
      
  //     if (!res.ok) {
  //       throw new Error(`HTTP error! Status: ${res.status}`);
  //     }
      
  //     const data = await res.json();
  //     console.log(data);
  //     setUserData(data);
  //   } catch (error) {
  //     console.error('Failed to fetch user data:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  
  if (!slug) {
    return null;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (slug.includes("profile")) {
    return (
      <>
        <Sidebar />
        <Profile user={userData} />
      </>
    );
  } else if (slug.includes("transection")) {
    return (
      <>
        <Sidebar />
        <Transection />
      </>
    );
  } else if (slug.includes("investment")) {
    return (
      <>
        <Sidebar />
        <Transection />
      </>
    );
  } else if (slug.includes("settings")) {
    return (
      <>
        <Sidebar />
        <div className="mt-8 md:ml-[320px] top-0">
          <ProfileSetting user={userData} />
        </div>
      </>
    );
  } else if (slug.includes("withdraw")) {
    return (
      <>
        <Sidebar />
        <div className="mt-8 md:ml-[320px] top-0">
          <Withdraw />
        </div>
      </>
    );
  } else if (slug.includes("users")) {
    return (
      <>
        <Sidebar />
        <User user={userData} />
      </>
    );
  } else if (slug.includes("refferal")) {
    return (
      <>
        <Sidebar />
        <Refferal user={userData} />
      </>
    );
  } else {
    return <PageNotFound />;
  }
};

export default Page;
