import { Link } from 'react-router-dom';
import { Cloud, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-cloudy-primary p-2 rounded-xl">
                <Cloud className="text-white" size={24} />
              </div>
              <span className="text-2xl font-serif font-bold text-cloudy-primary">Cloudy Cup</span>
            </Link>
            <p className="text-gray-500 font-poppins text-sm leading-relaxed max-w-xs">
              Crafting dreamy milk tea experiences since 2024. Our mission is to bring a little piece of heaven to your daily routine.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-cloudy-bg rounded-xl flex items-center justify-center text-cloudy-primary hover:bg-cloudy-primary hover:text-white transition-all duration-300 shadow-sm">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cloudy-primary font-serif font-bold text-lg mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Menu', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().split(' ')[0]}`} className="text-gray-500 hover:text-cloudy-primary font-poppins text-sm transition-colors flex items-center group">
                    <span className="w-0 h-0.5 bg-cloudy-primary mr-0 group-hover:w-3 group-hover:mr-2 transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-cloudy-primary font-serif font-bold text-lg mb-8">Support</h4>
            <ul className="space-y-4">
              {['FAQs', 'Privacy Policy', 'Terms of Service', 'Shipping Info'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-cloudy-primary font-poppins text-sm transition-colors flex items-center group">
                    <span className="w-0 h-0.5 bg-cloudy-primary mr-0 group-hover:w-3 group-hover:mr-2 transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cloudy-primary font-serif font-bold text-lg mb-8">Visit Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="bg-cloudy-secondary/30 p-2 rounded-lg text-cloudy-primary">
                  <MapPin size={18} />
                </div>
                <span className="text-gray-500 font-poppins text-sm leading-relaxed">
                  123 Dreamy Lane, Cloud City,<br />CC 54321, Dreamland
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="bg-cloudy-secondary/30 p-2 rounded-lg text-cloudy-primary">
                  <Phone size={18} />
                </div>
                <span className="text-gray-500 font-poppins text-sm">+1 (555) 789-1234</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="bg-cloudy-secondary/30 p-2 rounded-lg text-cloudy-primary">
                  <Mail size={18} />
                </div>
                <span className="text-gray-500 font-poppins text-sm">hello@cloudycup.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-400 text-xs font-poppins">
          <p>&copy; {new Date().getFullYear()} Cloudy Cup. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-cloudy-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-cloudy-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-cloudy-primary transition-colors">Cookies</a>
          </div>
          <p className="italic">Crafted with clouds and boba pearls.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
