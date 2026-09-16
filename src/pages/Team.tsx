import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Globe, Briefcase } from 'lucide-react';

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
            Our Team
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Meet the{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Experts
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our talented team of professionals is dedicated to delivering exceptional results for our clients.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const LeadershipTeam = () => {
  const leaders = [
    {
      name: 'Alex Mitchell',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in tech. Former VP at Google, Stanford CS graduate.',
      image: '/images/ceo.jpg',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Tech architect and innovation driver. Ex-Amazon principal engineer, MIT PhD.',
      image: '/images/cto.jpg',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Michael Rivera',
      role: 'Head of Marketing',
      bio: 'Marketing strategist who scaled 3 startups to unicorn status. Wharton MBA.',
      image: '/images/marketing-head.jpg',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Emily Zhang',
      role: 'VP of Design',
      bio: 'Award-winning designer. Former design lead at Apple. Parsons graduate.',
      image: '/images/design-head.jpg',
      social: { linkedin: '#', twitter: '#' },
    },
  ];

  return (
    <section className="py-15 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-violet-100 text-violet-600 rounded-full text-sm font-semibold mb-4">
            Leadership
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our Leadership{' '}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Meet the visionaries driving our success and leading our talented teams.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-violet-200/50 transition-all duration-500">
                {/* Avatar */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Social Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <a href={leader.social.linkedin} className="p-3 bg-white rounded-full hover:bg-violet-100 transition-colors">
                      <svg className="h-5 w-5 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
                      </svg>
                    </a>
                    <a href={leader.social.twitter} className="p-3 bg-white rounded-full hover:bg-violet-100 transition-colors">
                      <svg className="h-5 w-5 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{leader.name}</h3>
                  <p className="text-violet-600 font-medium mb-3">{leader.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DepartmentSection = () => {
  const departments = [
    {
      name: 'Engineering',
      headcount: 80,
      description: 'Our engineering team builds scalable, robust solutions using cutting-edge technologies.',
      icon: Briefcase,
      color: 'violet',
    },
    {
      name: 'Design',
      headcount: 25,
      description: 'Creative minds crafting beautiful, intuitive user experiences and brand identities.',
      icon: Award,
      color: 'fuchsia',
    },
    {
      name: 'Marketing',
      headcount: 35,
      description: 'Strategic marketers driving growth through data-driven campaigns and content.',
      icon: Users,
      color: 'cyan',
    },
    {
      name: 'Operations',
      headcount: 40,
      description: 'Efficient operators ensuring smooth delivery and exceptional client service.',
      icon: Globe,
      color: 'emerald',
    },
  ];

  return (
    <section className="py-15 bg-gradient-to-br from-slate-50 to-violet-50">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-fuchsia-100 text-fuchsia-600 rounded-full text-sm font-semibold mb-4">
            Departments
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">Teams</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className={`p-4 bg-${dept.color}-100 rounded-2xl w-fit mb-6`}>
                <dept.icon className={`h-8 w-8 text-${dept.color}-600`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{dept.name}</h3>
              <p className="text-violet-600 font-semibold mb-3">{dept.headcount}+ Members</p>
              <p className="text-slate-600 leading-relaxed">{dept.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CultureSection = () => {
  const perks = [
    "Flexible Remote Work",
    "Unlimited PTO",
    "Health & Wellness Benefits",
    "Learning & Development",
    "Team Building Events",
    "Stock Options",
    "Annual Retreats",
    "Mental Health Support",
  ];

  const cultureCards = [
    {
      icon: "✦",
      title: "Innovation",
      description:
        "We embrace new ideas, modern technologies, and creative approaches to build better digital solutions.",
      gradient: "from-violet-600 to-fuchsia-600",
    },
    {
      icon: "◉",
      title: "Collaboration",
      description:
        "We believe great results come from teamwork, open communication, and sharing ideas.",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: "↗",
      title: "Growth",
      description:
        "We encourage continuous learning and help our people develop their skills and careers.",
      gradient: "from-fuchsia-500 to-pink-600",
    },
    {
      icon: "✓",
      title: "Excellence",
      description:
        "We focus on quality, reliability, and delivering meaningful digital experiences for our clients.",
      gradient: "from-indigo-500 to-violet-600",
    },
  ];

  return (
    <section className="py-15 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* =========================
              LEFT CONTENT
          ========================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            {/* Badge */}
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-600 rounded-full text-sm font-semibold mb-4">
              Culture & Perks
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Why Work at{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Highpath Solution
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We believe that happy employees create exceptional work. Our
              culture is built on collaboration, innovation, and mutual
              respect. We create an environment where talented people can
              learn, grow, and do their best work.
            </p>

            {/* Perks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {perks.map((perk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.4,
                  }}
                  className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300"
                >

                  {/* Bullet */}
                  <div className="w-2.5 h-2.5 shrink-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full" />

                  <span className="text-slate-700 font-medium text-sm">
                    {perk}
                  </span>

                </motion.div>
              ))}

            </div>

          </motion.div>


          {/* =========================
              RIGHT CULTURE CARDS
          ========================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            {/* Decorative Glow */}
            <div className="absolute -inset-10 bg-gradient-to-r from-violet-100 via-fuchsia-100 to-cyan-100 rounded-full blur-3xl opacity-50" />

            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-5">

              {cultureCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.5,
                  }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${card.gradient} p-7 min-h-[250px] flex flex-col justify-between shadow-xl`}
                >

                  {/* Decorative Circle */}
                  <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-white/10" />

                  <div className="relative">

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-7 border border-white/10">
                      <span className="text-2xl font-bold text-white">
                        {card.icon}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-6 text-white/80">
                      {card.description}
                    </p>

                  </div>

                  {/* Bottom Line */}
                  <div className="relative mt-6">
                    <div className="h-px w-full bg-white/20" />
                  </div>

                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-15 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-600 relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 text-center relative">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/careers">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-violet-600 font-bold rounded-full shadow-xl flex items-center gap-2"
              >
                View Open Positions <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function Team() {
  return (
    <>
      <HeroSection />
      <LeadershipTeam />
      <DepartmentSection />
      <CultureSection />
      <CTASection />
    </>
  );
}
