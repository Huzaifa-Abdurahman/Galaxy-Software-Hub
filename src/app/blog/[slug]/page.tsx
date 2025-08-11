import { notFound } from 'next/navigation';
import { getBlogBySlug } from '@/lib/db';
import FadeIn from '@/components/animations/FadeIn';
import { Calendar, User } from 'lucide-react';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="pt-24">
      <article className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                {blog.title}
              </h1>
              <div className="flex items-center justify-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>{blog.author}</span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="h-64 md:h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl mb-12"></div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {blog.content}
              </div>
            </div>
          </FadeIn>
        </div>
      </article>
    </div>
  );
}