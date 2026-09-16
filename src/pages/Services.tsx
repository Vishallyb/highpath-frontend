import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Code2,
  Megaphone,
  Smartphone,
  Shield,
  Cloud,
  BarChart3,
  ArrowRight,
  Zap,
  Globe,
  Check,
} from 'lucide-react';

/* =========================================
   HERO SECTION
========================================= */

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#073b4c] via-[#075d68] to-[#073b4c] pt-32 pb-20">
      {/* Grid Background */}
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

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#06bcc9]/20 blur-[128px]" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-[#0499a3]/20 blur-[128px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-[#06bcc9]/30 bg-[#06bcc9]/10 px-4 py-2 text-sm font-semibold text-[#7cecf3]">
            Our Services
          </span>

          <h1 className="mb-6 text-4xl font-bold text-white lg:text-6xl">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-[#06bcc9] to-[#7cecf3] bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-xl text-slate-200">
            From custom software development to data-driven marketing, we offer
            end-to-end solutions to transform your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

/* =========================================
   PREMIUM SERVICES SECTION
========================================= */

const ServicesList = () => {
  const services = [
    {
      icon: Code2,
      number: '01',
      title: 'Web Development',
      description:
        'Custom, scalable, and high-performance websites built to deliver exceptional digital experiences and business growth.',
      features: [
        'Custom Web Applications',
        'E-Commerce Solutions',
        'CMS Development',
      ],
      link: '/services/web-development',
    },
    {
      icon: Smartphone,
      number: '02',
      title: 'Mobile App Development',
      description:
        'Powerful and intuitive mobile applications designed for iOS and Android platforms with seamless user experiences.',
      features: [
        'iOS & Android Apps',
        'React Native',
        'Flutter Development',
      ],
      link: '/services/app-development',
    },
    {
      icon: Megaphone,
      number: '03',
      title: 'Lead Generation',
      description:
        'Data-driven lead generation strategies designed to attract, engage, and convert qualified prospects into customers.',
      features: [
        'Targeted Campaigns',
        'Landing Pages',
        'Conversion Strategy',
      ],
      link: '/services/lead-generation',
    },
    {
      icon: Cloud,
      number: '04',
      title: 'Social Media Management',
      description:
        'Build a powerful online presence with strategic content, creative campaigns, and consistent audience engagement.',
      features: [
        'Content Strategy',
        'Social Campaigns',
        'Community Growth',
      ],
      link: '/services/social-media-management',
    },
    {
      icon: Shield,
      number: '05',
      title: 'Branding',
      description:
        'Create a memorable and impactful brand identity that helps your business stand out and connect with your audience.',
      features: [
        'Brand Strategy',
        'Visual Identity',
        'Creative Design',
      ],
      link: '/services/branding',
    },
    {
  icon: BarChart3,
  number: '06',
  title: 'Search Engine Optimization',
  description:
    'Improve your online visibility and attract the right audience with data-driven SEO strategies designed for sustainable business growth.',
  features: [
    'Keyword Research',
    'On-Page SEO',
    'Technical SEO',
  ],
  link: '/services/search-engine-optimization',
},
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7fcfc] py-24 lg:py-15">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-[#06bcc9]/5 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#0499a3]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#06bcc9]/20 bg-white px-5 py-2 text-sm font-semibold text-[#06bcc9] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#06bcc9]" />
            What We Offer
          </span>

          <h2 className="mb-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Premium Solutions For{' '}
            <span className="bg-gradient-to-r from-[#06bcc9] to-[#0499a3] bg-clip-text text-transparent">
              Digital Growth
            </span>
          </h2>

          <p className="text-lg leading-relaxed text-slate-600">
            Explore our complete range of digital services designed to help your
            business grow, scale, and stay ahead in a competitive market.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-[28px] border border-[#06bcc9]/10 bg-white p-8 shadow-lg shadow-slate-200/40 transition-all duration-500 hover:border-[#06bcc9]/30 hover:shadow-2xl hover:shadow-[#06bcc9]/15"
              >
                {/* Background Glow */}
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#06bcc9]/5 blur-3xl transition-all duration-500 group-hover:bg-[#06bcc9]/15" />

                {/* Service Number */}
                <div className="absolute top-6 right-6 text-5xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-[#06bcc9]/10">
                  {service.number}
                </div>

                {/* Icon */}
                <div className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#06bcc9] to-[#0499a3] shadow-lg shadow-[#06bcc9]/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="relative mb-4 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#0499a3]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative mb-7 leading-relaxed text-slate-600">
                  {service.description}
                </p>

                {/* Features */}
                <div className="relative mb-8 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-[#e6f9fa] px-3 py-2 text-xs font-medium text-[#047c85]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Push CTA Bottom */}
                <div className="mt-auto">
                  <div className="mb-6 h-px w-full bg-gradient-to-r from-[#06bcc9]/20 via-[#06bcc9]/10 to-transparent" />

                  <Link
                    to={service.link}
                    className="relative inline-flex items-center gap-3 font-semibold text-[#0499a3] transition-all duration-300 hover:gap-5"
                  >
                    Explore Service

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e6f9fa] transition-all duration-300 group-hover:bg-[#06bcc9] group-hover:text-white">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </Link>
                </div>

                {/* Bottom Hover Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#06bcc9] to-[#0499a3] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* =========================================
   PROCESS SECTION
========================================= */

const ProcessSection = () => {
  const steps = [
    {
      step: '01',
      title: 'Discovery',
      description:
        'We learn about your business, goals, and challenges to understand your unique needs.',
    },
    {
      step: '02',
      title: 'Strategy',
      description:
        'We develop a comprehensive plan tailored to achieve your objectives.',
    },
    {
      step: '03',
      title: 'Development',
      description:
        'Our expert team brings the strategy to life with cutting-edge technology.',
    },
    {
      step: '04',
      title: 'Launch',
      description:
        'We deploy your solution and ensure everything runs smoothly.',
    },
    {
      step: '05',
      title: 'Support',
      description:
        'Ongoing maintenance and optimization to keep you ahead.',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#f4fcfc] to-[#e6f9fa] py-15">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-[#e6f9fa] px-4 py-2 text-sm font-semibold text-[#06bcc9]">
            Our Process
          </span>

          <h2 className="mb-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            How We{' '}
            <span className="bg-gradient-to-r from-[#06bcc9] to-[#0499a3] bg-clip-text text-transparent">
              Work
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-5">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="mb-4 bg-gradient-to-r from-[#06bcc9]/40 to-[#0499a3]/30 bg-clip-text text-6xl font-bold text-transparent">
                {step.step}
              </div>

              <h3 className="mb-2 text-xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="text-slate-600">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="absolute top-8 left-full hidden h-0.5 w-full bg-gradient-to-r from-[#06bcc9]/30 to-transparent md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================================
   INDUSTRIES SECTION
========================================= */

const IndustriesSection = () => {
  const industries = [
    'Healthcare',
    'Finance',
    'Retail',
    'Education',
    'Manufacturing',
    'Real Estate',
    'Travel',
    'Entertainment',
  ];

  return (
    <section className="bg-white py-15">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-[#e6f9fa] px-4 py-2 text-sm font-semibold text-[#06bcc9]">
            Industries
          </span>

          <h2 className="mb-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Industries We{' '}
            <span className="bg-gradient-to-r from-[#06bcc9] to-[#0499a3] bg-clip-text text-transparent">
              Serve
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            We have deep expertise across various industries, understanding
            unique challenges and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="rounded-2xl border border-slate-100 bg-gradient-to-br from-[#f9fefe] to-white p-8 text-center transition-all duration-300 hover:border-[#06bcc9]/30 hover:shadow-xl hover:shadow-[#06bcc9]/10"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#06bcc9] to-[#0499a3]">
                <Globe className="h-8 w-8 text-white" />
              </div>

              <h3 className="font-semibold text-slate-900">{industry}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================================
   CTA SECTION
========================================= */

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0499a3] via-[#06bcc9] to-[#0499a3] py-15">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Zap className="mx-auto mb-6 h-12 w-12 text-white" />

          <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
            Ready to Get Started?
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-xl text-white/85">
            Let's discuss how our services can help transform your business and
            achieve your goals.
          </p>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-5 font-bold text-[#0499a3] shadow-xl"
            >
              Get Free Consultation
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

/* =========================================
   MAIN SERVICES PAGE
========================================= */

export default function Services() {
  return (
    <>
      <HeroSection />

      <ServicesList />

      <ProcessSection />

      <IndustriesSection />

      <CTASection />
    </>
  );
}