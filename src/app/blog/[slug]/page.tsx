import { notFound } from 'next/navigation';
import { getBlogBySlug } from '@/lib/db';
import FadeIn from '@/components/animations/FadeIn';
import { Calendar, User } from 'lucide-react';
import { Metadata } from 'next';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const blog = getBlogBySlug(params.slug);
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    keywords: [
      'blog',
      'technology',
      'web development',
      'digital solutions',
      'galaxy software hub',
      ...blog.title.toLowerCase().split(' '),
    ],
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      publishedTime: blog.createdAt,
      modifiedTime: blog.updatedAt,
      authors: [blog.author],
      images: blog.image ? [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: blog.image ? [blog.image] : [],
    },
    alternates: {
      canonical: `https://galaxysoftwarehub.com/blog/${blog.slug}`,
    },
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt,
    "image": blog.image,
    "author": {
      "@type": "Person",
      "name": blog.author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Galaxy Software Hub",
      "logo": {
        "@type": "ImageObject",
        "url": "https://galaxysoftwarehub.com/images/logo.png",
      },
    },
    "datePublished": blog.createdAt,
    "dateModified": blog.updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://galaxysoftwarehub.com/blog/${blog.slug}`,
    },
  };

  return (
    <div className="pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <article className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {blog.title}
              </h1>
              <div className="flex items-center justify-center space-x-6 text-gray-300">
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
            {blog.image ? (
              <div className="h-64 md:h-96 rounded-2xl mb-12 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="h-64 md:h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl mb-12"></div>
            )}
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="prose prose-lg max-w-none">
              <div className="text-white leading-relaxed whitespace-pre-wrap">
                {blog.content}
              </div>
            </div>
          </FadeIn>
        </div>
      </article>
    </div>
  );
}