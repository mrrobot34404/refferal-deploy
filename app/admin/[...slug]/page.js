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
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import SingleUser from '@/app/components/singleUser/SingleUser';
import NotVerified from '@/app/components/notVerified/NotVerified';
import Wallet from '@/app/components/wallet/Wallet';
import DisposeAmount from '@/app/components/disposeAmount/DisposeAmount';

const Page = ({ params }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [refferalUsers, setRefferalUsers] = useState([]);
  const slug = params.slug; // `slug` is an array of path segments

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
          setUserData(data);
          setUserId(data._id);
          setLoading(false);
        } catch (error) {
          console.error('Failed to fetch user data:', error);
        }
      };
      fetchUserId();
    }
  }, [session, status, router]);

  useEffect(() => {
    if (slug.length === 2 && slug[0] === 'users') {
      const userId = slug[1];
      const fetchUserById = async () => {
        try {
          const res = await fetch(`http://localhost:3000/api/login/${userId}`);

          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }

          const data = await res.json();
          setAllUsers(data);
          setLoading(false);
        } catch (error) {
          console.error('Failed to fetch user data:', error);
        }
      };
      fetchUserById();
    }
  }, [session, status, slug]);


 console.log(userId);
  if (!slug) {
    return null;
  }

  if (loading) {
    return <h1 className='ml-[320px]'>Loading...</h1>;
  }

  if (slug.includes("profile")) {
    return (
      <Profile user={userData} />
    );
  } else if (slug.includes("transection")) {
    return (
      <Transection />
    );
  } else if (slug.includes("investment")) {
    return (
      <div className="mt-8 md:ml-[320px] top-0">
        <Pricing user={userData._id} verify={userData.verified}/>
      </div>
    );
  } else if (slug.includes("settings")) {
    return (
      <div className="mt-8 md:ml-[320px] top-0">
        <ProfileSetting user={userData} />
      </div>
    );
  } else if (slug.includes("withdraw")) {
    return (
      <div className="mt-8 md:ml-[320px] top-0">
        <Withdraw />
      </div>
    );
  } else if (slug.includes("users") && slug.length === 2) {
    return (
        <SingleUser user={allUsers} />
    );
  }  else if (slug.includes("refferalteam")) {
    if(userData.verified) {
      return (
        <Transection team={userData._id} />
      )
    } 
  } else if (slug.includes("users") && userData.isAdmin) {
    return (
      <User user={userData} />
    );
  } else if (slug.includes("refferal")) {
    if(userData.verified) {
      return (
        <Refferal user={userData._id} />
      )
    } 
    else {
      return <div className="mt-8 md:ml-[320px] top-0">
        <NotVerified />
      </div>
    }
  } else if (slug.includes("wallet") && userData.isAdmin) {
    return (
      <div className="mt-8 md:ml-[320px] top-0">
        <Wallet />
      </div>
    );
  } else if (slug.includes("disposeAmount") && userData.isAdmin) {
    return (
      <div className="mt-8 md:ml-[320px] top-0">
        <DisposeAmount />
      </div>
    );
  } else {
    return <PageNotFound />;
  }
};

export default Page;
