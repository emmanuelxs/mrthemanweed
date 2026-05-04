'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result?.ok) {
      router.push('/');
      router.refresh();
    } else {
      alert('Invalid credentials');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md p-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">MrTheManWEED</h1>
          <p className="text-gray-400">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 rounded-full px-6 py-3 focus:outline-none focus:border-[#1d9bf0]"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 rounded-full px-6 py-3 focus:outline-none focus:border-[#1d9bf0]"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1d9bf0] hover:bg-[#1a8cd8] py-3 rounded-full font-bold text-lg disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-400">
          Don't have an account?{' '}
          <a href="/register" className="text-[#1d9bf0] hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}