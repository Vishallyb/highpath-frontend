import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  User,
  ArrowRight,
  Search,
  Tag,
  Calendar,
} from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#064b52] to-slate-950 pb-20 pt-32">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(6, 188, 201, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 188, 201, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-[#06bcc9]/30 bg-[#06bcc9]/10 px-4 py-2 text-sm font-semibold text-[#7eeaf0]">
            Blog & Insights
          </span>

          <h1 className="mb-6 text-4xl font-bold text-white lg:text-6xl">
            Latest{' '}
            <span className="bg-gradient-to-r from-[#06bcc9] to-[#7eeaf0] bg-clip-text text-transparent">
              Insights
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-xl text-slate-300">
            Explore the latest insights, strategies, and updates across web
            development, app development, lead generation, social media, and
            branding.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const BlogGrid = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'all',
    'web development',
    'app development',
    'lead generation',
    'social media',
    'Search Engine Optimization',
    'branding',
  ];

  const posts = [
    {
      id: 1,
      title: 'How Custom Web Development Can Transform Your Business',
      category: 'web development',
      excerpt:
        'Discover how a fast, scalable and professionally designed website can help your business grow online.',
      author: 'HighPath Solutions Team',
      date: 'Latest',
      readTime: '8 min read',
      image: '/images/web-img.png',
      featured: true,
    },
    {
      id: 2,
      title: 'Mobile App Development Trends Every Business Should Know',
      category: 'app development',
      excerpt:
        'Explore the latest mobile app development trends and technologies helping businesses connect with customers.',
      author: 'HighPath Solutions Team',
      date: 'Latest',
      readTime: '6 min read',
      image: '/images/app-img.png',
      featured: false,
    },
    {
      id: 3,
      title: 'How to Generate High-Quality Leads for Your Business',
      category: 'lead generation',
      excerpt:
        'Learn effective strategies for attracting, qualifying and converting high-quality business leads.',
      author: 'HighPath Solutions Team',
      date: 'Latest',
      readTime: '7 min read',
      image: '/images/lead-img.png',
      featured: false,
    },
    {
      id: 4,
      title: 'Social Media Strategies That Drive Business Growth',
      category: 'social media',
      excerpt:
        'Discover how consistent social media management can improve engagement and grow your brand online.',
      author: 'HighPath Solutions Team',
      date: 'Latest',
      readTime: '5 min read',
      image: '/images/social-img.png',
      featured: false,
    },
    {
      id: 5,
      title: 'Why Strong Branding Is Essential for Business Success',
      category: 'branding',
      excerpt:
        'Learn how strategic branding helps businesses build trust, recognition and long-term customer relationships.',
      author: 'HighPath Solutions Team',
      date: 'Latest',
      readTime: '6 min read',
      image: '/images/branding-img.png',
      featured: false,
    },
    {
      id: 6,
      title: 'Website Performance Optimization for Better Conversions',
      category: 'web development',
      excerpt:
        'Improve website speed, user experience and conversion rates with modern web optimization techniques.',
      author: 'HighPath Solutions Team',
      date: 'Latest',
      readTime: '9 min read',
      image: '/images/services-web.jpg',
      featured: false,
    },
    {
      id: 7,
      title: 'Choosing the Right Technology for Your Mobile App',
      category: 'app development',
      excerpt:
        'Understand how to select the right technology stack for building scalable and high-performing mobile apps.',
      author: 'HighPath Solutions Team',
      date: 'Latest',
      readTime: '8 min read',
      image: '/images/app-img-2.png',
      featured: false,
    },
    {
  id: 8,
  title: 'Why SEO Is Essential for Long-Term Business Growth',
  category: 'seo',
  excerpt:
    'Discover how search engine optimization helps businesses improve online visibility, attract qualified traffic and achieve sustainable long-term growth.',
  author: 'HighPath Solutions Team',
  date: 'Latest',
  readTime: '7 min read',
  image: '/images/seo-img.png',
  featured: false,
},
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === 'all' || post.category === activeCategory;

    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find((post) => post.featured);

  const regularPosts = filteredPosts.filter(
    (post) => !post.featured
  );

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">

          {/* Search */}
          <div className="relative mx-auto max-w-xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 focus:border-[#06bcc9] focus:outline-none focus:ring-2 focus:ring-[#06bcc9]/20"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#06bcc9] text-white shadow-lg shadow-[#06bcc9]/30'
                    : 'bg-slate-100 text-slate-600 hover:bg-[#e6f9fa] hover:text-[#06bcc9]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost &&
          activeCategory === 'all' &&
          searchQuery === '' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="grid overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-[#e6f9fa] lg:grid-cols-2 lg:gap-8">

                {/* Featured Image */}
                <Link
                  to={`/blog/${featuredPost.id}`}
                  className="relative block aspect-video overflow-hidden lg:aspect-auto"
                >
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-[#06bcc9] px-4 py-2 text-sm font-semibold text-white">
                    Featured
                  </div>
                </Link>

                {/* Featured Content */}
                <div className="flex flex-col justify-center p-8 lg:p-12">

                  <span className="mb-4 inline-flex items-center gap-2 text-sm font-medium capitalize text-[#06bcc9]">
                    <Tag className="h-4 w-4" />
                    {featuredPost.category}
                  </span>

                  <Link to={`/blog/${featuredPost.id}`}>
                    <h2 className="mb-4 text-2xl font-bold text-slate-900 transition-colors hover:text-[#06bcc9] lg:text-3xl">
                      {featuredPost.title}
                    </h2>
                  </Link>

                  <p className="mb-6 leading-relaxed text-slate-600">
                    {featuredPost.excerpt}
                  </p>

                  <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">

                    <span className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </span>

                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>

                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>

                  </div>

                  {/* Read Article */}
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex w-fit items-center gap-2 font-semibold text-[#06bcc9] transition-all hover:gap-3"
                  >
                    Read Article
                    <ArrowRight className="h-5 w-5" />
                  </Link>

                </div>
              </div>
            </motion.div>
          )}

        {/* Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">

            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="group"
              >
                <Link
                  to={`/blog/${post.id}`}
                  className="block h-full"
                >
                  <div className="h-full overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#06bcc9]/15">

                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">

                      {/* Category */}
                      <div className="mb-4 flex items-center gap-4">

                        <span className="rounded-full bg-[#e6f9fa] px-3 py-1 text-xs font-medium capitalize text-[#06bcc9]">
                          {post.category}
                        </span>

                        <span className="flex items-center gap-1 text-sm text-slate-500">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>

                      </div>

                      {/* Title */}
                      <h3 className="mb-3 line-clamp-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-[#06bcc9]">
                        {post.title}
                      </h3>

                      {/* Description */}
                      <p className="mb-4 line-clamp-2 text-slate-600">
                        {post.excerpt}
                      </p>

                      {/* Author */}
                      <div className="flex items-center justify-between border-t border-slate-100 pt-4">

                        <div className="flex items-center gap-3">

                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#06bcc9] text-xs font-bold text-white">
                            {post.author
                              .split(' ')
                              .map((name) => name[0])
                              .join('')}
                          </div>

                          <div>

                            <div className="text-sm font-medium text-slate-900">
                              {post.author}
                            </div>

                            <div className="text-xs text-slate-500">
                              {post.date}
                            </div>

                          </div>

                        </div>

                        <ArrowRight className="h-5 w-5 text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-[#06bcc9]" />

                      </div>

                    </div>
                  </div>
                </Link>

              </motion.article>
            ))}

          </AnimatePresence>
        </div>

        {/* No Results */}
        {regularPosts.length === 0 &&
          !(featuredPost && activeCategory === 'all' && searchQuery === '') && (
            <div className="py-16 text-center">
              <h3 className="mb-2 text-2xl font-bold text-slate-900">
                No articles found
              </h3>

              <p className="text-slate-500">
                Try searching with different keywords or categories.
              </p>
            </div>
          )}

      </div>
    </section>
  );
};

export default function Blog() {
  return (
    <>
      <HeroSection />
      <BlogGrid />
    </>
  );
}