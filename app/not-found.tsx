'use client';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl text-gray-400">Page not found</p>
        <a href="/" className="mt-8 inline-block px-6 py-3 bg-[#1d9bf0] rounded-full font-medium">
          Go back home
        </a>
      </div>
    </div>
  );
}