import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Users,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  Search,
  MousePointerClick,
  Mail,
  Filter,
  UserPlus,
  Zap,
} from "lucide-react";

const LeadGeneration = () => {
  const leadGenerationServices = [
    {
      icon: Search,
      title: "Lead Research",
      text: "Identify high-quality prospects that match your ideal customer profile.",
    },
    {
      icon: Target,
      title: "Targeted Campaigns",
      text: "Reach the right audience with highly targeted lead generation campaigns.",
    },
    {
      icon: MousePointerClick,
      title: "Landing Pages",
      text: "Create conversion-focused landing pages designed to capture more leads.",
    },
    {
      icon: Mail,
      title: "Email Outreach",
      text: "Connect with potential customers through personalized outreach campaigns.",
    },
    {
      icon: Filter,
      title: "Lead Qualification",
      text: "Filter and qualify prospects so your sales team focuses on the best opportunities.",
    },
    {
      icon: BarChart3,
      title: "Lead Analytics",
      text: "Track lead performance and optimize campaigns for better conversion rates.",
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: "Reach Your Ideal Customers",
      text: "We help you connect with people and businesses that are most likely to become your customers.",
    },
    {
      icon: UserPlus,
      title: "Generate Quality Leads",
      text: "Our strategies focus on attracting qualified prospects instead of just increasing traffic.",
    },
    {
      icon: TrendingUp,
      title: "Increase Sales Opportunities",
      text: "Turn interested prospects into valuable sales conversations for your business.",
    },
    {
      icon: BarChart3,
      title: "Track Every Result",
      text: "Monitor campaign performance and continuously improve your lead generation process.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#042f33] pt-28 pb-20 lg:pt-32 lg:pb-24">

        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#06bcc9]/20 blur-[120px]" />

          <div className="absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-[#06bcc9]/15 blur-[120px]" />

          <div className="absolute bottom-0 left-0 h-[300px] w-[400px] rounded-full bg-[#0499a3]/20 blur-[100px]" />
        </div>

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-6xl text-center"
          >

            {/* Badge */}
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
              Lead Generation
            </span>

            {/* Heading */}
            <h1 className="mt-10 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[64px]">

              Generate More Leads.

              <span className="block text-[#06bcc9]">
                Grow Your Business Faster.
              </span>

            </h1>

            {/* Description */}
            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-cyan-50 sm:text-lg md:text-xl">
              We help businesses attract, engage, and convert high-quality
              prospects into valuable sales opportunities with powerful
              lead generation strategies.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#06bcc9] px-7 py-4 font-bold text-white shadow-xl shadow-[#06bcc9]/30 transition-all duration-300 hover:scale-105 hover:bg-[#0499a3]"
              >
                Get More Leads
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

            </div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          ABOUT SECTION
      ===================================================== */}
      <section className="bg-white py-20 lg:py-15">

        <div className="mx-auto max-w-7xl px-6">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >

            <span className="inline-flex rounded-full bg-[#e6f9fa] px-4 py-2 text-sm font-semibold text-[#06bcc9]">
              About Lead Generation
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">

              More Than Just Traffic.

              <span className="text-[#06bcc9]">
                {" "}More Qualified Leads.
              </span>

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              Lead generation is about finding the right people, capturing
              their interest, and turning them into potential customers.
              Our strategies are designed to build a consistent pipeline of
              qualified leads for your business.
            </p>

          </motion.div>


          {/* Benefits */}
          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">

            {/* Left Visual */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >

              <div className="relative flex h-[360px] w-[360px] items-center justify-center sm:h-[420px] sm:w-[420px]">

                {/* Glow */}
                <div className="absolute inset-10 rounded-full bg-[#06bcc9]/20 blur-3xl" />

                {/* Main Card */}
                <div className="relative w-[280px] rounded-3xl border border-[#06bcc9]/20 bg-white p-5 shadow-2xl sm:w-[320px]">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs font-medium text-slate-400">
                        Qualified Leads
                      </p>

                      <p className="mt-1 text-3xl font-bold text-slate-900">
                        +120%
                      </p>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e6f9fa]">
                      <UserPlus className="h-6 w-6 text-[#06bcc9]" />
                    </div>

                  </div>

                  {/* Chart */}
                  <div className="mt-8 flex h-36 items-end gap-3">

                    <div className="h-[30%] flex-1 rounded-t-lg bg-[#bceff2]" />
                    <div className="h-[45%] flex-1 rounded-t-lg bg-[#8de2e7]" />
                    <div className="h-[52%] flex-1 rounded-t-lg bg-[#5bd5dc]" />
                    <div className="h-[68%] flex-1 rounded-t-lg bg-[#2acbd3]" />
                    <div className="h-[85%] flex-1 rounded-t-lg bg-[#06bcc9]" />
                    <div className="h-full flex-1 rounded-t-lg bg-gradient-to-t from-[#0499a3] to-[#06bcc9]" />

                  </div>

                  <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>

                </div>


                {/* Floating Target */}
                <div className="absolute left-3 top-20 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl sm:left-0">
                  <Target className="h-8 w-8 text-[#06bcc9]" />
                </div>


                {/* Floating Lead */}
                <div className="absolute bottom-16 right-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl sm:right-0">
                  <Users className="h-8 w-8 text-[#06bcc9]" />
                </div>

              </div>

            </motion.div>


            {/* Right Benefits */}
            <div className="space-y-2">

              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex gap-5 border-b border-slate-100 py-5 last:border-0"
                  >

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e6f9fa] transition-all duration-300 group-hover:bg-[#c8f3f5]">
                      <Icon className="h-6 w-6 text-[#06bcc9]" />
                    </div>

                    <div>

                      <h3 className="text-lg font-bold text-slate-900">
                        {benefit.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {benefit.text}
                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SERVICES SECTION
      ===================================================== */}
      <section
        id="lead-generation-services"
        className="bg-white pb-24 pt-10 lg:pt-16"
      >

        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >

            <span className="inline-flex rounded-full bg-[#e6f9fa] px-4 py-2 text-sm font-semibold text-[#06bcc9]">
              What We Offer
            </span>

            <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">

              Complete

              <span className="text-[#06bcc9]">
                {" "}Lead Generation
              </span>

              {" "}Solutions

            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-600">
              Everything you need to attract, capture, qualify, and convert
              more potential customers.
            </p>

          </motion.div>


          {/* Service Cards */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

            {leadGenerationServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#06bcc9]/40 hover:shadow-xl"
                >

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e6f9fa] transition-all duration-300 group-hover:bg-[#c8f3f5]">

                    <Icon className="h-7 w-7 text-[#06bcc9]" />

                  </div>

                  <h3 className="mt-5 text-base font-bold leading-6 text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.text}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}
      <section className="bg-slate-50 py-20 lg:py-15">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <span className="text-sm font-bold uppercase tracking-widest text-[#06bcc9]">
                Why Choose Us
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                Lead Generation That Creates
                <span className="block text-[#06bcc9]">
                  Real Sales Opportunities
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                We combine strategy, technology, data, and conversion-focused
                marketing to help businesses build a consistent pipeline of
                high-quality leads.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Targeted audience research",
                  "High-quality lead generation",
                  "Conversion-focused landing pages",
                  "Lead qualification strategies",
                  "Transparent performance reporting",
                  "Continuous campaign optimization",
                ].map((item) => (
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


            {/* Right CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-[#06bcc9] p-8 text-white sm:p-10"
            >

              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

              <div className="relative">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                  <Zap className="h-7 w-7" />
                </div>

                <h3 className="mt-7 text-3xl font-bold">
                  Ready To Generate More Leads?
                </h3>

                <p className="mt-4 leading-7 text-cyan-50">
                  Let's build a powerful lead generation strategy that helps
                  your business attract qualified prospects and create more
                  sales opportunities.
                </p>

                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center rounded-full bg-white px-6 py-3.5 font-bold text-[#0499a3] transition hover:scale-105"
                >
                  Start Generating Leads
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#06bcc9] px-8 py-14 text-center text-white md:px-14">

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready To Generate More Leads?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-cyan-50">
            Build a stronger sales pipeline with a lead generation strategy
            designed specifically for your business goals.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-white px-7 py-4 font-bold text-[#0499a3] shadow-xl transition hover:scale-105"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

        </div>

      </section>

    </div>
  );
};

export default LeadGeneration;