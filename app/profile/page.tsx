'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LogOut, Camera } from 'lucide-react';

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [image, setImage] = useState(session?.user?.image || '');
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/login');
  }, [status, router]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      const { url } = await res.json();
      setImage(url);
      alert('Profile picture updated!');
    } else {
      alert('Upload failed');
    }
    setUploading(false);
  };

  if (status === 'loading') return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>

      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src={image || '/default-avatar.png'}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-[#1d9bf0]"
          />
          <label className="absolute bottom-0 right-0 bg-black p-3 rounded-full cursor-pointer hover:bg-gray-900">
            <Camera className="w-6 h-6" />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>

        <h2 className="text-4xl font-bold mt-6">{session?.user?.name}</h2>
        <p className="text-gray-400 text-xl">@{session?.user?.username}</p>

        <button
          onClick={() => signOut({ callbackUrl: '/login' })}
          className="mt-12 flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 rounded-3xl text-white font-bold"
        >
          <LogOut className="w-6 h-6" />
          Logout
        </button>
      </div>
    </div>
  );
}