import { Link } from 'react-router-dom';
import { Cloud, Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white pt-32 pb-12 relative overflow-hidden border-t border-cloudy-mist">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cloudy-mist/20 rounded-full blur-[100px] -z-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cloudy-pink/20 rounded-full blur-[120px] -z-10 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ rotate: 15 }}
                className="bg-gradient-to-br from-cloudy-primary to-cloudy-purple p-2.5 rounded-2xl shadow-lg shadow-cloudy-primary/20"
              >
                <Cloud className="text-white" size={24} />
              </motion.div>
              <span className="text-2xl font-serif font-black text-cloudy-text tracking-tight">Cloudy Cup</span>
            </Link>
            <p className="text-gray-400 font-poppins text-base leading-relaxed max-w-xs">
              Crafting dreamy milk tea experiences since 2024. Our mission is to bring a little piece of heaven to your daily routine with every swirl.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 bg-cloudy-mist/30 rounded-2xl flex items-center justify-center text-cloudy-primary hover:bg-cloudy-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-cloudy-text font-serif font-black text-xl mb-8">Menu</h4>
            <ul className="space-y-4">
              {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-cloudy-primary font-semibold text-sm transition-all flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-cloudy-primary mr-0 group-hover:w-4 group-hover:mr-3 transition-all duration-300 rounded-full"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-cloudy-text font-serif font-black text-xl mb-8">Support</h4>
            <ul className="space-y-4">
              {['FAQs', 'Privacy Policy', 'Terms of Service', 'Gift Cards'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cloudy-primary font-semibold text-sm transition-all flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-cloudy-primary mr-0 group-hover:w-4 group-hover:mr-3 transition-all duration-300 rounded-full"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cloudy-text font-serif font-black text-xl mb-8">Visit Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 group">
                <div className="bg-cloudy-mist/50 p-2.5 rounded-xl text-cloudy-primary group-hover:scale-110 transition-transform shadow-sm">
                  <MapPin size={20} />
                </div>
                <span className="text-gray-400 font-semibold text-sm leading-relaxed">
                  123 Dreamy Lane, Cloud City,<br />CC 54321, Dreamland
                </span>
              </li>
              <li className="flex items-center space-x-4 group">
                <div className="bg-cloudy-mist/50 p-2.5 rounded-xl text-cloudy-primary group-hover:scale-110 transition-transform shadow-sm">
                  <Phone size={20} />
                </div>
                <span className="text-gray-400 font-semibold text-sm">+1 (555) 789-1234</span>
              </li>
              <li className="flex items-center space-x-4 group">
                <div className="bg-cloudy-mist/50 p-2.5 rounded-xl text-cloudy-primary group-hover:scale-110 transition-transform shadow-sm">
                  <Mail size={20} />
                </div>
                <span className="text-gray-400 font-semibold text-sm">hello@cloudycup.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cloudy-mist pt-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">
          <p>&copy; {new Date().getFullYear()} Cloudy Cup. Handcrafted with Love.</p>

          <div className="flex items-center space-x-2 text-cloudy-pink drop-shadow-sm">
            <span>Made for Boba Lovers</span>
            <Heart size={14} fill="currentColor" />
          </div>

          <div className="flex space-x-8">
            <a href="#" className="hover:text-cloudy-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-cloudy-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
