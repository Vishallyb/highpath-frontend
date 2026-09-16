import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Tag,
  Share2,
  CheckCircle2,
} from "lucide-react";

const BlogDetail = () => {
  const { id } = useParams();

  const posts = [
    {
      id: "1",
      title: "How Custom Web Development Can Transform Your Business",
      category: "web development",
      excerpt:
        "Discover how a fast, scalable and professionally designed website can help your business grow online.",
      author: "HighPath Solutions Team",
      date: "Latest",
      readTime: "8 min read",
      image: "/images/web-img.png",
      content: {
        intro:
          "In today's digital-first world, your website is often the first interaction customers have with your business. A professionally designed and strategically developed website can help you create stronger impressions, improve customer engagement, and generate more opportunities for growth.",
        sections: [
          {
            heading: "Why Custom Web Development Matters",
            paragraphs: [
              "A custom website is built around your business goals, target audience, and specific requirements. Unlike generic templates, custom development gives your business greater flexibility and control over the user experience.",
              "Every business has unique needs. Your website should reflect your brand identity while providing visitors with a smooth and engaging experience across every device.",
            ],
          },
          {
            heading: "Improve Your Online Presence",
            paragraphs: [
              "A high-quality website helps establish credibility and trust. Modern customers expect businesses to provide fast, responsive, and professional digital experiences.",
              "With the right web development strategy, your business can create a stronger online presence and make it easier for potential customers to discover your services.",
            ],
          },
          {
            heading: "Better User Experience, Better Results",
            paragraphs: [
              "User experience plays a major role in how visitors interact with your website. Easy navigation, clear messaging, fast loading times, and responsive layouts can significantly improve engagement.",
              "When visitors can quickly find the information they need, they are more likely to stay longer and take meaningful actions.",
            ],
          },
          {
            heading: "Built for Performance and Scalability",
            paragraphs: [
              "Your business will continue to grow, and your website should be ready to grow with it. Custom web development allows you to create scalable solutions that can evolve as your requirements change.",
              "From adding new features to integrating third-party tools and improving performance, a flexible website provides long-term value for your business.",
            ],
          },
        ],
      },
    },

    {
      id: "2",
      title: "Mobile App Development Trends Every Business Should Know",
      category: "app development",
      excerpt:
        "Explore the latest mobile app development trends and technologies helping businesses connect with customers.",
      author: "HighPath Solutions Team",
      date: "Latest",
      readTime: "6 min read",
      image: "/images/app-img.png",
      content: {
        intro:
          "Mobile applications have become an essential part of modern business strategy. Companies are using powerful mobile experiences to connect with customers, improve engagement, and deliver services more efficiently.",
        sections: [
          {
            heading: "The Growing Importance of Mobile Apps",
            paragraphs: [
              "Mobile devices have changed how customers interact with businesses. A well-designed application can provide convenient access to products, services, and information.",
              "Businesses that invest in mobile experiences can build stronger relationships with their customers.",
            ],
          },
          {
            heading: "Focus on User Experience",
            paragraphs: [
              "Simple navigation, fast performance, and intuitive interfaces remain essential for successful mobile applications.",
              "A great user experience can improve retention and encourage users to engage with your app regularly.",
            ],
          },
          {
            heading: "Scalable Mobile Solutions",
            paragraphs: [
              "Modern applications should be built with future growth in mind. Scalable architecture makes it easier to introduce new features and support more users.",
              "Choosing the right technology and development strategy is an important step toward long-term success.",
            ],
          },
        ],
      },
    },

    {
      id: "3",
      title: "How to Generate High-Quality Leads for Your Business",
      category: "lead generation",
      excerpt:
        "Learn effective strategies for attracting, qualifying and converting high-quality business leads.",
      author: "HighPath Solutions Team",
      date: "Latest",
      readTime: "7 min read",
      image: "/images/lead-img.png",
      content: {
        intro:
          "Successful lead generation is about more than collecting contact information. The goal is to attract the right audience and build meaningful connections that can eventually become long-term customers.",
        sections: [
          {
            heading: "Understand Your Target Audience",
            paragraphs: [
              "Knowing who your ideal customers are allows you to create more effective campaigns and messaging.",
              "Understanding their challenges and needs helps you deliver relevant solutions.",
            ],
          },
          {
            heading: "Create Valuable Content",
            paragraphs: [
              "Useful content can attract potential customers and establish your business as a trusted resource.",
              "Blogs, landing pages, guides, and campaigns can all support a strong lead generation strategy.",
            ],
          },
          {
            heading: "Optimize the Conversion Journey",
            paragraphs: [
              "Every step of the customer journey should be simple and easy to understand.",
              "Clear calls to action and optimized landing pages can help convert more visitors into qualified leads.",
            ],
          },
        ],
      },
    },

    {
      id: "4",
      title: "Social Media Strategies That Drive Business Growth",
      category: "social media",
      excerpt:
        "Discover how consistent social media management can improve engagement and grow your brand online.",
      author: "HighPath Solutions Team",
      date: "Latest",
      readTime: "5 min read",
      image: "/images/social-img.png",
      content: {
        intro:
          "Social media provides businesses with powerful opportunities to connect with their audience, build awareness, and create stronger relationships with customers.",
        sections: [
          {
            heading: "Build a Consistent Brand Presence",
            paragraphs: [
              "Consistency helps your audience recognize and trust your brand across different platforms.",
              "Your messaging, visuals, and communication style should support a clear brand identity.",
            ],
          },
          {
            heading: "Focus on Meaningful Engagement",
            paragraphs: [
              "Social media is not only about posting content. Meaningful interaction with your audience can strengthen relationships.",
              "Responding to comments and creating valuable conversations can increase engagement.",
            ],
          },
          {
            heading: "Use Strategy and Data Together",
            paragraphs: [
              "Tracking performance helps businesses understand what content works best.",
              "Data-driven decisions can improve future campaigns and help achieve stronger results.",
            ],
          },
        ],
      },
    },

    {
      id: "5",
      title: "Why Strong Branding Is Essential for Business Success",
      category: "branding",
      excerpt:
        "Learn how strategic branding helps businesses build trust, recognition and long-term customer relationships.",
      author: "HighPath Solutions Team",
      date: "Latest",
      readTime: "6 min read",
      image: "/images/branding-img.png",
      content: {
        intro:
          "Branding is more than a logo or visual identity. It represents how customers perceive your business and how your company communicates its values.",
        sections: [
          {
            heading: "Create a Memorable Identity",
            paragraphs: [
              "A strong brand helps your business stand out in competitive markets.",
              "Consistent visuals and messaging can make your company more recognizable.",
            ],
          },
          {
            heading: "Build Customer Trust",
            paragraphs: [
              "Professional and consistent branding can improve credibility.",
              "Customers are more likely to engage with businesses that communicate clearly and consistently.",
            ],
          },
          {
            heading: "Support Long-Term Growth",
            paragraphs: [
              "A well-defined brand creates a strong foundation for future marketing and business development.",
              "As your company grows, your brand can help maintain consistency across every customer touchpoint.",
            ],
          },
        ],
      },
    },

    {
      id: "6",
      title: "Website Performance Optimization for Better Conversions",
      category: "web development",
      excerpt:
        "Improve website speed, user experience and conversion rates with modern web optimization techniques.",
      author: "HighPath Solutions Team",
      date: "Latest",
      readTime: "9 min read",
      image: "/images/services-web.jpg",
      content: {
        intro:
          "Website performance directly affects user experience and business results. A fast and optimized website can help visitors engage with your content and complete important actions.",
        sections: [
          {
            heading: "Why Website Speed Matters",
            paragraphs: [
              "Slow websites can create frustration and increase the chances of visitors leaving.",
              "Performance optimization helps create faster and smoother digital experiences.",
            ],
          },
          {
            heading: "Optimize the User Experience",
            paragraphs: [
              "Performance is not only about loading speed. Navigation, layout stability, and responsiveness are equally important.",
              "A well-optimized website creates a more enjoyable experience for users.",
            ],
          },
          {
            heading: "Turn Visitors Into Customers",
            paragraphs: [
              "Better performance can help improve engagement and conversion opportunities.",
              "Businesses should regularly review and optimize their websites to maintain strong results.",
            ],
          },
        ],
      },
    },

    {
      id: "7",
      title: "Choosing the Right Technology for Your Mobile App",
      category: "app development",
      excerpt:
        "Understand how to select the right technology stack for building scalable and high-performing mobile apps.",
      author: "HighPath Solutions Team",
      date: "Latest",
      readTime: "8 min read",
      image: "/images/app-img-2.png",
      content: {
        intro:
          "Choosing the right technology is one of the most important decisions when building a mobile application. The right solution should support your current requirements while preparing your business for future growth.",
        sections: [
          {
            heading: "Define Your Business Requirements",
            paragraphs: [
              "Start by understanding what your application needs to achieve.",
              "Your features, audience, budget, and long-term goals should influence your technology decisions.",
            ],
          },
          {
            heading: "Think About Scalability",
            paragraphs: [
              "Applications should be able to support growth without requiring a complete rebuild.",
              "Scalable technologies can make future improvements easier.",
            ],
          },
          {
            heading: "Focus on Performance",
            paragraphs: [
              "The technology you choose should support fast and reliable performance.",
              "A strong technical foundation helps create better experiences for users.",
            ],
          },
        ],
      },
    },
    {
  id: "8",
  title: "How Search Engine Optimization Can Grow Your Business",
  category: "seo",
  excerpt:
    "Discover how a strong SEO strategy can improve your search visibility, attract the right audience, and drive sustainable business growth.",
  author: "HighPath Solutions Team",
  date: "Latest",
  readTime: "8 min read",
  image: "/images/seo-img.png",
  content: {
    intro:
      "Search Engine Optimization, commonly known as SEO, is one of the most effective ways to build a strong online presence. A well-planned SEO strategy can help your business improve visibility on search engines, attract relevant visitors, and create long-term opportunities for growth.",

    sections: [
      {
        heading: "Why SEO Is Important for Your Business",
        paragraphs: [
          "Most online experiences begin with a search engine. When potential customers search for products or services related to your business, strong search visibility can help them discover your website.",
          "SEO helps improve your website's ability to appear for relevant searches, allowing your business to connect with people who are actively looking for solutions.",
        ],
      },

      {
        heading: "Reach the Right Audience",
        paragraphs: [
          "Effective SEO is not simply about increasing website traffic. The goal is to attract relevant visitors who are more likely to be interested in your products or services.",
          "By targeting the right keywords and creating valuable content, businesses can connect with audiences at different stages of their customer journey.",
        ],
      },

      {
        heading: "Improve Website Performance and User Experience",
        paragraphs: [
          "Search engine optimization also focuses on improving the overall quality of your website. Fast loading pages, mobile-friendly layouts, clear navigation, and useful content all contribute to a better user experience.",
          "When visitors can easily find information and navigate your website, they are more likely to stay longer and take meaningful actions.",
        ],
      },

      {
        heading: "Build Long-Term Organic Growth",
        paragraphs: [
          "SEO can provide sustainable long-term value for businesses. Unlike short-term marketing campaigns, a strong SEO foundation can continue generating organic visibility over time.",
          "Regular optimization, quality content, and ongoing performance improvements can help your business maintain and strengthen its online presence.",
        ],
      },

      {
        heading: "Content and Keywords Work Together",
        paragraphs: [
          "High-quality content plays an important role in a successful SEO strategy. Your content should answer customer questions, provide useful information, and clearly communicate your expertise.",
          "Keyword research helps identify the topics and search terms your target audience is using, allowing you to create content that is both relevant and valuable.",
        ],
      },
    ],
  },
},
  ];

  const post = posts.find((item) => item.id === id);

  const handleShare = async () => {
    if (!post) return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Share cancelled");
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Article link copied to clipboard!");
    }
  };

  if (!post) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-white px-6">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-slate-900">
            Blog Not Found
          </h1>

          <p className="mb-8 text-slate-600">
            The article you are looking for does not exist.
          </p>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-[#06bcc9] px-6 py-3 font-semibold text-white transition-all hover:bg-[#0499a3]"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  const sameCategoryPosts = posts.filter(
    (item) => item.id !== post.id && item.category === post.category
  );

  const otherPosts = posts.filter(
    (item) => item.id !== post.id && item.category !== post.category
  );

  const relatedPosts = [...sameCategoryPosts, ...otherPosts].slice(0, 3);

  return (
    <main className="overflow-hidden bg-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#064b52] to-slate-950 pb-16 pt-32 lg:pb-20 lg:pt-40">

        {/* Background Grid */}

        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(6, 188, 201, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 188, 201, 0.3) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-6">

          {/* Back Button */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* <Link
              to="/blog"
              className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-[#06bcc9]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link> */}
          </motion.div>

          {/* Category */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#06bcc9]/30 bg-[#06bcc9]/10 px-4 py-2 text-sm font-semibold capitalize text-[#7eeaf0]">
              <Tag className="h-4 w-4" />
              {post.category}
            </span>
          </motion.div>

          {/* Title */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            {post.title}
          </motion.h1>

          {/* Excerpt */}

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl"
          >
            {post.excerpt}
          </motion.p>

          {/* Meta */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-5 text-sm text-slate-300"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#06bcc9] font-bold text-white">
                HP
              </div>

              <div>
                <p className="font-semibold text-white">
                  {post.author}
                </p>

                <p className="text-xs text-slate-400">
                  Author
                </p>
              </div>
            </div>

            <div className="hidden h-10 w-px bg-slate-700 md:block" />

            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#06bcc9]" />
              {post.date}
            </span>

            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#06bcc9]" />
              {post.readTime}
            </span>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURED IMAGE ================= */}

      {/* Negative margin removed - image will stay below hero */}

      <section className="relative z-10 bg-white px-6 py-10 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-slate-100 shadow-2xl shadow-slate-900/15"
        >
          <img
            src={post.image}
            alt={post.title}
            className="aspect-[16/8] w-full object-cover"
          />
        </motion.div>
      </section>

      {/* ================= ARTICLE ================= */}

      <section className="pb-20 pt-8 lg:pb-28 lg:pt-12">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_260px]">

          {/* Main Content */}

          <article className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="mb-10 text-xl leading-relaxed text-slate-600 md:text-2xl">
                {post.content.intro}
              </p>
            </motion.div>

            {/* Highlight */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14 rounded-3xl border border-[#06bcc9]/20 bg-[#e6f9fa] p-7 md:p-9"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#06bcc9] text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  Key Takeaway
                </h3>
              </div>

              <p className="leading-relaxed text-slate-600">
                A strong digital strategy combined with the right technology
                can help businesses create better customer experiences,
                increase engagement, and build sustainable long-term growth.
              </p>
            </motion.div>

            {/* Content Sections */}

            <div className="space-y-14">
              {post.content.sections.map((section, index) => (
                <motion.section
                  key={section.heading}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-5 flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e6f9fa] text-sm font-bold text-[#06bcc9]">
                      0{index + 1}
                    </span>

                    <h2 className="text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
                      {section.heading}
                    </h2>
                  </div>

                  <div className="space-y-5 md:pl-[52px]">
                    {section.paragraphs.map(
                      (paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className="text-lg leading-relaxed text-slate-600"
                        >
                          {paragraph}
                        </p>
                      )
                    )}
                  </div>
                </motion.section>
              ))}
            </div>

            {/* Quote */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="my-16 border-l-4 border-[#06bcc9] bg-slate-50 px-7 py-8 md:px-10"
            >
              <p className="text-xl font-medium leading-relaxed text-slate-700 md:text-2xl">
                "The right digital solution is not just about technology. It
                is about creating meaningful experiences that help your
                business grow."
              </p>
            </motion.div>

            {/* Conclusion */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-5 text-3xl font-bold text-slate-900">
                Final Thoughts
              </h2>

              <p className="text-lg leading-relaxed text-slate-600">
                Building a strong digital presence requires the right
                strategy, technology, and execution. By focusing on customer
                experience, performance, and long-term scalability, businesses
                can create digital solutions that support sustainable growth.
              </p>
            </motion.div>

            {/* CTA */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-[#064b52] to-slate-950 p-8 md:p-12"
            >
              <span className="mb-4 inline-block text-sm font-semibold text-[#7eeaf0]">
                LET'S WORK TOGETHER
              </span>

              <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Ready to grow your business?
              </h3>

              <p className="mb-8 max-w-xl leading-relaxed text-slate-300">
                Let our team help you build powerful digital experiences and
                strategies designed for your business goals.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#06bcc9] px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#0499a3]"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </article>

          {/* Sidebar */}

          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/40">

                <p className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-400">
                  Article Details
                </p>

                <div className="space-y-5">

                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-[#06bcc9]" />

                    <div>
                      <p className="text-xs text-slate-400">
                        Written By
                      </p>

                      <p className="font-medium text-slate-800">
                        {post.author}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-[#06bcc9]" />

                    <div>
                      <p className="text-xs text-slate-400">
                        Reading Time
                      </p>

                      <p className="font-medium text-slate-800">
                        {post.readTime}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Tag className="h-5 w-5 text-[#06bcc9]" />

                    <div>
                      <p className="text-xs text-slate-400">
                        Category
                      </p>

                      <p className="font-medium capitalize text-slate-800">
                        {post.category}
                      </p>
                    </div>
                  </div>

                </div>

                <div className="my-6 border-t border-slate-100" />

                <button
                  onClick={handleShare}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#e6f9fa] px-4 py-3 font-semibold text-[#06bcc9] transition-all hover:bg-[#06bcc9] hover:text-white"
                >
                  <Share2 className="h-4 w-4" />
                  Share Article
                </button>

              </div>
            </div>
          </aside>

        </div>
      </section>

      {/* ================= RELATED POSTS ================= */}

      <section className="bg-slate-50 py-20 lg:py-15">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-[#06bcc9]">
                Keep Reading
              </span>

              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Related Articles
              </h2>
            </div>

            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-semibold text-[#06bcc9] transition-all hover:gap-3"
            >
              View All Articles
              <ArrowRight className="h-5 w-5" />
            </Link>

          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {relatedPosts.map((related, index) => (
              <motion.div
                key={related.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <Link
                  to={`/blog/${related.id}`}
                  className="group block h-full"
                >
                  <article className="h-full overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-200/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#06bcc9]/10">

                    <div className="aspect-video overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-6">

                      <span className="mb-4 inline-block rounded-full bg-[#e6f9fa] px-3 py-1 text-xs font-semibold capitalize text-[#06bcc9]">
                        {related.category}
                      </span>

                      <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-[#06bcc9]">
                        {related.title}
                      </h3>

                      <p className="mb-5 line-clamp-2 leading-relaxed text-slate-600">
                        {related.excerpt}
                      </p>

                      <div className="flex items-center justify-between border-t border-slate-100 pt-4">

                        <span className="flex items-center gap-2 text-sm text-slate-500">
                          <Clock className="h-4 w-4" />
                          {related.readTime}
                        </span>

                        <ArrowRight className="h-5 w-5 text-[#06bcc9] transition-transform group-hover:translate-x-1" />

                      </div>
                    </div>

                  </article>
                </Link>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= BOTTOM BACK ================= */}

      <section className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-6">

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-semibold text-slate-600 transition-colors hover:text-[#06bcc9]"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to All Articles
          </Link>

        </div>
      </section>

    </main>
  );
};

export default BlogDetail;