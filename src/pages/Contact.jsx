import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-cloudy-brown mb-6">Let's Connect</h1>
          <p className="text-gray-500 font-poppins text-lg max-w-2xl mx-auto">Have a question, feedback, or just want to say hi? We'd love to hear from you!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-50 space-y-4">
                <div className="bg-cloudy-pink/30 w-12 h-12 rounded-xl flex items-center justify-center text-cloudy-brown">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-cloudy-brown">Location</h3>
                <p className="text-gray-500 font-poppins text-sm leading-relaxed">
                  123 Dreamy Lane, Cloud City,<br />CC 54321, Dreamland
                </p>
              </div>

              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-50 space-y-4">
                <div className="bg-cloudy-blue/30 w-12 h-12 rounded-xl flex items-center justify-center text-cloudy-brown">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-cloudy-brown">Phone</h3>
                <p className="text-gray-500 font-poppins text-sm leading-relaxed">
                  +1 (555) 789-1234<br />+1 (555) 000-1111
                </p>
              </div>

              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-50 space-y-4">
                <div className="bg-cloudy-purple/30 w-12 h-12 rounded-xl flex items-center justify-center text-cloudy-brown">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-cloudy-brown">Email</h3>
                <p className="text-gray-500 font-poppins text-sm leading-relaxed">
                  hello@cloudycup.com<br />support@cloudycup.com
                </p>
              </div>

              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-50 space-y-4">
                <div className="bg-green-50 w-12 h-12 rounded-xl flex items-center justify-center text-green-600">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-cloudy-brown">Hours</h3>
                <p className="text-gray-500 font-poppins text-sm leading-relaxed">
                  Mon-Fri: 9am - 9pm<br />Sat-Sun: 10am - 10pm
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-cloudy-blue/20 rounded-[3rem] relative overflow-hidden flex items-center justify-center border-4 border-white shadow-inner">
               <MapPin className="text-cloudy-brown/20" size={64} />
               <span className="absolute bottom-6 font-poppins font-medium text-cloudy-brown/40 uppercase tracking-widest text-sm text-center">Interactive Map Coming Soon</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 rounded-[4rem] shadow-sm border border-gray-50"
          >
            <h2 className="text-3xl font-serif font-bold text-cloudy-brown mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-poppins font-bold text-gray-400 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-cloudy-cream border-transparent rounded-2xl font-poppins focus:bg-white focus:ring-2 focus:ring-cloudy-pink transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-poppins font-bold text-gray-400 ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-cloudy-cream border-transparent rounded-2xl font-poppins focus:bg-white focus:ring-2 focus:ring-cloudy-pink transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-poppins font-bold text-gray-400 ml-1">Subject</label>
                <select className="w-full px-6 py-4 bg-cloudy-cream border-transparent rounded-2xl font-poppins focus:bg-white focus:ring-2 focus:ring-cloudy-pink transition-all outline-none appearance-none">
                  <option>General Inquiry</option>
                  <option>Feedback</option>
                  <option>Order Support</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-poppins font-bold text-gray-400 ml-1">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell us what's on your mind..."
                  className="w-full px-6 py-4 bg-cloudy-cream border-transparent rounded-2xl font-poppins focus:bg-white focus:ring-2 focus:ring-cloudy-pink transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cloudy-brown text-white py-5 rounded-2xl font-poppins font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg flex items-center justify-center space-x-3"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
