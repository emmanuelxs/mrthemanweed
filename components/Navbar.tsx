'use client';

import { X, LogOut } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();

  const handleLogout = () => {
    if (confirm('Log out of MrTheManWEED?')) {
      signOut({ callbackUrl: '/login' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <X className="w-9 h-9 text-[#1d9bf0]" />
          <span className="font-bold text-3xl tracking-tighter">MrTheManWEED</span>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-[#1d9bf0] hover:bg-[#1a8cd8] px-8 py-2 rounded-3xl font-bold text-lg transition-all active:scale-95">
            Post
          </button>

          {session && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-5 py-2 hover:bg-gray-900 rounded-3xl transition text-red-400 hover:text-red-300"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}