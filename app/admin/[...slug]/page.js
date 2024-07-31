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

const Page = ({ params }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const slug = params.slug[0]; // `slug` is an array of path segments

  useEffect(() => {
    if (slug.includes("users")) {
      fetchUserData();
    } else {
      setLoading(false);
    }
  }, [slug]);

  const fetchUserData = async () => {
    try {
      const res = await fetch('https://refferal-deploy.vercel.app/api/login');
      const data = await res.json();
      setUserData(data);
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!slug) {
    // If slug is not defined (e.g., on initial load), return null or a loading indicator
    return null;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (slug.includes("profile")) {
    return <Profile />;
  } else if (slug.includes("transection")) {
    return <Transection />;
  } else if (slug.includes("investment")) {
    return <Transection />;
  } else if (slug.includes("settings")) {
    return (
      <div className="mt-8 md:ml-[320px] top-0">
        <ProfileSetting />
      </div>
    );
  } else if (slug.includes("withdraw")) {
    return (
      <div className="mt-8 md:ml-[320px] top-0">
        <Withdraw />
      </div>
    );
  } else if (slug.includes("users")) {
    return <User user={userData} />;
  } else if (slug.includes("refferal")) {
    return <Refferal user={userData} />;
  } else {
    return <PageNotFound />;
  }
};

export default Page;
