'use client';

import CreatePost from '@/components/CreatePost';
import { useEffect, useState } from 'react';

interface Post {
  _id: string;
  content: string;
  image?: string;
  createdAt: string;
  user: {
    username: string;
    name: string;
  };
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/posts');
      const data = await res.json();
      if (data.posts) setPosts(data.posts);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="p-4">
      <div className="border-b border-gray-800 pb-4 mb-4">
        <h1 className="text-2xl font-bold">Home</h1>
      </div>

      <CreatePost />

      <div className="space-y-6">
        {loading ? (
          <p className="text-center text-gray-500 py-10">Loading posts...</p>
        ) : posts.length === 0 ? (
          <p className="text-center text-gray-500 py-10">No posts yet. Be the first to post!</p>
        ) : (
          posts.map((post) => (
            <div key={post._id} className="border border-gray-800 rounded-3xl p-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{post.user.name}</span>
                    <span className="text-gray-500">@{post.user.username}</span>
                    <span className="text-gray-500">·</span>
                    <span className="text-gray-500 text-sm">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  
                  {post.content && <p className="mt-3 text-[17px]">{post.content}</p>}
                  
                  {post.image && (
                    <img 
                      src={post.image} 
                      alt="post" 
                      className="mt-3 rounded-2xl max-h-96 object-cover w-full border border-gray-800"
                    />
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}