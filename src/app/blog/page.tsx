import Link from 'next/link';
import FadeIn from '@/components/animations/FadeIn';
import { getAllBlogs } from '@/lib/db';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const blogs = getAllBlogs();

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stay updated with the latest trends in technology, design, and digital marketing insights from our experts.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <FadeIn key={blog.id} delay={index * 0.1}>
                <article className="dark-card rounded-2xl overflow-hidden dark-shadow hover:dark-hover transition-all duration-300">
                  {blog.image ? (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400"></div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-white mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{blog.author}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{blog.title}</h3>
                    <p className="text-white mb-4">{blog.excerpt}</p>
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-semibold"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          {blogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white text-lg">No blog posts available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}