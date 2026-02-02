import { Link } from 'react-router-dom';
import { Cloud, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cloudy-cream border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Cloud className="text-cloudy-brown" size={28} />
              <span className="text-2xl font-serif font-bold text-cloudy-brown">Cloudy Cup</span>
            </Link>
            <p className="text-gray-500 font-poppins text-sm leading-relaxed">
              Crafting dreamy milk tea experiences since 2024. Our mission is to bring a little piece of heaven to your daily routine.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="bg-white p-2 rounded-full text-cloudy-brown hover:bg-cloudy-pink transition-colors shadow-sm">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white p-2 rounded-full text-cloudy-brown hover:bg-cloudy-pink transition-colors shadow-sm">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white p-2 rounded-full text-cloudy-brown hover:bg-cloudy-pink transition-colors shadow-sm">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cloudy-brown font-serif font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-500 hover:text-cloudy-brown transition-colors">Home</Link></li>
              <li><Link to="/menu" className="text-gray-500 hover:text-cloudy-brown transition-colors">Menu</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-cloudy-brown transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-cloudy-brown transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-cloudy-brown font-serif font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-cloudy-brown transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-500 hover:text-cloudy-brown transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-cloudy-brown transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-cloudy-brown transition-colors">Shipping Info</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cloudy-brown font-serif font-bold text-lg mb-6">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-500">
                <MapPin className="text-cloudy-brown shrink-0" size={20} />
                <span>123 Dreamy Lane, Cloud City, CC 54321</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-500">
                <Phone className="text-cloudy-brown shrink-0" size={20} />
                <span>+1 (555) 789-1234</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-500">
                <Mail className="text-cloudy-brown shrink-0" size={20} />
                <span>hello@cloudycup.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm font-poppins">
            &copy; {new Date().getFullYear()} Cloudy Cup. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm font-poppins italic">
            Made with love and boba.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
