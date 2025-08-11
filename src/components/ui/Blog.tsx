'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import FadeIn from '../animations/FadeIn';
import { Calendar, User, ArrowRight, Search, Filter, Tag, Clock, Eye, TrendingUp } from 'lucide-react';
import { Blog as BlogType } from '@/types';

interface BlogProps {
  featured?: boolean;
  limit?: number;
  showSearch?: boolean;
  className?: string;
}

const categories = [
  'All',
  'Web Development', 
  'AI & Automation',
  'SEO & Marketing',
  'Design',
  'Business'
];

const featuredPosts = [
  {
    id: 'featured-1',
    title: 'The Future of Web Development in 2024',
    excerpt: 'Exploring cutting-edge technologies and trends shaping the web development landscape.',
    slug: 'future-web-development-2024',
    author: 'Sarah Johnson',
    createdAt: '2024-01-20',
    readTime: '8 min read',
    category: 'Web Development',
    views: '2.1K',
    trending: true
  },
  {
    id: 'featured-2', 
    title: 'AI Automation: Transforming Business Operations',
    excerpt: 'How artificial intelligence is revolutionizing the way businesses operate and scale.',
    slug: 'ai-automation-business-transformation',
    author: 'Mike Chen',
    createdAt: '2024-01-18',
    readTime: '6 min read',
    category: 'AI & Automation', 
    views: '1.8K',
    trending: true
  },
  {
    id: 'featured-3',
    title: 'SEO Strategies That Actually Work in 2024',
    excerpt: 'Proven SEO techniques and strategies to boost your search engine rankings.',
    slug: 'seo-strategies-2024',
    author: 'David Park',
    createdAt: '2024-01-15',
    readTime: '10 min read',
    category: 'SEO & Marketing',
    views: '3.2K',
    trending: false
  }
];

export default function Blog({ featured = false, limit, showSearch = true, className = '' }: BlogProps) {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'popular'>('newest');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs
    .filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'popular':
          return Math.random() - 0.5; // Random for demo
        default:
          return 0;
      }
    })
    .slice(0, limit);

  const displayPosts = blogs.length > 0 ? filteredBlogs : featuredPosts.slice(0, limit);

  if (loading && blogs.length === 0) {
    return (
      <section className={`py-20 bg-gray-50 ${className}`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-3"></div>
                  <div className="h-6 bg-gray-200 rounded animate-pulse mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {featured ? 'Featured Articles' : 'Latest Blog Posts'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {featured 
                ? 'Handpicked articles showcasing the latest insights and trends in technology and digital marketing.'
                : 'Stay updated with the latest insights, tutorials, and industry trends from our experts.'
              }
            </p>
          </div>
        </FadeIn>

        {/* Search and Filters */}
        {showSearch && (
          <FadeIn delay={0.1}>
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-12">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                  <div className="relative flex-1 max-w-md">
                    <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <Filter className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="pl-10 pr-8 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-purple-500 appearance-none bg-white min-w-[160px]"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600 text-sm">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'popular')}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-500"
                  >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="popular">Most Popular</option>
                  </select>
                </div>
              </div>

              {searchTerm && (
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-gray-600">
                    Found {displayPosts.length} article{displayPosts.length !== 1 ? 's' : ''} for "{searchTerm}"
                  </p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="text-purple-600 hover:text-purple-700 text-sm"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>
          </FadeIn>
        )}

        {/* Featured Post (if featured and has posts) */}
        {featured && displayPosts.length > 0 && (
          <FadeIn delay={0.2}>
            <div className="mb-12">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white overflow-hidden relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center space-x-2 text-white/80">
                        <User className="h-4 w-4" />
                        <span className="text-sm">{displayPosts[0]?.author || featuredPosts[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/80">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">
                          {displayPosts[0]?.createdAt 
                            ? new Date(displayPosts[0].createdAt).toLocaleDateString()
                            : new Date(featuredPosts[0].createdAt).toLocaleDateString()
                          }
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/80">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{featuredPosts[0].readTime}</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${displayPosts[0]?.slug || featuredPosts[0].slug}`}
                      className="inline-flex items-center space-x-2 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="w-full h-64 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20"></div>
                  </div>
                </div>
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post, index) => {
            const isRealBlog = 'id' in post && post.id;
            const postData = isRealBlog ? post as BlogType : post as typeof featuredPosts[0];
            
            return (
              <FadeIn key={postData.id || index} delay={index * 0.1}>
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group">
                  {/* Image/Header */}
                  <div className="h-48 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      {!isRealBlog && 'category' in postData && (
                        <span className="bg-white/90 text-purple-600 px-3 py-1 rounded-full text-xs font-semibold">
                          {postData.category}
                        </span>
                      )}
                      {!isRealBlog && 'trending' in postData && postData.trending && (
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold ml-2">
                          🔥 Trending
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                      {!isRealBlog && 'views' in postData && (
                        <div className="flex items-center space-x-1 bg-white/90 text-gray-700 px-2 py-1 rounded-full text-xs">
                          <Eye className="h-3 w-3" />
                          <span>{postData.views}</span>
                        </div>
                      )}
                      {!isRealBlog && 'readTime' in postData && (
                        <div className="flex items-center space-x-1 bg-white/90 text-gray-700 px-2 py-1 rounded-full text-xs">
                          <Clock className="h-3 w-3" />
                          <span>{postData.readTime}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Meta Information */}
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {isRealBlog 
                            ? new Date(postData.createdAt).toLocaleDateString()
                            : new Date(postData.createdAt).toLocaleDateString()
                          }
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{postData.author}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {postData.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {postData.excerpt}
                    </p>

                    {/* Tags (for demo posts) */}
                    {!isRealBlog && 'category' in postData && (
                      <div className="flex items-center space-x-2 mb-4">
                        <Tag className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{postData.category}</span>
                      </div>
                    )}

                    {/* Read More Link */}
                    <Link
                      href={`/blog/${postData.slug}`}
                      className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold group/link"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        {/* Empty State */}
        {displayPosts.length === 0 && searchTerm && (
          <FadeIn>
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-4">
                We couldn't find any articles matching "{searchTerm}". Try different keywords or browse our categories.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
              >
                Clear Search
              </button>
            </div>
          </FadeIn>
        )}

        {/* Load More / View All */}
        {!limit && displayPosts.length >= 6 && (
          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 card-hover"
              >
                <span>View All Articles</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </FadeIn>
        )}

        {/* Newsletter Subscription */}
        {!limit && (
          <FadeIn delay={0.5}>
            <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-3xl text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Stay Updated with Our Latest Articles
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest insights, tutorials, and industry trends delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}