import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Palette,
  PenTool,
  Lightbulb,
  Layers,
  Target,
  Sparkles,
  Eye,
  MessageSquare,
  Heart,
} from "lucide-react";

const Branding = () => {
  const services = [
    {
      icon: Palette,
      number: "01",
      title: "Brand Identity",
      description:
        "We create memorable brand identities that communicate your values, personality, and vision.",
      features: [
        "Brand Strategy",
        "Visual Identity",
        "Brand Guidelines",
        "Color Systems",
      ],
    },
    {
      icon: PenTool,
      number: "02",
      title: "Logo Design",
      description:
        "Create a powerful and recognizable logo that gives your business a strong visual presence.",
      features: [
        "Custom Logo Design",
        "Logo Variations",
        "Typography",
        "Icon Design",
      ],
    },
    {
      icon: MessageSquare,
      number: "03",
      title: "Brand Messaging",
      description:
        "Build a clear and consistent brand voice that connects with your audience and builds trust.",
      features: [
        "Brand Voice",
        "Messaging Strategy",
        "Taglines",
        "Content Direction",
      ],
    },
    {
      icon: Layers,
      number: "04",
      title: "Marketing Collateral",
      description:
        "Professional visual assets designed to create consistency across every customer touchpoint.",
      features: [
        "Business Materials",
        "Social Media Graphics",
        "Presentations",
        "Campaign Assets",
      ],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discover",
      description:
        "We learn about your business, audience, competitors, goals, and market position.",
      icon: Eye,
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "We define the direction, positioning, personality, and foundation of your brand.",
      icon: Target,
    },
    {
      number: "03",
      title: "Create",
      description:
        "Our creative team transforms strategy into a powerful and consistent visual identity.",
      icon: Sparkles,
    },
    {
      number: "04",
      title: "Launch",
      description:
        "We prepare your brand assets and help you launch with confidence across every platform.",
      icon: RocketIcon,
    },
  ];

  return (
    <main className="overflow-hidden bg-white">

      {/* =========================================
          HERO SECTION
      ========================================== */}

      <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden border-b-4 border-slate-100 bg-[#0d3439] pt-15">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,188,201,0.16),transparent_55%)]" />

        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 inline-flex items-center rounded-full border border-[#06bcc9]/30 bg-[#06bcc9]/10 px-6 py-2.5 text-sm font-semibold text-slate-300 shadow-lg backdrop-blur-sm"
          >
            Branding
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-6xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Build a Brand That

            <br />

            <span className="bg-gradient-to-r from-[#38c7d2] to-[#78d9e5] bg-clip-text text-transparent">
              Makes an Impact
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mx-auto mt-8 max-w-4xl text-base leading-relaxed text-slate-200 sm:text-lg md:text-xl"
          >
            We create powerful brand identities and memorable visual experiences
            that help businesses stand out, connect with their audience, and
            build lasting relationships.
          </motion.p>

        </div>
      </section>


      {/* =========================================
          INTRO SECTION
      ========================================== */}

      <section className="relative py-24 lg:py-15">

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-5 inline-block rounded-full bg-[#e6f9fa] px-4 py-2 text-sm font-semibold text-[#06bcc9]">
              Strategic Branding
            </span>

            <h2 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              More Than a Logo.
              <br />

              <span className="text-[#06bcc9]">
                A Complete Brand Experience.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Your brand is how people see, feel, and remember your business.
              We combine strategy, creativity, and design to build a strong
              identity that creates meaningful connections.
            </p>

            <p className="mt-5 leading-relaxed text-slate-500">
              From visual identity and logo design to messaging and brand
              strategy, we create cohesive experiences that help your business
              grow with confidence.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {[
                "Clear Brand Positioning",
                "Consistent Visual Identity",
                "Stronger Customer Trust",
                "Memorable Brand Presence",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#06bcc9]" />

                  <span className="font-medium">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#06bcc9] px-7 py-4 font-semibold text-white shadow-lg shadow-[#06bcc9]/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0499a3]"
            >
              Start Your Branding Project

              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>


          {/* Right Visual */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#06bcc9]/10 blur-3xl" />

            <div className="relative rounded-[2rem] border border-[#06bcc9]/10 bg-gradient-to-br from-[#f4fcfc] to-white p-8 shadow-xl lg:p-12">

              {/* Top Card */}

              <div className="rounded-3xl bg-[#0d3439] p-8 text-white shadow-xl">

                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#06bcc9]">
                    <Sparkles className="h-7 w-7 text-white" />
                  </div>

                  <span className="text-sm text-slate-400">
                    Brand Identity
                  </span>

                </div>

                <h3 className="mt-10 text-4xl font-bold">
                  Your Brand
                </h3>

                <p className="mt-3 text-slate-300">
                  Built to be remembered.
                </p>

              </div>


              {/* Bottom Stats */}

              <div className="mt-6 grid grid-cols-2 gap-5">

                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

                  <Palette className="h-8 w-8 text-[#06bcc9]" />

                  <h4 className="mt-4 text-2xl font-bold text-slate-900">
                    Identity
                  </h4>

                  <p className="mt-2 text-sm text-slate-500">
                    Visual systems that create recognition.
                  </p>

                </div>


                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

                  <Heart className="h-8 w-8 text-[#06bcc9]" />

                  <h4 className="mt-4 text-2xl font-bold text-slate-900">
                    Connection
                  </h4>

                  <p className="mt-2 text-sm text-slate-500">
                    Experiences your audience remembers.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =========================================
          BRANDING SERVICES
      ========================================== */}

      <section className="bg-[#f7fbfb] py-24 lg:py-15">

        <div className="mx-auto max-w-7xl px-6">

          {/* Heading */}

          <div className="mx-auto mb-16 max-w-3xl text-center">

            <span className="inline-block rounded-full bg-[#e6f9fa] px-4 py-2 text-sm font-semibold text-[#06bcc9]">
              What We Do
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
              Branding Services Built
              <span className="text-[#06bcc9]">
                {" "}For Growth
              </span>
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Everything you need to build a strong, consistent, and memorable
              brand.
            </p>

          </div>


          {/* Service List */}

          <div className="space-y-6">

            {services.map((service, index) => {

              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:border-[#06bcc9]/40 hover:shadow-xl"
                >

                  <div className="grid items-center gap-8 p-8 md:grid-cols-[100px_1fr_auto] lg:p-10">

                    {/* Number */}

                    <div className="flex items-center gap-4 md:block">

                      <span className="text-sm font-bold text-[#06bcc9]">
                        {service.number}
                      </span>

                      <div className="mt-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e6f9fa] transition-all duration-300 group-hover:bg-[#06bcc9]">

                        <Icon className="h-7 w-7 text-[#06bcc9] group-hover:text-white" />

                      </div>

                    </div>


                    {/* Content */}

                    <div>

                      <h3 className="text-2xl font-bold text-slate-900">
                        {service.title}
                      </h3>

                      <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
                        {service.description}
                      </p>

                    </div>


                    {/* Features */}

                    <div className="grid gap-2 sm:grid-cols-2 md:min-w-[280px]">

                      {service.features.map((feature) => (

                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-slate-600"
                        >

                          <CheckCircle2 className="h-4 w-4 text-[#06bcc9]" />

                          {feature}

                        </div>

                      ))}

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =========================================
          WHY BRANDING
      ========================================== */}

      <section className="py-24 lg:py-15">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-16 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="inline-block rounded-full bg-[#e6f9fa] px-4 py-2 text-sm font-semibold text-[#06bcc9]">
                Why Branding Matters
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                Build Trust.
                <br />

                <span className="text-[#06bcc9]">
                  Create Recognition.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                Strong branding helps customers understand who you are and why
                they should choose your business.
              </p>

            </div>


            {/* Right */}

            <div className="grid gap-5 sm:grid-cols-2">

              {[
                {
                  icon: Target,
                  title: "Clear Positioning",
                  text: "Stand apart from competitors with a clear brand position.",
                },
                {
                  icon: Heart,
                  title: "Customer Trust",
                  text: "Build credibility and stronger relationships with your audience.",
                },
                {
                  icon: Eye,
                  title: "Recognition",
                  text: "Create a consistent identity people instantly recognize.",
                },
                {
                  icon: Lightbulb,
                  title: "Long-Term Growth",
                  text: "Build a strong foundation that supports business growth.",
                },
              ].map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#06bcc9]/20 hover:shadow-lg"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e6f9fa]">

                      <Icon className="h-6 w-6 text-[#06bcc9]" />

                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {item.text}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          PROCESS SECTION
      ========================================== */}

      <section className="relative overflow-hidden bg-[#0d3439] py-24 lg:py-15">

        {/* Background */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <div className="mx-auto mb-16 max-w-3xl text-center">

            <span className="inline-block rounded-full border border-[#06bcc9]/30 bg-[#06bcc9]/10 px-4 py-2 text-sm font-semibold text-[#78d9e5]">
              Our Process
            </span>

            <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
              From Vision To
              <span className="text-[#38c7d2]">
                {" "}Identity
              </span>
            </h2>

            <p className="mt-5 text-lg text-slate-300">
              A simple and strategic process designed to bring your brand to
              life.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {process.map((step, index) => {

              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm"
                >

                  <span className="text-sm font-bold text-[#38c7d2]">
                    {step.number}
                  </span>

                  <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#06bcc9]">

                    <Icon className="h-7 w-7 text-white" />

                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {step.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =========================================
          CTA SECTION
      ========================================== */}

      <section className="py-24 lg:py-15">

        <div className="mx-auto max-w-7xl px-6">

          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#06bcc9] to-[#0499a3] px-8 py-16 text-center shadow-2xl lg:px-16 lg:py-24">

            {/* Background Elements */}

            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-2xl" />

            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-2xl" />

            <div className="relative z-10 mx-auto max-w-3xl">

              <h2 className="text-4xl font-bold text-white md:text-5xl">
                Ready To Build A Brand
                <br />
                People Remember?
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Let's create a powerful brand identity that helps your business
                stand out and grow.
              </p>

              <Link
                to="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#0499a3] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Let's Get Started

                <ArrowRight className="h-5 w-5" />

              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};


/* =========================================
    ROCKET ICON
========================================= */

function RocketIcon({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5.5-2 5.5s4.24-.5 5.5-2c.71-.84.7-2.1-.09-2.91a2.18 2.18 0 0 0-3-.09Z" />

      <path d="m12 15-3-3a22 22 0 0 1 2-3.5A12.9 12.9 0 0 1 22 2c0 2.72-.78 7.5-6.5 11.5A22.4 22.4 0 0 1 12 15Z" />

      <path d="M9 12H4s.55-3.03 2-4c1.72-1.15 4-1 4-1" />

      <path d="M12 15v5s3.03-.55 4-2c1.15-1.72 1-4 1-4" />

      <circle
        cx="16"
        cy="8"
        r="1"
      />
    </svg>
  );
}


export default Branding;