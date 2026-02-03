import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Cloud } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${
      scrolled
        ? 'bg-white/70 backdrop-blur-xl py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border-b border-white/20'
        : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <motion.div
              animate={{
                y: [0, -4, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-gradient-to-br from-cloudy-primary to-cloudy-purple p-2.5 rounded-2xl shadow-lg shadow-cloudy-primary/30 group-hover:shadow-cloudy-primary/50 transition-all duration-500"
            >
              <Cloud className="text-white" size={24} />
            </motion.div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-cloudy-accent rounded-full border-2 border-white shadow-sm"></div>
          </div>
          <span className="text-2xl font-serif font-black text-cloudy-primary tracking-tight bg-clip-text">
            Cloudy Cup
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          <div className="flex items-center space-x-1 px-1 py-1 bg-white/30 backdrop-blur-md rounded-full border border-white/50">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all relative overflow-hidden group ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-gray-600 hover:text-cloudy-primary'
                }`}
              >
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gradient-to-r from-cloudy-primary to-cloudy-purple z-0 shadow-md shadow-cloudy-primary/20"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative group p-3 bg-white/50 backdrop-blur-md rounded-2xl border border-white hover:border-cloudy-primary/30 hover:shadow-xl transition-all duration-300">
              <ShoppingCart className="text-cloudy-primary group-hover:scale-110 transition-transform duration-300" size={22} />
              <span className="absolute -top-1 -right-1 bg-cloudy-pink text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm border-2 border-white">
                2
              </span>
            </button>
            <Link to="/menu" className="btn-primary py-3 px-8 text-sm shadow-xl shadow-cloudy-primary/20 hover:shadow-2xl hover:shadow-cloudy-primary/30 hover:-translate-y-0.5 transition-all">
              Order Online
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center space-x-4">
          <button className="relative p-3 bg-white/50 backdrop-blur-md rounded-xl border border-white shadow-sm">
            <ShoppingCart className="text-cloudy-primary" size={22} />
            <span className="absolute -top-1 -right-1 bg-cloudy-pink text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
              2
            </span>
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className={`p-3 rounded-xl transition-all duration-300 ${
              isOpen ? 'bg-cloudy-primary text-white' : 'bg-white shadow-md text-cloudy-primary'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl shadow-2xl border-t border-cloudy-mist overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  key={link.name}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between p-4 rounded-2xl font-bold text-lg transition-all ${
                      location.pathname === link.path
                        ? 'bg-cloudy-mist/30 text-cloudy-primary'
                        : 'text-gray-400 hover:text-cloudy-primary hover:bg-cloudy-mist/10'
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && <div className="w-2 h-2 rounded-full bg-cloudy-primary"></div>}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <Link
                  to="/menu"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full text-center py-5 rounded-2xl text-lg font-bold shadow-xl shadow-cloudy-primary/20"
                >
                  Order Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
