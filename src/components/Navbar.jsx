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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/70 backdrop-blur-xl py-3 shadow-lg shadow-black/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="bg-cloudy-primary p-2.5 rounded-2xl group-hover:rotate-[15deg] transition-all duration-500 shadow-md group-hover:shadow-cloudy-primary/20">
            <Cloud className="text-white" size={24} />
          </div>
          <span className="text-2xl font-serif font-bold text-cloudy-primary tracking-tight">Cloudy Cup</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-poppins font-semibold text-sm transition-all relative group ${location.pathname === link.path ? 'text-cloudy-primary' : 'text-gray-500 hover:text-cloudy-primary'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-cloudy-primary transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-6 pl-6 border-l border-gray-100">
            <button className="relative group p-2">
              <ShoppingCart className="text-cloudy-primary group-hover:scale-110 transition-transform duration-300" size={24} />
              <span className="absolute -top-1 -right-1 bg-cloudy-accent text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm border-2 border-white">
                0
              </span>
            </button>
            <Link to="/menu" className="btn-primary py-2.5 px-7 text-sm shadow-cloudy-primary/10">
              Order Now
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button className="relative p-2">
            <ShoppingCart className="text-cloudy-primary" size={24} />
            <span className="absolute -top-1 -right-1 bg-cloudy-accent text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-cloudy-primary bg-white rounded-xl shadow-sm border border-gray-50"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-50 overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-poppins font-bold ${location.pathname === link.path ? 'text-cloudy-primary' : 'text-gray-400'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/menu"
                onClick={() => setIsOpen(false)}
                className="btn-primary text-center py-4 text-lg"
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
