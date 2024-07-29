"use client"
import PageNotFound from "@/app/components/pageNotFound/PageNotFound";
import Pricing from "@/app/components/pricing/Pricing";
import Profile from "@/app/components/profile/Profile";
import ProfileSetting from "@/app/components/profileSettings/ProfileSetting";
import Transection from "@/app/components/transection/Transection";
import Withdraw from "@/app/components/withdraw/Withdraw";


const Page = ({params}) => {
  
  const slug = params.slug[0]; // `slug` is an array of path segments

  if (!slug) {
    // If slug is not defined (e.g., on initial load), return null or a loading indicator
    return null;
  }


  if (slug.includes("profile")) {
    return <Profile />;
  } else if (slug.includes("transection")) {
    return<Transection />

  } else if (slug.includes("investment")) {
    return <Transection />
  } else if (slug.includes("settings")) {
    return (
      <div className="mt-8 md:ml-[320px] top-0">
        <ProfileSetting />
      </div>
      )
  }  else if (slug.includes("withdraw")) {
    return (
      <div className="mt-8 md:ml-[320px] top-0">
        <Withdraw />
      </div>
      )
  } else {
    return <PageNotFound />
    ;
  }
};

export default Page;
