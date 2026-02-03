import { motion } from 'framer-motion';
import { Leaf, Award, Heart, Sparkles, ArrowRight, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import bobaImg from '../assets/boba.png';
import toppingsImg from '../assets/toppings.jpg';

const About = () => {
  const values = [
    {
      icon: <Leaf className="text-cloudy-primary" size={32} />,
      title: 'Ethically Sourced',
      description: 'We partner with local farmers to ensure our tea leaves are the freshest and most sustainable.'
    },
    {
      icon: <Award className="text-cloudy-accent" size={32} />,
      title: 'Premium Quality',
      description: 'Only the highest grade of tea and organic milk make it into your Cloudy Cup.'
    },
    {
      icon: <Heart className="text-cloudy-secondary" size={32} />,
      title: 'Made with Love',
      description: 'Every drink is handcrafted by our expert baristas who are passionate about their craft.'
    },
    {
      icon: <Sparkles className="text-cloudy-purple" size={32} />,
      title: 'Always Fresh',
      description: 'Our pearls are cooked every 4 hours to guarantee the perfect chewy texture every time.'
    }
  ];

  return (
    <div className="relative min-h-screen pt-40 pb-32 bg-cloudy-bg overflow-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cloudy-secondary/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-cloudy-accent/10 rounded-full blur-[120px] animate-pulse animation-delay-2000"></div>
        <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] bg-cloudy-primary/10 rounded-full blur-[100px] animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-48">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img src={toppingsImg} alt="Fresh milk tea ingredients" className="w-full h-[650px] object-cover" />
            </div>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 -right-12 w-80 h-80 rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl hidden md:block"
            >
              <img src={bobaImg} alt="Premium boba pearls" className="w-full h-full object-cover" />
            </motion.div>

            {/* Decorative blobs */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cloudy-secondary/30 rounded-full blur-3xl -z-10 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-cloudy-primary/10 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <span className="section-subtitle">Our Journey</span>
              <h1 className="section-title">
                A Little Piece of <span className="text-cloudy-accent italic">Heaven</span> in Every Sip
              </h1>
            </div>

            <div className="space-y-8">
              <p className="text-gray-500 text-lg font-poppins leading-relaxed max-w-xl">
                Cloudy Cup started as a small dream in a cozy kitchen. Our founder wanted to recreate the feeling of looking at a clear blue sky—calm, peaceful, and infinitely beautiful—through the medium of milk tea.
              </p>

              <div className="relative p-10 bg-white shadow-xl shadow-cloudy-primary/5 rounded-[3rem] border border-cloudy-mist/50 group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cloudy-mist/20 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-cloudy-mist/30 transition-colors"></div>
                <Cloud className="text-cloudy-primary/20 mb-4" size={40} />
                <p className="text-cloudy-text text-xl font-serif font-bold italic relative z-10 leading-relaxed">
                  &quot;We don&apos;t just sell tea; we sell moments of serenity in a busy world. Every cup is a cloud of joy.&quot;
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12 pt-4">
              <div>
                <h4 className="text-5xl font-serif font-black text-cloudy-primary mb-2">10k+</h4>
                <p className="text-gray-400 font-poppins text-[10px] uppercase tracking-[0.2em] font-black">Happy Sippers</p>
              </div>
              <div>
                <h4 className="text-5xl font-serif font-black text-cloudy-accent mb-2">15+</h4>
                <p className="text-gray-400 font-poppins text-[10px] uppercase tracking-[0.2em] font-black">Signature Blends</p>
              </div>
            </div>

            <div className="pt-6">
              <Link to="/menu" className="btn-primary inline-flex items-center space-x-3 group">
                <span>Explore Our Menu</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-48 relative">
          <div className="text-center mb-24">
            <span className="section-subtitle">Why Choose Us</span>
            <h2 className="section-title">Our Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cloudy-primary to-cloudy-purple mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-10 group hover:-translate-y-3 transition-all duration-500"
              >
                <div className="bg-white w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500 mb-8 border border-cloudy-mist">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-serif font-black text-cloudy-text mb-4 group-hover:text-cloudy-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 font-poppins text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-cloudy-primary to-cloudy-accent p-12 md:p-24 rounded-[5rem] text-center relative overflow-hidden shadow-2xl shadow-cloudy-primary/20"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cloudy-day.png')] opacity-10"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cloudy-secondary/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl md:text-7xl font-serif font-black text-white leading-tight max-w-4xl mx-auto">Ready for a taste <br /> of the clouds?</h2>
            <p className="text-white/80 text-xl font-poppins max-w-2xl mx-auto leading-relaxed">
              Visit our nearest shop or order online for a dreamy experience delivered to your door. Your cloudy moment awaits.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <Link to="/menu" className="w-full sm:w-auto bg-white text-cloudy-primary px-12 py-5 rounded-2xl font-poppins font-black text-lg hover:shadow-2xl transition-all hover:-translate-y-1 active:scale-95">
                Order Online
              </Link>
              <Link to="/contact" className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-12 py-5 rounded-2xl font-poppins font-black text-lg hover:bg-white hover:text-cloudy-primary transition-all active:scale-95">
                Visit Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
