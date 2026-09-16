import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Award,
  Users,
  Globe,
  Target,
  Heart,
  Lightbulb,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Zap,
  Handshake,
  Shield,
  Clock,
} from 'lucide-react';

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

      {/* Glow */}
      <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-[#06bcc9]/20 blur-[128px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-[#06bcc9]/30 bg-[#06bcc9]/10 px-4 py-2 text-sm font-semibold text-[#7cecf3]">
            About HighPath Solutions
          </span>

          <h1 className="mb-6 text-4xl font-bold text-white lg:text-6xl">
            Pioneering the Future of{' '}
            <span className="bg-gradient-to-r from-[#06bcc9] to-[#7cecf3] bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-xl text-slate-200">
            We help businesses navigate the ever-evolving digital landscape
            with innovative technology and growth-focused solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const StorySection = () => {
  return (
    <section className="bg-white py-15">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 inline-block rounded-full bg-[#e6f9fa] px-4 py-2 text-sm font-semibold text-[#06bcc9]">
              Our Story
            </span>

            <h2 className="mb-6 text-4xl font-bold text-slate-900">
              Building Digital Solutions for{' '}
              <span className="bg-gradient-to-r from-[#06bcc9] to-[#0499a3] bg-clip-text text-transparent">
                Business Growth
              </span>
            </h2>

            <div className="space-y-6 leading-relaxed text-slate-600">
              <p>
                HighPath Solutions was built with a simple mission: to help
                businesses use technology and digital strategies to achieve
                meaningful growth.
              </p>

              <p>
                Our team works closely with businesses to understand their
                challenges, goals, and opportunities. We combine creative
                thinking with modern technology to build solutions that deliver
                real results.
              </p>

              <p>
                From web development and mobile applications to lead generation,
                social media management, and branding, we focus on creating
                digital experiences that help businesses move forward.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-[#06bcc9]/20">
              <img
                src="/images/about-team.jpg"
                alt="HighPath Solutions Team"
                className="aspect-square w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#073b4c]/80 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="mb-2 text-5xl font-bold">12+</div>
                <div className="text-lg opacity-90">Years of Excellence</div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-8 -left-8 rounded-2xl bg-white p-6 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-[#e6f9fa] p-3">
                  <TrendingUp className="h-6 w-6 text-[#06bcc9]" />
                </div>

                <div>
                  <div className="text-2xl font-bold text-slate-900">250%</div>
                  <div className="text-sm text-slate-600">Average ROI</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MissionVision = () => {
  return (
    <section className="bg-gradient-to-br from-[#f4fcfc] to-[#e6f9fa] py-15">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[#06bcc9]/10 bg-white p-10 shadow-xl shadow-[#06bcc9]/5"
          >
            <div className="mb-6 w-fit rounded-2xl bg-[#06bcc9] p-4">
              <Target className="h-8 w-8 text-white" />
            </div>

            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Our Mission
            </h3>

            <p className="leading-relaxed text-slate-600">
              To empower businesses with innovative technology solutions and
              strategic digital initiatives that drive sustainable growth,
              improve customer experiences, and create lasting value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl border border-[#06bcc9]/10 bg-white p-10 shadow-xl shadow-[#06bcc9]/5"
          >
            <div className="mb-6 w-fit rounded-2xl bg-[#0499a3] p-4">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>

            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Our Vision
            </h3>

            <p className="leading-relaxed text-slate-600">
              To become a trusted digital partner for businesses worldwide,
              recognized for innovation, expertise, quality, and an unwavering
              commitment to helping our clients succeed.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ValuesSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'We stay ahead of the curve, embracing new technologies and creative solutions.',
    },
    {
      icon: Handshake,
      title: 'Integrity',
      description:
        'We build relationships on trust, transparency, and honest communication.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description:
        'We love what we do, and it shows in every project we deliver.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'We work as an extension of your team, sharing your vision and goals.',
    },
    {
      icon: Shield,
      title: 'Quality',
      description:
        'We never compromise on quality, delivering excellence in every detail.',
    },
    {
      icon: Clock,
      title: 'Reliability',
      description:
        'We deliver on time, every time, meeting and exceeding expectations.',
    },
  ];

  return (
    <section className="bg-white py-15">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-[#e6f9fa] px-4 py-2 text-sm font-semibold text-[#06bcc9]">
            Our Values
          </span>

          <h2 className="mb-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            What We{' '}
            <span className="bg-gradient-to-r from-[#06bcc9] to-[#0499a3] bg-clip-text text-transparent">
              Stand For
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-slate-100 bg-gradient-to-br from-[#f9fefe] to-white p-8 transition-all duration-300 hover:border-[#06bcc9]/30 hover:shadow-xl hover:shadow-[#06bcc9]/10"
            >
              <div className="mb-6 w-fit rounded-2xl bg-[#06bcc9] p-4">
                <value.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {value.title}
              </h3>

              <p className="leading-relaxed text-slate-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    {
      value: '500+',
      label: 'Projects Completed',
      icon: CheckCircle2,
    },
    {
      value: '200+',
      label: 'Team Members',
      icon: Users,
    },
    {
      value: '30+',
      label: 'Countries Served',
      icon: Globe,
    },
    {
      value: '98%',
      label: 'Client Satisfaction',
      icon: Award,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#0499a3] via-[#06bcc9] to-[#0499a3] py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="mx-auto mb-4 h-8 w-8 text-white/80" />

              <div className="mb-2 text-4xl font-bold text-white lg:text-5xl">
                {stat.value}
              </div>

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
    <section className="bg-gradient-to-br from-[#f4fcfc] to-[#e6f9fa] py-15">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Zap className="mx-auto mb-6 h-12 w-12 text-[#06bcc9]" />

          <h2 className="mb-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Let's Build Something Great Together
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-xl text-slate-600">
            Ready to take your business to the next level? Contact us today and
            let's discuss how we can help your business grow.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full bg-[#06bcc9] px-8 py-4 font-semibold text-white shadow-lg shadow-[#06bcc9]/30 transition-all hover:bg-[#0499a3]"
              >
                Get in Touch
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>

            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border border-[#06bcc9]/20 bg-white px-8 py-4 font-semibold text-slate-900 shadow-lg transition-all hover:border-[#06bcc9] hover:text-[#06bcc9]"
              >
                Explore Services
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function About() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <MissionVision />
      <ValuesSection />
      <StatsSection />
      <CTASection />
    </>
  );
}