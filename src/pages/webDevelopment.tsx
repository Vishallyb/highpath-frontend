import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe,
  Layers3,
  Smartphone,
  ShoppingCart,
  Gauge,
  ShieldCheck,
  Search,
  Database,
  Zap,
  Monitor,
  Settings,
} from "lucide-react";

const WebDevelopment = () => {
  const services = [
    {
      icon: Globe,
      title: "Business Websites",
      description:
        "Modern, responsive websites designed to establish your brand and convert visitors into customers.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Development",
      description:
        "Scalable online stores with secure payments, product management and smooth shopping experiences.",
    },
    {
      icon: Code2,
      title: "Custom Web Applications",
      description:
        "Powerful web applications built around your unique business workflows and requirements.",
    },
    {
      icon: Smartphone,
      title: "Responsive Development",
      description:
        "Pixel-perfect experiences that work seamlessly across desktop, tablet and mobile devices.",
    },
    {
      icon: Database,
      title: "CMS Development",
      description:
        "Easy-to-manage websites powered by flexible content management systems.",
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description:
        "Fast-loading websites optimized for performance and better user experience.",
    },
  ];

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "WordPress",
    "PHP",
    "Tailwind CSS",
    "MongoDB",
  ];

  const process = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We understand your business, audience, goals and technical requirements.",
    },
    {
      number: "02",
      title: "UI/UX Design",
      description:
        "We create a clean, intuitive and conversion-focused interface for your website.",
    },
    {
      number: "03",
      title: "Development",
      description:
        "Our developers transform the approved design into a fast and scalable website.",
    },
    {
      number: "04",
      title: "Testing",
      description:
        "Every page and functionality is tested across devices and browsers.",
    },
    {
      number: "05",
      title: "Launch",
      description:
        "After final approval, we deploy your website and make sure everything runs smoothly.",
    },
  ];

  const benefits = [
    "Mobile-first responsive design",
    "SEO-friendly architecture",
    "Fast loading performance",
    "Secure and scalable development",
    "Conversion-focused user experience",
    "Clean and maintainable code",
  ];

  return (
    <div className="bg-white text-slate-900">

      {/* =========================================================
          TOP HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#062b30] via-[#075b63] to-[#031f24] pt-32 pb-20 lg:pt-36 lg:pb-24">

        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Glow Effects */}
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-[#06bcc9]/30 blur-3xl" />

        <div className="absolute -top-20 right-1/4 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#06bcc9]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex rounded-full border border-[#06bcc9]/30 bg-[#06bcc9]/10 px-5 py-2 text-sm font-semibold text-[#a5f3fc] backdrop-blur-md"
          >
            Web Development
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-6xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Building the Future with{" "}
            <span className="bg-gradient-to-r from-[#06bcc9] via-cyan-300 to-[#67e8f9] bg-clip-text text-transparent">
              Powerful Web Development
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-cyan-50/90 sm:text-lg"
          >
            We create modern, high-performance and scalable websites that help
            businesses build a strong digital presence and achieve measurable
            growth.
          </motion.p>

        </div>
      </section>


      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="bg-white py-20 lg:py-15">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-bold uppercase tracking-widest text-[#06bcc9]">
                Digital Experiences
              </span>

              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                From Idea to a
                <span className="block bg-gradient-to-r from-[#06bcc9] to-[#0499a3] bg-clip-text text-transparent">
                  Powerful Website
                </span>
              </h2>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-lg leading-relaxed text-slate-600"
            >
              <p>
                Your website is more than just an online presence. It is a
                digital asset that represents your brand, communicates your
                value and drives business growth.
              </p>

              <p className="mt-5">
                Our web development team combines modern technologies,
                thoughtful UX and scalable architecture to create websites
                that look exceptional and perform even better.
              </p>
            </motion.div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="bg-white pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-[#e6f9fa] px-4 py-2 text-sm font-semibold text-[#06bcc9]">
              What We Build
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              Complete Web Development
              <span className="block bg-gradient-to-r from-[#06bcc9] to-[#0499a3] bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              Everything you need to build, launch and scale your digital
              presence.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#06bcc9]/40 hover:shadow-xl"
                >

                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#06bcc9] to-[#0499a3] shadow-lg shadow-[#06bcc9]/20">
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 font-semibold text-[#06bcc9]">
                    Explore Service
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =========================================================
          WHY US
      ========================================================= */}
      <section className="bg-white py-20 lg:py-15">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <span className="text-sm font-bold uppercase tracking-widest text-[#06bcc9]">
                Why HighPath
              </span>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Built for
                <span className="block bg-gradient-to-r from-[#06bcc9] to-[#0499a3] bg-clip-text text-transparent">
                  Performance & Growth
                </span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                We focus on creating websites that are fast, secure,
                scalable and designed around your business objectives.
              </p>

              <div className="mt-8 space-y-4">

                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#06bcc9]" />

                    <span className="font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </motion.div>


            {/* Visual Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-5"
            >

              <div className="rounded-3xl bg-slate-950 p-7 text-white">
                <Gauge className="mb-5 h-8 w-8 text-[#06bcc9]" />

                <p className="text-3xl font-bold">
                  Fast
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  Optimized performance
                </p>
              </div>


              <div className="mt-10 rounded-3xl bg-[#06bcc9] p-7 text-white">
                <ShieldCheck className="mb-5 h-8 w-8" />

                <p className="text-3xl font-bold">
                  Secure
                </p>

                <p className="mt-2 text-sm text-white/80">
                  Built with security in mind
                </p>
              </div>


              <div className="rounded-3xl bg-[#0499a3] p-7 text-white">
                <Layers3 className="mb-5 h-8 w-8" />

                <p className="text-3xl font-bold">
                  Scalable
                </p>

                <p className="mt-2 text-sm text-white/80">
                  Ready for future growth
                </p>
              </div>


              <div className="mt-10 rounded-3xl bg-[#e6f9fa] p-7">
                <Search className="mb-5 h-8 w-8 text-[#06bcc9]" />

                <p className="text-3xl font-bold">
                  SEO
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Search-friendly structure
                </p>
              </div>

            </motion.div>

          </div>

        </div>
      </section>


      {/* =========================================================
          TECHNOLOGY
      ========================================================= */}
      <section className="bg-[#062b30] py-20 lg:py-15">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-[#67e8f9]">
            Technology Stack
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Modern Technologies.
            <span className="block text-cyan-100/60">
              Better Experiences.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-cyan-50/60">
            We use modern technologies and proven development practices to
            build reliable digital products.
          </p>


          <div className="mt-12 flex flex-wrap justify-center gap-4">

            {technologies.map((technology) => (
              <div
                key={technology}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-slate-200 transition-all hover:border-[#06bcc9]/50 hover:bg-[#06bcc9]/10 hover:text-white"
              >
                {technology}
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          DEVELOPMENT PROCESS
      ========================================================= */}
      <section className="bg-white py-20 lg:py-15">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-[#e6f9fa] px-4 py-2 text-sm font-semibold text-[#06bcc9]">
              Our Process
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              How We Build Your
              <span className="block bg-gradient-to-r from-[#06bcc9] to-[#0499a3] bg-clip-text text-transparent">
                Website
              </span>
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              A clear and structured process from initial idea to final launch.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">

            {process.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#06bcc9]/20 hover:shadow-lg"
              >

                <span className="text-4xl font-black text-[#cffafe]">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>

              </motion.div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          FEATURES
      ========================================================= */}
      <section className="bg-slate-50 py-20 lg:py-15">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <Monitor className="h-9 w-9 text-[#06bcc9]" />

              <h3 className="mt-6 text-xl font-bold">
                Responsive Design
              </h3>

              <p className="mt-3 leading-relaxed text-slate-600">
                Your website will look and perform beautifully on desktops,
                tablets and smartphones.
              </p>
            </div>


            <div className="rounded-3xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <Settings className="h-9 w-9 text-[#06bcc9]" />

              <h3 className="mt-6 text-xl font-bold">
                Easy Management
              </h3>

              <p className="mt-3 leading-relaxed text-slate-600">
                Flexible and maintainable solutions that make it easy to
                manage and grow your website.
              </p>
            </div>


            <div className="rounded-3xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <Zap className="h-9 w-9 text-[#06bcc9]" />

              <h3 className="mt-6 text-xl font-bold">
                High Performance
              </h3>

              <p className="mt-3 leading-relaxed text-slate-600">
                Optimized code, fast loading and efficient architecture for a
                smooth digital experience.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-white px-6 pt-15 lg:pb-15">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#0499a3] via-[#06bcc9] to-[#0499a3] px-8 py-16 text-center text-white md:px-16">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-4xl font-bold md:text-5xl">
              Ready to Build Your Website?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
              Let's turn your idea into a high-performing digital experience
              that helps your business grow.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-[#0499a3] transition-all hover:scale-105 hover:bg-slate-100"
            >
              Let's Talk
              <ArrowRight className="h-5 w-5" />
            </Link>

          </motion.div>

        </div>

      </section>

    </div>
  );
};

export default WebDevelopment;