import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
  const stores = [
    { name: 'Dreamy Downtown', address: '456 Main St, Cloud City', phone: '+1 (555) 123-4567' },
    { name: 'Serene Suburb', address: '789 Oak Ave, Dreamland', phone: '+1 (555) 987-6543' },
  ];

  return (
    <div className="pt-32 pb-24 bg-cloudy-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-cloudy-accent font-poppins font-bold uppercase tracking-[0.3em] text-xs"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-cloudy-primary"
          >
            Let&apos;s Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 font-poppins text-lg max-w-2xl mx-auto"
          >
            Have a question or just want to share your Cloudy Cup moment? We&apos;re all ears.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Contact Info & Stores */}
          <div className="lg:col-span-5 space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50 group hover:shadow-xl transition-all duration-500">
                <div className="bg-cloudy-secondary/20 w-14 h-14 rounded-2xl flex items-center justify-center text-cloudy-primary group-hover:bg-cloudy-primary group-hover:text-white transition-all duration-500 mb-6">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-cloudy-primary mb-2">Email Us</h3>
                <p className="text-gray-400 font-poppins text-sm leading-relaxed">
                  hello@cloudycup.com<br />support@cloudycup.com
                </p>
              </div>

              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50 group hover:shadow-xl transition-all duration-500">
                <div className="bg-cloudy-secondary/20 w-14 h-14 rounded-2xl flex items-center justify-center text-cloudy-primary group-hover:bg-cloudy-primary group-hover:text-white transition-all duration-500 mb-6">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-cloudy-primary mb-2">Call Us</h3>
                <p className="text-gray-400 font-poppins text-sm leading-relaxed">
                  +1 (555) 789-1234<br />Mon-Fri, 9am-6pm
                </p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-50">
              <h3 className="text-2xl font-serif font-bold text-cloudy-primary mb-8 flex items-center">
                <MapPin className="mr-3 text-cloudy-accent" size={24} />
                Our Cloud Locations
              </h3>
              <div className="space-y-8">
                {stores.map((store, i) => (
                  <div key={i} className="group cursor-pointer">
                    <h4 className="font-serif font-bold text-cloudy-primary group-hover:text-cloudy-accent transition-colors">{store.name}</h4>
                    <p className="text-gray-400 text-sm font-poppins mt-1">{store.address}</p>
                    <p className="text-gray-400 text-xs font-poppins mt-1">{store.phone}</p>
                    <div className="w-full h-px bg-gray-50 mt-4 group-last:hidden"></div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-4 border-2 border-cloudy-secondary rounded-2xl text-cloudy-primary font-poppins font-bold flex items-center justify-center group hover:bg-cloudy-secondary transition-all">
                <span>Find Near Me</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </div>

            <div className="bg-cloudy-primary p-10 rounded-[3rem] text-white shadow-xl relative overflow-hidden">
               <Clock className="absolute -right-4 -bottom-4 text-white/10" size={120} />
               <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">Opening Hours</h3>
               <div className="space-y-2 relative z-10">
                 <div className="flex justify-between text-sm font-poppins">
                   <span className="opacity-70">Monday - Friday</span>
                   <span className="font-bold">9:00 AM - 9:00 PM</span>
                 </div>
                 <div className="flex justify-between text-sm font-poppins">
                   <span className="opacity-70">Saturday - Sunday</span>
                   <span className="font-bold">10:00 AM - 10:00 PM</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-gray-50"
            >
              <h2 className="text-3xl font-serif font-bold text-cloudy-primary mb-10">Send a Magic Message</h2>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-poppins font-black text-cloudy-primary uppercase tracking-widest ml-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Alice Wonderland"
                      className="w-full px-8 py-5 bg-cloudy-bg border-2 border-transparent rounded-[2rem] font-poppins focus:bg-white focus:border-cloudy-secondary transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-poppins font-black text-cloudy-primary uppercase tracking-widest ml-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="alice@clouds.com"
                      className="w-full px-8 py-5 bg-cloudy-bg border-2 border-transparent rounded-[2rem] font-poppins focus:bg-white focus:border-cloudy-secondary transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-poppins font-black text-cloudy-primary uppercase tracking-widest ml-1">Subject</label>
                  <select className="w-full px-8 py-5 bg-cloudy-bg border-2 border-transparent rounded-[2rem] font-poppins focus:bg-white focus:border-cloudy-secondary transition-all outline-none appearance-none">
                    <option>Just saying hi!</option>
                    <option>Menu questions</option>
                    <option>Business inquiry</option>
                    <option>Feedback</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-poppins font-black text-cloudy-primary uppercase tracking-widest ml-1">Message</label>
                  <textarea
                    rows="6"
                    placeholder="What's on your mind today?"
                    className="w-full px-8 py-5 bg-cloudy-bg border-2 border-transparent rounded-[2rem] font-poppins focus:bg-white focus:border-cloudy-secondary transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-6 text-xl shadow-xl shadow-cloudy-primary/20 flex items-center justify-center space-x-4"
                >
                  <span>Send Message</span>
                  <Send size={24} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
