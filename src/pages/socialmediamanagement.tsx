import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Heart,
  MessageCircle,
  Play,
  Send,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  CalendarDays,
  PenTool,
  Megaphone,
  Camera,
  BriefcaseBusiness,
  Share2,
  BarChart3,
  ArrowRight,
  Globe2,
  MousePointerClick,
} from "lucide-react";

const SocialMediaManagement = () => {
  const services = [
    {
      title: "Social Media Strategy",
      description:
        "We create powerful social media strategies designed around your business goals and target audience.",
      icon: Target,
    },
    {
      title: "Content Creation",
      description:
        "Creative graphics, engaging captions, reels and content that help your brand stand out.",
      icon: PenTool,
    },
    {
      title: "Social Media Management",
      description:
        "Complete management of your social media profiles with consistent posting and engagement.",
      icon: CalendarDays,
    },
    {
      title: "Community Management",
      description:
        "We help your business build stronger relationships with your audience and customers.",
      icon: Users,
    },
    {
      title: "Paid Social Campaigns",
      description:
        "Targeted advertising campaigns designed to increase reach, leads and conversions.",
      icon: Megaphone,
    },
    {
      title: "Performance Analytics",
      description:
        "Track social media performance with detailed reports and actionable insights.",
      icon: BarChart3,
    },
  ];

  const platforms = [
    {
      name: "Instagram",
      description: "Build your visual brand and engage your audience.",
      icon: Camera,
    },
    {
      name: "LinkedIn",
      description: "Grow your professional network and business presence.",
      icon: BriefcaseBusiness,
    },
    {
      name: "Twitter",
      description: "Connect with your audience and join conversations.",
      icon: MessageCircle,
    },
    {
      name: "YouTube",
      description: "Create engaging video content for your audience.",
      icon: Play,
    },
  ];

  const benefits = [
    "Increase your brand awareness",
    "Reach your target audience",
    "Generate quality leads",
    "Build stronger customer relationships",
    "Improve social media engagement",
    "Grow your online presence",
  ];

  const process = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We understand your business, audience, competitors and social media goals.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Our team creates a customized social media strategy for your brand.",
    },
    {
      number: "03",
      title: "Content Creation",
      description:
        "We design engaging visuals, content, videos and campaigns.",
    },
    {
      number: "04",
      title: "Growth",
      description:
        "We monitor performance, optimize campaigns and continuously improve results.",
    },
  ];

  return (
    <div className="overflow-hidden bg-white">
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-[#073b3f] pt-32 pb-20 sm:pt-36 sm:pb-24">
        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,188,201,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(6,188,201,0.25) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#06bcc9]/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#06bcc9]/30 bg-[#06bcc9]/10 px-5 py-2 text-sm font-semibold text-[#7de5eb]">
              <Share2 className="h-4 w-4" />
              Social Media Management
            </span>

            <h1 className="mx-auto mt-8 max-w-6xl text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Grow Your Brand With
              <span className="block bg-gradient-to-r from-[#06bcc9] to-[#78e0e7] bg-clip-text text-transparent">
                Powerful Social Media
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
              We help businesses build a strong social media presence,
              connect with their audience and turn engagement into meaningful
              business growth.
            </p>

            {/* <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#06bcc9] px-7 py-4 font-semibold text-white shadow-lg shadow-[#06bcc9]/30 transition-all hover:scale-105 hover:bg-[#049ba6]"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                to="/services"
                className="rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition-all hover:border-[#06bcc9] hover:text-[#06bcc9]"
              >
                Explore Services
              </Link>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* ================= INTRO ================= */}

      <section className="py-20 md:py-15">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-semibold uppercase tracking-[0.2em] text-[#06bcc9]">
              Social Growth
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Turn Social Media Into Your
              <span className="block text-[#06bcc9]">
                Strongest Marketing Channel
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Social media is more than just posting content. It is about
              building relationships, creating conversations and developing a
              brand that people trust.
            </p>

            <p className="mt-4 leading-relaxed text-slate-600">
              Our social media experts create customized strategies and
              engaging content that helps your business connect with the right
              audience and achieve measurable growth.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#06bcc9]" />
                  <span className="font-medium text-slate-700">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl bg-gradient-to-br from-[#073b3f] to-[#0b5c63] p-8 md:p-12">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                  <TrendingUp className="h-9 w-9 text-[#06bcc9]" />
                  <h3 className="mt-5 text-xl font-bold text-white">
                    Brand Growth
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Build a powerful and recognizable online presence.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                  <Heart className="h-9 w-9 text-[#06bcc9]" />
                  <h3 className="mt-5 text-xl font-bold text-white">
                    Engagement
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Create meaningful connections with your audience.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                  <MousePointerClick className="h-9 w-9 text-[#06bcc9]" />
                  <h3 className="mt-5 text-xl font-bold text-white">
                    Conversions
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Turn social engagement into valuable business leads.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                  <Globe2 className="h-9 w-9 text-[#06bcc9]" />
                  <h3 className="mt-5 text-xl font-bold text-white">
                    Visibility
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Reach more people across multiple social platforms.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section className="bg-[#f5fbfc] py-20 md:py-15">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="font-semibold uppercase tracking-[0.2em] text-[#06bcc9]">
              Our Services
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Everything You Need To
              <span className="block text-[#06bcc9]">
                Grow On Social Media
              </span>
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              From strategy and content creation to advertising and analytics,
              we manage every part of your social media presence.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group rounded-3xl border border-[#06bcc9]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#06bcc9]/10"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e6f9fa] transition-all group-hover:bg-[#06bcc9]">
                    <Icon className="h-7 w-7 text-[#06bcc9] transition-colors group-hover:text-white" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-[#06bcc9]"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PLATFORMS ================= */}

      <section className="py-20 md:py-15">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="font-semibold uppercase tracking-[0.2em] text-[#06bcc9]">
              Platforms We Manage
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Reach Your Audience
              <span className="block text-[#06bcc9]">
                Wherever They Are
              </span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map((platform) => {
              const Icon = platform.icon;

              return (
                <motion.div
                  key={platform.name}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl border border-slate-100 bg-white p-7 text-center shadow-lg shadow-slate-200/40"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e6f9fa]">
                    <Icon className="h-8 w-8 text-[#06bcc9]" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {platform.name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {platform.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}

      <section className="bg-[#073b3f] py-20 md:py-15">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="font-semibold uppercase tracking-[0.2em] text-[#06bcc9]">
              Our Process
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              How We Grow Your
              <span className="block text-[#06bcc9]">
                Social Media Presence
              </span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur"
              >
                <span className="text-4xl font-bold text-[#06bcc9]">
                  {step.number}
                </span>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 leading-relaxed text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="py-20 md:py-15">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#06bcc9] to-[#0499a3] px-8 py-16 text-center md:px-16 md:py-20">
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <Sparkles className="mx-auto h-10 w-10 text-white" />

              <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold text-white md:text-5xl">
                Ready To Grow Your Social Media Presence?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
                Let's create a social media strategy that helps your business
                attract, engage and convert the right audience.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#0499a3] transition-all hover:scale-105"
              >
                Start Your Project
                <Send className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaManagement;