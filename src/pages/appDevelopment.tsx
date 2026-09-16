import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Code2,
  Layers,
  ShieldCheck,
  Zap,
  Users,
  Globe,
  Database,
  Settings,
  Rocket,
  MonitorSmartphone,
  Cloud,
} from "lucide-react";

const AppDevelopment = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Android App Development",
      description:
        "Build powerful, secure and high-performing Android applications designed for modern businesses and users.",
    },
    {
      icon: Smartphone,
      title: "iOS App Development",
      description:
        "Create premium iOS applications with smooth performance and exceptional user experiences.",
    },
    {
      icon: Layers,
      title: "Cross-Platform Apps",
      description:
        "Develop applications that work seamlessly across Android and iOS using modern cross-platform technologies.",
    },
    {
      icon: Code2,
      title: "Custom App Development",
      description:
        "Get fully customized mobile applications designed specifically around your business requirements.",
    },
    {
      icon: Database,
      title: "Backend & API Development",
      description:
        "Build scalable backend systems, secure APIs and reliable databases to power your mobile application.",
    },
    {
      icon: Settings,
      title: "App Maintenance",
      description:
        "Keep your application secure, updated and optimized with continuous support and maintenance.",
    },
  ];

  const technologies = [
    "React Native",
    "Flutter",
    "Kotlin",
    "Swift",
    "Firebase",
    "Node.js",
    "MongoDB",
    "REST APIs",
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We understand your business, audience, requirements and app goals.",
    },
    {
      step: "02",
      title: "Planning & Design",
      description:
        "We create user-friendly wireframes and engaging UI/UX designs.",
    },
    {
      step: "03",
      title: "Development",
      description:
        "Our developers build secure, scalable and high-performing applications.",
    },
    {
      step: "04",
      title: "Testing",
      description:
        "We test your app across devices to ensure quality and reliability.",
    },
    {
      step: "05",
      title: "Launch & Support",
      description:
        "We launch your application and provide continuous support and updates.",
    },
  ];

  const benefits = [
    "Custom mobile app solutions",
    "Android and iOS development",
    "Modern and intuitive UI/UX",
    "Secure and scalable architecture",
    "High-performance applications",
    "Ongoing support and maintenance",
  ];

  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* ================= HERO SECTION ================= */}

      <section className="relative min-h-[515px] overflow-hidden bg-[#123b40] pt-20">

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#16494f] via-[#123b40] to-[#0f3034]" />

        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255, 255, 255, 0.045) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.045) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-[515px] max-w-7xl flex-col items-center justify-center px-6 pb-10 text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 inline-flex items-center rounded-full border border-[#06bcc9]/30 bg-[#06bcc9]/10 px-5 py-2"
          >
            <span className="text-sm font-semibold text-[#b7cdd1]">
              App Development
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-7xl text-5xl font-bold leading-[1.15] tracking-tight text-[#f2f4f4] md:text-6xl lg:text-7xl"
          >
            Building the Future with{" "}

            <span className="bg-gradient-to-r from-[#06bcc9] via-[#35c9d5] to-[#67dbe4] bg-clip-text text-transparent">
              Powerful
            </span>

            <br />

            <span className="bg-gradient-to-r from-[#4bc9d6] to-[#8ae7ed] bg-clip-text text-transparent">
              App Development
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-8 max-w-3xl text-base leading-7 tracking-wide text-[#d3dee0] md:text-lg"
          >
            We create modern, high-performance and scalable mobile applications
            that help businesses build a strong digital presence and achieve
            measurable growth.
          </motion.p>

        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}

      <section className="py-20 lg:py-15">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-bold uppercase tracking-widest text-[#06bcc9]">
                Mobile Innovation
              </span>

              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                Mobile Apps That Help
                <span className="block text-[#06bcc9]">
                  Your Business Grow
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg leading-relaxed text-slate-600">
                In today's mobile-first world, a powerful mobile application
                can transform the way your customers interact with your
                business.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Our app development team creates modern, intuitive and scalable
                applications designed to deliver seamless experiences across
                Android and iOS devices.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section className="bg-slate-50 py-20 lg:py-15">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[#06bcc9]/10 px-4 py-2 text-sm font-semibold text-[#049ca8]">
              Our Services
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              Complete Mobile App
              <span className="block text-[#06bcc9]">
                Development Solutions
              </span>
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              From idea and design to development and launch, we provide
              complete mobile app development services.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#06bcc9]/30 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#06bcc9]/10 transition-all group-hover:bg-[#06bcc9]">
                    <Icon className="h-7 w-7 text-[#06bcc9] group-hover:text-white" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 font-semibold text-[#06bcc9]">
                    Learn More

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="py-20 lg:py-15">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-[3rem] bg-[#06bcc9]/10 blur-2xl" />

              <div className="relative rounded-[2.5rem] bg-slate-950 p-8 text-white md:p-12">

                <div className="grid grid-cols-2 gap-5">

                  <div className="rounded-2xl bg-white/10 p-6">
                    <Zap className="h-8 w-8 text-[#06bcc9]" />

                    <h3 className="mt-5 text-xl font-bold">
                      Fast
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      Optimized performance
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#06bcc9] p-6">
                    <ShieldCheck className="h-8 w-8" />

                    <h3 className="mt-5 text-xl font-bold">
                      Secure
                    </h3>

                    <p className="mt-2 text-sm text-white/80">
                      Protected systems
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-6">
                    <Cloud className="h-8 w-8 text-[#06bcc9]" />

                    <h3 className="mt-5 text-xl font-bold">
                      Scalable
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      Built for growth
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-6">
                    <Globe className="h-8 w-8 text-[#06bcc9]" />

                    <h3 className="mt-5 text-xl font-bold">
                      Reliable
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      Quality focused
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-bold uppercase tracking-widest text-[#06bcc9]">
                Why Choose Us
              </span>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Built for Performance,
                <span className="block text-[#06bcc9]">
                  Designed for Users
                </span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                We combine modern technologies, creative design and strategic
                thinking to build applications that create real business value.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#06bcc9]" />

                    <span className="font-medium text-slate-700">
                      {benefit}
                    </span>
                  </div>
                ))}

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}

      <section className="bg-[#052f34] py-20 lg:py-15">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-[#67e8f9]">
            Technology Stack
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Modern Technology.
            <span className="block text-[#06bcc9]">
              Powerful Applications.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-cyan-50/60">
            We use modern technologies and reliable frameworks to build
            scalable, secure and high-performing applications.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            {technologies.map((technology) => (
              <div
                key={technology}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition-all hover:border-[#06bcc9] hover:bg-[#06bcc9]/10"
              >
                {technology}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}

      <section className="bg-slate-50 py-20 lg:py-15">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[#06bcc9]/10 px-4 py-2 text-sm font-semibold text-[#049ca8]">
              Our Process
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              From Idea to
              <span className="block text-[#06bcc9]">
                Successful App Launch
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">

            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-4xl font-black text-[#06bcc9]/20">
                  {item.step}
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

      {/* ================= CTA ================= */}

      <section className="bg-white px-6 py-20 lg:py-15">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-[#049ca8] via-[#06bcc9] to-[#03818b] px-8 py-16 text-center text-white md:px-16 lg:py-20">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold md:text-5xl">
              Have an App Idea?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85">
              Let's transform your idea into a powerful mobile application that
              delivers real value to your business and users.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-[#049ca8] transition-all duration-300 hover:scale-105"
            >
              Start Your Project

              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>

        </div>
      </section>

    </main>
  );
};

export default AppDevelopment;