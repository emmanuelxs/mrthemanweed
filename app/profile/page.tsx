'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { LogOut, User } from 'lucide-react';

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div className="p-8 text-center text-gray-400">Loading profile...</div>;
  }

  if (!session) return null;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="border-b border-gray-800 pb-4 mb-6">
        <h1 className="text-2xl font-bold">Profile</h1>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="w-28 h-28 bg-gray-600 rounded-full mb-4 flex items-center justify-center">
          <User className="w-14 h-14 text-gray-400" />
        </div>

        <h2 className="text-3xl font-bold">{session.user?.name || 'Your Name'}</h2>
        <p className="text-gray-500 text-xl">@{session.user?.username || 'username'}</p>

        <p className="mt-6 text-gray-400 max-w-xs">
          Welcome to your profile! More features coming soon.
        </p>

        <button
          onClick={() => signOut({ callbackUrl: '/login' })}
          className="mt-10 flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full text-white font-medium transition"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </div>
  );
}