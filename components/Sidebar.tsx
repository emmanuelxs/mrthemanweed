'use client';

import { Home, Search, Bell, Mail, User, MoreHorizontal } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-72 hidden lg:flex flex-col h-screen border-r border-gray-800 pl-4 pr-4 pt-4 fixed">
      <div className="flex flex-col gap-2 flex-1">
        <a href="/" className="flex items-center gap-5 px-6 py-4 hover:bg-gray-900 rounded-3xl text-xl font-medium transition">
          <Home className="w-8 h-8" />
          <span>Home</span>
        </a>
        <a href="#" className="flex items-center gap-5 px-6 py-4 hover:bg-gray-900 rounded-3xl text-xl font-medium transition">
          <Search className="w-8 h-8" />
          <span>Explore</span>
        </a>
        <a href="#" className="flex items-center gap-5 px-6 py-4 hover:bg-gray-900 rounded-3xl text-xl font-medium transition">
          <Bell className="w-8 h-8" />
          <span>Notifications</span>
        </a>
        <a href="#" className="flex items-center gap-5 px-6 py-4 hover:bg-gray-900 rounded-3xl text-xl font-medium transition">
          <Mail className="w-8 h-8" />
          <span>Messages</span>
        </a>
        <a href="/profile" className="flex items-center gap-5 px-6 py-4 hover:bg-gray-900 rounded-3xl text-xl font-medium transition">
          <User className="w-8 h-8" />
          <span>Profile</span>
        </a>
        <a href="#" className="flex items-center gap-5 px-6 py-4 hover:bg-gray-900 rounded-3xl text-xl font-medium transition">
          <MoreHorizontal className="w-8 h-8" />
          <span>More</span>
        </a>
      </div>

      {/* Bottom area */}
      <div className="mt-auto mb-6 px-4">
        <button className="w-full bg-[#1d9bf0] hover:bg-[#1a8cd8] py-4 rounded-3xl text-xl font-bold transition">
          Post
        </button>
      </div>
    </div>
  );
}