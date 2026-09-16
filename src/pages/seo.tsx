import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  TrendingUp,
  BarChart3,
  Target,
  Globe,
  FileText,
  CheckCircle2,
  ArrowRight,
  Users,
  Zap,
  Award,
  ChevronRight,
} from 'lucide-react';

const SEO = () => {
  const seoServices = [
    {
      icon: Search,
      title: 'Keyword Research',
      desc: 'We identify high-value keywords that your target audience is actively searching for.',
    },
    {
      icon: FileText,
      title: 'On-Page SEO',
      desc: 'We optimize your website content, headings, metadata, and structure for better search visibility.',
    },
    {
      icon: Globe,
      title: 'Technical SEO',
      desc: 'We improve website speed, crawlability, indexing, and technical performance.',
    },
    {
      icon: TrendingUp,
      title: 'Link Building',
      desc: 'We develop strategic link-building campaigns to improve your website authority and rankings.',
    },
    {
      icon: Target,
      title: 'Local SEO',
      desc: 'We help local businesses improve visibility and attract more customers from nearby searches.',
    },
    {
      icon: BarChart3,
      title: 'SEO Analytics',
      desc: 'We track rankings, traffic, conversions, and performance to continuously improve results.',
    },
  ];

  const benefits = [
    'Improve your search engine rankings',
    'Increase organic website traffic',
    'Reach the right target audience',
    'Generate more qualified leads',
    'Build long-term online visibility',
    'Track measurable business growth',
  ];

  const process = [
    {
      number: '01',
      title: 'SEO Audit',
      desc: 'We analyze your website, competitors, technical performance, and current search visibility.',
    },
    {
      number: '02',
      title: 'Strategy',
      desc: 'We create a customized SEO strategy based on your goals, audience, and market opportunities.',
    },
    {
      number: '03',
      title: 'Optimization',
      desc: 'We optimize your website content, technical structure, keywords, and authority.',
    },
    {
      number: '04',
      title: 'Growth',
      desc: 'We continuously monitor performance and optimize your strategy for sustainable growth.',
    },
  ];

  return (
    <div className="overflow-hidden bg-white">

      {/* Hero Section */}
      {/* Hero Section */}
<section className="relative overflow-hidden bg-[#123f43] pt-20 pb-20 text-white">
  
  {/* Grid Background */}
  <div
    className="absolute inset-0 opacity-20"
    style={{
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px',
    }}
  />

  {/* Background Glow */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0d3438]/20 to-[#0b3034]/40" />

  <div className="relative mx-auto flex min-h-[470px] max-w-5xl flex-col items-center justify-center px-6 text-center">

    {/* Badge */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#06bcc9]/40 bg-[#06bcc9]/10 px-5 py-2 text-sm font-semibold text-[#74dce5]"
    >
      <Search className="h-4 w-4" />
      Search Engine Optimization
    </motion.div>

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
    >
      Grow Your Business With
      <br />

      <span className="bg-gradient-to-r from-[#2ebbc7] via-[#5bc9d4] to-[#8ddce3] bg-clip-text text-transparent">
        Powerful SEO
      </span>
    </motion.h1>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="mt-8 max-w-3xl text-base leading-8 text-slate-300 md:text-lg"
    >
      We help businesses improve their search visibility, attract the right
      audience, and turn organic traffic into meaningful business growth.
    </motion.p>

  </div>
</section>


      {/* Benefits Section */}
      <section className="py-15">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-semibold text-[#06bcc9]">
              WHY SEO MATTERS
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Turn Search Traffic Into
              <span className="block text-[#06bcc9]">
                Business Growth
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              SEO helps your business appear when potential customers are
              actively searching for your products and services. Our
              strategies focus on sustainable growth and measurable results.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-slate-200 p-5 transition-all hover:border-[#06bcc9]/40 hover:shadow-lg"
              >
                <CheckCircle2 className="mb-4 h-6 w-6 text-[#06bcc9]" />

                <p className="font-semibold text-slate-800">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* SEO Services */}
      <section className="bg-slate-50 py-15">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="font-semibold text-[#06bcc9]">
              OUR SEO SERVICES
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
              Everything You Need To
              <span className="block text-[#06bcc9]">
                Rank Higher
              </span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {seoServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-3xl bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#06bcc9]/10 transition-all group-hover:bg-[#06bcc9]">
                  <service.icon className="h-7 w-7 text-[#06bcc9] transition-colors group-hover:text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {service.desc}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#06bcc9]">
                  Learn More
                  <ChevronRight className="h-4 w-4" />
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>


      {/* Process */}
      <section className="py-15">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto mb-20 max-w-3xl text-center">
            <span className="font-semibold text-[#06bcc9]">
              OUR PROCESS
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
              A Clear Path To
              <span className="block text-[#06bcc9]">
                Better Rankings
              </span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="mb-6 text-6xl font-bold text-[#06bcc9]/15">
                  {step.number}
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {step.desc}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>


      {/* Why Choose Us */}
      <section className="bg-slate-950 py-15 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          <div>
            <span className="font-semibold text-[#06bcc9]">
              WHY HIGH PATH
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              SEO Strategies Built
              <span className="block text-[#06bcc9]">
                For Real Results
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              We combine strategy, data, technology, and continuous
              optimization to create SEO campaigns focused on sustainable
              long-term growth.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            {[
              {
                icon: Users,
                title: 'Expert Team',
                desc: 'Experienced SEO professionals focused on growth.',
              },
              {
                icon: BarChart3,
                title: 'Data Driven',
                desc: 'Every decision is backed by performance data.',
              },
              {
                icon: Target,
                title: 'Custom Strategy',
                desc: 'SEO strategies tailored to your business goals.',
              },
              {
                icon: Award,
                title: 'Proven Results',
                desc: 'Focused on sustainable and measurable growth.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <item.icon className="mb-5 h-7 w-7 text-[#06bcc9]" />

                <h3 className="font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="bg-[#06bcc9] py-15 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold md:text-5xl">
              Ready To Grow Your
              <br />
              Organic Traffic?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Let's build an SEO strategy that helps your business rank
              higher, attract more customers, and grow online.
            </p>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-slate-950 transition-all hover:scale-105"
            >
              Start Your SEO Journey
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default SEO;