"use client";

import { useEffect, useState } from "react";
import Profile from "../components/profile/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "loading") {
      // Show loading state while session status is being fetched
      return;
    }

    if (!session) {
      // If no session, redirect to sign-in page
      router.push('/');
    } else {
      // If session is present, set loading to false
      setLoading(false);
    }
  }, [session, status, router]);

  // Show a loading indicator while session validation is in progress
  if (loading || status === "loading") {
    return <div>Loading...</div>; // You can replace this with a spinner or any loading indicator
  }

  // Render the Profile component once the session is validated
  return <Profile />;
};

export default Page;
