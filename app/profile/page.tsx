'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="p-4">
      <div className="border-b border-gray-800 pb-4 mb-6">
        <h1 className="text-2xl font-bold">Profile</h1>
      </div>

      <div className="flex flex-col items-center text-center">
        {/* Profile Picture */}
        <div className="w-28 h-28 bg-gray-600 rounded-full mb-4"></div>

        {/* Name & Username */}
        <h2 className="text-3xl font-bold">{session?.user?.name || 'Your Name'}</h2>
        <p className="text-gray-500 text-xl">@{session?.user?.username || 'username'}</p>

        {/* Bio */}
        <p className="mt-4 text-gray-400 max-w-xs">
          This is your bio. Tell the world about yourself.
        </p>

        {/* Stats */}
        <div className="flex gap-8 mt-8 text-sm">
          <div>
            <span className="font-bold text-xl">0</span>
            <p className="text-gray-500">Posts</p>
          </div>
          <div>
            <span className="font-bold text-xl">0</span>
            <p className="text-gray-500">Following</p>
          </div>
          <div>
            <span className="font-bold text-xl">0</span>
            <p className="text-gray-500">Followers</p>
          </div>
        </div>

        <button className="mt-8 px-6 py-2 border border-gray-600 rounded-full hover:bg-gray-900">
          Edit Profile
        </button>
      </div>

      <div className="mt-12 text-center text-gray-500">
        Your posts will appear here soon...
      </div>
    </div>
  );
}