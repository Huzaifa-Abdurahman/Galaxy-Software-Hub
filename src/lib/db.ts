import { Blog } from '@/types';

// Simple in-memory database for demo purposes
// In production, use a real database like MongoDB, PostgreSQL, etc.
let blogs: Blog[] = [
  {
    id: '1',
    title: 'The Future of Web Development',
    content: 'Web development is constantly evolving with new frameworks, tools, and best practices...',
    excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
    slug: 'future-of-web-development',
    author: 'Galaxy Team',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
    published: true,
  },
  {
    id: '2',
    title: 'AI Automation in Business',
    content: 'Artificial Intelligence is revolutionizing how businesses operate...',
    excerpt: 'How AI automation is transforming business processes and increasing efficiency.',
    slug: 'ai-automation-in-business',
    author: 'Galaxy Team',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-10',
    published: true,
  },
];

export const getBlogById = (id: string): Blog | undefined => {
  return blogs.find(blog => blog.id === id);
};

export const getBlogBySlug = (slug: string): Blog | undefined => {
  return blogs.find(blog => blog.slug === slug);
};

export const getAllBlogs = (): Blog[] => {
  return blogs.filter(blog => blog.published);
};

export const getAllBlogsAdmin = (): Blog[] => {
  return blogs;
};

export const createBlog = (blog: Omit<Blog, 'id'>): Blog => {
  const newBlog: Blog = {
    ...blog,
    id: Date.now().toString(),
  };
  blogs.push(newBlog);
  return newBlog;
};

export const updateBlog = (id: string, updates: Partial<Blog>): Blog | null => {
  const index = blogs.findIndex(blog => blog.id === id);
  if (index === -1) return null;
  
  blogs[index] = { ...blogs[index], ...updates, updatedAt: new Date().toISOString() };
  return blogs[index];
};

export const deleteBlog = (id: string): boolean => {
  const index = blogs.findIndex(blog => blog.id === id);
  if (index === -1) return false;
  
  blogs.splice(index, 1);
  return true;
};