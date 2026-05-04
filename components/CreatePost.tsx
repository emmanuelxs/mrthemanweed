'use client';

import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

export default function CreatePost() {
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() && !image) return;

    setLoading(true);

    const formData = new FormData();
    if (content) formData.append('content', content);
    if (image) formData.append('image', image);

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        alert('Post created successfully!');
        setContent('');
        setImage(null);
        setPreview(null);
      } else {
        alert('Failed to create post');
      }
    } catch (error) {
      console.error(error);
      alert('Error posting');
    }

    setLoading(false);
  };

  return (
    <div className="border border-gray-800 rounded-3xl p-4 mb-6">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0"></div>
          
          <div className="flex-1">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What is happening?!"
              className="w-full bg-transparent text-xl placeholder-gray-500 resize-none focus:outline-none min-h-[100px]"
              maxLength={280}
            />

            {preview && (
              <div className="mt-3 rounded-2xl overflow-hidden border border-gray-700">
                <img src={preview} alt="preview" className="max-h-80 object-cover w-full" />
              </div>
            )}

            <div className="flex justify-between items-center pt-4 border-t border-gray-800 mt-4">
              <label className="cursor-pointer hover:bg-gray-900 p-2 rounded-full transition text-[#1d9bf0]">
                <ImageIcon className="w-5 h-5" />
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleImageChange}
                />
              </label>

              <button
                type="submit"
                disabled={loading || (!content.trim() && !image)}
                className="bg-[#1d9bf0] px-6 py-1.5 rounded-full font-bold hover:bg-[#1a8cd8] disabled:opacity-50"
              >
                {loading ? "Posting..." : "Post"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}