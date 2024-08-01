// pages/auth/error.tsx

import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ErrorPage = () => {
  const router = useRouter();
  const { error } = router.query;

  useEffect(() => {
    if (error) {
      // You can handle error message display or logging here
      console.error("Authentication Error:", error);
    }
  }, [error]);

  return (
  
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
    <div className="text-white">
    <h1 className="text-2xl font-bold">Authentication Error</h1>
    <p>{error ? `Error: ${error}` : 'An unknown error occurred.'}</p>
    </div>
    </div>
  
  );
};

export default ErrorPage;
