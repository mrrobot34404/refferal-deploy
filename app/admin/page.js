"use client";
import { useEffect, useState, lazy } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import SuspenseWrapper from "../components/suspenseWrapper/SuspenseWrapper";

const Profile = lazy(() => import("../components/profile/Profile"));
const Sidebar = lazy(() => import("../components/sidebar/Sidebar"));

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    if (status === "loading") {
      return;
    }

    if (!session) {
      router.push('/');
    } else {
      setLoading(false);

      const checkNumber = async () => {
        try {
          const response = await fetch('/api/getPhoneNumber', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: session.user.email })
          });

          const data = await response.json();
         // console.log(data);
          if (response.ok) {
            setUserId(data._id ? data._id : '');
          } else {
            setUserId(null);
          }
        } catch (error) {
          console.error('Failed to fetch phone number', error);
          setUserId(null);
        }
      };

      checkNumber();
    }
  }, [session, status, router]);

  if (loading || status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <SuspenseWrapper>
      <div>
        {session ? (
          <>
          
          
                <Sidebar />
                <Profile />
            
           
          </>
        ) : null}
      </div>
    </SuspenseWrapper>
  );
};

export default Page;
