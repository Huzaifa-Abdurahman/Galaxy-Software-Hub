import { NextRequest, NextResponse } from 'next/server';
import { getAllBlogs, getAllBlogsAdmin, createBlog } from '@/lib/db';
import { verifyToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const isAdmin = request.headers.get('authorization');
  
  if (isAdmin) {
    return NextResponse.json(getAllBlogsAdmin());
  }
  
  return NextResponse.json(getAllBlogs());
}

export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '') || 
                  request.cookies.get('admin_token')?.value;

    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const blogData = await request.json();
    
    const newBlog = createBlog({
      ...blogData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}