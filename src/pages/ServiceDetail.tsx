import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Code2,
  Megaphone,
  Smartphone,
  Shield,
  Cloud,
  BarChart3,
  Target,
} from 'lucide-react';

const servicesData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  icon: typeof Code2;
  features: string[];
  benefits: string[];
  process: { title: string; description: string }[];
  technologies: string[];
  caseStudy: { title: string; result: string; description: string };
}> = {
  'web-development': {
    title: 'Web Development',
    subtitle: 'Custom websites and web applications built with cutting-edge technologies',
    description: 'Our web development team creates high-performance, scalable, and visually stunning websites and web applications. From simple landing pages to complex enterprise solutions, we deliver digital experiences that drive results.',
    gradient: 'from-violet-600 to-purple-600',
    icon: Code2,
    features: [
      'Full-Stack Development',
      'E-Commerce Solutions',
      'CMS Development',
      'Progressive Web Apps (PWA)',
      'API Development & Integration',
      'Legacy System Modernization',
      'Performance Optimization',
      'Responsive Design',
    ],
    benefits: [
      'Increased online visibility and reach',
      'Enhanced user engagement and conversions',
      'Scalable solutions that grow with your business',
      'Fast loading times and optimal performance',
      'SEO-friendly architecture',
      'Secure and reliable infrastructure',
    ],
    process: [
      { title: 'Discovery & Planning', description: 'We analyze your requirements and create a comprehensive project plan.' },
      { title: 'UI/UX Design', description: 'Our designers create intuitive and visually appealing interfaces.' },
      { title: 'Development', description: 'Our engineers build your solution using the latest technologies.' },
      { title: 'Testing & QA', description: 'Rigorous testing ensures a bug-free experience.' },
      { title: 'Deployment', description: 'We launch your project and ensure everything runs smoothly.' },
      { title: 'Support & Maintenance', description: 'Ongoing support to keep your solution running optimally.' },
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'AWS'],
    caseStudy: {
      title: 'E-Commerce Platform for TechMart',
      result: '300% increase in online sales',
      description: 'We built a custom e-commerce platform with AI-powered recommendations, resulting in a 300% increase in sales within 6 months.',
    },
  },
  'mobile-apps': {
    title: 'Mobile App Development',
    subtitle: 'Native and cross-platform mobile applications for iOS and Android',
    description: 'We create beautiful, high-performance mobile applications that users love. Our team specializes in both native and cross-platform development, ensuring your app reaches the widest audience possible.',
    gradient: 'from-fuchsia-600 to-pink-600',
    icon: Smartphone,
    features: [
      'iOS Native Development',
      'Android Native Development',
      'React Native Apps',
      'Flutter Development',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality',
      'Performance Optimization',
    ],
    benefits: [
      'Reach customers on their preferred devices',
      'Increase engagement with push notifications',
      'Provide seamless offline experiences',
      'Leverage device features (camera, GPS, etc.)',
      'Build brand loyalty through mobile presence',
      'Gain valuable user insights and analytics',
    ],
    process: [
      { title: 'Strategy & Planning', description: 'We define your app strategy and create a roadmap.' },
      { title: 'UX Research & Design', description: 'User-centered design for optimal engagement.' },
      { title: 'Development', description: 'Building your app with the right technology stack.' },
      { title: 'Testing', description: 'Comprehensive testing across devices and scenarios.' },
      { title: 'Launch', description: 'App store submission and launch support.' },
      { title: 'Growth & Iteration', description: 'Continuous improvement based on user feedback.' },
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS Amplify', 'GraphQL', 'Redux'],
    caseStudy: {
      title: 'FinTech App for NeoBank',
      result: '500K+ downloads in 3 months',
      description: 'A revolutionary banking app with gamification features that acquired 500K+ users in its first quarter.',
    },
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    subtitle: 'Data-driven marketing strategies that deliver measurable results',
    description: 'Our digital marketing team creates comprehensive strategies that increase visibility, drive traffic, and convert visitors into customers. We combine creativity with analytics to maximize your ROI.',
    gradient: 'from-cyan-600 to-blue-600',
    icon: Megaphone,
    features: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click (PPC) Campaigns',
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
      'Influencer Partnerships',
      'Conversion Rate Optimization',
      'Analytics & Reporting',
    ],
    benefits: [
      'Increased organic traffic and visibility',
      'Higher conversion rates and ROI',
      'Better understanding of your audience',
      'Stronger brand presence across channels',
      'Measurable and trackable results',
      'Competitive advantage in your market',
    ],
    process: [
      { title: 'Audit & Analysis', description: 'We assess your current marketing performance.' },
      { title: 'Strategy Development', description: 'Creating a customized marketing roadmap.' },
      { title: 'Campaign Setup', description: 'Launching targeted campaigns across channels.' },
      { title: 'Execution', description: 'Implementing strategies with precision.' },
      { title: 'Monitoring', description: 'Tracking performance and making adjustments.' },
      { title: 'Reporting & Optimization', description: 'Regular reports and continuous improvement.' },
    ],
    technologies: ['Google Analytics', 'HubSpot', 'SEMrush', 'Hootsuite', 'Mailchimp', 'Google Ads', 'Facebook Ads', 'Ahrefs'],
    caseStudy: {
      title: 'Brand Launch for FreshStyle',
      result: '10M+ reach in first month',
      description: 'A multi-channel launch campaign that generated 10M+ impressions and established the brand in a competitive market.',
    },
  },
  'cloud-solutions': {
    title: 'Cloud Solutions',
    subtitle: 'Scalable cloud infrastructure and migration services',
    description: 'We help businesses migrate to the cloud and optimize their infrastructure for maximum efficiency, security, and cost savings. Our experts ensure a smooth transition with minimal disruption.',
    gradient: 'from-emerald-600 to-teal-600',
    icon: Cloud,
    features: [
      'Cloud Migration Strategy',
      'AWS/Azure/GCP Services',
      'DevOps & CI/CD',
      'Kubernetes & Containerization',
      'Serverless Architecture',
      'Cloud Security',
      'Cost Optimization',
      '24/7 Monitoring & Support',
    ],
    benefits: [
      'Reduced infrastructure costs',
      'Improved scalability and flexibility',
      'Enhanced disaster recovery',
      'Better performance and reliability',
      'Increased team productivity',
      'Environmental sustainability',
    ],
    process: [
      { title: 'Assessment', description: 'Evaluating your current infrastructure and needs.' },
      { title: 'Planning', description: 'Creating a detailed migration roadmap.' },
      { title: 'Migration', description: 'Moving your systems with minimal downtime.' },
      { title: 'Optimization', description: 'Fine-tuning for performance and cost.' },
      { title: 'Security', description: 'Implementing robust security measures.' },
      { title: 'Management', description: 'Ongoing monitoring and support.' },
    ],
    technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Jenkins'],
    caseStudy: {
      title: 'Enterprise Migration for GlobalCorp',
      result: '40% cost reduction',
      description: 'Complete infrastructure migration to AWS, resulting in 40% cost savings and 99.99% uptime.',
    },
  },
  'cybersecurity': {
    title: 'Cybersecurity',
    subtitle: 'Protect your digital assets with comprehensive security solutions',
    description: 'Our cybersecurity experts help you identify vulnerabilities, implement robust security measures, and maintain compliance with industry standards. We protect your business from evolving threats.',
    gradient: 'from-orange-600 to-red-600',
    icon: Shield,
    features: [
      'Penetration Testing',
      'Security Audits & Assessments',
      'Compliance Management',
      'Incident Response',
      'Security Training',
      'Zero Trust Architecture',
      'Vulnerability Management',
      '24/7 Security Monitoring',
    ],
    benefits: [
      'Protection against cyber threats',
      'Regulatory compliance',
      'Reduced risk of data breaches',
      'Enhanced customer trust',
      'Business continuity',
      'Peace of mind',
    ],
    process: [
      { title: 'Assessment', description: 'Identifying vulnerabilities and risks.' },
      { title: 'Strategy', description: 'Developing a security roadmap.' },
      { title: 'Implementation', description: 'Deploying security solutions.' },
      { title: 'Testing', description: 'Validating security measures.' },
      { title: 'Training', description: 'Educating your team on best practices.' },
      { title: 'Monitoring', description: 'Continuous threat detection and response.' },
    ],
    technologies: ['SIEM', 'Firewalls', 'EDR', 'WAF', 'IAM', 'PAM', 'SAST/DAST', 'Encryption'],
    caseStudy: {
      title: 'Security Overhaul for FinSecure',
      result: 'Zero breaches in 2 years',
      description: 'Complete security transformation that has prevented all attempted breaches and achieved SOC 2 compliance.',
    },
  },
  'ai-analytics': {
    title: 'AI & Analytics',
    subtitle: 'Unlock insights with advanced analytics and AI-powered solutions',
    description: 'We harness the power of artificial intelligence and advanced analytics to help you make data-driven decisions, automate processes, and discover new opportunities for growth.',
    gradient: 'from-indigo-600 to-blue-600',
    icon: BarChart3,
    features: [
      'Machine Learning Solutions',
      'Predictive Analytics',
      'Business Intelligence',
      'Data Engineering',
      'Natural Language Processing',
      'Computer Vision',
      'Recommendation Systems',
      'AI Strategy Consulting',
    ],
    benefits: [
      'Data-driven decision making',
      'Process automation and efficiency',
      'Predictive insights for planning',
      'Personalized customer experiences',
      'Competitive advantage',
      'Revenue optimization',
    ],
    process: [
      { title: 'Discovery', description: 'Understanding your data and business goals.' },
      { title: 'Data Preparation', description: 'Cleaning and structuring your data.' },
      { title: 'Model Development', description: 'Building AI/ML models tailored to your needs.' },
      { title: 'Validation', description: 'Testing and validating model performance.' },
      { title: 'Deployment', description: 'Integrating solutions into your workflow.' },
      { title: 'Monitoring', description: 'Continuous improvement and optimization.' },
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Spark', 'Tableau', 'Power BI', 'Snowflake', 'BigQuery'],
    caseStudy: {
      title: 'Predictive Analytics for RetailMax',
      result: '25% increase in revenue',
      description: 'AI-powered demand forecasting that reduced inventory costs by 30% and increased revenue by 25%.',
    },
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData[slug || ''];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Service Not Found</h1>
          <Link to="/services" className="text-violet-600 hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-950 via-violet-950 to-slate-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg mb-6`}>
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-slate-300 mb-8">{service.subtitle}</p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold rounded-full shadow-lg shadow-violet-500/30 flex items-center gap-2"
                >
                  Get Started <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block"
            >
              <div className={`bg-gradient-to-br ${service.gradient} rounded-3xl p-16 aspect-square flex items-center justify-center`}>
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Icon className="h-40 w-40 text-white/80" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-violet-50">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Offer</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive solutions tailored to your needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-violet-100 rounded-full mt-1">
                    <Check className="h-4 w-4 text-violet-600" />
                  </div>
                  <span className="font-medium text-slate-900">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Us</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg">
                      <Target className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-3xl p-10 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-white/80 mb-6">Let's discuss how we can help transform your business with our {service.title.toLowerCase()} services.</p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-violet-600 font-semibold rounded-full shadow-lg flex items-center gap-2"
                >
                  Schedule Consultation <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-violet-50">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">A proven approach to deliver exceptional results</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-violet-200 to-fuchsia-200 bg-clip-text text-transparent mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Technologies We Use</h2>
            <p className="text-slate-600">Industry-leading tools and platforms</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 bg-slate-100 rounded-full font-medium text-slate-700 hover:bg-violet-100 hover:text-violet-600 transition-colors"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gradient-to-br from-violet-600 to-fuchsia-600">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-semibold mb-6">
              Success Story
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{service.caseStudy.title}</h2>
            <p className="text-5xl font-bold text-white/90 mb-6">{service.caseStudy.result}</p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">{service.caseStudy.description}</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
