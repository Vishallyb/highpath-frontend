import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

import {
  FaFacebookF,
  FaInstagram,
   FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6';

const Footer = () => {
  const footerLinks = {
    Services: [
      { name: 'Web Development', path: '/web-development' },
      { name: 'App Development', path: '/app-development' },
      { name: 'Lead Generation', path: '/lead-generation' },
      {
        name: 'Social Media Management',
        path: '/services/social-media-management',
      },
      { name: 'Branding', path: '/services/branding' },
      {
        name: 'Search Engine Optimization',
        path: '/services/search-engine',
      },
    ],

    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' },
    ],

    Legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ],
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: FaFacebookF,
      url: '#',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: '#',
    },
    // {
    //   name: 'LinkedIn',
    //   icon: FaLinkedinIn,
    //   url: '#',
    // },
    {
      name: 'X',
      icon: FaXTwitter,
      url: '#',
    },
    // {
    //   name: 'YouTube',
    //   icon: FaYoutube,
    //   url: '#',
    // },
  ];

  return (
    <footer className="bg-slate-950 text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1.5fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>

            <Link
              to="/"
              className="flex items-center"
            >
              <img
                src="/images/Highpath7.png"
                alt="Highpath"
                className="h-16 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 max-w-md leading-relaxed text-slate-400">
              Empowering businesses with cutting-edge technology and
              innovative marketing solutions. Your success is our mission.
            </p>

            {/* Contact Details */}
            <div className="mt-8 space-y-4">

              {/* Email */}
              <a
                href="mailto:info@highpathsolutions.com"
                className="flex items-center gap-3 text-slate-400 transition-colors hover:text-white"
              >
                <Mail className="h-5 w-5 shrink-0 text-[#06bcc9]" />

                <span>
                  info@highpathsolutions.com
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:(+1)5713531736"
                className="flex items-center gap-3 text-slate-400 transition-colors hover:text-white"
              >
                <Phone className="h-5 w-5 shrink-0 text-[#06bcc9]" />

                <span>
                  (+1)5713531736
                </span>
              </a>

            </div>

          </div>


          {/* Services */}
          <div>

            <h4 className="mb-5 font-semibold text-white">
              Services
            </h4>

            <ul className="space-y-3">

              {footerLinks.Services.map((link) => (
                <li key={link.name}>

                  <Link
                    to={link.path}
                    className="text-slate-400 transition-colors hover:text-[#06bcc9]"
                  >
                    {link.name}
                  </Link>

                </li>
              ))}

            </ul>

          </div>


          {/* Company */}
          <div>

            <h4 className="mb-5 font-semibold text-white">
              Company
            </h4>

            <ul className="space-y-3">

              {footerLinks.Company.map((link) => (
                <li key={link.name}>

                  <Link
                    to={link.path}
                    className="text-slate-400 transition-colors hover:text-[#06bcc9]"
                  >
                    {link.name}
                  </Link>

                </li>
              ))}

            </ul>

          </div>


          {/* Legal */}
          <div>

            <h4 className="mb-5 font-semibold text-white">
              Legal
            </h4>

            <ul className="space-y-3">

              {footerLinks.Legal.map((link) => (
                <li key={link.name}>

                  <Link
                    to={link.path}
                    className="text-slate-400 transition-colors hover:text-[#06bcc9]"
                  >
                    {link.name}
                  </Link>

                </li>
              ))}

            </ul>

          </div>


          {/* Follow Us */}
          <div>

            <h4 className="mb-5 font-semibold text-white">
              Follow Us
            </h4>

            <div className="flex flex-wrap gap-3">

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.1,
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-white transition-all duration-300 hover:bg-[#06bcc9]"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}

            </div>

          </div>

        </div>

      </div>


      {/* Bottom Bar */}
      <div className="border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">

          <p className="text-center text-sm text-slate-500 md:text-left">
            © {new Date().getFullYear()} HighPath Solutions. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;