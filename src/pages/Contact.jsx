import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock, ArrowRight, Instagram, Twitter, Facebook } from 'lucide-react';

const Contact = () => {
  const stores = [
    { name: 'Dreamy Downtown', address: '456 Main St, Cloud City', phone: '+1 (555) 123-4567' },
    { name: 'Serene Suburb', address: '789 Oak Ave, Dreamland', phone: '+1 (555) 987-6543' },
  ];

  return (
    <div className="relative min-h-screen pt-40 pb-32 bg-cloudy-bg overflow-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-cloudy-secondary/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[35%] h-[35%] bg-cloudy-accent/10 rounded-full blur-[120px] animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6">
        <header className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md px-6 py-2 rounded-full border border-white shadow-sm mb-6"
          >
            <span className="text-cloudy-primary font-poppins font-black uppercase tracking-[0.3em] text-[10px]">Contact Us</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title text-center"
          >
            Let&apos;s <span className="text-cloudy-accent italic">Connect</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 font-poppins text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Have a question or just want to share your Cloudy Cup moment? We&apos;d love to hear from you.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Contact Info & Stores */}
          <div className="lg:col-span-5 space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="glass-card p-10 group hover:-translate-y-2 transition-all duration-500">
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-cloudy-primary shadow-lg border border-cloudy-mist group-hover:bg-cloudy-primary group-hover:text-white transition-all duration-500 mb-8">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-serif font-black text-cloudy-text mb-4">Email Us</h3>
                <p className="text-gray-400 font-semibold text-sm leading-relaxed">
                  hello@cloudycup.com<br />support@cloudycup.com
                </p>
              </div>

              <div className="glass-card p-10 group hover:-translate-y-2 transition-all duration-500">
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-cloudy-primary shadow-lg border border-cloudy-mist group-hover:bg-cloudy-primary group-hover:text-white transition-all duration-500 mb-8">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl font-serif font-black text-cloudy-text mb-4">Call Us</h3>
                <p className="text-gray-400 font-semibold text-sm leading-relaxed">
                  +1 (555) 789-1234<br />Mon-Fri, 9am-6pm
                </p>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-xl p-12 rounded-[4rem] border border-white shadow-xl shadow-cloudy-primary/5">
              <h3 className="text-2xl font-serif font-black text-cloudy-text mb-10 flex items-center">
                <MapPin className="mr-4 text-cloudy-accent" size={28} />
                Our Cloud Locations
              </h3>
              <div className="space-y-10">
                {stores.map((store, i) => (
                  <div key={i} className="group cursor-pointer">
                    <h4 className="font-serif font-black text-xl text-cloudy-text group-hover:text-cloudy-primary transition-colors">{store.name}</h4>
                    <p className="text-gray-400 font-semibold text-sm mt-2">{store.address}</p>
                    <p className="text-cloudy-primary font-black text-xs mt-2 uppercase tracking-widest">{store.phone}</p>
                    <div className="w-full h-px bg-cloudy-mist/50 mt-6 group-last:hidden"></div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-10 py-5 bg-white border-2 border-cloudy-mist rounded-2xl text-cloudy-primary font-black flex items-center justify-center group hover:bg-cloudy-primary hover:text-white hover:border-cloudy-primary transition-all shadow-sm active:scale-95">
                <span>Find Near Me</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </div>

            <div className="bg-gradient-to-br from-cloudy-primary to-cloudy-purple p-12 rounded-[4rem] text-white shadow-2xl shadow-cloudy-primary/20 relative overflow-hidden group">
               <Clock className="absolute -right-8 -bottom-8 text-white/10 group-hover:scale-110 transition-transform duration-1000" size={200} />
               <h3 className="text-2xl font-serif font-black mb-10 relative z-10">Opening Hours</h3>
               <div className="space-y-6 relative z-10">
                 <div className="flex justify-between items-center pb-6 border-b border-white/10">
                   <span className="text-white/70 font-bold text-sm">Monday - Friday</span>
                   <span className="font-black text-lg">9 AM - 9 PM</span>
                 </div>
                 <div className="flex justify-between items-center">
                   <span className="text-white/70 font-bold text-sm">Saturday - Sunday</span>
                   <span className="font-black text-lg">10 AM - 10 PM</span>
                 </div>
               </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-cloudy-primary hover:bg-cloudy-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg border border-cloudy-mist">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 md:p-20 rounded-[5rem] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)] border border-cloudy-mist relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-cloudy-mist/20 rounded-full -mr-40 -mt-40 blur-3xl"></div>

              <h2 className="text-4xl font-serif font-black text-cloudy-text mb-12 relative z-10">Send a Magic Message</h2>
              <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-cloudy-primary uppercase tracking-[0.25em] ml-2">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Alice Wonderland"
                      className="w-full px-10 py-5 bg-cloudy-bg border-2 border-transparent rounded-2xl font-semibold text-cloudy-text focus:bg-white focus:border-cloudy-primary/30 transition-all outline-none shadow-inner"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-cloudy-primary uppercase tracking-[0.25em] ml-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="alice@clouds.com"
                      className="w-full px-10 py-5 bg-cloudy-bg border-2 border-transparent rounded-2xl font-semibold text-cloudy-text focus:bg-white focus:border-cloudy-primary/30 transition-all outline-none shadow-inner"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black text-cloudy-primary uppercase tracking-[0.25em] ml-2">Subject</label>
                  <div className="relative">
                    <select className="w-full px-10 py-5 bg-cloudy-bg border-2 border-transparent rounded-2xl font-semibold text-cloudy-text focus:bg-white focus:border-cloudy-primary/30 transition-all outline-none shadow-inner appearance-none cursor-pointer">
                      <option>Just saying hi!</option>
                      <option>Menu questions</option>
                      <option>Business inquiry</option>
                      <option>Feedback</option>
                    </select>
                    <div className="absolute right-10 top-1/2 -translate-y-1/2 pointer-events-none text-cloudy-primary">
                      <ArrowRight size={20} className="rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black text-cloudy-primary uppercase tracking-[0.25em] ml-2">Message</label>
                  <textarea
                    rows="6"
                    placeholder="What's on your mind today?"
                    className="w-full px-10 py-5 bg-cloudy-bg border-2 border-transparent rounded-2xl font-semibold text-cloudy-text focus:bg-white focus:border-cloudy-primary/30 transition-all outline-none resize-none shadow-inner"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-6 text-xl shadow-2xl shadow-cloudy-primary/20 flex items-center justify-center space-x-4 group"
                >
                  <span className="font-black">Send Message</span>
                  <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
