import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Loader2 } from 'lucide-react';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/auth/signin');
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 text-blue-500 animate-spin" />
          <h1 className="text-2xl font-bold text-gray-800">
            Redirecting to Login
          </h1>
          <p className="text-gray-600 text-center">
            Please wait while we redirect you to the login page...
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;