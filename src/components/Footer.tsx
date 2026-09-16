import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

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
      icon: (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },

    {
      name: 'Instagram',
      icon: (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="5"
            ry="5"
          />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line
            x1="17.5"
            y1="6.5"
            x2="17.51"
            y2="6.5"
          />
        </svg>
      ),
    },
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

              <a
                href="mailto:info@highpathsolutions.com"
                className="flex items-center gap-3 text-slate-400 transition-colors hover:text-white"
              >
                <Mail className="h-5 w-5 shrink-0 text-[#06bcc9]" />

                <span>
                  info@highpathsolutions.com
                </span>
              </a>

              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 text-slate-400 transition-colors hover:text-white"
              >
                <Phone className="h-5 w-5 shrink-0 text-[#06bcc9]" />

                <span>
                  +1 (555) 123-4567
                </span>
              </a>

              <div className="flex items-start gap-3 text-slate-400">

                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#06bcc9]" />

                <span>
                  123 Tech Street, San Francisco, CA
                </span>

              </div>

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

            <div className="flex gap-3">

              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-white transition-all duration-300 hover:bg-[#06bcc9]"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}

            </div>

          </div>

        </div>

      </div>


      {/* Bottom Bar */}
      <div className="border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">

          <p className="text-center text-sm text-slate-500 md:text-left">
            © {new Date().getFullYear()} HighPath Solutions. All rights reserved. Developed by <a href='https://lybtechnology.com/'><b>LYB Technology.</b></a>
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;