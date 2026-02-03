import Hero from '../components/Hero';
import Featured from '../components/Featured';
import Testimonials from '../components/Testimonials';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import milkteaPromotional from '../assets/milkteapromotional.mp4';
import { ArrowRight, Star, Heart, Coffee } from 'lucide-react';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />

      {/* Short About / Video Section */}
      <section className="py-32 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cloudy-mist/20 to-transparent -z-10"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-cloudy-pink/20 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[4rem] overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] h-[600px] border-8 border-white">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={milkteaPromotional} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-cloudy-primary/10 mix-blend-multiply"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white max-w-[200px] animate-float">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="p-2 bg-cloudy-pink rounded-lg text-white">
                    <Heart size={16} fill="currentColor" />
                  </div>
                  <span className="font-bold text-xs uppercase tracking-wider text-gray-400">Handcrafted</span>
                </div>
                <p className="text-cloudy-text font-serif font-bold text-sm">Made with love in every swirl</p>
              </div>
            </div>

            {/* Background Blob for the video */}
            <div className="absolute -z-10 -top-10 -left-10 w-full h-full bg-cloudy-mist/30 rounded-[4rem] rotate-3"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="section-subtitle">Our Philosophy</span>
              <h2 className="section-title">Crafting Memories, One Dreamy Cup at a Time</h2>
            </div>

            <p className="text-gray-500 text-lg font-poppins leading-relaxed max-w-xl">
              Our journey began with a simple dream: to bring the ethereal softness of a cloud to every sip of tea. We source the finest organic leaves and creamy milk to create a symphony of flavors.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cloudy-mist rounded-2xl text-cloudy-primary">
                  <Star size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-cloudy-text">Premium Quality</h4>
                  <p className="text-sm text-gray-400">Selected tea leaves</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cloudy-pink rounded-2xl text-cloudy-secondary">
                  <Coffee size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-cloudy-text">Unique Blends</h4>
                  <p className="text-sm text-gray-400">Signature recipes</p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex items-center space-x-6">
              <Link to="/about" className="btn-primary group flex items-center space-x-2">
                <span>Our Journey</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/menu" className="font-bold text-cloudy-primary hover:text-cloudy-accent transition-colors">
                View Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Featured />

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cloudy-primary via-cloudy-accent to-cloudy-purple rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-cloudy-primary/20"
          >
            {/* Animated background shapes */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-cloudy-secondary/20 rounded-full blur-2xl animate-blob"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-serif font-black text-white mb-8 leading-tight">
                Ready to Taste <br /> the Clouds?
              </h2>
              <p className="text-white/80 text-xl md:text-2xl font-poppins mb-12 max-w-2xl mx-auto leading-relaxed">
                Join our community of dreamers and experience the magic of Cloudy Cup today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  to="/menu"
                  className="w-full sm:w-auto bg-white text-cloudy-primary px-12 py-5 rounded-2xl font-poppins font-black text-xl hover:bg-cloudy-mist transition-all shadow-xl hover:-translate-y-1 active:scale-95"
                >
                  Order Online
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-poppins font-bold text-xl hover:bg-white/10 transition-all active:scale-95"
                >
                  Visit Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default Home;
