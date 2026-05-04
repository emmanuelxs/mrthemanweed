import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Post from '@/models/Post';

export async function GET() {
  try {
    await connectDB();

    const posts = await Post.find()
      .populate('user', 'username name')
      .sort({ createdAt: -1 })
      .limit(20);

    return NextResponse.json({ posts });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    
    const formData = await req.formData();
    const content = formData.get('content') as string;
    const image = formData.get('image') as File | null;

    // For now, we'll skip real auth and image upload to keep it simple
    const post = await Post.create({
      user: "67f8a3b2c9d4e5f678901234", // Temporary dummy user ID (we'll fix later)
      content: content || "",
      image: image ? "https://via.placeholder.com/600x400" : undefined, // Placeholder for now
    });

    return NextResponse.json({ success: true, post });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}