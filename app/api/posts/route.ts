import { NextResponse } from 'next/server';
import connectDB from '../../../lib/mongodb';
import BlogPost from '../../../models/BlogPost';

export async function GET() {
  try {
    await connectDB();
    const posts = await BlogPost.find({}).sort({ createdAt: -1 });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();
    const post = await BlogPost.create(data);
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
} 