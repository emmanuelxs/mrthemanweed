'use client';

import { Home, Search, Bell, Mail, User, MoreHorizontal } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-14 h-full w-64 border-r border-gray-800 p-4 hidden md:block">
      <div className="space-y-2">
        <a href="#" className="flex items-center gap-4 px-4 py-3 hover:bg-gray-900 rounded-3xl text-xl font-medium">
          <Home className="w-7 h-7" />
          <span>Home</span>
        </a>
        
        <a href="#" className="flex items-center gap-4 px-4 py-3 hover:bg-gray-900 rounded-3xl text-xl font-medium">
          <Search className="w-7 h-7" />
          <span>Explore</span>
        </a>
        
        <a href="#" className="flex items-center gap-4 px-4 py-3 hover:bg-gray-900 rounded-3xl text-xl font-medium">
          <Bell className="w-7 h-7" />
          <span>Notifications</span>
        </a>
        
        <a href="#" className="flex items-center gap-4 px-4 py-3 hover:bg-gray-900 rounded-3xl text-xl font-medium">
          <Mail className="w-7 h-7" />
          <span>Messages</span>
        </a>
        
        <a href="#" className="flex items-center gap-4 px-4 py-3 hover:bg-gray-900 rounded-3xl text-xl font-medium">
          <User className="w-7 h-7" />
          <span>Profile</span>
        </a>
        
        <a href="#" className="flex items-center gap-4 px-4 py-3 hover:bg-gray-900 rounded-3xl text-xl font-medium">
          <MoreHorizontal className="w-7 h-7" />
          <span>More</span>
        </a>
      </div>
    </div>
  );
}