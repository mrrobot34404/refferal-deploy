"use client"
import { useEffect } from "react";
import Profile from "../components/profile/Profile";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    
    const storedMessage = localStorage.getItem('loginMessage');
    if (!storedMessage) {
      router.replace('/');
    }
  }, []);
  return (
   
    <Profile />
  
  );
};

export default Page;
