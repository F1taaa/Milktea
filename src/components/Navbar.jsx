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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="bg-cloudy-pink p-2 rounded-full group-hover:rotate-12 transition-transform">
            <Cloud className="text-cloudy-brown" size={24} />
          </div>
          <span className="text-2xl font-serif font-bold text-cloudy-brown tracking-tight">Cloudy Cup</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-poppins font-medium transition-colors hover:text-cloudy-brown ${location.pathname === link.path ? 'text-cloudy-brown' : 'text-gray-600'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/menu" className="bg-cloudy-brown text-white px-6 py-2 rounded-full font-poppins font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg">
            Order Now
          </Link>
          <div className="relative cursor-pointer group">
            <ShoppingCart className="text-cloudy-brown group-hover:scale-110 transition-transform" size={24} />
            <span className="absolute -top-2 -right-2 bg-cloudy-pink text-cloudy-brown text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border border-cloudy-brown/20">
              0
            </span>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <div className="relative">
            <ShoppingCart className="text-cloudy-brown" size={24} />
            <span className="absolute -top-2 -right-2 bg-cloudy-pink text-cloudy-brown text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="text-cloudy-brown">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-poppins font-medium ${location.pathname === link.path ? 'text-cloudy-brown' : 'text-gray-600'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/menu"
                onClick={() => setIsOpen(false)}
                className="bg-cloudy-brown text-white text-center py-3 rounded-xl font-poppins font-medium"
              >
                Order Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
