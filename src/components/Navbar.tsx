import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Website Development', path: '/web-development' },
    { name: 'App Development', path: '/app-development' },
    
    {
      name: 'Digital Marketing',
      path: '/services',
      children: [
        
        { name: 'Lead Generation', path: '/lead-generation' },
        { name: 'Search Engine Optimization', path: '/services/search-engine-optimization' },
        { name: 'Social Media Management', path: '/services/social-media-management',
        },
        { name: 'Branding', path: '/services/branding' },
      ],
    },
    // { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-2xl shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-1 py-2">
        <div className="flex items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <img
              src={
                scrolled
                  ? '/images/HighPath.png'
                  : '/images/Highpath7.png'
              }
              alt="highpath"
              className="h-12 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 ml-auto">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  link.children && setActiveDropdown(link.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors group flex items-center gap-1 ${
                    isActive(link.path)
                      ? 'text-[#06bcc9]'
                      : scrolled
                      ? 'text-slate-700 hover:text-[#06bcc9]'
                      : 'text-white hover:text-[#06bcc9]'
                  }`}
                >
                  {link.name}

                  {link.children && (
                    <ChevronDown className="h-4 w-4" />
                  )}

                  {isActive(link.path) && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 h-0.5 w-3/4 -translate-x-1/2 rounded-full bg-[#06bcc9]"
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children &&
                    activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="min-w-[220px] rounded-2xl border border-[#06bcc9]/10 bg-white py-2 shadow-2xl shadow-slate-200/50">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.path}
                              className={`block px-4 py-3 text-sm transition-all ${
                                isActive(child.path)
                                  ? 'bg-[#e6f9fa] text-[#06bcc9]'
                                  : 'text-slate-700 hover:bg-[#e6f9fa] hover:text-[#06bcc9]'
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Get Started Button */}
          <div className="hidden lg:flex items-center ml-4">
  <a
    href="https://wa.me/15713531736?text=Hello%2C%20I%20would%20like%20a%20free%20consultation."
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-[#06bcc9] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#06bcc9]/30 transition-all duration-300 hover:scale-105 hover:bg-[#0499a3] hover:shadow-xl hover:shadow-[#06bcc9]/40"
  >
    Free Consultation
  </a>
</div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden ml-auto rounded-xl p-2 transition-colors ${
              scrolled
                ? 'text-slate-800 hover:bg-[#e6f9fa]'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-[#06bcc9]/10 bg-white/95 backdrop-blur-xl"
          >
            <div className="max-h-[70vh] space-y-2 overflow-y-auto px-6 py-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className={`block rounded-xl px-4 py-3 font-medium transition-all ${
                      isActive(link.path)
                        ? 'bg-[#e6f9fa] text-[#06bcc9]'
                        : 'text-slate-700 hover:bg-[#e6f9fa] hover:text-[#06bcc9]'
                    }`}
                  >
                    {link.name}
                  </Link>

                  {link.children && (
                    <div className="space-y-1 pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className={`block rounded-xl px-4 py-2 text-sm transition-all ${
                            isActive(child.path)
                              ? 'bg-[#e6f9fa] text-[#06bcc9]'
                              : 'text-slate-600 hover:bg-[#e6f9fa] hover:text-[#06bcc9]'
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                to="/contact"
                className="mt-4 block w-full rounded-full bg-[#06bcc9] px-6 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-[#0499a3]"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;