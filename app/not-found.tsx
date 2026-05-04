export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-gray-400 mb-4">404</h1>
        <p className="text-2xl text-gray-400">Page not found</p>
        <a 
          href="/" 
          className="mt-8 inline-block px-8 py-4 bg-[#1d9bf0] hover:bg-[#1a8cd8] rounded-full font-semibold"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}