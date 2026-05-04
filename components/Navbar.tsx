'use client';

import { X, LogOut } from 'lucide-react';

export default function Navbar() {
  const handleLogout = () => {
    if (confirm('Log out of MrTheManWEED?')) {
      window.location.href = '/api/auth/signout';
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <X className="w-8 h-8 text-[#1d9bf0]" />
          <span className="font-bold text-2xl">MrTheManWEED</span>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-[#1d9bf0] hover:bg-[#1a8cd8] px-6 py-1.5 rounded-full font-semibold transition">
            Post
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-900 rounded-full transition text-red-400"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
}