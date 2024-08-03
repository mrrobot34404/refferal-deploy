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

  useEffect(() => {
    if (status === "loading") {
      return;
    }

    if (!session) {
      router.push('/');
    } else {
      setLoading(false);
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
          </>
        ) : null}
      </div>
    </SuspenseWrapper>
  );
};

export default Page;
