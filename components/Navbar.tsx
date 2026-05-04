'use client';

import { Twitter, X } from 'lucide-react';   // X is the new Twitter icon

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <X className="w-8 h-8 text-[#1d9bf0]" />   {/* Changed from Twitter to X */}
            <span className="font-bold text-2xl">MrTheManWEED</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-[#1d9bf0] hover:bg-[#1a8cd8] px-6 py-1.5 rounded-full font-semibold transition">
            Post
          </button>
          <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </nav>
  );
}