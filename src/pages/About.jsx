import { motion } from 'framer-motion';
import { Leaf, Award, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import bobaImg from '../assets/boba.png';
import toppingsImg from '../assets/toppings.jpg';

const About = () => {
  const values = [
    {
      icon: <Leaf className="text-cloudy-success" size={32} />,
      title: 'Ethically Sourced',
      description: 'We partner with local farmers to ensure our tea leaves are the freshest and most sustainable.'
    },
    {
      icon: <Award className="text-cloudy-accent" size={32} />,
      title: 'Premium Quality',
      description: 'Only the highest grade of tea and organic milk make it into your Cloudy Cup.'
    },
    {
      icon: <Heart className="text-rose-400" size={32} />,
      title: 'Made with Love',
      description: 'Every drink is handcrafted by our expert baristas who are passionate about their craft.'
    },
    {
      icon: <Sparkles className="text-blue-400" size={32} />,
      title: 'Always Fresh',
      description: 'Our pearls are cooked every 4 hours to guarantee the perfect chewy texture every time.'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-cloudy-bg overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
              <img src={toppingsImg} alt="Our ingredients" className="w-full h-[600px] object-cover" />
            </div>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 -right-12 w-72 h-72 rounded-[3.5rem] overflow-hidden border-8 border-white shadow-2xl hidden md:block"
            >
              <img src={bobaImg} alt="Boba pearls" className="w-full h-full object-cover" />
            </motion.div>

            {/* Decorative blobs */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cloudy-secondary/40 rounded-full blur-3xl -z-10 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-cloudy-primary/10 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-50">
              <div className="w-2 h-2 bg-cloudy-accent rounded-full animate-pulse"></div>
              <span className="text-cloudy-primary font-poppins font-bold uppercase tracking-widest text-xs">Our Journey</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-cloudy-primary leading-[1.1]">
              A Little Piece of <span className="text-cloudy-accent italic">Heaven</span> in Every Sip
            </h1>
            <div className="space-y-6">
              <p className="text-gray-500 text-lg font-poppins leading-relaxed">
                Cloudy Cup started as a small dream in a cozy kitchen. Our founder wanted to recreate the feeling of looking at a clear blue sky—calm, peaceful, and infinitely beautiful—through the medium of milk tea.
              </p>
              <p className="text-gray-500 text-lg font-poppins leading-relaxed border-l-4 border-cloudy-secondary pl-6 italic">
                &quot;We don&apos;t just sell tea; we sell moments of serenity in a busy world.&quot;
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 pt-6">
              <div>
                <h4 className="text-5xl font-serif font-bold text-cloudy-primary mb-2">10k+</h4>
                <p className="text-gray-400 font-poppins text-xs uppercase tracking-widest font-bold">Happy Sippers</p>
              </div>
              <div>
                <h4 className="text-5xl font-serif font-bold text-cloudy-primary mb-2">15+</h4>
                <p className="text-gray-400 font-poppins text-xs uppercase tracking-widest font-bold">Unique Flavors</p>
              </div>
            </div>
            <div className="pt-6">
              <Link to="/menu" className="btn-primary inline-flex items-center space-x-3">
                <span>View Our Menu</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-[5rem] p-12 md:p-24 shadow-sm border border-gray-50 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cloudy-bg/50 rounded-full -mr-48 -mt-48 blur-3xl"></div>

          <div className="text-center mb-24 relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-cloudy-primary mb-6">Our Core Values</h2>
            <p className="text-gray-400 font-poppins text-lg max-w-2xl mx-auto">Excellence in every cup, kindness in every interaction.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-cloudy-bg w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500 mb-8">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-cloudy-primary mb-4 group-hover:text-cloudy-accent transition-colors">
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
          className="text-center space-y-10 py-20 bg-cloudy-primary rounded-[5rem] text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cloudy-day.png')] opacity-10"></div>
          <div className="relative z-10 space-y-6 px-6">
            <h2 className="text-5xl md:text-6xl font-serif font-bold">Ready for a taste of the clouds?</h2>
            <p className="text-cloudy-secondary text-xl font-poppins max-w-2xl mx-auto opacity-90">
              Visit our nearest shop or order online for a dreamy experience delivered to your door.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <Link to="/menu" className="bg-white text-cloudy-primary px-10 py-5 rounded-full font-poppins font-bold text-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                Order Online Now
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-poppins font-bold text-lg hover:bg-white hover:text-cloudy-primary transition-all">
                Find a Store
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
