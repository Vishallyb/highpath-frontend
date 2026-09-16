import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Eye } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-950 via-violet-950 to-slate-950">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-4">
            Our Portfolio
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore our portfolio of successful digital transformations and marketing campaigns.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const PortfolioGrid = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const filters = ['all', 'web', 'mobile', 'marketing', 'branding', 'cloud'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: '/images/portfolio-1.jpg',
      description: 'Modern shopping experience with AI-powered recommendations and seamless checkout.',
      tags: ['React', 'Node.js', 'AI/ML', 'Stripe'],
      client: 'TechMart Global',
      duration: '6 months',
      results: '300% increase in sales',
    },
    {
      id: 2,
      title: 'FinTech Mobile App',
      category: 'mobile',
      image: '/images/portfolio-2.jpg',
      description: 'Digital banking redefined for Gen Z with gamification and social features.',
      tags: ['Flutter', 'Firebase', 'Stripe', 'Plaid'],
      client: 'NeoBank',
      duration: '8 months',
      results: '500K+ downloads',
    },
    {
      id: 3,
      title: 'Brand Launch Campaign',
      category: 'marketing',
      image: '/images/portfolio-3.jpg',
      description: 'Viral campaign reaching 10M+ users across multiple platforms.',
      tags: ['Social Media', 'SEO', 'Content', 'Influencer'],
      client: 'FreshStyle Co.',
      duration: '3 months',
      results: '10M+ reach',
    },
    {
      id: 4,
      title: 'Healthcare SaaS',
      category: 'web',
      image: '/images/services-web.jpg',
      description: 'Telemedicine platform serving 500K+ patients with AI diagnostics.',
      tags: ['Vue.js', 'Python', 'HIPAA', 'AI'],
      client: 'MediConnect',
      duration: '12 months',
      results: '500K+ patients',
    },
    {
      id: 5,
      title: 'Brand Identity System',
      category: 'branding',
      image: '/images/about-team.jpg',
      description: 'Complete visual identity for startup unicorn including motion graphics.',
      tags: ['Logo', 'Guidelines', 'Motion', 'Print'],
      client: 'QuantumTech',
      duration: '2 months',
      results: 'Series B funded',
    },
    {
      id: 6,
      title: 'Food Delivery App',
      category: 'mobile',
      image: '/images/portfolio-2.jpg',
      description: 'Real-time tracking with gamification and loyalty rewards.',
      tags: ['React Native', 'Maps', 'Gamification', 'Loyalty'],
      client: 'QuickBite',
      duration: '5 months',
      results: '1M+ orders',
    },
    {
      id: 7,
      title: 'Enterprise Cloud Migration',
      category: 'cloud',
      image: '/images/services-web.jpg',
      description: 'Complete infrastructure migration to AWS with 99.99% uptime.',
      tags: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
      client: 'GlobalCorp',
      duration: '18 months',
      results: '40% cost reduction',
    },
    {
      id: 8,
      title: 'SaaS Brand Refresh',
      category: 'branding',
      image: '/images/portfolio-3.jpg',
      description: 'Complete brand overhaul including website redesign and marketing collateral.',
      tags: ['Strategy', 'Design', 'Web', 'Marketing'],
      client: 'CloudStack',
      duration: '4 months',
      results: '200% lead increase',
    },
    {
      id: 9,
      title: 'Lead Generation Campaign',
      category: 'marketing',
      image: '/images/portfolio-1.jpg',
      description: 'Multi-channel marketing campaign driving qualified leads.',
      tags: ['PPC', 'SEO', 'Email', 'Analytics'],
      client: 'B2B Solutions',
      duration: '6 months',
      results: '150% ROI',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="py-15 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/30'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-violet-200/50 transition-all duration-500 h-full">
                  {/* Project Visual */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-4 bg-white rounded-full"
                      >
                        <Eye className="h-6 w-6 text-slate-900" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-4 bg-white rounded-full"
                      >
                        <ExternalLink className="h-6 w-6 text-slate-900" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-violet-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="text-sm text-slate-500">
                        <span className="font-medium text-violet-600">{project.client}</span>
                      </div>
                      <div className="text-sm font-medium text-emerald-600">{project.results}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '150+', label: 'Team Members' },
    { value: '50+', label: 'Industry Awards' },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-violet-600 to-fuchsia-600">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-15 bg-gradient-to-br from-slate-50 to-violet-50">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us to discuss your project.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-full shadow-xl shadow-violet-500/30 flex items-center gap-2 mx-auto"
            >
              Start Your Project <ArrowRight className="h-5 w-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default function Portfolio() {
  return (
    <>
      <HeroSection />
      <PortfolioGrid />
      <StatsSection />
      <CTASection />
    </>
  );
}
