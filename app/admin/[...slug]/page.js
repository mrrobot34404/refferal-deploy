"use client"
import PageNotFound from "@/app/components/pageNotFound/PageNotFound";
import Profile from "@/app/components/profile/Profile";
import Transection from "@/app/components/transection/Transection";


const Page = ({params}) => {
  
  const slug = params.slug[0]; // `slug` is an array of path segments

  if (!slug) {
    // If slug is not defined (e.g., on initial load), return null or a loading indicator
    return null;
  }


  if (slug.includes("profile")) {
    return <Profile />;
  } else if (slug.includes("transection")) {
    return <Transection />;
  } else {
    return <PageNotFound />
    ;
  }
};

export default Page;
