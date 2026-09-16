import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Megaphone,
  Smartphone,
  Cloud,
  Zap,
  Globe,
  Users,
  Award,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Brain,
  Rocket,
  Play,
  Quote,
  Star,
  Send,
  MessageCircle,
  Layers,
  Monitor,
  Database,
  Eye,
  Bot,
  Clock,
  Search,
  CheckCheck,
} from 'lucide-react';

/* ─── Scroll Progress ─── */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 to-cyan-500 origin-left z-[60]" style={{ scaleX }} />;
};

/* ─── Animated Counter ─── */
const AnimatedCounter = ({ target, duration = 2 }: { target: number; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const inc = target / (duration * 60);
    const timer = setInterval(() => {
      start += inc;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

/* ─── Magnetic Button ─── */
const MagneticButton = ({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const handleMouse = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (r) setPos({ x: (e.clientX - r.left - r.width / 2) * 0.12, y: (e.clientY - r.top - r.height / 2) * 0.12 });
  };
  return (
    <motion.button ref={ref} onMouseMove={handleMouse} onMouseLeave={() => setPos({ x: 0, y: 0 })} animate={pos}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }} className={className} onClick={onClick}>
      {children}
    </motion.button>
  );
};

/* ─── Chatbox Widget ─── */
// const ChatWidget = () => {
//   const [open, setOpen] = useState(false);
//   const [showBubble, setShowBubble] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(() => setShowBubble(true), 3000);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
//       {/* Popup Message */}
//       <AnimatePresence>
//         {showBubble && !open && (
//           <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }}
//             className="bg-white rounded-2xl shadow-2xl shadow-black/10 p-4 w-[280px] border border-slate-100 relative mb-1">
//             <button onClick={() => setShowBubble(false)} className="absolute top-2 right-3 text-slate-400 hover:text-slate-600 text-lg leading-none">×</button>
//             <div className="flex items-start gap-3">
//               <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
//                 <span className="text-white font-bold text-xs">H</span>
//               </div>
//               <div className="min-w-0">
//                 <p className="font-semibold text-slate-900 text-[13px] leading-snug pr-4">Hi there, Welcome to HighPath Solutions!</p>
//                 <p className="text-slate-600 text-[13px] mt-1 leading-snug">We're excited to turn your ideas into reality. What kind of project are you thinking about?</p>
//                 <p className="text-[13px] mt-1.5">Let's chat! 👋</p>
//                 <p className="text-[11px] text-slate-400 mt-1.5">Sarah • 2m</p>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Chat Window */}
//       <AnimatePresence>
//         {open && (
//           <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.9 }}
//             className="bg-white rounded-2xl shadow-2xl shadow-black/15 w-[calc(100vw-2rem)] max-w-[370px] max-h-[480px] flex flex-col overflow-hidden border border-slate-200 mb-1">
//             {/* Header */}
//             <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-white">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
//                     <Zap className="h-5 w-5" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold">HighPath Solutions </h4>
//                     <div className="flex items-center gap-1.5"><span className="w-2 h-2 bg-green-400 rounded-full"></span><span className="text-xs text-white/80">Online</span></div>
//                   </div>
//                 </div>
//                 <button onClick={() => setOpen(false)} className="hover:bg-white/20 rounded-lg p-1"><X className="h-5 w-5" /></button>
//               </div>
//             </div>
//             {/* Messages */}
//             <div className="flex-1 p-5 space-y-4 overflow-y-auto bg-slate-50 min-h-[250px]">
//               <div className="flex gap-3">
//                 <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
//                   <span className="text-white font-bold text-xs">H</span>
//                 </div>
//                 <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm max-w-[80%]">
//                   <p className="text-sm text-slate-700">Hi there! 👋 Welcome to HighPath Solutions. How can we help you today?</p>
//                   <span className="text-[10px] text-slate-400 mt-2 block">Sarah • Just now</span>
//                 </div>
//               </div>
//               <div className="flex gap-3">
//                 <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
//                   <span className="text-white font-bold text-xs">H</span>
//                 </div>
//                 <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm max-w-[80%]">
//                   <p className="text-sm text-slate-700">Looking for IT solutions, digital marketing, or a custom project? We're here to help!</p>
//                 </div>
//               </div>
//             </div>
//             {/* Input */}
//             <div className="p-4 border-t border-slate-200 bg-white">
//               <div className="flex gap-2">
//                 <input type="text" placeholder="Type a message..." className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                 <button className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl hover:shadow-lg transition-shadow">
//                   <Send className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Floating Button */}
//       <motion.button onClick={() => { setOpen(!open); setShowBubble(false); }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
//         className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-2xl shadow-blue-500/40 flex items-center justify-center text-white relative flex-shrink-0">
//         {!open ? <MessageCircle className="h-6 w-6" /> : <X className="h-6 w-6" />}
//         {!open && <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-red-500 rounded-full text-[9px] font-bold flex items-center justify-center border-2 border-white min-w-[18px] min-h-[18px]">1</span>}
//       </motion.button>
//     </div>
//   );
// };

/* ─── Navbar ─── */
// whatsapp icon
const WhatsAppButton = () => {
  const phoneNumber = "91987654xx";
  // const message =
  //   "Hello, I would like to know more about your services.";

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-4 right-4 z-50 w-14 h-14 bg-[#25D366] rounded-full shadow-2xl shadow-green-500/40 flex items-center justify-center text-white"
    >
      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-current"
        aria-hidden="true"
      >
        <path d="M16.003 3C8.822 3 3 8.82 3 16c0 2.3.602 4.545 1.745 6.52L3 29l6.665-1.715A12.94 12.94 0 0016.003 29C23.18 29 29 23.18 29 16S23.18 3 16.003 3zm0 23.67a10.62 10.62 0 01-5.414-1.48l-.388-.23-3.956 1.018 1.057-3.858-.252-.397A10.62 10.62 0 015.38 16C5.38 10.146 10.148 5.38 16.003 5.38c5.854 0 10.618 4.766 10.618 10.62 0 5.853-4.764 10.67-10.618 10.67zm5.822-7.95c-.318-.16-1.88-.928-2.17-1.033-.29-.107-.5-.16-.712.16-.21.318-.818 1.033-1.003 1.244-.184.213-.37.24-.685.08-.318-.16-1.34-.494-2.55-1.575-.942-.84-1.577-1.878-1.762-2.195-.184-.32-.02-.49.14-.65.143-.142.318-.37.478-.555.16-.185.212-.318.318-.53.107-.212.053-.398-.027-.558-.08-.16-.712-1.716-.976-2.35-.258-.618-.52-.534-.712-.544l-.606-.01c-.212 0-.557.08-.848.398-.29.318-1.11 1.086-1.11 2.65 0 1.563 1.136 3.073 1.294 3.285.16.212 2.236 3.415 5.42 4.79.758.327 1.35.522 1.812.668.762.242 1.456.208 2.004.126.61-.09 1.88-.77 2.145-1.51.264-.742.264-1.377.185-1.51-.08-.133-.292-.212-.61-.37z" />
      </svg>
    </motion.a>
  );
};

/* ─── Hero with Video Background ─── */
const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
  const fadeUp = { hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as const } } };

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover scale-110"
          poster="/images/hero-bg.jpg">
          <source src="https://videos.pexels.com/video-files/6561337/6561337-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/50"></div>
      </motion.div>

      <motion.div style={{ opacity, scale }} className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 w-full">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">Award-Winning IT & Marketing Agency</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
            Engineering the Next Generation of
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"> Digital Systems</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            HighPath Solutions engineers secure, scalable digital systems by combining strong architecture, data engineering, and AI capabilities, helping organizations move from strategy to reliable systems in production.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a href="#contact">
              <MagneticButton className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full shadow-2xl shadow-blue-500/40 flex items-center gap-2">
                Consult Ours Strategy Team <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </MagneticButton>
            </a>
            <a href="#portfolio">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 flex items-center gap-2 hover:bg-white/20 transition-all">
                <Play className="h-5 w-5" /> View Our Work
              </motion.button>
            </a>
          </motion.div>
        </motion.div>

        {/* Awards Row */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mt-16 pt-8 border-t border-white/10">
          <div className="flex gap-6 overflow-hidden">
            <motion.div className="flex gap-6 items-center" animate={{ x: [0, -600] }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}>
              {['TIME Fastest Growing', 'Deloitte Fast 50', 'ET Leadership Award', 'Forbes Recognized', 'Clutch Top Agency', 'TIME Fastest Growing', 'Deloitte Fast 50', 'ET Leadership Award', 'Forbes Recognized', 'Clutch Top Agency'].map((a, i) => (
                <div key={i} className="flex-shrink-0 px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <span className="text-white/60 text-sm font-medium whitespace-nowrap">{a}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

/* ─── Services Section (Appinventiv card style) ─── */
/* ─── Services Section ─── */
const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      desc: 'We build fast, secure, scalable, and high-performing websites tailored to your business goals and digital presence.',
      link: '/services/web-development',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      desc: 'We create powerful native and cross-platform mobile applications designed for performance, engagement, and long-term growth.',
      link: '/services/app-development',
    },
    {
      icon: Users,
      title: 'Lead Generation',
      desc: 'Our data-driven lead generation strategies help you attract qualified prospects and convert them into valuable customers.',
      link: '/services/lead-generation',
    },
    {
      icon: Megaphone,
      title: 'Social Media Management',
      desc: 'We manage your social media presence with strategic content, engaging campaigns, audience growth, and performance tracking.',
      link: '/services/social-media-management',
    },
    {
      icon: Sparkles,
      title: 'Branding',
      desc: 'We create memorable brand identities that help your business stand out, connect with customers, and build long-term trust.',
      link: '/services/branding',
    },
   {
  icon: Search,
  title: 'Search Engine Optimization',
  desc: 'Data-driven SEO strategies that improve search visibility, attract the right audience, and drive sustainable organic business growth.',
  link: '/services/search-engine-optimization',
},
  ];

  return (
    <section id="services" className="py-15 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Digital Solutions That Drive
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Business Growth
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-lg text-slate-600 leading-relaxed">
            From powerful websites and mobile applications to strategic
            marketing and branding, we create digital solutions that help
            businesses grow and succeed.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-slate-200 rounded-3xl overflow-hidden">

          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.7,
                ease: [0.33, 1, 0.68, 1] as const,
              }}
              className="group bg-white p-8 md:p-10 hover:bg-slate-50 transition-all duration-300"
            >

              {/* Icon */}
              <div className="mb-8">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:shadow-lg group-hover:shadow-blue-500/20">

                  <service.icon
                    className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.8}
                  />

                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed mb-8">
                {service.desc}
              </p>

              {/* Button */}
              <a
                href={service.link}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-900 rounded-full text-sm font-semibold text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300"
              >
                Explore Service

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

const CalendlySection = () => {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="calendly-section">
      <div className="calendly-container">
        <div className="section-heading">
          <span>BOOK A MEETING</span>
          <h2>Schedule a Meeting With Us</h2>
          <p>
            Choose a convenient time and connect with our team.
          </p>
        </div>

        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/lyb-developer"
          style={{
            minWidth: "320px",
            height: "700px",
          }}
        />
      </div>
    </section>
  );
};


/* ─── Industries Section (Appinventiv style interactive list) ─── */
const IndustriesSection = () => {
  const [active, setActive] = useState(0);

  const industries = [
    {
      name: 'Web Development',
      desc: 'We create modern, fast, scalable, and high-performing websites that help businesses establish a powerful digital presence, improve user experiences, increase engagement, and convert visitors into valuable customers through strategic design and advanced web technologies.',
      image: '/images/web-img.png',
    },
    {
      name: 'App Development',
      desc: 'We build powerful, user-friendly, and scalable mobile applications that help businesses connect with customers, streamline operations, and deliver seamless digital experiences across modern mobile platforms using reliable technologies and innovative development solutions.',
      image: '/images/app-img.png',
    },
    {
      name: 'eCommerce',
      desc: 'Our custom eCommerce solutions help businesses create powerful online shopping experiences, optimize customer journeys, improve product visibility, and increase conversions through personalized experiences, modern technology, seamless integrations, and scalable digital commerce platforms.',
      image: '/images/portfolio-1.jpg',
    },
    {
      name: 'Real Estate',
      desc: 'We develop modern real estate solutions that enhance property discovery, simplify customer interactions, streamline transactions, and improve business operations through virtual property experiences, intelligent platforms, predictive analytics, and user-friendly digital tools.',
      image: '/images/lead-img.png',
    },
    {
      name: 'Search Engine Optimization',
      desc: 'We help businesses improve their online visibility and achieve sustainable organic growth through data-driven search engine optimization strategies, including keyword research, on-page optimization, technical SEO, content optimization, link-building strategies, performance tracking, and continuous search ranking improvements.',
      image: '/images/seo-img.png',
    },
    {
      name: 'Social Media Management',
      desc: 'We help businesses build a strong and engaging online presence through strategic social media management, creative content creation, audience engagement, campaign planning, performance analysis, and data-driven strategies designed to increase brand awareness and business growth.',
      image: '/images/social-img.png',
    },
  ];

  return (
    <section id="industries" className="bg-slate-950 py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:mb-20"
        >
          <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Solving Complex Challenges
            <br />

            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Across Every Major Sector
            </span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-start gap-8 lg:grid-cols-[350px_1.4fr_1fr]">

          {/* Left Image */}
          <div className="hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="sticky top-32 overflow-hidden rounded-2xl shadow-2xl"
              >
                <img
                  src={industries[active].image}
                  alt={industries[active].name}
                  className="aspect-[3/4] w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center Industry List */}
          <div className="space-y-1">
            {industries.map((industry, index) => (
              <motion.button
                key={industry.name}
                onClick={() => setActive(index)}
                whileHover={{ x: 10 }}
                className={`block w-full rounded-xl px-4 py-5 text-left transition-all duration-300 ${
                  active === index
                    ? 'text-3xl font-bold text-white md:text-4xl'
                    : 'text-2xl font-medium text-slate-500 hover:text-slate-300 md:text-3xl'
                }`}
              >
                {industry.name}
              </motion.button>
            ))}
          </div>

          {/* Right Description */}
          <div className="hidden pt-8 lg:flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-xl"
              >
                <p className="text-lg leading-relaxed text-slate-300">
                  {industries[active].desc}
                </p>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-400 transition-all duration-300 hover:gap-3"
                >
                  Explore Solutions
                  <ArrowRight className="h-5 w-5" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Active Content */}
          <div className="lg:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mt-4"
              >
                <img
                  src={industries[active].image}
                  alt={industries[active].name}
                  className="mb-6 aspect-video w-full rounded-2xl object-cover"
                />

                <p className="text-lg leading-relaxed text-slate-300">
                  {industries[active].desc}
                </p>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-400 transition-all duration-300 hover:gap-3"
                >
                  Explore Solutions
                  <ArrowRight className="h-5 w-5" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};


/* ─── Stats Section ─── */
const StatsSection = () => {
  const stats = [
    { value: 12, suffix: '+', label: 'Years Experience', icon: Award },
    { value: 500, suffix: '+', label: 'Projects Delivered', icon: Rocket },
    { value: 200, suffix: '+', label: 'Technology Specialists', icon: Users },
    { value: 35, suffix: '+', label: 'Industries Served', icon: Globe },
    { value: 150, suffix: '+', label: 'AI Models Built', icon: Brain },
    { value: 15, suffix: '+', label: 'Global Awards', icon: Award },
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[150px]"></div>
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }} className="text-center">
              <s.icon className="h-6 w-6 text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1"><AnimatedCounter target={s.value} />{s.suffix}</div>
              <div className="text-slate-400 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── AI Ecosystem Section (dark, like SC2) ─── */
// const AISection = () => {
//   const cards = [
//     { icon: Bot, title: 'GenAI Integration', items: ['AI Agents', 'Chatbots', 'Coding Assistants'] },
//     { icon: Eye, title: 'Computer Vision', items: ['Quality Control', 'Facial Recognition', 'Object Detection'] },
//     { icon: Database, title: 'Data Engineering', items: ['Data Pipelines', 'Real-time Analytics', 'Data Lakes'] },
//   ];

//   return (
//     <section className="py-15 bg-slate-950 text-white relative overflow-hidden">
//       <div className="absolute inset-0">
//         <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[200px]"></div>
//       </div>

//       <div className="mx-auto max-w-7xl px-6 relative">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left visual */}
//           <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
//             className="relative aspect-square max-w-lg mx-auto">
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/10 rounded-3xl"></div>
//             <div className="absolute inset-0 flex items-center justify-center">
//               <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
//                 className="w-64 h-64 border border-blue-500/20 rounded-full"></motion.div>
//               <motion.div animate={{ rotate: [360, 0] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
//                 className="absolute w-48 h-48 border border-cyan-500/20 rounded-full"></motion.div>
//               <Brain className="absolute h-20 w-20 text-cyan-400" />
//             </div>
//             <div className="absolute top-8 left-8 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
//               <span className="text-cyan-400 font-bold text-xl italic">HighPath</span><span className="text-blue-400 font-bold text-xl">AI</span>
//             </div>
//           </motion.div>

//           {/* Right content */}
//           <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2 italic">Building AI Ecosystem</h2>
//             <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">That Align With Your Organization</h3>
//             <p className="text-slate-400 text-lg leading-relaxed mb-10">
//               <strong className="text-white">HighPathAI</strong> is our dedicated center of excellence, to help enterprises navigate the AI revolution. From custom LLMs to automated workflows, we move your business beyond the hype into practical, revenue-generating AI implementation.
//             </p>

//             <div className="grid md:grid-cols-3 gap-4">
//               {cards.map((c, i) => (
//                 <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
//                   className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-colors">
//                   <c.icon className="h-8 w-8 text-cyan-400 mb-4" />
//                   <h4 className="font-bold text-white mb-3">{c.title}</h4>
//                   <ul className="space-y-2">
//                     {c.items.map((item, j) => (
//                       <li key={j} className="flex items-center gap-2 text-sm text-slate-400">
//                         <CheckCheck className="h-4 w-4 text-cyan-500" />{item}
//                       </li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

/* ─── Portfolio Section ─── */
const PortfolioSection = () => {
  const projects = [
    { title: 'E-Commerce Platform', cat: 'Web Development', image: '/images/portfolio-1.jpg', stat: '300% Sales Increase' },
    { title: 'FinTech Mobile App', cat: 'Mobile Development', image: '/images/portfolio-2.jpg', stat: '500K+ Downloads' },
    { title: 'Brand Launch Campaign', cat: 'Digital Marketing', image: '/images/portfolio-3.jpg', stat: '10M+ Reach' },
    { title: 'Healthcare SaaS', cat: 'Cloud Solutions', image: '/images/services-web.jpg', stat: '500K+ Patients' },
  ];

  return (
    <section id="portfolio" className="py-15 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <span className="inline-block px-5 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6">Our Work</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
            Featured <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }} className="group">
              <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs mb-3">{p.cat}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold"><TrendingUp className="h-4 w-4" />{p.stat}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
// Blog section
const BlogSection = () => {
  return (
    <section className="bg-slate-50 py-20 lg:py-15">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-4 inline-block rounded-full border border-[#06bcc9]/30 bg-[#06bcc9]/10 px-4 py-2 text-sm font-semibold text-[#06bcc9]">
              Latest Insights
            </span>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
              Our Latest <span className="text-[#06bcc9]">Blogs</span>
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
              Discover the latest insights, strategies and ideas to help your
              business grow digitally.
            </p>
          </div>

          {/* <a
            href="/blog"
            className="group inline-flex items-center gap-2 font-semibold text-[#06bcc9]"
          >
            View All Blogs
            <ArrowRight className="h-5 w-5" />
          </a> */}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {[
            {
              title: "How Custom Web Development Can Transform Your Business",
              category: "Web Development",
              image: "/images/services-web.jpg",
              readTime: "8 min read",
            },
            {
              title: "Mobile App Development Trends Every Business Should Know",
              category: "App Development",
              image: "/images/app-img.png",
              readTime: "6 min read",
            },
            {
              title: "How to Generate High-Quality Leads for Your Business",
              category: "Lead Generation",
              image: "/images/lead-img.png",
              readTime: "7 min read",
            },
            {
              title: "Social Media Strategies That Drive Business Growth",
              category: "Social Media",
              image: "/images/social-img.png",
              readTime: "5 min read",
            },
          ].map((blog, index) => (
            <motion.a
              key={index}
              href="/blog"
              whileHover={{ y: -8 }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-200/60 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#06bcc9] shadow-md">
                  {blog.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
                  <Clock className="h-4 w-4 text-[#06bcc9]" />
                  {blog.readTime}
                </div>

                <h3 className="mb-3 text-xl font-bold leading-snug text-slate-900 group-hover:text-[#06bcc9]">
                  {blog.title}
                </h3>

                <div className="mt-auto flex items-center gap-2 font-semibold text-[#06bcc9]">
                  Read More
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </motion.a>
          ))}

        </div>

        <div className="mt-12 text-center">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-[#06bcc9] px-8 py-4 font-semibold text-white transition-all hover:bg-[#049ca7]"
          >
            View All Blogs
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

      </div>
    </section>
  );
};
/* ─── About ─── */
const AboutSection = () => (
  <section id="about" className="py-15 bg-slate-50">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img src="/images/about-team.jpg" alt="Team" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5"><div className="text-3xl font-bold text-white">12+</div><div className="text-white/70 text-sm">Years</div></div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5"><div className="text-3xl font-bold text-white">98%</div><div className="text-white/70 text-sm">Satisfaction</div></div>
              </div>
            </div>
          </div>
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-100 rounded-xl"><TrendingUp className="h-6 w-6 text-emerald-600" /></div>
              <div><div className="text-2xl font-bold text-slate-900">250%</div><div className="text-sm text-slate-600">Average ROI</div></div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <span className="inline-block px-5 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6">About HighPath Solutions</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            Pioneering the Future of <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Digital Excellence</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Since 2012, High Path Media has been at the forefront of digital transformation. We combine deep technical expertise with creative marketing to build solutions that transform businesses.
          </p>
          <div className="grid grid-cols-2 gap-5">
            {[
              { icon: Award, title: 'Industry Leaders', desc: '50+ awards' },
              { icon: Users, title: 'Expert Team', desc: '200+ professionals' },
              { icon: Globe, title: 'Global Reach', desc: '30+ countries' },
              { icon: Rocket, title: 'Agile Delivery', desc: 'Rapid deployment' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-2.5 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl"><item.icon className="h-5 w-5 text-white" /></div>
                <div><h4 className="font-semibold text-slate-900 text-sm">{item.title}</h4><p className="text-xs text-slate-500">{item.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── Team ─── */

// const TeamSection = () => {
//   const team = [
//     { name: 'Alex Mitchell', role: 'CEO & Founder', image: '/images/ceo.jpg' },
//     { name: 'Sarah Chen', role: 'CTO', image: '/images/cto.jpg' },
//     { name: 'Michael Rivera', role: 'Head of Marketing', image: '/images/marketing-head.jpg' },
//     { name: 'Emily Zhang', role: 'VP of Design', image: '/images/design-head.jpg' },
//   ];

//   return (
//     <section id="team" className="py-32 bg-white">
//       <div className="mx-auto max-w-7xl px-6">
//         <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
//           <span className="inline-block px-5 py-2 bg-emerald-50 text-emerald-600 rounded-full text-sm font-semibold mb-6">Our Team</span>
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Meet the <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Experts</span></h2>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {team.map((m, i) => (
//             <motion.div key={i} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//               transition={{ delay: i * 0.15, duration: 0.8 }} className="group">
//               <motion.div whileHover={{ y: -12 }} className="rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all">
//                 <div className="aspect-square overflow-hidden relative">
//                   <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
//                 </div>
//                 <div className="p-6 text-center">
//                   <h3 className="text-lg font-bold text-slate-900">{m.name}</h3>
//                   <p className="text-blue-600 font-medium text-sm">{m.role}</p>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

/* ─── Testimonials ─── */
const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const items = [
    { name: 'Sarah Johnson', role: 'CEO, TechStart', text: 'HighPath Solutions transformed our entire digital presence. Their innovative approach increased our leads by 300% in just 3 months.' },
    { name: 'Michael Chen', role: 'CTO, GlobalFin', text: 'The custom platform they built handles millions of transactions daily with zero downtime. Unmatched technical expertise.' },
    { name: 'Emily Rodriguez', role: 'Director, StyleCo', text: 'Their social media strategy took our brand from unknown to industry leader. The ROI speaks for itself — pure excellence.' },
  ];

  useEffect(() => { const t = setInterval(() => setActive(p => (p + 1) % items.length), 5000); return () => clearInterval(t); }, []);

  return (
    <section className="py-15 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[150px]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Words From Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">C-Suite Partners</span></h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40 }} transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
              <Quote className="h-14 w-14 text-blue-400/30 mb-6" />
              <div className="flex gap-1 mb-6">{[...Array(5)].map((_, j) => <Star key={j} className="h-5 w-5 text-amber-400 fill-amber-400" />)}</div>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">"{items[active].text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-lg font-bold">{items[active].name[0]}</div>
                <div><div className="text-lg font-semibold text-white">{items[active].name}</div><div className="text-white/60">{items[active].role}</div></div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-3 mt-8">
            {items.map((_, i) => <button key={i} onClick={() => setActive(i)} className={`h-2 rounded-full transition-all ${active === i ? 'bg-blue-500 w-8' : 'bg-white/20 w-2 hover:bg-white/40'}`} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Partners Marquee ─── */
const PartnersSection = () => {
  const partners = ['AWS', 'Microsoft Azure', 'Google Cloud', 'Salesforce', 'Adobe', 'Oracle', 'Docker', 'Kubernetes', 'HubSpot', 'Snowflake', 'Stripe', 'Red Hat'];
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-10">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Strategic Alliances that Power Innovation</h2>
      </div>
      <div className="overflow-hidden">
        <motion.div className="flex gap-6" animate={{ x: [0, -1200] }} transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}>
          {[...partners, ...partners, ...partners].map((p, i) => (
            <div key={i} className="flex-shrink-0 px-8 py-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
              <span className="font-semibold text-slate-600 whitespace-nowrap">{p}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ─── CTA ─── */
const CTASection = () => (
  <section className="py-15 relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600">
    <div className="absolute inset-0">
      {[...Array(15)].map((_, i) => (
        <motion.div key={i} className="absolute bg-white/5 rounded-full" style={{ width: Math.random() * 80 + 40, height: Math.random() * 80 + 40, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }} transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }} />
      ))}
    </div>
    <div className="mx-auto max-w-4xl px-6 text-center relative">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Enterprise technology succeeds when architecture, intelligence, and execution align.</h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Connect with HighPath Solutions consulting and engineering teams to build systems that last, scale responsibly, and stand up to real-world complexity.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#contact"><MagneticButton className="px-10 py-5 bg-white text-blue-600 font-bold rounded-full shadow-2xl flex items-center gap-2">
            Schedule Consultation <ArrowRight className="h-5 w-5" />
          </MagneticButton></a>
          <a href="#portfolio"><motion.button whileHover={{ scale: 1.05 }} className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30">View Our Work</motion.button></a>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── Contact ─── */
const ContactSection = () => (
  <section id="contact" className="py-15 bg-slate-50">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid lg:grid-cols-2 gap-20">
        <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="inline-block px-5 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Let's Start a <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Conversation</span></h2>
          <p className="text-lg text-slate-600 mb-10">Have a project in mind? We'd love to hear about it.</p>
          <div className="space-y-5">
            {[
              { icon: Mail, title: 'Email Us', value: 'info@highpathsolutions.com' },
              { icon: Phone, title: 'Call Us', value: '+1 (555) 123-4567' },
              { icon: MapPin, title: 'Visit Us', value: '123 Tech Street, San Francisco, CA' },
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ x: 8 }} className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-pointer">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl"><c.icon className="h-5 w-5 text-white" /></div>
                <div><h4 className="font-semibold text-slate-900">{c.title}</h4><p className="text-slate-600 text-sm">{c.value}</p></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl">
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div><label className="block text-sm font-semibold text-slate-900 mb-2">First Name</label><input type="text" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="" /></div>
                <div><label className="block text-sm font-semibold text-slate-900 mb-2">Last Name</label><input type="text" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="" /></div>
              </div>
              <div><label className="block text-sm font-semibold text-slate-900 mb-2">Email</label><input type="email" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="" /></div>
              <div><label className="block text-sm font-semibold text-slate-900 mb-2">Service</label>
                <select className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-600">
                  <option>Select Services</option><option>Web Development</option><option>Mobile Apps</option><option>Lead Generation</option><option>Social Media Management</option><option>Branding</option>
                </select>
              </div>
              <div><label className="block text-sm font-semibold text-slate-900 mb-2">Message</label><textarea rows={3} className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" placeholder=""></textarea></div>
              <MagneticButton className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2">
                <Send className="h-5 w-5" /> Send Message
              </MagneticButton>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── Footer ─── */


/* ─── Main App ─── */
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <CalendlySection/>
      {/* <AISection /> */}
      <IndustriesSection />
      <BlogSection />
      <PortfolioSection />
      <AboutSection />
      {/* <TeamSection /> */}
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
      <ContactSection />
       <WhatsAppButton />
      {/* <ChatWidget /> */}
    </div>
  );
}
